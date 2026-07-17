# DOCS.ink — Content Strategy & Copy

## Strategy (read first)

**Role in portfolio:** Your **0→1 shipped product** story, and your **least NDA-bound** work (live,
public, at docs.ink). This is the case study that should carry the most *real* product UI on the
whole site. It balances the systems/enterprise narrative with "I can take something from nothing to
shipped-and-used-by-thousands."

**Who's reading & what they check:** Product design leads and founders. They want proof you can own
*breadth* under real constraints — a whole product, multiple devices, small team, fixed timeline —
and make the ship/polish trade-offs a lead actually makes. They also want to see you *test* before
you build.

**The one thing this study proves:** You can lead product design end-to-end and scope like an owner
— deciding what has to be excellent and what can ship good-enough, and prototyping to catch problems
before they cost engineering time.

**Narrative arc:** One product, three users who share nothing → I scoped it as a lead (system first,
prioritize ruthlessly, prototype before committing) → four surfaces across three devices → shipped,
now used by thousands of US businesses.

**The UX process, made visible (this is the spine):**
`Discovery (3 user types, the breadth problem) → Define (scope map) → Ideate/Build (4 surfaces) →
Validate (prototype testing caught real problems) → Deliver (handoff as part of the work) → Outcome`
Your "prototype before committing" section already contains real usability findings (signature pad
too small, kiosk reset too slow) — pull those out as a labeled **Validation** beat. That's the UX
receipt.

**Image note:** this is the study to go visual-heavy on. Your checklist has the four surface slots
wired with placeholders — real (lightly anonymized) screenshots here beat effort spent anywhere else.

---

## Layout & Copy

### HERO
**Eyebrow:** Case study · SaaS · Contract leadership
**Headline:** A digital waiver platform, *zero to scale*.
**Subhead:**
> I led product design for DOCS.ink from the ground up — online waiver software that thousands of US
> businesses use to replace paper consent forms with digital signing. The brief was open-ended: take
> it from early concepts to a production platform. I owned design end-to-end.

**Live link:** Live at docs.ink ↗
**Meta:** Role — Lead Product Designer (Contract) · Managed — 1 designer · Timeline — 2024–2025 ·
Platform — Web · Mobile · iPad Kiosk

**Scale strip (keep — this is your outcome, up front):**
`Millions — waivers signed through the platform (as stated on docs.ink)` ·
`Thousands — US businesses running on DOCS.ink (as stated on docs.ink)` ·
`4 — surfaces shipped: builder, signing, dashboard, iPad kiosk`

> 🖼️ **PLACEHOLDER — Hero.** The waiver builder or signing flow — real product UI on a device
> mockup. This is your most showable work; lead with actual pixels, lightly anonymized.

---

### 1 · CONTEXT — *what & who*
**Section eyebrow:** Context
**Section title:** A SaaS platform serving businesses that still ran on paper.

DOCS.ink helps small businesses replace paper waivers with digital ones. The customers are specific:
tour and rental operators, water-sports outfitters, kids' activity venues, gyms, events and expos.
Anywhere someone signs a consent form before an activity, the platform handles it.

It covers the whole flow: a **waiver builder** with custom branding, **multi-channel signing** via
link, QR, or iPad kiosk, a **guest-management dashboard** with search/filter/download, and
**integrations** with booking tools (Bookeo, Rezdy) and marketing tools (Mailchimp). I came on as
**Lead Product Designer** on contract during the foundational build, owned design end-to-end, had one
designer with me, and shipped alongside a small engineering team.

---

### 2 · DISCOVERY & DEFINE — *the process beat — the breadth problem*
**Section eyebrow:** The scope problem
**Section title:** One product, three very different users.

> Frame the user-type analysis as discovery. It shows you scoped from users, not features.

The hard part wasn't any single screen — it was the breadth. A complete waiver platform has to work
for three users who share almost nothing:

- **Business admin** — creating waivers, tracking who signed what, managing documents. Usually on
  desktop. Can handle some complexity.
- **Front-desk staff** — running the iPad kiosk during a busy shift. No time for anything that needs
  explaining. Has to be hand-it-to-the-next-person obvious.
- **End customer** — signing on their phone, probably outside, probably in a hurry. Never used this
  product before, won't again.

> **Pull quote:** "A tour operator isn't a power user. The design had to work without any training."

Designing for any one of them is manageable. Getting all three to feel like the same product, across
three devices, with a small team, was the actual challenge.

> 🖼️ **PLACEHOLDER — User/device map (wide).** The three users mapped to their devices and contexts.
> A simple synthesis diagram that shows you scoped deliberately.

