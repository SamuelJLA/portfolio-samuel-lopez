import { Project, ExperienceItem } from '@/types';

// ============================================================================
// CREDENCIALES DEMO CENTRALIZADAS
// ============================================================================
export const DEMO_TRADING = {
  email: 'samuellopezalcala198@gmail.com',
  passwordPlaceholder: 'Afkm2026',
};

export const DEMO_SAMANDTECH = {
  email: 'jesus.alcala@samandtech.com',
  passwordPlaceholder: 'Sampat3st3',
};

export const TRADING_INDICATORS: Project[] = [
  {
    id: 'macd-custom',
    title: 'MACD — Custom Pine Script',
    subtitle: 'Implementación personalizada en Pine Script',
    description: 'Implementación personalizada en Pine Script desarrollada a partir del análisis de comportamiento y parámetros observables de un indicador presentado públicamente.',
    technologies: ['Pine Script', 'TradingView'],
    type: 'trading',
    imageUrl: '/placeholders/macd-preview.png',
    tradingViewUrl: 'https://es.tradingview.com/script/pHlmcMxO/',
  },
  {
    id: 'stochastic-custom',
    title: 'Stochastic — Custom Pine Script',
    subtitle: 'Implementación personalizada en Pine Script',
    description: 'Implementación personalizada en Pine Script desarrollada mediante análisis de comportamiento, parámetros y validación de señales.',
    technologies: ['Pine Script', 'TradingView'],
    type: 'trading',
    imageUrl: '/placeholders/stochastic-preview.png',
    tradingViewUrl: 'https://es.tradingview.com/script/rqorYZFO/',
  },
  {
    id: 'tsi-custom',
    title: 'TSI — Custom Implementation',
    subtitle: 'Implementación propia en Pine Script',
    description: 'Implementación propia basada en la metodología estándar del True Strength Index, con parámetros configurables.',
    technologies: ['Pine Script', 'TradingView'],
    type: 'trading',
    imageUrl: '/placeholders/tsi-preview.png',
    tradingViewUrl: 'https://es.tradingview.com/script/wI94OKbv/',
  },
  {
    id: 'market-structure-ob',
    title: 'Market Structure & Order Blocks',
    subtitle: 'Herramienta técnica para TradingView',
    description: 'Herramientas de análisis de estructura de mercado desarrolladas para visualizar elementos como Order Blocks, Fair Value Gaps y cambios de estructura.',
    technologies: ['Pine Script', 'TradingView'],
    type: 'trading',
    imageUrl: '/placeholders/market-structure-preview.png',
    tradingViewUrl: 'https://es.tradingview.com/script/pPnnfnfg/',
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
  demoUrl: 'https://trading-account-navy.vercel.app/',
  demoCredentials: DEMO_TRADING,
};

export const OTHER_PROJECTS: Project[] = [
  {
    id: 'personal-finance',
    title: 'Finanzas, Hábitos & Objetivos',
    description: 'Aplicación web para gestión de finanzas personales, seguimiento de hábitos y definición de objetivos a largo plazo.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Supabase'],
    type: 'software',
    imageUrl: '/placeholders/finance-preview.png',
    demoUrl: 'https://nexus-dashboard-khaki.vercel.app/',
    demoCredentials: DEMO_TRADING,
  },
  {
    id: 'samandtech-website',
    title: 'SAMANDTECH — Portal Corporativo IT',
    description: 'Sitio web corporativo y de presentación de servicios de outsourcing técnico e infraestructura IT.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    type: 'software',
    imageUrl: '/placeholders/samandtech-preview.png', // <-- Ruta correcta
    demoUrl: 'https://samueljla.github.io/samand-tech-v1/login.html',
    demoCredentials: DEMO_SAMANDTECH,
  },
  {
    id: 'it-inventory',
    title: 'Gestión de Inventario y Activos ITAM',
    description: 'Sistema web de inventario visual y trazabilidad de activos tecnológicos para empresas.',
    technologies: ['React', 'Tailwind CSS', 'REST APIs'],
    type: 'software',
    imageUrl: '/placeholders/inventory-preview.png', // <-- Ruta correcta
    demoUrl: 'https://samantech-itam.vercel.app/',
    demoCredentials: DEMO_SAMANDTECH,
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
  tradingview: 'https://es.tradingview.com/u/samueljla/',
  email: 'samuellopezalcala198@gmail.com',
};