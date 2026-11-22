# 🌐 Plan 03: Custom Domain Setup Guide

This plan walks you through linking a custom domain (e.g., `vajiraviraj.com`, `vviraj.lk`, or `portfolio.vviraj.lk`) to your Firebase project `vviraj-lk`.

---

## 🎯 Advantages of a Custom Domain
- Professional branding on resumes, LinkedIn, and email signatures.
- Free automatic SSL / TLS certificate (HTTPS) managed and renewed by Google.
- Fast global CDN caching via Google Cloud edge servers.

---

## 📋 Step-by-Step Instructions

### Step 1: Add Custom Domain in Firebase Console
1. Open the [Firebase Console for vviraj-lk](https://console.firebase.google.com/project/vviraj-lk/hosting/sites).
2. Go to **Hosting** on the left menu.
3. Click the **"Add custom domain"** button.
4. Enter your domain:
   - For a root domain: `vajiraviraj.com` (or `vviraj.lk`)
   - For a subdomain: `portfolio.vviraj.lk`
5. Optional: Check *"Redirect domain.com to www.domain.com"* if you want both to work seamlessly.
6. Click **"Continue"**.

---

### Step 2: Verify Domain Ownership & Add DNS Records
Firebase will display DNS records that you must add at your domain registrar (e.g., LK Domain Registry, GoDaddy, Namecheap, Cloudflare):

#### Typical DNS Records Required:

1. **TXT Record** (for domain ownership verification):
   - **Type**: `TXT`
   - **Host / Name**: `@` (or leave blank depending on provider)
   - **Value**: `firebase=vviraj-lk` (or the verification code provided by Firebase)

2. **A Records** (to point your domain to Firebase Hosting):
   - **Type**: `A`
   - **Host / Name**: `@`
   - **Value**: `199.36.158.100` (Firebase IP 1)
   - **Type**: `A`
   - **Host / Name**: `@`
   - **Value**: `199.36.158.100` (Firebase IP 2)

---

### Step 3: SSL Certificate Provisioning
- Once the DNS records are updated, Firebase automatically generates a free Let's Encrypt / Google Trust Services SSL certificate for your domain.
- **Propagation Time**: DNS changes usually take between 15 minutes to a few hours depending on your registrar's TTL settings.
- Once completed, your custom domain will securely serve your portfolio via HTTPS.
