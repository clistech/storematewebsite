import { Link } from 'react-router-dom';
import NotifyForm from '../components/forms/NotifyForm';

const BENEFITS = [
  {
    title: 'For your home',
    text: 'Pantry, fridge, freezer, garage, home office and more.',
  },
  {
    title: 'Save money',
    text: 'Avoid buying duplicates and make the most of what you already have.',
  },
  {
    title: 'Reduce waste',
    text: 'Track expiry dates and use items before they go bad.',
  },
  {
    title: '100% private',
    text: 'Your data is yours. Secure, private and never shared.',
  },
];

const FEATURES = [
  {
    title: 'Add with AI',
    text: 'Scan barcodes, take photos or upload receipts. Our AI captures details for you.',
  },
  {
    title: 'Receipt & Delivery Capture',
    text: 'Extract multiple products from receipts and delivery notes in seconds.',
  },
  {
    title: 'Organise your way',
    text: 'Create unlimited inventories and storages. Your system, your structure.',
  },
  {
    title: 'Never run out',
    text: 'Set minimum stock and get alerts. Shopping lists are created automatically.',
  },
  {
    title: 'Reports & Insights',
    text: 'See what you have, what moves, what’s expiring and what it costs.',
  },
];

const BUSINESS_POINTS = [
  'Check-in / Check-out with project tracking',
  'Multi-user access & roles',
  'Inventory transfers between locations',
  'Advanced reports & exports',
];

export default function Home() {
  return (
    <main className="bg-white text-storemate-navy">
      <Hero />
      <Benefits />
      <Features />
      <Business />
      <FinalCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-10 pt-6 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-14 lg:pt-8">
      <div className="max-w-xl">
        <span className="inline-flex rounded-full bg-[#E7F3F9] px-3.5 py-1 text-[1rem] font-medium text-storemate-blue">
          Smart inventory for everyday life
        </span>
        <h1 className="font-heading mt-5 text-[2.35rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.35rem]">
          Stay organised.
          <br />
          Save money.
          <br />
          <span className="text-storemate-blue">Reduce waste.</span>
        </h1>
        <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-[#5b7384]">
          StoreMate helps you organise your stock, track what you have, know when it runs low or expires, and never run out of what matters.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <StoreBadge store="apple" />
          <StoreBadge store="google" />
        </div>
        <div className="mt-6 max-w-md">
          <NotifyForm />
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <PhoneMini size="hero" />
      </div>
    </section>
  );
}

function StoreBadge({ store }) {
  const isApple = store === 'apple';
  return (
    <div
      className="inline-flex min-w-[168px] items-center gap-2.5 rounded-lg bg-black px-3.5 py-2 text-white"
      aria-label={isApple ? 'Coming soon to App Store' : 'Coming soon to Google Play'}
    >
      {isApple ? (
        <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden="true">
          <path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-3 .9-3.7 2.3-1.6 2.8-.4 6.9 1.1 9.2.8 1.1 1.7 2.3 2.9 2.3 1.1 0 1.6-.7 3-.7s1.8.7 3 .7 2-.1 2.9-2.3c1-.1.9-1.1 1.7-2.2-2.2-.8-2.6-3-2.6-3.1ZM14.7 6.8c.6-.8 1.1-1.8.9-2.9-1 .04-2.1.7-2.8 1.5-.6.7-1.2 1.8-.9 2.8 1.1.1 2.1-.6 2.8-1.4Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
          <path d="M3.5 3.6v16.8l9.3-8.4L3.5 3.6Z" fill="#EA4335" />
          <path d="m12.8 12 2.7-2.5 4.6 2.6c.6.4.6 1.2 0 1.6l-4.6 2.6L12.8 12Z" fill="#FBBC04" />
          <path d="M3.5 20.4 12.8 12l2.7 2.4-12 6Z" fill="#34A853" />
          <path d="M3.5 3.6 15.5 9.6 12.8 12 3.5 3.6Z" fill="#4285F4" />
        </svg>
      )}
      <span className="leading-tight">
        <span className="block text-[0.8rem] leading-tight text-[#CCCCCC]">Coming soon to</span>
        <span className="block text-[1rem] font-bold leading-tight text-white">{isApple ? 'App Store' : 'Google Play'}</span>
      </span>
    </div>
  );
}

function Benefits() {
  return (
    <section className="border-t border-[#edf2f6] py-12 sm:py-16">
      <div className="mx-auto grid max-w-[1400px] items-start gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {BENEFITS.map((item) => (
            <div key={item.title} className="text-center sm:text-left">
              <h3 className="font-heading text-[1rem] font-bold">{item.title}</h3>
              <p className="mt-1 text-[0.875rem] leading-relaxed text-[#5b7384]">{item.text}</p>
            </div>
          ))}
        </div>
        <aside className="rounded-2xl bg-[#EAF4F9] p-4">
          {/* <p className="text-[12px] font-semibold text-storemate-navy">From logo to app</p> */}
          <p className="font-heading mt-3 text-[x-large] font-extrabold tracking-tight">
            <span className="text-storemate-navy">Store</span>
            <span className="text-storemate-blue">Mate</span>
          </p>
          <p className="mt-3 text-[12px] leading-relaxed text-[#5b7384]">
            We’re turning the StoreMate logo into an app that helps you stay in control of what you have.
          </p>
        </aside>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="pb-8 sm:pb-12">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center gap-4">
          <span className="hidden h-px flex-1 bg-[#e5edf2] sm:block" />
          <h2 className="font-heading text-center text-2xl font-extrabold sm:text-[28px]">
            Powerful features that make a difference
          </h2>
          <span className="hidden h-px flex-1 bg-[#e5edf2] sm:block" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col rounded-2xl border border-[#e5edf2] bg-white p-5 shadow-[0_8px_24px_rgba(16,52,76,0.04)]"
            >
              <h3 className="font-heading text-[1rem] font-bold">{feature.title}</h3>
              <p className="mt-2 flex-1 text-[0.875rem] leading-relaxed text-[#5b7384]">{feature.text}</p>
              <Link to="/features" className="mt-4 text-[0.875rem] font-semibold text-storemate-blue hover:text-storemate-navy">
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Business() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 rounded-[28px] bg-[#F7F0DC] px-6 py-8 sm:px-8 lg:grid-cols-[0.9fr_1fr_1.1fr] lg:px-10 lg:py-10">
        <div>
          <h2 className="font-heading text-2xl font-extrabold">For Businesses & Teams</h2>
          <p className="mt-3 text-[1rem] leading-relaxed text-[#5b7384]">
            Collaborate with your team, track stock across locations and get powerful reporting.
          </p>
          <Link
            to="/for-business"
            className="btn-primary mt-5"
          >
            Explore Business features →
          </Link>
        </div>
        <ul className="space-y-3">
          {BUSINESS_POINTS.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm font-medium">
              <span className="mt-0.5 inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#3CB371] text-white">
                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" aria-hidden="true">
                  <path d="M2.2 6.2 4.8 8.7 9.8 3.3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {point}
            </li>
          ))}
        </ul>
        <BusinessPreview />
      </div>
    </section>
  );
}

