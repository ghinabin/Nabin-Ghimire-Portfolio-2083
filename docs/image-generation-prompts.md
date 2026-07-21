# Image-generation prompts

Copy-paste prompts for generating **placeholder** images with Nano Banana (Gemini 2.5 Flash Image), ChatGPT (gpt-image-1 / DALL·E), Midjourney, etc. Paths, aspect ratios, and fit modes match `IMAGE-CHECKLIST.md`.

> **Read first — honest expectations**
> - AI generators **cannot produce real, legible UI**. They make convincing-but-fake interfaces with gibberish text. That's OK for an *abstract placeholder* (and fits the NDA "abstract representations" note), but a real, anonymized Figma export beats it every time for the actual portfolio. Use AI for the UI slots only if you have nothing real yet.
> - AI is **great** for the non-UI slots: device/photo mockups (§7 magazine covers, §8 3D VR scene), moody hero shots, textures.
> - **Never** AI-generate the headshot (§1.1) — that's a real photo of you. And favicon/OG text (§9) is more reliable in Figma than any generator.

---

## How to use these

**1. Prepend this style block to every prompt** (it locks the look to the site):

```
STYLE: Clean, modern mockup for a senior product-designer's portfolio. Minimalist
enterprise-SaaS healthcare aesthetic. Palette: deep teal-black #00272C, soft neutral
grays and off-white, with ONE electric chartreuse-yellow accent #E1FF51 used sparingly.
Generous whitespace, crisp, professional, soft realistic lighting, no harsh shadows,
no clutter. Any text must be SHORT abstract placeholder labels or lorem-style filler —
NOT real legible words. No logos, no brand names, no real people's names or faces.
```

**2. Aspect ratio.** These generators don't do arbitrary ratios well:
- **Nano Banana / Gemini** — can target ratios directly; state it in the prompt ("16:9 aspect ratio").
- **ChatGPT / gpt-image-1** — only 1:1, 3:2 landscape (1536×1024), 2:3 portrait (1024×1536). Pick the nearest, then crop/pad to the frame.
- For **`contain` slots** (heroes, mockups) the extra background is forgiven — the panel just centers the artwork. For **`cover` slots** (thumbnails) match the frame ratio closely so nothing important gets cropped.

**3. Backgrounds & the "no-clip" rule** (see `IMAGE-CHECKLIST.md` → Framing rules):
- For a device/object that sits on a **`contain` panel**, generate it **on a solid deep-teal `#00272C` background** — it drops onto the panel seamlessly without needing transparency (which generators do badly).
- Keep the subject **centered with margin** so the frame's gutter reads as breathing space, not a tight crop.
- Export/keep the largest size offered, then downscale — always deliver **2×** the frame size in the checklist.

---

## Homepage thumbnails

> Card thumbs are now **16:9** — the same ratio as the case-study hero. Author **one 16:9 image per project** (2240×1260) and use it for both the card and the hero. Keep the subject in the central ~75% so the 21:9 feature card and 4:3 other-work cards can center-crop it. See `IMAGE-CHECKLIST.md` → "One image for the card and the hero."

### 2.3 — DOCS.ink thumb → `public/images/thumb-docsink.png` · 16:9 · cover
```
A modern thin laptop at a three-quarter angle, floating on a deep teal (#00272C) gradient
background with a soft glow. The screen shows an abstract digital-waiver web app: a
two-panel layout — a document preview on the left, a signature/field area on the right —
with a single small chartreuse (#E1FF51) action button. Placeholder text only. Soft studio
lighting, subtle reflection under the laptop. Laptop centered, filling the frame. 16:9.
```

---

## Claims Payment case study

> Diagrams (4.2/4.3) are the one place a **Figma diagram genuinely beats AI** — generators mangle connected-node text. Prompt included, but consider building these by hand.

