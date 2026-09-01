import { Link } from 'react-router-dom';
import headerLogo from '/src/assets/header_logo2.png';


const PRODUCT = [
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Features', path: '/features' },
  { name: 'Catalogues', path: '/catalogues' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'FAQ & Support', path: '/faq-support' },
];

const COMPANY = [
  { name: 'About Us', path: '/contact' },
  { name: 'Contact', path: '/contact' },
  { name: 'NaioSoft GmbH', href: 'https://www.naiosoft.com' },
];

const LEGAL = [
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms & Conditions', path: '/terms' },
  { name: 'Legal Notice', path: '/imprint' },
];

const LANGUAGES = [
  { code: 'en', label: 'English', active: true },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'it', label: 'Italiano' },
  { code: 'es', label: 'Español' },
];

function SocialIcon({ label, children }) {
  return (
    <a
      href={`#${label.toLowerCase()}`}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/35 text-white transition hover:border-white hover:bg-white/10"
    >
      {children}
    </a>
  );
}

export default function GlobalFooter() {
  return (
    <footer className="bg-[#10344C] text-white">
      <div className="mx-auto max-w-[1400px] px-4 pt-14 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 space-y-4 md:col-span-3 lg:col-span-1">
            <Link
              to="/"
              className="shrink-0"
              aria-label="StoreMate home"
            >
              <img
                src={headerLogo}
                alt="StoreMate"
                className="h-9 w-auto object-contain sm:h-10"
              />
            </Link>
            <p className="font-heading text-[1rem] font-bold">Organise. Save. Reduce waste.</p>
            <p className="text-sm text-white/75">Coming soon for iOS and Android.</p>
            <div className="flex items-center gap-2.5 pt-1">
              <SocialIcon label="Facebook">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M14.5 8.5V6.8c0-.7.5-1.3 1.5-1.3h1V3h-2.1C12.4 3 11 4.6 11 6.7v1.8H9v2.6h2V21h3.5v-9.9h2.3l.3-2.6h-2.6Z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Instagram">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
                  <circle cx="12" cy="12" r="3.4" />
                  <circle cx="16.7" cy="7.3" r=".8" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>
              <SocialIcon label="YouTube">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M21.6 7.8a2.7 2.7 0 0 0-1.9-1.9C18 5.5 12 5.5 12 5.5s-6 0-7.7.4A2.7 2.7 0 0 0 2.4 7.8 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.2 2.7 2.7 0 0 0 1.9 1.9c1.7.4 7.7.4 7.7.4s6 0 7.7-.4a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.2ZM10.2 15.2V8.8L15.8 12l-5.6 3.2Z" />
                </svg>
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M7.4 9.2H4.7V19h2.7V9.2ZM6 4.6A1.6 1.6 0 1 0 6 7.8 1.6 1.6 0 0 0 6 4.6ZM19.3 19h-2.7v-4.8c0-1.3-.5-2.1-1.6-2.1-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V19h-2.7s.04-8.6 0-9.8h2.7v1.6c.4-.6 1.2-1.8 3-1.8 2.2 0 3.8 1.4 3.8 4.5V19Z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          <FooterCol title="Product" links={PRODUCT} />
          <FooterCol title="Company" links={COMPANY} />
          <FooterCol title="Legal" links={LEGAL} />

          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-bold">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
              </svg>
              English
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              {LANGUAGES.map((lang) => (
                <li key={lang.code}>
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 transition hover:text-white ${lang.active ? 'font-semibold text-white' : ''
                      }`}
                  >
                    {lang.active ? <span className="h-1.5 w-1.5 rounded-full bg-white" /> : <span className="w-1.5" />}
                    {lang.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/65">
          © 2025 NaioSoft GmbH. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold">{title}</h3>
      <ul className="space-y-2 text-sm text-white/80">
        {links.map((link) => (
          <li key={link.name}>
            {link.href ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                {link.name}
              </a>
            ) : (
              <Link to={link.path} className="transition hover:text-white">
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
