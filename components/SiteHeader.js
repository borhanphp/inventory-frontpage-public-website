'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { appPath } from '@/lib/links';

const nav = [
  { href: '#product', label: 'Product' },
  { href: '#modules', label: 'Modules' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' }
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 font-display text-lg font-bold text-white shadow-lg shadow-brand-500/25">
            Z
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">Zeeventory</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={appPath('/login')}
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Sign in
          </a>
          <a
            href={appPath('/login')}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
          >
            Open app
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-200 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={appPath('/login')} className="mt-2 text-sm font-semibold text-white">
              Sign in →
            </a>
            <a
              href={appPath('/login')}
              className="rounded-full bg-white py-3 text-center text-sm font-semibold text-slate-900"
              onClick={() => setOpen(false)}
            >
              Open app
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
