# Abdirahman Systems

One-page site for a remote AI automation and business systems service.
Built with Next.js (App Router), TypeScript, and Tailwind CSS. No database, auth, or backend.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Personalize

Most details live in [`src/lib/site.ts`](src/lib/site.ts): name, tagline, email, optional photo,
optional LinkedIn. Section copy lives in [`src/components/sections/`](src/components/sections/),
one file per section.

## Contact form

The form works two ways:

- **No setup (default):** submitting opens the visitor's email app with their message filled in,
  addressed to `site.email`. They still have to press send themselves.
- **Recommended:** create a free form at a service like Formspree, then set
  `NEXT_PUBLIC_FORM_ENDPOINT` to its URL (locally in `.env.local`, and in your host's environment
  variables). Submissions are then sent without leaving the page.

See [`.env.example`](.env.example).

## Interactive demo

[`src/components/sections/LiveDemo.tsx`](src/components/sections/LiveDemo.tsx) is a client-side
walkthrough of the Lead Response System: a fictional customer message becomes a lead record, then a
drafted reply the visitor can edit, approve, or decline, with a running status log.

Everything in it is fictional and runs in the browser. It makes no API calls, sends no messages, and
stores nothing. The scenarios live in the `scenarios` array at the top of the file — edit the copy
there rather than in the markup.

## Deploy

Push to GitHub and import the repo at https://vercel.com/new, or run `npx vercel` from this folder.
Set `NEXT_PUBLIC_SITE_URL` to your final domain so link previews use the right address.

## Structure

```
src/
  app/                 layout, page, globals.css, icon, Open Graph image
  components/layout/   Header, Footer
  components/sections/ one component per page section
  components/ui/       Container, ButtonLink, SectionHeading, Reveal, Logo
  lib/site.ts          site-wide details to personalize
```
