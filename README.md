# Vajira Viraj Nanayakkarawasam — Professional Portfolio

[![Live Site](https://img.shields.io/badge/Live%20Site-vviraj--lk.web.app-0ea5e9?style=flat-square&logo=google-chrome&logoColor=white)](https://vviraj-lk.web.app)
[![React](https://img.shields.io/badge/React-19.0.0-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.2-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38bdf8?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Firebase Hosting](https://img.shields.io/badge/Firebase_Hosting-Live-ffca28?style=flat-square&logo=firebase&logoColor=black)](https://vviraj-lk.web.app)

Modern, high-performance portfolio application built with **React 19**, **TypeScript**, and **Vite**, deployed to **Firebase Hosting**. Designed with an enterprise-grade glassmorphism interface, dark/light theme switching, interactive terminal CLI animations, and client-side dynamic PDF generation.

---

## 🚀 Key Features

- **Interactive Terminal Status Widget**:
  - Located directly beneath the profile photo in the Hero section.
  - Features real-time simulated CLI typing and backspacing animations cycling through core engineering commands:
    - `> infra --check ad azure-ad fortigate`
    - `> erp --sync sap-b1 oracle-apex mis`
    - `> ai-dev --agent cursor vscode ci-cd`
    - `> stack --verify laravel react docker`
  - Compact stat badges highlighting career milestones: **12+ Yrs** Dual-Track IT, **M.I.T. '26** (UCSC Colombo), **MBCS** (BCS UK Level 6), **SCJP** (Sun Microsystems), and **7 Roles** (2013 – Present).

- **Dynamic Client-Side PDF Generation (`pdf-lib`)**:
  - Clicking **Download CV (PDF)** automatically modifies the declaration section on the fly using `pdf-lib` in TypeScript to inject the exact download date (`DD/MM/YYYY`).
  - Executes 100% in the visitor's browser without backend dependencies or latency.

- **Dual-Mode Resume Viewer (`/resume`)**:
  - **Document Web View**: Responsive, glassmorphic layout detailing work experience, academic qualifications, credentials, references, and declaration.
  - **PDF Embed View**: Embedded PDF viewer toggle for previewing the original document layout.
  - **Print Optimized**: Custom `@media print` stylesheets for clean, high-resolution printing or PDF export directly from the browser (`Ctrl + P`).

- **Career Journey Timeline**:
  - Chronological breakdown of 7 enterprise engineering and operational roles spanning 2013 to Present.
  - Detailed responsibilities, enterprise system administration, database management, and technology tags.

- **Categorized Skills Matrix**:
  - Interactive chip cloud across 5 core technical pillars with custom SVG icons:
    - Enterprise Systems & Business Applications (SAP Business One, Oracle APEX, ERP)
    - Cloud, Infrastructure & Networking (Azure AD, Microsoft 365, FortiGate, Windows Server)
    - DevOps, Tools & AI Workflow (Docker, Git, CI/CD, VS Code, Cursor, AI agents)
    - Full-Stack Languages & Frameworks (React, TypeScript, PHP / Laravel, Java, JavaScript, Python)
    - Databases, APIs & Scripting (Oracle SQL, MySQL, MS SQL Server, REST APIs, Shell)

- **Light & Dark Theme Switching**:
  - Custom glassmorphic design system using CSS custom properties (`data-theme="dark"` / `data-theme="light"`).
  - Persists preference across page reloads.

- **Client-Side SPA Routing**:
  - Clean client navigation between `/`, `/resume`, and `/contact` with `history.pushState` and hash-based fallback.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 19, TypeScript 5.7 |
| **Build & Tooling** | Vite 6.2, Rolldown / ESBuild |
| **Styling** | Custom CSS Glassmorphism Design System + Tailwind CSS 4 |
| **PDF Manipulation** | `pdf-lib` (client-side PDF injection) |
| **Hosting & CI/CD** | Firebase Hosting with SPA rewrites |
| **Version Control** | Git & GitHub |

---

## 📁 Project Structure

```
Portfolio Vajira/
├── public/
│   ├── profile.webp              # Optimized profile picture
│   ├── resume.pdf                # Static CV document
│   └── resume-template.pdf       # Base PDF template for dynamic date injection
├── src/
│   ├── components/
│   │   ├── About.tsx             # Professional narrative and introduction
│   │   ├── Education.tsx         # Academic & professional certifications
│   │   ├── Experience.tsx        # 7-role career timeline & achievements
│   │   ├── FloatingWhatsApp.tsx  # Quick WhatsApp contact floating action button
│   │   ├── Footer.tsx            # Footer navigation, copyright & platform credits
│   │   ├── Hero.tsx              # Hero banner with profile photo & Terminal widget
│   │   ├── Navbar.tsx            # Sticky header with navigation & theme toggle
│   │   ├── Skills.tsx            # 5-domain technical competence chip matrix
│   │   └── WaveBackground.tsx    # Canvas-based subtle ambient wave animation
│   ├── pages/
│   │   ├── ContactPage.tsx       # Contact information and interactive message form
│   │   ├── HomePage.tsx          # Full portfolio landing page
│   │   └── ResumePage.tsx        # Interactive dual-mode web & PDF resume viewer
│   ├── utils/
│   │   └── pdfGenerator.ts       # Dynamic PDF date injection engine using pdf-lib
│   ├── App.tsx                   # Client-side router & global layout wrapper
│   ├── index.css                 # Glass design tokens, dark/light themes & animations
│   ├── main.tsx                  # React DOM application mount point
│   └── vite-env.d.ts             # Vite TypeScript type declarations
├── .firebaserc                   # Firebase project targeting (vviraj-lk)
├── firebase.json                 # Firebase Hosting configuration & SPA rewrites
├── index.html                    # Root HTML document template
├── package.json                  # Dependencies, scripts, and build metadata
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite build and plugin configuration
```

---

## 💻 Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0.0 or higher)
- [npm](https://www.npmjs.com/) (version 9.0.0 or higher)

### Setup & Installation

```powershell
# 1. Clone the repository
git clone https://github.com/vviraj-lk/vviraj-portfolio.git
cd vviraj-portfolio

# 2. Install project dependencies
npm install

# 3. Start local development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with HMR |
| `npm run build` | Compiles TypeScript and builds optimized production bundle in `dist/` |
| `npm run preview` | Locally serves and previews the production build from `dist/` |

---

## 🌐 Deployment to Firebase Hosting

The application is deployed to **Firebase Hosting** with single-page application routing configured in `firebase.json`.

```powershell
# 1. Build the production bundle
npm run build

# 2. Deploy to Firebase Hosting
firebase deploy --only hosting
```

Production URL: **[https://vviraj-lk.web.app](https://vviraj-lk.web.app)**

---

## 📬 Contact & Connect

**Vajira Viraj Nanayakkarawasam**  
*Technical Operations Engineer | Software Engineer | Production Support & Troubleshooting*

- 🌐 **Live Portfolio**: [https://vviraj-lk.web.app](https://vviraj-lk.web.app)
- 💼 **LinkedIn**: [vajira-viraj-nanayakkarawasam](https://linkedin.com/in/vajira-viraj-nanayakkarawasam-9b447355)
- ✉️ **Email**: [vviraj.lk@gmail.com](mailto:vviraj.lk@gmail.com)
- 📞 **Phone / WhatsApp**: [+94 77 166 6113](tel:+94771666113)
- 📍 **Location**: Colombo – Galle – Kalutara, Sri Lanka

---

© 2026 Vajira Viraj Nanayakkarawasam. All rights reserved.
