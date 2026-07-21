# Image & Asset Checklist
**Portfolio — Nabin Ghimire**
_Every real-content gap on the site — what file, what page, what it should show. Update the images whenever you're ready; the code slots are already wired for everything in sections 1–6._

All stock/placeholder images: unsplash.com → search the term → Download free → largest size → save to the listed path.
Your own work (Figma exports, real product screenshots — anonymized per the NDA notice already on each case study page) always beats stock.
**Want to AI-generate placeholders?** Copy-paste prompts (matched to these paths, aspect ratios, and the brand palette) live in [`docs/image-generation-prompts.md`](docs/image-generation-prompts.md).

---

## Status key
- `[ ]` Not done — nothing on disk yet
- `[~]` Placeholder in — stock or generic image standing in for the real thing
- `[x]` Final asset in — real content, done

---

## Framing & sizing rules — read this before exporting anything

**The one rule that keeps a main image from getting clipped: don't let it fill a `cover` frame.**

Every image slot on the site uses one of two fit modes. They behave opposite ways:

- **`cover`** → the image *fills* the frame and **crops** whatever spills past the edges. Good only for textural/photo backgrounds where losing the edges doesn't matter. Frames on `cover`: the homepage feature card, the standard work-card thumbs, the "Also worth a look" thumbs, and the default case-study hero background. **Anything with a UI, a device, a cover, or text in it will get cut off in these.**
- **`contain` + panel padding** → the image is shown **whole**, centered, with a gutter of empty space around it (the "breathing room"). Nothing is cropped. This is the Find Care hero pattern (`.case-visual--image`) — it's the correct mode for any product screenshot, device mockup, magazine cover, or diagram you want fully visible.

> **So: for any main/hero image that must be seen in full, use the `contain`-on-panel pattern — never `cover`.** If a slot below is currently on `cover` and you want the whole image visible, tell me the slot and I'll convert it to a contained panel (same one-line CSS change as Find Care's).

### Frame reference — real dimensions from the CSS

| Frame | Where | Aspect | Frame @1× | **Export @2×** | Fit mode | Gutter / safe zone |
|---|---|---|---|---|---|---|
| Feature card thumb | Homepage top card (full width) | 21:9 | 1120×480 | **2240×960** | `cover` (crops) | bleeds edge-to-edge — keep key content in the centre ~85% |
| Standard card thumb | Homepage work cards (2-col) | 16:9 | ~520×293 | **1200×675** | `cover` (crops) | now matches the hero — a 16:9 image shows in full (bar the ~5% resting `scale(1.05)` zoom) |
| Other-work thumb | "Also worth a look" cards | 4:3 | ~220×165 | **560×420** | `cover` (crops) | keep subject centred |
| Case-study hero | Every case study, top | 16:9 | 1120×630 | **2240×1260** | `contain`+pad (whole image) | 24–64px each side — this IS the breathing space |
| Contained supporting image | e.g. Find Care "Responsive" | 16:9 | 1120×630 | **2240×1260** | `contain`+pad | 20–48px each side |
| DOCS.ink / in-body surfaces | 4:3 slots (§5) | 4:3 | see §5 | 2× of listed | `contain` | built into the panel |

*(Container maxes at 1120px with a 20–48px page gutter, so real content width is ~1024px at desktop — the @2× export sizes above are rounded up to stay crisp on retina and while cards reflow.)*

### One image for the card **and** the hero — the master template

Author **one image per project** and drop it into both the homepage card and the case-study hero. Cropping at the edges is expected and fine — you just design *around* it using the safe zone below.

**Canvas**
- **Size: 2240 × 1260 px** (16:9, 2× — 1× is 1120×630). Always this exact canvas.
- **Full-bleed:** let the background (color / gradient / photo / texture) run to **all four edges**. Edges get cropped in the card frames — that's intended, so nothing important should live there.
- **Format:** photo/full-bleed → JPG or PNG. Device mockup or screenshot on a flat backdrop → paint the backdrop in deep teal `#00272C` (matches the hero panel) so the contain-fit hero blends seamlessly.

