# Abdul.Zidan / THE ZIDAN EDIT

Direction 02: a personal editorial website for Abdulrahman Zidan, isolated from A.Zidan / SIGNAL.

## Development
Node 22. Run `npm ci`, then `npm run dev`. Local path: http://localhost:3000/Abdul.Zidan/.

Checks: `npm run typecheck`, `npm run build`, `node scripts/check-export.mjs`.

## Deployment
GitHub Pages uses GitHub Actions. Main pushes run the workflow in `.github/workflows/pages.yml`, build a static export in `out/`, verify assets and anchors, then deploy. Base path is `/Abdul.Zidan`. Public URL: https://zidmatrix.github.io/Abdul.Zidan/.

## Source map
- `src/components/Portfolio.tsx`: editorial cover, chapters, interactive indices, integrated video, navigation, search and motion control.
- `src/components/Primitives.tsx`: native modal behavior, magnetic CTA, labels and CV link.
- `src/lib/content.ts`: services, companies, method, tools and contact data.
- `src/app/`: SEO, page, responsive design and motion rules.
- `public/review.html`: noindex responsive review at widths 320–1600.
- `scripts/check-export.mjs`: static export verification.
- `DESIGN.md`: art direction and behavior.

## Real assets
`public/profile.jpg` is the original portrait; `profile.webp` is the optimized copy. `intro.mp4` is the optimized real H.264/AAC introduction (about 67.5 seconds, 11 MB); `intro-poster.jpg` is a frame from it. `Abdulrahman-Zidan-CV.pdf` is the unchanged original two-page PDF, opened with `target="_blank" rel="noreferrer"`. `public/fonts/` holds Newsreader and Inter with licenses. Assets are included; no manual uploads are required from the owner.

## Resilience
Portrait fallback, source/video error handling, fullscreen error message, keyboard service tabs, native dialog focus containment and Escape handling, native scroll, reduced motion and touch controls. No server, API, contact-form simulation or external video hosting.

## Live verification
See `QA.md` for the production checks. Desktop, phone and tablet layouts, chapter navigation, keyboard service selection, method/company/tool indices, command search, native in-page video playback, embedded CV behavior and reduced-motion control were checked on GitHub Pages. No manual asset uploads remain.

## Markets and CV update

Eight state markets use a keyboard-accessible static SVG world map, centered on the U.S. by default, with selectable pins and U.S./world views. Mobile uses an interactive state list. Coordinates are separate in `src/lib/markets.ts`; public-domain Natural Earth geometry is bundled locally. No API key or external map requests.

The original two-page CV is rendered faithfully in a framed in-site reader with pagination, zoom, accessible extracted text, and an optional original-PDF download. All VIEW CV links navigate to this section. PDF bytes are unchanged. The LinkedIn URL and more-than-two-years direct-client/company experience follow the user's latest supplied information.
