export type Accent = 'orange' | 'blue' | 'yellow' | 'mint';

export interface ProofPoint {
  icon: string;
  title: string;
  context: string;
  description: string;
  tags: string[];
  links?: Array<{ label: string; href: string }>;
  invitation?: string;
  accent: Accent;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  stack: string[];
  accent: Accent;
  logo: string;
  logoAlt: string;
  logoMode: 'symbol' | 'wordmark';
  featureLinks?: Array<{
    label: string;
    eyebrow: string;
    href: string;
    kind: 'product' | 'youtube';
  }>;
}

export interface Project {
  title: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  github: string;
  live?: string;
  release?: string;
  accent: Accent;
}

export interface Credential {
  label: string;
  detail: string;
  href?: string;
  accent: Accent;
  logo?: string;
  logoAlt?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
  accent: Accent;
}

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  icon: string;
  accent: Accent;
}

export interface OwnershipStory {
  title: string;
  eyebrow: string;
  logo: string;
  logoAlt: string;
  metric: string;
  metricLabel: string;
  description: string;
  href?: string;
  accent: Accent;
}

export const resumeOptions = [
  {
    label: 'Product Management resume',
    href: 'https://drive.google.com/uc?export=download&id=1RwGzQU0sfRJjfqtiJ9YWDF-tJ88v3JIk',
  },
  {
    label: 'Software Engineering resume',
    href: 'https://drive.google.com/uc?export=download&id=1lyFKQf9T9PKrQIWw0VFdwtKVrfqoghD_',
  },
] as const;

export const ownershipStories: OwnershipStory[] = [
  {
    title: 'Built the screening decision system',
    eyebrow: 'Mieru + Koyo',
    logo: '/company-logos/newton-school.svg',
    logoAlt: 'Newton School logo',
    metric: '40%',
    metricLabel: 'fewer false positives',
    description:
      'Directed the six-stage screening workflow, evidence model, ranked shortlist, and Koyo interview handoff across 2,000+ resumes.',
    href: 'https://koyo.newtonschool.co/',
    accent: 'blue',
  },
  {
    title: 'Worked on a learning app at scale',
    eyebrow: 'ALLEN Digital',
    logo: '/organization-logos/allen.svg',
    logoAlt: 'ALLEN Digital logo',
    metric: '5M+',
    metricLabel: 'Google Play downloads',
    description:
      'Contributed product and experience work to the ALLEN Digital learning app used by students across India.',
    href: 'https://play.google.com/store/apps/details?id=digital.allen.study',
    accent: 'yellow',
  },
  {
    title: 'Moved a public-sector mandate to margin',
    eyebrow: 'Government of Lakshadweep',
    logo: '/organization-logos/lakshadweep-government.png',
    logoAlt: 'Government of Lakshadweep emblem',
    metric: '18%',
    metricLabel: 'profit margin',
    description:
      'Worked through the supply-chain problem, operating constraints, and recommendations for a government consulting mandate.',
    href: 'https://lakshadweep.gov.in/',
    accent: 'orange',
  },
  {
    title: 'Turned traffic into conversion',
    eyebrow: 'Apollo MedSkills',
    logo: '/organization-logos/apollo-medskills.png',
    logoAlt: 'Apollo MedSkills logo',
    metric: '13%',
    metricLabel: 'conversion improvement',
    description:
      'Contributed to product and growth work that also produced a 7% traffic uplift for the healthcare-skilling platform.',
    href: 'https://www.apollomedskills.com/',
    accent: 'mint',
  },
  {
    title: 'Owned the learner assessment workflow',
    eyebrow: 'Rishihood University',
    logo: '/company-logos/rishihood-university.png',
    logoAlt: 'Rishihood University logo',
    metric: '850+',
    metricLabel: 'learners served',
    description:
      'Designed voice assessment, four-tier placement, personalized paths, retakes, faculty review, and authorized overrides.',
    href: 'https://rishihood.edu.in/',
    accent: 'blue',
  },
  {
    title: 'Tripled booking conversion',
    eyebrow: 'bnBeyond',
    logo: '/company-logos/bnbeyond.png',
    logoAlt: 'bnBeyond logo',
    metric: '5→15%',
    metricLabel: 'Airbnb conversion in 25 days',
    description:
      'Built the Guesty, Zapier, and paid-acquisition operating stack while reducing CAC and manual operational work.',
    accent: 'mint',
  },
];

