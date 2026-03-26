import React from 'react';
import { NavLink, Link } from 'react-router';
import logo from '../../assets/logo.png';
import { FaGithub } from "react-icons/fa6";

const styleTag = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800&display=swap');

.app-name-wrapper {
  position: relative;
  padding: 6px 12px;
  border: 1px solid rgba(0, 255, 255, 0.35);
  border-radius: 6px;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 255, 0.05) 0%,
    rgba(255, 0, 255, 0.05) 100%
  );
}

.app-name-wrapper::before,
.app-name-wrapper::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
}

.app-name-wrapper::before {
  top: -1px;
  left: -1px;
  border-top: 2px solid #0ff;
  border-left: 2px solid #0ff;
}

.app-name-wrapper::after {
  bottom: -1px;
  right: -1px;
  border-bottom: 2px solid #f0f;
  border-right: 2px solid #f0f;
}

.app-name-badge {
  display: inline-flex;
  align-items: center;
  line-height: 1;
}

.app-name-badge .line-main {
  font-family: 'Orbitron', sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0ff;
  text-shadow:
    0 0 4px rgba(0, 255, 255, 0.35),
    0 0 8px rgba(0, 255, 255, 0.15);
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
    isActive
      ? 'px-3 py-2 rounded-md font-semibold text-purple-700 bg-purple-100'
      : 'px-3 py-2 rounded-md font-semibold text-gray-700 hover:text-purple-700';

  const mobileLinks = (
    <>
      <li>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/app" className={linkClass}>
          App
        </NavLink>
      </li>
      <li>
        <NavLink to="/installation" className={linkClass}>
          Installation
        </NavLink>
      </li>
    </>
  );

  const desktopLinks = (
    <>
      <li>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/app" className={linkClass}>
          App
        </NavLink>
      </li>
      <li>
        <NavLink to="/installation" className={linkClass}>
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {mobileLinks}
          </ul>
        </div>

        <Link to="/" className="flex items-center gap-2">
          <img className="w-8" src={logo} alt="logo" />

          <div className="app-name-wrapper">
            <div className="app-name-badge">
              <span className="line-main">Syeed's App Zone</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {desktopLinks}
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 btn text-white px-3 sm:px-4"
          style={{
            backgroundImage: 'linear-gradient(to bottom right, #6D28D9, #7C3AED, #9333EA)',
          }}
        >
          <FaGithub />
          <span className="hidden sm:inline">Contribution</span>
        </a>
      </div>
    </div>
  );
};

export default NavBar;