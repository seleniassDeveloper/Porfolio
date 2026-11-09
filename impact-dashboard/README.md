# Project Impact — Selenia Sánchez

A standalone dashboard that shows, in under a minute, which business systems
Selenia has taken from problem to production: selected projects, verified
impact, problem → system → result, timeline and role. It is its own app: it
does not import anything from the portfolio or from SSStudio.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```

The build uses relative paths, so `dist/` can be hosted anywhere (subdomain,
GitHub Pages, Netlify, Vercel…).

## Edit the content

Everything lives in two files:

- `src/data/profile.js` — name, headline, contact, one-pager numbers.
- `src/data/projects.js` — one object per project. Each page reads in this order:
  header (number, name, one line, chips for scope · role · time · status, and the
  first real screenshot) → problem → solution (the solution is `built.summary`) → my
  ownership → what I built + scale (2–4
  numbers, each with its context) → result (the strong black card) → estimated
  impact (only where one exists, always marked) → key decisions → timeline →
  more screenshots → technical details (collapsed) → next case.

A missing field hides its module. Rule: **only confirmed numbers**, and each
number appears once unless repeating it adds context. Unknown values stay
`null` — no placeholders. Screenshots go in `public/shots/` and in the
project's `screenshots: [{ src, alt }]` (real ones only).

## Useful URLs

- `?project=auradash` — opens directly on one case study (good for sharing). Add `&lang=es` for Spanish.
- `?audit` (dev only) — shows every missing value and the "to confirm" checklist per project.
  Public builds strip those notes (see `vite.config.js`).

## Publish

Live at **https://selenia-project-impact.vercel.app** (Vercel project `selenia-project-impact`,
deployed from this folder, not from GitHub). After editing, publish again with:

```bash
vercel deploy --prod
```

The link preview image is `public/og.jpg` (1200×630).

## One-pager

"Download one-pager" prints a clean, light single page (choose "Save as PDF").
To serve a designed PDF instead, put it in `public/` and set
`PROFILE.onePagerPdf` (e.g. `"one-pager.pdf"`).
