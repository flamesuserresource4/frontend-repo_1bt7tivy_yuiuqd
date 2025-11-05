import React from 'react';

export default function CTA() {
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = `#${href}`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">Launch your first campaign in minutes</h3>
          <p className="mt-3 text-slate-300">Get started with a guided setup, sample templates, and a sandbox dashboard to explore.</p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#/panel"
            onClick={(e) => go(e, '/panel')}
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-slate-900 font-semibold shadow hover:bg-slate-100"
          >
            Open Panel
          </a>
          <a
            href="#/login"
            onClick={(e) => go(e, '/login')}
            className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-white font-semibold hover:bg-white/10"
          >
            Iterable Login
          </a>
        </div>
      </div>
    </section>
  );
}
