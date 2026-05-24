# Fieldspan Embedded — landing page

Static marketing site for `embedded.fieldspan.ai`. Built with Next.js (App Router), TypeScript, and Tailwind CSS. Deploys to Vercel with no configuration.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build
npm run start
```

## Deploy

Push to GitHub and import the repo into Vercel. The framework is auto-detected; no env vars are required.

Custom domain: point `embedded.fieldspan.ai` at the Vercel deployment in the project's Domains settings.

## Editing copy

All copy lives in the section components under `components/`. Each section is a single file:

| Section | File |
| --- | --- |
| Top nav | `components/Nav.tsx` |
| Hero | `components/Hero.tsx` |
| Three pillars | `components/Pillars.tsx` |
| Thesis / manifesto | `components/Manifesto.tsx` |
| Capability grid | `components/Capabilities.tsx` |
| Compliance + proof | `components/Proof.tsx` |
| Sovereignty topology | `components/Sovereignty.tsx` |
| FAQ | `components/FAQ.tsx` |
| Footer + contact | `components/Footer.tsx` |

Design tokens (colors, fonts, spacing) are in `tailwind.config.ts` and `app/globals.css`.
