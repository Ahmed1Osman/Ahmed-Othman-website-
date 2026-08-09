export const automationStack = [
  'n8n',
  'Make',
  'Zapier',
  'OpenAI',
  'APIs',
  'CRMs',
  'Slack',
  'Email',
];

export const automationSystems = [
  {
    slug: 'ai-lead-qualification',

    name: 'AI Lead Qualification & Routing System',

    businessProblem:
      'Sales teams waste time on unqualified leads, slow responses, and missed opportunities — leading to lost revenue.',

    workflow:
      'When a lead submits a form or sends a message, the system instantly evaluates intent, urgency, and fit, then routes the lead to the right sales rep or pipeline automatically.',

    aiProcessing:
      'The AI reads messages, understands intent, scores lead quality, and prioritizes based on buying signals.',

    integrations: ['n8n', 'OpenAI', 'CRM', 'Slack', 'Email'],

    result:
      'Faster response times, higher conversion rates, and sales teams focused only on high-quality leads.',

    screenshots: ['/images/lead-system.png'],
  },

  {
    slug: 'ai-customer-support',

    name: 'AI Customer Support Automation',

    businessProblem:
      'Support teams are overwhelmed with repetitive questions, causing slow replies and poor customer experience.',

    workflow:
      'Incoming emails or chat messages are automatically handled by AI, which replies instantly or routes complex issues to a human.',

    aiProcessing:
      'AI understands customer intent, generates helpful responses, and retrieves answers from company knowledge.',

    integrations: ['n8n', 'OpenAI', 'Gmail', 'Slack', 'Helpdesk'],

    result:
      'Reduced support workload, faster response times, and improved customer satisfaction.',

    screenshots: [],
  },

  {
    slug: 'invoice-processing',

    name: 'Automated Invoice Processing',

    businessProblem:
      'Manual invoice handling is slow, error-prone, and wastes operational time.',

    workflow:
      'Invoices are automatically extracted from emails or uploads, processed, and stored in accounting systems.',

    aiProcessing:
      'AI reads PDFs, extracts structured data, and validates fields like totals and vendors.',

    integrations: ['n8n', 'OCR', 'Google Sheets', 'Accounting সফটware'],

    result:
      'Accurate financial records, faster processing, and reduced manual effort.',

    screenshots: [],
  },

  {
    slug: 'content-repurposing',

    name: 'AI Content Repurposing Engine',

    businessProblem:
      'Content creation is time-consuming, and most businesses fail to reuse existing content effectively.',

    workflow:
      'A single piece of content (video, blog) is transformed into multiple formats like posts, tweets, and emails.',

    aiProcessing:
      'AI summarizes, rewrites, and adapts tone for different platforms automatically.',

    integrations: ['n8n', 'OpenAI', 'Notion', 'Social APIs'],

    result:
      'More content output with less effort and consistent brand presence.',

    screenshots: [],
  },
];