# SEO SOP — Keyword Funnel, Content Research & On-Page

A repeatable process for any website. Backlinks / off-page are out of scope for this SOP.

**The core idea:** don't build a list of keywords — build a **funnel of pages**. Shallow, informational pages catch people early (when competition is weak), answer their question well, and pass them by internal links to the deeper **money page** (service / product / CTA page) where they convert.

```
 TOFU  "what is / how to / why"        → Guide pages        (easy to rank, low intent)
   │  internal links
 MOFU  "cost / vs / best / how to choose" → Comparison & pricing pages (medium intent)
   │  internal links
 BOFU  "[service] agency [city]"       → Money / CTA page   (hard to rank, high intent)
```

Three rules that apply to every step:

1. **Pick fights you can win.** A small site does not beat market giants on head terms. It wins long-tail, local, niche-language and "weak SERP" keywords first, then climbs.
2. **One page = one search intent.** Keywords that Google answers with the same results belong on the same page. Different results → different pages.
3. **Every page has a job in the funnel.** If a page doesn't lead somewhere (a deeper page or a CTA), it's a dead end.

---

## Phase 1 — Keyword Research

Output of this phase: a **keyword sheet** where every keyword has a decision (target / later / drop), a funnel stage, and a cluster.

### 1.1 Ideation — collect candidates (aim for 100–300 raw)

Gather from all five sources; don't filter yet.

| # | Source | How |
|---|---|---|
| A | **30 customer questions** | Put yourself in the buyer's shoes *before* they know the site exists. Write ~10 questions per funnel stage (template below). |
| B | **Google Search Console** | Performance → Queries, last 3–12 months. Any query with impressions is proof Google already associates the site with it — these are the cheapest wins. Also look at the *pattern* (e.g. everyone adds a city name). |
| C | **Seed expansion** | Take 5–10 seed terms → DataForSEO `keyword_suggestions` / `related_keywords` / `keyword_ideas`. |
| D | **The SERP itself** | Google each seed: "People also ask", autocomplete, "Related searches". Free and shows real phrasing. |
| E | **Competitors** (small/medium ones, not giants) | DataForSEO `ranked_keywords` on 2–3 competitors of similar size → keywords they rank for that you don't. |

