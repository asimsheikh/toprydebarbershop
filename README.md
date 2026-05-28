# Top Ryde Barber Shop

Static export of the Top Ryde Barber Shop website.

## What this repo contains

- `index.html` as the site entry point
- `images/` with the local assets used by the page
- `vercel.json` configured for a static deployment on Vercel

## Local preview

Open `index.html` directly in a browser, or serve the folder with any static server.

Examples:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

The repository is connected to Vercel and deploys on push.

Vercel is configured to treat this project as a static site, so the root `index.html` is served directly.

## Notes

- The site is now static-first.
- Legacy Next.js source files remain in the repo history, but the deployment target is the static export at the repository root.
