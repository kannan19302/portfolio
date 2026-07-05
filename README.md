# kannan19302.github.io

Source for my personal portfolio site — a static, no-build HTML/CSS/JS page.

## Assets you still need to drop in before deploying

Place these files in `assets/` (referenced by `index.html` but not included in this repo):

- `Kannan_Rajagopal_Resume.pdf` — export your resume as PDF (the hero "Resume" button links here)
- `og-image.png` — 1200x630 social preview image (optional but recommended for link previews)

Placeholder shield badges for AZ-900 and DP-900 are already in `assets/` as SVGs. Swap in your real Credly PNGs (`az-900.png` / `dp-900.png`) and update the `<img src>` paths in `index.html` if you'd rather use the official badge art.

## Deploying to GitHub Pages as kannan19302.github.io

1. Create a new GitHub repository named exactly `kannan19302.github.io` (the special repo name that GitHub Pages serves at the root of your username domain).
2. Push this folder's contents to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/kannan19302/kannan19302.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. Save. GitHub will publish the site at `https://kannan19302.github.io/` within a minute or two.
6. Any future push to `main` redeploys automatically — no build step required.

## Local preview

Just open `index.html` in a browser, or serve it locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
