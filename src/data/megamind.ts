/**
 * Megamind Product Page Data
 * 
 * Data for the Megamind open-source AI platform product page.
 * Megamind is created by digitranslab and available on GitHub under Apache 2.0.
 */

export interface MegamindHero {
  tagline: string;
  headline: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string; external?: boolean };
}

export interface ProductVariant {
  name: string;
  description: string;
  icon: string;
  status: "available" | "coming-soon";
  features: string[];
}

export interface Capability {
  id: string;
  icon: string;
  title: string;
  description: string;
  capabilities: string[];
  marketingAngle: string;
}

export interface MCPCategory {
  category: string;
  icon: string;
  tools: { name: string; description: string }[];
}

export interface PrivacyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface CommunityStat {
  value: string;
  label: string;
  icon: string;
}

export const heroData: MegamindHero = {
  tagline: "Sovereign AI Platform",
  headline: "Megamind: Self-Hosted AI for Enterprise",
  description: "Deploy AI entirely within your infrastructure. Megamind is the open-source platform powering sovereign AI implementations for regulated industries — on-premise, air-gapped, or private cloud. No data leaves your boundary.",
  primaryCTA: { label: "Schedule Consultation", href: "/contact" },
  secondaryCTA: { label: "View on GitHub", href: "https://github.com/digitranslab/megamind", external: true },
};

export const productVariants: ProductVariant[] = [
  {
    name: "Megamind Server",
    description: "Self-hosted OpenAI-compatible API server for enterprise deployment. On-premise, air-gapped, or private cloud — your infrastructure, your control.",
    icon: "Server",
    status: "available",
    features: ["OpenAI-compatible REST API", "On-premise & air-gapped deployment", "Configurable CORS & API keys", "vLLM & llama.cpp backends"],
  },
  {
    name: "Megamind Models",
    description: "Fine-tuned models optimized for enterprise agentic tasks. Compact (1.7B–4B parameters), self-hostable, and outperform larger models on targeted benchmarks.",
    icon: "Brain",
    status: "available",
    features: ["Agent-optimized reasoning", "GGUF format, multiple quantizations", "Runs on 8–16GB RAM", "Custom fine-tuning available"],
  },
  {
    name: "Megamind Enterprise",
    description: "Turnkey sovereign AI deployment for regulated industries. Complete data residency, compliance architecture, and SLA-backed support.",
    icon: "Shield",
    status: "available",
    features: ["GDPR, HIPAA, SOC2, FedRAMP ready", "Air-gapped & private cloud", "Security hardening & monitoring", "Dedicated support with SLA"],
  },
  {
    name: "MCP Integration Platform",
    description: "Connect AI to your enterprise tools through Model Context Protocol. Browser automation, data analysis, search, and custom integrations.",
    icon: "Plug",
    status: "available",
    features: ["Standardized tool integration", "Custom MCP server development", "n8n workflow orchestration", "Continue.dev & Tabby for dev teams"],
  },
  {
    name: "Custom Model Training",
    description: "Domain-specific model fine-tuning on your data. Train compact models that outperform general-purpose LLMs on your specific use cases.",
    icon: "Sparkles",
    status: "available",
    features: ["Starting under $100 on H200", "1.7B–4B parameter models", "Tool calling optimization", "Iterative training cycles"],
  },
];

export const capabilities: Capability[] = [
  {
    id: "model-management",
    icon: "Layers",
    title: "AI Model Management",
    description: "Run open-source GGUF models locally via llama.cpp or connect to cloud providers like OpenAI, Anthropic, Google, and more.",
    capabilities: [
      "Local models with complete privacy and zero API costs",
      "Cloud models: GPT-4o, Claude, Gemini, Groq, Mistral, Cohere",
      "Model Hub: browse and download from Hugging Face ecosystem",
      "Hardware optimization: NVIDIA CUDA, AMD Vulkan, Apple Metal",
    ],
    marketingAngle: "One platform for every model — local or cloud, your choice.",
  },
  {
    id: "custom-assistants",
    icon: "Users",
    title: "Custom AI Assistants",
    description: "Create multiple AI assistants with distinct personalities, instructions, and parameter configurations.",
    capabilities: [
      "Custom temperature, top_k, top_p, repeat_penalty settings",
      "Assistants persist across sessions",
      "Switch assistants mid-conversation",
      "Domain-specific experts: code reviewer, financial advisor, translator",
    ],
    marketingAngle: "Build an AI team tailored to your workflow.",
  },
  {
    id: "local-api",
    icon: "Code",
    title: "OpenAI-Compatible Local API",
    description: "Drop-in replacement for OpenAI's API at localhost:1337/v1. Build private AI applications without external data dependencies.",
    capabilities: [
      "Full REST API: Chat Completions, Models, Threads, Messages, Assistants",
      "Integrates with n8n, Continue.dev, Tabby, llmcord",
      "Configurable host, port, API key, CORS, trusted hosts",
      "Build private AI apps without sending data externally",
    ],
    marketingAngle: "Your own AI API — same interface, complete privacy.",
  },
];

