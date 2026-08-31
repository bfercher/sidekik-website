# Sidekik Wix → Astro Migration Report

Generated during migration of sidekik.cloud from Wix to a self-hosted Astro static site.
Build verified with `npm run build` — succeeds, 35 pages output, sitemap + robots.txt generated.

## URL mapping: source → destination

| Source URL | Destination file | Status |
|---|---|---|
| `/` | `src/pages/index.astro` | OK — FAQ answers flagged (see below) |
| `/features` | `src/pages/features.astro` | OK, verbatim |
| `/clubs` | `src/pages/clubs.astro` | OK, verbatim (incl. pricing) |
| `/challenges` | `src/pages/challenges.astro` | **VERIFIED 2026-08-31** — replaced with verbatim text from a live browser fetch |
| `/subscription` | `src/pages/subscription.astro` | OK, verbatim |
| `/about` | `src/pages/about.astro` | **VERIFIED 2026-08-31** — full founder story (incl. "Stubaier Jochdohlen" / "Parateam Virgen" section) replaced with verbatim text from a live browser fetch |
| `/blog` | `src/pages/blog.astro` | OK — generated from content collection |
| `/foerdern` | `src/pages/foerdern.astro` | OK, verbatim |
| `/blue-sky-hochpustertal-summit-cup-25` | `src/pages/blue-sky-hochpustertal-summit-cup-25.astro` | OK |
| `/koessen-peakhunt-challenge-2025` | `src/pages/koessen-peakhunt-challenge-2025.astro` | OK |
| `/privacy-policy` | `src/pages/privacy-policy.astro` | **VERIFIED 2026-08-31 — LEGAL, verbatim** (see Sitz discrepancy note below) |
| `/datenschutzrichtlinie` | `src/pages/datenschutzrichtlinie.astro` | **VERIFIED 2026-08-31 — LEGAL, verbatim** |
| `/impressum` | `src/pages/impressum.astro` | **VERIFIED 2026-08-31 — LEGAL, verbatim** (see Sitz discrepancy note below) |
| `/nutzungsbedingungen` | `src/pages/nutzungsbedingungen.astro` | OK, appears fully verbatim (numbered legal text was returned in full by the fetch) |
| `/terms-of-use` | `src/pages/terms-of-use.astro` | OK, appears fully verbatim |
| `/account-loeschen` | `src/pages/account-loeschen.astro` | OK, verbatim (verified) |

## Blog posts (19) → `src/content/blog/*.md`, rendered at `/post/<slug>`

All render through `src/pages/post/[...slug].astro`.

| Slug | Lang | Status |
|---|---|---|
| die-neuen-statistiken-für-piloten-clubs-und-challenges-bei-sidekik | de | OK, verbatim |
| hike-fly-tracking-beta | de | OK, verbatim |
| sidekik-2025-neue-regeln-intelligente-flugauswertung-vereinfachte-einreichung | de | **VERIFIED 2026-08-31** — verbatim |
| podcast-mit-lucian-haas | de | OK, verbatim |
| flugwetterprognose-mit-paraglidable-com | de | OK, verbatim |
| livewind-by-breezedude-de-tausende-neue-windstationen-in-sidekik | de | **VERIFIED 2026-08-31** — verbatim |
| neue-berechnung-von-xp | de | **VERIFIED 2026-08-31** — verbatim |
| quickstart-guide | de | **VERIFIED 2026-08-31** — verbatim |
| sidekik-jetzt-als-mobile-app-für-ios-und-android-verfügbar-mit-spannenden-updates | de | **VERIFIED 2026-08-31** — verbatim |
| live-windwerte-in-sidekik-bessere-entscheidungen-am-berg-und-in-der-luft | de | **VERIFIED 2026-08-31** — verbatim |
| hike-fly-import-von-suunto-watch | de | OK, verbatim |
| ziele-setzen-besser-fliegen-warum-persönliche-ziele-deinen-flug-verändern | de | **VERIFIED 2026-08-31** — confirmed to be its own real German article (not a translation of the EN post), replaced with verbatim text |
| hike-fly-import-von-garmin-connect | de | OK, verbatim |
| experience-points-und-level | de | OK, verbatim |
| set-goals-fly-better-why-personal-goals-change-your-flight | **en** | OK, verbatim — EN counterpart of the "ziele-setzen..." post above |
| tracking-reloaded | de | **VERIFIED 2026-08-31** — verbatim |
| xcontest-synchronisierung | de | **VERIFIED 2026-08-31** — verbatim (title corrected to "Automatischer XContest Import für Sidekik" to match the live page exactly) |
| flugplanung-mit-flyskyhy-und-sidekik | de | **VERIFIED 2026-08-31** — verbatim |
| wingmates-gemeinsam-fliegen-gehen | de | OK, verbatim |

