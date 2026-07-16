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
            How six live product surfaces — including a decade-old legacy application —
            went from independently reinventing the same button, table, and tab pattern,
            to one token-driven design system: audited by screenshot, planned atom by atom
            in Figma, and built in React with accessibility as a default, not a pass.
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
              <p>Six product surfaces — one of them a decade-old legacy application — each independently reinventing the same buttons, tables, tabs, and modals. Some had no design tokens at all; one ran three coexisting styling systems at once.</p>
            </div>
            <div className="tldr-item">
              <h3>My role</h3>
              <p>I led the cross-product audit and planned every primitive and pattern atomically in Figma. I&apos;m a product designer, not an engineer — so building the actual React system was a partnership with a senior frontend developer, with 1–2 designers collaborating on patterns.</p>
            </div>
            <div className="tldr-item">
              <h3>Outcome</h3>
              <p>One token-driven component library adopted across every surface, accessibility built in by default, and a documented, evidence-based system built to outlive any single person on the team.</p>
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
              Those products didn&apos;t grow from one codebase. They grew from six —
              built by different teams, at different times, on different stacks, including
              a decade-old AngularJS application that was still running in production while
              its React replacements were being built alongside it. Every team had shipped
              real business value.{' '}
              <strong>
                Every team had also, independently, built its own version of a button, a table,
                a tab bar, and a modal.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* RESEARCH / AUDIT */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Research</p>
          <h2 className="section-title">The audit started with screenshots, not opinions.</h2>
          <div className="prose">
            <p>
              Before proposing a system, I needed to know exactly what existed — not what
              anyone remembered existing. I went surface by surface across all six live
              products, screenshotting every button, table, tab, and modal I could find in
              production, including the legacy application still running in parallel with
              its modern replacements.
            </p>
            <p>
              Laid out side by side, the fragmentation stopped being a hunch and became a
              spreadsheet. <strong>One product had over 200 raw button elements spread
              across 60 files, with zero shared button component.</strong> Another had
              installed a full off-the-shelf UI kit and then quietly built a second,
              hand-rolled set of components anyway — so its button existed <strong>six
              different ways</strong>. The largest product ran three separate styling
              systems at the same time, and its brand red existed as two different hex
              values for years because of a single mistyped character nobody had caught.
              Tables had been hand-built independently more than forty times, across four
              different frameworks. And one small bug said everything about the platform
              at once: three separate teams had each hardcoded a different guess for the
              exact same shared header height.
            </p>

            <div className="stat-strip">
              <div>
                <span className="stat-value">6</span>
                <span className="stat-label">live product surfaces audited by screenshot</span>
              </div>
              <div>
                <span className="stat-value">200+</span>
                <span className="stat-label">raw buttons in one product, zero shared component</span>
              </div>
              <div>
                <span className="stat-value">40+</span>
                <span className="stat-label">hand-rolled table implementations, no reuse</span>
              </div>
              <div>
                <span className="stat-value">3</span>
                <span className="stat-label">styling systems running at once, same product</span>
              </div>
            </div>

            <p>
              That inventory — screenshots, file counts, hex values, the small absurd
              stuff like a z-index literal twenty digits long — became the brief. It made
              the case for a system to engineering leadership without me needing to argue
              for it. The wall of inconsistency argued for itself.
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
              existed. They just existed everywhere, in slightly different shapes. Once the
              audit was laid out, four problems were doing the real damage:
            </p>
            <ul>
              <li><strong>Fragmentation.</strong> The same handful of patterns — buttons, tables, tabs, modals — had been hand-built independently across six surfaces, sometimes more than once within the same product. One team&apos;s tabs shared no code and often no accessibility semantics with another team&apos;s tabs.</li>
              <li><strong>Accessibility debt.</strong> The legacy application had barely a hundred ARIA attributes across its entire surface. Newer products weren&apos;t much better — contrast ratios that failed AA, dialogs where a single Escape key press closed an entire stack of overlays, clickable cards with no keyboard support at all.</li>
              <li><strong>Velocity tax.</strong> The same handful of table cell types and tab visual languages were being reinvented from scratch in every framework represented on the platform. Every new feature meant re-deciding basics that had already been decided five times over, badly.</li>
              <li><strong>Handoff friction.</strong> With three coexisting styling systems in the platform&apos;s largest product alone, the same component name could mean three different things depending on which file an engineer happened to open first.</li>
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
          <h2 className="section-title">Five decisions that shaped the system.</h2>

          <div className="decisions">
            <div className="decision">
              <div className="decision-num">01</div>
              <div>
                <h3>Start with tokens, not components.</h3>
                <p>The fastest way to fake a design system is to build a dozen components and call it done. The system <strong>looks</strong> finished; nothing underneath actually changed.</p>
                <p>I argued for starting with the layer underneath: <strong>a single source of truth for color, typography, spacing, radii, and elevation</strong>, generated into code rather than hand-maintained in three places at once. The audit had already shown what happens without that discipline — a brand color existing as two different hex values because of one mistyped character, copy-pasted across products for years. One generated token file makes that kind of drift structurally impossible, not just discouraged.</p>
                <p>Tokens are unglamorous — you ship them and no screen visibly changes. But once they&apos;re in place, every component built after is consistent by construction, and the whole system themes from a single file.</p>

                <div className="token-sample" role="img" aria-label="Abstract representation of a design token set — color, ink, and surface swatches">
                  <div className="token-sample-swatches">
                    <span className="token-swatch token-swatch--accent" />
                    <span className="token-swatch token-swatch--ink" />
                    <span className="token-swatch token-swatch--tertiary" />
                    <span className="token-swatch token-swatch--elevated" />
                    <span className="token-swatch token-swatch--surface" />
                  </div>
                  <span className="token-sample-caption">Color · type · spacing tokens</span>
                </div>
              </div>
            </div>

            <div className="decision">
              <div className="decision-num">02</div>
              <div>
                <h3>Plan in Figma, build with engineering.</h3>
                <p>I designed every primitive and pattern atomically in Figma first — the same layered hierarchy the system now enforces in code, just designed before a line of React existed. Working that way meant every component arrived at engineering already validated as a composition of smaller, reusable parts, instead of a one-off screen that needed reverse-engineering into the system later.</p>
                <p>I&apos;m a product designer, not a frontend engineer, so standing up the actual codebase — the build pipeline, the token compiler, the linting rules that enforce the architecture — was a partnership. I worked closely with a senior frontend developer to translate the Figma-side atomic structure into a matching layered system in code, where each layer is only allowed to depend on the one below it.</p>
              </div>
            </div>

            <div className="decision">
              <div className="decision-num">03</div>
              <div>
                <h3>Let evidence pick the variants, not opinion.</h3>
                <p>Tabs had been reinvented independently across the platform — different products, different frameworks, most with their accessibility semantics stripped out. Rather than inventing a &ldquo;correct&rdquo; set of variants, I read every real implementation on the platform and asked what people had actually converged on without ever coordinating. The answer was exactly two visual languages: an underline style and a segmented-pill style. <strong>That became the entire Tabs API — not because I decided two was the right number, but because two is what six independent teams had already decided, without knowing it.</strong></p>
                <p>Tables got the same treatment at a much larger scale — the single most duplicated pattern on the platform. A dozen-plus hand-rolled implementations became one system built on a proven table engine, and a five-hundred-line hand-rolled table could collapse into a column model and a handful of props.</p>
              </div>
            </div>

            <div className="decision">
              <div className="decision-num">04</div>
              <div>
                <h3>Accessibility as a default, not a pass.</h3>
                <p>The easy path is to ship components first and audit them for accessibility later. That path produces patches. The hard path is to make accessibility a condition of shipping.</p>
                <p>Every component in the system has <strong>keyboard support, focus management, ARIA labels, and contrast-checked tokens baked in at the component level</strong>. The system supports both a compact and a comfortable density mode for data-heavy screens, but accessibility isn&apos;t a mode — when a density choice and a contrast requirement conflict, accessibility wins, every time.</p>
                <p>When an outside architecture review came back with real findings — a legacy stylesheet documentation claimed was removed but was still shipping in every build, a single Escape key closing an entire stack of modals — we treated it exactly like our own internal audits: fix it, log the decision, move on. Getting reviewed by someone else was part of the plan, not a failure of it.</p>
              </div>
            </div>

            <div className="decision">
              <div className="decision-num">05</div>
              <div>
                <h3>Documentation and adoption over completeness.</h3>
                <p>Most design system docs tell you what a component looks like and what props it takes. The documentation I pushed for answers a different question: <strong>when should you use this component, and when should you not?</strong> Every component carries a maturity signal — stable, beta, experimental, deprecated — so nobody has to guess whether it&apos;s safe to build on, and every systemic decision gets logged with its context and consequence, so the same argument doesn&apos;t happen again next quarter.</p>
                <p>A design system that isn&apos;t used isn&apos;t a design system — it&apos;s a Figma file. I prioritized what teams reached for every day — buttons, inputs, modals, tables, form patterns — over exotic components nobody had asked for yet, and stayed close to the teams adopting the system: pairing during implementation, fixing friction fast.</p>
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
              <p>Patterns that used to mean a five-hundred-line hand-rolled table, or yet another one-off tab bar, now mean composing existing primitives — and engineering handoff is noticeably faster with no more re-litigating which button to use.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" />
                </svg>
              </div>
              <h4>Accessibility by default.</h4>
              <p>Components ship with WCAG 2.2 AA compliance built in, including a density system where accessibility always wins the conflict. Teams don&apos;t need to become accessibility experts — they just need to use the system correctly.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <h4>A shared vocabulary.</h4>
              <p>A product that once ran three coexisting styling systems at the same time now runs one. Design, engineering, and product use the same names for the same things, and reviews stopped being consistency debates.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2L2 7v10l10 5 10-5V7z" /><polyline points="2 7 12 12 22 7" /><line x1="12" y1="22" x2="12" y2="12" />
                </svg>
              </div>
              <h4>A system that can outlive me.</h4>
              <p>With tokens, a logged decision history, and a recurring audit practice in place, the system keeps working whether I&apos;m in the room or not. That&apos;s the real deliverable.</p>
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
            <p>If I started again, I&apos;d invest more in <strong>adoption infrastructure earlier</strong> — office hours, a channel for system questions, regular component critiques. The system gains trust by being a good teammate, not just a good library.</p>
            <p>I&apos;d also push harder on <strong>engineering partnership from week one</strong>. The best parts of the system came from tight collaboration with the frontend engineer building it alongside me — and the slowest parts came from moments when design ran ahead and engineering had to catch up.</p>
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
