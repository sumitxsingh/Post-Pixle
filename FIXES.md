# Post-Pixle Fixes

This package was cleaned for source-control use and future reproducible builds.

## Applied

- Made the customized Post-Pixle pages the canonical page source under `src/pages-html/`.
- Updated the six Pug entry points to compile those canonical pages, preventing the old template source from silently overwriting the customized site.
- Removed the `polyfill.io` script reference.
- Upgraded Swiper from the vulnerable 6.x line to `^12.2.0` and updated the lockfile.
- Removed legacy Swiper `swiper-container` markup and the removed `loopedSlides` option.
- Updated the custom Swiper initializer's generated thumbnail container class.
- Added `rel="noopener noreferrer"` to links using `target="_blank"`.
- Fixed the contact form phone placeholder and added semantic field names/browser validation to form fields.
- Added an accessible label to the newsletter submit control.
- Removed stale/broken Microsoft tile favicon metadata.
- Removed generated `build/`, `live/`, `dist/`, generated CSS/JS, vendored dependency copies, and local VS Code launch metadata from the source package; these can be recreated by Gulp.
- Added Git ignore rules for generated output and environment files.
- Added `npm run check:static` for repeatable local sanity checks.
- Added README, attribution guidance, and a Node version hint.

## Verification

- Static project checks: PASS.
- HTML parser sanity checks: PASS.
- `npm ci --dry-run --ignore-scripts --offline`: PASS; the lockfile is internally consumable by npm.
- A real dependency install/build was not completed in the packaging environment because access to the npm registry was unavailable and the local npm cache did not contain every required tarball. Run `npm ci` and `npm run build` locally after extracting the ZIP.
