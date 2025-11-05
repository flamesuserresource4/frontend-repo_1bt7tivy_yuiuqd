import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
          <span className="font-semibold">Iterable</span>
        </div>
        <p className="text-sm text-slate-500">© {year} Iterable. All rights reserved.</p>
        <div className="text-xs text-slate-500">
          Keywords: iterable, iterable login, iterable panel, iterable dashboard
        </div>
      </div>
    </footer>
  );
}
