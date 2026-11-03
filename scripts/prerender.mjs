import { createServer } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const templatePath = path.join(root, 'dist', 'index.html');

const SITE_URL = 'https://beamdotsmedia.com';
const DEFAULT_URL = `${SITE_URL}/`;

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
});

const { render, ROUTE_META, ZH_SERVICE_NAMES, HTML_LANG, LOCALES, localePath } = await vite.ssrLoadModule('/src/entry-server.tsx');
const baseTemplate = fs.readFileSync(templatePath, 'utf-8');
const { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION } = ROUTE_META.en['/'];

const OG_LOCALE = { en: 'en_MY', zh: 'zh_MY' };

const hreflangTags = (routePath) => {
  const zhUrl = `${SITE_URL}${localePath(routePath, 'zh')}`;
  const enUrl = `${SITE_URL}${routePath}`;
  return [
    ['en', enUrl],
    ['zh-Hans', zhUrl],
    ['zh-MY', zhUrl],
    ['x-default', enUrl],
  ].map(([lang, url]) => `<link rel="alternate" hreflang="${lang}" href="${url}" />`).join('\n    ');
};

const localizeBusinessJsonLd = (html) =>
  html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/, (_, open, json, close) => {
    const data = JSON.parse(json);
    data.hasOfferCatalog.name = '服务';
    for (const { itemOffered } of data.hasOfferCatalog.itemListElement) {
      const servicePath = new URL(itemOffered.url).pathname;
      itemOffered.name = ZH_SERVICE_NAMES[servicePath];
      itemOffered.url = `${SITE_URL}${localePath(servicePath, 'zh')}`;
    }
    return `${open}${JSON.stringify(data)}${close}`;
  });

for (const locale of LOCALES) {
  for (const [routePath, meta] of Object.entries(ROUTE_META[locale])) {
    const pagePath = localePath(routePath, locale);
    const appHtml = render(pagePath);

    let html = locale === 'zh' ? localizeBusinessJsonLd(baseTemplate) : baseTemplate;
    html = html.replace('<html lang="en">', `<html lang="${HTML_LANG[locale]}">`);
    html = html.replaceAll(DEFAULT_TITLE, meta.title);
    html = html.replaceAll(DEFAULT_DESCRIPTION, meta.description);
    // Only replace DEFAULT_URL when it's the *entire* attribute value (immediately
    // followed by a closing quote) — a plain replaceAll would also match it as a
    // prefix inside unrelated absolute URLs like ".../logo.jpg", corrupting them.
    const defaultUrlAsFullValue = new RegExp(`${DEFAULT_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=")`, 'g');
    html = html.replace(defaultUrlAsFullValue, `${SITE_URL}${pagePath}`);
    const ogLocaleTags = LOCALES.map((l) => `<meta property="og:locale${l === locale ? '' : ':alternate'}" content="${OG_LOCALE[l]}" />`).join('\n    ');
    html = html.replace('</head>', `  ${hreflangTags(routePath)}\n    ${ogLocaleTags}\n  </head>`);
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    const outDir = path.join(root, 'dist', pagePath);
    fs.mkdirSync(outDir, { recursive: true });
    const outFile = path.join(outDir, 'index.html');
    fs.writeFileSync(outFile, html);
    console.log(`Prerendered ${pagePath} (${appHtml.length} chars) -> ${path.relative(root, outFile)}`);
  }
}

await vite.close();
