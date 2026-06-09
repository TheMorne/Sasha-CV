# Sasha CV - Free Hosting

This site is configured for free hosting on GitHub Pages.

## One-time setup (GitHub)

1. Push this project to your GitHub repo `TheMorne/sasha-cv` (branch: `main`).
2. In GitHub, open **Settings -> Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Commit/push any change to `main` (or run the workflow manually under **Actions**).

Your site will be published at:

`https://themorne.github.io/sasha-cv/`

## How deployment works

- Workflow file: `.github/workflows/deploy-pages.yml`
- On each push to `main`, GitHub Actions:
  - installs dependencies
  - runs `npm run build`
  - deploys `dist/` to Pages

## Local build check

```powershell
cd "C:\Users\iamro\IdeaProjects\Sasha CV"
npm run build
```

