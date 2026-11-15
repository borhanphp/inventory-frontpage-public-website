/**
 * Point “Open app” / “Sign in” to your deployed dashboard.
 * Override with NEXT_PUBLIC_ZEEVENTORY_APP_URL (e.g. https://app.zeeventory.com).
 */
export function getAppUrl() {
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_ZEEVENTORY_APP_URL) {
    return process.env.NEXT_PUBLIC_ZEEVENTORY_APP_URL.replace(/\/$/, '');
  }
  return 'https://app.zeeventory.com';
}

export function appPath(path) {
  const base = getAppUrl();
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

/** New organization signup — starts the 14-day trial. */
export const SIGNUP_URL = appPath('/saas/signup');
/** Demo booking page on this website (leads go to lib/integrations). */
export const DEMO_URL = '/demo';
export const WHATSAPP_URL = 'https://wa.me/8801855107614';
