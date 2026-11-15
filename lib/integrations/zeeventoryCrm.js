import { describeBooking, postJson } from './http';

/**
 * Zeeventory's own CRM module — demo requests become Leads in your workspace,
 * with auto-assignment rules applied.
 *
 *   ZEEVENTORY_CRM_API_URL   e.g. https://api.zeeventory.com/api
 *   ZEEVENTORY_CRM_ORG_SLUG  the organization slug that should own the leads
 */
export default {
  id: 'zeeventory-crm',
  name: 'Zeeventory CRM',

  isEnabled(env) {
    return Boolean(env.ZEEVENTORY_CRM_API_URL && env.ZEEVENTORY_CRM_ORG_SLUG);
  },

  async send(lead, env) {
    const base = env.ZEEVENTORY_CRM_API_URL.replace(/\/$/, '');
    const org = encodeURIComponent(env.ZEEVENTORY_CRM_ORG_SLUG);
    await postJson(
      `${base}/public/crm/${org}/leads/capture`,
      {
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        company: lead.company,
        jobTitle: lead.jobTitle,
        companySize: lead.companySize,
        industry: lead.industry,
        country: lead.country,
        source: lead.tracking?.utm_source || 'website',
        sourceDetail: 'Demo booking form',
        campaign: lead.tracking?.utm_campaign,
        medium: lead.tracking?.utm_medium,
        tags: ['demo-request', ...lead.interests.map((i) => `interest:${i}`)],
        notes: describeBooking(lead),
        consent: lead.consent
      },
      { headers: lead.ip ? { 'X-Forwarded-For': lead.ip } : {} }
    );
  }
};
