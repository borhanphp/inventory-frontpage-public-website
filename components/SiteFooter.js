import Link from 'next/link';
import { appPath } from '@/lib/links';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:flex-row sm:px-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 font-display text-sm font-bold text-white">
              Z
            </span>
            <span className="font-display font-semibold text-slate-900">Zeeventory</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-slate-600">
            Cloud ERP for inventory, sales, commerce, and more — built for teams that ship real products.
          </p>
        </div>

        <div className="flex flex-wrap gap-10 text-sm">
          <div>
            <p className="font-semibold text-slate-900">Product</p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <a href="#product" className="hover:text-brand-600">
                  Overview
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-brand-600">
                  Modules
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-brand-600">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">App</p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <a href={appPath('/login')} className="hover:text-brand-600">
                  Sign in
                </a>
              </li>
              <li>
                <a href={appPath('/dashboard')} className="hover:text-brand-600">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Legal</p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <span className="text-slate-400">Privacy &amp; terms — add your policies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-slate-100 px-4 pt-8 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {year} Zeeventory. All rights reserved.</p>
          <Link href="/" className="hover:text-slate-800">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