### 4.2 — Workflow diagram → `public/images/claims-workflow-diagram.jpg` · 16:9 · contain
```
A clean before/after process-flow diagram on a deep teal (#00272C) background, minimal
line-icon style, lots of whitespace. TOP ROW labeled loosely "before": three muted-gray
pill nodes connected by thin arrows — a paper document icon → an envelope/mail icon → a
magnifying-glass "manual match" icon. BOTTOM ROW "after": three nodes with chartreuse
(#E1FF51) accents — a stacked-batch icon → a two-way data-exchange icon → a checkmark
"auto-reconcile" icon. Flat, editorial, iconographic. Short labels only, no paragraphs. 16:9.
```

### 4.4 — Batch vs. exception UI → `public/images/claims-batch-exception.jpg` · 16:9 · contain
```
A flat web-app screenshot split into two columns on a light UI. LEFT: a fast, dense batch
queue — a compact table of many rows with status chips, suggesting speed. RIGHT: a single
deliberate "exception handling" detail view — one record with a decision panel and notes.
Chartreuse (#E1FF51) accents on primary actions and status. Placeholder text only. Centered
on a deep teal (#00272C) background with generous margin. 16:9.
```

### 4.5 — Audit trail in context → `public/images/claims-audit-trail.jpg` · 16:9 · contain
```
A flat web-app screenshot of a payment-detail view on a light UI: a summary header at top,
then a vertical timeline / activity log of timestamped events (approvals, overrides, notes)
running down the page — an "audit trail by construction" feel. Muted grays with chartreuse
(#E1FF51) accents on key states. Placeholder text/timestamps only. Centered on a deep teal
(#00272C) background, generous margin. 16:9.
```

---

## DOCS.ink case study surfaces

### 5.1 — Waiver Builder → `public/images/docsink-surface-builder.webp` · 4:3 · contain
```
A flat web-app screenshot of a document/waiver BUILDER on a clean light UI. Two-panel
editor: a left sidebar listing draggable field/content blocks, a right canvas showing a
document being composed, a slim top toolbar. One chartreuse (#E1FF51) primary button.
Placeholder text only. Centered on a deep teal (#00272C) background with a comfortable
margin around it. 4:3.
```

### 5.2 — Signing experience → `public/images/docsink-surface-signing.jpg` · 4:3 · contain
```
A modern bezel-less smartphone shown straight-on, screen showing a mobile document-SIGNING
flow: a scrollable document preview above, a signature pad at the bottom with a handwritten-
style signature stroke, and a chartreuse (#E1FF51) "Sign" button. Phone centered on a deep
teal (#00272C) background with clear breathing space. Placeholder text only. 4:3.
```

### 5.3 — Business dashboard → `public/images/docsink-surface-dashboard.png` · 4:3 · contain
```
A flat web DASHBOARD screenshot for a business admin, light UI. Top row of four stat tiles
(a big number + small label each), below them a table/activity list of recent submissions
with status chips. Muted grays, chartreuse (#E1FF51) accents on the headline metrics.
Placeholder text and numbers only. Centered on a deep teal (#00272C) background, generous
margin. 4:3.
```

### 5.4 — Kiosk mode → `public/images/docsink-surface-kiosk.jpg` · 4:3 · contain
```
An iPad in LANDSCAPE orientation, straight-on, showing a self-check-in KIOSK welcome
screen: a large friendly welcome heading, a short line of subtext, and one big chartreuse
(#E1FF51) "Start check-in" button, very minimal and calm. Tablet centered on a deep teal
(#00272C) background with breathing space. Placeholder text only. 4:3.
```

---

## Viveka Design System (optional upgrade)

### 3.2 — Tokens sheet → `public/images/viveka-tokens-sheet.jpg` · 16:10 · contain
```
A flat screenshot of a design-system TOKENS panel on a clean light canvas: a grid of color
swatches (teal family plus one chartreuse #E1FF51 swatch), a vertical type-scale specimen
(large heading down to small caption), and a spacing/radius scale. Organized, documentation-
like, generous whitespace. Abstract labels only. Centered on a deep teal (#00272C)
background with margin. 16:10.
```

