'use client';

import { TRACKING_PARAMS } from '@/lib/demo';

const STORAGE_KEY = 'zv_attribution';

/**
 * Send a conversion event to every marketing tag that is loaded on the page.
 * Safe to call when none are configured.
 */
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });
  } catch {}
  try {
    if (typeof window.gtag === 'function') window.gtag('event', name, params);
  } catch {}
  try {
    if (typeof window.fbq === 'function' && name === 'demo_booked') window.fbq('track', 'Schedule', params);
  } catch {}
  try {
    const conv = process.env.NEXT_PUBLIC_LINKEDIN_CONVERSION_ID;
    if (typeof window.lintrk === 'function' && conv && name === 'demo_booked') {
      window.lintrk('track', { conversion_id: Number(conv) });
    }
  } catch {}
}

/**
 * UTM / click-id parameters from the current URL, falling back to the first
 * ones seen this session so attribution survives navigating between pages.
 */
export function getAttribution() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const fromUrl = {};
  for (const key of TRACKING_PARAMS) {
    const v = params.get(key);
    if (v) fromUrl[key] = v;
  }
  try {
    if (Object.keys(fromUrl).length) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
      return fromUrl;
    }
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return fromUrl;
  }
}

/** Remember attribution as soon as a visitor lands on any page. */
export function captureAttribution() {
  getAttribution();
}

export function readCookie(name) {
  if (typeof document === 'undefined') return '';
  const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : '';
}
