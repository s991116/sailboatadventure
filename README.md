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

## Contact form (Web3Forms)

Both **Contact us** (`/contact/`) and **Join Our Journey** (`/join-our-journey/#contact`) send messages via [Web3Forms](https://web3forms.com/) using the same access key. The site does not publish an email address or phone number — submissions are delivered to `blueheaven@sailboatadventure.dk`.

### Setup

1. Go to [web3forms.com](https://web3forms.com/) and create an access key with **`blueheaven@sailboatadventure.dk`**.
2. Confirm the verification email in that inbox (check spam/promotions if needed).
3. Copy the access key and add it in two places:
   - **Local dev**: create `.env` from `.env.example` and set `PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here`
   - **Production**: GitHub repo → **Settings → Secrets and variables → Actions → Variables** → add `PUBLIC_WEB3FORMS_ACCESS_KEY` with the same value
4. Restart the dev server (`npm run dev`) or push to `main` to trigger a deploy.

### Test

Open `/contact/` or `/join-our-journey/#contact`, send a test message, and check that it arrives in `blueheaven@sailboatadventure.dk`.

Until the key is set, the form shows a setup notice and the submit button stays disabled.

### Notes

- The access key is public in the built HTML — that is expected. It only forwards messages to the email address you verified when creating the key.
- Web3Forms free tier: 250 submissions/month.

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