export const mcpCategories: MCPCategory[] = [
  {
    category: "Browser Automation",
    icon: "Globe",
    tools: [
      { name: "BrowserBase MCP", description: "AI controls a web browser — navigates sites, fills forms, extracts data" },
    ],
  },
  {
    category: "Data Analysis",
    icon: "BarChart3",
    tools: [
      { name: "E2B Code Sandbox", description: "Execute Python code in isolated sandboxes with pandas, numpy, scikit-learn" },
      { name: "Jupyter MCP", description: "Interactive notebook-style data analysis and visualization" },
    ],
  },
  {
    category: "Search & Research",
    icon: "Search",
    tools: [
      { name: "Serper (Google Search)", description: "Real-time web search and fact-checking with current information" },
      { name: "Exa", description: "Semantic search and page scraping for deep research" },
    ],
  },
  {
    category: "Deep Research",
    icon: "BookOpen",
    tools: [
      { name: "Octagon MCP", description: "Finance-focused deep research — SEC filings, M&A analysis, market intelligence" },
    ],
  },
  {
    category: "Design Tools",
    icon: "Palette",
    tools: [
      { name: "Canva MCP", description: "AI-driven design creation and manipulation" },
    ],
  },
  {
    category: "Productivity",
    icon: "CheckSquare",
    tools: [
      { name: "Linear MCP", description: "Project management and issue tracking through natural language" },
      { name: "Todoist MCP", description: "Task management and organization via AI" },
    ],
  },
];

export const privacyFeatures: PrivacyFeature[] = [
  {
    icon: "ShieldCheck",
    title: "Zero Data Collection",
    description: "Everything stays local on your device by default. No chat snooping, no file scanning, no identity tracking.",
  },
  {
    icon: "HardDrive",
    title: "Local JSON Storage",
    description: "All data stored in standard JSON format in a local filesystem. Full transparency over your data.",
  },
  {
    icon: "Lock",
    title: "GDPR-Compliant Analytics",
    description: "Optional anonymous analytics via PostHog EU — only with explicit opt-in. Privacy by design.",
  },
  {
    icon: "ArrowRightLeft",
    title: "Full Data Portability",
    description: "Export, backup, and migrate your data at any time. You own your conversations and configurations.",
  },
  {
    icon: "Network",
    title: "Corporate Environment Ready",
    description: "HTTPS proxy support with SSL certificate management. Configurable trusted hosts, CORS, and API key authentication.",
  },
];

export const communityStats: CommunityStat[] = [
  { value: "4.5M+", label: "Downloads", icon: "Download" },
  { value: "16K+", label: "Community Members", icon: "Users" },
  { value: "100+", label: "Contributors", icon: "GitPullRequest" },
  { value: "2,800+", label: "PRs Merged", icon: "GitMerge" },
];

export const links = {
  github: "https://github.com/digitranslab",
  docs: "https://megamind.ai/docs",
  web: "https://chat.megamind.ai",
  discord: "https://discord.gg/FTk2MvZwJH",
  license: "Apache 2.0",
};

// Cloud providers supported by Megamind (Req 8.2)
export interface CloudProvider {
  name: string;
  models: string;
  integration: string;
}

export const cloudProviders: CloudProvider[] = [
  { name: "OpenAI", models: "GPT-4o, o3, GPT-4.5", integration: "API key" },
  { name: "Anthropic", models: "Claude 3.5/4 Sonnet, Claude 4 Opus", integration: "API key" },
  { name: "Google", models: "Gemini models", integration: "API key" },
  { name: "Groq", models: "Fast inference models", integration: "API key" },
  { name: "Mistral AI", models: "Mistral models", integration: "API key" },
  { name: "Cohere", models: "Command models", integration: "API key" },
  { name: "OpenRouter", models: "Multi-provider routing", integration: "API key" },
  { name: "Hugging Face", models: "Any HF-hosted model", integration: "Access token" },
];

// Supported platforms (Req 8.4)
export interface PlatformSupport {
  platform: string;
  architecture: string;
  gpuSupport: string;
}

export const supportedPlatforms: PlatformSupport[] = [
  { platform: "macOS", architecture: "Apple Silicon (M1–M4), Intel", gpuSupport: "Metal (automatic)" },
  { platform: "Windows", architecture: "x86_64", gpuSupport: "NVIDIA CUDA 11.7/12.0, AMD Vulkan, Intel Arc" },
  { platform: "Linux", architecture: "x86_64, ARM64", gpuSupport: "NVIDIA CUDA, Vulkan" },
];

// API endpoints (Req 8.1)
export interface APIEndpoint {
  endpoint: string;
  method: string;
  description: string;
}

export const apiEndpoints: APIEndpoint[] = [
  { endpoint: "/v1/chat/completions", method: "POST", description: "Create chat completion (streaming supported)" },
  { endpoint: "/v1/models", method: "GET", description: "List available models" },
  { endpoint: "/v1/models/{id}", method: "GET/PATCH/DELETE", description: "Manage specific model" },
  { endpoint: "/v1/models/{id}/start", method: "POST", description: "Start a model" },
  { endpoint: "/v1/models/{id}/stop", method: "POST", description: "Stop a model" },
  { endpoint: "/v1/threads", method: "GET/POST", description: "List/create conversation threads" },
  { endpoint: "/v1/messages", method: "GET/POST", description: "List/create messages" },
  { endpoint: "/v1/assistants", method: "GET/POST", description: "List/create assistants" },
];
