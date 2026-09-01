import { Link } from 'react-router-dom';

export default function ComingSoon({ title = 'This page' }) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-heading text-3xl font-extrabold text-storemate-navy">{title}</h1>
      <p className="mt-3 text-[#5b7384]">This page is currently under development and will be available soon.</p>
      <Link
        to="/"
        className="btn-primary mt-8"
      >
        Go Home
      </Link>
    </main>
  );
}
