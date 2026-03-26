import React from 'react';
import { NavLink, Link } from 'react-router';
import logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa6";

// Inject keyframes once
const styleTag = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Share+Tech+Mono&display=swap');

@keyframes glitch-1 {
  0%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
  10%       { clip-path: inset(10% 0 60% 0); transform: translate(-3px, 1px); }
  20%       { clip-path: inset(50% 0 20% 0); transform: translate(3px, -1px); }
  30%       { clip-path: inset(80% 0 5%  0); transform: translate(-2px, 0); }
  40%       { clip-path: inset(0 0 100% 0); transform: translate(0); }
}

@keyframes glitch-2 {
  0%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
  15%       { clip-path: inset(30% 0 40% 0); transform: translate(4px, 1px); }
  25%       { clip-path: inset(60% 0 10% 0); transform: translate(-3px, -1px); }
  35%       { clip-path: inset(5%  0 80% 0); transform: translate(2px, 0); }
  45%       { clip-path: inset(0 0 100% 0); transform: translate(0); }
}

@keyframes cyber-flicker {
  0%, 95%, 100% { opacity: 1; }
  96%            { opacity: 0.2; }
  97%            { opacity: 1; }
  98%            { opacity: 0.5; }
  99%            { opacity: 1; }
}

@keyframes neon-pulse {
  0%, 100% { filter: drop-shadow(0 0 6px #f0f) drop-shadow(0 0 12px #f0f) drop-shadow(0 0 2px #fff); }
  50%       { filter: drop-shadow(0 0 10px #0ff) drop-shadow(0 0 20px #0ff) drop-shadow(0 0 2px #fff); }
}

@keyframes scan-move {
  0%   { top: -10%; }
  100% { top: 110%; }
}

.app-name-wrapper {
  position: relative;
  padding: 4px 10px 4px 10px;
  border-top: 1px solid rgba(0,255,255,0.4);
  border-bottom: 1px solid rgba(255,0,255,0.4);
  background: linear-gradient(135deg, rgba(0,255,255,0.04) 0%, rgba(255,0,255,0.04) 100%);
}

/* Corner accents */
.app-name-wrapper::before,
.app-name-wrapper::after {
  content: '';
  position: absolute;
  width: 6px; height: 6px;
}
.app-name-wrapper::before {
  top: -1px; left: -1px;
  border-top: 2px solid #0ff;
  border-left: 2px solid #0ff;
}
.app-name-wrapper::after {
  bottom: -1px; right: -1px;
  border-bottom: 2px solid #f0f;
  border-right: 2px solid #f0f;
}

.app-name-badge {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  line-height: 1;
  animation: cyber-flicker 7s infinite;
}

.app-name-badge .line-top {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.52rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #0ff;
  opacity: 0.75;
  margin-bottom: 1px;
}

/* Main text + glitch layers */
.app-name-badge .line-main-wrap {
  position: relative;
  display: inline-block;
}

.app-name-badge .line-main {
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
  font-size: 1.3rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: linear-gradient(90deg, #0ff 0%, #fff 40%, #f0f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: neon-pulse 3s ease-in-out infinite;
  position: relative;
  z-index: 1;
}

/* Cyan glitch layer */
.app-name-badge .line-main-wrap::before {
  content: attr(data-text);
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
  font-size: 1.3rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  position: absolute;
  left: 0; top: 0;
  color: #0ff;
  opacity: 0.7;
  animation: glitch-1 5s infinite;
  z-index: 2;
}

/* Magenta glitch layer */
.app-name-badge .line-main-wrap::after {
  content: attr(data-text);
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
  font-size: 1.3rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  position: absolute;
  left: 0; top: 0;
  color: #f0f;
  opacity: 0.7;
  animation: glitch-2 5s infinite;
  z-index: 2;
}

.app-name-badge .line-bottom {
  font-family: 'Share Tech Mono', monospace;
  font-size: 0.48rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #f0f;
  opacity: 0.65;
  margin-top: 2px;
}

/* Moving scanline */
.app-name-badge .scanline {
  position: absolute;
  left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(0,255,255,0.3), transparent);
  animation: scan-move 2.5s linear infinite;
  pointer-events: none;
  z-index: 10;
}
`;

if (typeof document !== 'undefined' && !document.getElementById('app-name-style')) {
  const s = document.createElement('style');
  s.id = 'app-name-style';
  s.textContent = styleTag;
  document.head.appendChild(s);
}

const NavBar = () => {

  const linkClass = ({ isActive }) =>
    `m-2 font-semibold ${isActive
      ? 'text-purple-600'
      : 'bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 bg-clip-text'
    }`;

  const links = <>
    <NavLink to="/" className={linkClass}>
      <li>Home</li>
    </NavLink>
    <NavLink to="/app" className={linkClass}>
      <li>App</li>
    </NavLink>
    <NavLink to="/installation" className={linkClass}>
      <li>Installation</li>
    </NavLink>
  </>

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        <Link to="/" className="flex items-center gap-2">
          <img className='w-8' src={logo} alt="logo" />

          {/* ⚡ Cyberpunk app name */}
          <div className="app-name-wrapper">
            <div className="app-name-badge">
              <span className="scanline" />
              
              <div className="line-main-wrap" data-text="Syeed's App ZoNe">
                <span className="line-main">Syeed's App ZoNe</span>
              </div>
              
            </div>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 btn text-white px-3 sm:px-4"
          style={{ backgroundImage: `linear-gradient(to bottom right, #6D28D9, #7C3AED, #9333EA)` }}
        >
          <FaGithub />
          <span className="hidden sm:inline">Contribution</span>
        </a>
      </div>

    </div>
  );
};

export default NavBar;