export const profileCards = [
  {
    icon: '🎓',
    logo: '/company-logos/rishihood-university.png',
    logoAlt: 'Rishihood University logo',
    title: 'Education',
    headline: 'Rishihood University',
    lines: ['B.Tech in Computer Science and Artificial Intelligence', 'Minor in Finance', '2024 - 2028'],
    accent: 'yellow' as Accent,
  },
  {
    icon: '🧠',
    title: 'Operating Mode',
    headline: 'AI-native product builder',
    lines: ['Product judgment + technical direction', 'Fast experiments with real validation', 'Systems that explain their decisions'],
    accent: 'blue' as Accent,
  },
  {
    icon: '🚀',
    logo: '/organization-logos/arthakram.png',
    logoAlt: 'Arthakram logo',
    title: 'Leadership',
    headline: 'Former President, Arthakram',
    lines: ['December 2025 - July 2026', '50+ member product and consulting club', '10+ consulting mandates'],
    accent: 'mint' as Accent,
  },
];

export const proofPoints: ProofPoint[] = [
  {
    icon: '🔎',
    title: 'Screening with reasons, not guesses',
    context: 'Mieru + Koyo | Newton School',
    description:
      'Directed a six-stage resume screening workflow, then carried structured evidence into Koyo interview sessions. Validated across 2,000+ resumes and reduced false positives by 40% versus Binary.so.',
    tags: ['Gemini 2.5', 'FastAPI', 'Human in the loop'],
    accent: 'blue',
  },
  {
    icon: '🗓️',
    title: 'Know the debit before it hits',
    context: 'DebitMap | Personal finance intelligence',
    description:
      'Built an explainable 30-day recurring-debit forecast from Indian bank and payment messages. On held-out FinEE test data, its lightweight classifier reached 92.16% category accuracy while keeping normalized financial data on-device.',
    tags: ['Kotlin', 'FastAPI', 'Privacy by design'],
    links: [{ label: 'View source', href: 'https://github.com/rish106-hub/debitmap' }],
    invitation: 'Collaborators welcome',
    accent: 'yellow',
  },
  {
    icon: '🛟',
    title: 'Git without the panic',
    context: 'GitRescue | VS Code + Cursor',
    description:
      'Shipped a sidebar companion that explains what Git sees, why the state matters, and the safest next step. Ten audited handlers and two-step safeguards protect destructive operations.',
    tags: ['TypeScript', 'VS Code API', 'Real Git tests'],
    links: [
      {
        label: 'VS Code Marketplace',
        href: 'https://marketplace.visualstudio.com/items?itemName=rish106-hub.git-rescue',
      },
    ],
    invitation: 'Collaborators welcome',
    accent: 'orange',
  },
  {
    icon: '₹',
    title: 'Tax gaps surfaced in minutes',
    context: 'ARTH | Privacy-first fintech',
    description:
      'Directed a seven-question tax-readiness flow spanning 8+ deduction categories, regime comparison, encrypted document storage, and clear next actions for salaried Indians.',
    tags: ['Flutter', 'Fastify', 'PostgreSQL'],
    links: [
      {
        label: 'Download ARTH release',
        href: 'https://github.com/rish106-hub/ARTH/releases/tag/v1.0.0-debug.1',
      },
      {
        label: 'Product Hunt',
        href: 'https://www.producthunt.com/products/arth-2',
      },
    ],
    invitation: 'Beta testers + collaborators',
    accent: 'mint',
  },
];

