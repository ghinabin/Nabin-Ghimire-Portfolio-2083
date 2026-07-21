import Image from 'next/image'
import Link from 'next/link'
import '@/assets/css/pages/docsink.css'

export const metadata = {
  title: 'DOCS.ink — Nabin Ghimire',
  description:
    'Leading end-to-end design for a digital waiver SaaS platform, from zero to production. A case study by Nabin Ghimire.',
}

export default function DocsinkPage() {
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
            <span>SaaS</span>
            <span className="dot" />
            <span>Contract leadership</span>
          </p>

          <h1 className="case-title">
            A digital waiver platform, <em>zero to scale</em>.
          </h1>

          <p className="case-subtitle">
            I led product design for DOCS.ink from the ground up. It&apos;s online waiver software
            used by thousands of US businesses to replace paper consent forms with digital signing.
            My job was to take it from early concepts to a production platform.
          </p>

          <a href="https://docs.ink" className="case-live-link" target="_blank" rel="noopener noreferrer">
            Live at docs.ink
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
            </svg>
          </a>

          <div className="case-visual case-visual--image" role="img" aria-label="DOCS.ink digital waiver platform">
            <div className="case-visual-bg" />
            <Image
              src="/images/docsink/thumb-docsink.png"
              alt="DOCS.ink digital waiver platform"
              fill
              className="case-visual-img"
              sizes="(max-width: 768px) 100vw, 1120px"
              priority
            />
          </div>

          <div className="meta-strip">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Lead Product Designer (Contract)</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Managed</span>
              <span className="meta-value">1 designer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">2024 — 2025</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Platform</span>
              <span className="meta-value">Web · Mobile · iPad Kiosk</span>
            </div>
          </div>

          <div className="scale-strip">
            <div className="scale-item">
              <div className="scale-number">Millions</div>
              <div className="scale-label">Waivers signed through the platform</div>
              <div className="scale-note">As stated on docs.ink</div>
            </div>
            <div className="scale-item">
              <div className="scale-number">Thousands</div>
              <div className="scale-label">Businesses across the US running on DOCS.ink</div>
              <div className="scale-note">As stated on docs.ink</div>
            </div>
            <div className="scale-item">
              <div className="scale-number">4</div>
              <div className="scale-label">Surfaces shipped: waiver builder, signing, dashboard, iPad kiosk</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Context</p>
          <h2 className="section-title">A SaaS platform serving small businesses that still ran on paper.</h2>
          <div className="prose">
            <p>DOCS.ink helps small businesses replace paper waivers with digital ones. The customers are specific: tour and rental operators, water sports outfitters, kids activity venues, gyms, events and expos. Anywhere someone signs a consent form before an activity, the platform handles it.</p>
            <p>It covers the whole flow. There&apos;s a <strong>waiver builder</strong> with custom branding controls, <strong>multi-channel signing</strong> via link, QR code, or iPad kiosk, a <strong>guest management dashboard</strong> with search, filter, and download, and <strong>integrations</strong> with booking tools like Bookeo and Rezdy and marketing tools like Mailchimp.</p>
            <p>I came on as <strong>Lead Product Designer</strong> during the foundational build, on a contract. The brief was open-ended: get it from early concepts to a production-ready platform. I owned design end-to-end, had one designer working with me, and shipped alongside a small engineering team.</p>
          </div>
        </div>
      </section>

      {/* THE SCOPE PROBLEM */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">The scope problem</p>
          <h2 className="section-title">One product, three very different users.</h2>
          <div className="prose">
            <p>The tricky part of this project wasn&apos;t any single screen. It was the breadth. A complete waiver platform has to work for three users who have almost nothing in common:</p>
            <ul>
              <li><strong>Business admin</strong> creating waivers, tracking who signed what, managing documents. Usually on a desktop browser. Can handle a bit of complexity.</li>
              <li><strong>Front-desk staff</strong> running the iPad kiosk during a busy shift. No time for anything that needs explaining. The interface has to be hand-it-to-the-next-person obvious.</li>
              <li><strong>End customer</strong> signing on their phone, probably outside, probably in a hurry. They&apos;ve never used this product before and won&apos;t again.</li>
            </ul>
            <div className="pull-quote">
              &ldquo;A tour operator isn&apos;t a power user. The design had to work without any training.&rdquo;
            </div>
            <p>Designing for any one of them is manageable. Getting all three to feel like the same product, across three devices, with a small team, was the actual challenge.</p>
          </div>
        </div>
      </section>

      {/* SCOPE MAP */}
      <section className="section">
        <div className="container">
          <p className="section-eyebrow">What I shipped</p>
          <h2 className="section-title">Four surfaces, one product.</h2>
          <div className="scope-map">
            <div className="scope-item">
              <span className="scope-item-num">01</span>
              <h4>Waiver builder</h4>
              <p>Template-based editor with custom branding (logo, colors), toggleable fields, and a live preview. Built so any business owner can publish a waiver without technical help.</p>
            </div>
            <div className="scope-item">
              <span className="scope-item-num">02</span>
              <h4>Signing experience</h4>
              <p>Contactless signing via link, QR code, or kiosk. Mobile-first with large touch targets, clear progress, and a signature pad designed for outdoor use.</p>
            </div>
            <div className="scope-item">
              <span className="scope-item-num">03</span>
              <h4>Guest management</h4>
              <p>Dashboard with at-a-glance metrics, signed waiver feed, real-time notifications, and search, filter, and download for every document. Encrypted storage, always backed up.</p>
            </div>
            <div className="scope-item">
              <span className="scope-item-num">04</span>
              <h4>iPad kiosk mode</h4>
              <p>A single-purpose, auto-resetting check-in interface. Branded per business, requires no staff training, designed for the chaos of a busy front desk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SHIPPED SURFACES */}
      <section className="section">
        <div className="container">
          <div className="surfaces">
            <div className="surface">
              <div className="surface-visual surface-visual--image">
                <Image
                  src="/images/docsink/docsink-surface-builder.webp"
                  alt="DOCS.ink waiver builder — two-panel editor with section list and live preview"
                  fill
                  className="surface-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span className="surface-label">Waiver Builder — Web</span>
              <h3>Build a waiver in minutes, not meetings.</h3>
              <p>Templates by industry, custom branding, toggleable sections, and a live preview so admins see exactly what their customers will sign before it goes live.</p>
            </div>

            <div className="surface">
              <div className="surface-visual surface-visual--image">
                <Image
                  src="/images/docsink/docsink-surface-signing.jpg"
                  alt="DOCS.ink mobile signing experience — signature pad and document flow on iPhone"
                  fill
                  className="surface-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span className="surface-label">Signing Experience — Mobile</span>
              <h3>Contactless signing that works on any phone, outdoors.</h3>
              <p>Via link, QR code, or kiosk. The customer never downloads anything. Mobile-first, with a progress indicator, a full-screen signature pad, and a type-to-sign option for anyone who needs it.</p>
            </div>

            <div className="surface">
              <div className="surface-visual surface-visual--image">
                <Image
                  src="/images/docsink/docsink-surface-dashboard.png"
                  alt="DOCS.ink business dashboard showing waiver metrics and recent activity"
                  fill
                  className="surface-img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span className="surface-label">Business Dashboard — Web</span>
              <h3>Guest management for people in a hurry.</h3>
              <p>At-a-glance metrics, real-time notifications, a signed waiver feed with search and filter, and one-click download. Built for a gym owner checking in between clients, not a data analyst with a dedicated screen.</p>
            </div>

            <div className="surface">
              <div className="surface-visual">
                <div className="surface-kiosk" aria-hidden="true">
                  <div className="logo" /><div className="welcome" />
                  <div className="sub" /><div className="btn" />
                </div>
              </div>
              <span className="surface-label">Kiosk Mode — iPad</span>
              <h3>Training-free front desk.</h3>
              <p>A single-purpose iPad interface for in-person check-ins. Branded per business, auto-resets after each customer, and designed to survive being handed between three people in ten minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Approach</p>
          <h2 className="section-title">How I scoped the work as a lead.</h2>
          <div className="prose">
            <p>Contract work is different from a full-time role in one real way: you have a deadline for everything, including yourself. Whatever I built had to be shippable, documented, and easy for the team to keep running after I left.</p>
          </div>

          <div className="approach-grid" style={{ marginTop: '2.5rem' }}>
            <div className="approach-card">
              <span className="approach-card-num">01</span>
              <h3>Design system before features.</h3>
              <p>I put time into a component library and token system before we built too many screens. It felt slow at first. But once it was in place, every feature after came together faster and the handoff was cleaner.</p>
            </div>
            <div className="approach-card">
              <span className="approach-card-num">02</span>
              <h3>Not everything needs to be excellent.</h3>
              <p>With one designer and a fixed timeline, some things had to be great and some things could ship functional. The signing flow and waiver builder had to be great. Settings could ship good and get polished later. You can always improve a settings page. A bad signing experience costs you customers.</p>
            </div>
            <div className="approach-card">
              <span className="approach-card-num">03</span>
              <h3>Prototype before committing.</h3>
              <p>I put key flows in front of real users before anything went to engineering. Even light testing caught real problems: the signature pad was too small on most phones, the kiosk reset was too slow for busy environments. Both are easy in Figma. Neither is easy in production.</p>
            </div>
            <div className="approach-card">
              <span className="approach-card-num">04</span>
              <h3>Handoff is part of the work.</h3>
              <p>Component documentation, usage guidelines, and design-to-dev notes weren&apos;t extras I got to at the end. They were part of every deliverable. The system needed to keep working without me in the room.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="section">
        <div className="container-narrow">
          <p className="section-eyebrow">Reflection</p>
          <h2 className="section-title">What I took from this one.</h2>
          <div className="prose">
            <p>Starting from scratch sounds freeing, and in some ways it is. No legacy to fight, no inherited decisions to work around. But there&apos;s also no foundation. Every early choice becomes something the next thing has to build on, so you feel the weight of getting things right even when you&apos;re still figuring out what right looks like.</p>
            <p>Working on a product for small business owners shifted how I think about simplicity. These aren&apos;t people who read release notes or spend time learning software. They&apos;re gym owners and tour guides fitting a digital tool into an already busy day. That lens made everything harder to design and better in the end.</p>
            <p>The contract format taught me something too. Documentation and handoff aren&apos;t things you do at the end of an engagement. You do them the whole way through, because the moment you stop, someone else has to pick it up. DOCS.ink is the project where I stopped treating that as overhead and started treating it as part of the work.</p>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="next-case">
        <div className="container">
          <Link href="/claims" className="next-case-card">
            <p className="next-case-label">Next case study</p>
            <h2 className="next-case-title">From paper checks to digital claims payments.</h2>
            <p className="next-case-desc">
              Designed batch processing, real-time status tracking, and audit trails for a
              healthcare claims reconciliation system integrated with Zelis.
            </p>
            <span className="next-case-cta">
              Claims Payment case study
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
