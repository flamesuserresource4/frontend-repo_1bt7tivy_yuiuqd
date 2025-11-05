import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

// Simple hash-based router to avoid extra dependencies
const useHashRoute = () => {
  const getPath = () => {
    const raw = window.location.hash.replace('#', '') || '/';
    return raw.startsWith('/') ? raw : `/${raw}`;
  };
  const [path, setPath] = useState(getPath());
  useEffect(() => {
    const onHashChange = () => setPath(getPath());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return path;
};

export default function App() {
  const path = useHashRoute();

  // Basic SEO: title + meta tags adjusted per route
  useEffect(() => {
    const baseTitle = 'Iterable — Email Marketing Platform';
    const map = {
      '/': baseTitle,
      '/login': 'Iterable Login — Secure Access',
      '/panel': 'Iterable Panel — Campaign Control',
      '/dashboard': 'Iterable Dashboard — Performance Insights',
    };
    document.title = map[path] || baseTitle;

    const ensureMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    ensureMeta(
      'description',
      'Iterable is a modern email marketing platform offering login, panel, and dashboard for automation and analytics.'
    );
    ensureMeta(
      'keywords',
      'iterable, iterable login, iterable panel, iterable dashboard, email marketing, automation, analytics'
    );
  }, [path]);

  const Page = useMemo(() => {
    if (path === '/login') return LoginPage;
    if (path === '/panel') return PanelPage;
    if (path === '/dashboard') return DashboardPage;
    return Home;
  }, [path]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <Page />
      <Footer />
    </div>
  );
}

function Home() {
  return <HomePage />;
}

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    window.location.hash = '#/dashboard';
  };
  return (
    <main className="flex-1">
      <section className="py-16">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight">Iterable Login</h1>
          <p className="mt-2 text-slate-600 text-sm">Access your account to manage campaigns and view your dashboard.</p>
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-slate-900 text-white font-semibold px-4 py-2 hover:bg-slate-800"
            >
              Sign in
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function PanelPage() {
  const items = [
    { name: 'Welcome Series', status: 'Running', sends: '12,400/day' },
    { name: 'Cart Abandon', status: 'Paused', sends: '—' },
    { name: 'Weekly Newsletter', status: 'Scheduled', sends: '48,900' },
  ];
  return (
    <main className="flex-1">
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight">Iterable Panel</h1>
          <p className="mt-2 text-slate-600 text-sm">Manage campaigns, toggles, and delivery settings in one place.</p>
          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">Campaign</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600">Sends</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {items.map((c) => (
                  <tr key={c.name}>
                    <td className="px-4 py-3 text-sm font-medium">{c.name}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-slate-100 text-slate-700">{c.status}</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">{c.sends}</td>
                    <td className="px-4 py-3 text-right">
                      <a href="#/dashboard" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">View details</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

function DashboardPage() {
  const cards = [
    { label: 'Total Sends', value: '1.2M', change: '+8.4%' },
    { label: 'Open Rate', value: '38.2%', change: '+2.1%' },
    { label: 'Click Rate', value: '7.9%', change: '+0.6%' },
    { label: 'Revenue', value: '$412k', change: '+5.3%' },
  ];
  return (
    <main className="flex-1">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Iterable Dashboard</h1>
              <p className="mt-2 text-slate-600 text-sm">Monitor performance in real time and optimize your campaigns.</p>
            </div>
            <a href="#/panel" className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold hover:bg-slate-50">Go to Panel</a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <div key={c.label} className="rounded-xl border border-slate-200 p-5 bg-white">
                <div className="text-xs text-slate-500">{c.label}</div>
                <div className="mt-1 text-2xl font-bold">{c.value}</div>
                <div className="mt-2 text-xs font-medium text-emerald-600">{c.change} vs last period</div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl border border-slate-200 p-6 bg-white">
              <h3 className="font-semibold">Engagement Over Time</h3>
              <div className="mt-4 h-56 rounded-xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border border-slate-200" />
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <h3 className="font-semibold">Top Segments</h3>
              <ul className="mt-4 space-y-3">
                {['New Subscribers', 'Active Buyers', 'Churn Risk', 'VIP'].map((s) => (
                  <li key={s} className="flex items-center justify-between text-sm">
                    <span>{s}</span>
                    <span className="text-slate-500">{Math.floor(Math.random() * 35) + 15}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
