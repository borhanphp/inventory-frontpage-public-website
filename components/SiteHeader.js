'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import { appPath, SIGNUP_URL } from '@/lib/links';
import { modules } from '@/lib/modules';
import { getColor } from '@/lib/colors';

const nav = [
  { href: '/#platform', label: 'Platform' },
  { href: '/modules', label: 'Modules', mega: true },
  { href: '/#integrations', label: 'Integrations' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/support', label: 'Support' }
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-slate-950/90 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.mega ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" aria-hidden />
                </Link>
                <div className="invisible absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="grid grid-cols-3 gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/20">
                    {modules.map(({ slug, name, tagline, icon: Icon, color }) => {
                      const c = getColor(color);
                      return (
                        <Link
                          key={slug}
                          href={`/modules/${slug}`}
                          className="group/item flex gap-3 rounded-xl p-3 transition hover:bg-slate-50"
                        >
                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${c.tile} text-white shadow-sm`}
                          >
                            <Icon className="h-4 w-4" aria-hidden />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-slate-900">{name}</span>
                            <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-slate-500">
                              {tagline}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                    <Link
                      href="/modules"
                      className="col-span-3 mt-1 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
                    >
                      Compare all modules
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={appPath('/login')} className="text-sm font-medium text-slate-300 transition hover:text-white">
            Sign in
          </a>
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-400"
          >
            Start free trial
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-200 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-slate-950 px-4 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mt-4 px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Modules</p>
          <div className="mt-2 grid grid-cols-2 gap-1">
            {modules.map(({ slug, name, icon: Icon }) => (
              <Link
                key={slug}
                href={`/modules/${slug}`}
                className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-slate-300 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                <Icon className="h-4 w-4 text-brand-400" aria-hidden />
                {name}
              </Link>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href={appPath('/login')}
              className="rounded-full border border-white/20 py-3 text-center text-sm font-semibold text-white"
            >
              Sign in
            </a>
            <a
              href={SIGNUP_URL}
              className="rounded-full bg-brand-500 py-3 text-center text-sm font-semibold text-white"
            >
              Start free trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
