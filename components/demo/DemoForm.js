'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, CalendarDays, CheckCircle2, Clock, Loader2, MessageSquare, RotateCcw } from 'lucide-react';
import { COMPANY_SIZES, INDUSTRIES, INTEREST_OPTIONS, LIMITS, TIME_SLOTS } from '@/lib/demo';
import { getAttribution, readCookie, trackEvent } from '@/lib/tracking';
import { WHATSAPP_URL } from '@/lib/links';

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  company: '',
  jobTitle: '',
  companySize: '',
  industry: '',
  country: '',
  interests: [],
  preferredDate: '',
  preferredTime: '',
  message: '',
  consent: false,
  marketingOptIn: false,
  website: '' // honeypot — real people never see or fill this
};

function localISO(d) {
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60_000).toISOString().slice(0, 10);
}

function nextDays(n) {
  const out = [];
  const d = new Date();
  for (let i = 1; out.length < n; i++) {
    const day = new Date(d.getFullYear(), d.getMonth(), d.getDate() + i);
    out.push(day);
  }
  return out;
}

function Label({ htmlFor, children, optional }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 flex items-center justify-between text-sm font-medium text-slate-700">
      {children}
      {optional && <span className="text-xs font-normal text-slate-400">Optional</span>}
    </label>
  );
}

const inputCls =
  'block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 aria-[invalid=true]:border-rose-400 aria-[invalid=true]:ring-rose-500/10';

