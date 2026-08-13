import { createServer } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distIndex = path.join(root, 'dist', 'index.html');

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
});

const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
const appHtml = render();

const template = fs.readFileSync(distIndex, 'utf-8');
const finalHtml = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
fs.writeFileSync(distIndex, finalHtml);

await vite.close();

console.log(`Prerendered ${appHtml.length} chars of markup into dist/index.html`);
