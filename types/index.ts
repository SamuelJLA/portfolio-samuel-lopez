export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  type: 'trading' | 'software';
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  tradingViewUrl?: string;
  demoCredentials?: {
    email: string;
    passwordPlaceholder: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  highlights: string[];
}