import hubspot from './hubspot';
import mailchimp from './mailchimp';
import webhook from './webhook';
import zeeventoryCrm from './zeeventoryCrm';

/**
 * Every system a demo booking can be delivered to.
 *
 * To add another CRM or marketing tool:
 *   1. Create lib/integrations/<name>.js exporting { id, name, isEnabled(env), send(lead, env) }.
 *      `send` should throw on failure; use postJson() from ./http for timeouts and errors.
 *   2. Add it to this array.
 *   3. Document its env vars in .env.example.
 *
 * An adapter only runs when isEnabled(env) returns true, so unconfigured
 * systems are skipped automatically.
 */
export const integrations = [zeeventoryCrm, webhook, hubspot, mailchimp];

export function enabledIntegrations(env = process.env) {
  return integrations.filter((i) => {
    try {
      return i.isEnabled(env);
    } catch {
      return false;
    }
  });
}

/**
 * Deliver a lead to every enabled integration in parallel.
 * Returns a per-integration result list; never throws.
 */
export async function dispatchLead(lead, env = process.env) {
  const targets = enabledIntegrations(env);
  const settled = await Promise.allSettled(targets.map((t) => t.send(lead, env)));
  return targets.map((t, i) => ({
    id: t.id,
    name: t.name,
    ok: settled[i].status === 'fulfilled',
    error: settled[i].status === 'rejected' ? String(settled[i].reason?.message || settled[i].reason) : undefined
  }));
}
