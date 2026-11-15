const TIMEOUT_MS = Number(process.env.DEMO_INTEGRATION_TIMEOUT_MS || 8000);

/**
 * fetch() with a timeout and a readable error when the destination rejects
 * the request. Every adapter uses this so one slow CRM can't hang the form.
 */
export async function postJson(url, body, { headers = {}, method = 'POST' } = {}) {
  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
    cache: 'no-store',
    signal: AbortSignal.timeout(TIMEOUT_MS)
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status}${text ? `: ${text.slice(0, 300)}` : ''}`);
  }
  return res;
}

export function splitName(full = '') {
  const parts = full.trim().split(/\s+/);
  return { firstName: parts[0] || '', lastName: parts.slice(1).join(' ') };
}

/** Human-readable summary of the booking, for systems that only have a notes field. */
export function describeBooking(lead) {
  const lines = [
    `Demo request from ${lead.name}${lead.company ? ` (${lead.company})` : ''}`,
    lead.preferredDate && `Preferred: ${lead.preferredDate}${lead.preferredTime ? ` at ${lead.preferredTime}` : ''}${lead.timezone ? ` (${lead.timezone})` : ''}`,
    lead.companySize && `Company size: ${lead.companySize}`,
    lead.industry && `Industry: ${lead.industry}`,
    lead.interests?.length && `Interested in: ${lead.interests.join(', ')}`,
    lead.message && `Message: ${lead.message}`,
    lead.tracking?.utm_source && `Source: ${lead.tracking.utm_source}/${lead.tracking.utm_medium || '-'}/${lead.tracking.utm_campaign || '-'}`,
    lead.page?.referrer && `Referrer: ${lead.page.referrer}`
  ];
  return lines.filter(Boolean).join('\n');
}