---

## Industrial Vision (magazine — AI is a good fit here)

### 7.1 — Hero, stacked covers → `public/images/industrial-vision/iv-hero.jpg` · 16:9 · contain
```
A photorealistic mockup of two or three physical printed engineering-magazine issues,
stacked and slightly fanned on a warm neutral surface, angled three-quarter view, soft
studio lighting, shallow depth of field. The covers show bold editorial layouts with
abstract industrial/engineering imagery and strong mastheads — design suggestion only,
NO legible text. Conveys an ongoing yearly technical magazine. Stack centered with
breathing space. 16:9.
```

### 7.2 — Cover wall (one per edition) → `public/images/industrial-vision/covers/iv-[n].jpg` · 3:4 · cover
```
A single front COVER of a print engineering magazine, straight-on flat-lay, portrait 3:4.
Bold editorial cover design: a masthead band at the top, a striking abstract engineering /
industry hero image filling most of the cover, a small issue-theme treatment. Placeholder
text only, no real words. Cohesive design language so it sits in a grid of similar covers.
```
*Generate several with the same style, vary the hero image per edition. Keep every cover the same crop.*

### 7.3 — Flagship spread → `public/images/industrial-vision/iv-10-spread.jpg` · 4:3 · contain
```
An open magazine INTERIOR spread (two facing pages), flat top-down view, print-design
quality. An editorial feature layout: a bold headline area, columns of body text rendered
as abstract non-legible lines, one large feature photo, a pull-quote, page numbers in the
corners. Clean grid, generous margins. NO legible text. 4:3.
```
*(For `iv-10-cover.jpg` reuse the 7.2 cover prompt at 4:3; for `iv-10-masthead.jpg` prompt a credits/masthead page — a title block plus columns of abstract name lines.)*

---

## Nepverse (3D / VR — AI is a good fit here)

### 8.6 — Concert Hall → `public/images/nepverse-concert-hall.png` · 4:3 · cover
```
A 3D render of a virtual CONCERT HALL inside a metaverse/VR exhibition space: a large stage
with a big glowing LED/LCD screen behind it, tiered seating and a balcony above, viewed from
a wide interior angle. Stylized low-to-mid-poly real-time-engine look (Unity aesthetic),
atmospheric stage lighting with subtle chartreuse (#E1FF51) and teal (#00272C) tones.
Immersive, spacious. 4:3.
```
*File name is a suggestion — tell me the final name and I'll wire the `<Image>` in (the slot is a CSS placeholder now).*

---

## Site-wide (better in Figma, but prompts if you want to try)

### 9.1 — OG share image → `public/og-home.jpg` · 1200×630
```
A social share card, 1200x630, solid deep teal (#00272C) background. Left side: a large
serif headline treatment (Fraunces-style) — leave a clear empty text zone here to add
"Nabin Ghimire — Senior Product Designer" yourself afterward. Right side: one abstract
product-UI card crop with a chartreuse (#E1FF51) accent, softly shadowed. Minimal, elegant.
```
*Text from generators is unreliable — generate the background/composition, then set the real name in Figma.*

### 9.2 — Favicon
Skip the generator — a monogram is a **vector** job. Build an "N" in Fraunces italic, Chartreuse `#E1FF51` on Gun Metal `#00272C`, export `favicon.svg` + a 32×32 and 192×192 PNG. I can generate the SVG markup directly if you want.

---

## After you generate

1. Downscale/export to the **2× size** in `IMAGE-CHECKLIST.md`'s frame table.
2. Drop the file at the path listed here (matching the checklist).
3. Slots marked "new slot / CSS placeholder" (Claims 4.2–4.5, IV §7, Nepverse 8.6, tokens 3.2) still need a one-line JSX/CSS swap from placeholder → `<Image>`. **Ping me with which files landed and I'll wire them in** at the correct fit mode (contain vs cover) per the framing rules.
