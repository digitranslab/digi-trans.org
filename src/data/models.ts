/**
 * AI Models Page Data
 * 
 * Data for the Digitrans Lab fine-tuned model portfolio showcase page.
 */

export interface ModelCard {
  name: string;
  parameters: string;
  specialty: string;
  benchmark: { metric: string; value: string };
  hardware: { minimum: string; recommended: string };
  deploymentOptions: string[];
  huggingFaceUrl: string;
  icon: string;
  contextWindow?: string;
  basedOn?: string;
  quantizations?: string[];
  researchPaper?: { title: string; url: string };
}

export interface UpcomingModel {
  name: string;
  description: string;
  icon: string;
}

export interface FineTuningService {
  title: string;
  description: string;
  startingCost: string;
  hardware: string;
  capabilities: string[];
}

export const heroData = {
  badge: "AI Model Lab",
  headline: "Fine-Tuned Models for Agentic AI",
  description: "Compact, efficient models optimized for reasoning, tool calling, and deep research. Trained in-house by Digitrans Lab — designed to run on consumer hardware.",
  cta: { label: "Explore Custom Training", href: "/contact" },
};

export const modelPhilosophy = "Our models don't try to memorize everything — they excel at knowing how to find anything. Optimized for how agents actually work: planning, executing, and completing tasks autonomously. Small models (1.7B–4B parameters) that outperform much larger models on targeted benchmarks through focused fine-tuning.";

export const modelCards: ModelCard[] = [
  {
    name: "Jan-v1",
    parameters: "4B",
    specialty: "Reasoning, problem-solving, and tool calling",
    benchmark: { metric: "SimpleQA Accuracy", value: "91.1%" },
    hardware: { minimum: "8GB RAM (Q4)", recommended: "16GB RAM (Q8)" },
    deploymentOptions: ["Megamind Desktop", "vLLM", "llama.cpp"],
    huggingFaceUrl: "https://huggingface.co/digitranslab/Megamind-v1-4B",
    icon: "Cpu",
    basedOn: "Qwen3-4B-thinking",
    quantizations: ["Q4_K_M (2.5GB)", "Q5_K_M (2.89GB)", "Q6_K (3.31GB)", "Q8_0 (4.28GB)"],
  },
  {
    name: "Jan-Nano-128k",
    parameters: "4B",
    specialty: "Deep research and multi-document analysis",
    benchmark: { metric: "Multi-doc improvement", value: "+15% over 32k" },
    hardware: { minimum: "16GB RAM (Q4)", recommended: "24GB RAM (Q8)" },
    deploymentOptions: ["Megamind Desktop", "vLLM", "llama.cpp"],
    huggingFaceUrl: "https://huggingface.co/Menlo/Megamind-nano-128k",
    icon: "BookOpen",
    contextWindow: "128k tokens (~300 pages)",
  },
  {
    name: "Jan-Nano-32k",
    parameters: "4B",
    specialty: "Web search via MCP and compact research",
    benchmark: { metric: "Research orchestration", value: "Fetch → Hold → Extract" },
    hardware: { minimum: "8GB RAM (iQ4_XS)", recommended: "16GB+ RAM" },
    deploymentOptions: ["Megamind Desktop", "vLLM", "llama.cpp"],
    huggingFaceUrl: "https://huggingface.co/Menlo/Megamind-nano-gguf",
    icon: "Search",
    contextWindow: "32k tokens",
  },
  {
    name: "Lucy",
    parameters: "1.7B",
    specialty: "Edge/mobile web search agent",
    benchmark: { metric: "SimpleQA (competitive)", value: "Tiny but effective" },
    hardware: { minimum: "4GB RAM (Q4)", recommended: "8GB RAM (Q8)" },
    deploymentOptions: ["Megamind Desktop", "Mobile", "Edge devices"],
    huggingFaceUrl: "https://huggingface.co/Menlo/Lucy-128k",
    icon: "Zap",
    basedOn: "Qwen3-1.7B",
    researchPaper: { title: "Lucy: edgerunning agentic web search on mobile with machine generated task vectors", url: "https://arxiv.org/abs/2508.00360" },
  },
];

export const upcomingModels: UpcomingModel[] = [
  {
    name: "Jan-v2",
    description: "Multimodal agent built for long-horizon tasks. Designed for autonomous operation over 5–10+ hours.",
    icon: "Eye",
  },
  {
    name: "Ichigo",
    description: "Speech AI for voice interactions — enabling natural voice-based AI conversations.",
    icon: "Mic",
  },
];

export const fineTuningService: FineTuningService = {
  title: "Custom Model Fine-Tuning",
  description: "We train domain-specific models for your organization. Compact models (1.7B–4B parameters) fine-tuned on your data for your specific use cases.",
  startingCost: "Under $100 on H200 hardware",
  hardware: "Internal A6000 clusters and RunPod H200",
  capabilities: [
    "Domain-specific knowledge embedding",
    "Tool calling optimization for your APIs",
    "Custom evaluation benchmarks",
    "Iterative fine-tuning cycles",
    "GGUF export with multiple quantizations",
  ],
};
