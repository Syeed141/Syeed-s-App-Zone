import React from 'react';
import logo from '../../assets/logo.png';

const footerStyle = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');

.footer-root {
  position: relative;
  width: 100%;
  background: #0a0a0f;
  overflow: hidden;
  font-family: 'DM Sans', sans-serif;
}

/* Top border glow */
.footer-root::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #0ff 30%, #c084fc 70%, transparent 100%);
  opacity: 0.6;
}

/* Background grid */
.footer-root::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.footer-inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 32px 32px;
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr;
  gap: 48px;
}

@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 40px 24px 28px;
  }
}

/* Brand column */
.footer-brand-logo {
  width: 52px;
  margin-bottom: 14px;
  filter: drop-shadow(0 0 8px rgba(0,255,255,0.4));
}

.footer-brand-name {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: linear-gradient(90deg, #0ff, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.footer-brand-tagline {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.38);
  line-height: 1.6;
  letter-spacing: 0.01em;
  font-weight: 300;
}

.footer-divider {
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, #0ff, transparent);
  margin: 16px 0;
}

/* Column headings */
.footer-col-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #0ff;
  margin-bottom: 18px;
  opacity: 0.8;
}

/* Nav links */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.45);
  text-decoration: none;
  font-weight: 400;
  letter-spacing: 0.02em;
  transition: color 0.2s, letter-spacing 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.footer-links a::before {
  content: '›';
  color: #0ff;
  opacity: 0;
  font-size: 1rem;
  transition: opacity 0.2s, transform 0.2s;
  transform: translateX(-4px);
}

.footer-links a:hover {
  color: rgba(255,255,255,0.85);
  letter-spacing: 0.04em;
}

.footer-links a:hover::before {
  opacity: 1;
  transform: translateX(0);
}

/* Social icons */
.footer-socials {
  display: flex;
  gap: 12px;
  margin-top: 4px;
}

.footer-social-btn {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(0,255,255,0.2);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.4);
  background: rgba(0,255,255,0.04);
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;
}

.footer-social-btn:hover {
  border-color: rgba(0,255,255,0.6);
  color: #0ff;
  background: rgba(0,255,255,0.08);
  box-shadow: 0 0 12px rgba(0,255,255,0.15);
  transform: translateY(-2px);
}

/* Bottom bar */
.footer-bottom {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 32px;
  border-top: 1px solid rgba(255,255,255,0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (max-width: 600px) {
  .footer-bottom {
    flex-direction: column;
    gap: 8px;
    padding: 16px 24px;
    text-align: center;
  }
}

.footer-bottom-text {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.22);
  letter-spacing: 0.04em;
  font-weight: 300;
}

.footer-bottom-badge {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  color: rgba(0,255,255,0.35);
  text-transform: uppercase;
}
`;

if (typeof document !== 'undefined' && !document.getElementById('footer-style')) {
  const s = document.createElement('style');
  s.id = 'footer-style';
  s.textContent = footerStyle;
  document.head.appendChild(s);
}

const Footer = () => {
  return (
    <footer className="footer-root">

      <div className="footer-inner">

        {/* Brand */}
        <aside>
          <img className="footer-brand-logo" src={logo} alt="logo" />
          <div className="footer-brand-name">Syeed's App ZoNe</div>
          <div className="footer-divider" />
          <p className="footer-brand-tagline">
            Your most trusted site<br />
            Providing reliable tech since 2026
          </p>
        </aside>

        {/* Pages */}
        <nav>
          <div className="footer-col-title">Navigate</div>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/app">App</a></li>
            <li><a href="/installation">Installation</a></li>
          </ul>
        </nav>

        {/* Social */}
        <nav>
          <div className="footer-col-title">Connect</div>
          <div className="footer-socials">
            {/* Twitter / X */}
            <a href="#" className="footer-social-btn" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" className="footer-social-btn" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="footer-social-btn" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a href="#" className="footer-social-btn" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </nav>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="footer-bottom-text">© 2026 Syeed's App ZoNe · All rights reserved</span>
        <span className="footer-bottom-badge">⬡ sys.online</span>
      </div>

    </footer>
  );
};

export default Footer;