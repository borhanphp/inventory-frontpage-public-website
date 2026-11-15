/**
 * Shared options for the demo booking form. Used by the client form and the
 * server route so validation always matches what the form offers.
 */

// Matches the companySize enum on the CRM Lead model (backend/models/Lead.js)
export const COMPANY_SIZES = ['1-10', '11-50', '51-200', '201-500', '501-1000', '1001-5000', '5000+'];

export const INDUSTRIES = [
  'Wholesale & distribution',
  'Retail',
  'E-commerce',
  'Manufacturing',
  'Import & export',
  'Pharmacy & healthcare',
  'FMCG & grocery',
  'Fashion & apparel',
  'Electronics',
  'Services & agency',
  'Other'
];

export const INTEREST_OPTIONS = [
  'Inventory',
  'Sales',
  'Purchase',
  'Point of Sale',
  'E-commerce',
  'AI Sales Agent',
  'Accounting',
  'CRM',
  'Marketing',
  'HRM & Payroll',
  'Projects',
  'Custom Invoicing'
];

export const TIME_SLOTS = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];

export const LIMITS = {
  name: 120,
  email: 160,
  phone: 40,
  company: 160,
  jobTitle: 120,
  message: 2000,
  short: 200
};

/** Tracking parameters we copy from the landing URL onto the lead. */
export const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid'
];
