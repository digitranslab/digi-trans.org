/**
 * DBLOCK Product Data File
 * 
 * Contains all content data for the DBLOCK product page.
 * DBLOCK is based on Langflow - an open-source, Python-based framework 
 * for building AI applications with a visual editor.
 * 
 * Based on actual documentation at products/dblock/docs/
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

export interface DeploymentOption {
  name: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface UseCase {
  title: string;
  description: string;
  icon: string;
}

// Hero Section Data
export const heroData = {
  tagline: "Open-source AI application builder",
  headline: "Build AI Applications Visually",
  description: "DBLOCK is an open-source, Python-based framework for building AI applications. Visual editor for prototyping, agents, MCP support, and no lock-in to specific LLMs or vector stores.",
  primaryCTA: {
    label: "Get Started Free",
    href: "https://github.com/digitranslab/dblock",
  },
  secondaryCTA: {
    label: "Read Documentation",
    href: "https://docs.dblock.io",
  },
};

// Value Propositions
export const valuePropositions: ValueProposition[] = [
  {
    icon: "Workflow",
    title: "Visual Flow Builder",
    description: "Drag and drop components to build AI application workflows. Connect nodes, configure parameters, and test in real-time without writing code.",
    metric: {
      value: "Minutes",
      label: "To First Flow",
    },
  },
  {
    icon: "Bot",
    title: "Agent & MCP Support",
    description: "Built-in support for AI agents and Model Context Protocol (MCP). Use DBLOCK as an MCP server or client for seamless AI integration.",
    metric: {
      value: "Native",
      label: "Agent Support",
    },
  },
  {
    icon: "Blocks",
    title: "Flexible Components",
    description: "Not tied to specific LLMs or vector stores. Use any model provider, any embedding service, any data store that fits your needs.",
    metric: {
      value: "100+",
      label: "Components",
    },
  },
  {
    icon: "Code2",
    title: "100% Open Source",
    description: "Fully open source and Python-based. Extend with custom components, contribute to the community, and maintain full control.",
    metric: {
      value: "100%",
      label: "Open Source",
    },
  },
];

// Features Deep Dive
export const features: Feature[] = [
  {
    id: "flow-builder",
    icon: "Workflow",
    title: "Visual Flow Editor",
    description: "Build AI application workflows with an intuitive visual editor. No coding required for basic flows.",
    capabilities: [
      "Drag-and-drop component placement",
      "Real-time flow validation",
      "Component configuration panels",
      "Flow templates and examples",
      "Export flows as code",
      "Version control friendly",
    ],
    marketingAngle: "From idea to working AI app in minutes.",
    image: "/images/products/dblock/workspace-basic-prompting.png",
  },
  {
    id: "playground",
    icon: "Play",
    title: "Interactive Playground",
    description: "Test your flows in real-time without building your entire application stack.",
    capabilities: [
      "Real-time flow execution",
      "Interactive chat interface",
      "Response streaming",
      "Debug and inspect outputs",
      "Test individual components",
      "Iterate quickly on logic",
    ],
    marketingAngle: "Test, iterate, and perfect your AI flows instantly.",
    image: "/images/products/dblock/playground.png",
  },
  {
    id: "agents",
    icon: "Bot",
    title: "AI Agents & Tools",
    description: "Build sophisticated AI agents with tool-calling capabilities and autonomous decision making.",
    capabilities: [
      "Tool-calling agent components",
      "Use components as agent tools",
      "Use flows as agent tools",
      "MCP server integration",
      "MCP client support",
      "Multi-agent orchestration",
    ],
    marketingAngle: "Build agents that think, decide, and act.",
    image: "/images/products/dblock/quickstart-simple-agent-flow.png",
  },
  {
    id: "components",
    icon: "Blocks",
    title: "Extensible Components",
    description: "Rich library of components for inputs, outputs, models, embeddings, and data stores.",
    capabilities: [
      "LLM providers (OpenAI, Anthropic, etc.)",
      "Vector stores (Pinecone, Weaviate, etc.)",
      "Document loaders and processors",
      "Custom Python components",
      "Community component bundles",
      "API integrations",
    ],
    marketingAngle: "Every building block you need, plus the freedom to build your own.",
    image: "/images/products/dblock/vector-store-document-ingestion.png",
  },
];

// Deployment Options
export const deploymentOptions: DeploymentOption[] = [
  {
    name: "Desktop App",
    description: "Download and install the standalone desktop application for the simplest setup experience.",
    features: [
      "One-click install",
      "Dependency management",
      "Easy upgrades",
      "macOS & Windows",
    ],
    recommended: true,
  },
  {
    name: "Docker",
    description: "Pull and run the Docker image to start DBLOCK in isolation.",
    features: [
      "Single command setup",
      "Isolated environment",
      "Easy deployment",
      "Production ready",
    ],
  },
  {
    name: "Python Package",
    description: "Install via pip/uv for full control over environment and dependencies.",
    features: [
      "pip install dblock",
      "Virtual environment support",
      "Custom dependencies",
      "Development friendly",
    ],
  },
];

// Use Cases
export const useCases: UseCase[] = [
  {
    title: "RAG Applications",
    description: "Build retrieval-augmented generation apps that query your documents and data.",
    icon: "FileSearch",
  },
  {
    title: "Chatbots",
    description: "Create conversational AI assistants with memory and context awareness.",
    icon: "MessageSquare",
  },
  {
    title: "Document Analysis",
    description: "Process, analyze, and extract insights from documents at scale.",
    icon: "FileText",
  },
  {
    title: "Content Generation",
    description: "Generate blog posts, reports, summaries, and creative content.",
    icon: "PenTool",
  },
  {
    title: "Multi-Agent Systems",
    description: "Orchestrate multiple AI agents working together on complex tasks.",
    icon: "Users",
  },
  {
    title: "API Integrations",
    description: "Connect AI capabilities to your existing systems via API.",
    icon: "Plug",
  },
];

// Component Categories
export const componentCategories = [
  {
    category: "Models",
    items: ["OpenAI", "Anthropic", "Google AI", "Azure OpenAI", "Ollama", "Hugging Face"],
  },
  {
    category: "Vector Stores",
    items: ["Pinecone", "Weaviate", "Chroma", "Qdrant", "Milvus", "FAISS"],
  },
  {
    category: "Data Loaders",
    items: ["PDF", "CSV", "JSON", "Web Scraper", "Notion", "Google Drive"],
  },
  {
    category: "Tools",
    items: ["Search", "Calculator", "Code Interpreter", "API Calls", "Database", "File System"],
  },
];

export default {
  hero: heroData,
  valuePropositions,
  features,
  deploymentOptions,
  useCases,
  componentCategories,
};
