/**
 * DBLOCK Product Data File
 * 
 * Contains all content data for the DBLOCK product page.
 * DBLOCK is Digitrans's AI application development platform - we provide
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
  tagline: "Enterprise AI Application Platform",
  headline: "Build AI Applications That Deliver Results",
  description: "DBLOCK accelerates your AI initiatives. Our experts design, build, and deploy custom AI applications—from RAG systems to intelligent agents—tailored to your business needs.",
  primaryCTA: {
    label: "Schedule a Consultation",
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
    description: "Our AI engineers build production-ready applications in weeks. Visual development accelerates iteration while our expertise ensures enterprise-grade quality.",
    metric: {
      value: "3-4x",
      label: "Faster Development",
    },
  },
  {
    icon: "Bot",
    title: "Intelligent Agents",
    description: "We build AI agents that automate complex workflows—from customer support to document processing. Agents that think, decide, and act on your behalf.",
    metric: {
      value: "Custom",
      label: "Agent Solutions",
    },
  },
  {
    icon: "Shield",
    title: "Enterprise Security",
    description: "Deploy AI with confidence. We implement proper data governance, access controls, and audit trails. Your data stays secure and compliant.",
    metric: {
      value: "SOC 2",
      label: "Compliant",
    },
  },
  {
    icon: "TrendingUp",
    title: "Measurable ROI",
    description: "Every AI project we deliver is tied to business outcomes. We track metrics that matter—cost savings, efficiency gains, revenue impact.",
    metric: {
      value: "Proven",
      label: "Business Value",
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
    description: "We connect DBLOCK to your existing systems—CRM, ERP, databases, and APIs—creating AI solutions that fit your workflow.",
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
    description: "Let our AI experts manage your DBLOCK deployment. We monitor, optimize, and evolve your AI applications as your needs grow.",
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
