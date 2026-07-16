# Nepverse — Case Study Plan
**Portfolio — Nabin Ghimire**
_Content plan for the second "Other work" project, alongside Industrial Vision. Implemented at `/nepverse` — this doc is the reference for the copy decisions, kept in sync with the shipped code._

---

## 0. The real story

Nepverse was an internal R&D project at EKbana (E.K. Solutions Pvt. Ltd.), a Nepali company previously known for crypto wallet and blockchain work. COVID lockdowns made physical exhibitions and events impossible for businesses; Meta's October 2021 rebrand and $10B metaverse investment announcement was the catalyst that got a 5-person team formed to explore whether a virtual world could solve that problem for real. The team built a multiplayer VR prototype in Unity — exhibition halls, a 1,000+ capacity concert venue, portal-based navigation, group chat, voice call, in-world commerce.

**Your role:** Product Designer & 3D Artist — both the UX process (Five Ws framework, prototyping) and hands-on environment art (Cinema 4D modeling, Substance Painter/Photoshop texturing).
**Status:** concluded as an internal proof-of-concept / demo, never brought to public launch — stated honestly in the case study, not spun as a live product.
**Placement:** joins Industrial Vision in the homepage "Other work" section (now generalized to "Two projects outside the SaaS playbook that shaped how I design").

**Confirm before finalizing:**
- Exact start/end dates if more precise than "2021 — 2022."
- Whether "concluded prototype" is the right framing, or if there's a further status update (e.g. informed later EKbana work) worth naming.

---

## 1. Homepage — "Other work" section — ✅ implemented

The section now holds two stacked wide cards. Nepverse's:
```
tag-row:    R&D · VR / 3D · EKbana · 2021 — 2022
work-title: Prototyping a metaverse businesses could actually rent space in.
work-desc:  Product designer & 3D artist on a 5-person R&D team at EKbana — took a
            COVID-era idea from sketch to a working multiplayer VR prototype in Unity,
            with exhibition halls and a 1,000-person concert venue.
cta:        Read case study →
```

## 2. Detail page `/nepverse` — ✅ implemented

- **Hero:** "Prototyping a metaverse businesses could actually *rent space in*." — grounds the pitch in the concrete rentable-space value prop from the brief, not generic metaverse hype.
- **Meta strip:** Role (Product Designer & 3D Artist) · Company (EKbana — R&D team of 5) · Timeline (2021 — 2022) · Status (Concluded prototype).
- **Status note:** states plainly this was an internal demo, not a public launch — avoids reading like a live product claim.
- **TL;DR:** challenge = COVID killing physical events; role = both design + 3D art; outcome = a working Unity multiplayer prototype.
- **Context:** EKbana's blockchain background, the Meta rebrand as catalyst, forming the 5-person team, landing on virtual exhibitions as the wedge.
- **Process (3 numbered moves):** Five Ws MVP framing → sketch-to-greybox in Unity → full-fidelity Cinema 4D/Substance Painter environments.
- **Features (4-item grid):** multiplayer exploration, portals with swirl transition, group chat & voice call, in-world commerce.
- **Scale strip:** 1,000+ concert capacity, 3 environments shipped, 5-person team.
- **Environments deep-dive:** Exhibition Hall, Concert Hall, Outdoor Scene — each with a short description grounded in the brief's actual details (stage + LCD + balcony + automated lift, etc.).
- **Outcomes:** working build over concept deck, venue built for a real crowd, cross-discipline ownership, an honestly-labeled proof-of-concept.
- **Reflection:** the value of R&D work that doesn't have to ship to be worth doing.
- **Next case:** links to `/viveka`, closing the loop back into the main SaaS body of work. Industrial Vision's next-case now points here instead, so the two "Other work" projects chain into each other before returning to Viveka.

---

## 3. Image plan — ✅ 5 of 6 slots filled

| # | File | Used for |
|---|------|----------|
| Hero (dual-use: homepage card + case hero) | `public/images/Display screen.png` | A user facing a large display screen inside the exhibition hall. |
| Exhibition Hall | `public/images/hall_showroom.png` | Interior hall shot in the "Three spaces" section. |
| Outdoor Scene | `public/images/Outdoor planning.png` | Top-down Unity editor screenshot of the outdoor city scene. |
| Portal close-up | `public/images/Portal.png` | Supporting visual under the "Portals between spaces" feature. |
| Floor plan | `public/images/Planning showroom-floorplan.png` | Supporting visual under Process step 01 (Five Ws / MVP framing). |
| Concert Hall — still open | — | None of the 5 provided images depict the Concert Hall specifically; still a CSS placeholder. Drop one in any time. |

Files sit directly in `public/images/` with their original names (spaces and all) — Next.js resolves them fine. See `IMAGE-CHECKLIST.md` §8 for per-file notes.

## 4. Remaining

- A dedicated Concert Hall shot (stage + LCD + balcony) to replace the last CSS placeholder.
