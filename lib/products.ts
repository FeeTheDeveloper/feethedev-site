export type BillingModel = 'one_time' | 'monthly';

export type Product = {
  id: string;
  slug: string;
  name: string;
  priceCents: number;
  billing: BillingModel;
  category: string;
  description: string;
  features: string[];
  stripeLookupKey?: string;
  stripePriceId: string;
  veteranEligible: boolean;
  ctaLabel: string;
};

export const VETERAN_DISCOUNT_RATE = 0.2;
export const VETERAN_PROMO_CODE = 'VETERAN20';

export function veteranPriceCents(priceCents: number): number {
  return Math.round(priceCents * (1 - VETERAN_DISCOUNT_RATE));
}

export function formatUsd(cents: number): string {
  return (cents / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  });
}

/**
 * Core packages. Stripe IDs match the live Fee The Developer LLC catalog
 * (acct_1TCTjGHWhC70mvOk) — do not regenerate these products in Stripe.
 */
export const coreProducts: Product[] = [
  {
    id: 'website-launch',
    slug: 'website-launch',
    name: 'Website Launch',
    priceCents: 79900,
    billing: 'one_time',
    category: 'web-design',
    description:
      'Professional business website design and development for businesses that need a polished, mobile-ready, conversion-focused online presence. Includes modern design, responsive development, launch configuration, and the technical foundation needed to present the business professionally online.',
    features: [
      'Custom, mobile-first website design',
      'Conversion-focused layout and copy structure',
      'Launch configuration and deployment',
      'Technical foundation for future growth',
    ],
    stripeLookupKey: 'ftd_website_launch',
    stripePriceId: 'price_1UGGZpHWhC70mvOkTcbqZqWo',
    veteranEligible: true,
    ctaLabel: 'Start Your Build',
  },
  {
    id: 'digital-presence-bundle',
    slug: 'digital-presence-bundle',
    name: 'Digital Presence Bundle',
    priceCents: 129900,
    billing: 'one_time',
    category: 'business-presence',
    description:
      'Website development plus coordinated setup across Google Business Profile, Apple Business Connect, and Yelp so the business is represented consistently across major discovery platforms.',
    features: [
      'Everything in Website Launch',
      'Google Business Profile setup + verification support',
      'Apple Business Connect setup',
      'Yelp business profile setup',
    ],
    stripeLookupKey: 'ftd_digital_presence_bundle',
    stripePriceId: 'price_1UGGZvHWhC70mvOkTkKYf1Ll',
    veteranEligible: true,
    ctaLabel: 'Start Your Build',
  },
  {
    id: 'full-business-system',
    slug: 'full-business-system',
    name: 'Full Business System',
    priceCents: 249900,
    billing: 'one_time',
    category: 'full-business-system',
    description:
      'A full-scale business launch and digital infrastructure package combining website development, Google / Apple / Yelp business presence, workflow automation, integrations, and coordinated business support through Fee The Developer and Hutchrok Solutions Group.',
    features: [
      'Everything in Digital Presence Bundle',
      'Workflow automation and integrations',
      'Coordinated Hutchrok Solutions Group business support',
      'Full business infrastructure review',
    ],
    stripeLookupKey: 'ftd_full_business_system',
    stripePriceId: 'price_1UGGa0HWhC70mvOkK2oHJRtD',
    veteranEligible: true,
    ctaLabel: 'Start Your Build',
  },
  {
    id: 'custom-software-automation',
    slug: 'custom-software-automation',
    name: 'Custom Software & Automation',
    priceCents: 199900,
    billing: 'one_time',
    category: 'software-automation',
    description:
      'Custom applications, dashboards, APIs, AI workflows, internal tools, and operational automation engineered around the client’s business requirements.',
    features: [
      'Custom application or dashboard build',
      'API integrations and data workflows',
      'AI-assisted automation',
      'Internal tooling for operations',
    ],
    stripeLookupKey: 'ftd_custom_software_automation',
    stripePriceId: 'price_1UGGa6HWhC70mvOk8pMQbkY2',
    veteranEligible: true,
    ctaLabel: 'Start Your Build',
  },
  {
    id: 'ongoing-technical-support',
    slug: 'ongoing-technical-support',
    name: 'Ongoing Technical Support',
    priceCents: 24900,
    billing: 'monthly',
    category: 'ongoing-support',
    description:
      'Recurring technical support for websites, integrations, automations, digital presence, troubleshooting, and system maintenance.',
    features: [
      'Monthly maintenance and troubleshooting',
      'Integration and automation upkeep',
      'Priority technical response',
    ],
    stripeLookupKey: 'ftd_ongoing_technical_support_monthly',
    stripePriceId: 'price_1UGGaFHWhC70mvOkrC5NWM5Z',
    veteranEligible: true,
    ctaLabel: 'Add Support',
  },
];

