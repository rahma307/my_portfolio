# Rahma Mostafa — Portfolio

A modern, responsive personal portfolio built with **React**, **Vite**, and **Tailwind CSS**.

🔗 **Live Site:** [https://rahma307.github.io/my_portfolio/](https://rahma307.github.io/my_portfolio/)

---

## Tech Stack

- **React 18** — UI library
- **Vite** — Build tool & dev server
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Scroll animations & transitions
- **React Icons** — Icon library

---

## Project Structure

```
my_portfolio/
├── public/                 # Static assets (images, certificates, etc.)
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

The output will be in the `dist/` folder.

---

## Deployment to GitHub Pages

This project is pre-configured for GitHub Pages with `base: '/my_portfolio/'` in `vite.config.js`.

### Option A: Using gh-pages package (recommended)

```bash
npm run deploy
```

This builds the project and pushes the `dist/` folder to the `gh-pages` branch.

### Option B: Manual deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Copy the contents of `dist/` to your repository (or push `dist/` to the `gh-pages` branch).

3. Ensure GitHub Pages is enabled in your repository settings and pointing to the correct branch.

---

## Important Notes

- **Asset paths:** Certificate images and other assets should be placed in the repository root (or `public/`) so they are accessible at `/my_portfolio/filename.jpg`.
- **Base path:** The `vite.config.js` is set to `base: '/my_portfolio/'` to match your GitHub Pages deployment path. If you change the repo name, update this value.
- **External links:** All external links open in a new tab with `rel="noopener noreferrer"` for security.

---

## Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll navigation with active section highlighting
- ✅ Scroll-triggered fade-in animations
- ✅ Accessible (semantic HTML, ARIA labels, keyboard navigation)
- ✅ Respects `prefers-reduced-motion`
- ✅ SEO-optimized meta tags & Open Graph
- ✅ Clean, modern dark theme design

---

## License

This project is personal and open for reference.
