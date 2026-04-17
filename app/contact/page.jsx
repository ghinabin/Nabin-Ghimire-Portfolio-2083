import '@/assets/css/pages/contact.css'

export const metadata = {
  title: 'Contact — Nabin Ghimire',
  description:
    'Get in touch with Nabin Ghimire. Email, LinkedIn, or WhatsApp — whichever works for you.',
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
)

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <p className="contact-eyebrow">Contact</p>
          <h1 className="contact-headline">
            Let&apos;s <em>talk</em>.
          </h1>
          <p className="contact-lead">
            Whether it&apos;s a senior design role, a contract engagement, or a question about
            something you read on this site — I&apos;d like to hear from you.
          </p>
        </div>
      </section>

      {/* PRIMARY EMAIL */}
      <section className="primary-contact">
        <div className="container">
          <div className="primary-contact-card">
            <p className="primary-contact-label">Email is best</p>
            <a href="mailto:ghinabin@gmail.com" className="primary-email">
              ghinabin@gmail.com
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <p className="primary-contact-note">
              A short email with a bit of context beats a form, and you&apos;ll get a considered
              reply. I read everything, and I respond within two or three working days — usually faster.
            </p>
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="channels">
        <div className="container">
          <div className="channels-header">
            <p className="section-eyebrow">Other ways to reach me</p>
            <h2 className="section-title">Three channels, whichever fits you.</h2>
          </div>

          <div className="channels-grid">

            {/* LINKEDIN */}
            <div className="channel">
              <div className="channel-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <p className="channel-label">Professional network</p>
              <h3 className="channel-name">LinkedIn</h3>
              <p className="channel-desc">
                Best for recruiters and for a quick read of my experience at a glance.
                Connection requests welcome with a short note.
              </p>
              <a href="https://linkedin.com/in/nabin-ghimire" className="channel-link" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/nabin-ghimire
                <ArrowIcon />
              </a>
            </div>

            {/* EMAIL */}
            <div className="channel">
              <div className="channel-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <p className="channel-label">Direct, considered</p>
              <h3 className="channel-name">Email</h3>
              <p className="channel-desc">
                The best way to reach me for anything that needs more than a sentence —
                roles, collaborations, questions about the work.
              </p>
              <a href="mailto:ghinabin@gmail.com" className="channel-link">
                ghinabin@gmail.com
                <ArrowIcon />
              </a>
            </div>

            {/* WHATSAPP */}
            <div className="channel">
              <div className="channel-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <p className="channel-label">Quick, informal</p>
              <h3 className="channel-name">WhatsApp</h3>
              <p className="channel-desc">
                Fine for quick questions or a short intro. For anything substantive —
                briefs, role details, portfolio feedback — email is still better.
              </p>
              <a href="https://wa.me/9779841014781" className="channel-link" target="_blank" rel="noopener noreferrer">
                +977 9841 014 781
                <ArrowIcon />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* GOOD TO KNOW */}
      <section className="good-to-know">
        <div className="container-narrow">
          <p className="section-eyebrow">Good to know</p>
          <h2 className="section-title">A few things before you write.</h2>

          <div className="gtk-grid">

            <div className="gtk-item">
              <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                Where I am, when I&apos;m there
              </h3>
              <p>
                Kathmandu, Nepal — UTC+5:45. I work full working days with US and European teams
                regularly, so timezone is rarely the blocker people expect it to be.
              </p>
            </div>

            <div className="gtk-item">
              <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                What I&apos;m open to
              </h3>
              <p>
                Senior and lead product design roles at product-led companies — healthcare is my
                depth, but I work across domains. Also open to select contract engagements with a
                clear scope and timeline.
              </p>
            </div>

            <div className="gtk-item">
              <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                What makes a good message
              </h3>
              <p>
                A sentence on who you are, a sentence on what you&apos;re reaching out about, and
                a link or two for context. That&apos;s plenty. I&apos;d rather have four clear
                sentences than four paragraphs.
              </p>
            </div>

            <div className="gtk-item">
              <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                What I&apos;m not looking for
              </h3>
              <p>
                Cold pitches for agency services, crypto or gambling products, and unpaid
                &ldquo;test projects.&rdquo; I&apos;m happy to talk through a real brief, walk
                through my process, or have a conversation — not to audition for free.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* QUIET CLOSE */}
      <section className="contact-close">
        <div className="container-narrow">
          <p>Looking forward to it.</p>
        </div>
      </section>
    </>
  )
}
