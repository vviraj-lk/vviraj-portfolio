# Portfolio - Vajira Viraj Nanayakkarawasam

Cloned and structured for Firebase Hosting deployment with dynamic resume viewer and date-adjusted PDF downloads.

## Project Structure

```
.
├── public/
│   ├── index.html           # Main portfolio landing page
│   ├── resume.html          # Dynamic resume viewer (web view + PDF toggle)
│   ├── contact.html         # Contact page
│   ├── profile.webp         # Profile avatar image
│   ├── resume-template.pdf  # Base PDF template for dynamic date modification
│   ├── resume.pdf           # Pre-compiled static PDF resume
│   └── js/
│       ├── pdf-lib.min.js   # Fast client-side PDF modification engine
│       └── resume-download.js # Dynamic date injection and download handler
├── .firebaserc              # Firebase project configuration
├── firebase.json            # Firebase Hosting configuration
├── .gitignore
└── README.md
```

## Features

- **Resume Viewing**:
  - Direct web viewer at `/resume.html` matching the portfolio's glass/dark-light theme.
  - Interactive toggle between responsive Document Web View and original PDF View.
  - Print support (`Ctrl+P` / Print button) with print-optimized CSS.
- **Dynamic Download Date**:
  - When visitors click **Download CV / Resume**, client-side JavaScript (`pdf-lib`) automatically modifies the declaration date at the bottom of Page 3 to match the exact day of download (`DD/MM/YYYY`).
  - No server-side processing or latency required — runs 100% on the client.

## How to Test Locally

```powershell
# Using python HTTP server
python -m http.server 5000 --directory public

# Or using npx serve
npx serve public
```

Open `http://localhost:5000` in your browser.

## How to Deploy to Firebase Hosting

```powershell
# 1. Login to Firebase
firebase login

# 2. Deploy
firebase deploy --only hosting
```