**Confirmed DE/EN pair:** `ziele-setzen-besser-fliegen-warum-persönliche-ziele-deinen-flug-verändern` (German) and `set-goals-fly-better-why-personal-goals-change-your-flight` (English) are the same article. Both are now confirmed verbatim against the live site — the German post is its own real article, not a translation reconstruction. Neither page currently has an explicit language-alternate cross-link in the template; none was added since the existing linking pattern (via `/blog`) was left as-is per instructions.

Images were not downloaded (egress restricted to npm registry only). Every post and page keeps the original Wix `static.wixstatic.com` image URL (or a note where none was found) in an HTML comment for manual re-upload.

## Update — 2026-08-31: all 15 flagged items verified and fixed

Bernhard re-fetched verbatim text for all 15 previously-flagged items via a live browser session and provided it directly. All 15 items below have been replaced with that verbatim text, `flagged: true` removed from blog post frontmatter, and every on-page warning banner (the `.flag-note` blocks on the legal pages, the `{flagged && ...}` banner on blog posts, and the inline FLAGGED comments on `/challenges` and `/about`) removed. Build re-verified with `npm run build` — succeeds, 35 pages output.

**Fixed (15/15):**
1. `/privacy-policy` (`src/pages/privacy-policy.astro`) — verbatim
2. `/datenschutzrichtlinie` (`src/pages/datenschutzrichtlinie.astro`) — verbatim
3. `/impressum` (`src/pages/impressum.astro`) — verbatim
4. `/challenges` (`src/pages/challenges.astro`) — verbatim, full rule text
5. `/about` (`src/pages/about.astro`) — verbatim, including the full "Stubaier Jochdohlen" / "Parateam Virgen" founder story section
6. `sidekik-2025-neue-regeln-intelligente-flugauswertung-vereinfachte-einreichung.md` — verbatim
7. `livewind-by-breezedude-de-tausende-neue-windstationen-in-sidekik.md` — verbatim
8. `neue-berechnung-von-xp.md` — verbatim
9. `quickstart-guide.md` — verbatim
10. `sidekik-jetzt-als-mobile-app-für-ios-und-android-verfügbar-mit-spannenden-updates.md` — verbatim
11. `live-windwerte-in-sidekik-bessere-entscheidungen-am-berg-und-in-der-luft.md` — verbatim
12. `ziele-setzen-besser-fliegen-warum-persönliche-ziele-deinen-flug-verändern.md` — verbatim; confirmed to be its own real German article, not a translation
13. `tracking-reloaded.md` — verbatim
14. `xcontest-synchronisierung.md` — verbatim (title corrected to "Automatischer XContest Import für Sidekik", matching the live page — previously had an extra "Neues Feature:" prefix that isn't on the live page)
15. `flugplanung-mit-flyskyhy-und-sidekik.md` — verbatim

**⚠️ Live-site discrepancy for Bernhard to check (not something this pass should silently "fix"):** the verbatim EN `/privacy-policy` states `Sitz: Münster`, while the verbatim DE `/impressum` states `Sitz: Innsbruck` — both pages otherwise list the same street address (Entgasse 36i, 6232 Münster) and the same Firmenbuchgericht (Landesgericht Innsbruck). Both were copied exactly as they appear live, so this is an inconsistency on the live Wix site itself, not a migration error. Bernhard should decide which is correct and update the source (and this migration will follow).

## Still outstanding

1. **Homepage FAQ accordion**: 9 of the 10 FAQ answers on `/` are rendered client-side on the live Wix site and still could not be retrieved (even via live browser fetch, they only appear on click and weren't part of what was captured). Only the first answer (equipment) is real, verbatim text. The other 9 `<details>` blocks show the correct (verbatim) question text with no fabricated answer — each is marked with an HTML comment: "Answer to be added — Bernhard should paste this from the live site's FAQ accordion." No misleading "flagged/paraphrased" language remains on these.
2. **All images**: no binary images were downloaded (egress blocked to non-npm hosts). Every original Wix image URL that was discovered is preserved in frontmatter (`image:`) or an HTML comment, ready for manual re-upload to `/public/` or an asset host once available.
## Next steps

1. **Fill in the 9 remaining FAQ answers** on `/` by opening each accordion item on the live site and pasting the verbatim text into the corresponding HTML comment placeholder in `src/pages/index.astro`.
2. **Resolve the Sitz Münster/Innsbruck discrepancy** noted above between `/privacy-policy` and `/impressum` on the live site, then update the source page and re-sync here.
3. **Re-upload images**: pull the ~40 image URLs referenced in comments/frontmatter (mostly `static.wixstatic.com/media/...`) and re-host them under `/public/images/` (or an object store), then swap the URLs in the affected `.astro`/`.md` files.
4. **Push to GitHub**: `git init`, commit, push to a new repo.
5. **Connect to DigitalOcean App Platform**: create a new App from the GitHub repo, static site component, build command `npm run build`, output directory `dist`.
6. **Point DNS**: once verified on the App Platform preview URL, cut over `www.sidekik.cloud` DNS.
