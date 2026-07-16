import Image from 'next/image'
import Link from 'next/link'
import '@/assets/css/pages/home.css'

export const metadata = {
  title: 'Nabin Ghimire — Senior Product Designer',
  description:
    'Senior Product Designer with 9+ years building enterprise SaaS and US healthcare products. Currently at Viveka Health.',
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-status">Available for senior &amp; lead roles</div>

          <h1 className="hero-headline">
            Senior product designer shaping <em>clarity</em> in complex software.
          </h1>

          <p className="hero-lead">
            Nine years designing enterprise SaaS and US healthcare products — design systems,
            eligibility platforms, claims workflows, provider search. I turn tangled stakeholder
            requirements into interfaces people can actually use.
          </p>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="hero-meta-label">Now</span>
              <span className="hero-meta-value">Senior Product Designer, Viveka Health</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-label">Based in</span>
              <span className="hero-meta-value">Kathmandu — working globally</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-label">Focus</span>
              <span className="hero-meta-value">Design systems · Enterprise UX · Accessibility</span>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="section" id="work">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">Selected work</p>
              <h2 className="section-title">Four projects, one principle: make the complex clear.</h2>
            </div>
            <span className="section-meta">2021 — 2026</span>
          </div>

          <div className="work-grid">

            {/* Viveka Design System — feature card */}
            <Link href="/viveka" className="work-card work-card--feature">
              <div className="work-thumb">
                <div className="work-thumb-visual visual-viveka">
                  <Image
                    src="/images/design-system.png"
                    alt="Viveka Design System component library"
                    fill
                    className="work-thumb-img"
                    sizes="(max-width: 768px) 100vw, 1120px"
                  />
                </div>
              </div>
              <div className="work-tag-row">
                <span>Design system</span>
                <span className="dot" />
                <span>Viveka Health</span>
                <span className="dot" />
                <span>2023 — Present</span>
              </div>
              <h3 className="work-title">Building an enterprise design system from legacy chaos.</h3>
              <p className="work-desc">
                Architecting the component library, tokens, and documentation powering Viveka&apos;s
                healthcare platform — with accessibility and developer handoff built in from day one.
              </p>
              <span className="work-cta">
                Read case study
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>

            {/* DOCS.ink */}
            <Link href="/docsink" className="work-card">
              <div className="work-thumb">
                <div className="work-thumb-visual visual-docsink">
                  <Image
                    src="/images/thumb-docsink.png"
                    alt="DOCS.ink digital waiver platform on laptop"
                    fill
                    className="work-thumb-img"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="work-tag-row">
                <span>SaaS</span>
                <span className="dot" />
                <span>Contract lead</span>
                <span className="dot" />
                <span>2024 — 2025</span>
              </div>
              <h3 className="work-title">A digital waiver platform, zero to scale.</h3>
              <p className="work-desc">
                Led end-to-end design for DOCS.ink — waiver builder, multi-channel distribution,
                e-signatures — shipped and now used by businesses across the US.
              </p>
              <span className="work-cta">
                Read case study
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>

            {/* Claims Payment */}
            <Link href="/claims" className="work-card">
              <div className="work-thumb">
                <div className="work-thumb-visual visual-claims">
                  <Image
                    src="/images/thumb-claims.png"
                    alt="From paper checks to digital claims payments — healthcare workflow"
                    fill
                    className="work-thumb-img"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="work-tag-row">
                <span>Enterprise</span>
                <span className="dot" />
                <span>Healthcare</span>
                <span className="dot" />
                <span>2024</span>
              </div>
              <h3 className="work-title">From paper checks to digital claims payments.</h3>
              <p className="work-desc">
                Designed batch processing, real-time status tracking, and audit trails for a
                healthcare claims reconciliation system integrated with Zelis.
              </p>
              <span className="work-cta">
                Read case study
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>

            <Link href="/findcare" className="work-card">
              <div className="work-thumb">
                <div className="work-thumb-visual visual-findcare">
                  <div className="visual-findcare-content" aria-hidden="true">
                    <div className="visual-findcare-search"><span /></div>
                    <div className="visual-findcare-row">
                      <div className="avatar" />
                      <div className="lines"><span /><span /></div>
                    </div>
                    <div className="visual-findcare-row">
                      <div className="avatar" />
                      <div className="lines"><span /><span /></div>
                    </div>
                    <div className="visual-findcare-row">
                      <div className="avatar" />
                      <div className="lines"><span /><span /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work-tag-row">
                <span>Consumer healthcare</span>
                <span className="dot" />
                <span>Multi-platform</span>
                <span className="dot" />
                <span>2023</span>
              </div>
              <h3 className="work-title">Making healthcare search actually work.</h3>
              <p className="work-desc">
                Redesigned provider search, smart filters, and price estimation for members who
                don&apos;t speak in CPT codes — they speak in &ldquo;my knee hurts.&rdquo;
              </p>
              <span className="work-cta">
                Find Care case study
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>

          </div>

          {/* ABOUT STRIP */}
          <div className="about-strip">
            <div className="about-strip-inner">
              <div>
                <p className="section-eyebrow" style={{ marginBottom: '1rem' }}>About</p>
                <p>
                  Graphic designer turned product designer. Still obsessed with craft — just pointed
                  at harder problems now.
                </p>
                <p>
                  I&apos;ve spent the last nine years designing for SaaS and US healthcare platforms,
                  mentoring juniors, and building design systems that outlast me. Outside of work:
                  boxing, swimming, the kind of books that take a month to finish.
                </p>
                <Link href="/about" className="work-cta" style={{ marginTop: '0.5rem' }}>
                  More about me
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
              <div className="about-stats">
                <div className="about-stat">
                  <div className="about-stat-num">9+</div>
                  <div className="about-stat-label">Years designing digital products</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-num">4</div>
                  <div className="about-stat-label">Design systems built from scratch</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-num">US · JP</div>
                  <div className="about-stat-label">Markets shipped to</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-num">AA</div>
                  <div className="about-stat-label">WCAG 2.1 compliance standard</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
