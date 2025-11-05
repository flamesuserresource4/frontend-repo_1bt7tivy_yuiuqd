import React from 'react';

const FEATURES = [
  {
    title: 'Visual journeys',
    desc: 'Design multi-step email automation with drag-and-drop precision and real-time testing.',
  },
  {
    title: 'Audience intelligence',
    desc: 'Segment by behavior, lifecycle stage, and predicted value to deliver relevance at scale.',
  },
  {
    title: 'Deliverability built-in',
    desc: 'Reputation monitoring, warm-up guidance, and tools to reach the inbox reliably.',
  },
  {
    title: 'Insights & reporting',
    desc: 'Track KPIs end-to-end with dashboards that surface performance and growth levers.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything you need to scale your email program</h2>
          <p className="mt-3 text-slate-600">Purpose-built for growth teams who care about velocity, reliability, and results.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
