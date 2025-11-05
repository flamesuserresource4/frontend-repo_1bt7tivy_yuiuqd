import React from 'react';
import Hero from './Hero';
import Features from './Features';
import CTA from './CTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <CTA />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">Why teams choose Iterable</h3>
              <p className="mt-3 text-slate-600">Powerful automation, delightful UX, and analytics you can act on. Built for scale and speed.</p>
              <ul className="mt-6 space-y-2 text-slate-700 text-sm list-disc list-inside">
                <li>Scale to millions of messages per hour</li>
                <li>Event-based triggers and smart batching</li>
                <li>SDKs and APIs to integrate with your stack</li>
                <li>Security-first with SSO and role-based access</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <h4 className="font-semibold text-slate-900">A glance at the dashboard</h4>
              <p className="mt-2 text-sm text-slate-600">Preview metrics, recent campaigns, and top segments. Explore more in the live dashboard.</p>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-20 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 border border-slate-200" />
                ))}
              </div>
              <a href="#/dashboard" className="mt-6 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-700">Open dashboard →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
