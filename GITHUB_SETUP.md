# GitHub Repository Setup

Your local git repository is ready! Follow these steps to push to GitHub:

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `AeroFold` (or your preferred name)
3. Description: "Desktop-first website for AeroFold - an origami-inspired drag sail for CubeSat deorbiting"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 2: Push Your Code

After creating the repository, GitHub will show you commands. Use these instead (they're already configured):

```bash
git remote add origin https://github.com/YOUR_USERNAME/AeroFold.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Alternative: If you want to use SSH

If you prefer SSH (and have SSH keys set up):

```bash
git remote add origin git@github.com:YOUR_USERNAME/AeroFold.git
git branch -M main
git push -u origin main
```

## Quick Setup Script

After creating the repo on GitHub, you can run:

```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/AeroFold.git
git branch -M main
git push -u origin main
```

That's it! Your code will be on GitHub.


