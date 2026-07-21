import Image from 'next/image'
import Link from 'next/link'
import '@/assets/css/pages/claims.css'

export const metadata = {
  title: 'Claims Payment & Reconciliation — Nabin Ghimire',
  description:
    'From paper checks to digital payments. Designing a healthcare claims reconciliation system integrated with Zelis. A case study by Nabin Ghimire.',
}

export default function ClaimsPage() {
  return (
    <>
      <div className="container">
        <Link href="/#work" className="back-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
          </svg>
          All work
        </Link>
      </div>

      {/* CASE HERO */}
      <section className="case-hero">
        <div className="container">
          <p className="case-eyebrow">
            <span>Case study</span>
            <span className="dot" />
            <span>Healthcare enterprise</span>
            <span className="dot" />
            <span>Workflow design</span>
          </p>

          <h1 className="case-title">
            From paper checks to <em>digital payments</em>.
          </h1>

          <p className="case-subtitle">
            Designing a claims payment and reconciliation system for an enterprise healthcare
            platform — batch processing, real-time status tracking, and full audit trails
            integrated with Zelis for ACH and check disbursement.
          </p>

          <div className="case-visual case-visual--image" role="img" aria-label="From paper checks to digital claims payments — healthcare workflow">
            <div className="case-visual-bg" />
            <Image
              src="/images/claims/thumb-claims.png"
              alt="From paper checks to digital claims payments"
              fill
              className="case-visual-img"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1120px"
            />
          </div>

          <div className="meta-strip">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Senior Product Designer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Integration</span>
              <span className="meta-value">Zelis (ACH + Check)</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">2024</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Platform</span>
              <span className="meta-value">Web · Enterprise</span>
            </div>
          </div>

          <div className="nda-notice">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>
              This case study is published under an active NDA. The client organization, specific
              payment volumes, and internal compliance details have been generalized. Screens shown
              are abstract representations. Happy to walk through detail in an interview.
            </span>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="section">
        <div className="container">
          <div className="tldr">
            <div className="tldr-item">
              <h3>Challenge</h3>
              <p>A manual, paper-based claims payment workflow with no real-time visibility, limited audit trails, and growing compliance risk.</p>
            </div>
            <div className="tldr-item">
              <h3>My role</h3>
              <p>Senior Product Designer. Led design end-to-end — workflow mapping, batch processing UI, status tracking, and the Zelis integration surface — alongside engineering.</p>
            </div>
            <div className="tldr-item">
              <h3>Outcome</h3>
              <p>A digital payment workflow with batch processing, real-time status, and complete audit trails — built for the people who answer to auditors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Context</p>
          <h2 className="section-title">The last mile of the claims process.</h2>
          <div className="prose">
            <p>In healthcare claims, the part most people think about is the <strong>adjudication</strong> — the decision about whether a claim is approved. But adjudication is just a ruling on paper. The money still has to move.</p>
            <p>That&apos;s what this module does. It sits at the end of the claims pipeline and handles the <strong>disbursement</strong> — generating payments, getting them approved, sending them to providers, tracking whether they landed, and reconciling the books. When it works, nobody notices. When it breaks, providers don&apos;t get paid and finance teams spend days fixing it manually.</p>
            <div className="pull-quote">
              &ldquo;Adjudication is the ruling. Disbursement is the money. The money is where the regulators look.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Research</p>
          <h2 className="section-title">Before a payment could be redesigned, it had to be re-drawn.</h2>
          <div className="prose">
            <p>I spent the first weeks mapping what the workflow <strong>actually</strong> looked like — not what the docs said, but what claims managers and finance staff were really doing day to day. Then I re-drew it, step by step, and used that map as the contract for every design decision after.</p>
            {/* TODO(nabin): Confirm methods — interviews with claims managers + finance, screen-sharing sessions, paper process mapping. */}
            <p>That mapping surfaced four failure modes the org had been absorbing as &ldquo;just how it works&rdquo;:</p>
            <ul>
              <li><strong>Paper processing.</strong> Claims managers generated checks manually, one at a time. No batch processing, no scheduling.</li>
              <li><strong>Zero visibility.</strong> Once a payment left the system, it was a black hole. Settlement failures showed up days or weeks later — sometimes from a provider calling to ask where their money was.</li>
              <li><strong>Compliance risk.</strong> Limited audit trails for approvals, no configurable controls for payment thresholds, and no clear way to track combined or reversed payments.</li>
              <li><strong>Operational cost.</strong> Finance teams spent hours per week on manual reconciliation. Duplicate payments and errors sometimes went undetected. Provider relationships strained.</li>
            </ul>
            <p>The brief was to digitize the workflow <strong>and</strong> integrate with a payment partner (Zelis) for ACH transfers and automated check processing. Both, at once.</p>
          </div>
        </div>
      </section>

      {/* SERVICE BLUEPRINT */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">The workflow</p>
          <h2 className="section-title">Re-drawing the pipeline, before and after.</h2>

          <div
            className="workflow-diagram"
            role="img"
            aria-label="Before and after pipeline diagram: paper, mail, and manual match becomes batch, Zelis, and auto-reconcile"
          >
            <div className="workflow-diagram-row workflow-diagram-row--before" aria-hidden="true">
              <span className="workflow-diagram-tag">Before</span>
              <div className="workflow-diagram-steps">
                <span className="workflow-diagram-step">Paper</span>
                <span className="workflow-diagram-arrow" />
                <span className="workflow-diagram-step">Mail</span>
                <span className="workflow-diagram-arrow" />
                <span className="workflow-diagram-step">Manual match</span>
              </div>
            </div>
            <div className="workflow-diagram-row workflow-diagram-row--after" aria-hidden="true">
              <span className="workflow-diagram-tag">After</span>
              <div className="workflow-diagram-steps">
                <span className="workflow-diagram-step">Batch</span>
                <span className="workflow-diagram-arrow" />
                <span className="workflow-diagram-step">Zelis</span>
                <span className="workflow-diagram-arrow" />
                <span className="workflow-diagram-step">Auto-reconcile</span>
              </div>
            </div>
          </div>
          <span className="workflow-diagram-caption">Before/after pipeline — paper-and-mail vs. batch-and-Zelis.</span>

          <div className="workflow-compare">
            <div className="workflow-panel before">
              <span className="workflow-panel-label">Before</span>
              <h4>Paper-based, serial, invisible.</h4>
              <ol>
                <li>Manager pulls approved claims list from system</li>
                <li>Generates a physical check for each one, individually</li>
                <li>Checks mailed out, logged offline</li>
                <li>Weeks later, bank statements arrive</li>
                <li>Finance team manually matches statements to claims</li>
                <li>Discrepancies investigated by hand</li>
              </ol>
            </div>
            <div className="workflow-panel after">
              <span className="workflow-panel-label">After</span>
              <h4>Digital, batched, trackable.</h4>
              <ol>
                <li>Manager selects approved claims into a batch</li>
                <li>System generates payment instructions for Zelis</li>
                <li>Configurable approval thresholds trigger the right sign-offs</li>
                <li>Zelis dispatches via ACH or check per provider preference</li>
                <li>Real-time status returned to the platform</li>
                <li>Reconciliation auto-matches; exceptions surface for review</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* KEY DECISIONS */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Approach</p>
          <h2 className="section-title">Three decisions that shaped the design.</h2>
          <div className="decisions">
            <div className="decision">
              <div className="decision-num">01</div>
              <div>
                <h3>Make status the spine of the interface.</h3>
                <p>In a paper workflow, status is a feeling — &ldquo;I think that went out last week.&rdquo; In a digital workflow, status should be a fact. I made <strong>payment status the primary organizing element</strong> of every screen.</p>
                <p>Every payment carries its current state visibly — <em>Pending approval · Approved · Dispatched · Settled · Reconciled · Failed</em> — with timestamps and the last actor. Users never have to guess where a payment is in the pipeline. Auditors never have to reconstruct a sequence.</p>
                <div className="decision-visual" aria-hidden="true">
                  <div className="status-flow">
                    <span className="status-flow-step">Pending approval</span>
                    <span className="status-flow-arrow" />
                    <span className="status-flow-step">Approved</span>
                    <span className="status-flow-arrow" />
                    <span className="status-flow-step">Dispatched</span>
                    <span className="status-flow-arrow" />
                    <span className="status-flow-step">Settled</span>
                    <span className="status-flow-arrow" />
                    <span className="status-flow-step">Reconciled</span>
                    <span className="status-flow-arrow" />
                    <span className="status-flow-step status-flow-step--fail">Failed</span>
                  </div>
                </div>
                <span className="decision-visual-caption">Status-state lifecycle — every payment carries one of these states at all times.</span>
              </div>
            </div>
            <div className="decision">
              <div className="decision-num">02</div>
              <div>
                <h3>Batch first, exceptions second.</h3>
                <p>Most payments are routine. A small percentage are exceptions — combined payments, reversals, flagged compliance items, provider preference changes. The old workflow treated every payment as a one-off, which meant routine payments drowned in the same friction as exceptions.</p>
                <p>The new design prioritizes <strong>batch processing as the default path</strong>, with exception handling as a dedicated, deliberate flow. Most of a manager&apos;s day is now fast. The minority of payments that genuinely need attention get it — with the right controls and audit trail.</p>
                <div className="decision-visual" aria-hidden="true">
                  <div className="batch-exception-mock">
                    <div className="batch-exception-col">
                      <span className="batch-exception-col-label">Batch — default path</span>
                      <div className="batch-exception-bar" style={{ width: '92%' }} />
                      <div className="batch-exception-bar" style={{ width: '78%' }} />
                      <div className="batch-exception-bar" style={{ width: '85%' }} />
                    </div>
                    <div className="batch-exception-col batch-exception-col--exception">
                      <span className="batch-exception-col-label">Exception — deliberate flow</span>
                      <div className="batch-exception-bar" style={{ width: '60%' }} />
                      <div className="batch-exception-bar" style={{ width: '45%' }} />
                    </div>
                  </div>
                </div>
                <span className="decision-visual-caption">Batch processing, the fast default path, next to the dedicated exception-handling flow.</span>
              </div>
            </div>
            <div className="decision">
              <div className="decision-num">03</div>
              <div>
                <h3>Audit trail by construction, not by report.</h3>
                <p>The easiest way to ship an audit trail is to build a report generator. That works for auditors, but it doesn&apos;t help the operator. Worse, it means audit data lives in a separate place from the workflow — <strong>truth split across two systems</strong>.</p>
                <p>I pushed for audit trails that are part of the workflow itself: every action logged in context, every decision attributed, every override explained. When an auditor asks <em>&ldquo;who approved this, when, and why?&rdquo;</em>, the answer lives on the same screen as the payment.</p>
                <div className="decision-visual" aria-hidden="true">
                  <div className="audit-trail-mock">
                    <div className="audit-trail-row">
                      <span className="audit-trail-time">09:14</span>
                      <span className="audit-trail-detail">Payment approved — threshold sign-off logged</span>
                    </div>
                    <div className="audit-trail-row">
                      <span className="audit-trail-time">09:16</span>
                      <span className="audit-trail-detail">Dispatched via Zelis — ACH</span>
                    </div>
                    <div className="audit-trail-row">
                      <span className="audit-trail-time">11:02</span>
                      <span className="audit-trail-detail">Override — amount adjusted, reason logged</span>
                    </div>
                  </div>
                </div>
                <span className="decision-visual-caption">Audit trail in context — approval chain and override reasons live on the payment itself.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section">
        <div className="container">
          <p className="section-eyebrow">Outcome</p>
          <h2 className="section-title">What changed, qualitatively.</h2>
          <div className="outcomes-grid">
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h4>Payment time collapsed.</h4>
              <p>What used to take days of manual processing now runs in minutes of batch configuration. Finance teams stopped being a bottleneck and started being a control point.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>Audit defensibility by default.</h4>
              <p>Every payment carries its full history in context. Approval chains, overrides, and exceptions are discoverable on the payment itself — not pieced together from logs.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 12h20M12 2v20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
                </svg>
              </div>
              <h4>Provider trust restored.</h4>
              <p>Real-time status replaced &ldquo;call the insurer to find out.&rdquo; Settlement visibility cut down on the support calls that were straining provider relationships.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h4>Errors became visible, early.</h4>
              <p>Reconciliation that used to catch problems weeks later now surfaces exceptions within hours. Duplicate and failed payments are investigated before they turn into provider complaints.</p>
            </div>
          </div>
          {/* TODO(nabin): If you can defend any figure — reconciliation time, manual-hours reduced, exception-catch speed — even directional, add one here. This study's outcomes are strong but entirely qualitative; one number lands hard in an enterprise context. */}
        </div>
      </section>

      {/* REFLECTION */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Reflection</p>
          <h2 className="section-title">Designing in a regulated domain.</h2>
          <div className="prose">
            <p>The biggest lesson from this project: in regulated workflows, <strong>the user isn&apos;t just the operator — it&apos;s also the auditor, the regulator, and the provider on the other end of the payment.</strong> Every screen has to serve all of them at once.</p>
            <p>That changes the design brief. You can&apos;t just optimize for operator speed; you also need a trace someone else can read, months later, to reconstruct what happened and why. In the best case, those two goals reinforce each other — the operator does the right thing by default, and the right thing happens to be auditable. That&apos;s what this module tries to do.</p>
            <p>Batch reconciliation, status tracking, and audit-by-construction are the same operational patterns behind order and inventory management in any enterprise system — the domain changes, the design problem doesn&apos;t.</p>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="next-case">
        <div className="container">
          <Link href="/findcare" className="next-case-card">
            <p className="next-case-label">Next case study</p>
            <h2 className="next-case-title">Making healthcare search actually work.</h2>
            <p className="next-case-desc">
              Redesigned provider search, smart filters, and price estimation for members who
              don&apos;t speak in CPT codes — they speak in &ldquo;my knee hurts.&rdquo;
            </p>
            <span className="next-case-cta">
              Find Care case study
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}
