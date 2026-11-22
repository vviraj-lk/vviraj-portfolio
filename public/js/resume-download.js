/**
 * Dynamic Resume Manager - Vajira Viraj Nanayakkarawasam
 * Loads the base PDF template, updates the date on Page 3 to the exact download date,
 * and triggers high-speed client-side PDF download or preview.
 */
(function (window, document) {
  'use strict';

  function getFormattedDate(date) {
    var d = date || new Date();
    var day = String(d.getDate()).padStart(2, '0');
    var month = String(d.getMonth() + 1).padStart(2, '0');
    var year = d.getFullYear();
    return day + '/' + month + '/' + year;
  }

  function getFilenameDate(date) {
    var d = date || new Date();
    var day = String(d.getDate()).padStart(2, '0');
    var month = String(d.getMonth() + 1).padStart(2, '0');
    var year = d.getFullYear();
    return day + '-' + month + '-' + year;
  }

  function updateDomDates() {
    var todayStr = getFormattedDate();
    var elements = document.querySelectorAll('[data-current-date]');
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent = todayStr;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateDomDates);
  } else {
    updateDomDates();
  }

  var cachedTemplateBuffer = null;

  async function fetchTemplateBuffer() {
    if (cachedTemplateBuffer) {
      return cachedTemplateBuffer.slice(0);
    }
    var res = await fetch('/resume-template.pdf');
    if (!res.ok) {
      // Fallback path if hosted under subpath
      res = await fetch('resume-template.pdf');
    }
    if (!res.ok) {
      throw new Error('Could not load resume template');
    }
    cachedTemplateBuffer = await res.arrayBuffer();
    return cachedTemplateBuffer.slice(0);
  }

  async function ensurePdfLib() {
    if (typeof window.PDFLib !== 'undefined') {
      return window.PDFLib;
    }
    // Attempt dynamic script load if not present
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = '/js/pdf-lib.min.js';
      script.onload = function () {
        if (typeof window.PDFLib !== 'undefined') {
          resolve(window.PDFLib);
        } else {
          reject(new Error('PDFLib not defined after load'));
        }
      };
      script.onerror = function () {
        // Try CDN fallback
        var cdnScript = document.createElement('script');
        cdnScript.src = 'https://unpkg.com/pdf-lib/dist/pdf-lib.min.js';
        cdnScript.onload = function () {
          if (typeof window.PDFLib !== 'undefined') {
            resolve(window.PDFLib);
          } else {
            reject(new Error('PDFLib not defined from CDN'));
          }
        };
        cdnScript.onerror = function () {
          reject(new Error('Failed to load PDFLib'));
        };
        document.head.appendChild(cdnScript);
      };
      document.head.appendChild(script);
    });
  }

  /**
   * Generates a modified PDF Blob with the date on Page 3 set to the current date.
   */
  async function generateCustomDatedPdf(customDate) {
    var PDFLib = await ensurePdfLib();
    var PDFDocument = PDFLib.PDFDocument;
    var StandardFonts = PDFLib.StandardFonts;
    var rgb = PDFLib.rgb;

    var dateStr = customDate || getFormattedDate();
    var templateBytes = await fetchTemplateBuffer();

    var pdfDoc = await PDFDocument.load(templateBytes);
    var pages = pdfDoc.getPages();
    var page3 = pages[2];

    var timesFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    // Cover the original date '01/11/2026' with a white rectangle.
    // Coordinates identified from vector text stream: x=35.04, y=165.74
    page3.drawRectangle({
      x: 34,
      y: 158,
      width: 120,
      height: 18,
      color: rgb(1, 1, 1),
    });

    // Draw today's date in matching Times-Roman 12pt
    page3.drawText(dateStr, {
      x: 35.04,
      y: 165.74,
      size: 12,
      font: timesFont,
      color: rgb(0, 0, 0),
    });

    var pdfBytes = await pdfDoc.save();
    return new Blob([pdfBytes], { type: 'application/pdf' });
  }

  /**
   * Triggers download of the resume with today's date.
   */
  async function downloadResume(triggerBtn) {
    var originalHtml = triggerBtn ? triggerBtn.innerHTML : '';
    if (triggerBtn) {
      triggerBtn.disabled = true;
      triggerBtn.classList.add('loading');
      triggerBtn.innerHTML =
        '<svg class="spin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;animation:spin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg> <span>Preparing Resume…</span>';
    }

    try {
      var blob = await generateCustomDatedPdf();
      var url = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url;
      link.download = 'Vajira_Viraj_Resume_' + getFilenameDate() + '.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(function () {
        URL.revokeObjectURL(url);
      }, 10000);

      if (triggerBtn) {
        triggerBtn.innerHTML =
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><polyline points="20 6 9 17 4 12"/></svg> <span>Downloaded!</span>';
        setTimeout(function () {
          triggerBtn.innerHTML = originalHtml;
          triggerBtn.disabled = false;
          triggerBtn.classList.remove('loading');
        }, 2200);
      }
    } catch (err) {
      console.warn('Dynamic PDF generation error, downloading static fallback:', err);
      // Fallback: download the static resume
      var fallbackLink = document.createElement('a');
      fallbackLink.href = '/resume.pdf';
      fallbackLink.download = 'Vajira_Viraj_Resume.pdf';
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);

      if (triggerBtn) {
        triggerBtn.innerHTML = originalHtml;
        triggerBtn.disabled = false;
        triggerBtn.classList.remove('loading');
      }
    }
  }

  /**
   * Opens the updated PDF in a new tab.
   */
  async function viewResumePdf() {
    try {
      var blob = await generateCustomDatedPdf();
      var url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (err) {
      console.warn('Dynamic PDF open error, opening static resume:', err);
      window.open('/resume.pdf', '_blank');
    }
  }

  // Expose global API
  window.VajiraResume = {
    getFormattedDate: getFormattedDate,
    generateCustomDatedPdf: generateCustomDatedPdf,
    downloadResume: downloadResume,
    viewResumePdf: viewResumePdf,
    updateDomDates: updateDomDates,
  };
})(window, document);
