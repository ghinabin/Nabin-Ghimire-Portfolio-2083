import '@/assets/css/pages/about.css'

export const metadata = {
  title: 'About — Nabin Ghimire',
  description:
    'Senior Product Designer with 9+ years in enterprise SaaS and US healthcare. About me, my work, and how I think.',
}

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <p className="about-eyebrow">About</p>
          <h1 className="about-headline">
            I&apos;m Nabin. I turn complicated workflows into software people can <em>actually use</em>.
          </h1>
        </div>
      </section>

      {/* PHOTO + INTRO */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <div>
              <div className="photo-frame">
                <div className="photo-placeholder">
                  <span className="photo-placeholder-initials">NG</span>
                </div>
              </div>
              <span className="photo-caption">Kathmandu, 2026</span>
            </div>

            <div className="intro-text">
              <p>
                Senior product designer, nine years in. Currently at Viveka Health, designing
                platforms used by US healthcare organizations to manage eligibility, claims, and
                care coordination.
              </p>
              <p className="secondary">
                I started in graphic design and moved into product in 2016. The craft mindset
                stuck — the problems just got harder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-label">The work</p>
          <h2 className="section-heading">Making complex software feel less complex.</h2>
          <div className="story">
            <p>
              Most of my time goes into <strong>design systems</strong> — the infrastructure that
              makes every other screen easier to build. I&apos;ve architected four of them. Good
              systems aren&apos;t about perfect Figma files; they&apos;re about making the next
              designer, engineer, and PM faster.
            </p>
            <div className="story-quote">
              &ldquo;Enterprise software doesn&apos;t have to feel like enterprise software.&rdquo;
            </div>
            <p>
              The rest of my time goes into workflows nobody wants to touch: eligibility, claims,
              provider search, digital waivers. The screens enterprise users stare at for eight
              hours a day. When they&apos;re good, nobody notices — which is the point.
            </p>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="section">
        <div className="container">
          <p className="section-label">How I work</p>
          <h2 className="section-heading">Four things I actually do — not beliefs, habits.</h2>

          <div className="principles-grid">
            <div className="principle">
              <span className="principle-number">01</span>
              <h3 className="principle-title">I think in systems, not screens.</h3>
              <p className="principle-body">
                I map the whole context before touching pixels. Slower at the start, much faster at
                the finish — and it&apos;s how you avoid shipping the same thing three different ways
                across a product.
              </p>
            </div>

            <div className="principle">
              <span className="principle-number">02</span>
              <h3 className="principle-title">I design for everyone, including the keyboard.</h3>
              <p className="principle-body">
                WCAG 2.1 AA is my baseline, not my ceiling. I keyboard-test before I ship, run
                contrast checks inside the design pass, and write real labels before I visualize
                components.
              </p>
            </div>

            <div className="principle">
              <span className="principle-number">03</span>
              <h3 className="principle-title">I work with engineers, not at them.</h3>
              <p className="principle-body">
                I loop engineers in before I&apos;ve fallen in love with a solution. Handoff docs
                explain why, not just what. I stay around after handoff — the edge cases always
                show up.
              </p>
            </div>

            <div className="principle">
              <span className="principle-number">04</span>
              <h3 className="principle-title">I ship. Then I iterate.</h3>
              <p className="principle-body">
                A 90% solution users can react to beats a 100% solution that ships in six months.
                Iteration with real data wins every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section">
        <div className="container">
          <p className="section-label">Experience</p>
          <h2 className="section-heading">Nine years, three roles, one direction.</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2023 — Present</div>
              <div>
                <h3 className="timeline-role">Senior Product Designer</h3>
                <p className="timeline-company">Viveka Health <span>·</span> US Healthcare Enterprise</p>
                <p className="timeline-detail">
                  Architect and maintain the enterprise design system powering multiple healthcare
                  products. Lead end-to-end design for employer eligibility, provider search, and
                  care coordination tools — under HIPAA and WCAG 2.1 AA constraints.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2024 — 2025</div>
              <div>
                <h3 className="timeline-role">Lead Product Designer (Contract)</h3>
                <p className="timeline-company">DOCS.ink <span>·</span> Digital Waiver SaaS, Remote</p>
                <p className="timeline-detail">
                  Led end-to-end UX and design system for a digital waiver platform now used by
                  businesses across the US. Managed one designer. Designed the waiver builder,
                  signature capture, multi-channel distribution, and handoff that let the team keep
                  shipping after the engagement ended.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2016 — 2023</div>
              <div>
                <h3 className="timeline-role">Product Designer</h3>
                <p className="timeline-company">Ekbana Solutions <span>·</span> Product Design Agency, Nepal</p>
                <p className="timeline-detail">
                  Led design across aviation (Yeti Airlines), food delivery (Foodmandu),
                  e-commerce (Koklass), and social platforms (Raven). Pioneered the company&apos;s
                  first internal design system. Mentored junior designers, ran usability research,
                  and got very good at translating business goals into interfaces.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2015 — 2016</div>
              <div>
                <h3 className="timeline-role">Graphic Designer</h3>
                <p className="timeline-company">Creo Communications <span>·</span> Creative Agency</p>
                <p className="timeline-detail">
                  Print, editorial, brand identity, and early web work for a range of clients.
                  Where I learned the fundamentals of craft, grids, typography, and talking to
                  people whose first language wasn&apos;t design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTSIDE WORK */}
      <section className="section">
        <div className="container">
          <div className="outside">
            <div className="outside-inner">
              <div className="outside-text">
                <p>When I&apos;m not designing, I&apos;m usually doing something with my hands — or getting out of breath.</p>
              </div>
              <ul className="outside-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                  </svg>
                  Boxing, regularly, badly
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 6s1.5-2 5-2 5 4 8 4 5-2 5-2" /><path d="M2 12s1.5-2 5-2 5 4 8 4 5-2 5-2" /><path d="M2 18s1.5-2 5-2 5 4 8 4 5-2 5-2" />
                  </svg>
                  Swimming, weekly, better
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  Books that take a month to finish
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                  </svg>
                  Mentoring juniors in Nepal&apos;s design scene
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS & TOOLS */}
      <section className="section">
        <div className="container">
          <p className="section-label">Skills &amp; tools</p>
          <h2 className="section-heading">What I bring to the table.</h2>

          <div className="skills-grid">
            <div className="skill-group">
              <h3 className="skill-group-title">Design</h3>
              <ul className="skill-list">
                <li>Design systems architecture</li>
                <li>Enterprise UX</li>
                <li>Interaction design</li>
                <li>Information architecture</li>
                <li>Prototyping</li>
                <li>Visual design</li>
                <li>Accessibility (WCAG 2.1 AA)</li>
                <li>Design documentation</li>
              </ul>
            </div>

            <div className="skill-group">
              <h3 className="skill-group-title">Research &amp; strategy</h3>
              <ul className="skill-list">
                <li>User research</li>
                <li>Stakeholder interviews</li>
                <li>Usability testing</li>
                <li>Journey mapping</li>
                <li>Competitor analysis</li>
                <li>Design-to-dev handoff</li>
                <li>Cross-functional leadership</li>
                <li>Designer mentorship</li>
              </ul>
            </div>

            <div className="skill-group">
              <h3 className="skill-group-title">Tools</h3>
              <ul className="skill-list">
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Zeplin</li>
                <li>After Effects</li>
                <li>HTML / CSS</li>
                <li>Notion</li>
                <li>Linear</li>
              </ul>
            </div>

            <div className="skill-group">
              <h3 className="skill-group-title">Domains</h3>
              <ul className="skill-list">
                <li>US healthcare</li>
                <li>Enterprise SaaS</li>
                <li>Claims &amp; payments</li>
                <li>Design systems</li>
                <li>Aviation booking</li>
                <li>E-commerce</li>
                <li>Social platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
