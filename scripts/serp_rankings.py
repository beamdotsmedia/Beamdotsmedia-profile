"""
SerpAPI Rankings Tracker
Checks Google search position for target keywords and saves to CSV.

Setup:
  1. Sign up at https://serpapi.com and get your API key
  2. pip install -r requirements.txt
  3. Add your target keywords to scripts/keywords.txt (one per line)
  4. Run: python scripts/serp_rankings.py

Set your API key via a .env file in the project root:
  SERP_API_KEY=your_key_here

Or set it as an environment variable:
  Windows:  set SERP_API_KEY=your_key_here
  Mac/Linux: export SERP_API_KEY=your_key_here
"""

import os
import csv
import time
import requests
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

SITE_DOMAIN = "beamdotsmedia.com"
API_KEY = os.environ.get("SERP_API_KEY", "")
KEYWORDS_FILE = os.path.join(os.path.dirname(__file__), "keywords.txt")
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "data")
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "serp_rankings.csv")

# Search settings
SEARCH_ENGINE = "google"
LOCATION = "Malaysia"  # change to target a different country
LANGUAGE = "en"
NUM_RESULTS = 100  # check top 100 results
DELAY_SECONDS = 2  # pause between requests to avoid rate limiting


def load_keywords():
    if not os.path.exists(KEYWORDS_FILE):
        raise FileNotFoundError(
            "keywords.txt not found in scripts/\nCreate it with one keyword per line."
        )
    with open(KEYWORDS_FILE, "r", encoding="utf-8") as f:
        keywords = [
            line.strip() for line in f if line.strip() and not line.startswith("#")
        ]
    return keywords


def check_ranking(keyword):
    """Returns (position, url, title) or (None, None, None) if not in top 100."""
    params = {
        "engine": SEARCH_ENGINE,
        "q": keyword,
        "location": LOCATION,
        "hl": LANGUAGE,
        "num": NUM_RESULTS,
        "api_key": API_KEY,
    }
    response = requests.get("https://serpapi.com/search", params=params, timeout=30)
    response.raise_for_status()
    data = response.json()

    organic_results = data.get("organic_results", [])
    for result in organic_results:
        link = result.get("link", "")
        if SITE_DOMAIN in link:
            return (
                result.get("position"),
                link,
                result.get("title", ""),
            )

    return None, None, None


def save_csv(results):
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    file_exists = os.path.exists(OUTPUT_FILE)

    with open(OUTPUT_FILE, "a", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        if not file_exists:
            writer.writerow(
                ["datetime", "keyword", "position", "url", "title", "location"]
            )
        for row in results:
            writer.writerow(row)

    return OUTPUT_FILE


def main():
    if not API_KEY:
        raise ValueError(
            "SERP_API_KEY not set.\n"
            "Add SERP_API_KEY=your_key_here to a .env file in the project root,\n"
            "or run: set SERP_API_KEY=your_key_here  (Windows)\n"
            "     or: export SERP_API_KEY=your_key_here  (Mac/Linux)"
        )

    keywords = load_keywords()
    print(
        f"Checking {len(keywords)} keywords for {SITE_DOMAIN} on Google ({LOCATION})\n"
    )

    results = []
    ranked = 0
    run_datetime = datetime.now().isoformat(timespec="seconds")

    for i, keyword in enumerate(keywords, 1):
        print(f"[{i}/{len(keywords)}] {keyword}", end=" ... ")
        try:
            position, url, title = check_ranking(keyword)
            if position:
                print(f"Position #{position}")
                ranked += 1
            else:
                print("Not in top 100")
            results.append(
                [
                    run_datetime,
                    keyword,
                    position if position else "not ranked",
                    url or "",
                    title or "",
                    LOCATION,
                ]
            )
        except requests.exceptions.HTTPError as e:
            print(f"API error: {e}")
            results.append([run_datetime, keyword, "error", "", "", LOCATION])

        if i < len(keywords):
            time.sleep(DELAY_SECONDS)

    filepath = save_csv(results)
    print(f"\nDone! {ranked}/{len(keywords)} keywords ranked in top 100.")
    print(f"Results saved to: {filepath}")

    ranked_results = [r for r in results if r[2] not in ("not ranked", "error")]
    if ranked_results:
        print("\nRanked keywords:")
        print(f"{'Position':>10}  Keyword")
        print("-" * 50)
        for r in sorted(ranked_results, key=lambda x: int(x[2])):
            print(f"#{r[2]:>9}  {r[1]}")


if __name__ == "__main__":
    main()
