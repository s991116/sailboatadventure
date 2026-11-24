# Sailboat Adventure (Astro)

This is a static Astro site with content stored as **Markdown/MDX** using **Astro Content Collections**.

## Project structure

Key folders/files:

```text
src/
  content/
    config.ts
    posts/
      first-post.mdx
    pages/
      about.md
  layouts/
    Layout.astro
  pages/
    index.astro
    [slug].astro
    blog/
      index.astro
      [slug].astro
```

## Routes

- **Home**: `/`
- **Tips**: `/tips/`
- **About**: `/about/` (from `src/content/pages/about.md`)
- **Contact us**: `/contact/` (from `src/pages/contact/index.astro`)
- **Blog index**: `/blog/` (lists posts)
- **Blog post**: `/blog/<slug>/` (from `src/content/posts/<slug>.mdx`)

## Content workflow

- **Add a new page**: create a file in `src/content/pages/` (English filenames), e.g. `faq.md` → `/faq/`
- **Add a new blog post**: create a file in `src/content/posts/`, e.g. `my-trip.mdx` → `/blog/my-trip/`
- **Drafts**: set `draft: true` in frontmatter to exclude from generated routes.

## Images (optimized at build time)

This project uses Astro’s built-in `astro:assets` image pipeline via the `OptimizedPhoto` component.

- **Store images**: `src/assets/photos/...`
- **Use in `.astro` pages**:

```astro
---
import OptimizedPhoto from '../components/OptimizedPhoto.astro';
import heroPhoto from '../assets/photos/home/louise-on-deck.png';
---

<OptimizedPhoto
  src={heroPhoto}
  alt="Describe the photo for accessibility."
  preset="homeHero"
/>
```

- **Use in MDX posts** (`src/content/posts/*.mdx`):

```mdx
import OptimizedPhoto from '../../components/OptimizedPhoto.astro'
import deckPhoto from '../../assets/photos/home/louise-on-deck.png'

<OptimizedPhoto src={deckPhoto} alt="Describe the photo." preset="homeHero" />
```

- **Crop / zoom presets**: adjust presets in `src/components/OptimizedPhoto.astro` (e.g. `homeHero`) or override per image:
  - `position="55% 35%"`
  - `zoom={1.08}`

## Navigation

The main navigation is defined in `src/layouts/Layout.astro`.

## Visits

Page views are counted with [GoatCounter](https://www.goatcounter.com/) on the same dashboard as the flag sheet: https://sailboatadventure.goatcounter.com. The script sets no cookies. Localhost is not counted.

Each visit is stored as `sailboatadventure.dk` plus the menu path, so the rows are Home, Planned Route, Join Our Journey, History, Tips, About us, and Contact us. A page outside the menu, such as a blog post, keeps its own path. `www` is counted with the bare domain. Flag-sheet visits stay on `/`, and a finished PDF stays on the event `download-pdf`.

## Contact form

Contact us, About us, and Join Our Journey post to `/api/contact.php`. On one.com that script delivers the message to `blueheaven@sailboatadventure.dk`. The site does not publish an email address or phone number.

To try a submission locally without sending mail, start PHP from the repo root, then start the dev server:

```
CONTACT_MAIL_SINK=/tmp/sailboat-contact.txt php -S 127.0.0.1:8089 -t public
npm run dev
```

The dev server proxies `/api` to that PHP process, and the message is appended to the sink file.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
