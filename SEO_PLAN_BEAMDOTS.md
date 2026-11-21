# SEO Plan — beamdotsmedia.com

Applies [SEO_SOP.md](SEO_SOP.md) to BeamDots Media. Backlinks are out of scope for now.
Data pulled from DataForSEO (Google, Malaysia, location `2458`) and Google Search Console on **2026-11-21**.

Supersedes Phase 2 and Phase 4 of [SEO_OPTIMIZATION_PLAN.md](SEO_OPTIMIZATION_PLAN.md) (on-page and content expansion). The technical work in that file (prerender, sitemap, canonical, hreflang) is already done.

> ### Current scope (decided 2026-11-21, updated same day)
> - **Test cluster live: Meta ads.** Full funnel built: money page + `/guides` hub + 2 guides (EN + ZH). This is the test for whether guides are worth rolling out to other clusters. See [§4b](#4b-meta-ads-cluster-test).
> - **On hold:** guides for **all other clusters**, **all XHS work** (including the XHS service page), and individual case-study pages.
> - **In scope:** strengthening the **existing money pages** so they also cover the research-stage questions (cost, FAQ, who it's for), plus local (PJ) signals and expanding the Chinese versions.
> - Sections 1.3 (clusters), 2 and 3.4–3.5 still describe the full guide-based funnel for when guides are revisited. **The active work is in [§4 Roadmap](#4-roadmap-current-scope).**

---

## 0. Where we stand

**Business:** a growth marketing agency in Petaling Jaya for Malaysian SMEs (beauty, F&B, e-commerce, furniture, interior). It has 9 services. Its edge is **XHS/小红书 + Meta ads for Chinese-speaking Malaysian businesses**, backed by results like "up to 12x ROAS".

**Authority:** a new, small domain. We can't win head terms like "digital marketing agency malaysia" or "website design malaysia" yet. We **start where the competition is weak** and work toward those terms.

### What GSC already tells us (last 3 months)

| Query | Clicks | Impr. |
|---|---|---|
| beamdots media | 8 | 78 |
| meta ads agency pj | 0 | 6 |
| social media content management services | 0 | 3 |
| google ads ppc services malaysia | 0 | 3 |
| xhs agency petaling jaya | 0 | 3 |
| facebook ads agency pj | – | – |

**Insight:** apart from the brand name, **every query Google already matches us to is "[service] + PJ / Petaling Jaya / Malaysia"**. Google sees us as a *local service agency*, and the "PJ" modifier is our foothold. None of the current titles or H1s contain "PJ", and only some mention Malaysia. That's the first quick win.

### Funnel gap

| Funnel stage | Pages we have |
|---|---|
| TOFU (guides) | **none** |
| MOFU (cost / vs / how to choose) | **none** |
| BOFU (money pages) | 9 service pages, home, case studies, service areas, about (EN + ZH) |

All 24 URLs are bottom-of-funnel pages, which are the hardest to rank for a new domain. Nothing catches the much larger group of business owners who are still researching. **This plan builds the TOFU/MOFU layer and connects it to the existing money pages.**

### On-page audit of the current pages (prerendered `dist/`)

| Check | Status |
|---|---|
| 1 H1 per page | ✅ all 24 pages |
| Title ≤ 60 chars | ✅ (29–53 chars) |
| Title mirrors H1 | ❌ e.g. title "Meta Ads Management (Sales Focused)" vs H1 "Facebook & Instagram Ads Management in Malaysia" |
| Location keyword in title | ❌ English titles don't mention "Malaysia" or "PJ" (Chinese titles do) |
| Meta description 150–160 (EN) | ⚠️ 143–156; most are 1–7 chars short |
| Meta description length (ZH) | ✅ 48–73 Chinese chars (fine for CJK; 70–80 is ideal) |
| H2/H3 structure | ✅ sensible; service pages use H2s only |
| Content depth | ⚠️ EN ~620–930 words including nav and footer, so ~400–600 of real body. ZH ~550 Chinese chars. Thin for commercial terms. |
| Clean, categorised URLs | ✅ `/services/<slug>`, `/zh/...`. Missing a `/guides/` category |

---

## 1. Keyword research

### 1.1 Ideation — 30 questions a Malaysian SME owner asks before hiring an agency

Volumes are Malaysia monthly searches from DataForSEO. "–" means no recorded volume; for long-tail keywords in this market that's normal, not a reason to drop them.

**TOFU — "something's not working / what is this?"**

| # | Question the owner has | Keyword form | Vol | KD |
|---|---|---|---|---|
| 1 | What does ROAS mean and what's a good number? | roas meaning / what is roas | 590 + 140 | 32 |
| 2 | What's a KOC, and how is it different from a KOL? | koc meaning / kol vs koc | 590 / 90 ↑89% YoY | – |
| 3 | What's a marketing funnel? | marketing funnel / sales funnel | 1,000 / 480 | 35 / 30 |
| 4 | What should I post? What are content pillars? | content pillars | 170 | 13 |
| 5 | Is there a content calendar template? | content calendar template / social media content calendar | 170 / 70 | 42 / 59 |
| 6 | How do I market my business on Xiaohongshu in Malaysia? | xiaohongshu malaysia / 小红书 马来西亚 | 170 / 70 | 7 |
| 7 | Can a Malaysian business open an XHS business account or get a blue tick? | xiaohongshu business account | 20 (CPC RM15) | – |
| 8 | Why are my Facebook ads not converting? | facebook ads not converting / not working | 10 + 10 | – |
| 9 | What is UGC content and where do I find creators? | ugc creator malaysia | 70 ↑125% YoY | – |
| 10 | What is CRO? | what is cro | – | – |
| 11 | Are there government grants for digitalising my marketing? | mdec grant | 320 | 22 |

**MOFU — "how much, which one, who?"**

| # | Question | Keyword form | Vol | KD |
|---|---|---|---|---|
| 12 | How much do Facebook ads cost in Malaysia? | facebook ads fee / price / cost (+ malaysia) | 140 + 140 + 140 + 40 | 30 |
| 13 | How much does Google Ads cost in Malaysia? | google ads price malaysia | 30 (CPC RM5.8) | 44 |
| 14 | How much does a website cost in Malaysia? | website design price / cost malaysia | 70 + 70 | 6 |
| 15 | How much does a social media manager or agency cost? | social media management package / price malaysia | 10 + 10 | 41 |
| 16 | How much does a video shoot cost? | video shooting price malaysia | 10 | – |
| 17 | Should I run Meta ads or Google ads? | meta ads vs google ads / facebook ads vs google ads | 10 | – |
| 18 | Should I hire a social media manager or an agency? | agency vs in-house | – | – |
| 19 | How do I choose a digital marketing agency in Malaysia? | how to choose digital marketing agency | 10 | – |
| 20 | What should an agency package include? | digital marketing package malaysia | 10 | 38 |
| 21 | Is XHS worth it for an F&B or beauty brand in Malaysia? | xiaohongshu marketing malaysia | 40 | – |
| 22 | Landing page or full website? | landing page malaysia | 50 | – |

**BOFU — "I'm ready to hire"**

| # | Question | Keyword form | Vol | KD |
|---|---|---|---|---|
| 23 | Who's a good marketing agency in Malaysia? | marketing agency malaysia | 390 | 15 |
| 24 | Digital marketing agency in PJ or Selangor? | digital marketing agency pj / selangor | 10 / 20 | – |
| 25 | Facebook / Meta ads agency in PJ? | meta ads agency pj, facebook ads agency pj (**GSC**) | – | – |
| 26 | Google Ads agency in Malaysia? | google ads agency malaysia / google ads malaysia | 140 / 260 (CPC RM9.9–24.8) | – / 7 |
| 27 | XHS / Xiaohongshu agency in Malaysia or PJ? | xhs agency petaling jaya (**GSC**), xiaohongshu marketing agency | – / 20 | – |
| 28 | Web design company in Malaysia? | web design company malaysia | 390 | 25 |
| 29 | Video production company in Malaysia? | video production company / corporate video production malaysia | 140 + 140 + 110 | 15 |
| 30 | Social media management services in Malaysia? | social media marketing malaysia / management services (**GSC**) | 320 / 70 | – |

### 1.2 Validation — what we target and what we drop

Scoring follows the SOP: Fit, Intent and Difficulty, each 0–3. Two SERPs were checked by hand (see 1.4).

**✅ Target now**

| Keyword (primary) | Vol | Fit | Intent | Diff. | Why |
|---|---|---|---|---|---|
| koc meaning + kol vs koc | 680 | 3 | 2 | 3 | Rising, low competition, no agency owns it. Feeds the XHS money page. |
| xiaohongshu malaysia / marketing | 210 | 3 | 2 | 3 | Page 1 is Instagram reels, a Singapore agency and small blogs, so it's a **weak SERP**. This is our core niche. |
| facebook ads cost malaysia (fee/price) | ~450 combined | 3 | 3 | 3 | Page 1 is US, New Zealand and Singapore articles, a Facebook post and a Malay price page, so it's **weak**. The only local, up-to-date price guide wins it. |
| roas meaning / what is roas | 730 | 3 | 2 | 2 | We can prove ROAS (12x case study). Bridges to the Meta and Google ads pages. |
| website design price/cost malaysia | 140 | 3 | 3 | 3 | KD 6, clear buyer intent. |
| google ads malaysia / google ads agency malaysia | 400 | 3 | 3 | 2 | KD 7, highest CPC (RM9.9–24.8), so these clicks are worth a lot. |
| marketing agency malaysia | 390 | 3 | 3 | 2 | KD 15. The homepage target. |
| content pillars | 170 | 2 | 2 | 3 | KD 13. Feeds content planning. |
| video production company malaysia (+ corporate) | 390 | 3 | 3 | 2 | KD 15. |
| web design company malaysia | 390 | 3 | 3 | 2 | KD 25. Fallback for "website design malaysia". |
| "[service] agency PJ" variants (GSC) | – | 3 | 3 | 3 | Already getting impressions, so these are proven. Almost no competition. |

**⏳ Later (after the easier cluster pages rank)**

| Keyword | Vol | KD | Reason to wait |
|---|---|---|---|
| marketing funnel / sales funnel | 1,000 / 480 | 35 / 30 | Global publishers rank. Good TOFU, but harder. |
| digital marketing agency malaysia | 720 | 41 | The goal head term. Climb toward it via the cluster. |
| mdec grant | 320 | 22 | Medium fit. Do it as "using MDEC grants for digital marketing", and verify it against the SERP first. |
| social media content calendar / template | 70 / 170 | 59 / 42 | Template sites dominate. Only worth it with a downloadable template. |
| ugc creator malaysia | 70 ↑ | – | Rising. Fits the video cluster once a UGC offer exists. |

**❌ Drop (bad fit, wrong intent, or giant SERP)**

| Keyword | Vol | Why dropped |
|---|---|---|
| seo agency malaysia | 1,300 | **Fit 0.** We don't sell SEO. High volume is a trap. |
| website design malaysia | 3,600 | KD 52, a giant SERP. Target "web design company malaysia" and "price" instead. |
| digital marketing agency petaling jaya | 30 | KD 71. Use "digital marketing agency PJ" (shorter form, no competition) instead. |
| facebook ads manager / library / login | 5k+ | Navigational. People want Meta's own tool. |
| social media management tools | 4,400 | They want software, not an agency. |
| xiaohongshu download / login / web | 1k+ | Navigational or transactional, so no fit. |
| social media ban malaysia | 1,900 | News intent. Fit too weak. |
| shopify malaysia | 1,600 | They want Shopify itself. |
| digital marketing course malaysia | 260 | They want training, not a service. |

**Note on Chinese demand:** Google records very little Chinese volume in Malaysia (小红书 马来西亚 70, 小红书 kol 20, 小红书 营销/推广 10 each). Chinese searches split into many spellings, and much research happens *inside* XHS itself. Treat every `/zh/` guide as a **translated twin** of the English guide, not a separate keyword target. Both versions are cheap to rank and catch the same audience.

### 1.3 Clusters

Eight clusters, ranked by **ease × closeness to revenue**. Work through them one at a time, from the top.

| Priority | Cluster | Money page (BOFU) | Supporting pages (new) | Why this order |
|---|---|---|---|---|
| **1** | **XHS / 小红书 marketing** | `/services/xhs-influencer-marketing` | `/guides/koc-vs-kol` (TOFU) · `/guides/xiaohongshu-marketing-malaysia` (MOFU) · `/guides/xiaohongshu-business-account-malaysia` (TOFU) | Our niche. Weakest SERPs, rising demand, GSC already shows "xhs agency petaling jaya". |
| **2** | **Meta ads** | `/services/facebook-instagram-ads` | `/guides/facebook-ads-cost-malaysia` (MOFU) · `/guides/what-is-roas` (TOFU) · `/guides/facebook-ads-not-converting` (TOFU) | Weak cost SERP. ROAS is our proof point. GSC shows "meta/facebook ads agency pj". |
| **3** | **Google ads** | `/services/google-ads` | `/guides/google-ads-cost-malaysia` (MOFU) · `/guides/meta-ads-vs-google-ads` (MOFU **bridge** to clusters 2 and 3) | Highest CPC, so the most valuable clicks. KD 7. |
| **4** | **Website** | `/services/website-creation` | `/guides/website-design-cost-malaysia` (MOFU) · `/guides/landing-page-vs-website` (MOFU) | KD 6 on price. |
| **5** | **Agency (hub)** | `/` (home) + `/service-areas` | `/guides/how-to-choose-digital-marketing-agency-malaysia` (MOFU) · `/guides/marketing-agency-vs-in-house` (MOFU) | Lifts every service page. Targets "marketing agency malaysia" and PJ terms. |
| **6** | **Content & social** | `/services/social-media-management` + `/services/content-planning` | `/guides/content-pillars` (TOFU) · `/guides/social-media-management-price-malaysia` (MOFU) | Lower volume, KD 13 on pillars. |
| **7** | **Video** | `/services/video-production` | `/guides/video-production-cost-malaysia` (MOFU) · later `/guides/ugc-video-malaysia` | Low-competition money terms. Guides optional. |
| **8** | **Funnel** | `/services/funnel-optimization` | `/guides/marketing-funnel` (TOFU) · `/guides/what-is-cro` (TOFU) | Big volume but harder (KD 30–35). Do it last. |

Every guide also gets a `/zh/guides/<same-slug>` twin.

### 1.4 Sample SERP checks (difficulty proof)

**"facebook ads cost malaysia"** top 10: Udemy · viralyft (US) · hargaupah.com (Malay, RM500–2,000/mo) · a Facebook post (Chinese) · webmaxy · digigo.co.nz (NZ) · megadigital.ai · a Malaysian freelancer's service page · bloatmedia (Singapore).
→ No dominant local guide, and half the results are foreign. **Winnable.**

**"xiaohongshu marketing malaysia"** top 10: Instagram reel · misaxmedia blog (ZH) · advergreen (Singapore) · Instagram reel · bigdomain.my ×2 · Instagram reel · marketinglancers.com.my · tinkersociety.
→ Three Instagram reels on page 1 means Google can't find good pages. **Very winnable.** Bigdomain.my and misaxmedia are the local competitors to study.

---

## 2. Content research — how we'll run it per page

Use the SOP Phase 2 template for each supporting page and each money page, **cluster by cluster**:

1. Pull the top 10 with `/v3/serp/google/organic/live/regular` (MY, en). For ZH pages, also Google the Chinese query.
2. Read the top 5 organic pages. Record word count, H2 outline, angle, topics covered, what they missed and date.
3. Write a brief: must-cover topics (covered by 3+ of the 5), gaps, target length (median to +20%), angle, CTA and links.

**Angles already visible from the two SERPs above:**

- **Facebook ads cost:** existing results give US dollar CPC averages or a single "RM500–2,000" line. **Our gap:** a full Malaysian breakdown in RM, covering ad spend vs agency fee, CPM/CPC/CPL ranges for MY by industry (beauty, F&B, furniture), minimum budget to test, and what ROAS to expect. Real numbers from our case studies, plus an FAQ.
- **XHS Malaysia:** existing results are reels, Singapore agencies and generic blogs. **Our gap:** a practical Malaysia-specific playbook covering the account setup (personal vs business vs blue tick), KOC vs KOL budgeting in RM, what works for F&B and beauty, how to track XHS to sales, and a bilingual case example.

**Proof assets to reuse across guides:** the case studies (beauty, F&B e-commerce, furniture, interior design) and the 12x ROAS figure. First-hand numbers are the one thing the competitors don't have.

---

## 3. On-page — fixes to the existing pages (do these first)

### 3.1 Title + H1 rewrites (EN)

Rules: ≤ 60 chars, keyword first, location in, and the H1 mirrors the title (minus the brand).

| Page | New title tag (chars) | New H1 |
|---|---|---|
| `/` | Digital Marketing Agency in Malaysia (PJ) \| BeamDots Media (58) | Digital Marketing Agency in Malaysia · Petaling Jaya *(already matches)* |
| `/services/facebook-instagram-ads` | Facebook & Instagram Ads Agency in PJ, Malaysia \| BeamDots (58) | Facebook & Instagram Ads Agency in PJ, Malaysia |
| `/services/google-ads` | Google Ads (PPC) Agency in Malaysia \| BeamDots Media (52) | Google Ads (PPC) Agency in Malaysia |
| `/services/xhs-influencer-marketing` *(on hold, not applied)* | Xiaohongshu (XHS) Marketing Agency Malaysia \| BeamDots (54) | Xiaohongshu (XHS) Marketing Agency in Malaysia |
| `/services/social-media-management` | Social Media Management Services Malaysia \| BeamDots (52) | Social Media Management Services in Malaysia |
| `/services/content-planning` | Social Media Content Planning Services Malaysia \| BeamDots (58) | Social Media Content Planning Services in Malaysia |
| `/services/video-production` | Video Production Company in Malaysia \| BeamDots Media (53) | Video Production Company in Malaysia |
| `/services/website-creation` | Website Design Company in Malaysia \| BeamDots Media (51) | Website Design Company in Malaysia |
| `/services/funnel-optimization` | Sales Funnel & Conversion Optimization Malaysia \| BeamDots (58) | Sales Funnel & Conversion Optimization in Malaysia |

Mirror the same idea in the Chinese titles and H1s, which are already close (they use the `马来西亚 + 服务` pattern). Add `八打灵再也 (PJ)` where it fits.

### 3.2 Meta descriptions

Lengthen every English description into the **150–160** window. Each should cover who it's for, what's included, and proof or a CTA, with the primary keyword included. Example:

- **Meta ads (157):** "Facebook & Instagram ads agency in Petaling Jaya for Malaysian SMEs. We plan, test and scale Meta campaigns around ROAS and sales, not likes. Up to 12x ROAS."

### 3.3 Body content on the money pages

Using the content research briefs, add to each service page:

- **"How much does [service] cost?"** H2, with price ranges or "packages from RM…". It answers the MOFU query on the page itself and links to the full cost guide.
- **FAQ** H2 (4–6 questions from the 30-question list) plus `FAQPage` schema.
- **"Who it's for"** H2 with industries (beauty, F&B, furniture, interior) and a link to the matching case study.
- **Local line**: "Based in Petaling Jaya, serving KL, Selangor and Malaysia-wide", to support the PJ keywords.
- **"Related guides"** block linking down to the cluster's supporting pages.
- `Service` schema (name, provider, areaServed: Malaysia).
- Target **900–1,300 words** of body content (confirm against each SERP's median). Expand the ZH twins to match.

### 3.4 URL design for new pages

- Guides: `/guides/<keyword-slug>` and `/zh/guides/<keyword-slug>`. Use the same English slug for the ZH twin so hreflang pairing stays simple.
- A hub page at `/guides` (and `/zh/guides`) listing all guides by cluster, linked from the header or footer.
- Keep `/services/*` unchanged. They're already indexed.

### 3.5 Internal linking map

```
                          Home  ─────────────────────────────────┐
                           │  (nav: Services, Case Studies, Guides)
         ┌─────────────────┼──────────────────────┐              │
   /services/xhs-…   /services/facebook-…   /services/google-ads   /guides (hub)
     ▲   │                ▲    │                ▲    │
     │   └─ Related guides│    └─ Related guides│    └─ Related guides
     │                    │                     │
 koc-vs-kol          facebook-ads-cost     google-ads-cost
 xiaohongshu-…       what-is-roas  ─────── meta-ads-vs-google-ads (bridge → both)
 xhs-business-acct   fb-ads-not-converting
     │                    │
     └──── case study ────┴──── (beauty / F&B / furniture proof) ──→ money page
```

Rules for BeamDots:

- Each guide links to its money page **in the intro (first ~150 words)** and **at the closing CTA**.
- Each money page has a **"Related guides"** section linking to all its cluster guides.
- `what-is-roas` and `meta-ads-vs-google-ads` link to **both** the Meta and Google ads pages.
- Case studies link to the service pages they prove, and service pages link back to the matching case study.
- `/service-areas` links to the home page and the top three money pages, using "[service] agency in PJ / KL / Selangor" anchors.
- Every guide is reachable via `/guides`, which sits within 2 clicks of home.

---

## 4. Roadmap (current scope)

Money pages only. No guides, no XHS, no new case-study pages.

| # | Work | Status |
|---|---|---|
| 1 | **Title / H1 / meta rewrites** (EN) for home + 7 services (not XHS), plus the About description. Titles 51–58 chars, H1 mirrors the title, descriptions 150–157 chars, "PJ" on home and Meta ads. `index.html` defaults updated to match (the prerender swaps per-page tags by matching the homepage strings). | ✅ Done 2026-11-21 |
| 2 | **Top-5 SERP research** for each money page's primary keyword (SOP Phase 2), giving a content brief per page, kept in [SEO_BRIEFS.md](SEO_BRIEFS.md). | 🔄 Meta ads done; Google Ads next |
| 3 | 🔄 Meta ads done 2026-11-21 (EN 1,012 words / ZH 1,502 chars, Service + FAQPage schema). Target narrowed to "facebook ads agency malaysia/PJ" only; no published prices (quoted case by case). **Upgrade the money pages** one at a time, in priority order. Each gets: a "How much does it cost in Malaysia?" H2, an FAQ (4–6 questions) with `FAQPage` schema, a "Who it's for" H2 linked to the existing `/case-studies` page, a local PJ/KL/Selangor line, related-service links, `Service` schema, and about 900–1,300 words (adjusted to the SERP median). | |
| 4 | **Expand the ZH twins** of each upgraded page to match the English content. | |
| 5 | **Local pages:** rework `/service-areas` + home around PJ / KL / Selangor, linking to the top money pages with "[service] agency in PJ" anchors. | |
| 6 | Review in GSC at **2, 6 and 12 weeks** (SOP Phase 4). Decide then whether guides are needed. | |

**Upgrade order and primary keywords for steps 2–3**

| Order | Page | Primary keyword(s) | Vol / KD | Evidence |
|---|---|---|---|---|
| 1 | `/services/facebook-instagram-ads` | facebook ads agency PJ / malaysia + "facebook ads cost malaysia" | ~450 (cost) / 30 | GSC: meta & facebook ads agency pj. Weak cost SERP. |
| 2 | `/services/google-ads` | google ads malaysia / google ads agency malaysia | 400 / 7 | GSC: google ads ppc services malaysia. CPC RM10–25. |
| 3 | `/` (home) | marketing agency malaysia, digital marketing agency PJ | 390 / 15 | |
| 4 | `/services/website-creation` | web design company malaysia + website design price malaysia | 390 / 25, 140 / 6 | |
| 5 | `/services/video-production` | video production company malaysia | 390 / 15 | |
| 6 | `/services/social-media-management` | social media management services malaysia | 70–320 | GSC: social media content management services |
| 7 | `/services/content-planning`, `/services/funnel-optimization` | content planning / sales funnel malaysia | low | Do last |

**Tracking:** add these primary keywords to `scripts/keywords.txt` and run `scripts/serp_rankings.py` / `scripts/gsc_rankings.py` monthly. Record the GSC baseline now: 4 non-brand queries, 15 impressions in 3 months.

**3-month target:** 20+ non-brand queries with impressions in GSC, and top-10 positions for the PJ-modifier service queries.

---

## 4b. Meta ads cluster test

Built 2026-11-21 to test whether TOFU/MOFU guides pull traffic into the money page.

```
 TOFU  /guides/what-is-roas                 "roas meaning / formula / calculator"  ~1,000/mo combined
 MOFU  /guides/boost-post-vs-facebook-ads   "facebook boost post (vs ads)"         ~220/mo
   │  (both link to the money page in the intro + a callout + "Related")
 BOFU  /services/facebook-instagram-ads     "facebook ads agency malaysia / PJ"   GSC proven
   ▲  money page links back down via a "Facebook Ads Guides" section
 HUB   /guides                               (header + footer nav; within 1 click of home)
```

| Page | Primary keyword | Vol / KD | EN length | ZH | Schema | Status |
|---|---|---|---|---|---|---|
| `/services/facebook-instagram-ads` | facebook ads agency malaysia / PJ | GSC / – | 1,012 words | 1,502 chars | Service, FAQPage | ✅ Live on branch |
| `/guides/what-is-roas` | roas meaning (+ formula, calculator, break-even) | 590+170+140+70+50 / 32 | 1,096 words + live ROAS / break-even calculator | 1,404 chars | Article, FAQPage | ✅ Built |
| `/guides/boost-post-vs-facebook-ads` | facebook boost post / boost vs ads | 110+110 / 21 | 812 words + comparison table | 1,177 chars | Article, FAQPage | ✅ Built |
| `/guides` | hub | – | listing | ✓ | Breadcrumb | ✅ Built |

**SERP angle used:** the competitor pages read were US/AU/glossary pages in USD with no break-even ROAS formula, no calculator and no Malaysian context (WhatsApp sales, Shopee/Lazada, RM examples). Both guides lead with that.

**How to judge the test (GSC, at 2 / 6 / 12 weeks after deploy):**
- Guides indexed and getting impressions for ROAS / boost queries.
- Internal clicks from the guides to `/services/facebook-instagram-ads` (Vercel Analytics: referrer path).
- Any consultation that started from a guide page.
- **Go / no-go for guides on other clusters at week 12.**

**Fact-check pass (2026-11-21):** removed unconfirmed claims about BeamDots' process (tracking checks, "clients come to us with…", clients' break-even), corrected Boost-button wording (it offers a short list of goals, not only engagement; no Sales objective), and replaced F&B/furniture notes with the real case-study facts (Okiss = CRO, Tekni = Google & Meta).

**Known site-wide issue (not caused by this work):** React hydration warning #418 on every page, including untouched ones like `/about`. React falls back to client rendering. Prerendered HTML (what Google reads) is unaffected. Worth fixing separately.

---

## 5. Open items / needs from you

- [ ] **Pricing ranges** you're happy to publish (Meta/Google ads management fee, website, social media package, video shoot). The "How much does it cost" sections depend on them; "from RM…" is enough.
- [ ] **Case-study numbers** you're happy to quote on the service pages (ROAS, CPL, revenue lift).
- [ ] Full GSC query export (Search Console → Performance → Export) every few weeks, to feed new long-tail keywords back into ideation.
- [ ] *(Parked)* XHS work, case-study pages, guides for clusters other than Meta ads.
- [x] ~~Guides naming~~: went with `/guides/`.
- [ ] Deploy the `seo/money-page-onpage` branch, then submit the new URLs in GSC (URL Inspection → Request indexing).
