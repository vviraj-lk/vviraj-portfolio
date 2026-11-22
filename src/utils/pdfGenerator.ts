import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export function getTodayFormatted(): string {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();
  return `${day}-${month}-${year}`;
}

export async function downloadDynamicResume(
  onProgress?: (status: string) => void
): Promise<void> {
  try {
    if (onProgress) onProgress('Preparing...');

    const templateResponse = await fetch('/resume-template.pdf');
    if (!templateResponse.ok) {
      throw new Error(`Failed to load PDF template: ${templateResponse.statusText}`);
    }
    const templateBytes = await templateResponse.arrayBuffer();

    if (onProgress) onProgress('Updating date...');
    const pdfDoc = await PDFDocument.load(templateBytes);
    const pages = pdfDoc.getPages();
    const pageIndex = pages.length > 2 ? 2 : pages.length - 1;
    const page = pages[pageIndex];

    const todayStr = getTodayFormatted();
    const dateText = `Date: ${todayStr}`;
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Cover original date area and write updated date
    const targetX = 35.04;
    const targetY = 165.74;

    page.drawRectangle({
      x: targetX,
      y: targetY - 3,
      width: 140,
      height: 16,
      color: rgb(1, 1, 1),
    });

    page.drawText(dateText, {
      x: targetX,
      y: targetY,
      size: 10,
      font: font,
      color: rgb(0, 0, 0),
    });

    if (onProgress) onProgress('Generating PDF...');
    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = blobUrl;
    downloadLink.download = `Vajira_Viraj_Resume_${todayStr}.pdf`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
    if (onProgress) onProgress('Done');
  } catch (error) {
    console.error('Error modifying PDF dynamically, falling back to default:', error);
    if (onProgress) onProgress('Downloading fallback...');
    const fallbackLink = document.createElement('a');
    fallbackLink.href = '/resume.pdf';
    fallbackLink.download = `Vajira_Viraj_Resume_${getTodayFormatted()}.pdf`;
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    document.body.removeChild(fallbackLink);
    if (onProgress) onProgress('Done');
  }
}