export const experiences: Experience[] = [
  {
    role: 'AI Product Intern (Contract)',
    company: 'Scale AI',
    period: 'May 2026 - July 2026',
    location: 'San Francisco, USA',
    summary:
      'Working on a three-month AI product contract from May through July 2026, focused on making LLM behavior more reliable and measurable.',
    achievements: [
      'Worked across prompt experimentation, evaluation workflows, and model-quality analysis.',
      'Protected project details and customer information under NDA.',
    ],
    stack: ['LLM evaluation', 'Prompt experimentation', 'Quality analysis'],
    accent: 'orange',
    logo: '/company-logos/scale-ai.svg',
    logoAlt: 'Scale AI logo',
    logoMode: 'wordmark',
  },
  {
    role: 'Product Intern',
    company: 'Newton School',
    period: 'February 2026 - May 2026',
    location: 'Bengaluru, India',
    summary:
      'Worked across Mieru and Koyo, connecting explainable resume screening with structured AI interview workflows.',
    achievements: [
      'Designed JD analysis, dynamic rubric synthesis, parallel scoring, ranked shortlists, and field-level reasoning.',
      'Validated the workflow on 2,000+ resumes from PW and Allen Digital hiring drives.',
      'Reduced false positives by 40% and cut screening from roughly 120 to 60-90 minutes.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'Gemini 2.5 Flash', 'Koyo'],
    accent: 'blue',
    logo: '/company-logos/newton-school.svg',
    logoAlt: 'Newton School logo',
    logoMode: 'wordmark',
    featureLinks: [
      {
        label: 'Open Koyo',
        eyebrow: 'AI interview product',
        href: 'https://koyo.newtonschool.co/',
        kind: 'product',
      },
    ],
  },
  {
    role: 'Product & Growth Associate Intern',
    company: 'Enzo Lab',
    period: 'August 2025 - October 2025',
    location: 'New Delhi, India',
    summary:
      'Worked across product design, funnel diagnosis, growth systems, and implementation for startup and education clients.',
    achievements: [
      'Shipped UX and homepage revamps for 10+ clients including Scaler, Arizona State University, Wiom, and Cintana; contributed to the ALLEN Digital learning app, which has 5M+ Google Play downloads.',
      'Launched the Product × People podcast and built its taxonomy, cadence, and guest pipeline.',
      'Grew Enzo Lab\'s LinkedIn audience by 50% in three months.',
    ],
    stack: ['User journeys', 'Funnel analysis', 'GTM', 'Content systems'],
    accent: 'mint',
    logo: '/company-logos/enzo-lab.png',
    logoAlt: 'Enzo Lab logo',
    logoMode: 'wordmark',
    featureLinks: [
      {
        label: 'Watch ProductXPeople',
        eyebrow: 'YouTube series',
        href: 'https://www.youtube.com/@ProductXPeople',
        kind: 'youtube',
      },
    ],
  },
  {
    role: "Founder’s Office Intern",
    company: 'Rishihood University',
    period: 'February 2025 - July 2025',
    location: 'Sonipat, India',
    summary:
      'Built a voice assessment and personalized learning-path workflow for a large learner cohort.',
    achievements: [
      'Designed the passage assessment, four-tier placement logic, and personalized progression paths.',
      'Added retakes, faculty review, and authorized manual overrides for edge cases.',
      'Reached 850+ learners and earned 4.8/5 feedback from 500+ learners.',
    ],
    stack: ['ElevenLabs', 'Learning design', 'Workflow design'],
    accent: 'yellow',
    logo: '/company-logos/rishihood-university.png',
    logoAlt: 'Rishihood University logo',
    logoMode: 'wordmark',
  },
  {
    role: 'Process Automation Intern',
    company: 'bnBeyond',
    period: 'October 2024 - December 2024',
    location: 'Remote, Dubai',
    summary:
      'Built an acquisition and operations stack for a short-term rental business.',
    achievements: [
      'Connected Guesty, Zapier, and paid acquisition workflows.',
      'Raised Airbnb conversion from 5% to 15% in 25 days.',
      'Reduced CAC by 5% and improved operational efficiency by 20%.',
    ],
    stack: ['Guesty', 'Zapier', 'Meta Ads', 'Process automation'],
    accent: 'orange',
    logo: '/company-logos/bnbeyond.png',
    logoAlt: 'bnBeyond hospitality redefined logo',
    logoMode: 'wordmark',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Product',
    items: ['Product strategy', 'User research', 'Roadmapping', 'PRDs', 'GTM', 'Funnel analysis'],
    accent: 'yellow',
  },
  {
    category: 'Engineering',
    items: ['Python', 'JavaScript', 'TypeScript', 'MERN', 'SQL', 'REST APIs'],
    accent: 'blue',
  },
  {
    category: 'AI + Data',
    items: ['Machine learning', 'GenAI', 'RAG', 'MCP', 'Model evaluation', 'Tableau'],
    accent: 'orange',
  },
  {
    category: 'Analytics',
    items: ['PostHog', 'Mixpanel', 'Amplitude', 'Google Analytics', 'Hotjar'],
    accent: 'mint',
  },
  {
    category: 'PM + Delivery Tools',
    items: ['Linear', 'Jira', 'Notion', 'Figma', 'Miro', 'Google Sheets', 'Git'],
    accent: 'yellow',
  },
];

export const projects: Project[] = [
  {
    title: 'ARTH',
    role: 'Product direction + mobile fintech',
    description:
      'A privacy-first tax-readiness app that identifies deduction gaps, compares tax regimes, and turns a complex filing problem into prioritized actions.',
    image: '/arth-project.jpeg',
    imageAlt: 'ARTH tax gap intelligence app screens',
    tags: ['Flutter', 'Fastify', 'PostgreSQL', 'Firebase'],
    github: 'https://github.com/rish106-hub/ARTH',
    live: 'https://arth-website.vercel.app',
    release: 'https://github.com/rish106-hub/ARTH/releases/tag/v1.0.0-debug.1',
    accent: 'mint',
  },
  {
    title: 'Mieru',
    role: 'Product + explainable AI screening',
    description:
      'A six-stage recruiter workflow that turns resumes and a JD into an editable rubric, transparent evidence, and ranked shortlists before passing context to Koyo interviews.',
    image: '/mieru-project.png',
    imageAlt: 'Mieru recruiter workspace with evidence-backed candidate shortlisting',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Gemini 2.5'],
    github: 'https://github.com/rish106-hub/ats-frontend',
    accent: 'blue',
  },
  {
    title: 'Leadline',
    role: 'Product + WhatsApp lead operations',
    description:
      'A Chrome extension that captures WhatsApp leads, lets the user review the record, and writes clean rows to Google Sheets through an explicit OAuth flow.',
    image: '/leadline-project.svg',
    imageAlt: 'Leadline extension interface showing a WhatsApp contact captured into a reviewed Google Sheet lead record',
    tags: ['Chrome extension', 'JavaScript', 'OAuth', 'Sheets API'],
    github: 'https://github.com/rish106-hub/Leadline',
    accent: 'yellow',
  },
  {
    title: 'GitRescue',
    role: 'Product owner + VS Code extension',
    description:
      'An always-on Git companion for VS Code and Cursor that explains repository state in plain English and routes intent only to tested, audited handlers.',
    image: 'https://raw.githubusercontent.com/rish106-hub/gitdoc/main/media/gitrescue-marketplace-banner.svg',
    imageAlt: 'GitRescue marketplace banner showing the Git rescue shield',
    tags: ['TypeScript', 'VS Code API', 'Vitest', 'GitHub Actions'],
    github: 'https://github.com/rish106-hub/gitdoc',
    live: 'https://marketplace.visualstudio.com/items?itemName=rish106-hub.git-rescue',
    accent: 'orange',
  },
];

export const secondaryProjects = [
  {
    title: 'CostSense',
    description: 'Multi-agent cost intelligence with anomaly detection, financial impact scoring, and CFO approval gates.',
    href: 'https://github.com/rish106-hub/CostSense',
    tags: ['Python', 'FastAPI', 'LangChain', 'pgvector'],
    accent: 'yellow' as Accent,
  },
];

export const credentials: Credential[] = [
  {
    label: '17 merged open-source PRs',
    detail: 'Sugar Labs Music Blocks + Apache Superset',
    href: 'https://github.com/pulls?q=is%3Apr+author%3Arish106-hub+is%3Amerged',
    accent: 'orange',
  },
  {
    label: 'IBM AI Product Manager',
    detail: 'Professional Certificate',
    href: 'https://coursera.org/share/a0e450c04e54fa286c50fb97767aa434',
    accent: 'blue',
    logo: '/credential-logos/ibm.svg',
    logoAlt: 'IBM logo',
  },
  {
    label: 'Google UX Design',
    detail: 'Professional Certificate',
    accent: 'mint',
    logo: '/credential-logos/google.svg',
    logoAlt: 'Google logo',
  },
  {
    label: 'HPAIR Delegate',
    detail: 'Selected for 2025 and 2026',
    accent: 'blue',
    logo: '/credential-logos/harvard.svg',
    logoAlt: 'Harvard University shield',
  },
];

export const arthakramPartners = [
  {
    name: 'Velectron Labs',
    logo: '/organization-logos/velectron-labs.png',
    logoAlt: 'Velectron Labs Innovative HealthTech logo',
  },
  {
    name: 'Addictofree',
    logo: '/organization-logos/addictofree.png',
    href: 'https://addictofree.com/',
    logoAlt: 'Addictofree logo',
  },
  {
    name: 'Progience Technologies',
    logo: '/organization-logos/progience-technologies.png',
    href: 'https://progience.com/',
    logoAlt: 'Progience Technologies logo',
  },
  {
    name: 'Almabase',
    logo: '/organization-logos/almabase.png',
    href: 'https://www.almabase.com/',
    logoAlt: 'Almabase logo',
  },
  {
    name: 'Government of Lakshadweep',
    logo: '/organization-logos/lakshadweep-government.png',
    href: 'https://lakshadweep.gov.in/',
    logoAlt: 'Government of India emblem used by the Government of Lakshadweep',
  },
  {
    name: 'Scaler',
    logo: '/organization-logos/scaler.svg',
    href: 'https://www.scaler.com/',
    logoAlt: 'Scaler logo',
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    handle: '/in/rishav-dewan',
    href: 'https://www.linkedin.com/in/rishav-dewan/',
    icon: 'in',
    accent: 'blue',
  },
  {
    label: 'GitHub',
    handle: '@rish106-hub',
    href: 'https://github.com/rish106-hub',
    icon: 'GH',
    accent: 'mint',
  },
  {
    label: 'Email',
    handle: 'rishavdewan10@gmail.com',
    href: 'mailto:rishavdewan10@gmail.com',
    icon: '@',
    accent: 'yellow',
  },
  {
    label: 'Product Hunt',
    handle: '@rishav_dewan',
    href: 'https://www.producthunt.com/@rishav_dewan',
    icon: 'P',
    accent: 'orange',
  },
  {
    label: 'Medium',
    handle: '@rishavdewan10',
    href: 'https://medium.com/@rishavdewan10',
    icon: 'M',
    accent: 'mint',
  },
  {
    label: 'WhatsApp',
    handle: '+91 97494 52397',
    href: 'https://wa.me/919749452397',
    icon: 'WA',
    accent: 'blue',
  },
];
