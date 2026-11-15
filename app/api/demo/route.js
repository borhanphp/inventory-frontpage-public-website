import { randomUUID } from 'crypto';
import net from 'net';
import { NextResponse } from 'next/server';
import { COMPANY_SIZES, INDUSTRIES, INTEREST_OPTIONS, LIMITS, TIME_SLOTS, TRACKING_PARAMS } from '@/lib/demo';
import { dispatchLead, enabledIntegrations } from '@/lib/integrations';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const MIN_FILL_MS = 2500; // humans take longer than this to fill the form

/* ---------- best-effort in-memory rate limit (per server instance) ---------- */
const WINDOW_MS = 10 * 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimited(key) {
  const now = Date.now();
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (now - v.start > WINDOW_MS) hits.delete(k);
  }
  const entry = hits.get(key);
  if (!entry || now - entry.start > WINDOW_MS) {
    hits.set(key, { start: now, count: 1 });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

function clientIp(request) {
  const raw = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';
  const ip = raw.split(',')[0].trim();
  return net.isIP(ip) ? ip : '';
}

function str(v, max = LIMITS.short) {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

function fail(message, status = 400, field) {
  return NextResponse.json({ ok: false, message, field }, { status });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return fail('Invalid request.');
  }

  const ip = clientIp(request);

  // Spam traps: honeypot field must stay empty, and the form can't be submitted instantly.
  const elapsed = Date.now() - Number(body.startedAt || 0);
  if (str(body.website) || !body.startedAt || elapsed < MIN_FILL_MS) {
    // Pretend success so bots learn nothing.
    return NextResponse.json({ ok: true });
  }

  if (rateLimited(ip || 'unknown')) {
    return fail('Too many requests. Please try again in a few minutes.', 429);
  }

  /* ---------------------------- validation ---------------------------- */
  const name = str(body.name, LIMITS.name);
  const email = str(body.email, LIMITS.email).toLowerCase();
  const phone = str(body.phone, LIMITS.phone);
  const company = str(body.company, LIMITS.company);

  if (name.length < 2) return fail('Please enter your name.', 400, 'name');
  if (!EMAIL_RE.test(email)) return fail('Please enter a valid work email.', 400, 'email');
  if (phone && !/^[+()\d\s-]{6,}$/.test(phone)) return fail('Please enter a valid phone number.', 400, 'phone');
  if (!company) return fail('Please enter your company name.', 400, 'company');
  if (body.consent !== true) return fail('Please agree to be contacted about your demo.', 400, 'consent');

  const companySize = COMPANY_SIZES.includes(body.companySize) ? body.companySize : '';
  const industry = INDUSTRIES.includes(body.industry) ? body.industry : '';
  const interests = Array.isArray(body.interests)
    ? body.interests.filter((i) => INTEREST_OPTIONS.includes(i)).slice(0, INTEREST_OPTIONS.length)
    : [];

  const preferredDate = str(body.preferredDate, 10);
  if (preferredDate) {
    const d = new Date(`${preferredDate}T00:00:00Z`);
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    if (!DATE_RE.test(preferredDate) || Number.isNaN(d.getTime()) || d < today) {
      return fail('Please pick a date from today onward.', 400, 'preferredDate');
    }
  }
  const preferredTime = TIME_SLOTS.includes(body.preferredTime) ? body.preferredTime : '';

  const tracking = {};
  for (const key of TRACKING_PARAMS) {
    const v = str(body.tracking?.[key]);
    if (v) tracking[key] = v;
  }

  /* ------------------------- normalized lead ------------------------- */
  const lead = {
    id: randomUUID(),
    submittedAt: new Date().toISOString(),
    name,
    email,
    phone,
    company,
    jobTitle: str(body.jobTitle, LIMITS.jobTitle),
    companySize,
    industry,
    country: str(body.country, 80),
    interests,
    preferredDate,
    preferredTime,
    timezone: str(body.timezone, 64),
    message: str(body.message, LIMITS.message),
    consent: true,
    marketingOptIn: body.marketingOptIn === true,
    tracking,
    page: {
      url: str(body.page?.url, 500),
      referrer: str(body.page?.referrer, 500)
    },
    cookies: { hubspotutk: str(body.cookies?.hubspotutk, 64) },
    ip
  };

  /* ---------------------------- delivery ---------------------------- */
  if (enabledIntegrations().length === 0) {
    // Nothing configured yet: keep the form usable and make the gap obvious in the logs.
    console.warn(
      `[demo] Booking ${lead.id} received but no integrations are configured. See .env.example.`,
      process.env.NODE_ENV === 'production' ? '' : lead
    );
    return NextResponse.json({ ok: true, id: lead.id });
  }

  const results = await dispatchLead(lead);
  const delivered = results.filter((r) => r.ok);
  for (const r of results.filter((x) => !x.ok)) {
    console.error(`[demo] Booking ${lead.id} failed for ${r.name}: ${r.error}`);
  }

  if (delivered.length === 0) {
    return fail(
      'We could not submit your request right now. Please try again, or contact us on WhatsApp.',
      502
    );
  }

  console.info(`[demo] Booking ${lead.id} delivered to ${delivered.map((r) => r.name).join(', ')}`);
  return NextResponse.json({ ok: true, id: lead.id });
}
