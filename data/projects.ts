import { Project, ExperienceItem } from '@/types';

export const TRADING_INDICATORS: Project[] = [
  {
    id: 'macd-custom',
    title: 'MACD — Custom Pine Script',
    subtitle: 'Implementación personalizada en Pine Script',
    description: 'Implementación personalizada en Pine Script desarrollada a partir del análisis de comportamiento y parámetros observables de un indicador presentado públicamente.',
    technologies: ['Pine Script', 'TradingView'],
    type: 'trading',
    imageUrl: '/placeholders/macd-preview.png',
    tradingViewUrl: 'MACD_TRADINGVIEW_URL',
    githubUrl: 'GITHUB_URL',
  },
  {
    id: 'stochastic-custom',
    title: 'Stochastic — Custom Pine Script',
    subtitle: 'Implementación personalizada en Pine Script',
    description: 'Implementación personalizada en Pine Script desarrollada mediante análisis de comportamiento, parámetros y validación de señales.',
    technologies: ['Pine Script', 'TradingView'],
    type: 'trading',
    imageUrl: '/placeholders/stochastic-preview.png',
    tradingViewUrl: 'STOCHASTIC_TRADINGVIEW_URL',
    githubUrl: 'GITHUB_URL',
  },
  {
    id: 'tsi-custom',
    title: 'TSI — Custom Implementation',
    subtitle: 'Implementación propia en Pine Script',
    description: 'Implementación propia basada en la metodología estándar del True Strength Index, con parámetros configurables.',
    technologies: ['Pine Script', 'TradingView'],
    type: 'trading',
    imageUrl: '/placeholders/tsi-preview.png',
    tradingViewUrl: 'TSI_TRADINGVIEW_URL',
    githubUrl: 'GITHUB_URL',
  },
  {
    id: 'market-structure-ob',
    title: 'Market Structure & Order Blocks',
    subtitle: 'Herramienta técnica para TradingView',
    description: 'Herramientas de análisis de estructura de mercado desarrolladas para visualizar elementos como Order Blocks, Fair Value Gaps y cambios de estructura.',
    technologies: ['Pine Script', 'TradingView'],
    type: 'trading',
    imageUrl: '/placeholders/market-structure-preview.png',
    tradingViewUrl: 'MARKET_STRUCTURE_TRADINGVIEW_URL',
    githubUrl: 'GITHUB_URL',
  },
];

export const FEATURED_SOFTWARE: Project = {
  id: 'trademind-ai',
  title: 'TradeMind AI',
  subtitle: 'Plataforma Web de Journaling y Análisis de Operaciones',
  description: 'Plataforma web de journaling y análisis de operaciones diseñada para registrar, organizar y analizar la actividad de trading.',
  technologies: ['Next.js', 'React', 'Tailwind CSS', 'Supabase'],
  featured: true,
  type: 'software',
  imageUrl: '/placeholders/trademind-preview.png',
  demoUrl: 'TRADEMIND_DEMO_URL',
  githubUrl: 'TRADEMIND_GITHUB_URL',
  demoCredentials: {
    email: 'DEMO_EMAIL',
    passwordPlaceholder: 'DEMO_PASSWORD',
  },
};

export const OTHER_PROJECTS: Project[] = [
  {
    id: 'personal-finance',
    title: 'Finanzas Personales / Hábitos / Metas',
    description: 'Aplicación web para gestión de finanzas personales, seguimiento de hábitos y definición de objetivos a largo plazo.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Supabase'],
    type: 'software',
    imageUrl: '/placeholders/finance-preview.png',
    demoUrl: 'FINANCE_DEMO_URL',
    githubUrl: 'FINANCE_GITHUB_URL',
  },
  {
    id: 'it-helpdesk',
    title: 'IT HelpDesk',
    description: 'Sistema web de gestión de tickets y herramientas de administración IT.',
    technologies: ['React', 'Node.js', 'Tailwind CSS', 'MySQL'],
    type: 'software',
    imageUrl: '/placeholders/helpdesk-preview.png',
    demoUrl: 'HELPDESK_DEMO_URL',
    githubUrl: 'HELPDESK_GITHUB_URL',
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management',
    description: 'Sistema web de gestión e inventario visual de activos informáticos.',
    technologies: ['React', 'Tailwind CSS', 'REST APIs'],
    type: 'software',
    imageUrl: '/placeholders/inventory-preview.png',
    demoUrl: 'INVENTORY_DEMO_URL',
    githubUrl: 'INVENTORY_GITHUB_URL',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Operaciones IT',
    role: 'Especialista y Supervisor del Departamento de Soporte IT',
    period: 'Presente',
    description: [
      'Supervisión y coordinación de las operaciones diarias y tareas de soporte del departamento IT.',
      'Administración, mantenimiento y resolución de incidencias en infraestructura y servicios informáticos.',
      'Desarrollo e implementación de scripts de automatización y herramientas internas.',
    ],
    highlights: [
      'Diseño de herramientas internas para reducir tareas manuales repetitivas y simplificar flujos de trabajo.',
      'Automatización de procesos operativos rutinarios y procedimientos de monitoreo.',
      'Optimización de tiempos y procedimientos de resolución de incidencias.',
      'Aplicación de lógica de software para mejorar la gestión y operación del soporte técnico.',
    ],
  },
];

export const TECH_CATEGORIES = [
  {
    title: 'Trading',
    skills: ['Pine Script', 'TradingView'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Backend / Database',
    skills: ['Node.js', 'Supabase', 'MySQL'],
  },
  {
    title: 'Automation',
    skills: ['Python', 'Google Apps Script', 'REST APIs'],
  },
  {
    title: 'Deployment',
    skills: ['Vercel', 'DNS', 'Plesk'],
  },
  {
    title: 'AI',
    skills: ['ChatGPT', 'Gemini', 'Claude'],
  },
];

export const SOCIAL_LINKS = {
  github: 'GITHUB_URL',
  tradingview: 'TRADINGVIEW_URL',
  email: 'EMAIL_ADDRESS',
  linkedin: 'LINKEDIN_URL',
};