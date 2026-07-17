# Viveka Design System — Content Strategy & Copy

## Strategy (read first)

**Role in portfolio:** Your anchor. First card, most complete study. It's the piece that proves
your positioning word — *systems*.

**Who's reading & what they check:** Design-system leads and design managers. They want proof you
can (1) do the *research* to justify a system, not just build pretty components, (2) architect
across many surfaces, and (3) get it *adopted*. Anyone can show a Figma library; few can show the
evidence trail behind one.

**The one thing this study proves:** You treat a design system as a *research-and-adoption*
problem, not a component-drawing problem.

**Narrative arc:** Six products reinventing the same button → I audited the chaos into evidence →
I let the evidence design the system → it shipped, adopted, accessible, and survives me.

**The UX process, made visible (this is the spine):**
`Discovery (screenshot audit) → Synthesis (the inventory) → Define (4 problems) → Decide (5 moves)
→ Build with engineering → Validate (external architecture review) → Deliver (docs + adoption) →
Iterate (recurring audit)`
Every section below is labeled with the process step it represents, so a skimmer sees a *process*,
not a portfolio brag.

---

## Layout & Copy

### HERO
**Eyebrow:** Case study · Design system · Healthcare
**Headline:** Building an enterprise design system from *legacy chaos*.
**Subhead:**
> Six live product surfaces — including a decade-old legacy app — each reinventing the same button,
> table, and tab. I turned that fragmentation into evidence, then into one token-driven system:
> audited by screenshot, planned atom by atom in Figma, built in React with accessibility as a
> default, not a pass.

**Meta:** Role — Primary Designer (audit & architecture) · Team — 2–3 designers, 5+ engineers ·
Timeline — 2023–Present · Platform — Web · Responsive

**NDA note:** *Published under an active NDA. Component details, client names, and internal metrics
are generalized. Screens shown are recreated abstractions, not production UI. Happy to walk through
the detail in an interview.*

> 🖼️ **PLACEHOLDER — Hero (16:9).** The token architecture as a system: primitive → semantic →
> component layers with a few components rendered from them. This is the pass-1 image — it must
> show the *system*, not decoration. (You already have `design-system.png` wired; upgrade caption
> to name the layers.)

---

### TL;DR — *(scannability)*
- **Challenge.** Six products, different teams, different stacks, each hand-building the same core
  components — one product had 200+ raw buttons and zero shared component.
- **My role.** Led the cross-surface audit, planned every primitive and pattern atomically in
  Figma, and partnered with a senior frontend engineer to build it in React. (I'm a product
  designer, not an engineer — I architected the system; the codebase was a partnership.)
- **Outcome.** One adopted, token-driven library. Six button implementations → one. 40+ hand-rolled
  tables → one column model. Accessibility built in, not bolted on.

---

### 1 · CONTEXT — *what & who*
**Section title:** What Viveka looked like before the system.

Viveka Health builds enterprise healthcare platforms — eligibility verification, claims workflows,
provider search, care coordination — used by US healthcare organizations to manage benefits and
member services.

Those products didn't grow from one codebase. They grew from six — built by different teams, at
different times, on different stacks, including a decade-old AngularJS app still in production while
its React replacements were built alongside it. Every team had shipped real value. **Every team had
also, independently, built its own button, table, tab bar, and modal.**

---

### 2 · DISCOVERY & RESEARCH — *the process beat — lead with this*
**Section eyebrow:** Research
**Section title:** The audit started with screenshots, not opinions.

> This is the section that proves you do UX, not decoration. Frame the audit explicitly as a
> *research method*.

Before proposing anything, I needed to know exactly what existed — not what anyone *remembered*
existing. So I ran a comparative audit: surface by surface across all six live products,
screenshotting every button, table, tab, and modal in production, including the legacy app running
in parallel with its replacements.

Laid side by side, the fragmentation stopped being a hunch and became an inventory. One product had
**over 200 raw button elements across 60 files, with zero shared component.** Another had installed
a full UI kit and then quietly hand-rolled a second set anyway — so its button existed **six
different ways.** The largest product ran three styling systems at once, and its brand red lived as
two different hex values for years because of one mistyped character nobody caught. Tables had been
hand-built independently more than forty times, across four frameworks.

That inventory *was* the brief. It made the case to engineering leadership without me having to
argue — the wall of inconsistency argued for itself.

> 🖼️ **PLACEHOLDER — Audit board (before/after, wide).** Left: the wall of inconsistent buttons/tabs
> pulled from the audit. Right: the single systematized component. Your highest-converting visual.
> Caption: "The fragmentation stopped being a hunch and became an inventory."

**Stat strip (keep — this is your evidence):**
`6 surfaces audited` · `200+ raw buttons, 0 shared component` · `40+ hand-rolled tables` ·
`3 styling systems in one product`

---

### 3 · DEFINE — *synthesis*
**Section eyebrow:** The problem
**Section title:** Four compounding issues, not one.

Calling it "no design system" would've been wrong. Components existed — they just existed
everywhere, in slightly different shapes. Synthesis surfaced four problems doing the real damage:

- **Fragmentation.** The same patterns hand-built independently across six surfaces, sometimes more
  than once inside one product. One team's tabs shared no code — and often no accessibility
  semantics — with another's.
