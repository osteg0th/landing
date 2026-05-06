# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # dev server at http://localhost:3000
npm run build     # production build
npm run lint      # ESLint
```

No test suite is configured.

## Architecture

Single-page personal portfolio. One route (`app/page.tsx`) renders all sections in order: `Nav → Hero → Skills → Experience → Projects → Contact → Footer`.

**All site content lives exclusively in [`data/content.ts`](data/content.ts).** To change any text, bio, job history, projects, or social links — only edit that file. Components read from it but never own content themselves.

**Styling is CSS Modules only** — no Tailwind. Each component has a paired `.module.css` file. Global tokens (colors, fonts, spacing) are CSS variables defined in [`app/globals.css`](app/globals.css). Fonts are Orbitron (`--font-display`) and Ubuntu Mono (`--font-mono`), loaded via `next/font/google` in the layout.

## Deployment

The app is deployed to **Google Cloud Run** (project `my-landing-495500`, region `us-central1`, service `cyber-romulus`) via GitHub Actions on push to `main`. The workflow is in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) and uses Workload Identity Federation — no stored credentials. `next.config.ts` uses `output: "standalone"` to match the Dockerfile.

Custom domain `cyber-romulus.com` is mapped via Cloud Run domain mappings. SSL is managed by Google automatically.

## CV

The CV PDF is hosted separately on Cloud Storage at `gs://cyber-romulus-assets/CV_Vladyslav_Shevchenko.pdf` so it can be updated without redeploying. See [`UPDATE_CV.md`](UPDATE_CV.md) for upload instructions.
