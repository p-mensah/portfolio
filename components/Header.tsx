import React, { useState } from 'react';
import { PERSONAL_INFO, LogoIcon } from '../constants';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <LogoIcon className="h-8 w-8" />
            <span className="text-white font-bold text-xl hidden sm:inline">{PERSONAL_INFO.name.split(' ')[0]}</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-base font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'text-sky-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: Button and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
             <a
              href="#contact"
              className="btn-glow px-6 py-2 rounded-full text-slate-100 font-medium text-center hidden sm:block"
            >
              <span className="text-glow text-sm">Get in Touch</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-sm">
          <ul className="flex flex-col items-center gap-6 py-8">
             {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium text-lg transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'text-sky-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
             <li>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-glow px-8 py-3 rounded-full text-slate-100 font-medium text-center"
                >
                  <span className="text-glow">Get in Touch</span>
                </a>
             </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;