function BusinessPreview() {
  const rows = [
    ['Head Office', '842', '3', '5'],
    ['Warehouse', '1,104', '8', '2'],
    ['Retail Store', '416', '4', '9'],
  ];
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_16px_40px_rgba(16,52,76,0.08)]">
      <div className="grid grid-cols-[1.2fr_0.8fr] gap-4">
        <div>
          <p className="text-[12px] font-bold">Inventories</p>
          <table className="mt-2 w-full text-left text-[10px]">
            <thead className="text-[#8aa0ae]">
              <tr>
                <th className="pb-1 font-medium">Name</th>
                <th className="pb-1 font-medium">Items</th>
                <th className="pb-1 font-medium text-[#D32F2F]">Low</th>
                <th className="pb-1 font-medium">Soon</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]} className="border-t border-[#edf2f6]">
                  {row.map((cell) => (
                    <td key={cell} className="py-1.5 font-medium">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-xl bg-[#F7FBFD] p-3">
          <p className="text-[10px] text-[#8aa0ae]">Stock Value</p>
          <p className="font-heading text-lg font-extrabold">CHF 12,540</p>
          <svg viewBox="0 0 120 48" className="mt-2 h-12 w-full" aria-hidden="true">
            <path d="M4 36 28 28 52 31 76 16 100 20 116 8" fill="none" stroke="#5094BC" strokeWidth="3" strokeLinecap="round" />
            <path d="M4 36 28 28 52 31 76 16 100 20 116 8V48H4Z" fill="url(#stockFill)" />
            <defs>
              <linearGradient id="stockFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5094BC" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#5094BC" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <p className="mt-1 flex justify-between text-[8px] text-[#8aa0ae]">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="grid items-center gap-8 rounded-[28px] bg-[#EAF3F8] px-6 py-8 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-10">
        <div className="flex items-center gap-5">
          <PhoneMini />
          <div>
            <h2 className="font-heading text-2xl font-extrabold leading-tight sm:text-[28px]">
              Take control of your stock.
              <br />
              Anywhere. Anytime.
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {['Works offline', 'Real-time sync', 'Available on iOS and Android'].map((item) => (
                <li key={item} className="flex items-center gap-2 font-medium">
                  <svg viewBox="0 0 16 16" className="h-4 w-4 text-storemate-blue" aria-hidden="true">
                    <path d="M3 8.2 6.2 11.4 13 4.4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <NotifyForm compact />
      </div>
    </section>
  );
}

function PhoneMini({ size = 'mini' }) {
  const isHero = size === 'hero';

  return (
    <div
      className={
        isHero
          ? 'h-[380px] w-[200px] sm:h-[420px] sm:w-[220px]'
          : 'relative hidden h-32 w-[88px] shrink-0 sm:block'
      }
    >
      <div
        className={
          isHero
            ? 'flex h-full flex-col rounded-[2rem] border-[10px] border-[#111827] bg-white'
            : 'flex h-full flex-col rounded-[1.4rem] border-[6px] border-[#111827] bg-white'
        }
      >
        <div className={`mx-auto rounded-full bg-black ${isHero ? 'mt-3 h-3.5 w-16' : 'mt-1.5 h-2 w-8'}`} />
        <div className="flex flex-1 items-center justify-center">
          <span
            className={`font-heading font-extrabold tracking-tight ${
              isHero ? 'text-[x-large]' : 'px-1 text-center text-[9px] leading-tight'
            }`}
          >
            <span className="text-storemate-navy">Store</span>
            <span className="text-storemate-blue">Mate</span>
          </span>
        </div>
      </div>
    </div>
  );
}
