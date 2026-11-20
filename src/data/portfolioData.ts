/**
 * ============================================================================
 * PORTFOLIO DATA & CUSTOMIZATION FILE — MUKTA KOLHE
 * ============================================================================
 * Edit this file to update your profile image, project screenshots, GitHub/Live
 * Demo URLs, hackathon dates, certificates, and future projects.
 * ============================================================================
 */

export interface SkillItem {
  name: string;
  /** Optional editable level label (e.g. "Core", "Intermediate", "Learning") — leave blank if not needed */
  level?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  items: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline?: string;
  category: string;
  filterGroup: 'finance' | 'ai' | 'smart-city';
  /** REPLACE WITH ACTUAL PROJECT SCREENSHOT PATH OR URL (e.g. "/images/budgetbuddy.png") */
  screenshotUrl: string;
  shortDescription: string;
  problemSolved: string;
  keyFeatures: string[];
  categories?: string[];
  technologies: string[];
  /** REPLACE WITH ACTUAL LIVE DEMO URL WHEN DEPLOYED (leave "" if not yet deployed) */
  liveDemoUrl: string;
  /** REPLACE WITH ACTUAL GITHUB REPOSITORY URL (leave "" if not yet published) */
  githubUrl: string;
  visualType: 'budgetbuddy' | 'finnews' | 'citysense';
}

export interface ExperienceCategory {
  id: string;
  categoryTitle: string;
  /** EDITABLE: Add specific event name when ready */
  eventName: string;
  summary: string;
  highlights: string[];
  /** REPLACE WITH CERTIFICATE IMAGE OR LINK WHEN AVAILABLE */
  certificateUrl: string;
}

export interface AchievementItem {
  id: string;
  category: string;
  title: string;
  /** EDITABLE: Issuing organization */
  organization: string;
  /** EDITABLE: Issue date */
  date: string;
  description: string;
  /** REPLACE WITH CERTIFICATE THUMBNAIL IMAGE PATH (leave "" to use clean styled frame) */
  certificateImageUrl: string;
  /** REPLACE WITH VERIFICATION OR CERTIFICATE PDF URL */
  certificateUrl: string;
}

export const PROFILE_DATA = {
  fullName: 'Mukta Kolhe',
  greetingHeading: "Hi, I'm Mukta Kolhe! 👋",
  /**
   * PROFILE PHOTOGRAPH
   */
  profileImageUrl: '/assets/aistudio/image_91e609ea.png',
  rotatingRoles: [
    'Computer Engineering Student',
    'AI Enthusiast',
    'Web Developer',
    'Aspiring Software Developer',
    'Hackathon Enthusiast',
    'Technology Explorer',
  ],
  heroIntro:
    "I'm a Computer Engineering student passionate about Artificial Intelligence, web development, and building innovative solutions. I love exploring new technologies, solving real-world problems, and transforming ideas into impactful projects.",
  aboutParagraphs: [
    "Hello! I'm Mukta Kolhe, a Computer Engineering student with a strong interest in Artificial Intelligence, Web Development, and emerging technologies.",
    'I enjoy building innovative projects, participating in hackathons, experimenting with AI-powered tools, and developing solutions to real-world problems.',
    'I believe in continuous learning, creativity, teamwork, and practical implementation of technology.',
    'My goal is to grow as a skilled software developer and AI enthusiast while contributing to meaningful technological innovations.',
  ],
  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Web Development',
    'Problem Solving',
    'Software Development',
    'Hackathons',
    'Innovation',
    'Technology',
  ],
  contact: {
    email: 'muktakolhe06@gmail.com',
    github: 'https://github.com/muktakolhe15',
    linkedin: 'https://www.linkedin.com/in/mukta-kolhe',
  },
};

