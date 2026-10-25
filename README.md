# KPU FOOD website

The kpufood.com website rebuilt in [Next.js](https://nextjs.org) (App Router, TypeScript), with a Markdown blog.

## Run it locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Add a blog post

1. Copy `content/blog/_TEMPLATE.md` to a new file in the same folder, e.g. `content/blog/buransh-squash-recipe.md`.
   The file name becomes the URL: `/blog/buransh-squash-recipe`.
2. Fill in `title`, `description`, `date` and `tags` at the top, then write the post in Markdown below the second `---`.
3. Commit and deploy. The post shows up on `/blog`, in the homepage's "From the blog" section and in `sitemap.xml`,
   and gets its own social-share image automatically.

- Set `draft: true` to keep a post off the live site while you work on it (it still shows in `npm run dev`).
- Put blog images in `public/images/blog/` and reference them as `/images/blog/name.jpg`.
- Files whose names start with `_` are never published.

## Edit the rest of the site

| What | Where |
| --- | --- |
| Phone numbers, email, address, hours, WhatsApp messages, analytics ID, chat widget | `lib/site.ts` |
| Product categories, bestsellers, season calendar, process steps, FAQs, testimonials, areas served | `lib/content.ts` |
| Longer homepage paragraphs (About, Heritage, Trade…) | `components/home/*.tsx` |
| Colours, fonts, spacing | `app/globals.css` (the `:root` variables at the top) |
| Product label artwork, logo | `public/images/` |

## Deploying

The site is fully static at build time, so it runs on any Node.js host. [Vercel](https://vercel.com) is the
simplest option: import the repository and deploy with the default settings.

Set `NEXT_PUBLIC_SITE_URL` to the live domain (default `https://www.kpufood.com`). It is used for canonical
URLs, the sitemap, structured data and social-share images.

## Project layout

```
app/                  routes: home, /blog, /blog/[slug], sitemap.xml, robots.txt, OG images
components/           header, footer, floating dock, trade form, blog list
components/home/      one file per group of homepage sections
content/blog/         blog posts (Markdown)
lib/                  site settings, homepage content, blog loader, structured data
public/images/        logo, label artwork, background textures
```
