import { describeBooking, postJson, splitName } from './http';

/**
 * HubSpot Forms API — submissions create/update contacts and show up as form
 * submissions with page and cookie context. No private API key needed.
 *
 *   HUBSPOT_PORTAL_ID  your HubSpot account (hub) ID
 *   HUBSPOT_FORM_GUID  the form to submit to; create a form with the fields below
 *
 * Field names used: email, firstname, lastname, phone, company, jobtitle, message.
 */
export default {
  id: 'hubspot',
  name: 'HubSpot',

  isEnabled(env) {
    return Boolean(env.HUBSPOT_PORTAL_ID && env.HUBSPOT_FORM_GUID);
  },

  async send(lead, env) {
    const { firstName, lastName } = splitName(lead.name);
    const fields = [
      ['email', lead.email],
      ['firstname', firstName],
      ['lastname', lastName],
      ['phone', lead.phone],
      ['company', lead.company],
      ['jobtitle', lead.jobTitle],
      ['message', describeBooking(lead)]
    ]
      .filter(([, v]) => v)
      .map(([name, value]) => ({ name, value }));

    const context = { pageUri: lead.page?.url, pageName: 'Book a demo' };
    if (lead.cookies?.hubspotutk) context.hutk = lead.cookies.hubspotutk;
    if (lead.ip) context.ipAddress = lead.ip;

    await postJson(
      `https://api.hsforms.com/submissions/v3/integration/submit/${encodeURIComponent(env.HUBSPOT_PORTAL_ID)}/${encodeURIComponent(env.HUBSPOT_FORM_GUID)}`,
      {
        fields,
        context,
        legalConsentOptions: {
          consent: {
            consentToProcess: lead.consent,
            text: 'I agree to be contacted about my demo request.'
          }
        }
      }
    );
  }
};
