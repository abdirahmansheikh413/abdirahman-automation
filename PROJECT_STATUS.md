# Abdirahman Automation

## What the project currently does

A one-page marketing site for a small AI automation and business systems service aimed at
local businesses. It explains the problem, services, an example workflow, the process, and
has a contact form. There is no database, authentication, or backend.

## Architecture

- **Framework:** Next.js 16.3.5 (App Router), React 19.2.8, TypeScript 5
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/postcss`), icons from `lucide-react`
- **Package manager:** npm (`package-lock.json` is committed)
- **Rendering:** every route is statically prerendered at build time

Routes:

| Route              | Source                         |
| ------------------ | ------------------------------ |
| `/`                | `src/app/page.tsx`             |
| `/icon.svg`        | `src/app/icon.svg`             |
| `/opengraph-image` | `src/app/opengraph-image.tsx`  |

Layout:

```
src/
  app/                 layout, page, globals.css, icon, Open Graph image
  components/layout/   Header, Footer
  components/sections/ one component per page section (incl. ContactForm)
  components/ui/       shared UI primitives
  lib/site.ts          site-wide details (name, email, LinkedIn, form endpoint)
```

## Current integrations

- **Contact form:** posts to `NEXT_PUBLIC_FORM_ENDPOINT` (e.g. Formspree) when set;
  otherwise opens the visitor's email app with a `mailto:` link.
- **LinkedIn:** static profile link in `src/lib/site.ts`.
- No AI providers, APIs, databases, or automation services are wired into the code.

## Required environment variables

All are optional. Names only; see `.env.example`.

| Variable                        | Purpose                                                     |
| ------------------------------- | ----------------------------------------------------------- |
| `NEXT_PUBLIC_FORM_ENDPOINT`     | Form service URL. Empty means the form falls back to email. |
| `NEXT_PUBLIC_SITE_URL`          | Canonical URL for link previews / metadata.                 |
| `VERCEL_PROJECT_PRODUCTION_URL` | Set automatically by Vercel; used if the above is unset.    |

Both `NEXT_PUBLIC_*` values are embedded in the browser bundle, so they must never hold secrets.
`.gitignore` excludes `.env*` (except `.env.example`) and `.vercel/`.

## Local development instructions

Requires Node.js 20.9+ (verified on Node 22) and npm.

```bash
git clone https://github.com/abdirahmansheikh413/abdirahman-automation.git
cd abdirahman-automation
npm ci                     # install exact locked versions
cp .env.example .env.local # optional; fill in values if needed
npm run dev                # http://localhost:3000
npm run lint
npm run build              # same build Vercel runs
```

## Deployment process

Vercel builds the GitHub repo `abdirahmansheikh413/abdirahman-automation`.

1. Work on a feature branch, never directly on `main`.
2. Push the branch and open a pull request; Vercel creates a **preview** deployment for it.
3. Check the preview URL.
4. Merge to `main` to deploy to production (https://abdirahman-automation.vercel.app/).

Rollback: Vercel dashboard → Deployments → pick the previous production deployment → "Promote".

Env vars live in Vercel → Project → Settings → Environment Variables. After changing them,
production only picks them up on the next deployment.

## Known issues

- No automated tests are configured.
- The Vercel ↔ GitHub link (and which branch is the production branch) has not been verified
  from the dashboard; confirm it in Vercel → Project → Settings → Git.
- Whether `NEXT_PUBLIC_FORM_ENDPOINT` is set in Vercel is unknown; if not, the live form uses
  the `mailto:` fallback.
- `src/lib/site.ts` has no photo set (shows an initial instead).

## Next development priorities

1. Confirm the Vercel Git connection and production branch in the dashboard.
2. Set up a real form endpoint so leads don't depend on the visitor's email app.
3. Add a CI check (lint + build) on pull requests.
4. Add a custom domain and set `NEXT_PUBLIC_SITE_URL` to it.
