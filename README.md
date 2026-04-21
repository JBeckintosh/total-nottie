# total-nottie

Total Nottie project portal: a single-page React (Vite) site that links out to your work. Edit copy and URLs in [`src/siteContent.ts`](src/siteContent.ts).

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Output is written to `dist/`.

Because this app is configured for a **GitHub Pages project site**, Vite uses the base path `/total-nottie/`. To preview the production build locally, run `npm run preview` and open `http://localhost:4173/total-nottie/` (the trailing segment must match the base path).