export const addOnProducts: Product[] = [
  {
    id: 'google-business-profile-setup',
    slug: 'google-business-profile-setup',
    name: 'Google Business Profile Setup & Verification Support',
    priceCents: 29900,
    billing: 'one_time',
    category: 'business_presence',
    description:
      'Setup, optimization, and verification support for Google Business Profile, including business information, categories, service areas, branding, and launch guidance. Google controls final approval.',
    features: ['Profile setup and optimization', 'Category and service-area planning', 'Verification support (approval controlled by Google)'],
    stripePriceId: 'price_1UGHVhHWhC70mvOkbkeJ3m3j',
    veteranEligible: false,
    ctaLabel: 'Add This Service',
  },
  {
    id: 'apple-business-connect-setup',
    slug: 'apple-business-connect-setup',
    name: 'Apple Business Connect Setup',
    priceCents: 19900,
    billing: 'one_time',
    category: 'business_presence',
    description:
      'Professional setup and optimization of Apple Business Connect for business information, branding, location details, and Apple customer-facing surfaces.',
    features: ['Business information and branding setup', 'Location and service details', 'Apple surface optimization'],
    stripePriceId: 'price_1UGHVqHWhC70mvOkKrO2ySq8',
    veteranEligible: false,
    ctaLabel: 'Add This Service',
  },
  {
    id: 'yelp-business-profile-setup',
    slug: 'yelp-business-profile-setup',
    name: 'Yelp Business Profile Setup',
    priceCents: 14900,
    billing: 'one_time',
    category: 'business_presence',
    description:
      'Setup and optimization of a professional Yelp business profile, including core business information, categories, branding, services, and discovery readiness.',
    features: ['Profile setup and branding', 'Category and service configuration', 'Discovery readiness'],
    stripePriceId: 'price_1UGHVxHWhC70mvOkx97v5NYz',
    veteranEligible: false,
    ctaLabel: 'Add This Service',
  },
  {
    id: 'custom-public-data-scraper',
    slug: 'custom-public-data-scraper',
    name: 'Custom Public Data Scraper',
    priceCents: 74900,
    billing: 'one_time',
    category: 'data_automation',
    description:
      'Custom data extraction workflow built for authorized or publicly accessible sources. Includes source mapping, structured extraction, normalization, and export or database delivery.',
    features: [
      'Source mapping and scope definition',
      'Structured extraction and normalization',
      'Export or database delivery',
      'No authentication, paywall, or CAPTCHA bypass; no unauthorized access',
    ],
    stripePriceId: 'price_1UGHW4HWhC70mvOkTnWAQmYZ',
    veteranEligible: false,
    ctaLabel: 'Add This Service',
  },
  {
    id: 'public-data-monitoring',
    slug: 'public-data-monitoring',
    name: 'Public Data Monitoring & Change Alerts',
    priceCents: 19900,
    billing: 'monthly',
    category: 'data_monitoring',
    description:
      'Recurring monitoring of authorized or public data sources with scheduled checks, structured change detection, and alert delivery.',
    features: ['Scheduled monitoring checks', 'Structured change detection', 'Alert delivery'],
    stripePriceId: 'price_1UGHWCHWhC70mvOkIz1Sc9Vt',
    veteranEligible: false,
    ctaLabel: 'Add This Service',
  },
  {
    id: 'api-integration-setup',
    slug: 'api-integration-setup',
    name: 'API Integration Setup',
    priceCents: 49900,
    billing: 'one_time',
    category: 'integration',
    description:
      'Connect an existing website, app, database, or business platform to one supported third-party API.',
    features: ['Single defined API integration', 'Authentication and data mapping', 'Implementation testing'],
    stripePriceId: 'price_1UGHWKHWhC70mvOk5JvQfoGy',
    veteranEligible: false,
    ctaLabel: 'Add This Service',
  },
  {
    id: 'ai-assistant-chatbot-setup',
    slug: 'ai-assistant-chatbot-setup',
    name: 'AI Assistant / Chatbot Setup',
    priceCents: 59900,
    billing: 'one_time',
    category: 'ai_automation',
    description:
      'Deploy a branded AI assistant for FAQs, lead capture, internal knowledge, customer support, or workflow assistance.',
    features: ['Branded assistant for one defined use case', 'Knowledge setup and integration', 'Launch configuration'],
    stripePriceId: 'price_1UGHWQHWhC70mvOkUQoPd1DN',
    veteranEligible: false,
    ctaLabel: 'Add This Service',
  },
  {
    id: 'business-analytics-dashboard',
    slug: 'business-analytics-dashboard',
    name: 'Business Analytics Dashboard',
    priceCents: 69900,
    billing: 'one_time',
    category: 'analytics',
    description: 'Custom dashboard for operational metrics, KPIs, reporting, and decision support.',
    features: ['KPI and metrics design', 'Custom dashboard build', 'One defined reporting workflow'],
    stripePriceId: 'price_1UGHWWHWhC70mvOkibSCg9mn',
    veteranEligible: false,
    ctaLabel: 'Add This Service',
  },
  {
    id: 'google-workspace-setup',
    slug: 'google-workspace-setup',
    name: 'Google Workspace & Business Email Setup',
    priceCents: 29900,
    billing: 'one_time',
    category: 'workspace',
    description:
      'Google Workspace setup, branded email, admin structure, and launch configuration for a defined small-business workspace.',
    features: ['Workspace and branded email setup', 'Admin structure configuration', 'Launch guidance'],
    stripePriceId: 'price_1UGHWdHWhC70mvOkvpibqCju',
    veteranEligible: false,
    ctaLabel: 'Add This Service',
  },
  {
    id: 'lead-capture-crm-automation',
    slug: 'lead-capture-crm-automation',
    name: 'Lead Capture & CRM Automation',
    priceCents: 44900,
    billing: 'one_time',
    category: 'automation',
    description:
      'Build a connected lead intake and follow-up workflow integrating forms, notifications, CRM or spreadsheet records, and automated routing.',
    features: ['Connected intake workflow', 'CRM or spreadsheet record sync', 'Automated notification routing'],
    stripePriceId: 'price_1UGHWkHWhC70mvOkpX4kak4S',
    veteranEligible: false,
    ctaLabel: 'Add This Service',
  },
];

export const allProducts: Product[] = [...coreProducts, ...addOnProducts];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((product) => product.slug === slug);
}
