export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer-lead">Have a complex problem? Let&apos;s talk.</h2>
        <a href="mailto:ghinabin@gmail.com" className="footer-email">
          ghinabin@gmail.com
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
          </svg>
        </a>

        <div className="footer-grid">
          <div className="footer-socials">
            <a href="https://linkedin.com/in/nabin-ghimire" className="footer-social" target="_blank" rel="noopener noreferrer">
              LinkedIn
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <a href="https://wa.me/9779841014781" className="footer-social" target="_blank" rel="noopener noreferrer">
              WhatsApp
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <a href="/Nabin_Ghimire_Resume_2026.pdf" className="footer-social" download="Nabin_Ghimire_Resume_2026.pdf">
              Resume (PDF)
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
          <div className="footer-meta">
            <span>© 2026 Nabin Ghimire</span>
            <span>Designed &amp; built by me — as it should be.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
