# Portfolio + Blog Website

A sleek, responsive personal website with Home, About, Projects, Blog, and Contact pages. Built with HTML, CSS, and JavaScript.

## Features
- Responsive design for mobile, tablet, desktop
- Smooth scrolling and reveal-on-scroll animations
- Dark/Light theme toggle with persistence
- Blog powered by JSON index + Markdown posts
- Blog search and client-side pagination
- Contact form integrated with Formspree (replace the endpoint)

## Getting Started

1. Preview locally with any static server (required for `fetch` of JSON/Markdown):

```bash
cd /workspace/portfolio-blog
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

2. Customize content:
- Update your name, links, and copy in `index.html`, `about.html`, `projects.html`, `contact.html`.
- Set your Formspree endpoint in `contact.html` (`action="https://formspree.io/f/your_form_id"`).
- Add or edit blog posts in `data/posts.json` and `posts/*.md`.

## Blog
- Index: `data/posts.json` contains an array of posts with `slug`, `title`, `date`, `tags`, `excerpt`.
- Content: each post is a Markdown file at `posts/<slug>.md`.
- Post pages are rendered at `post.html?slug=<slug>` using `marked`.

## Deploy
- GitHub Pages: push the folder to a repository and enable Pages (deploy from `main` branch root).
- Netlify: drag-and-drop the folder or connect the repo. Build command: none. Publish directory: root.
- Vercel: import the repo as a static site. Output directory: root.

## Structure
```
assets/
  css/styles.css
  js/{main.js, theme.js, blog.js}
  img/
index.html, about.html, projects.html, blog.html, post.html, contact.html
data/posts.json
posts/*.md
```

## License
Use freely for personal or commercial projects. Attribution appreciated but not required.