export default function DemoForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState({ message: '', field: '' });
  const [timezone, setTimezone] = useState('');
  const startedAt = useRef(0);

  const days = useMemo(() => nextDays(6), []);
  const minDate = useMemo(() => localISO(new Date()), []);

  useEffect(() => {
    startedAt.current = Date.now();
    try {
      setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone || '');
    } catch {}
  }, []);

  const set = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
    if (error.field === key) setError({ message: '', field: '' });
  };

  const toggleInterest = (item) =>
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(item) ? f.interests.filter((i) => i !== item) : [...f.interests, item]
    }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setError({ message: '', field: '' });
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          timezone,
          startedAt: startedAt.current,
          tracking: getAttribution(),
          page: { url: window.location.href, referrer: document.referrer },
          cookies: { hubspotutk: readCookie('hubspotutk') }
        })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        setError({ message: data.message || 'Something went wrong. Please try again.', field: data.field || '' });
        setStatus('error');
        return;
      }
      trackEvent('demo_booked', {
        company_size: form.companySize || undefined,
        industry: form.industry || undefined,
        interests: form.interests.join(',') || undefined
      });
      setStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setError({ message: 'Network error. Check your connection and try again.', field: '' });
      setStatus('error');
    }
  }

  if (status === 'success') {
    const when = form.preferredDate
      ? new Date(`${form.preferredDate}T00:00:00`).toLocaleDateString(undefined, {
          weekday: 'long',
          month: 'long',
          day: 'numeric'
        })
      : null;
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl md:p-12">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/50">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </span>
        <h2 className="mt-6 font-display text-2xl font-bold text-slate-900 md:text-3xl">Your demo request is in!</h2>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          Thanks, {form.name.split(' ')[0]}. We&rsquo;ll confirm your session at <strong>{form.email}</strong>
          {when ? (
            <>
              {' '}
              for <strong>{when}</strong>
              {form.preferredTime ? (
                <>
                  {' '}
                  around <strong>{form.preferredTime}</strong>
                </>
              ) : null}
            </>
          ) : null}
          .
        </p>
        <ol className="mx-auto mt-8 max-w-sm space-y-3 text-left text-sm text-slate-700">
          {[
            'We review your business details',
            'You get a calendar invite with a meeting link',
            'A 30–45 minute walkthrough tailored to you'
          ].map((s, i) => (
            <li key={s} className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={WHATSAPP_URL} className="btn-primary">
            <MessageSquare className="h-4 w-4" aria-hidden />
            Questions? WhatsApp us
          </a>
          <button
            type="button"
            onClick={() => {
              setForm(EMPTY);
              startedAt.current = Date.now();
              setStatus('idle');
            }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-400"
          >
            <RotateCcw className="h-4 w-4" aria-hidden />
            Book another
          </button>
        </div>
      </div>
    );
  }

  const invalid = (field) => error.field === field || undefined;
  const submitting = status === 'submitting';

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 md:p-9"
    >
      {/* 1. About you */}
      <fieldset>
        <legend className="flex items-center gap-2 font-display text-lg font-semibold text-slate-900">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">1</span>
          About you
        </legend>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Full name</Label>
            <input id="name" required maxLength={LIMITS.name} autoComplete="name" value={form.name} onChange={set('name')} aria-invalid={invalid('name')} className={inputCls} placeholder="Your name" />
          </div>
          <div>
            <Label htmlFor="email">Work email</Label>
            <input id="email" type="email" required maxLength={LIMITS.email} autoComplete="email" value={form.email} onChange={set('email')} aria-invalid={invalid('email')} className={inputCls} placeholder="you@company.com" />
          </div>
          <div>
            <Label htmlFor="phone" optional>Phone / WhatsApp</Label>
            <input id="phone" type="tel" maxLength={LIMITS.phone} autoComplete="tel" value={form.phone} onChange={set('phone')} aria-invalid={invalid('phone')} className={inputCls} placeholder="+880 1XXX-XXXXXX" />
          </div>
          <div>
            <Label htmlFor="jobTitle" optional>Job title</Label>
            <input id="jobTitle" maxLength={LIMITS.jobTitle} autoComplete="organization-title" value={form.jobTitle} onChange={set('jobTitle')} className={inputCls} placeholder="e.g. Operations Manager" />
          </div>
        </div>
      </fieldset>

      {/* 2. Your business */}
      <fieldset className="mt-10">
        <legend className="flex items-center gap-2 font-display text-lg font-semibold text-slate-900">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">2</span>
          Your business
        </legend>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="company">Company name</Label>
            <input id="company" required maxLength={LIMITS.company} autoComplete="organization" value={form.company} onChange={set('company')} aria-invalid={invalid('company')} className={inputCls} placeholder="Company Ltd." />
          </div>
          <div>
            <Label htmlFor="companySize" optional>Team size</Label>
            <select id="companySize" value={form.companySize} onChange={set('companySize')} className={inputCls}>
              <option value="">Select…</option>
              {COMPANY_SIZES.map((s) => (
                <option key={s} value={s}>
                  {s} people
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="industry" optional>Industry</Label>
            <select id="industry" value={form.industry} onChange={set('industry')} className={inputCls}>
              <option value="">Select…</option>
              {INDUSTRIES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="country" optional>Country</Label>
            <input id="country" maxLength={80} autoComplete="country-name" value={form.country} onChange={set('country')} className={inputCls} placeholder="e.g. Bangladesh" />
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-2 text-sm font-medium text-slate-700">
            What would you like to see? <span className="font-normal text-slate-400">Pick any</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {INTEREST_OPTIONS.map((item) => {
              const on = form.interests.includes(item);
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleInterest(item)}
                  className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
                    on
                      ? 'border-brand-600 bg-brand-600 text-white shadow-sm shadow-brand-600/30'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-brand-400 hover:text-brand-700'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </fieldset>

      {/* 3. Pick a time */}
      <fieldset className="mt-10">
        <legend className="flex items-center gap-2 font-display text-lg font-semibold text-slate-900">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">3</span>
          Pick a time <span className="text-sm font-normal text-slate-400">— we&rsquo;ll confirm by email</span>
        </legend>

        <p className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-700">
          <CalendarDays className="h-4 w-4 text-brand-600" aria-hidden /> Preferred day
        </p>
        <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-6">
          {days.map((d) => {
            const iso = localISO(d);
            const on = form.preferredDate === iso;
            return (
              <button
                key={iso}
                type="button"
                aria-pressed={on}
                onClick={() => setForm((f) => ({ ...f, preferredDate: on ? '' : iso }))}
                className={`rounded-xl border px-2 py-2.5 text-center transition ${
                  on
                    ? 'border-brand-600 bg-brand-600 text-white shadow-md shadow-brand-600/25'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-brand-300 hover:bg-white'
                }`}
              >
                <span className={`block text-[11px] font-medium uppercase ${on ? 'text-brand-100' : 'text-slate-500'}`}>
                  {d.toLocaleDateString(undefined, { weekday: 'short' })}
                </span>
                <span className="block font-display text-lg font-bold leading-tight">{d.getDate()}</span>
                <span className={`block text-[11px] ${on ? 'text-brand-100' : 'text-slate-500'}`}>
                  {d.toLocaleDateString(undefined, { month: 'short' })}
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-3 flex items-center gap-3">
          <label htmlFor="preferredDate" className="text-xs text-slate-500">
            Or choose another date
          </label>
          <input
            id="preferredDate"
            type="date"
            min={minDate}
            value={form.preferredDate}
            onChange={set('preferredDate')}
            aria-invalid={invalid('preferredDate')}
            className="rounded-lg border border-slate-300 px-2.5 py-1.5 text-sm text-slate-700 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
          />
        </div>

        <p className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-700">
          <Clock className="h-4 w-4 text-brand-600" aria-hidden /> Preferred time
          {timezone && <span className="font-normal text-slate-400">({timezone})</span>}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {TIME_SLOTS.map((t) => {
            const on = form.preferredTime === t;
            return (
              <button
                key={t}
                type="button"
                aria-pressed={on}
                onClick={() => setForm((f) => ({ ...f, preferredTime: on ? '' : t }))}
                className={`rounded-lg border px-4 py-2 text-sm font-semibold tabular-nums transition ${
                  on
                    ? 'border-brand-600 bg-brand-600 text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-brand-300 hover:bg-white'
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        <div className="mt-6">
          <Label htmlFor="message" optional>Anything we should know?</Label>
          <textarea
            id="message"
            rows={4}
            maxLength={LIMITS.message}
            value={form.message}
            onChange={set('message')}
            className={inputCls}
            placeholder="Current tools, number of warehouses or branches, what you want to fix first…"
          />
        </div>
      </fieldset>

      {/* honeypot */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} />
      </div>

      <div className="mt-8 space-y-3 border-t border-slate-100 pt-6">
        <label className="flex items-start gap-3 text-sm text-slate-600">
          <input
            type="checkbox"
            required
            checked={form.consent}
            onChange={set('consent')}
            aria-invalid={invalid('consent')}
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
          />
          <span>I agree that Zeeventory may contact me about this demo request.</span>
        </label>
        <label className="flex items-start gap-3 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={form.marketingOptIn}
            onChange={set('marketingOptIn')}
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
          />
          <span>Send me occasional product updates and tips. Unsubscribe any time.</span>
        </label>
      </div>

      {error.message && (
        <p role="alert" className="mt-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {error.message}
        </p>
      )}

      <button type="submit" disabled={submitting} className="btn-primary mt-6 w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-70">
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> Booking your demo…
          </>
        ) : (
          <>
            Book my free demo <ArrowRight className="h-5 w-5" aria-hidden />
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-slate-400">Free, no obligation. Takes less than a minute.</p>
    </form>
  );
}
