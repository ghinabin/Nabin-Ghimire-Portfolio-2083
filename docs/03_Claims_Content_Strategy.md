# Claims Payment & Reconciliation — Content Strategy & Copy

## Strategy (read first)

**Role in portfolio:** Your **enterprise / ERP-transferable** piece — treat it as such given where
you're aiming. Batch processing, status-as-the-spine, audit-trail-by-construction, and third-party
(Zelis) integration are the exact patterns behind manufacturing ERP, fintech ops, and any
regulated operational system. This is the study a non-healthcare enterprise recruiter should read.

**Who's reading & what they check:** Enterprise/B2B design leads. They want proof you can design
*dense, stateful, high-stakes operational workflows* — the unglamorous screens people stare at for
eight hours and that regulators inspect. Consumer-portfolio designers can't fake this.

**The one thing this study proves:** You can take a broken, invisible, compliance-risky manual
process and redesign it into a trackable, auditable system — designing for the operator *and* the
auditor at once.

**Narrative arc:** Money moved on paper, invisibly, with no audit trail → I re-drew the real
workflow before redesigning it → three decisions (status as spine, batch-first, audit by
construction) → a digital pipeline finance teams and auditors both trust.

**The UX process, made visible (this is the spine):**
`Discovery (interviews + workflow mapping) → Define (4 failure modes) → Service blueprint
(before/after) → Decide (3 moves) → Deliver (Zelis integration surface) → Outcome → Reflection`
Your "re-drew the workflow before redesigning it" line is a gift — it's service-design process.
Make it a labeled beat.

**Enterprise bridge (add one line, section 1 or 7):**
> "Batch reconciliation, status tracking, and audit-by-construction are the same operational
> patterns behind order and inventory management in any enterprise system — the domain changes,
> the design problem doesn't."

---

## Layout & Copy

### HERO
**Eyebrow:** Case study · Healthcare enterprise · Workflow design
**Headline:** From paper checks to *digital payments*.
**Subhead:**
> A claims payment and reconciliation system for an enterprise healthcare platform — batch
> processing, real-time status tracking, and full audit trails, integrated with Zelis for ACH and
> check disbursement. The last mile of the claims pipeline, where the money actually moves.

**Meta:** Role — Senior Product Designer · Integration — Zelis (ACH + Check) · Timeline — 2024 ·
Platform — Web · Enterprise

**NDA note:** *Published under an active NDA. Client organization, payment volumes, and compliance
details are generalized. Screens shown are recreated abstractions. Happy to walk through detail in
an interview.*

> 🖼️ **PLACEHOLDER — Hero (16:9).** A batch-processing dashboard or status-tracking table (recreated,
> dummy data). Dense, operational, real — this is craft evidence for enterprise work.

---

### TL;DR
- **Challenge.** A manual, paper-based claims payment workflow with no real-time visibility, thin
  audit trails, and growing compliance risk.
- **My role.** Senior Product Designer. Led design end-to-end — workflow mapping, batch processing
  UI, status tracking, and the Zelis integration surface — alongside engineering.
- **Outcome.** A digital payment workflow with batch processing, real-time status, and complete
  audit trails — built for the people who answer to auditors.

---

### 1 · CONTEXT — *what & why it matters*
**Section eyebrow:** Context
**Section title:** The last mile of the claims process.

In healthcare claims, the part people think about is **adjudication** — the decision about whether a
claim is approved. But adjudication is a ruling on paper. The money still has to move.

That's what this module does. It sits at the end of the pipeline and handles **disbursement** —
generating payments, getting them approved, sending them to providers, tracking whether they landed,
and reconciling the books. When it works, nobody notices. When it breaks, providers don't get paid
and finance teams spend days fixing it by hand.

> **Pull quote:** "Adjudication is the ruling. Disbursement is the money. The money is where the
> regulators look."

---

### 2 · DISCOVERY & RESEARCH — *the process beat — surface the mapping*
**Section eyebrow:** Research
**Section title:** Before a payment could be redesigned, it had to be re-drawn.

> This is your service-design process. Name it. Recruiters read "I mapped the real workflow, not the
> documented one" as senior UX thinking.

I spent the first weeks mapping what the workflow *actually* looked like — not what the docs said,
but what claims managers and finance staff were really doing day to day. [**Confirm methods:
interviews with claims managers + finance, screen-sharing sessions, paper process mapping.**] Then I
re-drew it, step by step, and used that map as the contract for every design decision after.

That mapping surfaced four failure modes the org had been absorbing as "just how it works":

- **Paper processing.** Managers generated checks manually, one at a time. No batching, no
  scheduling.
- **Zero visibility.** Once a payment left the system, it was a black hole — settlement failures
  surfaced days or weeks later, sometimes from a provider calling to ask where their money was.
- **Compliance risk.** Thin audit trails for approvals, no configurable payment-threshold controls,
  no clean way to track combined or reversed payments.
- **Operational cost.** Finance spent hours a week on manual reconciliation; duplicate payments and
  errors sometimes went undetected; provider relationships strained.

