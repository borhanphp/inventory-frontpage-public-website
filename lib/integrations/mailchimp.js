import { splitName } from './http';

/**
 * Mailchimp audience — adds the visitor to a list with a "Demo request" tag so
 * you can trigger nurture journeys. Only subscribes when marketing opt-in is ticked;
 * otherwise the contact is stored as transactional.
 *
 *   MAILCHIMP_API_KEY      e.g. abc123...-us21 (the suffix is the data center)
 *   MAILCHIMP_AUDIENCE_ID  the list/audience ID
 */
export default {
  id: 'mailchimp',
  name: 'Mailchimp',

  isEnabled(env) {
    return Boolean(env.MAILCHIMP_API_KEY && env.MAILCHIMP_AUDIENCE_ID);
  },

  async send(lead, env) {
    const dc = env.MAILCHIMP_API_KEY.split('-').pop();
    const { firstName, lastName } = splitName(lead.name);
    const res = await fetch(
      `https://${dc}.api.mailchimp.com/3.0/lists/${encodeURIComponent(env.MAILCHIMP_AUDIENCE_ID)}/members`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(`zeeventory:${env.MAILCHIMP_API_KEY}`).toString('base64')}`
        },
        body: JSON.stringify({
          email_address: lead.email,
          status: lead.marketingOptIn ? 'subscribed' : 'transactional',
          merge_fields: { FNAME: firstName, LNAME: lastName, PHONE: lead.phone || '' },
          tags: ['Demo request', ...lead.interests]
        }),
        cache: 'no-store',
        signal: AbortSignal.timeout(Number(env.DEMO_INTEGRATION_TIMEOUT_MS || 8000))
      }
    );
    if (res.ok) return;
    const data = await res.json().catch(() => ({}));
    // Already on the list is fine — the booking still reaches the other systems.
    if (res.status === 400 && data.title === 'Member Exists') return;
    throw new Error(`HTTP ${res.status}: ${data.detail || data.title || 'Mailchimp error'}`);
  }
};
