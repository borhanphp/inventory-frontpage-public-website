/**
 * Point “Open app” / “Sign in” to your deployed dashboard.
 * Override with NEXT_PUBLIC_ZEEVENTORY_APP_URL (e.g. https://app.zeeventory.com).
 */
export function getAppUrl() {
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_ZEEVENTORY_APP_URL) {
    return process.env.NEXT_PUBLIC_ZEEVENTORY_APP_URL.replace(/\/$/, '');
  }
  return 'http://localhost:3001';
}

export function appPath(path) {
  const base = getAppUrl();
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}
