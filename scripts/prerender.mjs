import { createServer } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const templatePath = path.join(root, 'dist', 'index.html');

const DEFAULT_TITLE = 'BeamDots Media | Full-Service Growth Marketing Agency';
const DEFAULT_DESCRIPTION = "Full-service growth marketing agency helping Malaysian SMEs turn content, social media, Meta & Google Ads, XHS marketing, and websites into sales.";
const DEFAULT_URL = 'https://beamdotsmedia.com/';

const routes = [
  {
    path: '/',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  {
    path: '/services/content-planning',
    title: 'Content Planning & Strategy | BeamDots Media',
    description: "Content planning for Malaysian SMEs — monthly calendars mapped to your campaigns across Instagram, TikTok, and XHS, so every post has a job to do.",
  },
  {
    path: '/services/video-production',
    title: 'Video Production & Shooting | BeamDots Media',
    description: "Video production and shooting for Malaysian SMEs — product shoots and ad-ready creative for Reels, TikTok, XHS, and Meta & Google Ads campaigns.",
  },
  {
    path: '/services/social-media-management',
    title: 'Social Media Management | BeamDots Media',
    description: "Social media management for Malaysian SMEs — daily posting, community management, and profile optimization across Instagram, Facebook, and XHS.",
  },
  {
    path: '/services/facebook-instagram-ads',
    title: 'Meta Ads Management (Sales Focused) | BeamDots Media',
    description: "Meta Ads management for Malaysian SMEs — audience targeting, creative testing, and retargeting tied to ROAS, not reach. Up to 12x return on ad spend.",
  },
  {
    path: '/services/google-ads',
    title: 'Google Ads / PPC Management | BeamDots Media',
    description: "Google Ads / PPC management for Malaysian SMEs — keyword research, conversion tracking, and budget management built to turn traffic into sales.",
  },
  {
    path: '/services/xhs-influencer-marketing',
    title: 'XHS Influencer Marketing | BeamDots Media',
    description: "Xiaohongshu (XHS/RedNote) influencer and KOC marketing for Malaysian brands — creator sourcing, briefs, and performance tracking for beauty and F&B brands.",
  },
  {
    path: '/services/website-creation',
    title: 'Website Creation & Design | BeamDots Media',
    description: "Website creation and design for Malaysian SMEs — fast, mobile-first websites and landing pages built to convert the traffic you're already sending.",
  },
  {
    path: '/services/funnel-optimization',
    title: 'Sales Funnel Optimization | BeamDots Media',
    description: "Sales funnel optimization for Malaysian SMEs — full funnel audits, landing page CRO, and checkout fixes that turn existing traffic into more revenue.",
  },
  {
    path: '/case-studies',
    title: 'Case Studies | BeamDots Media',
    description: "Real client results from BeamDots Media across beauty, F&B e-commerce, furniture, and interior design — Meta Ads, Google Ads, and funnel case studies.",
  },
  {
    path: '/about',
    title: 'About Us & Our Process | BeamDots Media',
    description: "Meet the team behind BeamDots Media and the 4-step process we use to take a Malaysian SME from scattered marketing to a predictable sales engine.",
  },
  {
    path: '/service-areas',
    title: 'Service Areas | BeamDots Media',
    description: "BeamDots Media is based in Petaling Jaya, focused on Malaysian SMEs nationwide — and since our work is remote-deliverable, we take on clients worldwide too.",
  },
];

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
});

const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
const baseTemplate = fs.readFileSync(templatePath, 'utf-8');

for (const route of routes) {
  const appHtml = render(route.path);

  let html = baseTemplate.replaceAll(DEFAULT_TITLE, route.title);
  html = html.replaceAll(DEFAULT_DESCRIPTION, route.description);
  // Only replace DEFAULT_URL when it's the *entire* attribute value (immediately
  // followed by a closing quote) — a plain replaceAll would also match it as a
  // prefix inside unrelated absolute URLs like ".../logo.jpg", corrupting them.
  const defaultUrlAsFullValue = new RegExp(`${DEFAULT_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=")`, 'g');
  html = html.replace(defaultUrlAsFullValue, `https://beamdotsmedia.com${route.path}`);
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outDir = path.join(root, 'dist', route.path);
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, 'index.html');
  fs.writeFileSync(outFile, html);
  console.log(`Prerendered ${route.path} (${appHtml.length} chars) -> ${path.relative(root, outFile)}`);
}

await vite.close();
