# Post-Pixle

Post-Pixle is a responsive photography agency website. It presents the
studio's services, portfolio, gallery, exhibitions, team and blog, and lets
visitors send an enquiry or subscribe to a newsletter.

The site is a **static website**: the six pages are plain HTML files, styled
with Sass on top of Bootstrap, enhanced with a few JavaScript libraries, and
produced by a Gulp build pipeline running on Node.js.

## Features

- Responsive layout (tested from 360 px to 1920 px) with an off-canvas menu on
  small screens.
- Six pages: Home, Portfolio, Gallery, Exhibitions, About and Blog/Contact.
- Gallery with a masonry grid, category filters (All, Short films,
  Professional, Commercial) and a lightbox.
- Swipeable carousels for the portfolio and the exhibitions.
- Contact form and newsletter field with browser-side validation.
- Custom animated cursor on desktop.
- Automated build (Pug, Sass, Babel, vendor copy) and a static consistency
  check (`npm run check:static`).

## Tech Stack

| Area | Technology |
|---|---|
| Markup | HTML5, Pug 3 (page wrappers) |
| Styling | CSS3 written in Sass/SCSS on top of Bootstrap 5.1.3 |
| Scripting | JavaScript (ES6), Swiper 12, Isotope + Packery, GLightbox |
| Build | Gulp 4, Babel, BrowserSync |
| Runtime | Node.js 18+ and npm 9+ (Node 20 suggested in `.nvmrc`) |
| Icons / fonts | Font Awesome Free, Open Sans (Google Fonts) |

## Requirements

- Node.js 18 or later
- npm 9 or later

Check your versions:

```bash
node --version
npm --version
```

## Getting Started

```bash
# 1. clone the repository
git clone <your-repository-url>

# 2. go to the project folder
cd Post-Pixle

# 3. install dependencies
npm ci

# 4. start the development server (compiles assets, live reload)
npm start
```

## Available Scripts

| Command | What it does |
|---|---|
| `npm start` | Development: clean, compile, watch and serve with BrowserSync |
| `npm run build` | Production build into `build/` |
| `npm run build:test` | Production build, then serve it for manual testing |
| `npm run check:static` | Verify page sources, Pug wrappers and forbidden patterns |

## Production Build

```bash
npm run build
```

The deployable site is generated in `build/`. Upload the contents of that
folder to any static web host. Generated folders such as `build/`, `live/` and
`dist/` are excluded from Git and can be recreated at any time.

## Project Structure

```
Post-Pixle/
├── src/
│   ├── pages-html/     the six canonical page sources (edit pages here)
│   ├── pug/            Pug wrappers that include those pages
│   ├── js/             JavaScript modules (theme, swiper, isotope,
│   │                   glightbox, cursor, detector, node, utils)
│   └── scss/           Sass theme and project overrides
├── public/             development output and images (assets/img)
├── build/              production output (generated)
├── gulp/               Gulp task files and path configuration
├── scripts/
│   └── check-static.js static verification script
├── vendors.json        which library files are copied to the output
├── gulpfile.js
├── package.json
└── README.md
```

## Source Pages

The six public pages are maintained in `src/pages-html/`. Each file in
`src/pug/` contains a single `include` line that pulls in the matching page,
so the build always uses the maintained pages and never regenerates stale
ones. `npm run check:static` verifies this.

## Forms

The contact form (email and name required) and the newsletter field use
browser-side HTML5 validation and have meaningful field names.

**No form backend or service is configured in this repository.** Submitting a
form reloads the page and does not store or send the data anywhere. Connect the
forms to your chosen form provider or backend before relying on them in
production.

## Testing

An automated test script (`test_suite.py`) drives the production build in a
real Chromium browser with Playwright. It checks page loading, navigation,
gallery filtering, the lightbox, the carousels, the mobile menu, form
validation, horizontal overflow at five viewport widths, helper-function
behaviour and JavaScript code coverage, and writes the results to
`results.json`.

```bash
# run from a folder that contains POST-PIXEL/build (or adjust the path in the script)
pip install playwright
python -m playwright install chromium
python test_suite.py
```

## Known Limitations

- Forms are not connected to a backend (see Forms).
- Content is changed by editing HTML in `src/pages-html/` and rebuilding; there
  is no admin interface.
- Some placeholder content (team names, captions, phone number and e-mail) must
  be replaced with real studio content before publishing.
- Images currently have empty `alt` text and should be given descriptions for
  accessibility.

## Attribution and Licensing

Third-party libraries, fonts and images, together with their licences, are
listed in [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md). Review the licence of every
dependency and image before redistributing or using the project commercially.
In particular, Isotope is licensed GPL-3.0 and offers a separate commercial
licence.

---

Post-Pixle: photography, creativity and visual storytelling.