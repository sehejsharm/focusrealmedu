# Focus Realm Education: marketing site

Single-page landing site for the Focus Realm Education product line, built with Next.js (App Router), TypeScript and Tailwind CSS v4. It builds to a fully static export in `out/`, with no backend.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```

## Deploy (Vercel)

Import the repo in Vercel. The Next.js preset is detected automatically and needs no settings.

## Editing content

| What | Where |
|---|---|
| Nav links, contact details, footnote sources | `lib/content.ts` |
| Sections | `components/*.tsx`, in page order in `app/page.tsx` |
| Brand colors and type tokens | `app/globals.css` (`@theme`) |
| Favicon | `app/icon.svg` |

### To finish before launch
- **Logo:** `Monogram` in `components/ui.tsx` and `app/icon.svg` are a stand-in FR mark. Swap in the official SVG, and adjust `--color-brand-600` to the logo's exact blue.
- **Team photos:** add `public/team/sehej-sharma.jpg`, `ali-electricwala.jpg` and `aditya-mishra.jpg` (or .png/.webp). Each photo replaces that person's initials automatically on the next build.
- **Sources:** replace the `source` text in `NOTES` (`lib/content.ts`) with the original publications.
- **Social links:** replace the `#` placeholders in `components/Footer.tsx`.