- **Accessibility debt.** The legacy app had barely a hundred ARIA attributes across its entire
  surface. Newer products failed AA contrast, had dialogs where one Escape closed a whole stack,
  clickable cards with no keyboard support.
- **Velocity tax.** The same table cells and tab languages reinvented from scratch in every
  framework. Every feature re-decided basics that had been decided five times already, badly.
- **Handoff friction.** With three coexisting styling systems in one product, the same component
  name meant three different things depending on which file you opened first.

> **Pull quote:** "Design wasn't the bottleneck. Re-deciding was."

---

### 4 · DECISIONS — *ideation → rationale*
**Section eyebrow:** Approach
**Section title:** Five decisions that shaped the system.

**01 · Start with tokens, not components.** The fastest way to fake a system is to build a dozen
components and call it done — it *looks* finished; nothing underneath changed. I argued for the
layer beneath: one source of truth for color, type, spacing, radii, elevation, generated into code
rather than hand-maintained in three places. One generated token file makes drift structurally
impossible, not just discouraged.

**02 · Plan in Figma, build with engineering.** I designed every primitive and pattern atomically
in Figma first — the same layered hierarchy the system now enforces in code. Components arrived at
engineering already validated as compositions of smaller parts, not one-off screens to
reverse-engineer later. Standing up the codebase — build pipeline, token compiler, linting that
enforces the architecture — was a partnership with a senior frontend engineer.

**03 · Let evidence pick the variants, not opinion.** Tabs had been reinvented across the platform,
most with accessibility stripped out. Instead of inventing a "correct" set, I read every real
implementation and asked what people had converged on without coordinating. The answer was exactly
two: underline and segmented-pill. **That became the entire Tabs API — not because I decided two was
right, but because two is what six independent teams had already decided, without knowing it.**

**04 · Accessibility as a default, not a pass.** Every component ships with keyboard support, focus
management, ARIA labels, and contrast-checked tokens baked in at the component level. The system
supports compact and comfortable density — but accessibility isn't a mode: when density and contrast
conflict, accessibility wins.

**05 · Documentation and adoption over completeness.** Most DS docs say what a component looks like
and what props it takes. Mine answer a different question: **when should you use this, and when
should you not?** Every component carries a maturity signal — stable, beta, experimental, deprecated
— and every systemic decision is logged with its context, so the same argument doesn't recur next
quarter.

> 🖼️ **PLACEHOLDER — Token table (4:3).** primitive → semantic → component, with light/dark modes.
> Goes beside decision 01.
> 🖼️ **PLACEHOLDER — Variant matrix (4:3).** The two Tabs variants side by side. Goes beside
> decision 03. Caption: "Two is what six teams had already decided."
> 🖼️ **PLACEHOLDER — Accessibility evidence (4:3).** Focus order, focus rings, contrast-token pairs,
> density toggle. Goes beside decision 04 — proves the claim.

---

### 5 · VALIDATION — *the process beat recruiters rarely see — ADD THIS*
**Section eyebrow:** Validation
**Section title:** How I knew the system held up.

> You currently fold this into decision 04. Pull it out — an external review is validation, and
> naming it as such is a seniority signal.

I treated the system as something to be tested, not trusted. When an outside architecture review
came back with real findings — a legacy stylesheet the docs claimed was removed but was still
shipping in every build, a single Escape key collapsing a whole stack of modals — we handled it like
our own internal audits: fix it, log the decision, move on. Getting reviewed by someone else was
part of the plan, not a failure of it. Adoption was the other test: I stayed close to the teams
integrating the system, paired during implementation, and fixed friction fast — because a system
nobody reaches for isn't a system, it's a Figma file.

---

### 6 · OUTCOME — *with structural numbers, not just adjectives*
**Section eyebrow:** Outcome
**Section title:** What changed.

**Structural proof:**
- **Six button implementations → one.** The product where a button existed six ways now composes a
  single shared component.
- **40+ hand-rolled tables → one column model.** A 500-line hand-rolled table collapses into a
  column definition and a handful of props.
- **Three coexisting styling systems → one.** Reviews stopped being consistency debates.
- **Two brand-red hex values → one token.** Drift that survived years is now impossible.

**And qualitatively:** shorter path from spec to ship, WCAG 2.2 AA by default, a shared vocabulary
across design/eng/product, and a system that keeps working whether I'm in the room or not.

> 💬 **PLACEHOLDER — Pull quote (social proof).** One line from the senior frontend engineer who
> built the system with you — on the architecture holding up or handoff speed. Single highest-ROI
> addition to the whole portfolio. Leave empty rather than fabricate.

---

### 7 · REFLECTION — *seniority*
**Section title:** What I'd do differently.

If I started again, I'd invest in **adoption infrastructure earlier** — office hours, a channel for
system questions, regular component critiques. A system earns trust by being a good teammate, not
just a good library. I'd also push harder on **engineering partnership from week one** — the best
parts came from tight collaboration; the slowest came when design ran ahead and engineering had to
catch up. Design systems aren't a design project. They're a team practice.

---

### NEXT → DOCS.ink

---

## Confirm / add (honest gaps)
- The engineer pull-quote (section 6) — get it if you can; skip if not.
- Any defensible adoption figure (surfaces migrated, components in the library) would strengthen
  section 6 without inventing a metric.
