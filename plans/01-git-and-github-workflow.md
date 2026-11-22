# 🛠️ Plan 01: Git & GitHub Automated CI/CD Workflow

This plan guides you through initializing Git, publishing your code to GitHub under your account (`vviraj-lk`), and setting up an automated workflow to deploy to Firebase on every `git push`.

---

## 🎯 Objective
- Have full version control for your portfolio.
- Push source code safely to GitHub (`https://github.com/vviraj-lk/portfolio`).
- Automatically build and deploy to Firebase Hosting (`https://vviraj-lk.web.app`) whenever you push changes to the `main` branch.

---

## 📋 Step-by-Step Execution

### Step 1: Initialize Git Repository Locally
Open your terminal inside `c:\Users\Vajira Viraj\Portfolio Vajira` and run:

```powershell
# 1. Initialize git with default branch 'main'
git init -b main

# 2. Check git status to ensure .gitignore is working
git status

# 3. Stage all files
git add .

# 4. Create the initial commit
git commit -m "feat: initial commit for Vajira Viraj portfolio with Firebase Hosting setup"
```

---

### Step 2: Create Repository on GitHub
1. Go to [GitHub - New Repository](https://github.com/new).
2. Repository name: `portfolio` (or `vviraj-portfolio`).
3. Description: *"Professional Portfolio of Vajira Viraj Nanayakkarawasam - Technical Operations Engineer"*.
4. Visibility: Choose **Public** (recommended for portfolios) or **Private**.
5. **Do NOT** check *"Add a README file"*, *"Add .gitignore"*, or license (we already have them).
6. Click **"Create repository"**.

---

### Step 3: Link Local Git to GitHub Remote
Copy the repository URL from GitHub and run:

```powershell
# Add GitHub as the origin remote
git remote add origin https://github.com/vviraj-lk/portfolio.git

# Push the code to GitHub
git push -u origin main
```

---

### Step 4: Configure Automated GitHub Actions Deployment (Optional / Recommended)

Firebase provides a built-in wizard that automatically sets up GitHub Actions:

```powershell
firebase init hosting:github
```

**Prompts during setup:**
1. *For which GitHub repository would you like to set up a GitHub workflow?*  
   👉 Type: `vviraj-lk/portfolio`
2. *Set up the workflow to run a build script before every deploy?*  
   👉 Select: **No** (this is a static HTML/CSS/JS site, no build step needed).
3. *Set up automatic deployment to your site's live channel when a PR is merged?*  
   👉 Select: **Yes**
4. *What is the name of the GitHub branch associated with your site's live channel?*  
   👉 Type: `main`

Firebase CLI will automatically:
- Create a service account in your Google Cloud project.
- Add the secret `FIREBASE_SERVICE_ACCOUNT_VVIRAJ_LK` to your GitHub repo.
- Commit `.github/workflows/firebase-hosting-merge.yml` and `.github/workflows/firebase-hosting-pull-request.yml`.

From then on, whenever you push code (`git push origin main`), GitHub will automatically deploy it to **https://vviraj-lk.web.app**!

---

## 🔄 Daily Workflow Going Forward

Once set up, whenever you make changes to your portfolio:

```powershell
git add .
git commit -m "update: describe what you changed"
git push
```
Everything else is completely automated!
