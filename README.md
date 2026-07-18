# portfolio

[![Link Check](https://github.com/kannan19302/portfolio/actions/workflows/link-check.yml/badge.svg)](https://github.com/kannan19302/portfolio/actions/workflows/link-check.yml)
[![Pages](https://img.shields.io/badge/pages-live-brightgreen.svg)](https://kannan19302.github.io/portfolio/)

Source for [kannan19302's](https://github.com/kannan19302) personal portfolio site — a static,
no-build HTML/CSS/JS single page (hero, about, skills, featured project, experience,
certifications, contact). **Live at <https://kannan19302.github.io/portfolio/>** via GitHub
Pages, deployed straight from this repo's `main` branch — no separate Pages repo needed.

## Technology stack

Plain HTML5 / CSS3 / vanilla JavaScript — no framework, no build step, no dependencies.

## Local preview

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`. Or just open `index.html` directly in a browser.

## Deployment

Already configured: **Settings → Pages** on this repo serves from `main` / `/ (root)` at
`https://kannan19302.github.io/portfolio/`. Any push to `main` redeploys automatically.

## Known gap

`assets/og-image.png` (the 1200×630 social-preview image referenced by the `og:image` /
`twitter:image` meta tags in `index.html`) isn't in the repo yet, so link previews on
Twitter/LinkedIn/Slack currently show no image. A placeholder mockup is at
`assets/og-image.svg` for reference — swap in a real PNG export before relying on link previews.

## Contributing

This is a personal site — content changes (bio, résumé, work history) won't take outside PRs, but
bug reports (broken layout, links, accessibility) are welcome via [Issues](../../issues). See
[CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

All rights reserved for the personal content; see [LICENSE](LICENSE). Report security concerns
per [SECURITY.md](SECURITY.md).

## Contact

- ✉️ [kannan19302@gmail.com](mailto:kannan19302@gmail.com)
- [github.com/kannan19302](https://github.com/kannan19302)
- [linkedin.com/in/kannan--rajagopal](https://linkedin.com/in/kannan--rajagopal)
