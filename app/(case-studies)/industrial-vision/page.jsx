import Link from 'next/link'
import '@/assets/css/pages/industrial-vision.css'

export const metadata = {
  title: 'Industrial Vision — Nabin Ghimire',
  description:
    'Art-directing the visual identity behind Innovation, Industry, Prosperity — a print magazine of original engineering research. A case study by Nabin Ghimire.',
}

export default function IndustrialVisionPage() {
  return (
    <>
      <div className="container">
        <Link href="/#other-work" className="back-link">
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
            <span>Editorial design</span>
            <span className="dot" />
            <span>SOIESNEPAL — Thapathali Campus</span>
          </p>

          <h1 className="case-title">
            Building the visual identity behind <em>Innovation, Industry, Prosperity</em>.
          </h1>

          <p className="case-subtitle">
            Design Lead and Art Director for Industrial Vision — SOIESNEPAL&apos;s print magazine
            for Thapathali Campus&apos;s Industrial Engineering community. Real research, real
            industry advertising, and a visual identity I&apos;ve shaped since IV 2.
          </p>

          <div className="case-visual" role="img" aria-label="Stack of three Industrial Vision magazine covers, representing multiple yearly editions">
            <div className="case-visual-bg" />
            <div className="iv-cover-stack" aria-hidden="true">
              <div className="cover">
                <span className="cover-mark">IV</span>
                <span className="cover-line" />
              </div>
              <div className="cover">
                <span className="cover-mark">IV</span>
                <span className="cover-line" />
              </div>
              <div className="cover">
                <span className="cover-mark">IV</span>
                <span className="cover-line" />
              </div>
            </div>
          </div>

          <div className="meta-strip">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Design Lead / Art Director (recurring)</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Publication</span>
              <span className="meta-value">Industrial Vision — SOIESNEPAL</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Editions</span>
              <span className="meta-value">IV 2 — IV 10 · IV 11 in progress</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Format</span>
              <span className="meta-value">Print + PDF</span>
            </div>
          </div>

          <div className="nda-notice">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>
              Industrial Vision is SOIESNEPAL&apos;s print magazine for Thapathali Campus&apos;s
              Industrial Engineering community — funded by industry advertising and built around
              original research and articles. Covers and spreads shown here are real, published
              work.
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
              <p>Industrial Vision runs on real industry advertising and carries original research and articles — it needed a visual identity substantial enough to match both, not something that read as a student handout.</p>
            </div>
            <div className="tldr-item">
              <h3>My role</h3>
              <p>Design Lead &amp; Art Director since 2016 — shaping cover concepts, the layout system, and print production across nine editions, IV 2 through IV 10.</p>
            </div>
            <div className="tldr-item">
              <h3>Outcome</h3>
              <p>A consistent, credible visual identity across nearly a decade, IV 2 through IV 10, extended from print into a downloadable PDF, with IV 11 now underway.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Context</p>
          <h2 className="section-title">A real magazine, not a class handout.</h2>
          <div className="prose">
            <p>
              Industrial Vision is SOIESNEPAL&apos;s print magazine for the Industrial Engineering
              community at Thapathali Campus — read by students, faculty, alumni, and industry
              partners, and funded in part by advertising from industrial businesses. Every edition
              carries original research and articles from the department, under one tagline:{' '}
              <strong>Innovation, Industry, Prosperity.</strong>
            </p>
            <p>
              That combination — real research, paying advertisers, a readership that includes
              industry professionals — meant the design had to earn its place next to the content.
              I&apos;ve been the Design Lead and Art Director shaping that visual identity since
              IV 2, in 2016.
            </p>
          </div>
        </div>
      </section>

      {/* THE CORE PROBLEM */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">The core problem</p>
          <h2 className="section-title">Dense engineering research doesn&apos;t read itself.</h2>
          <div className="pull-quote">
            &ldquo;The tagline was the easy part. Making the research readable was the job.&rdquo;
          </div>
          <div className="prose">
            <p>
              Every edition mixes long-form research papers, technical articles, and interviews
              with industry professionals — content that&apos;s substantive but not naturally
              inviting. The design had to make that content genuinely readable for a student
              audience while still looking credible enough to sit next to paid industry
              advertising. Neither side of that could win at the other&apos;s expense.
            </p>
          </div>
        </div>
      </section>

      {/* DESIGN MOVES */}
      <section className="section">
        <div className="container">
          <p className="section-eyebrow">Design moves</p>
          <h2 className="section-title">Three decisions behind the identity.</h2>

          <div className="decisions">
            <div className="decision">
              <span className="decision-num">01</span>
              <div>
                <h3>A layout system built for dense content.</h3>
                <p>A grid and type hierarchy in InDesign that makes long-form research and interviews as readable as they are credible — not just another article dump.</p>
              </div>
            </div>
            <div className="decision">
              <span className="decision-num">02</span>
              <div>
                <h3>A cover identity strong enough to carry the tagline.</h3>
                <p>One consistent wordmark and cover language across editions, re-themed each year — instantly recognizable as Industrial Vision, never a repeat.</p>
              </div>
            </div>
            <div className="decision">
              <span className="decision-num">03</span>
              <div>
                <h3>Print + Digital, so each edition outlives its print run.</h3>
                <p>Pairing a downloadable PDF with each print run keeps the research and features reachable for alumni and industry readers long after physical copies run out.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COVER WALL */}
      <section className="section">
        <div className="container">
          <p className="section-eyebrow">Editions, one identity</p>
          <h2 className="section-title">IV 2 to IV 10 — same DNA, evolving execution.</h2>

          <div className="cover-wall" aria-label="Grid of Industrial Vision editions, IV 2 through IV 10, with IV 11 in progress">
            <div className="cover-tile"><span className="cover-tile-num">IV 2</span></div>
            <div className="cover-tile"><span className="cover-tile-num">IV 3</span><span className="cover-tile-theme">Lean Manufacturing</span></div>
            <div className="cover-tile"><span className="cover-tile-num">IV 4</span></div>
            <div className="cover-tile"><span className="cover-tile-num">IV 5</span></div>
            <div className="cover-tile"><span className="cover-tile-num">IV 6</span></div>
            <div className="cover-tile"><span className="cover-tile-num">IV 7</span></div>
            <div className="cover-tile"><span className="cover-tile-num">IV 8</span><span className="cover-tile-theme">Sustainable Energy</span></div>
            <div className="cover-tile"><span className="cover-tile-num">IV 9</span><span className="cover-tile-theme">Artificial Intelligence</span></div>
            <div className="cover-tile"><span className="cover-tile-num">IV 10</span><span className="cover-tile-theme">Industry in Nepal</span></div>
            <div className="cover-tile cover-tile--pending"><span className="cover-tile-num">IV 11</span><span className="cover-tile-theme">In progress</span></div>
          </div>
          <p className="theme-line">
            Each edition carries its own research theme — from lean manufacturing to sustainable
            energy, artificial intelligence, and industry in Nepal — inside one consistent visual
            identity.
          </p>
        </div>
      </section>

      {/* FLAGSHIP DEEP-DIVE */}
      <section className="section">
        <div className="container">
          <p className="section-eyebrow">A closer look</p>
          <h2 className="section-title">Inside IV 10 — Industry in Nepal.</h2>

          <div className="iv-surfaces">
            <div className="iv-surface">
              <div className="iv-surface-visual">
                <div className="iv-mock-cover" aria-hidden="true">
                  <span className="mark">IV 10</span>
                  <span className="theme" />
                </div>
              </div>
              <span className="iv-surface-label">Cover</span>
              <h3>A cover built around one theme.</h3>
              <p>Same wordmark and grid every edition shares, re-themed for that year&apos;s focus on industry in Nepal.</p>
            </div>

            <div className="iv-surface">
              <div className="iv-surface-visual">
                <div className="iv-mock-spread" aria-hidden="true">
                  <div className="col">
                    <span /><span /><span />
                    <div className="image" style={{ height: '40%' }} />
                  </div>
                  <div className="col">
                    <div className="image" style={{ height: '50%' }} />
                    <span /><span />
                  </div>
                </div>
              </div>
              <span className="iv-surface-label">Feature spread</span>
              <h3>The grid, doing the actual work.</h3>
              <p>A real interior layout — the same column structure and type rules every team inherits, applied to a new feature.</p>
            </div>

            <div className="iv-surface">
              <div className="iv-surface-visual">
                <div className="iv-mock-masthead" aria-hidden="true">
                  <div className="row"><span className="dot" /><span /></div>
                  <div className="row"><span className="dot" /><span /></div>
                  <div className="row"><span className="dot" /><span /></div>
                </div>
              </div>
              <span className="iv-surface-label">Masthead</span>
              <h3>The people behind the research.</h3>
              <p>Every edition credits its writers, researchers, and industry contributors — a real editorial team, not a one-person show.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="section">
        <div className="container">
          <p className="section-eyebrow">Outcome</p>
          <h2 className="section-title">What nine editions actually proved.</h2>

          <div className="outcomes-grid">
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 12a9 9 0 0 1-15 6.7L3 16" /><polyline points="21 3 21 8 16 8" /><polyline points="3 21 3 16 8 16" />
                </svg>
              </div>
              <h4>One identity, nearly a decade strong.</h4>
              <p>Nine editions, IV 2 through IV 10, carrying one consistent, recognizable visual identity since 2016.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4>Backed by real industry advertising.</h4>
              <p>Funded in part by ads from industrial businesses each cycle — a standing signal that the magazine&apos;s design and content meet a professional bar.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="3" x2="9" y2="21" />
                </svg>
              </div>
              <h4>Research made genuinely readable.</h4>
              <p>A layout system built to carry long-form technical content and interviews without losing the reader — credible and approachable at once.</p>
            </div>
            <div className="outcome">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <h4>Print, extended into digital.</h4>
              <p>Each edition now ships with a downloadable PDF alongside the print run, extending its reach well past a limited print copy count.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Reflection</p>
          <h2 className="section-title">The first design system I ever built — I just didn&apos;t call it one yet.</h2>
          <div className="prose">
            <p>
              Keeping one visual identity credible across nearly a decade, through new themes and
              new content every year, was my earliest lesson in systems thinking — build the rules
              once, then let them carry very different content without losing what makes it
              recognizable. It&apos;s the same instinct behind the design system work I do
              professionally today, years before I had a name for it.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="next-case">
        <div className="container">
          <Link href="/nepverse" className="next-case-card">
            <p className="next-case-label">Also outside the SaaS lane</p>
            <h2 className="next-case-title">Prototyping a metaverse businesses could actually rent space in.</h2>
            <p className="next-case-desc">
              An EKbana R&amp;D project — product design and 3D art across a 5-person team,
              taking a COVID-era idea to a working multiplayer VR prototype in Unity.
            </p>
            <span className="next-case-cta">
              Nepverse case study
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
