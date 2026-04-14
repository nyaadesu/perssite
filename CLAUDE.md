# persweb — Claude instructions

Personal website for Arielle (nya). Windows 98 aesthetic, Eleventy 2 SSG, hosted on Nekoweb at nyadesu.nekoweb.org / ariel.hart.cat.

## Stack

- **SSG:** Eleventy 2.0.1 with Nunjucks templates
- **CSS:** 98.css + custom `src/css/style.css`
- **i18n:** client-side JS switcher (`src/js/i18n.js`), EN/CA, persisted in localStorage via `data-i18n` / `data-i18n-html` attributes
- **Desktop pet:** Kyubey, walks around the page
- **RSS:** RSS 2.0 at `/feed.xml` (Nekoweb-compatible)

## Workflow

### Editing files
Edit source files under `src/`. **Do not edit `_site/` directly** except for CSS/JS hotfixes (copy with `cp`).

### Preview
The preview server (`serve.js`) serves `_site/` statically on port 8080. It starts instantly — no build needed.

**DO NOT start the preview server just to verify a code edit.** Only use it when the user wants to see the site visually. Use `mcp__Claude_Preview__preview_start` with the "persweb" config.

For CSS/JS changes that need visual checking without a full rebuild:
```
cp src/css/style.css _site/css/style.css
cp src/js/i18n.js _site/js/i18n.js
```
Then reload in the preview browser with `preview_eval` → `location.reload(true)`.

### Building
```
npm run build
```
Eleventy builds take **~2 minutes** in the Bash tool (low CPU priority). Run in background. The user can also run it themselves in Ghostty for full speed.

### Deploying
Deployment is fully automated via GitHub Actions (`.github/workflows/deploy.yml`).
Push to `main` → builds `_site/` → deploys to both:
- **GitHub Pages** at `ariel.hart.cat`
- **Nekoweb** at `nyadesu.nekoweb.org` (zip imported to `/nyadesu.nekoweb.org`)

Repo: `github.com/nyaadesu/perssite`. Secret `NEKOWEB_API_KEY` must be set in repo settings.

## Key files

| File | Purpose |
|------|---------|
| `src/_layouts/base.njk` | Shell: nav, taskbar, Kyubey pet, Win98 dialog |
| `src/css/style.css` | All custom styles |
| `src/js/i18n.js` | EN/CA language switcher |
| `src/index.njk` | Home page |
| `src/about.njk` | About — NERV terminal style |
| `src/projects.njk` | Projects — placeholder |
| `src/blog/index.njk` | Blog index |
| `src/blog/posts/*.md` | Blog posts (frontmatter: title, date, tags) |
| `src/feed.njk` | RSS 2.0 feed |
| `src/_data/site.js` | Global site data (title, url, author, email) |
| `.eleventy.js` | Eleventy config, RSS filters, passthrough copies |
| `serve.js` | Static file server for preview |

## Design notes

- Win98 grey: `#c0c0c0`, teal desktop: `#008080`, title blue: `#000080`
- "Itasha" vibe: technical Win98 authenticity + cute anime personality
- No em dashes anywhere — user hates them
- Trans flag pride stripe at top of every page
- Kyubey desktop pet with speech bubbles and contract dialogs
- שלום in the home page status bar (right side)
