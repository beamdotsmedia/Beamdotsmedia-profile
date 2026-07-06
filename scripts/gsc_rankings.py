"""
Google Search Console Rankings Tracker
Pulls keyword rankings for beamdotsmedia.com and saves to CSV.

Setup:
  1. Place credentials.json (OAuth 2.0 Desktop app) in the scripts/ folder
  2. pip install -r requirements.txt
  3. python scripts/gsc_rankings.py

First run will open a browser for Google OAuth login.
Token is saved as token.json for future runs (no login needed again).
"""

import os
import csv
from datetime import date, datetime, timedelta

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

SITE_URL = "https://beamdotsmedia.com/"
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
CREDENTIALS_FILE = os.path.join(os.path.dirname(__file__), "credentials.json")
TOKEN_FILE = os.path.join(os.path.dirname(__file__), "token.json")
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "data")
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "gsc_rankings.csv")

# Pull last 28 days of data (GSC has ~3 day delay so end date is 3 days ago)
END_DATE = date.today() - timedelta(days=3)
START_DATE = END_DATE - timedelta(days=27)
ROW_LIMIT = 1000  # max keywords to pull


def authenticate():
    creds = None
    if os.path.exists(TOKEN_FILE):
        creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists(CREDENTIALS_FILE):
                raise FileNotFoundError(
                    "credentials.json not found in scripts/\n"
                    "Download it from Google Cloud Console → APIs & Services → Credentials"
                )
            flow = InstalledAppFlow.from_client_secrets_file(CREDENTIALS_FILE, SCOPES)
            creds = flow.run_local_server(port=0)
        with open(TOKEN_FILE, "w") as f:
            f.write(creds.to_json())
    return creds


def fetch_rankings(service):
    response = service.searchanalytics().query(
        siteUrl=SITE_URL,
        body={
            "startDate": START_DATE.isoformat(),
            "endDate": END_DATE.isoformat(),
            "dimensions": ["query"],
            "rowLimit": ROW_LIMIT,
            "orderBy": [{"fieldName": "impressions", "sortOrder": "DESCENDING"}],
        },
    ).execute()
    return response.get("rows", [])


def save_csv(rows):
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    file_exists = os.path.exists(OUTPUT_FILE)
    datetime_pulled = datetime.now().isoformat(timespec="seconds")

    with open(OUTPUT_FILE, "a", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        if not file_exists:
            writer.writerow(["datetime_pulled", "period_start", "period_end", "keyword", "clicks", "impressions", "ctr", "position"])
        for row in rows:
            keyword = row["keys"][0]
            clicks = int(row["clicks"])
            impressions = int(row["impressions"])
            ctr = f"{row['ctr'] * 100:.2f}%"
            position = f"{row['position']:.1f}"
            writer.writerow([datetime_pulled, START_DATE.isoformat(), END_DATE.isoformat(), keyword, clicks, impressions, ctr, position])

    return OUTPUT_FILE


def main():
    print(f"Authenticating with Google Search Console...")
    creds = authenticate()
    service = build("searchconsole", "v1", credentials=creds)

    print(f"Fetching rankings for {SITE_URL}")
    print(f"Period: {START_DATE} to {END_DATE}")
    rows = fetch_rankings(service)

    if not rows:
        print("No data returned. The site may not have enough traffic yet, or the date range is too recent.")
        return

    filepath = save_csv(rows)
    print(f"\nDone! {len(rows)} keywords saved to: {filepath}")
    print("\nTop 10 keywords by impressions:")
    print(f"{'Position':>10}  {'Impressions':>12}  {'Clicks':>8}  Keyword")
    print("-" * 60)
    for row in rows[:10]:
        print(f"{row['position']:>10.1f}  {int(row['impressions']):>12}  {int(row['clicks']):>8}  {row['keys'][0]}")


if __name__ == "__main__":
    main()
