import crypto from 'crypto';
import { postJson } from './http';

/**
 * Generic JSON webhook — the "connect anything" option. Point it at Zapier,
 * Make, n8n, Pabbly, a Slack workflow, Pipedrive/Salesforce automations, or
 * your own endpoint.
 *
 *   DEMO_WEBHOOK_URLS    one or more URLs, comma-separated
 *   DEMO_WEBHOOK_SECRET  optional; signs the body as X-Zeeventory-Signature: sha256=<hex>
 */
export default {
  id: 'webhook',
  name: 'Webhook',

  isEnabled(env) {
    return urls(env).length > 0;
  },

  async send(lead, env) {
    const { ip, ...publicLead } = lead; // never forward the visitor's IP to third parties
    const body = JSON.stringify({ event: 'demo.booked', data: publicLead });
    const headers = { 'X-Zeeventory-Event': 'demo.booked' };
    if (env.DEMO_WEBHOOK_SECRET) {
      const sig = crypto.createHmac('sha256', env.DEMO_WEBHOOK_SECRET).update(body).digest('hex');
      headers['X-Zeeventory-Signature'] = `sha256=${sig}`;
    }
    const results = await Promise.allSettled(urls(env).map((u) => postJson(u, body, { headers })));
    const failed = results.filter((r) => r.status === 'rejected');
    if (failed.length === results.length) throw failed[0].reason;
  }
};

function urls(env) {
  return String(env.DEMO_WEBHOOK_URLS || '')
    .split(',')
    .map((s) => s.trim())
    .filter((s) => /^https?:\/\//.test(s));
}
