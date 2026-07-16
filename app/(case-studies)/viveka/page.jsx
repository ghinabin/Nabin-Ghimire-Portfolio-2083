import Image from 'next/image'
import Link from 'next/link'
import '@/assets/css/pages/viveka.css'

export const metadata = {
  title: 'Viveka Design System — Nabin Ghimire',
  description:
    'Building an enterprise design system for a US healthcare platform. A case study by Nabin Ghimire.',
}

export default function VivekaPage() {
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
            <span>Design system</span>
            <span className="dot" />
            <span>Healthcare</span>
          </p>

          <h1 className="case-title">
            Building an enterprise design system from <em>legacy chaos</em>.
          </h1>

          <p className="case-subtitle">
            How Viveka Health moved from fragmented UI patterns to a unified design system
            powering multiple healthcare products — built with accessibility and developer
            handoff in the core from day one.
          </p>

          <div className="case-visual case-visual--image" role="img" aria-label="Viveka Design System — component library overview in Figma">
            <div className="case-visual-bg" />
            <Image
              src="/images/design-system.png"
              alt="Viveka Design System component library showing tokens, components, and documentation in Figma"
              fill
              className="case-visual-img"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1120px"
            />
          </div>

          <div className="meta-strip">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Primary Designer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Team</span>
              <span className="meta-value">2–3 designers, 5+ engineers</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">2023 — Present</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Platform</span>
              <span className="meta-value">Web · Responsive</span>
            </div>
          </div>

          <div className="nda-notice">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>
              This case study is published under an active NDA. Specific component details,
              client names, and internal metrics have been generalized or omitted. Screens shown
              are abstract representations, not production UI. Happy to walk through the detailed
              work in an interview.
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
              <p>Multiple healthcare products shipping inconsistent UI, duplicated components, and uneven accessibility — slowing every release.</p>
            </div>
            <div className="tldr-item">
              <h3>My role</h3>
              <p>Primary designer on the system. Led tokens, components, documentation, and adoption — with 1–2 designers collaborating on patterns.</p>
            </div>
            <div className="tldr-item">
              <h3>Outcome</h3>
              <p>A shared component library, accessibility built in by default, and a measurable drop in how long it takes to ship a new feature.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Context</p>
          <h2 className="section-title">What Viveka looked like before the system.</h2>
          <div className="prose">
            <p>
              Viveka Health builds enterprise healthcare platforms — eligibility verification,
              claims workflows, provider search, care coordination — used by US healthcare
              organizations to manage benefits and member services.
            </p>
            <p>
              When I joined, the products had grown fast. Multiple teams shipping features in
              parallel had produced real business value and real design debt:{' '}
              <strong>
                five variations of the same button, three different date pickers, inconsistent
                form patterns, and accessibility gaps that surfaced during audits.
              </strong>{' '}
              Every new feature was an argument about which version to use.
            </p>
            <p>
              Design wasn&apos;t the bottleneck. <em>Re-deciding</em> was the bottleneck.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">The problem</p>
          <h2 className="section-title">Four compounding issues, not one.</h2>
          <div className="prose">
            <p>
              Calling it &ldquo;no design system&rdquo; would&apos;ve been wrong. Components
              existed. They just existed everywhere, in slightly different shapes. The real
              problems were deeper:
            </p>
            <ul>
              <li><strong>Fragmentation.</strong> Similar patterns solved differently across products, making cross-product work painful for both designers and engineers.</li>
              <li><strong>Accessibility debt.</strong> Components hadn&apos;t been built with WCAG 2.1 AA in mind. Screen reader support, focus management, and color contrast were inconsistent.</li>
              <li><strong>Velocity tax.</strong> Every new feature meant re-deciding basics — which button, which input, which modal pattern. Design reviews turned into consistency debates.</li>
              <li><strong>Handoff friction.</strong> With no shared language between design and engineering, the same component got implemented two or three different ways in code.</li>
            </ul>
            <div className="pull-quote">
              &ldquo;Design wasn&apos;t the bottleneck. Re-deciding was.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* DECISIONS */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Approach</p>
          <h2 className="section-title">Four decisions that shaped the system.</h2>

          <div className="decisions">
            <div className="decision">
              <div className="decision-num">01</div>
              <div>
                <h3>Start with tokens, not components.</h3>
                <p>The fastest way to fake a design system is to build a dozen components and call it done. The system <strong>looks</strong> finished; nothing underneath actually changed.</p>
                <p>I argued for starting with the layer underneath: <strong>tokens for color, typography, spacing, radii, and elevation</strong>. Tokens are unglamorous — you ship them and no screen changes. But once they&apos;re in place, every component you build after is consistent by construction, and you can theme the whole system by editing a single file.</p>
                <p>The bet paid off later, when dark mode and accessibility contrast adjustments became single-file changes instead of audits across hundreds of screens.</p>
              </div>
            </div>

            <div className="decision">
              <div className="decision-num">02</div>
              <div>
                <h3>Accessibility as a default, not a pass.</h3>
                <p>The easy path is to ship components first and audit them for accessibility later. That path produces patches. The hard path is to make accessibility a condition of shipping.</p>
                <p>Every component in the system has <strong>keyboard support, focus management, ARIA labels, and contrast-checked tokens baked in at the component level</strong>. Engineers can&apos;t accidentally ship an inaccessible button because the inaccessible button doesn&apos;t exist.</p>
                <p>Healthcare users include people on screen readers, people with motor disabilities, and people reading on their phone in bad lighting. The system respects all of them by default.</p>
              </div>
            </div>

            <div className="decision">
              <div className="decision-num">03</div>
              <div>
                <h3>Documentation that answers &ldquo;why,&rdquo; not just &ldquo;what.&rdquo;</h3>
                <p>Most design system docs tell you what a component looks like and what props it takes. Useful, but incomplete. The documentation I pushed for answers a different question: <strong>when should you use this component, and when should you not?</strong></p>
                <p>Every component page includes usage rules, anti-patterns, and the reasoning behind the decisions. A new designer or engineer doesn&apos;t just learn what&apos;s in the system — they learn how to think about it. This is how a system outlives the person who built it.</p>
              </div>
            </div>

            <div className="decision">
              <div className="decision-num">04</div>
              <div>
                <h3>Adoption over completeness.</h3>
                <p>A design system that isn&apos;t used isn&apos;t a design system — it&apos;s a Figma file. Completeness is less important than adoption. I&apos;d rather have <strong>15 well-adopted components than 50 that nobody uses.</strong></p>
                <p>I prioritized what teams actually reached for every day: buttons, inputs, modals, tables, form patterns. I deferred exotic components until someone asked for them. And I stayed close to the teams adopting the system — pairing during implementation, answering questions, fixing friction fast.</p>
                <p>Adoption isn&apos;t a launch event. It&apos;s a practice.</p>
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4>Shorter path from spec to ship.</h4>
              <p>With shared components and patterns, features that used to require a full design pass can now be composed from existing pieces — and engineering handoff is noticeably faster.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" />
                </svg>
              </div>
              <h4>Accessibility by default.</h4>
              <p>Components ship with WCAG 2.1 AA compliance built in. Teams don&apos;t need to become accessibility experts — they just need to use the system correctly.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <h4>A shared vocabulary.</h4>
              <p>Design, engineering, and product now use the same names for the same things. Reviews stopped being consistency debates and started being design debates.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2L2 7v10l10 5 10-5V7z" /><polyline points="2 7 12 12 22 7" /><line x1="12" y1="22" x2="12" y2="12" />
                </svg>
              </div>
              <h4>A system that can outlive me.</h4>
              <p>With tokens, documentation, and adoption practices in place, the system keeps working whether I&apos;m in the room or not. That&apos;s the real deliverable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Reflection</p>
          <h2 className="section-title">What I&apos;d do differently.</h2>
          <div className="prose">
            <p>If I started again, I&apos;d invest more in <strong>adoption infrastructure earlier</strong> — office hours, a Slack channel for system questions, regular component critiques. The system gains trust by being a good teammate, not just a good library.</p>
            <p>I&apos;d also push harder on <strong>engineering partnership from week one</strong>. The best parts of the system came from tight collaboration with engineers — and the slowest parts came from moments when design ran ahead and engineering had to catch up.</p>
            <p>Design systems aren&apos;t a design project. They&apos;re a team practice. The sooner you treat them that way, the better they get.</p>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="next-case">
        <div className="container">
          <Link href="/docsink" className="next-case-card">
            <p className="next-case-label">Next case study</p>
            <h2 className="next-case-title">A digital waiver platform, zero to scale.</h2>
            <p className="next-case-desc">
              Led end-to-end design for DOCS.ink — waiver builder, multi-channel distribution,
              e-signatures — shipped and now used by businesses across the US.
            </p>
            <span className="next-case-cta">
              DOCS.ink case study
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