**Where each frame crops the same 2240×1260 image**
| Frame | Fit | What you see | What's cropped |
|---|---|---|---|
| Case-study hero | contain | the **whole image**, centered, with 24–64px panel padding around it | nothing (padding = built-in breathing space) |
| Standard card | cover | the whole image, minus a ~2.4% resting-zoom nibble on each edge | thin outer edge only |
| Feature card (21:9) | cover | full width, **centre ~72% of the height** | top & bottom bands |
| Other-work card (4:3) | cover | full height, **centre 75% of the width** | left & right bands |

**The safe zone — keep everything important inside it**
Logos, faces, product UI, text, the main subject → inside a **centred 1680 × 900 px box**. That means a keep-clear margin of **≈ 280 px left & right** and **≈ 180 px top & bottom**. Anything inside survives all four crops; anything outside may vanish in one of them.

```
  2240 × 1260 canvas  (16:9)
  ┌──────────────────────────────────────────────────┐  ▲
  │  ⟵ 280px ⟶                          ⟵ 280px ⟶     │  │ 180px
  │            ┌────────────────────────────┐          │  ▼
  │            │                            │          │
  │            │      SAFE ZONE             │          │
  │            │      1680 × 900 px         │  ← faces, logos, UI,
  │            │   (keep subject + text     │     text, key detail
  │            │        in here)            │          │
  │            │                            │          │  ▲
  │            └────────────────────────────┘          │  │ 180px
  │                                                    │  ▼
  └──────────────────────────────────────────────────┘
   background bleeds to all 4 edges — safe to crop
```

- **Hero doesn't need internal margin** — its panel already adds 24–64px of gutter around the whole image. The 280/180px margins above exist purely to survive the *card* crops.
- Quick rule if you're eyeballing it: **keep the important stuff out of the outer ~1/8 on every side.**

### Export recipe

1. **Always export at 2×** the frame size in the table — anything at 1× looks soft on retina screens.
2. **For `contain` slots (heroes, mockups, covers, diagrams):** export on a **transparent background** (PNG or WebP). The frame's own padding gives the gutter, so **do not** bake a big margin into the file — fit the artwork to fill the frame's *safe area* (roughly `frame minus ~64px each side`, e.g. ~990×500 inside the 1120×630 hero) and let the panel padding breathe around it. If you want *more* air than the panel gives, add a small transparent margin of your own.
3. **For `cover` slots (thumbnails):** export at the **exact frame aspect ratio** in the table so cover has nothing to crop — a 16:10 image in a 16:10 frame loses only the ~5% resting-zoom. Keep the important subject inside the centre ~85% and away from all four edges.
4. **Match the frame's radius** — frames round the corners for you (16px thumbs / 20px hero) via `overflow: hidden`, so export **square-cornered**; don't pre-round the file.

---

## 0. Broken right now — fix first

