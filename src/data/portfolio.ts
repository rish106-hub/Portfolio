export type Accent = 'orange' | 'blue' | 'yellow' | 'mint';

export interface ProofPoint {
  icon: string;
  title: string;
  context: string;
  description: string;
  tags: string[];
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
  accent: Accent;
}

export interface Credential {
  label: string;
  detail: string;
  href?: string;
  accent: Accent;
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

export const resumeHref = '/Rishav_Dewan_Resume.pdf';

export const profileCards = [
  {
    icon: '🎓',
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
    icon: '🎙️',
    title: 'Voice assessment at campus scale',
    context: 'Rishi Bolo | Rishihood University',
    description:
      'Built the assessment and placement logic for 850+ learners, including retakes, faculty review, and manual path overrides. The system earned 4.8/5 feedback from 500+ learners.',
    tags: ['ElevenLabs', 'Rules engine', '850+ learners'],
    accent: 'yellow',
  },
  {
    icon: '🛟',
    title: 'Git without the panic',
    context: 'GitRescue | VS Code + Cursor',
    description:
      'Shipped a sidebar companion that explains what Git sees, why the state matters, and the safest next step. Ten audited handlers and two-step safeguards protect destructive operations.',
    tags: ['TypeScript', 'VS Code API', 'Real Git tests'],
    accent: 'orange',
  },
  {
    icon: '₹',
    title: 'Tax gaps surfaced in minutes',
    context: 'ARTH | Privacy-first fintech',
    description:
      'Directed a seven-question tax-readiness flow spanning 8+ deduction categories, regime comparison, encrypted document storage, and clear next actions for salaried Indians.',
    tags: ['Flutter', 'Fastify', 'PostgreSQL'],
    accent: 'mint',
  },
];

export const experiences: Experience[] = [
  {
    role: 'AI Evaluation Project (Contract)',
    company: 'Scale AI',
    period: 'May 2026 - July 2026',
    location: 'Remote',
    summary:
      'Completed a three-month Scale AI contract focused on making LLM behavior more reliable and measurable.',
    achievements: [
      'Worked across prompt experimentation, evaluation workflows, and model-quality analysis.',
      'Protected project details and customer information under NDA.',
    ],
    stack: ['LLM evaluation', 'Prompt experimentation', 'Quality analysis'],
    accent: 'orange',
    logo: 'https://www.google.com/s2/favicons?domain=scale.com&sz=128',
    logoAlt: 'Scale AI logo',
  },
  {
    role: 'Product Intern',
    company: 'Newton School',
    period: 'February 2026 - May 2026',
    location: 'Bengaluru, India',
    summary:
      'Owned product direction for Mieru, an explainable resume-screening workflow connected to Koyo AI interviews.',
    achievements: [
      'Designed JD analysis, dynamic rubric synthesis, parallel scoring, ranked shortlists, and field-level reasoning.',
      'Validated the workflow on 2,000+ resumes from PW and Allen Digital hiring drives.',
      'Reduced false positives by 40% and cut screening from roughly 120 to 60-90 minutes.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'Gemini 2.5 Flash', 'Koyo'],
    accent: 'blue',
    logo: 'https://www.google.com/s2/favicons?domain=newtonschool.co&sz=128',
    logoAlt: 'Newton School logo',
  },
  {
    role: 'Product & Growth Associate Intern',
    company: 'Enzo Lab',
    period: 'August 2025 - October 2025',
    location: 'New Delhi, India',
    summary:
      'Worked across product design, funnel diagnosis, growth systems, and implementation for startup and education clients.',
    achievements: [
      'Shipped UX and homepage revamps for 10+ clients including Scaler, Arizona State University, Allen Digital, Wiom, and Cintana.',
      'Launched the Product × People podcast and built its taxonomy, cadence, and guest pipeline.',
      'Grew Enzo Lab\'s LinkedIn audience by 50% in three months.',
    ],
    stack: ['User journeys', 'Funnel analysis', 'GTM', 'Content systems'],
    accent: 'mint',
    logo: 'https://www.google.com/s2/favicons?domain=enzolab.in&sz=128',
    logoAlt: 'Enzo Lab logo',
  },
  {
    role: "Founder’s Office Intern",
    company: 'Rishihood University',
    period: 'February 2025 - July 2025',
    location: 'Sonipat, India',
    summary:
      'Built Rishi Bolo, a voice assessment and learning-path system for a large learner cohort.',
    achievements: [
      'Designed the passage assessment, four-tier placement logic, and personalized progression paths.',
      'Added retakes, faculty review, and authorized manual overrides for edge cases.',
      'Reached 850+ learners and earned 4.8/5 feedback from 500+ learners.',
    ],
    stack: ['ElevenLabs', 'Learning design', 'Workflow design'],
    accent: 'yellow',
    logo: 'https://www.google.com/s2/favicons?domain=rishihood.edu.in&sz=128',
    logoAlt: 'Rishihood University logo',
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
    logo: '/bnbeyond-mark.svg',
    logoAlt: 'bnBeyond monogram',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Product',
    items: ['Product strategy', 'User research', 'Roadmapping', 'GTM', 'Funnel analysis', 'PRDs'],
    accent: 'yellow',
  },
  {
    category: 'Engineering',
    items: ['TypeScript', 'React', 'Next.js', 'Node.js', 'FastAPI', 'REST APIs'],
    accent: 'blue',
  },
  {
    category: 'AI',
    items: ['RAG', 'MCP', 'Agentic systems', 'Model evaluation', 'Prompt engineering'],
    accent: 'orange',
  },
  {
    category: 'Data + Cloud',
    items: ['PostgreSQL', 'Supabase', 'MySQL', 'AWS', 'Vercel', 'pgvector'],
    accent: 'mint',
  },
  {
    category: 'Tools',
    items: ['Git', 'Figma', 'Linear', 'Jira', 'Mixpanel', 'Amplitude'],
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
    accent: 'mint',
  },
  {
    title: 'Mieru',
    role: 'Product + explainable AI screening',
    description:
      'A six-stage recruiter workflow that turns resumes and a JD into an editable rubric, transparent evidence, and ranked shortlists before passing context to Koyo interviews.',
    image: '/nexthire-project.svg',
    imageAlt: 'Mieru resume screening workflow interface',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Gemini 2.5'],
    github: 'https://github.com/rish106-hub/ats-frontend',
    accent: 'blue',
  },
  {
    title: 'CostSense',
    role: 'Product + multi-agent systems',
    description:
      'A nine-agent cost intelligence pipeline that detects spend anomalies, scores financial impact, and routes high-risk actions to a CFO approval gate.',
    image: '/costsense-project.svg',
    imageAlt: 'CostSense autonomous cost intelligence dashboard',
    tags: ['Python', 'FastAPI', 'LangChain', 'pgvector'],
    github: 'https://github.com/rish106-hub/CostSense',
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
    title: 'EatRight',
    description: 'MCP-powered dinner assistant that finds the smallest useful Food or Instamart add-on.',
    href: 'https://github.com/rish106-hub/EatRight',
    tags: ['Next.js', 'MCP', 'Zod'],
    accent: 'mint' as Accent,
  },
  {
    title: 'Leadline',
    description: 'User-reviewed WhatsApp lead capture into safe Google Sheets records.',
    href: 'https://github.com/rish106-hub/Leadline',
    tags: ['Chrome extension', 'OAuth', 'Sheets API'],
    accent: 'blue' as Accent,
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
  },
  {
    label: 'Google UX Design',
    detail: 'Professional Certificate',
    accent: 'mint',
  },
  {
    label: '1st Prize × 2',
    detail: 'BITS Product Paradox + NSUT Product Reinvent',
    accent: 'yellow',
  },
  {
    label: 'HPAIR Delegate',
    detail: 'Selected for 2025 and 2026',
    accent: 'blue',
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
