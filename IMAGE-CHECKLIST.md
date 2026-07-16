# Image & Asset Checklist
**Portfolio — Nabin Ghimire**
_Every real-content gap on the site — what file, what page, what it should show. Update the images whenever you're ready; the code slots are already wired for everything in sections 1–6._

All stock/placeholder images: unsplash.com → search the term → Download free → largest size → save to the listed path.
Your own work (Figma exports, real product screenshots — anonymized per the NDA notice already on each case study page) always beats stock.

---

## Status key
- `[ ]` Not done — nothing on disk yet
- `[~]` Placeholder in — stock or generic image standing in for the real thing
- `[x]` Final asset in — real content, done

---

## 0. Broken right now — fix first

### [x] 0.1 — Resume `public/Nabin_Ghimire_Resume_2026.pdf`
**Used by:** [Footer.jsx:27](components/Footer.jsx#L27) — "Resume (PDF)" link
Real resume in, opens in a new tab. Done.

---

## 1. About Page

### [ ] 1.1 — Headshot `public/images/nabin-headshot.jpg`
**Used by:** [about/page.jsx](app/about/page.jsx) — currently renders an "NG" initials placeholder (`.photo-placeholder`), not this file yet.
**This is yours — not stock.** A real photo of you.
- **Aspect ratio:** 4:5 portrait · **Size:** 1280×1600px (2×)
- **Art direction:** window-lit or outdoor, dark/neutral clothing, relaxed expression — not a LinkedIn backdrop shot. Caption is already set to "Kathmandu, 2026," so a Kathmandu setting matches.
**Note:** once you have the file, this also needs a small code change (swap the `.photo-placeholder` div for an `<Image>`) — flag it to me when the photo's ready and I'll wire it in.

---

## 2. Homepage Thumbnails

### [x] 2.1 — Viveka thumb `public/images/design-system.png`
Real Figma export, already wired in. Done.

### [x] 2.2 — Claims thumb `public/images/thumb-claims.png`
Real image, already wired in on the homepage card and the claims case-study hero. Done.

### [~] 2.3 — DOCS.ink thumb `public/images/thumb-docsink.png`
**Used by:** [page.jsx](app/page.jsx) homepage work-grid card
Generic laptop device shot standing in. Swap for a real DOCS.ink product screenshot on a laptop mockup if you have one you can anonymize.

### [ ] 2.4 — Find Care thumb
**Used by:** [page.jsx](app/page.jsx) — currently a hand-built CSS illustration (`visual-findcare-content`), not an image file. Works fine as-is; only replace if you get a clean provider-search screenshot you're confident sharing.
- If you do: **Aspect ratio:** 16:10, save as `public/images/thumb-findcare.jpg` and it'll need the same `<Image fill>` wiring the other three cards use.

---

## 3. Viveka Design System Case Study

### [x] 3.1 — Hero / component library `public/images/design-system.png`
Real Figma export, already wired. Done.

### [~] 3.2 — Supporting visual: token sample, in "Start with tokens, not components" (decision-num 01)
**Wired at:** [viveka/page.jsx:232](app/(case-studies)/viveka/page.jsx#L232) — a CSS-only swatch strip (`.token-sample`, styles in [case-study.css](assets/css/components/case-study.css)) pulling colors straight from the site's own tokens. No image file needed — it works as a permanent abstract visual, same spirit as the Find Care CSS phone mockups (6.1/6.2 below).
**Optional upgrade, not urgent:** swap for a real screenshot of your Figma tokens panel if you want more literal proof. If you do: save as `public/images/viveka-tokens-sheet.jpg`, 16:10 or 4:3, and replace the `<div className="token-sample">` block with an `<Image fill>` the same way the hero visual is wired — ping me when it's ready.

### [x] 3.3 — Audit evidence: stat strip, in the Research section
**Wired at:** [viveka/page.jsx:164](app/(case-studies)/viveka/page.jsx#L164) — four real, generalized numbers from the actual audit (`.stat-strip` / `.stat-value` / `.stat-label`, styles in [case-study.css](assets/css/components/case-study.css)). No image needed at all — this replaces what would've been an audit screenshot with typography-driven data, which sidesteps the NDA concern about showing real product UI. Done, nothing to swap later unless you want real screenshots alongside it.

---

## 4. Claims Payment Case Study

### [x] 4.1 — Hero `public/images/thumb-claims.png`
Real, already wired. Done.

### [ ] 4.2 — Workflow diagram (new slot, not yet in code)
**Would go in:** the "Before / After" section, [claims/page.jsx:150](app/(case-studies)/claims/page.jsx#L150) — currently two plain numbered lists (`workflow-panel before` / `after`).
**What it should show:** a simple visual flow diagram of the before (paper → mail → manual match) vs. after (batch → Zelis → auto-reconcile) pipeline. This is the case study most explicitly about a *workflow redesign*, so a diagram here does more work than anywhere else on the site — text lists undersell it.
**Format:** could be a Figma export, or a clean diagram image — doesn't need to be a screenshot of real product UI, an abstract flow diagram is appropriate given the NDA notice already on the page.

---

## 5. DOCS.ink Case Study

These already have code slots wired and stock/placeholder images in. Swap for real product screenshots (anonymized) when you can.

### [~] 5.1 — Waiver Builder `public/images/docsink-surface-builder.webp`
- **Aspect ratio:** 4:3 · **Size:** 1200×900px
- **Shows:** two-panel document editor, left sidebar + right content area
- Real version: export the waiver builder UI from Figma or product, anonymize client data.

### [~] 5.2 — Signing Experience `public/images/docsink-surface-signing.jpg`
- **Aspect ratio:** 4:3 · **Size:** 900×675px
- **Shows:** phone with a signature/document flow
- Real version: iPhone frame with your actual signature-pad screen.

### [~] 5.3 — Business Dashboard `public/images/docsink-surface-dashboard.png`
- **Aspect ratio:** 4:3 · **Size:** 1200×900px
- **Shows:** web dashboard, stat tiles + activity list
- Real version: export the dashboard, replace real business names with fakes.

### [ ] 5.4 — Kiosk Mode `public/images/docsink-surface-kiosk.jpg`
- **Aspect ratio:** 4:3 · **Size:** 900×675px
- **Shows:** iPad landscape, check-in/welcome screen
- Real version: device-mockup export from Figma, iPad landscape frame.

---

## 6. Find Care Case Study — phone mockups

The CSS phone outlines work as a placeholder. Upgrade only if you have real Figma exports.

### [ ] 6.1 — Before state `public/images/findcare-before.jpg`
- **Aspect ratio:** 9:16 · **Size:** 450×800px
- **Shows:** the confusing/sparse "before" search results screen

### [ ] 6.2 — After state `public/images/findcare-after.jpg`
- **Aspect ratio:** 9:16 · **Size:** 450×800px
- **Shows:** the clean category-grid "after" redesign

---

## 7. Industrial Vision ("Other work" — see `INDUSTRIAL-VISION-PLAN.md` for full content plan)

**Route, homepage section, and CSS are built** at `/industrial-vision`, running entirely on CSS placeholder visuals (stacked-cover hero, cover-wall grid tiles, flagship surface mockups) until real assets land below. All real photos/scans of your own published work, no NDA/anonymization needed.

### [ ] 7.1 — Hero `public/images/industrial-vision/iv-hero.jpg`
**Dual-use:** homepage "Other work" card thumbnail AND the case-study hero — same file, same trick as `design-system.png` (2.1/3.1). Currently a CSS stacked-rectangle placeholder (`.iv-cover-stack` / `.iv-card-stack`).
- **Aspect ratio:** 16:9 (matches `.case-visual` sitewide)
- **Shows:** a mockup of 2–3 physical printed covers together — stacked, fanned, or held. Not a single flat cover; the point is "ongoing yearly magazine," not "one issue."
- **Blocks:** everything else on the page — do this first.

### [ ] 7.2 — Cover wall `public/images/industrial-vision/covers/iv-[edition].jpg`
**Used by:** the "IV 2 to IV 10 — same DNA, evolving execution" grid, [industrial-vision/page.jsx](app/(case-studies)/industrial-vision/page.jsx) — one file per edition you actually led. Currently `.cover-tile` placeholder boxes with edition number + theme text.
- **Aspect ratio:** pick one consistent portrait crop (e.g. 3:4) and hold it for every tile — the grid only reads as a set if every cover is framed the same way.
- **Shows:** front cover only, no spreads.
- **Note:** individual files, not one flattened composite — makes it easy to swap/reorder a single edition later. IV 11 tile is styled as "in progress" (dashed border) — leave that one empty until it ships.

### [ ] 7.3 — Flagship edition deep-dive: IV 10, "Industry in Nepal"
**Used by:** "Inside IV 10 — Industry in Nepal" section. Currently CSS skeleton mockups (`.iv-mock-cover` / `.iv-mock-spread` / `.iv-mock-masthead`).
- `public/images/industrial-vision/iv-10-cover.jpg` — 4:3, full cover, large
- `public/images/industrial-vision/iv-10-spread.jpg` — 4:3, one real interior feature spread
- `public/images/industrial-vision/iv-10-masthead.jpg` — 4:3, credits/masthead page
Want a different flagship edition instead? Say the word and I'll swap the copy + file paths.

### Optional, not needed to ship
- `iv-template-system.jpg` — InDesign grid/master-page screenshot, makes "template system" concrete. Skip if it adds production time.
- `iv-team.jpg` — behind-the-scenes/team photo. Needs consent from anyone pictured; skip unless you already have a shot you're comfortable publishing.

---

## 8. Nepverse ("Other work" — see `NEPVERSE-PLAN.md` for full content plan)

**Route, homepage card, and CSS are built** at `/nepverse`. 5 real images are in and wired — only Concert Hall still runs on a CSS placeholder.

### [x] 8.1 — Hero `public/images/Display screen.png`
**Dual-use:** homepage "Other work" card thumbnail AND the case-study hero — same file, same trick as `design-system.png` (2.1/3.1). Real image, wired in both places. Done.

### [x] 8.2 — Exhibition Hall `public/images/hall_showroom.png`
Interior hall shot, wired into the "Three spaces" section. Done.

### [x] 8.3 — Outdoor Scene `public/images/Outdoor planning.png`
Top-down Unity editor screenshot of the outdoor city scene, wired in. Done.

### [x] 8.4 — Portal close-up `public/images/Portal.png`
Wired as a supporting visual under the "Portals between spaces" feature. Done.

### [x] 8.5 — Floor plan `public/images/Planning showroom-floorplan.png`
Wired as a supporting visual under Process step 01 (Five Ws / MVP framing). Done.

### [ ] 8.6 — Concert Hall (still open)
**Used by:** the middle card in "Three spaces, one connected world." Currently a CSS placeholder (`.nv-mock-concert` — stage + seating rows). None of the 5 images provided depict the Concert Hall specifically (stage + LCD screen + balcony) distinctly enough to use here — drop in a dedicated shot whenever you have one, 4:3, and I'll wire it the same way as the other two environment photos.

**Note:** these 5 files sit directly in `public/images/` (not a `nepverse/` subfolder) with their original names, including spaces — that's fine, Next.js resolves them correctly. Feel free to rename/reorganize later if you'd rather match the `nepverse/nv-*` convention used elsewhere in this doc; just flag it and I'll update the `src` paths to match.

---

## 9. Site-wide — pre-launch

### [ ] 9.1 — OG image `public/og-home.jpg`
**Used by:** not yet referenced in `metadata` anywhere — needs both the image and a code addition (`metadata.openGraph`) once it exists.
- **Size:** 1200×630px — dark teal bg (`#00272C`), "Nabin Ghimire — Senior Product Designer" in Fraunces, one work-card crop on the right.
- Make in Figma, or [og-playground.vercel.app](https://og-playground.vercel.app).

### [ ] 9.2 — Favicon `public/favicon.svg` + `public/favicon.ico`
Not present at all currently — the site has no favicon.
- 32×32px minimum, plus 192×192 for PWA/home-screen icons.
- "N" monogram, Fraunces italic, Chartreuse `#E1FF51` on Gun Metal `#00272C`.

---

## Priority order

| # | Item | Why it matters most | Effort |
|---|------|---------------------|--------|
| 1 | ~~`resume.pdf`~~ | ✅ done | — |
| 2 | `nabin-headshot.jpg` | Trust/approachability on About page | when you can shoot it |
| 3 | Claims workflow diagram | Highest-leverage visual — this case study is literally about a workflow redesign | 30–60 min in Figma |
| 4 | DOCS.ink surfaces (4 files) | Already has code slots + placeholders; real screenshots upgrade an already-working page | 5 min each if screenshots exist |
| 5 | Favicon + OG image | Cheap, professional polish before sending the link to a recruiter | ~1 hr combined |
| 6 | Find Care phone mockups | CSS placeholder already looks fine — lowest priority | if time |
| 7 | Viveka tokens sheet | Optional only — the CSS token sample (3.2) already covers this; a real screenshot is a "more literal proof" upgrade, not a gap | if time |
| 8 | Homepage thumb swaps (DOCS.ink, Find Care) | Nice-to-have, not urgent | later |
| 9 | Industrial Vision hero (7.1) | Unblocks the homepage card and the case-study hero together | 30–60 min mockup |
| 10 | ~~Nepverse hero + 4 more (8.1–8.5)~~ | ✅ done — 5 real images wired in | — |
| 11 | Industrial Vision cover wall (7.2) | Makes the "multi-year" claim credible — do before the flagship deep-dive | scan/export existing covers |
| 12 | Industrial Vision flagship spreads (7.3) | Only needed once §7.1–7.2 are in and a flagship edition is picked | scan 3 pages from one issue |
| 13 | Nepverse Concert Hall shot (8.6) | Last open Nepverse slot — CSS placeholder works fine until then | if you have a dedicated shot |

---

## File tree

```
public/
  Nabin_Ghimire_Resume_2026.pdf       ← 0.1 ✅ real, done
  og-home.jpg                         ← 9.1, social sharing
  favicon.svg / favicon.ico           ← 9.2
  images/
    nabin-headshot.jpg                ← 1.1, about page portrait
    design-system.png                 ← 2.1 / 3.1 ✅ real, done
    viveka-tokens-sheet.jpg           ← 3.2, optional upgrade — CSS token sample works fine as-is
    thumb-claims.png                  ← 2.2 / 4.1 ✅ real, done
    claims-workflow-diagram.jpg       ← 4.2, new slot — needs code wiring
    thumb-docsink.png                 ← 2.3, placeholder in
    docsink-surface-builder.webp      ← 5.1, placeholder in
    docsink-surface-signing.jpg       ← 5.2, placeholder in
    docsink-surface-dashboard.png     ← 5.3, placeholder in
    docsink-surface-kiosk.jpg         ← 5.4
    thumb-findcare.jpg                ← 2.4, optional
    findcare-before.jpg               ← 6.1
    findcare-after.jpg                ← 6.2
  industrial-vision/
    iv-hero.jpg                       ← 7.1, homepage card + case hero (dual-use)
    covers/
      iv-[edition].jpg                ← 7.2, one file per edition led, e.g. iv-2.jpg … iv-10.jpg
    iv-10-cover.jpg                    ← 7.3
    iv-10-spread.jpg                   ← 7.3
    iv-10-masthead.jpg                 ← 7.3
  Display screen.png                  ← 8.1 ✅ real, wired (hero + homepage card)
  hall_showroom.png                    ← 8.2 ✅ real, wired (Exhibition Hall)
  Outdoor planning.png                 ← 8.3 ✅ real, wired (Outdoor Scene)
  Portal.png                           ← 8.4 ✅ real, wired (Portals feature visual)
  Planning showroom-floorplan.png      ← 8.5 ✅ real, wired (Process step 01)
```

**Items marked "new slot, not yet in code"** (3.2, 4.2, and 2.4 if you go with a real image) need a small JSX/CSS change before you can just drop the file in. Ping me when the image is ready and I'll wire it in at the same time.

**Industrial Vision (section 7)** is fully built and live at `/industrial-vision`, running entirely on CSS placeholders for now (no `<Image>` tags yet) — see `INDUSTRIAL-VISION-PLAN.md` for the full content plan. Same as the headshot (1.1): once a file's ready, flag it to me and I'll swap the matching placeholder div for a real `<Image>` at the same time.

**Nepverse (section 8)** is fully built and live at `/nepverse` with 5 real images wired in — only the Concert Hall slot (8.6) still runs on a CSS placeholder. See `NEPVERSE-PLAN.md` for the full content plan.
