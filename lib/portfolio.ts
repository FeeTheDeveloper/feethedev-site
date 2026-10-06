export type PortfolioStage = 'Build' | 'Connect' | 'Strengthen';

export type PortfolioItem = {
  id: string;
  name: string;
  stage: PortfolioStage;
  status: 'Live presentation' | 'Review build' | 'Technical case study';
  category: string;
  summary: string;
  role: string;
  capabilities: string[];
  image: string;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
  imagePosition?: string;
  liveUrl?: string;
  repoUrl: string;
  boundary: string;
  featured?: boolean;
};

export const portfolioStages: Array<'All' | PortfolioStage> = [
  'All',
  'Build',
  'Connect',
  'Strengthen',
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'college-boy',
    name: 'College Boy Cheesesteaks',
    stage: 'Build',
    status: 'Review build',
    category: 'Hospitality + events',
    summary:
      'A high-character restaurant experience that connects the menu, truck story, event interest, and a consent-aware audience path.',
    role: 'Experience design, Next.js implementation, catering flow, and QA',
    capabilities: ['Responsive web', 'Catering flow', 'Consent states'],
    image: '/work/college-boy.jpg',
    imageAlt:
      'College Boy Cheesesteaks review build showing its black, cream, and red restaurant experience',
    imagePosition: 'center top',
    liveUrl: 'https://collegeboy-repo.vercel.app/',
    repoUrl: 'https://github.com/FeeTheDeveloper/collegeboy_repo',
    boundary:
      'Presented as a review build. Ordering, schedule, database, and production-launch status remain separately verified client decisions.',
    featured: true,
  },
  {
    id: 'runner-sports',
    name: 'Runner Sports & Analytics',
    stage: 'Connect',
    status: 'Live presentation',
    category: 'Sports research product',
    summary:
      'A customer-facing research surface for game context, delayed market observations, product navigation, and city-driven game-day presentation.',
    role: 'Product UX, data presentation, application architecture, and safeguards',
    capabilities: ['Product UX', 'Research surfaces', 'Source context'],
    image: '/work/runner-sports.png',
    imageAlt: 'Runner Sports and Analytics brand mark',
    imageFit: 'contain',
    liveUrl: 'https://runner-sports-site.vercel.app/',
    repoUrl: 'https://github.com/FeeTheDeveloper/runner_sports-site',
    boundary:
      'Research and context only. The public experience does not claim automated wagering or independently verified predictive performance.',
    featured: true,
  },
  {
    id: 'hutchrok',
    name: 'Hutchrok Solutions Group',
    stage: 'Strengthen',
    status: 'Live presentation',
    category: 'Business operations platform',
    summary:
      'A full-stack business launch experience with intake, case-management, client-workspace, document, and operational-integration foundations.',
    role: 'Full-stack application, workflow architecture, and client experience',
    capabilities: ['Intake systems', 'Client workspace', 'Integrations'],
    image: '/work/hutchrok.png',
    imageAlt: 'Hutchrok Solutions Group logo',
    imageFit: 'contain',
    liveUrl: 'https://hutchrok-solutions-site.vercel.app/',
    repoUrl: 'https://github.com/FeeTheDeveloper/hutchrok_solutions-site',
    boundary:
      'This card describes the technical delivery only. Certifications, filing eligibility, pricing, and program outcomes require current Hutchrok records.',
    featured: true,
  },
  {
    id: 'fee-the-producer',
    name: 'Fee The Producer',
    stage: 'Build',
    status: 'Live presentation',
    category: 'Music + media',
    summary:
      'A stream-first artist site that organizes releases, official platform destinations, performance context, and production inquiries.',
    role: 'Creative direction, release architecture, responsive implementation, and metadata',
    capabilities: ['Media catalog', 'Platform links', 'Artist brand'],
    image: '/work/fee-the-producer.png',
    imageAlt: 'Koolin It cover art from the Fee The Producer release catalog',
    liveUrl: 'https://feetheproducer-site.vercel.app/',
    repoUrl: 'https://github.com/FeeTheDeveloper/feetheproducer-site',
    boundary:
      'Streaming destinations and public metadata are used instead of hosting private project files or unapproved paid-download delivery.',
  },
  {
    id: 'what-it-is',
    name: 'What It Is Clothing',
    stage: 'Build',
    status: 'Live presentation',
    category: 'Apparel commerce',
    summary:
      'A statement-led streetwear experience built around a focused featured drop, clear product hierarchy, and a short route to commerce.',
    role: 'Brand experience, storefront UX, product presentation, and integration',
    capabilities: ['Commerce UX', 'Product storytelling', 'Brand system'],
    image: '/work/what-it-is.png',
    imageAlt: 'What It Is Clothing orange character mark',
    imageFit: 'contain',
    liveUrl: 'https://waht-it-is-site.vercel.app/',
    repoUrl: 'https://github.com/FeeTheDeveloper/waht_it_is-site',
    boundary:
      'Product availability, price, inventory, fulfillment, and final checkout remain controlled by the commerce provider and brand owner.',
  },
  {
    id: 'vickys-lash-lab',
    name: "Vicky's Lash Lab",
    stage: 'Connect',
    status: 'Live presentation',
    category: 'Local services + booking',
    summary:
      'A Dallas beauty-service experience with a service menu, booking path, deposit context, and graceful behavior when booking infrastructure is unavailable.',
    role: 'Service UX, booking architecture, responsive implementation, and provider fallbacks',
    capabilities: ['Booking UX', 'Service catalog', 'Fallback states'],
    image: '/work/vickys-lash-lab.png',
    imageAlt: "Vicky's Lash Lab neon pink and orange logo",
    imageFit: 'contain',
    liveUrl: 'https://vickys-lash-site.vercel.app/',
    repoUrl: 'https://github.com/FeeTheDeveloper/vickys-lash-site',
    boundary:
      'Displayed services, deposit terms, appointment availability, client approval, and gallery rights remain brand-controlled facts.',
  },
  {
    id: 'feecom',
    name: 'Feecom Electronics',
    stage: 'Strengthen',
    status: 'Live presentation',
    category: 'Electronics + trust',
    summary:
      'A structured electronics-company presence that explains products, transaction steps, contact paths, and trust considerations.',
    role: 'Information architecture, responsive web delivery, trust content, and launch readiness',
    capabilities: ['B2B/DTC web', 'Trust content', 'SEO foundation'],
    image: '/work/feecom-electronics.png',
    imageAlt: 'Gold stars and eagle artwork used by Feecom Electronics',
    liveUrl: 'https://feecom-electronics-site.vercel.app/',
    repoUrl: 'https://github.com/FeeTheDeveloper/Feecom_electronics-site',
    boundary:
      'Company, verification, product, selling, fulfillment, and compliance claims require current Feecom source records before reuse.',
  },
  {
    id: 'good-az-gold',
    name: 'Good Az Gold Productions',
    stage: 'Build',
    status: 'Live presentation',
    category: 'Film + branded content',
    summary:
      'A cinematic production-company presence spanning film, music, live experiences, branded content, and project inquiry.',
    role: 'Visual direction, front-end implementation, capability architecture, and conversion flow',
    capabilities: ['Creative web', 'Service positioning', 'Inquiry path'],
    image: '/work/good-az-gold.png',
    imageAlt: 'Good Az Gold Productions cinematic social card',
    liveUrl: 'https://good-azgold-site.vercel.app/',
    repoUrl: 'https://github.com/FeeTheDeveloper/good_azgold-site',
    boundary:
      'Portfolio media, production credits, alliances, confidentiality language, and client approval remain separately verified production facts.',
  },
  {
    id: 'vet-gang',
    name: 'Vet Gang',
    stage: 'Strengthen',
    status: 'Live presentation',
    category: 'Veteran network',
    summary:
      'A mission-led network experience with membership, partnership, contact, and press surfaces organized around clear routes to participate.',
    role: 'Brand system, membership UX, intake surfaces, and responsive implementation',
    capabilities: ['Network UX', 'Membership paths', 'Press surface'],
    image: '/work/vet-gang.png',
    imageAlt: 'Vet Gang military-inspired eagle and airborne artwork',
    imageFit: 'contain',
    liveUrl: 'https://vetgang-site.vercel.app/',
    repoUrl: 'https://github.com/FeeTheDeveloper/vetgang-site',
    boundary:
      'Membership, verification, partner, opportunity, and intake-processing claims require current Vet Gang operating evidence.',
  },
  {
    id: 'runner-demon',
    name: 'Runner Sports Demon',
    stage: 'Connect',
    status: 'Technical case study',
    category: 'Local-first intelligence engine',
    summary:
      'A source-aware TypeScript engine for discovery, normalization, immutable observations, local monitoring, and curated publication boundaries.',
    role: 'Data contracts, provider normalization, local operations, controls, and observability',
    capabilities: ['TypeScript engine', 'Data lineage', 'Fail-closed controls'],
    image: '/work/runner-demon.svg',
    imageAlt: 'Diagram of the Runner Demon local intelligence pipeline',
    imageFit: 'contain',
    repoUrl: 'https://github.com/FeeTheDeveloper/runner_sports_demon',
    boundary:
      'Code case study only. It does not claim a calibrated live model, automatic publishing, automated wagering, or public production availability.',
  },
];
