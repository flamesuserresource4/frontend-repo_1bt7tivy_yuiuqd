import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = `#${href}`;
  };

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16 lg:pt-24">
      <div className="absolute inset-0">
        <div className="h-[560px] sm:h-[640px] lg:h-[720px]">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pt-56 sm:pt-64 lg:pt-72">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-medium shadow">
            Modern Email Marketing Platform
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Iterable — email marketing, automation, and analytics in one place
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-700">
            Build journeys, send smarter campaigns, and grow revenue with an intuitive dashboard.
            Fast setup, real-time insights, and enterprise-grade reliability.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#/dashboard"
              onClick={(e) => go(e, '/dashboard')}
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-white font-semibold shadow hover:bg-slate-800"
            >
              Try the Dashboard
            </a>
            <a
              href="#/login"
              onClick={(e) => go(e, '/login')}
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-slate-900 font-semibold border border-slate-300 hover:border-slate-400"
            >
              Iterable Login
            </a>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Keywords: iterable, iterable login, iterable panel, iterable dashboard
          </p>
        </div>
      </div>
    </section>
  );
}
