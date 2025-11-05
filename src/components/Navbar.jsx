import React from 'react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Login', href: '/login' },
  { label: 'Panel', href: '/panel' },
  { label: 'Dashboard', href: '/dashboard' },
];

export default function Navbar() {
  const go = (e, href) => {
    e.preventDefault();
    window.location.hash = `#${href}`;
  };

  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#/" onClick={(e) => go(e, '/')} className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
          <span className="text-xl font-semibold tracking-tight">Iterable</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          {links.map((l) => (
            <a
              key={l.href}
              href={`#${l.href}`}
              onClick={(e) => go(e, l.href)}
              className="hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#/login"
            onClick={(e) => go(e, '/login')}
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Sign in
          </a>
          <a
            href="#/dashboard"
            onClick={(e) => go(e, '/dashboard')}
            className="px-4 py-2 text-sm font-semibold rounded-md text-white bg-slate-900 hover:bg-slate-800 shadow"
          >
            Launch Dashboard
          </a>
        </div>
      </div>
    </header>
  );
}
