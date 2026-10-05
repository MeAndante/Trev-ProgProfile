# Trevor Santos Portfolio

A small, front-end-only portfolio built with React and Vite. There is no backend or database.

## Run locally

1. Install Node.js (LTS).
2. In this folder, run `npm install`.
3. Run `npm run dev` and open the local URL shown in the terminal.

To create a production build locally, run `npm run build`. Vite writes the static site to `dist/`.

## GitHub and Vercel

Push this folder to a GitHub repository, then import that repository into Vercel. Vercel detects Vite automatically. The default settings are:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

No environment variables or server functions are required. The site can also be hosted as a static frontend on other providers.

## Edit the portfolio

- Update the introduction, education, and project content in `src/main.jsx`.
- Change colors, layout, and responsive styles in `src/styles.css`.
- Update page metadata in `index.html`.

Project stack labels reflect the available project files and notes. The supplied notes did not name the implementation tools for the calculator apps, so those are described by their application type instead of guessing a framework.
