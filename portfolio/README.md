# Portfolio + Blog

A sleek, responsive personal website to showcase your work and thoughts.

## Features

- Responsive multi-page layout: Home, About, Projects, Blog, Contact
- Dark/Light theme toggle with persistence
- Blog posts in Markdown rendered client-side via `marked`
- Blog search and pagination
- Animated sections on scroll
- Accessible, keyboard-friendly navigation
- Contact form via Formspree

## Getting Started

Open a terminal in the project root and start a static server:

```bash
cd /workspace/portfolio
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customize

- Replace "Your Name" and social links in `index.html`, `about.html`, `projects.html`, `blog/*`, `contact.html`.
- Update colors/spacing in `assets/css/styles.css`.
- Add or edit blog posts in `content/blog/*.md` and update metadata in `data/blog/index.json`.
- Replace images in `assets/images` and update project cards in `projects.html` and `index.html`.
- Replace the Formspree endpoint in `contact.html` with your form ID.

## Deploy

You can deploy this static site anywhere:

- GitHub Pages: push this folder to a `gh-pages` branch or use GitHub Actions.
- Netlify: drag-and-drop the folder or connect the repo, set build as `static`.
- Vercel: import the project and deploy as static.

## Notes

- This is a no-build setup. If you want MDX, RSS, or SSG, consider Next.js or Astro later.
- The blog index powers search and pagination; keep it in sync with markdown files.