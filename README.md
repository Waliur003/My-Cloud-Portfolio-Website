# Waliur R Sun — Cloud Portfolio

A standard Next.js App Router portfolio for cloud engineering and cloud security work.

## Local development

Requirements: Node.js 22 and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production verification

```bash
npm run lint
npm run build
npm run start
```

## Deploy to Netlify

1. Push this project to GitHub.
2. In Netlify, choose **Add new project** and import the GitHub repository.
3. Netlify should detect Next.js automatically. If settings are requested, use:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: `22`
4. Deploy the site.

The repository includes `netlify.toml`, so these build settings are already declared.
