# SEO Ranking Tracker Plan

Track keyword rankings before and after SEO optimization for beamdotsmedia.com.

---

## Phase 1 — Google Search Console Setup (Free, Do This First)

### Step 1: Verify Site Ownership
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add property** → enter `https://beamdotsmedia.com`
3. Choose **HTML file** verification method
4. Download the verification file (e.g. `googleXXXXXXXXXXXXXXXX.html`)
5. Place the file in the **root of this repo** (same level as `index.html`)
6. Commit and push → wait for deploy to go live
7. Click **Verify** in Search Console

> You can use your own Google account — no need for your friend's account.
> The HTML file proves you control the server/codebase.

---

### Step 2: Enable Search Console API
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (e.g. `beamdots-seo`)
3. Enable **Google Search Console API**
4. Create credentials → **OAuth 2.0 Client ID** (Desktop app)
5. Download the `credentials.json` file

---

### Step 3: Python Script — Pull Rankings from Search Console

**File:** `scripts/gsc_rankings.py`

**What it does:**
- Authenticates with Google Search Console API
- Pulls top queries (keywords), impressions, clicks, average position
- Saves to `rankings_YYYY-MM-DD.csv`

**Output CSV columns:**
| date | keyword | clicks | impressions | ctr | position |
|------|---------|--------|-------------|-----|----------|

**Install dependencies:**
```bash
pip install google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client pandas
```

**Usage:**
```bash
python scripts/gsc_rankings.py
```

**Limitation:** Search Console only shows keywords that already have impressions.
For new target keywords you haven't ranked for yet → use SerpAPI (Phase 2).

---

## Phase 2 — SerpAPI Setup (For Target Keywords, Implement Later)

### Why SerpAPI
- Check rankings for **specific keywords** you are targeting
- Works even if the site has 0 impressions for that keyword
- Shows exact Google SERP position in real-time
- Free tier: 100 searches/month

### Step 1: Get API Key
1. Sign up at [serpapi.com](https://serpapi.com)
2. Copy your API key from the dashboard

### Step 2: Define Target Keywords

Create a file `scripts/keywords.txt` — one keyword per line:
```
digital media agency malaysia
social media marketing kuala lumpur
content creation agency
beamdots media
video production malaysia
```

### Step 3: Python Script — Check Rankings via SerpAPI

**File:** `scripts/serp_rankings.py`

**What it does:**
- Reads keywords from `keywords.txt`
- For each keyword, queries SerpAPI (Google search)
- Finds position of `beamdotsmedia.com` in results (checks top 100)
- If not found in top 100, records as `not ranked`
- Saves to `serp_rankings_YYYY-MM-DD.csv`

**Output CSV columns:**
| date | keyword | position | url | title |
|------|---------|----------|-----|-------|

**Install dependencies:**
```bash
pip install requests pandas
```

**Usage:**
```bash
SERP_API_KEY=your_key_here python scripts/serp_rankings.py
```

---

## Before/After Workflow

```
1. Run scripts BEFORE making SEO changes  → save as baseline CSV
2. Implement SEO optimizations (meta tags, structured data, content, etc.)
3. Wait 1–2 weeks after deploy
4. Run scripts again → compare with baseline CSV
```

### Comparing results
- Open both CSVs in Excel / Google Sheets
- Sort by keyword, compare `position` column
- Lower number = better ranking (position 1 is top of Google)

---

## File Structure

```
beamdotsmedia-profile/
├── googleXXXXXXXX.html          ← GSC verification file (add this)
├── scripts/
│   ├── gsc_rankings.py          ← Phase 1 script
│   ├── serp_rankings.py         ← Phase 2 script
│   └── keywords.txt             ← your target keywords list
├── data/
│   ├── gsc_rankings_2026-07-04.csv
│   └── serp_rankings_2026-07-04.csv
└── SEO_RANKING_PLAN.md
```

---

## Summary

| | Google Search Console | SerpAPI |
|---|---|---|
| Cost | Free | Free tier (100/mo) |
| Data source | Google directly | Google SERP scrape |
| Shows existing rankings | Yes | Yes |
| Shows new target keywords | No | Yes |
| Setup effort | Medium (OAuth) | Easy (API key) |
| Best for | Overall performance tracking | Specific keyword targeting |

**Recommended order:** Do Phase 1 first to capture baseline data, implement SerpAPI in Phase 2 for targeted keyword tracking.
