/**
 * Dblock Product Data File
 * 
 * Contains all content data for the Dblock product page.
 * Dblock is Digitrans's AI application development platform - we provide
 * implementation, consulting, and managed services for building enterprise AI solutions.
 */

// Type definitions
export interface ValueProposition {
  icon: string;
  title: string;
  description: string;
  metric?: {
    value: string;
    label: string;
  };
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  capabilities: string[];
  marketingAngle: string;
  image?: string;
}

export interface UseCase {
  title: string;
  description: string;
  icon: string;
}

// Hero Section Data
export const heroData = {
  tagline: "Enterprise AI Application Platform — Coming Soon",
  headline: "Build AI Applications That Deliver Results",
  description: "Dblock accelerates your AI initiatives. Gartner predicts 40% of enterprise apps will integrate AI agents by end of 2026. Our experts design, build, and deploy custom AI applications — from RAG systems to multi-agent orchestration — tailored to your business needs.",
  primaryCTA: {
    label: "Join the Waitlist",
    href: "/contact",
  },
  secondaryCTA: {
    label: "View Case Studies",
    href: "/clients",
  },
};

// Value Propositions
export const valuePropositions: ValueProposition[] = [
  {
    icon: "Rocket",
    title: "Rapid AI Development",
    description: "Our AI engineers build production-ready applications in weeks. Visual development accelerates iteration while our expertise ensures enterprise-grade quality. RAG reduces hallucinations by 67% in production environments.",
    metric: {
      value: "3-4x",
      label: "Faster Development",
    },
  },
  {
    icon: "Bot",
    title: "Multi-Agent Orchestration",
    description: "We build AI agent systems that automate complex workflows — from customer support to document processing. Specialized agents working in parallel with intelligent routing and human-in-the-loop for critical decisions.",
    metric: {
      value: "40%",
      label: "Enterprise Apps with AI Agents by 2026",
    },
  },
  {
    icon: "Shield",
    title: "Enterprise Security & Compliance",
    description: "Deploy AI with confidence. We implement proper data governance, access controls, audit trails, and compliance frameworks. SOC2, GDPR, HIPAA ready. Your data stays secure and within your boundary.",
    metric: {
      value: "SOC 2",
      label: "Compliant",
    },
  },
  {
    icon: "TrendingUp",
    title: "Measurable Business Impact",
    description: "Every AI project we deliver is tied to business outcomes. We track metrics that matter — cost savings, efficiency gains, revenue impact. The agentic automation market is projected to reach $55B by 2036.",
    metric: {
      value: "$55B",
      label: "Agentic Market by 2036",
    },
  },
];

// Features Deep Dive
export const features: Feature[] = [
  {
    id: "rag-solutions",
    icon: "FileSearch",
    title: "RAG & Knowledge Systems",
    description: "We build retrieval-augmented generation systems that let your teams query internal knowledge bases, documents, and data with natural language.",
    capabilities: [
      "Custom document ingestion pipelines",
      "Optimized vector search and retrieval",
      "Multi-source knowledge aggregation",
      "Accuracy tuning and hallucination reduction",
      "Citation and source tracking",
      "Continuous knowledge updates",
    ],
    marketingAngle: "Turn your documents into intelligent answers.",
    image: "/images/products/dblock/vector-store-document-ingestion.png",
  },
  {
    id: "ai-agents",
    icon: "Bot",
    title: "Custom AI Agents",
    description: "We design and deploy AI agents that automate complex business processes—from customer interactions to internal operations.",
    capabilities: [
      "Multi-step reasoning and planning",
      "Tool integration (APIs, databases, systems)",
      "Human-in-the-loop workflows",
      "Multi-agent orchestration",
      "Conversation memory and context",
      "Performance monitoring and optimization",
    ],
    marketingAngle: "Agents that work as hard as your best employees.",
    image: "/images/products/dblock/quickstart-simple-agent-flow.png",
  },
  {
    id: "integration",
    icon: "Plug",
    title: "Enterprise Integration",
    description: "We connect Dblock to your existing systems—CRM, ERP, databases, and APIs—creating AI solutions that fit your workflow.",
    capabilities: [
      "Any LLM provider (OpenAI, Anthropic, Azure, etc.)",
      "Any vector store (Pinecone, Weaviate, etc.)",
      "Custom API integrations",
      "SSO and enterprise authentication",
      "Data governance and access controls",
      "Audit logging and compliance",
    ],
    marketingAngle: "AI that works with your existing stack.",
    image: "/images/products/dblock/workspace-basic-prompting.png",
  },
  {
    id: "managed-ai",
    icon: "Headphones",
    title: "Managed AI Services",
    description: "Let our AI experts manage your Dblock deployment. We monitor, optimize, and evolve your AI applications as your needs grow.",
    capabilities: [
      "24/7 platform monitoring",
      "Model performance optimization",
      "Prompt engineering and tuning",
      "Cost optimization across providers",
      "New feature development",
      "Dedicated AI success manager",
    ],
    marketingAngle: "Focus on outcomes, not infrastructure.",
    image: "/images/products/dblock/playground.png",
  },
];

// Use Cases
export const useCases: UseCase[] = [
  {
    title: "Internal Knowledge Base",
    description: "AI-powered search across company documents, policies, and procedures.",
    icon: "FileSearch",
  },
  {
    title: "Customer Support Agents",
    description: "Intelligent agents that handle customer inquiries and escalate when needed.",
    icon: "MessageSquare",
  },
  {
    title: "Document Processing",
    description: "Automated extraction, classification, and routing of business documents.",
    icon: "FileText",
  },
  {
    title: "Sales Intelligence",
    description: "AI that analyzes prospects, generates insights, and drafts personalized outreach.",
    icon: "TrendingUp",
  },
  {
    title: "Process Automation",
    description: "Multi-step workflows that combine AI reasoning with system integrations.",
    icon: "Workflow",
  },
  {
    title: "Data Analysis",
    description: "Natural language queries against databases and analytics platforms.",
    icon: "BarChart",
  },
];

// Supported Technologies (what we integrate with)
export const componentCategories = [
  {
    category: "LLM Providers",
    items: ["OpenAI", "Anthropic", "Google AI", "Azure OpenAI", "AWS Bedrock", "Private Models"],
  },
  {
    category: "Vector Databases",
    items: ["Pinecone", "Weaviate", "Chroma", "Qdrant", "Milvus", "PostgreSQL pgvector"],
  },
  {
    category: "Data Sources",
    items: ["SharePoint", "Confluence", "Google Drive", "S3", "Databases", "APIs"],
  },
  {
    category: "Enterprise Systems",
    items: ["Salesforce", "ServiceNow", "SAP", "Workday", "Slack", "Microsoft 365"],
  },
];

export default {
  hero: heroData,
  valuePropositions,
  features,
  useCases,
  componentCategories,
};