export const EDUCATION_DATA = {
  degree: 'Bachelor of Technology (B.Tech)',
  branch: 'Computer Engineering',
  college: 'D.Y. Patil College of Engineering and Innovation',
  engineeringDuration: '2025–2029',
  academicYear: '2026–2027',
  expectedGraduationYear: '2029',
  timelineMilestones: [
    {
      period: '2025',
      title: 'Started B.Tech in Computer Engineering',
      subtitle: 'D.Y. Patil College of Engineering and Innovation',
      note: 'Began the four-year Bachelor of Technology journey (2025–2029) in Computer Engineering.',
    },
    {
      period: '2026–2027',
      title: 'Current Academic Year',
      subtitle: 'D.Y. Patil College of Engineering and Innovation',
      note: 'Building strong foundations in software development, Artificial Intelligence, and web engineering.',
    },
    {
      period: '2029 (Expected)',
      title: 'Expected Graduation',
      subtitle: 'Bachelor of Technology — Computer Engineering (2025–2029)',
      note: 'Continuing practical development across AI systems, web applications, and collaborative hackathons.',
    },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    description: 'Core languages used for problem solving, algorithms, and application logic.',
    items: [
      { name: 'C', level: 'Editable' },
      { name: 'C++', level: 'Editable' },
      { name: 'Python', level: 'Editable' },
      { name: 'JavaScript', level: 'Editable' },
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Frontend technologies for responsive, accessible, modern user interfaces.',
    items: [
      { name: 'HTML5', level: 'Editable' },
      { name: 'CSS3', level: 'Editable' },
      { name: 'JavaScript', level: 'Editable' },
      { name: 'React', level: 'Editable' },
      { name: 'Responsive Web Design', level: 'Editable' },
      { name: 'Tailwind CSS', level: 'Editable' },
    ],
  },
  {
    id: 'backend-database',
    title: 'Backend & Database',
    description: 'Server frameworks, REST APIs, and structured/NoSQL data storage.',
    items: [
      { name: 'Node.js', level: 'Editable' },
      { name: 'Express.js', level: 'Editable' },
      { name: 'FastAPI', level: 'Editable' },
      { name: 'MongoDB', level: 'Editable' },
      { name: 'MySQL', level: 'Editable' },
    ],
  },
  {
    id: 'ai-technology',
    title: 'AI & Technology',
    description: 'Applying artificial intelligence and generative models to real-world workflows.',
    items: [
      { name: 'Artificial Intelligence', level: 'Editable' },
      { name: 'AI-powered application development', level: 'Editable' },
      { name: 'Generative AI tools', level: 'Editable' },
      { name: 'API Integration', level: 'Editable' },
      { name: 'Machine Learning fundamentals', level: 'Editable' },
    ],
  },
  {
    id: 'tools-platforms',
    title: 'Tools & Platforms',
    description: 'Development environments, version control, AI prototyping, and UI design.',
    items: [
      { name: 'GitHub', level: 'Editable' },
      { name: 'VS Code', level: 'Editable' },
      { name: 'Git', level: 'Editable' },
      { name: 'Google AI Studio', level: 'Editable' },
      { name: 'Lovable', level: 'Editable' },
      { name: 'Figma', level: 'Editable' },
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'budgetbuddy',
    title: 'BudgetBuddy',
    category: 'Personal Finance / Smart Budget Management',
    filterGroup: 'finance',
    // REPLACE WITH ACTUAL BUDGETBUDDY SCREENSHOT PATH
    screenshotUrl: '',
    shortDescription:
      'A personal finance and smart budget management project focused on helping individuals organize budgets and manage everyday financial planning.',
    problemSolved:
      'Addresses the challenge students and everyday users face when organizing personal budgets and maintaining clarity over financial planning.',
    keyFeatures: [
      'Personal finance and smart budget management focus',
      'Editable feature slot — add specific BudgetBuddy workflows as finalized',
    ],
    // EDITABLE: Update with the confirmed BudgetBuddy tech stack
    technologies: ['Editable Stack (Add Confirmed Technologies)'],
    // LIVE DEMO & GITHUB URLS
    liveDemoUrl: 'https://floralfinance.lovable.app/',
    githubUrl: '',
    visualType: 'budgetbuddy',
  },
  {
    id: 'finnews-ai',
    title: 'FinNews AI – Financial News Simplifier',
    tagline: 'Complex Financial News. Made Simple.',
    category: 'AI & Financial Technology',
    filterGroup: 'ai',
    // REPLACE WITH ACTUAL FINNEWS AI SCREENSHOT PATH
    screenshotUrl: '',
    shortDescription:
      'FinNews AI is an AI-powered financial news simplification platform designed to make complex financial information easier to understand for students, beginners, retail investors, and busy professionals.',
    problemSolved:
      'Bridges the comprehension gap in dense market reporting by turning jargon-heavy financial news into clear, structured takeaways.',
    keyFeatures: [
      'Financial news retrieval',
      'AI-powered news simplification',
      'Executive TL;DR summaries',
      'Explanation of what happened',
      'Why it matters section',
      'Important takeaway bullets',
      'Financial jargon explanations',
      'Custom article simplification',
      'Financial terminology explanations',
    ],
    categories: [
      'Markets',
      'Economy',
      'Technology',
      'Banking',
      'Global Markets',
      'Startups',
      'Cryptocurrency',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'HTML',
      'CSS',
      'JavaScript',
      'NewsAPI',
      'Groq AI / Llama 3.3 70B',
    ],
    // LIVE DEMO & GITHUB URLS
    liveDemoUrl: 'https://finnews-ai.ai.studio',
    githubUrl: '',
    visualType: 'finnews',
  },
  {
    id: 'citysense-ai',
    title: 'CitySense AI – Smart City Explorer',
    category: 'Smart City & Urban Intelligence',
    filterGroup: 'smart-city',
    // REPLACE WITH ACTUAL CITYSENSE AI SCREENSHOT PATH
    screenshotUrl: '',
    shortDescription:
      'CitySense AI is a smart city exploration platform designed to help people explore cities, understand urban environments, and access useful city-related information through intelligent technology.',
    problemSolved:
      'Brings fragmented urban environment insights—location context, weather, safety insights, city comparisons, and citizen reporting—into one accessible explorer.',
    keyFeatures: [
      'Smart city exploration',
      'Location-based information',
      'Interactive maps',
      'Weather information',
      'Safety-related insights',
      'City comparisons',
      'Citizen participation and reporting',
    ],
    // EDITABLE: Replace with confirmed technologies used in CitySense AI
    technologies: ['Editable Stack (Confirm Technologies)'],
    // LIVE DEMO & GITHUB URLS
    liveDemoUrl: 'https://remix-citysense-ai-smart-city-explorer-6300.ai.studio',
    githubUrl: '',
    visualType: 'citysense',
  },
];

export const EXPERIENCES_DATA: ExperienceCategory[] = [
  {
    id: 'hackathons',
    categoryTitle: 'Hackathons',
    eventName: 'Smart India Hackathon (SIH) & Innovation Challenges',
    summary:
      'Hands-on collaborative engineering focused on rapid ideation, AI integration, and building practical solutions under time constraints.',
    highlights: [
      'Smart India Hackathon (SIH) project experience',
      'AI and technology-based project development',
      'Team collaboration and problem-solving',
      'Building solutions for real-world challenges',
    ],
    // REPLACE WITH HACKATHON CERTIFICATE LINK OR IMAGE
    certificateUrl: '',
  },
  {
    id: 'technical-activities',
    categoryTitle: 'Technical Activities',
    eventName: 'College Technical Events & Project Presentations',
    summary:
      'Active involvement in academic technical events, presenting software prototypes, and exploring emerging engineering practices.',
    highlights: [
      'Technical competitions',
      'College-level technical events',
      'Innovation and project presentations',
      'Exploring emerging technologies',
    ],
    // REPLACE WITH EVENT CERTIFICATE LINK OR IMAGE
    certificateUrl: '',
  },
  {
    id: 'other-experiences',
    categoryTitle: 'Other Experiences',
    eventName: 'Technical Clubs, Workshops & Student Initiatives',
    summary:
      'Continuous peer learning through campus technical communities, hands-on workshops, and collaborative software initiatives.',
    highlights: [
      'Technical club and college activities',
      'Student initiatives',
      'Technology workshops',
      'Collaborative project development',
    ],
    // REPLACE WITH WORKSHOP / CLUB CERTIFICATE LINK OR IMAGE
    certificateUrl: '',
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'cert-online',
    category: 'Online Certifications',
    title: 'Online Certification (Editable Slot)',
    organization: 'Issuing Organization (Editable)',
    date: 'Month Year (Editable)',
    description:
      'Dedicated slot for online technical certifications in AI, programming, or web development. Update title, issuer, and link when added.',
    certificateImageUrl: '',
    certificateUrl: '',
  },
  {
    id: 'cert-workshop',
    category: 'Technical Workshops',
    title: 'Technical Workshop Participation (Editable Slot)',
    organization: 'Workshop Host / Institution (Editable)',
    date: 'Month Year (Editable)',
    description:
      'Dedicated slot for hands-on workshops covering Artificial Intelligence tools, full-stack development, or modern developer workflows.',
    certificateImageUrl: '',
    certificateUrl: '',
  },
  {
    id: 'cert-hackathon',
    category: 'Hackathon Participation',
    title: 'Hackathon Participation Record (Editable Slot)',
    organization: 'Hackathon Organizer (Editable)',
    date: 'Month Year (Editable)',
    description:
      'Dedicated slot for Smart India Hackathon (SIH) and inter-collegiate hackathon participation documentation.',
    certificateImageUrl: '',
    certificateUrl: '',
  },
  {
    id: 'cert-competition',
    category: 'Technical Competitions & College Events',
    title: 'Technical Competition / College Event (Editable Slot)',
    organization: 'D.Y. Patil College / Event Committee (Editable)',
    date: 'Month Year (Editable)',
    description:
      'Dedicated slot for project presentations, technical competitions, and campus engineering events.',
    certificateImageUrl: '',
    certificateUrl: '',
  },
  {
    id: 'cert-training',
    category: 'Training & Student Development Programs',
    title: 'Training / Student Development Program (Editable Slot)',
    organization: 'Program Provider (Editable)',
    date: 'Month Year (Editable)',
    description:
      'Dedicated slot for structured training programs, bootcamps, and student skill development initiatives.',
    certificateImageUrl: '',
    certificateUrl: '',
  },
];
