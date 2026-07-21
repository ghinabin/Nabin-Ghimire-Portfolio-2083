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
              <h3 className="work-title">Viveka Design System</h3>
              <p className="work-desc">
                Led the component library, tokens, and docs powering Viveka&apos;s healthcare platform.
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
              <h3 className="work-title">DOCS.ink — Digital Waiver Platform</h3>
              <p className="work-desc">
                Led end-to-end design of the waiver builder and e-signature flow, shipped 2025.
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
              <h3 className="work-title">Healthcare Claims Payments</h3>
              <p className="work-desc">
                Designed batch processing, status tracking, and audit trails, launched 2024.
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
                  <Image
                    src="/images/findcare-hero.png"
                    alt="Find Care portal on desktop and mobile — category-first provider search"
                    width={831}
                    height={506}
                    className="work-thumb-img work-thumb-img--contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="work-tag-row">
                <span>Consumer healthcare</span>
                <span className="dot" />
                <span>Multi-platform</span>
                <span className="dot" />
                <span>2023</span>
              </div>
              <h3 className="work-title">Find Care — Provider Search Portal</h3>
              <p className="work-desc">
                Redesigned provider search and cost estimates for members, across web and mobile.
              </p>
              <span className="work-cta">
                Find Care case study
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>

          </div>

          {/* OTHER WORK */}
          <div className="other-work" id="other-work">
            <div className="section-header">
              <div>
                <p className="section-eyebrow">Also worth a look</p>
              </div>
              <span className="section-meta">2016 — Present</span>
            </div>

            <div className="other-work-list">
              <Link href="/industrial-vision" className="other-work-card">
                <div className="other-work-visual">
                  <Image
                    src="/images/industrial-vision-hero.png"
                    alt="Industrial Vision — printed engineering magazine covers"
                    fill
                    className="other-work-img"
                    sizes="(max-width: 768px) 100vw, 220px"
                  />
                </div>
                <div className="other-work-content">
                  <div className="work-tag-row">
                    <span>Editorial design</span>
                    <span className="dot" />
                    <span>SOIESNEPAL, Thapathali Campus</span>
                    <span className="dot" />
                    <span>2016 — Present</span>
                  </div>
                  <h3 className="work-title">Industrial Vision — Magazine Design</h3>
                  <p className="work-desc">
                    Design lead and art director for a print engineering magazine since 2016.
                  </p>
                  <span className="work-cta">
                    Read case study
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </Link>

              <Link href="/nepverse" className="other-work-card">
                <div className="other-work-visual">
                  <Image
                    src="/images/Display screen.png"
                    alt="A user standing before a large interactive display screen inside the Nepverse virtual exhibition hall"
                    fill
                    className="other-work-img"
                    sizes="(max-width: 768px) 100vw, 220px"
                  />
                </div>
                <div className="other-work-content">
                  <div className="work-tag-row">
                    <span>R&amp;D · VR / 3D</span>
                    <span className="dot" />
                    <span>EKbana</span>
                    <span className="dot" />
                    <span>2021 — 2022</span>
                  </div>
                  <h3 className="work-title">Nepverse — VR Exhibition Platform</h3>
                  <p className="work-desc">
                    Product designer and 3D artist on a multiplayer VR exhibition prototype.
                  </p>
                  <span className="work-cta">
                    Read case study
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
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
