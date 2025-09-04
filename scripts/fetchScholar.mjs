// Fetch and parse Google Scholar publications into JSON grouped by year.
// Usage: npm run sync:scholar
// NOTE: This performs an unauthenticated fetch; Google may block or throttle repeated requests.
// If blocked, consider manual export or using Scholar APIs via a backend.
import fs from "node:fs";
import path from "node:path";
import { load } from "cheerio";

const SCHOLAR_ID = "dIuGFCMAAAAJ";
const BASE_URL = `https://scholar.google.com/citations?user=${SCHOLAR_ID}&hl=en&pagesize=100`;

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (Academic Profile Aggregator)" },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return await res.text();
}

function parsePublications(html) {
  const $ = load(html);
  const rows = $("#gsc_a_b .gsc_a_tr");
  const byYear = new Map();

  rows.each((_, row) => {
    const titleEl = $(row).find(".gsc_a_at");
    const title = titleEl.text().trim();
    const link = titleEl.attr("href")
      ? `https://scholar.google.com${titleEl.attr("href")}`
      : undefined;
    const meta = $(row).find(".gsc_a_t div:nth-child(2)").text().trim(); // authors + venue snippet
    const authors = meta.split("-")[0]?.trim() || "";
    const venue = meta.split("-").slice(1).join("-").trim();
    const year = $(row).find(".gsc_a_y span").text().trim() || "Unknown";

    if (!title) return;
    if (!byYear.has(year)) byYear.set(year, []);
    byYear.get(year).push({ title, authors, venue, link });
  });

  // Sort years desc and items keep order as on page
  const groups = Array.from(byYear.entries())
    .filter(([year]) => year !== "Unknown")
    .sort((a, b) => Number(b[0]) - Number(a[0]))
    .map(([year, items]) => ({ year, items }));

  if (!groups.length) {
    console.warn(
      "No publications parsed. Page structure may have changed or access was blocked (captcha/consent)."
    );
  }
  return groups;
}

async function main() {
  try {
    const html = await fetchHtml(BASE_URL);
    const publications = parsePublications(html);
    const outDir = path.resolve("src/data");
    const outFile = path.join(outDir, "publications.json");
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outFile, JSON.stringify(publications, null, 2));
    console.log(`Wrote ${publications.length} year groups to ${outFile}`);
  } catch (err) {
    console.error("Scholar sync failed:", err.message);
    process.exitCode = 1;
  }
}

main();
