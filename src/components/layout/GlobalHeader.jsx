import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV = [
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Features', path: '/features' },
  { name: 'For Business', path: '/for-business' },
  { name: 'Catalogues', path: '/catalogues' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'FAQ & Support', path: '/faq-support' },
];

export default function GlobalHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const launchState = import.meta.env.VITE_LAUNCH_STATE || 'pre-launch';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'border-gray-200/80 py-2.5 shadow-sm' : 'border-transparent py-4'
      }`}
    >
      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-heading shrink-0 text-[x-large] font-extrabold tracking-tight"
          aria-label="StoreMate home"
        >
          <span className="text-storemate-navy">Store</span>
          <span className="text-storemate-blue">Mate</span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `whitespace-nowrap text-[1rem] font-medium transition-colors ${
                  isActive ? 'text-storemate-blue' : 'text-storemate-navy/80 hover:text-storemate-blue'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex">
          {launchState === 'pre-launch' ? (
            <span className="btn-primary cursor-default">Coming soon</span>
          ) : (
            <Link to="/download" className="btn-primary">
              Try StoreMate Free
            </Link>
          )}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-storemate-navy lg:hidden"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <nav className="mx-auto max-w-[1400px] space-y-1 px-4 py-3 sm:px-6" aria-label="Mobile">
            {NAV.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-[1rem] text-storemate-navy hover:bg-gray-50"
              >
                {link.name}
              </NavLink>
            ))}
            <div className="px-3 pt-3">
              <span className="btn-primary w-full">Coming soon</span>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
