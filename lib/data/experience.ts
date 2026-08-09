export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  commitment: string;
  location?: string;
  current: boolean;
  bullets: string[];
  tech: string[];
}

// Source of truth: CV. Add a new role by appending one object here —
// no other file needs to change.
export const experience: ExperienceEntry[] = [
  {
    id: 'vionex',
    company: 'Vionex Digital Solutions',
    role: 'Full Stack AI Engineer',
    period: 'Jun 2025 — Present',
    commitment: 'Part-time',
    current: true,
    bullets: [
      'Designed, developed, and deployed production AI and full-stack applications using Python, FastAPI, React, PostgreSQL, Docker, and AWS.',
      'Built AI-powered enterprise applications for healthcare, government, and education using LLMs, RAG, LangGraph, tool calling, vector search, and multimodal AI.',
      'Contributed to training, evaluation, benchmarking, and deployment of Arabic Large Language Models.',
      'Designed and deployed scalable AWS-based AI infrastructure — Bedrock, Lambda, ECS, API Gateway, S3, DynamoDB, RDS, IAM.',
      'Built and maintained backend services for a bilingual Learning Management System with 50+ REST APIs, Redis, and cloud infrastructure.',
      'Automated CI/CD pipelines using Docker, GitHub Actions, Amazon ECR, and ECS.',
    ],
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'AWS', 'LangGraph', 'RAG'],
  },
  {
    id: 'elevorix',
    company: 'Elevorix Academy',
    role: 'AI & Automation Instructor',
    period: 'Dec 2025 — Present',
    commitment: 'Part-time',
    current: true,
    bullets: [
      'Train technical and non-technical professionals in NLP, AI agents, RAG pipelines, and workflow automation using n8n, Make, and Zapier.',
      'Focus on production deployment across finance, marketing, and operations — participants leave with working systems, not slides.',
    ],
    tech: ['n8n', 'Make', 'Zapier', 'NLP', 'AI Agents'],
  },
  {
    id: 'innocode',
    company: 'Inno Code',
    role: 'Data Analysis & AI Instructor',
    period: 'Feb 2025 — Mar 2026',
    commitment: 'Part-time',
    current: false,
    bullets: [
      'Designed and delivered AI/ML training covering Python, NLP, deep learning, and LLMs.',
      'Mentored 100+ learners through hands-on, project-based curriculum.',
    ],
    tech: ['Python', 'NLP', 'Deep Learning', 'LLMs'],
  },
  {
    id: 'nti',
    company: 'National Telecommunication Institute',
    role: 'AI Engineer — Training',
    period: 'Aug 2024 — Oct 2024',
    commitment: 'Training',
    current: false,
    bullets: [
      'Built Arabic LLM applications with custom retrieval pipelines and domain-specific prompt engineering for the telecom sector.',
      'Developed automated web scraping agents that populated and maintained RAG knowledge bases with built-in data quality validation.',
      'Implemented evaluation frameworks measuring LLM accuracy across Arabic-language datasets.',
    ],
    tech: ['Arabic NLP', 'RAG', 'Prompt Engineering', 'Web Scraping'],
  },
  {
    id: 'technocolabs',
    company: 'Technocolabs Softwares',
    role: 'Data Scientist — Internship',
    period: 'Jul 2023 — Sep 2023',
    commitment: 'Internship',
    current: false,
    bullets: [
      'Led end-to-end ML projects from raw data collection through FastAPI deployment.',
      'Achieved 85%+ accuracy on business forecasting models with a full pipeline from preprocessing to production API.',
    ],
    tech: ['Python', 'FastAPI', 'Machine Learning'],
  },
];

export const education = {
  degree: 'BSc, Computer Science & Artificial Intelligence',
  school: 'Nile University',
  period: '2021 — 2025',
  grade: 'Very Good',
  gradProject: {
    name: 'MAYOM — Self-Evolving Knowledge Graph Framework for Enhanced RAG Systems',
    date: 'Jun 2025',
    description:
      'Led development of an autonomous AI agent framework enabling LLMs to independently construct and enrich knowledge graphs — multi-agent orchestration with specialized roles for extraction, validation, and graph construction, with agent-to-agent communication protocols for collaborative knowledge building.',
    tech: ['Llama 3', 'Neo4j', 'Ollama', 'GraphRAG', 'React', 'LangChain'],
  },
};

export const certifications = [
  'Machine Learning Specialization',
  'Deep Learning Specialization',
  'Large Language Model Operations (LLMOps) Specialization',
  'HCIA-AI — Huawei',
  'Training Certificate — National Telecommunication Institute',
  'Technocolabs Certificate & Letter of Recommendation',
];
