import profile from '../../data/profile.js'
import './Footer.css'

const footerLinks = {
  Navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  Connect: [
    profile.github && { label: 'GitHub', href: profile.github },
    profile.linkedin && { label: 'LinkedIn', href: profile.linkedin },
    profile.website && { label: 'Website', href: profile.website },
    { label: 'Email', href: `mailto:${profile.email}` },
  ].filter(Boolean),
}

export default function Footer() {
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          <div className="footer__brand">
            <a href="#home" className="footer__logo" onClick={e => handleNavClick(e, '#home')}>
              <span className="footer__logo-text">JP</span>
              <span className="footer__logo-dot" />
            </a>
            <p className="footer__tagline">
              DevOps &amp; Cloud Engineer building reliable,
              <br />scalable infrastructure at scale.
            </p>
            <div className="footer__socials">
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              )}
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
              {profile.website && (
                <a href={profile.website} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Website">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer__links-group">
              <h4 className="footer__links-title">{title}</h4>
              <ul className="footer__links">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer__link"
                      target={link.href.startsWith('http') || link.href.startsWith('mailto') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={e => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            &copy; {year} José Perdigão. Built with React + Vite.
          </p>
          <p className="footer__made-with">
            Crafted with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  )
}
