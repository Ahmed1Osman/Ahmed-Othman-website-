export type ProjectCategory =
  | 'LLM Applications'
  | 'RAG Systems'
  | 'AI Agents'
  | 'Backend APIs';

export interface Project {
  slug: string;
  name: string;
  org?: string;
  oneLiner: string;
  category: ProjectCategory;
  status: 'shipped' | 'production' | 'academic';
  problem: string;
  solution: string;
  contribution: string;
  architecture?: string;
  features: string[];
  results: string[];
  tech: string[];
  // Leave null until a real asset exists — components render a placeholder instead.
  demoUrl: string | null;
  repoUrl: string | null;
  caseStudyUrl: string | null;
  screenshots: string[];

  featured: boolean;
}

// Add a new project by appending one object here. No component needs to change.
export const projects: Project[] = [
  {
    slug: 'hakeem-7b',
    name: 'Hakeem-7B',
    org: 'Vionex',
    oneLiner: 'Arabic medical-reasoning LLM, fine-tuned and benchmarked against 18 models.',
    category: 'LLM Applications',
    status: 'production',
    problem:
      'General-purpose and even biomedical LLMs perform poorly on Arabic medical reasoning — there was no small, deployable model tuned specifically for Arabic clinical use cases.',
    solution:
      'Built a 4-stage training pipeline — domain-adaptive pretraining, chain-of-thought SFT distilled from Claude Opus 4.6, DPO, and identity alignment — on a Falcon-H1-7B hybrid Mamba+Attention base.',
    contribution:
      'Contributed to the model as part of the Vionex team, responsible for training and evaluation: ran distributed training on 8×A100 / 2×H100 infrastructure and built the evaluation harness.',
    architecture: 'DAPT → CoT SFT (distilled) → DPO → identity alignment, on Falcon-H1-7B (Mamba + Attention hybrid).',
    features: [
      '18-model evaluation harness with per-specialty scoring',
      'Blind LLM-as-judge reasoning-quality assessment',
      'Distributed training across 8×A100 / 2×H100',
    ],
    results: [
      'Ranked #8 of 18 models on MedAraBench (0.575) — ahead of every model ≤9B, OpenBioLLM-70B, and all other Arabic LLMs tested (Fanar, ALLaM, AceGPT, Jais)',
    ],
    tech: ['PyTorch', 'HuggingFace Transformers', 'TRL', 'vLLM', 'DAPT/SFT/DPO', 'LLM-as-judge'],
    demoUrl: 'https://huggingface.co/Vionex-digital/Hakeem-7B',
    repoUrl: null,
    caseStudyUrl: 'https://www.vionex.digital/blog/building-hakeem-7b-arabic-medical-reasoner',
    screenshots: ['/hakeem_banner.png'],
    featured: true,
  },
  {
    slug: 'intelligent-rag-system',
    name: 'Intelligent RAG System',
    oneLiner: 'Production RAG platform, 7-microservice architecture, hybrid retrieval.',
    category: 'RAG Systems',
    status: 'production',
    problem:
      'Enterprise RAG deployments often fail on retrieval quality — single-method retrieval misses relevant context, and there is no systematic way to measure answer accuracy before shipping.',
    solution:
      'Built a production RAG platform on a 7-microservice architecture with hybrid retrieval combining BM25, dense embeddings, and reranking, evaluated continuously with RAGAS.',
    contribution: 'Designed and built the platform end to end, including the retrieval pipeline and evaluation loop.',
    architecture: '7 microservices behind FastAPI, hybrid BM25 + dense retrieval with a reranking stage, Airflow-orchestrated ingestion.',
    features: ['Hybrid BM25 + dense + reranking retrieval', 'Continuous RAGAS evaluation loop', 'Dockerized microservice architecture'],
    results: ['90%+ answer accuracy measured with RAGAS'],
    tech: ['LangChain', 'FastAPI', 'ChromaDB', 'PostgreSQL', 'Redis', 'Docker', 'Airflow'],
    demoUrl: null,
    repoUrl: 'https://github.com/Ahmed1Osman/RAG-System',
    caseStudyUrl: null,
    screenshots: ['/chat-interface.png'],
    featured: true,
  },
  {
    slug: 'musa-voice-agent',
    name: 'Musa',
    oneLiner: 'Arabic voice AI agent with multimodal reasoning and persistent memory.',
    category: 'AI Agents',
    status: 'shipped',
    problem:
      'Voice agents for Arabic typically lose context across sessions and are locked to a single model provider, limiting reliability and flexibility.',
    solution:
      'Built an Arabic voice AI agent on LangGraph with multimodal reasoning, cross-session persistent memory, and MCP-based tool integration routed across multiple LLM providers.',
    contribution: 'Designed and built the agent independently, including the memory layer and provider routing.',
    architecture: 'LangGraph orchestration, MCP tool integration, mem0 for persistent memory, multi-provider routing (Gemini, Groq) with Whisper for STT.',
    features: ['Cross-session persistent memory', 'MCP tool integration', 'Multi-provider LLM routing', 'Speech-to-text via Whisper'],
    results: [],
    tech: ['LangGraph', 'Gemini', 'Groq', 'Whisper', 'mem0', 'FastAPI'],
    demoUrl: null,
    repoUrl: 'https://github.com/Ahmed1Osman/musa-agent',
    caseStudyUrl: null,
    screenshots: ['/tab-chat.png'],
    featured: true,
  },
  {
    slug: 'retailo-lms',
    name: 'Retailo LMS',
    org: 'Vionex',
    oneLiner: 'Bilingual Learning Management System backend, 50+ REST APIs.',
    category: 'Backend APIs',
    status: 'production',
    problem:
      'A bilingual LMS needed a backend that could handle authentication, role-based access, course management, and media delivery at production reliability.',
    solution:
      'Built the FastAPI backend end to end — authentication, RBAC, course management, and 50+ REST APIs — integrated with AWS services for media and translation.',
    contribution: 'Owned the backend build: API design, database schema, and AWS integration.',
    architecture: 'FastAPI backend, PostgreSQL, Redis caching, AWS S3 + CloudFront for media, MediaConvert for video processing, Translate for bilingual content, Zoom API integration.',
    features: ['Role-based access control', '50+ REST endpoints', 'Bilingual content pipeline via AWS Translate', 'Video delivery via S3 + CloudFront + MediaConvert'],
    results: [],
    tech: ['FastAPI', 'PostgreSQL', 'Redis', 'AWS', 'Railway'],
    demoUrl: 'https://www.retailoacademy.com/',
    repoUrl: null,
    caseStudyUrl: null,
    screenshots: ['/image.png'],
    featured: true,
  },
  {
    slug: 'mansoura-ophthalmic-booking',
    name: 'Mansoura Ophthalmic Hospital Booking System',
    org: 'Vionex',
    oneLiner: 'Bilingual hospital booking platform with real-time scheduling.',
    category: 'Backend APIs',
    status: 'production',
    problem:
      'A hospital needed a bilingual booking system with real-time scheduling and national ID parsing for patient intake, plus visibility into production issues after launch.',
    solution:
      'Built a bilingual booking platform with real-time scheduling and national ID parsing, with production monitoring and analytics built in from day one.',
    contribution: 'Built the platform and instrumented it for production monitoring.',
    architecture: 'Flask backend, PostgreSQL, deployed on Railway, Sentry for error monitoring, PostHog for product analytics.',
    features: ['Real-time appointment scheduling', 'National ID parsing', 'Production error monitoring', 'Usage analytics'],
    results: [],
    tech: ['Flask', 'PostgreSQL', 'Railway', 'Sentry', 'PostHog'],
    demoUrl: 'https://www.ramadmansourabooking.com/',
    repoUrl: null,
    caseStudyUrl: null,
    screenshots: ['/image copy.png'],
    featured: false,
  },
  {
    slug: 'therapeutic-chatbot',
    name: 'Therapeutic Chatbot',
    oneLiner: 'GraphRAG healthcare chatbot over a 107K-relation knowledge graph.',
    category: 'RAG Systems',
    status: 'shipped',
    problem:
      'Mental-health-oriented conversational agents need to reason over structured clinical knowledge, not just retrieve loose text chunks, and to hold context across a multi-turn conversation.',
    solution:
      'Built a GraphRAG-based chatbot over a 107,000-relation Neo4j knowledge graph, with adaptive graph retrieval and long-term conversational memory.',
    contribution: 'Designed and built the system, including the graph retrieval strategy and memory handling.',
    architecture: 'Neo4j knowledge graph (107K relations), GraphRAG retrieval, Llama 3 for generation, LangChain for orchestration.',
    features: ['Adaptive graph retrieval', 'Long-term conversational memory', 'Multi-turn dialogue management'],
    results: [],
    tech: ['Neo4j', 'LangChain', 'Llama 3', 'GraphRAG'],
    demoUrl: null,
    repoUrl: null,
    caseStudyUrl: null, 
    screenshots: [],
    featured: false,
  },
  {
    slug: 'mayom',
    name: 'MAYOM',
    org: 'Graduation Project — Nile University',
    oneLiner: 'Self-evolving knowledge graph framework for enhanced RAG systems.',
    category: 'AI Agents',
    status: 'academic',
    problem:
      'Static knowledge graphs used for RAG go stale — they need continuous extraction, validation, and enrichment as new information arrives, which is a multi-step process that is hard to do manually at scale.',
    solution:
      'Led development of an autonomous agent framework where LLMs independently construct and enrich knowledge graphs, using multi-agent orchestration with specialized roles for extraction, validation, and graph construction, communicating over an agent-to-agent protocol.',
    contribution: 'Led development of the framework as the graduation project.',
    architecture: 'Multi-agent orchestration with specialized extraction/validation/construction agents, agent-to-agent communication protocol, Neo4j-backed graph store.',
    features: ['Autonomous knowledge extraction and validation', 'Multi-agent orchestration with specialized roles', 'Agent-to-agent communication protocol'],
    results: [],
    tech: ['Llama 3', 'Neo4j', 'Ollama', 'GraphRAG', 'React', 'LangChain'],
    demoUrl: null,
    repoUrl: null,
    caseStudyUrl: null,
    screenshots: [],
    featured: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}