---

### 3 · WHAT I SHIPPED — *the four surfaces*
**Section eyebrow:** What I shipped
**Section title:** Four surfaces, one product.

**01 · Waiver builder (web).** Template-based editor with custom branding (logo, colors), toggleable
fields, and a live preview — so any business owner can publish a waiver without technical help.

**02 · Signing experience (mobile).** Contactless signing via link, QR, or kiosk. Mobile-first with
large touch targets, clear progress, a full-screen signature pad built for outdoor use, and a
type-to-sign fallback.

**03 · Guest management (web).** Dashboard with at-a-glance metrics, a signed-waiver feed, real-time
notifications, and search/filter/download for every document. Encrypted storage, always backed up.

**04 · iPad kiosk mode.** A single-purpose, auto-resetting check-in interface — branded per business,
requires no staff training, designed for the chaos of a busy front desk.

> 🖼️ **PLACEHOLDER — Builder (4:3).** Two-panel editor: section list + live preview. *(Slot wired:
> `docsink-surface-builder.webp` — swap placeholder for real screenshot.)*
> 🖼️ **PLACEHOLDER — Signing (9:16).** Phone signature-pad flow. *(Slot wired:
> `docsink-surface-signing.jpg`.)*
> 🖼️ **PLACEHOLDER — Dashboard (4:3).** Stat tiles + activity feed. *(Slot wired:
> `docsink-surface-dashboard.png`.)*
> 🖼️ **PLACEHOLDER — Kiosk (4:3, iPad landscape).** Welcome/check-in screen. *(Slot open:
> `docsink-surface-kiosk.jpg` — currently CSS placeholder.)*

---

### 4 · HOW I SCOPED IT — *lead thinking*
**Section eyebrow:** Approach
**Section title:** How I scoped the work as a lead.

Contract work is different in one real way: you have a deadline for everything, including yourself.
Whatever I built had to be shippable, documented, and easy for the team to keep running after I left.

**01 · Design system before features.** I put time into a component library and token system before
building too many screens. Slow at first — but every feature after came together faster, and handoff
was cleaner.

**02 · Not everything needs to be excellent.** With one designer and a fixed timeline, some things had
to be great and some could ship functional. The signing flow and builder had to be great. Settings
could ship good and get polished later. You can always improve a settings page; a bad signing
experience costs you customers.

**03 · Prototype before committing.** *(see Validation, next.)*

**04 · Handoff is part of the work.** Component documentation, usage guidelines, and design-to-dev
notes weren't extras at the end — they were part of every deliverable. The system had to keep working
without me in the room.

---

### 5 · VALIDATION — *the process beat — PULL THIS OUT*
**Section eyebrow:** Validation
**Section title:** Prototyping caught what specs wouldn't.

> This is your UX receipt — real usability findings that changed the product. Currently buried inside
> "prototype before committing." Give it its own beat.

I put key flows in front of real users before anything went to engineering. Even light testing caught
real problems: the **signature pad was too small on most phones**, and the **kiosk reset was too slow
for busy front desks.** Both were easy to fix in Figma. Neither would have been easy — or cheap — to
fix in production. Testing early is how a small team ships a product this broad without expensive
rework.

> 🖼️ **PLACEHOLDER — Before/after from testing.** The too-small signature pad next to the fixed
> full-screen version. Proof that testing changed the design.

---

### 6 · OUTCOME — *already strong, keep the scale numbers*
> The hero scale strip carries the outcome (millions signed, thousands of businesses, 4 surfaces).
> Optionally restate one here as a closing beat, honestly sourced ("as stated on docs.ink").

---

### 7 · REFLECTION — *seniority*
**Section eyebrow:** Reflection
**Section title:** What I took from this one.

Starting from scratch sounds freeing, and it is — no legacy to fight. But there's also no foundation:
every early choice becomes something the next thing builds on, so you feel the weight of getting it
right while you're still figuring out what right looks like. Designing for small-business owners
shifted how I think about simplicity — these aren't people who read release notes; they're gym owners
and tour guides fitting a tool into a busy day. And the contract format taught me that documentation
and handoff aren't end-of-engagement chores — you do them the whole way through, because the moment
you stop, someone else has to pick it up. DOCS.ink is where I stopped treating that as overhead and
started treating it as part of the work.

---

### NEXT → Claims

---

## Confirm / add (honest gaps)
- Replace the four surface placeholders with real, anonymized screenshots — highest-value action for
  this study.
- Section 5: any other usability finding worth naming.