### [x] 0.1 — Resume `public/Nabin_Ghimire_Resume_2026.pdf`
**Used by:** [Footer.jsx:27](components/Footer.jsx#L27) — "Resume (PDF)" link
Real resume in, opens in a new tab. Done.

---

## 1. About Page

### [x] 1.1 — Headshot `public/images/about/nabin-headshot.jpg`
**Wired at:** [about/page.jsx](app/about/page.jsx) — real photo in, replacing the "NG" initials placeholder. `<Image fill>` with `object-fit: cover` (`.photo-img`) filling the 4:5 portrait frame. Done.
**Optional:** source file is ~6.4 MB — Next.js optimizes it on delivery so it's fine as-is, but compressing/exporting near 1280×1600px would shrink the repo. The old `.photo-placeholder` CSS is left in place, harmless, in case you ever want to revert.

---

## 2. Homepage Thumbnails

### [x] 2.1 — Viveka thumb `public/images/viveka/design-system.png`
Real Figma export, already wired in. Done.

### [x] 2.2 — Claims thumb `public/images/claims/thumb-claims.png`
Real image, already wired in on the homepage card and the claims case-study hero. Done.

### [~] 2.3 — DOCS.ink thumb `public/images/docsink/thumb-docsink.png`
**Used by:** [page.jsx](app/page.jsx) homepage card **AND** the DOCS.ink case-study hero — one image, both slots. On the hero it sits on top by default and **fades on hover to reveal the animated document-stack** underneath (`.case-visual--reveal`).
Generic laptop device shot standing in. Swap for a real DOCS.ink shot built to the master template (16:9, 2240×1260) and it flows into both slots.

### [x] 2.4 — Find Care thumb `public/images/findcare/findcare-hero.png`
**Used by:** [page.jsx](app/page.jsx) homepage work-grid card. Real Daylight/Find Care product shot (desktop + mobile), wired in with `<Image fill>` the same way the other three cards are. Same file is dual-used as the case-study hero (§6). Done.
**⚠ NDA note:** this screenshot is fully branded (shows "Daylight", "Viveka Health", and sample patient/provider names) — which sits in tension with the NDA notice on the case-study page that says the client org is generalized and screens are abstract. Decide whether to keep as-is, anonymize the screenshot, or soften that NDA line.

---

## 3. Viveka Design System Case Study

### [x] 3.1 — Hero / component library `public/images/viveka/design-system.png`
Real Figma export, already wired. Done.

### [~] 3.2 — Supporting visual: token sample, in "Start with tokens, not components" (decision-num 01)
**Wired at:** [viveka/page.jsx:232](app/(case-studies)/viveka/page.jsx#L232) — a CSS-only swatch strip (`.token-sample`, styles in [case-study.css](assets/css/components/case-study.css)) pulling colors straight from the site's own tokens. No image file needed — it works as a permanent abstract visual, same spirit as the Find Care CSS phone mockups (6.1/6.2 below).
**Optional upgrade, not urgent:** swap for a real screenshot of your Figma tokens panel if you want more literal proof. If you do: save as `public/images/viveka-tokens-sheet.jpg`, 16:10 or 4:3, and replace the `<div className="token-sample">` block with an `<Image fill>` the same way the hero visual is wired — ping me when it's ready.

### [x] 3.3 — Audit evidence: stat strip, in the Research section
**Wired at:** [viveka/page.jsx:164](app/(case-studies)/viveka/page.jsx#L164) — four real, generalized numbers from the actual audit (`.stat-strip` / `.stat-value` / `.stat-label`, styles in [case-study.css](assets/css/components/case-study.css)). No image needed at all — this replaces what would've been an audit screenshot with typography-driven data, which sidesteps the NDA concern about showing real product UI. Done, nothing to swap later unless you want real screenshots alongside it.

---

## 4. Claims Payment Case Study

### [x] 4.1 — Hero `public/images/claims/thumb-claims.png`
Real, already wired. Done.

### [~] 4.2 — Workflow diagram `public/images/claims-workflow-diagram.jpg`
**Wired at:** the "Service blueprint" section, [claims/page.jsx](app/(case-studies)/claims/page.jsx) — currently a CSS-only diagram (`.workflow-diagram` / `.workflow-diagram-row` / `.workflow-diagram-step`, styles in [claims.css](assets/css/pages/claims.css)) showing the before (paper → mail → manual match) vs. after (batch → Zelis → auto-reconcile) pipeline as connected pill labels.
**What it should show:** a simple visual flow diagram of the same before/after pipeline. This is the case study most explicitly about a *workflow redesign*, so a diagram here does more work than anywhere else on the site — the CSS pill version is a placeholder, not the final craft evidence.
**Format:** could be a Figma export, or a clean diagram image — doesn't need to be a screenshot of real product UI, an abstract flow diagram is appropriate given the NDA notice already on the page. Swap the `.workflow-diagram` block for an `<Image fill>` when ready — ping me and I'll wire it in.

### [~] 4.3 — Status-state diagram (new slot)
**Wired at:** Decision 01 "Make status the spine of the interface," [claims/page.jsx](app/(case-studies)/claims/page.jsx) — currently a CSS-only pill sequence (`.status-flow` / `.status-flow-step`, styles in [claims.css](assets/css/pages/claims.css)) showing the six-state lifecycle (Pending approval → … → Reconciled/Failed).
**What it should show:** the same six-state lifecycle, ideally as a real product screenshot or diagram of the status badge/timeline UI. No image file needed to ship — the CSS version works as a placeholder.

### [~] 4.4 — Batch vs. exception UI (new slot)
**Wired at:** Decision 02 "Batch first, exceptions second," [claims/page.jsx](app/(case-studies)/claims/page.jsx) — currently a CSS-only two-column mock (`.batch-exception-mock`, styles in [claims.css](assets/css/pages/claims.css)) suggesting a fast batch list next to a deliberate exception flow.
**What it should show:** a real (anonymized) screenshot contrasting the batch queue view with the exception-handling flow.

### [~] 4.5 — Audit trail in context (new slot)
**Wired at:** Decision 03 "Audit trail by construction, not by report," [claims/page.jsx](app/(case-studies)/claims/page.jsx) — currently a CSS-only mock log (`.audit-trail-mock`, styles in [claims.css](assets/css/pages/claims.css)) with dummy timestamped rows.
**What it should show:** a real (anonymized) screenshot of a payment detail view with the inline approval chain and override reasons — proves "by construction" rather than "by report."

---

## 5. DOCS.ink Case Study

These already have code slots wired and stock/placeholder images in. Swap for real product screenshots (anonymized) when you can.

### [~] 5.1 — Waiver Builder `public/images/docsink/docsink-surface-builder.webp`
- **Aspect ratio:** 4:3 · **Size:** 1200×900px
- **Shows:** two-panel document editor, left sidebar + right content area
- Real version: export the waiver builder UI from Figma or product, anonymize client data.

### [~] 5.2 — Signing Experience `public/images/docsink/docsink-surface-signing.jpg`
- **Aspect ratio:** 4:3 · **Size:** 900×675px
- **Shows:** phone with a signature/document flow
- Real version: iPhone frame with your actual signature-pad screen.

### [~] 5.3 — Business Dashboard `public/images/docsink/docsink-surface-dashboard.png`
- **Aspect ratio:** 4:3 · **Size:** 1200×900px
- **Shows:** web dashboard, stat tiles + activity list
- Real version: export the dashboard, replace real business names with fakes.

### [ ] 5.4 — Kiosk Mode `public/images/docsink/docsink-surface-kiosk.jpg`
- **Aspect ratio:** 4:3 · **Size:** 900×675px
- **Shows:** iPad landscape, check-in/welcome screen
- Real version: device-mockup export from Figma, iPad landscape frame.

---

## 6. Find Care Case Study — hero

### [x] 6.1 — Hero `public/images/findcare/findcare-hero.png`
**Wired at:** [findcare/page.jsx](app/(case-studies)/findcare/page.jsx) `.case-visual--image` — real Daylight/Find Care product shot (desktop + mobile), replacing the old before/after CSS phone mockup. Contained (not cropped) on a themed panel with padding + drop-shadow, since the PNG is transparent. **Dual-use:** same file backs the homepage card thumbnail (§2.4). Done.
**⚠ NDA note:** see §2.4 — branded screenshot vs. the "abstract representations" NDA notice on the page. Your call on how to reconcile.

### [x] 6.2 — Responsive/mobile `public/images/findcare/findcare-responsive.png`
**Wired at:** the new "Responsive design" section, [findcare/page.jsx](app/(case-studies)/findcare/page.jsx) `.responsive-visual` — three-screen mobile mockup of the Daylight portal, contained on the same themed panel as the hero. Done.
**⚠ NDA note:** same branded-screenshot caveat as §2.4/6.1.

---

## 7. Industrial Vision ("Other work" — see `INDUSTRIAL-VISION-PLAN.md` for full content plan)

**Route, homepage section, and CSS are built** at `/industrial-vision`, running entirely on CSS placeholder visuals (stacked-cover hero, cover-wall grid tiles, flagship surface mockups) until real assets land below. All real photos/scans of your own published work, no NDA/anonymization needed.

### [~] 7.1 — Hero `public/images/industrial-vision/industrial-vision-hero.png`
**Wired at:** the case-study hero AND the homepage "Other work" card — one image, both slots. On the card it sits on top by default and **fades on hover to reveal the animated cover-stack fanning open** (`.other-work-visual--reveal`).
Swap the current image for a stronger one built to the master template (16:9, 2240×1260) whenever ready — it flows into both slots. Old CSS stack (`.iv-card-stack`) is kept as the hover reveal.
- **Aspect ratio:** 16:9 (matches `.case-visual` sitewide)
- **Shows:** a mockup of 2–3 physical printed covers together — stacked, fanned, or held. Not a single flat cover; the point is "ongoing yearly magazine," not "one issue."
- **Blocks:** everything else on the page — do this first.

### [x] 7.2 — Cover wall `public/images/industrial-vision/covers/IV[edition].webp`
**Used by:** the "IV 2 to IV 10 — same DNA, evolving execution" grid, [industrial-vision/page.jsx](app/(case-studies)/industrial-vision/page.jsx) — one file per edition (`IV2.webp`…`IV10.webp`), wired into the `covers` array and rendered as real `<Image>` tiles. Done for IV 2–10; IV 11 tile stays a dashed "in progress" placeholder until it ships.
- **Aspect ratio:** pick one consistent portrait crop (e.g. 3:4) and hold it for every tile — the grid only reads as a set if every cover is framed the same way.
- **Shows:** front cover only, no spreads.
- **Note:** individual files, not one flattened composite — makes it easy to swap/reorder a single edition later. IV 11 tile is styled as "in progress" (dashed border) — leave that one empty until it ships.

### [x] 7.3 — Flagship edition deep-dive: IV 10, "Industry in Nepal"
**Used by:** "Inside IV 10 — Industry in Nepal" section. All three surfaces now wired as real `<Image>` tiles (`.iv-surface-visual--image`), replacing the old CSS skeleton mockups.
- [x] `public/images/industrial-vision/iv-10-cover.jpg` — Cover surface, fills the 4:3 frame. File is 2400×1792 (4:3).
- [x] `public/images/industrial-vision/iv-10-spread.jpg` — interior feature spread.
- [x] `public/images/industrial-vision/iv-10-masthead.jpg` — credits/masthead page. Wired in, replacing the `.iv-mock-masthead` CSS mock.
Want a different flagship edition instead? Say the word and I'll swap the copy + file paths.

### Optional, not needed to ship
- `iv-template-system.jpg` — InDesign grid/master-page screenshot, makes "template system" concrete. Skip if it adds production time.
- `iv-team.jpg` — behind-the-scenes/team photo. Needs consent from anyone pictured; skip unless you already have a shot you're comfortable publishing.

---

## 8. Nepverse ("Other work" — see `NEPVERSE-PLAN.md` for full content plan)

**Route, homepage card, and CSS are built** at `/nepverse`. 5 real images are in and wired — only Concert Hall still runs on a CSS placeholder.

### [x] 8.1 — Hero `public/images/nepverse/Display screen.png`
**Dual-use:** homepage "Other work" card thumbnail AND the case-study hero — same file, same trick as `design-system.png` (2.1/3.1). Real image, wired in both places. Done.

### [x] 8.2 — Exhibition Hall `public/images/nepverse/hall_showroom.png`
Interior hall shot, wired into the "Three spaces" section. Done.

### [x] 8.3 — Outdoor Scene `public/images/nepverse/Outdoor planning.png`
Top-down Unity editor screenshot of the outdoor city scene, wired in. Done.

### [x] 8.4 — Portal close-up `public/images/nepverse/Portal.png`
Wired as a supporting visual under the "Portals between spaces" feature. Done.

### [x] 8.5 — Floor plan `public/images/nepverse/Planning showroom-floorplan.png`
Wired as a supporting visual under Process step 01 (Five Ws / MVP framing). Done.

### [ ] 8.6 — Concert Hall (still open)
**Used by:** the middle card in "Three spaces, one connected world." Currently a CSS placeholder (`.nv-mock-concert` — stage + seating rows). None of the 5 images provided depict the Concert Hall specifically (stage + LCD screen + balcony) distinctly enough to use here — drop in a dedicated shot whenever you have one, 4:3, and I'll wire it the same way as the other two environment photos.

**Note:** these 5 files now live in `public/images/nepverse/` with their original names, including spaces — that's fine, Next.js resolves them correctly. Rename to an `nv-*` convention later if you like; just flag it and I'll update the `src` paths to match.

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
| 11 | ~~Industrial Vision cover wall (7.2)~~ | ✅ done — IV 2–10 covers wired | — |
| 12 | ~~Industrial Vision flagship spreads (7.3)~~ | ✅ done — cover, spread & masthead wired | — |
| 13 | Nepverse Concert Hall shot (8.6) | Last open Nepverse slot — CSS placeholder works fine until then | if you have a dedicated shot |

---

## File tree

Images are organized into per-project subfolders under `public/images/`. Every `src` in code points at these exact paths.

```
public/
  Nabin_Ghimire_Resume_2026.pdf              ← 0.1 ✅ real, done
  og-home.jpg                                ← 9.1, social sharing (not in yet)
  favicon.svg / favicon.ico                  ← 9.2 (not in yet)
  images/
    about/
      nabin-headshot.jpg                     ← 1.1 ✅ real, done
    viveka/
      design-system.png                      ← 2.1 / 3.1 ✅ real, done
      viveka-tokens-sheet.jpg                ← 3.2, optional upgrade — CSS token sample works fine as-is
    claims/
      thumb-claims.png                       ← 2.2 / 4.1 ✅ real, done
      claims-workflow-diagram.jpg            ← 4.2, new slot — needs code wiring
    docsink/
      thumb-docsink.png                      ← 2.3, placeholder in
      docsink-surface-builder.webp           ← 5.1, placeholder in
      docsink-surface-signing.jpg            ← 5.2, placeholder in
      docsink-surface-dashboard.png          ← 5.3, placeholder in
      docsink-surface-kiosk.jpg              ← 5.4 (not in yet)
    findcare/
      findcare-hero.png                      ← 2.4 / 6.1 ✅ real, done (dual-use)
      findcare-responsive.png                ← 6.2 ✅ real, done
    industrial-vision/
      industrial-vision-hero.png             ← 7.1, homepage card + case hero (dual-use)
      iv-10-cover.jpg                        ← 7.3 ✅ real, wired
      iv-10-spread.jpg                       ← 7.3 ✅ real, wired
      iv-10-masthead.jpg                     ← 7.3 ✅ real, wired
      covers/
        IV2.webp … IV10.webp                 ← 7.2 ✅ real, wired (one per edition, IV 2–10)
    nepverse/
      Display screen.png                     ← 8.1 ✅ real, wired (hero + homepage card)
      hall_showroom.png                      ← 8.2 ✅ real, wired (Exhibition Hall)
      Outdoor planning.png                   ← 8.3 ✅ real, wired (Outdoor Scene)
      Portal.png                             ← 8.4 ✅ real, wired (Portals feature visual)
      Planning showroom-floorplan.png        ← 8.5 ✅ real, wired (Process step 01)
```

**Items marked "new slot, not yet in code"** (3.2, 4.2, and 2.4 if you go with a real image) need a small JSX/CSS change before you can just drop the file in. Ping me when the image is ready and I'll wire it in at the same time.

**Industrial Vision (section 7)** is fully built and live at `/industrial-vision`, running entirely on CSS placeholders for now (no `<Image>` tags yet) — see `INDUSTRIAL-VISION-PLAN.md` for the full content plan. Same as the headshot (1.1): once a file's ready, flag it to me and I'll swap the matching placeholder div for a real `<Image>` at the same time.

**Nepverse (section 8)** is fully built and live at `/nepverse` with 5 real images wired in — only the Concert Hall slot (8.6) still runs on a CSS placeholder. See `NEPVERSE-PLAN.md` for the full content plan.
