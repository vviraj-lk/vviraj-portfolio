# ✉️ Plan 02: Contact Form Email Integration

This plan explains how to make the contact form on `https://vviraj-lk.web.app/contact` fully functional so messages submitted by recruiters and clients land directly in your email inbox (`vviraj.lk@gmail.com`).

---

## 🎯 The Situation
- Currently, `contact.html` has a placeholder reCAPTCHA key (`YOUR_RECAPTCHA_SITE_KEY`) and makes a `fetch('/api/contact')` call which returns `404` because Firebase Hosting does not have a backend server.
- We will replace the non-functional fetch with a **free, zero-maintenance email endpoint service**.

---

## 💡 Recommended Solution: Web3Forms (100% Free, No Backend Required)

### Why Web3Forms?
- **Zero code on backend**: No server or Cloud Functions needed.
- **Direct Email Delivery**: Form submissions go straight to `vviraj.lk@gmail.com`.
- **Free Tier**: 250 submissions per month forever.
- **Spam Protection**: Built-in honeypot + spam filtering without annoying CAPTCHAs.

---

## 📋 Implementation Steps

### Step 1: Obtain a Free Access Key (Takes 30 seconds)
1. Go to [Web3Forms](https://web3forms.com/).
2. Enter your email: `vviraj.lk@gmail.com`.
3. Check your inbox and copy your **Access Key** (a 36-character UUID like `a1b2c3d4-e5f6-7890-...`).

---

### Step 2: Update the Submission Script in `public/contact.html`

In `public/contact.html`, locate the submit event listener (around line 770) and update the payload and endpoint:

```javascript
form.addEventListener('submit', function(e){
  e.preventDefault();
  statusBox.className = 'form-status';

  var payload = {
    access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE',
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    subject: document.getElementById('subject').value.trim(),
    message: document.getElementById('message').value.trim(),
    from_name: 'Portfolio Contact Form'
  };

  submitBtn.disabled = true;
  submitLabel.textContent = 'Sending…';

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then(function(res){ return res.json(); })
  .then(function(data){
    submitBtn.disabled = false;
    submitLabel.textContent = 'Send message';
    if (data.success){
      showStatus('success', 'Message sent — thank you! I\'ll get back to you soon.');
      form.reset();
    } else {
      showStatus('error', data.message || 'Something went wrong. Please try again.');
    }
  })
  .catch(function(){
    submitBtn.disabled = false;
    submitLabel.textContent = 'Send message';
    showStatus('error', 'Could not reach the server. Please try reaching me via WhatsApp or direct email.');
  });
});
```

---

### Step 3: Remove the Dummy reCAPTCHA Widget
In `public/contact.html`, remove or comment out:
```html
<!-- Remove this line: -->
<div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
```
Web3Forms has its own built-in honeypot protection (`name="website"`), which is already included in our form!

---

### Step 4: Deploy & Test
```powershell
firebase deploy --only hosting
```
Open `https://vviraj-lk.web.app/contact`, type a test message, and check your inbox at `vviraj.lk@gmail.com`.
