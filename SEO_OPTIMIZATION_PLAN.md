# SEO Optimization Plan — beamdotsmedia.com

Goal: move beyond ranking only for the exact brand name ("Beamdots Media") to ranking for relevant service/local keywords.

Site reality driving this plan: single-page React SPA (Vite, no SSR, no router) — one URL, anchor-linked sections (`#strategy`, `#results`, `#portfolio`, `#plan`, `#contact`). That structurally caps how many keywords the site can compete for until Phase 4 is done.

Status: Google Search Console ownership verified (`public/googledbc8db625182e839.html`). ✅

---

## Phase 1 — Technical / Crawlability Fixes
*Low effort, unblocks everything else. Do this first.*

- [x] Fix `og:url` / `twitter:url` in [index.html](index.html) — now point to `https://beamdotsmedia.com/`
- [x] Add `<link rel="canonical" href="https://beamdotsmedia.com/">`
- [x] Add `public/robots.txt` (allow all, points to sitemap)
- [x] Add `public/sitemap.xml` (single URL for now — expands in Phase 4)
- [x] Self-host favicon + OG share image (`public/logo.jpg`) instead of hotlinking `i.ibb.co`
- [x] Add `ProfessionalService` JSON-LD structured data (name, logo, url, address, phone, service types) — `sameAs` social links still missing, add once social profiles exist
- [ ] Submit `sitemap.xml` in Search Console once deployed
- [ ] Use URL Inspection → Request Indexing on the homepage once deployed

## Phase 2 — On-Page Content Optimization
*Same effort, bigger relevance impact.*

- [x] Rework `<title>` → "BeamDots Media | Performance Marketing Agency in Petaling Jaya, Selangor"
- [x] Rework meta description with location + service keywords
- [x] Add keyword-rich eyebrow line + rewritten intro paragraph in [App.tsx](src/App.tsx) hero section (location + services named explicitly, `<h1>` tagline kept for conversion)
- [x] Add descriptive, keyword-relevant `alt` text to logo, hero portrait, problem-section image, all 6 portfolio project images, founder photo, and 4-step process images
- [x] Mark purely decorative background image (`contactBg`) as `alt=""` (was mislabeled as content)
- [ ] Expand body copy further per section if rankings plateau — still fairly visual/motion-heavy
- [ ] Finalize/expand target keyword list beyond what's already reflected (pull from `scripts/keywords.txt`, refine with real search volume — see "Open Decisions" below)

## Phase 3 — Local SEO
*Fastest way to rank for "[service] in [city]" style terms — independent of organic ranking.*

- [ ] Create Google Business Profile (no domain ownership required — see prior discussion). Verify via postcard/phone/video.
- [ ] Fill out category, service area, hours, description with target keywords
- [ ] Get initial reviews from past/current clients
- [ ] List on relevant local directories for NAP (name/address/phone) consistency
- [ ] Link GBP profile → website, and website → GBP (mutual signal)

## Phase 4 — Content Expansion
*Biggest long-term lever. One URL cannot rank for many distinct keywords — this removes that ceiling.*

- [ ] Decide: add a few static case-study/services pages, or a lightweight blog (needs routing — currently no router in the app)
- [ ] Each new page targets one distinct keyword cluster from Phase 2's keyword list
- [ ] Update `sitemap.xml` as pages are added
- [ ] Internal-link new pages from the homepage nav/footer

## Phase 5 — Off-Page (Authority)
*Domain authority is often why competitors outrank you even with weaker on-page content.*

- [ ] Backlinks from partners, clients, industry directories, guest posts
- [ ] Social profiles (LinkedIn, Instagram, etc.) linking back to the site — also feeds `sameAs` in the JSON-LD from Phase 1
- [ ] Press/PR mentions if available

## Phase 6 — Performance (Core Web Vitals)
*Ranking factor, and affects conversion once people land.*

- [ ] Audit image sizes/formats (check `src/assets/images/` — the hero PNG in particular; also note most content images are still hotlinked from `i.ibb.co`/Unsplash — fine for now but no uptime/perf control)
- [ ] Lighthouse pass on the deployed Vercel URL — LCP, CLS, INP
- [x] Lazy-load below-the-fold images (problem-section, portfolio, founder, process-step, contact-background images all set to `loading="lazy"`; hero image left eager since it's the likely LCP element)

---

## Measurement

Baseline and re-check ranking movement using the existing [SEO_RANKING_PLAN.md](SEO_RANKING_PLAN.md) (Search Console + SerpAPI scripts). Pull a baseline CSV before starting Phase 1, then re-check 1–2 weeks after each phase ships.

---

## Open Decisions (need your input before I implement further)

1. **Target keywords + location**: what city/country/service terms should Phase 2 actually target? `scripts/keywords.txt` has placeholders (Malaysia/KL) — confirm or correct.
2. **Content expansion approach (Phase 4)**: static case-study pages vs. a blog? This determines whether a router (e.g. React Router) needs to be added to the app.
3. **Google Business Profile**: who's setting it up — you, or do you want me to prep the copy/category/description for it?
