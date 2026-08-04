# What changed

Your site now runs on Jekyll, which GitHub Pages builds automatically on every
push — no local build step, no new tools, same Sublime + git + GitHub Pages
workflow you already use.

## How to install this into your repo

1. Copy every file/folder in this zip into your repo, **replacing**
   `index.html`, `about.html`, and `contact.html`.
2. Do **not** touch `images/`, `videos/`, `assets/CoryBlack-Resume.pdf`,
   `navbar-functionality.js`, or `sitemap.xml` — those stay exactly as they
   are in your repo now. This zip doesn't include your media files; the new
   pages just point at the same paths as before.
3. Commit and push. GitHub Pages will build the Jekyll site automatically —
   check the "Pages" tab in your repo settings, or the Actions tab, to
   confirm the build succeeded. Give it a minute or two, then check the live
   site.
4. **Before you push:** check your repo root for a file called `.nojekyll`.
   If it exists, delete it — that file tells GitHub Pages to skip Jekyll
   entirely and serve raw files, which would break everything in this
   migration (you'd see literal `{% for %}` tags and front matter text on
   the live pages instead of a rendered site).
5. See "Local preview" below if you want to see changes before pushing.

## Local preview (optional but recommended)

This repo now includes a `Gemfile` that installs the same Jekyll setup
GitHub Pages builds with, so what you see locally matches what goes live.

**One-time setup:**

- **Mac:** install Ruby via Homebrew (the system Ruby that ships with macOS
  is too old): `brew install ruby`, then add
  `export PATH="/opt/homebrew/opt/ruby/bin:$PATH"` to your `~/.zshrc` and
  restart your terminal.
- **Windows:** install Ruby via [RubyInstaller](https://rubyinstaller.org/)
  — pick the "Ruby+Devkit" version, and let the installer run `ridk install`
  at the end (accept the default options).
- **Either OS**, then from the project folder:
  ```
  gem install bundler
  bundle install
  ```

**Every time you want to preview:**
```
bundle exec jekyll serve --livereload
```
Then open `http://localhost:4000` in your browser. Leave that command
running in a terminal tab — it rebuilds and refreshes your browser
automatically every time you save a file. `Ctrl+C` to stop it.

**Don't want to install Ruby?** If you have Docker, this does the same thing
with zero local installs:
```
docker run --rm -it -p 4000:4000 -v "$PWD:/srv/jekyll" jekyll/jekyll jekyll serve --livereload
```

Either way, once it looks right locally, commit and push as normal.

## Your new day-to-day workflow

**Add a gallery photo to the About page carousel** → open `_data/gallery.yml`,
copy one block, paste your new photo's info in. Order in the file = order on
the page.

**Add/change an upcoming show on the homepage** → open `_data/shows.yml`,
same idea. There's also a stash of your past/commented-out shows at the
bottom of that file if you want to bring one back later — just delete the
`#` at the start of each line.

**Add a new collaboration/client logo** → `_data/clients.yml`.

**Swap the two homepage showreel videos, or add a third** → `_data/videos.yml`.
`youtube_id` is just the part of the YouTube URL after `v=` or `youtu.be/`.

**Change bio text, section headers, or the layout of a page** → edit
`index.html` / `about.html` / `contact.html` directly, same as before — these
are now much shorter since the repeated navbar/footer/CSS are gone.

**Change the navbar, footer, or site-wide colors/fonts** → edit
`_includes/navbar.html`, `_includes/footer.html`, or `assets/css/main.css`
**once** — it updates all three pages automatically. You'll never again need
to make the same edit three times.

## What's where

```
_config.yml              site title/description, used in page <head> tags
_layouts/default.html    the shared page shell (<head>, navbar, footer, scripts)
_includes/navbar.html    navbar markup (active-page highlighting is automatic now)
_includes/footer.html    footer markup
_data/*.yml              editable content: shows, gallery photos, client logos, videos
assets/css/main.css      shared styles (navbar, footer, base layout)
assets/css/home.css      homepage-only styles
assets/css/about.css     about-page-only styles
assets/css/contact.css   contact-page-only styles
index.html               homepage content
about.html                about page content
contact.html             contact page + form
```

## A couple of small intentional changes

- The footer copyright year now updates automatically each year instead of
  being hardcoded (it said "2023" before).
- The navbar's active-page underline is now automatic based on the URL,
  instead of a manually-placed `id="active"` you had to move by hand on each
  page.

Everything else — visual design, the reCAPTCHA/Formspree contact form logic,
the photo carousel behavior, YouTube embeds — is unchanged.
