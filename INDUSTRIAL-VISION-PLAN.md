# Industrial Vision — Case Study Plan
**Portfolio — Nabin Ghimire**
_Content plan for the "Other work" project. Implemented at `/industrial-vision` — this doc is the reference for the copy decisions, kept in sync with the shipped code._

---

## 0. The real story

Industrial Vision is SOIESNEPAL's print magazine for Thapathali Campus's Industrial Engineering community — tagline **Innovation, Industry, Prosperity**. It's a real publication: funded in part by advertising from industrial businesses, built around original research and articles, not a class handout. You've been Design Lead / Art Director since IV 2 in 2016, through IV 10 (shipped/printed), with IV 11 currently in production. Some editions in between weren't yours to design — that's a true, minor detail and isn't part of the headline story.

**Framing used throughout:** craft and editorial substance — a real magazine with real research and real advertisers, not the mechanics of who was on the team which year. Team/production details are mentioned only lightly (e.g. the masthead surface block), never as the lead angle.

**Confirm before finalizing:**
- Exact count of editions you personally designed, if you want a precise number anywhere (copy currently says "nine editions, IV 2 — IV 10" as the shipped range).

---

## 1. Homepage — "Other work" section — ✅ implemented

```
eyebrow:       Also
section-title: A decade of art direction for an industry engineering magazine.
section-meta:  2016 — Present

tag-row:    Editorial design · SOIESNEPAL, Thapathali Campus · 2016 — Present
work-title: Building the visual identity behind Innovation, Industry, Prosperity.
work-desc:  Design Lead & Art Director for Industrial Vision, a print magazine featuring
            original engineering research and funded by industry advertising. Shaped its
            visual identity since IV 2 — from cover concept to print production.
cta:        Read case study →
```

## 2. Detail page `/industrial-vision` — ✅ implemented

- **Hero:** "Building the visual identity behind *Innovation, Industry, Prosperity*." — subtitle covers real research, real advertising, since IV 2.
- **Meta strip:** Role (Design Lead / Art Director) · Publication (Industrial Vision — SOIESNEPAL) · Editions (IV 2 — IV 10 · IV 11 in progress) · Format (Print + PDF).
- **Context note:** ad-funded, original research, tagline — explicitly not a class project.
- **TL;DR:** challenge = matching a visual identity to real research + paying advertisers; role = Design Lead since 2016 across nine editions; outcome = consistent identity + print-to-PDF extension.
- **Core problem:** reframed around making dense research/interviews readable without losing credibility next to paid ads — not team continuity.
- **Design moves:** layout system for dense content → cover identity strong enough to carry the tagline → print + digital reach.
- **Cover wall:** IV 2 – IV 10 grid + IV 11 "in progress" tile, with known themes tagged (IV 3 Lean Manufacturing, IV 8 Sustainable Energy, IV 9 AI, IV 10 Industry in Nepal).
- **Flagship deep-dive:** IV 10 — cover / feature spread / masthead (masthead framed as "the people behind the research," not team-turnover).
- **Outcomes:** identity longevity, real industry ad backing, readable-research craft, print→digital reach.
- **Reflection:** ties the sustained visual identity to the systems thinking behind the Viveka design system work today.
- **Next case:** links to `/viveka`.

---

## 3. Image plan (unchanged — still placeholders in code)

CSS placeholders are live for every visual below; swap in real assets whenever ready, no copy changes needed.

| # | File | Ratio | Shows |
|---|------|-------|-------|
| Hero (dual-use: homepage card + case hero) | `public/images/industrial-vision/iv-hero.jpg` | 16:9 | Mockup of 2–3 physical covers together — stacked/fanned/held. |
| Cover wall | `public/images/industrial-vision/covers/iv-[edition].jpg` | consistent 3:4 crop | Front cover only, one file per edition, identically framed. |
| Flagship (IV 10) cover | `public/images/industrial-vision/iv-10-cover.jpg` | 4:3 | Full cover, large. |
| Flagship (IV 10) spread | `public/images/industrial-vision/iv-10-spread.jpg` | 4:3 | One real interior feature spread. |
| Flagship (IV 10) masthead | `public/images/industrial-vision/iv-10-masthead.jpg` | 4:3 | Credits/masthead page. |

See `IMAGE-CHECKLIST.md` §7 for the wiring notes per file.

## 4. Build order

1. Hero (unblocks homepage card + case hero at once).
2. Cover wall (makes the multi-edition claim credible).
3. Flagship spreads for IV 10 (or swap to a different flagship edition — just tell me and I'll update the copy referencing "IV 10").
