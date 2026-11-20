import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  activeSection: string;
}

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
];

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#FAF7F9]/90 dark:bg-[#08040C]/88 backdrop-blur-md border-b border-[#E5D5DF] dark:border-[#2E1938]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#hero"
          className="font-display text-lg font-bold tracking-tight text-[#1D1119] dark:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899] rounded-md px-1"
        >
          Mukta Kolhe
        </a>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899] rounded ${
                  isActive
                    ? 'text-[#9D174D] dark:text-[#F472B6]'
                    : 'text-[#5C4655] dark:text-[#C4AEBE] hover:text-[#1D1119] dark:hover:text-white'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-[#9D174D] to-[#EC4899] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Theme Toggle + Primary Action CTA + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#E5D5DF] dark:border-[#341E3E] bg-white/80 dark:bg-[#140B1B] text-[#4A2E41] dark:text-[#F4D9EA] hover:border-[#EC4899]/60 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#831843] via-[#9D174D] to-[#DB2777] hover:brightness-110 transition-all duration-150 whitespace-nowrap shrink-0 shadow-sm shadow-[#9D174D]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]"
          >
            Let&apos;s Connect
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden w-11 h-11 rounded-lg flex items-center justify-center border border-[#E5D5DF] dark:border-[#341E3E] bg-white/80 dark:bg-[#140B1B] text-[#1D1119] dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5D5DF] dark:border-[#2E1938] bg-[#FAF7F9] dark:bg-[#0D0613] px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleLinkClick}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#9D174D]/12 text-[#9D174D] dark:text-[#F472B6]'
                    : 'text-[#4A2E41] dark:text-[#DFC8D7] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block w-full text-center px-4 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#831843] via-[#9D174D] to-[#DB2777]"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