**30-questions template** (fill for the site's offer):

- **TOFU — problem aware (10):** "What is X?", "Why is my X not working?", "How to do X myself?", "X ideas / examples / template", definitions of jargon the buyer meets.
- **MOFU — solution aware (10):** "How much does X cost in [country]?", "X vs Y", "Agency vs in-house / freelancer", "How to choose an X provider", "Is X worth it for [industry]?", "Best X for [industry]".
- **BOFU — ready to buy (10):** "[service] agency [city]", "[service] company near me", "[service] package / price [country]", "[service] for [industry] [country]".

Also add **language/market variants** where relevant (e.g. Chinese, Malay, mixed-language queries like "facebook ads 代投").

### 1.2 Validation — the 4 filters

Score every candidate 0–3 on each filter. **Drop anything that scores 0 on Fit or Intent**, no matter how big the volume.

| Filter | Question | 0 | 3 |
|---|---|---|---|
| **Demand** | Do people actually search it? | No volume, no GSC impressions, no SERP evidence | Clear, stable monthly volume |
| **Fit** | Does it fit our funnel — can it lead to something we sell? | Unrelated to the offer (e.g. a service we don't provide) | Directly about a service we sell |
| **Intent** | What does the searcher want, and can our page give them exactly that? | They want a tool/login/download/job/news we can't serve | They want an answer or a provider we can be |
| **Difficulty** | Can we realistically reach page 1? | Page 1 is all giants with strong, on-intent pages | Page 1 has weak results (see list below) |

**How to read Demand in small markets**

- Volume tools round down; small countries show lots of "0" or "10". **A 0-volume long-tail keyword can still be worth targeting** if (a) it shows up in GSC, (b) it's a tight variant of a validated head term, or (c) the SERP has ads (CPC > 0 means advertisers think it converts).
- Look at the 12-month trend, not one number — check for seasonality and spikes.
- High CPC = high commercial value. A 30-search keyword with RM20 CPC can be worth more than a 1,000-search informational one.

**How to read Intent**

Google the keyword and look at what ranks — that *is* the intent:

- Mostly blog posts / guides → informational → build a guide (TOFU/MOFU).
- Mostly service pages / agency homepages / directories → commercial → money page (BOFU).
- Tools, login pages, apps, downloads → navigational/transactional → usually **drop**.
- Mixed → pick the dominant type, or target with a hybrid page (guide with strong CTA).

**How to read Difficulty (don't trust the KD number alone)**

KD scores are calculated from backlinks and are often noisy in small markets. Always eyeball the top 10. **Signs of a weak SERP (= opportunity):**

- Social posts ranking (Instagram reels, Facebook posts, TikTok, Reddit/forums, Quora)
- Pages from a **different country** (Singapore/US articles ranking for a Malaysia query)
- Off-intent pages (a generic article ranking for a local service query)
- Outdated content (dates 2+ years old, old prices)
- Thin pages (< 500 words, no structure)
- Small sites with similar authority to yours

**Avoid** when page 1 is dominated by: Wikipedia, government sites, big marketplaces/directories, platform owners (Meta, Google, Shopify for their own product terms), large publishers, or 5+ well-established competitors with deep, on-intent pages.

**Decision rule**

- **Target now:** Fit ≥ 2, Intent ≥ 2, Difficulty ≥ 2, and some proof of Demand.
- **Later:** good Fit/Intent but Difficulty 1 → revisit once the cluster's easier pages rank.
- **Drop:** Fit 0 or Intent 0, or Difficulty 0 with no niche angle.

### 1.3 Clustering

Group the surviving keywords so each group becomes **one page**, and groups roll up into **topic clusters** around one money page.

**Step 1 — keyword → page (SERP overlap rule).**
Two keywords go on the **same page** if their Google top 10 share **≥ 3–4 of the same URLs**. If the results are different, Google sees different intents → separate pages. (Quick manual version: if the same 2–3 sites dominate both, merge.)

**Step 2 — page → cluster.**
A cluster = **1 money page (BOFU) + 2–6 supporting pages (TOFU/MOFU)** around one service/product.

```
Cluster: [Service]
 ├── Money page:      /services/[service]               ← "[service] agency [city]"
 ├── MOFU:            /guides/[service]-cost-[country]  ← "how much does [service] cost"
 ├── MOFU:            /guides/[service]-vs-[alt]        ← "[service] vs [alt]"
 └── TOFU:            /guides/what-is-[jargon]          ← "what is [jargon]"
```

**Step 3 — prioritise clusters.** Score each cluster on (total realistic traffic) × (business value of the money page) × (ease). Tackle one cluster at a time, starting with the one that is **easiest and closest to revenue**. Finishing one cluster end-to-end beats spreading thin across all of them.

**Keyword sheet columns**

| keyword | source | language | volume | trend | KD | CPC | SERP weakness notes | intent | funnel stage | fit 0–3 | intent 0–3 | difficulty 0–3 | decision | cluster | target URL | primary/secondary |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

---

## Phase 2 — Content Research (per page, before writing)

For each page's **primary keyword**, study the **top 5 organic results** (skip ads, maps, videos unless they dominate).

### 2.1 For each of the top 5, record

| Field | What to capture |
|---|---|
| URL & site type | Agency / publisher / directory / social / foreign site |
| Format | Guide, listicle, service page, comparison, calculator, video |
| Angle | The "hook" — e.g. "price breakdown", "beginner's guide", "from the founder", "data study" |
| Word count | Main content only (exclude nav/footer). Count characters for Chinese. |
| Outline | All H2s (and key H3s) |
| Topics covered | Bullet list of the sub-questions answered |
| What they **missed** | Unanswered questions, outdated data, no local context, no examples, no prices, no visuals, no FAQ, no next step |
| Freshness | Published/updated date |
| Extras | Tables, images, video, FAQ, schema, calculator, downloadable |

### 2.2 Synthesise into a content brief

1. **Must-cover topics** — anything covered by **3+ of the top 5**. Google expects these; skipping them makes the page look incomplete.
2. **Gaps = our opportunity** — topics none or only 1 covers, especially: local specifics (country prices, local platforms, local regulations, local examples), first-hand experience (real numbers from real clients), up-to-date data, a clear "what to do next".
3. **Target length** — take the **median** word count of the top 5, aim for **median to median +20%**. Don't write 4,000 words where winners have 1,200; don't write 400 where winners have 1,500. Depth > length.
4. **Angle / differentiation** — one sentence: "Unlike the current results, our page is the only one that ___." Typical winning angles for small sites: local + current pricing, real case-study numbers, practitioner's checklist, side-by-side comparison table, bilingual.
5. **Funnel role** — which money page this page feeds, and the CTA.

**Content brief template**

```
Page:            /guides/...
Primary keyword: ...            Secondary: ..., ..., ...
Intent:          informational / commercial      Funnel stage: TOFU / MOFU / BOFU
Cluster:         ...            Feeds money page: /services/...
Target length:   ~____ words (top-5 median: ____)
Angle:           "The only page that ..."
Title tag (≤60): ...
H1:              ...
Meta desc (150–160): ...
Outline:
  H2 ...
    H3 ...
  H2 ...
  H2 FAQ
Must-cover:      ...
Gaps we fill:    ...
Proof/assets:    case study numbers, screenshots, original images, table
Internal links:  OUT → money page (+ anchors); IN ← pages that should link here
CTA:             ...
```

---

## Phase 3 — On-Page SEO Checklist (every page)

### Title tag
- [ ] **≤ 60 characters** (≈ 30 Chinese characters) so it doesn't get cut off.
- [ ] Primary keyword near the **start**.
- [ ] Brand at the end (`| Brand`), shortened if space is tight.
- [ ] **Money/CTA pages:** compelling enough to click — add a benefit, proof or locality ("…in PJ", "Up to 12x ROAS", "2026 Prices").
- [ ] Unique across the site.

### H1
- [ ] **Exactly one H1** per page.
- [ ] Contains the primary keyword, reads naturally.
- [ ] **Mirrors the title tag** (same keyword and promise; the H1 can drop the brand or be a bit longer).

### Headings
- [ ] **H2 = main sections** (each maps to a sub-question / sub-topic from the brief).
- [ ] **H3 = subsections** inside an H2. Never skip levels (no H2 → H4).
- [ ] Headings describe the content (not "Section 1" or design-only text). Secondary keywords in some H2s where natural.

### Keyword usage
- [ ] Primary keyword in: title, H1, URL, first 100 words, at least one H2, meta description, image alt (one).
- [ ] Use variants and synonyms naturally — write for the reader, not a density number.
- [ ] Answer the main question early (first screen) — then expand.

### URL
- [ ] **Clean:** lowercase, hyphens, no IDs/parameters/dates.
- [ ] **Categorised:** `/services/…` for money pages, `/guides/…` (or `/blog/…`) for TOFU/MOFU, `/case-studies/…` for proof. Language prefix for translations (`/zh/…`).
- [ ] **Keyword-rich & descriptive:** 3–5 words, e.g. `/guides/facebook-ads-cost-malaysia`. Drop filler words ("the", "a", "and").
- [ ] Never change a URL once indexed without a 301 redirect.

### Meta description
- [ ] **150–160 characters** in English (≈ 70–80 Chinese characters — CJK takes about 2× the pixel width).
- [ ] Includes the primary keyword (Google bolds it).
- [ ] Sells the click: who it's for + what they get + proof/CTA.
- [ ] Unique per page.

### Internal linking (cluster-driven)
- [ ] **Every supporting page links to its money page** — at least once in the first third of the content and again at the CTA, with descriptive anchor text (e.g. "Facebook ads management for Malaysian SMEs", not "click here").
- [ ] **Every money page links down to 2–4 supporting pages** ("Related guides" / inline) — this passes authority to the guides and helps users who aren't ready yet.
- [ ] **Siblings link to siblings** within the same cluster where relevant.
- [ ] **Bridge pages** (e.g. "Meta ads vs Google ads") link to *both* money pages.
- [ ] Money pages also link to the **case study** that proves them, and vice versa.
- [ ] **No orphan pages** — every page has at least 2 internal links pointing in; every page reachable within **3 clicks** from the homepage (nav, footer, or a hub like `/guides`).
- [ ] Vary anchor text across pages (primary keyword, variant, partial match) — don't use the identical anchor 20 times.

### Also check (quick)
- [ ] Canonical tag points to itself; hreflang pairs set for translated pages.
- [ ] Images: descriptive file names + alt text, compressed, width/height set.
- [ ] Structured data where it fits: `Service`, `FAQPage`, `Article`, `BreadcrumbList`, `LocalBusiness`/`ProfessionalService`.
- [ ] Page is in the sitemap; indexable (no `noindex`); renders content without JavaScript (SSR/prerender).
- [ ] Mobile-friendly, fast (LCP < 2.5s).
- [ ] Clear CTA above the fold on money pages; on guides, a soft CTA mid-page and a strong one at the end.

---

## Phase 4 — Execute, Measure, Iterate

**Order of work per cluster**

1. Fix the **money page** first (on-page checklist + content gaps) — everything will link to it.
2. Publish the **MOFU** pages (cost, vs, how-to-choose) — closest to revenue.
3. Publish the **TOFU** pages.
4. Wire up internal links both ways; add new pages to the sitemap; request indexing in GSC.
5. Move to the next cluster.

**Measure** (record a baseline before changing anything)

- GSC per page: impressions, clicks, CTR, average position — check at **2, 6 and 12 weeks**.
- Rank tracking for each cluster's primary keywords (DataForSEO SERP API, monthly).
- Conversions from organic (form submits, WhatsApp clicks) per landing page.

**Iterate**

- **Impressions but low CTR** → rewrite title/meta description.
- **Ranking 8–20** → expand content using the gap list, add internal links from stronger pages.
- **No impressions after 8 weeks** → check indexing, intent match, or whether the keyword was too hard.
- Refresh pages with prices/years every 6–12 months.

---

## Appendix — DataForSEO cheat sheet

| Need | Endpoint | Notes |
|---|---|---|
| Volume + KD + intent for a list | `/v3/dataforseo_labs/google/keyword_overview/live` | Up to 700 keywords; returns volume, CPC, KD, main intent, 12-mo trend |
| Raw Google Ads volume (incl. non-English) | `/v3/keywords_data/google_ads/search_volume/live` | Better coverage for Chinese/Malay keywords |
| Expand a seed (contains the seed) | `/v3/dataforseo_labs/google/keyword_suggestions/live` | Use `order_by` volume, filter `search_volume > 10` |
| Related/semantic ideas | `/v3/dataforseo_labs/google/related_keywords/live` | Based on "related searches" |
| Competitor's keywords | `/v3/dataforseo_labs/google/ranked_keywords/live` | Pass competitor domain |
| Top 10 for a keyword (content research, difficulty check, clustering overlap) | `/v3/serp/google/organic/live/regular` | `depth: 10` |
| Read a ranking page's content | `/v3/on_page/content_parsing/live` | For word counts & outlines |

Common location codes: Malaysia `2458`, Singapore `2702`, US `2840`. Language: `en`, `zh-CN` (Simplified), `ms`.