The brief was to digitize the workflow **and** integrate with Zelis for ACH and automated checks —
both at once.

---

### 3 · SERVICE BLUEPRINT — *before/after as process artifact*
**Section eyebrow:** The workflow
**Section title:** Re-drawing the pipeline, before and after.

> 🖼️ **PLACEHOLDER — Before/after flow diagram (wide).** THIS is the highest-leverage visual on the
> whole site (it's #3 on your own image checklist). The two text lists below undersell a
> workflow-redesign study. A real flow diagram — paper→mail→manual-match vs.
> batch→Zelis→auto-reconcile — does the work text can't. NDA-safe because it's an abstract diagram.

**Before — paper-based, serial, invisible.**
1. Manager pulls approved claims list
2. Generates a physical check for each, individually
3. Checks mailed, logged offline
4. Weeks later, bank statements arrive
5. Finance manually matches statements to claims
6. Discrepancies investigated by hand

**After — digital, batched, trackable.**
1. Manager selects approved claims into a batch
2. System generates payment instructions for Zelis
3. Configurable approval thresholds trigger the right sign-offs
4. Zelis dispatches via ACH or check per provider preference
5. Real-time status returns to the platform
6. Reconciliation auto-matches; exceptions surface for review

---

### 4 · DECISIONS — *ideation → rationale*
**Section eyebrow:** Approach
**Section title:** Three decisions that shaped the design.

**01 · Make status the spine of the interface.** In a paper workflow, status is a feeling — "I think
that went out last week." In a digital workflow, status should be a fact. I made **payment status the
primary organizing element** of every screen: every payment carries its current state visibly —
*Pending approval · Approved · Dispatched · Settled · Reconciled · Failed* — with timestamps and the
last actor. Users never guess where a payment is. Auditors never reconstruct a sequence.

**02 · Batch first, exceptions second.** Most payments are routine; a minority are exceptions —
combined payments, reversals, flagged compliance items, provider-preference changes. The old workflow
treated every payment as a one-off, so routine payments drowned in the same friction as exceptions.
The new design makes **batch processing the default path**, with exception handling as a dedicated,
deliberate flow. Most of a manager's day is now fast; the payments that genuinely need attention get
it, with the right controls and trail.

**03 · Audit trail by construction, not by report.** The easy way to ship an audit trail is a report
generator — that serves auditors but not operators, and it splits truth across two systems. I pushed
for audit trails that are part of the workflow itself: every action logged in context, every decision
attributed, every override explained. When an auditor asks *"who approved this, when, and why?"*, the
answer lives on the same screen as the payment.

> 🖼️ **PLACEHOLDER — Status-state diagram.** The six-state lifecycle (Pending→…→Reconciled/Failed).
> Beside decision 01.
> 🖼️ **PLACEHOLDER — Batch vs. exception UI (wide).** The fast default path next to the deliberate
> exception flow. Beside decision 02.
> 🖼️ **PLACEHOLDER — Audit trail in context.** A payment detail showing the inline approval chain +
> override reasons. Beside decision 03 — proves "by construction."

---

### 5 · OUTCOME — *retrofit numbers where you can*
**Section eyebrow:** Outcome
**Section title:** What changed.

**Payment time collapsed.** What took days of manual processing now runs in minutes of batch
configuration. Finance stopped being a bottleneck and became a control point.

**Audit defensibility by default.** Every payment carries its full history in context — approval
chains, overrides, exceptions discoverable on the payment itself, not pieced together from logs.

**Provider trust restored.** Real-time status replaced "call the insurer to find out." Settlement
visibility cut the support calls that were straining provider relationships.

**Errors became visible, early.** Reconciliation that used to catch problems weeks later now surfaces
exceptions within hours — duplicate and failed payments investigated before they became complaints.

> *[If you can defend any figure — reconciliation time, manual-hours reduced, exception-catch speed —
> even directional, add one here. This study's outcomes are strong but entirely qualitative; one
> number lands hard in an enterprise context.]*

---

### 6 · REFLECTION — *seniority + the transferable lesson*
**Section eyebrow:** Reflection
**Section title:** Designing in a regulated domain.

The biggest lesson: in regulated workflows, **the user isn't just the operator — it's also the
auditor, the regulator, and the provider on the other end of the payment.** Every screen serves all
of them at once. That changes the brief: you can't only optimize for operator speed; you need a trace
someone else can read, months later, to reconstruct what happened and why. In the best case those
goals reinforce each other — the operator does the right thing by default, and the right thing happens
to be auditable.

> **Add the bridge line here** so enterprise readers connect it: "These are the same operational
> patterns — batch processing, status tracking, audit-by-construction — behind order and inventory
> management in any enterprise system. The domain changes; the design problem doesn't."

---

### NEXT → Find Care

---

## Confirm / add (honest gaps)
- Section 2: name the exact research methods (interviews with which roles, mapping technique).
- Section 3: build the before/after flow diagram — top of your own image checklist.
- Section 5: one defensible number if you have it.
