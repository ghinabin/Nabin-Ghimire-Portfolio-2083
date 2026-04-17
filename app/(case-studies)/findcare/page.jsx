import Link from 'next/link'
import '@/assets/css/pages/findcare.css'

export const metadata = {
  title: 'Find Care Portal — Nabin Ghimire',
  description:
    'Redesigning healthcare search for members who don\u2019t speak in medical codes. A case study by Nabin Ghimire.',
}

export default function FindCarePage() {
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
            <span>Consumer healthcare</span>
            <span className="dot" />
            <span>Mobile-first</span>
          </p>

          <h1 className="case-title">
            Making healthcare search <em>actually work</em>.
          </h1>

          <p className="case-subtitle">
            Redesigning a Find Care portal for members who don&apos;t speak in medical codes —
            they speak in &ldquo;my knee hurts.&rdquo; Category-first navigation, AI assistance
            for the uncertain, mobile-first throughout.
          </p>

          <div className="case-visual" role="img" aria-label="Two phone mockups: the before state showing a broken keyword search, and the after state showing category-based navigation">
            <div className="case-visual-bg" />
            <div className="findcare-hero" aria-hidden="true">
              <div className="findcare-phone before">
                <div className="search-bar"><div className="query" /></div>
                <div className="result"><div className="lines"><span /><span /></div></div>
                <div className="error-row">No results found</div>
                <div className="error-row">Try different keywords</div>
                <div className="result"><div className="lines"><span /><span /></div></div>
              </div>
              <div className="findcare-phone after">
                <div className="search-bar"><div className="query" /></div>
                <div className="cat-grid">
                  <div className="cat-tile highlight" />
                  <div className="cat-tile" />
                  <div className="cat-tile" />
                  <div className="cat-tile" />
                </div>
                <div className="result"><div className="lines"><span /><span /></div></div>
              </div>
            </div>
          </div>

          <div className="meta-strip">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Senior Product Designer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Platform</span>
              <span className="meta-value">Web · Mobile Responsive</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">2023</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Standard</span>
              <span className="meta-value">WCAG 2.1 AA</span>
            </div>
          </div>

          <div className="nda-notice">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>
              This case study is published under an active NDA. The client organization, specific
              research data, and internal metrics have been generalized. Screens shown are abstract
              representations. Happy to walk through detail in an interview.
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
              <p>A keyword-based search that required members to know medical terminology they don&apos;t have — leading to frustration, abandonment, and poor access to care.</p>
            </div>
            <div className="tldr-item">
              <h3>My role</h3>
              <p>Senior Product Designer. Led the redesign end-to-end — research synthesis, information architecture, interaction design, accessibility, and responsive implementation.</p>
            </div>
            <div className="tldr-item">
              <h3>Outcome</h3>
              <p>A category-first portal with AI assistance for uncertain users, full WCAG 2.1 AA compliance, and a mobile experience that matches how members actually use it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Context</p>
          <h2 className="section-title">A portal that assumed users knew what they were looking for.</h2>
          <div className="prose">
            <p>
              The Find Care portal helps members enrolled in employer-sponsored health plans find
              care, understand coverage, and manage their benefits. It&apos;s one of the most-used
              features on the platform — and used to be one of the most frustrating.
            </p>
            <p>
              The existing design leaned heavily on <strong>keyword search</strong>. That works
              great if you&apos;re a healthcare professional looking up a specific CPT code. It
              works poorly if you&apos;re a person who just found out your knee hurts and needs to
              know who to see and what it&apos;s going to cost.
            </p>
            <p>
              Research confirmed what the bounce rates already suggested:{' '}
              <strong>most members didn&apos;t know what to search for.</strong> They were typing
              the problem, not the procedure. The interface was answering a question they
              hadn&apos;t asked.
            </p>
          </div>
        </div>
      </section>

      {/* THE INSIGHT */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">The insight</p>
          <h2 className="section-title">One observation that changed everything.</h2>

          <div className="big-insight">
            <p className="big-insight-label">The core finding</p>
            <p className="big-insight-quote">
              Members don&apos;t want to <em>search</em>. They want to <em>find</em>.
            </p>
            <p className="big-insight-context">
              Search implies you know what you&apos;re looking for. Most members didn&apos;t. They
              had a concern (&ldquo;my knee hurts&rdquo;), not a query (&ldquo;orthopedic
              consultation, CPT 99243&rdquo;). The interface had to meet them where they were —
              not where the data structure expected them to be.
            </p>
          </div>

          <div className="prose">
            <p>
              That reframing was the whole case study. Everything else followed from it:
              category-based navigation instead of a keyword-first search. A conversational
              assistant for members who genuinely didn&apos;t know where to start. Cost estimates
              surfaced before booking, not buried after.
            </p>
          </div>

          <div className="query-table" aria-label="Examples of how members describe their needs versus what the system expects">
            <div className="query-table-header">
              <span>What members type</span>
              <span>What they actually need</span>
            </div>
            <div className="query-row">
              <span className="typed">doctor</span>
              <span className="needed">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
                Browse providers by specialty
              </span>
            </div>
            <div className="query-row">
              <span className="typed">how much</span>
              <span className="needed">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
                Price estimation for covered services
              </span>
            </div>
            <div className="query-row">
              <span className="typed">covered</span>
              <span className="needed">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
                Plan coverage verification
              </span>
            </div>
            <div className="query-row">
              <span className="typed">knee / back / headache</span>
              <span className="needed">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
                Symptom-to-specialty guidance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* THREE MOVES */}
      <section className="section">
        <div className="container">
          <p className="section-eyebrow">Design moves</p>
          <h2 className="section-title">Three changes that followed from the insight.</h2>

          <div className="moves">
            <div className="move">
              <span className="move-num">01</span>
              <h3>Categories first, search second.</h3>
              <p>Browse-by-category became the primary path — organized around how members talk about their needs, not how data is structured in the back end. Keyword search is still there for members who want it, just not in the driver&apos;s seat anymore.</p>
            </div>
            <div className="move">
              <span className="move-num">02</span>
              <h3>An assistant for the uncertain.</h3>
              <p>Some members don&apos;t have the vocabulary to start. A conversational Find Care assistant handles the &ldquo;I don&apos;t know where to begin&rdquo; cases — asking questions in plain language and steering members toward the right care path, with costs and coverage visible along the way.</p>
            </div>
            <div className="move">
              <span className="move-num">03</span>
              <h3>Mobile-first, not mobile-also.</h3>
              <p>More than 70% of members were already using the portal on mobile. The existing design was desktop-first, shoehorned down. The redesign started from the phone — touch targets sized for thumbs, bottom navigation for one-handed use, collapsible filters that don&apos;t block content.</p>
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
                  <path d="M21 21l-4.35-4.35M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </div>
              <h4>Fewer dead-end searches.</h4>
              <p>Category-based navigation reduced search abandonment. Members who previously hit empty results now land on a path forward — one they didn&apos;t have to guess at.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" />
                </svg>
              </div>
              <h4>WCAG 2.1 AA across the flow.</h4>
              <p>Accessibility gaps in the old portal — contrast, screen reader support, focus management — were systematically resolved. Every flow in the redesign passes AA.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <h4>Mobile experience that matches mobile usage.</h4>
              <p>With most members on phones, the redesign treated mobile as the primary surface. Touch targets, thumb-zone primary actions, and bottom-sheet filters replaced the old desktop-first compromise.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="9" x2="15" y2="9" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" />
                </svg>
              </div>
              <h4>A reusable component library.</h4>
              <p>The work also produced a component library — search bars, provider cards, cost-estimation patterns, filter controls — reused across adjacent features and modules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Reflection</p>
          <h2 className="section-title">Designing for low technical literacy.</h2>
          <div className="prose">
            <p>
              The instinct when users are struggling is to{' '}
              <strong>simplify by removing features</strong>. The better approach is usually the
              opposite: provide multiple paths to the same destination. Category browsing, keyword
              search, and the assistant all lead members to care options — they just let different
              users arrive by different routes.
            </p>
            <p>
              Transparency also matters more than I expected going in. When members can see
              exactly what they&apos;ll pay before booking, they&apos;re more likely to seek care
              at all. <strong>Hidden costs create anxiety. Visible costs create confidence.</strong>{' '}
              That single pattern applied across the flow quietly did more for member experience
              than any individual interaction.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="next-case">
        <div className="container">
          <Link href="/viveka" className="next-case-card">
            <p className="next-case-label">Start again</p>
            <h2 className="next-case-title">Building an enterprise design system from legacy chaos.</h2>
            <p className="next-case-desc">
              Architecting the component library, tokens, and documentation powering Viveka&apos;s
              healthcare platform — with accessibility and developer handoff built in from day one.
            </p>
            <span className="next-case-cta">
              Viveka case study
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
