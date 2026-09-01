import { useState } from 'react';

function CheckPill({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[0.875rem] text-[#3d5a6c]">
      <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#3CB371] text-white">
        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" aria-hidden="true">
          <path d="M2.2 6.2 4.8 8.7 9.8 3.3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {children}
    </span>
  );
}

export default function NotifyForm({ compact = false }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    setError('');
    setStatus('success');
    try {
      localStorage.setItem('storemate-notify', value);
    } catch {
      /* ignore */
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-[#d7e6ef] bg-white p-4">
        <p className="font-heading text-sm font-bold text-storemate-navy">You’re on the list.</p>
        <p className="mt-1 text-sm text-[#5b7384]">We’ll email you when StoreMate launches. No spam.</p>
      </div>
    );
  }

  return (
    <div className={compact ? '' : 'rounded-2xl border border-[#d7e6ef] bg-white p-4 sm:p-5'}>
      <p className="font-heading text-[1rem] font-bold text-storemate-navy">
        Be the first to know when we launch
      </p>
      <form onSubmit={onSubmit} className="mt-3 flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor={compact ? 'notify-email-cta' : 'notify-email-hero'}>
          Email address
        </label>
        <input
          id={compact ? 'notify-email-cta' : 'notify-email-hero'}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="h-11 flex-1 rounded-lg border border-[#cfdce6] px-3.5 text-sm text-storemate-navy placeholder:text-[#8aa0ae] outline-none transition focus:border-storemate-blue focus:ring-2 focus:ring-storemate-blue/25"
          autoComplete="email"
        />
        <button
          type="submit"
          className="btn-primary"
        >
          Notify me
        </button>
      </form>
      {error ? <p className="mt-2 text-xs text-red-600">{error}</p> : null}
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
        <CheckPill>No spam.</CheckPill>
        <CheckPill>Unsubscribe anytime.</CheckPill>
      </div>
    </div>
  );
}
