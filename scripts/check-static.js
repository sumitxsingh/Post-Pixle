const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pages = ['index', 'about', 'gallery', 'portfolio', 'blog', 'exhibitions'];
const forbidden = [/polyfill\.io/i, /msapplication-TileImage/i, /swiper-container/i, /loopedSlides/i];

let failed = false;
const fail = (msg) => { console.error(`FAIL: ${msg}`); failed = true; };

for (const page of pages) {
  const source = path.join(root, 'src', 'pages-html', `${page}.html`);
  const publicPage = path.join(root, 'public', `${page}.html`);
  if (!fs.existsSync(source)) fail(`Missing canonical source: ${source}`);
  if (!fs.existsSync(publicPage)) fail(`Missing public page: ${publicPage}`);
  if (fs.existsSync(source) && fs.existsSync(publicPage)) {
    const a = fs.readFileSync(source, 'utf8');
    const b = fs.readFileSync(publicPage, 'utf8');
    if (a !== b) fail(`${page}.html differs between src/pages-html and public`);
    for (const pattern of forbidden) {
      if (pattern.test(a)) fail(`${page}.html contains forbidden/stale pattern ${pattern}`);
    }
  }
}

const wrappers = pages.map((p) => path.join(root, 'src', 'pug', `${p}.pug`));
for (const p of wrappers) {
  if (!fs.existsSync(p)) fail(`Missing Pug page wrapper: ${p}`);
  else if (!fs.readFileSync(p, 'utf8').trim().startsWith('include ../pages-html/')) fail(`Unexpected Pug wrapper content: ${p}`);
}

if (!fs.existsSync(path.join(root, 'src', 'js', 'swiper.js'))) fail('Missing swiper initializer');
else if (fs.readFileSync(path.join(root, 'src', 'js', 'swiper.js'), 'utf8').includes('swiper-container')) fail('Legacy swiper-container class remains in initializer');

const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
if (pkg.dependencies?.swiper !== '^12.2.0') fail(`Expected Swiper ^12.2.0, found ${pkg.dependencies?.swiper}`);

if (!failed) console.log('Static checks passed.');
process.exit(failed ? 1 : 0);
