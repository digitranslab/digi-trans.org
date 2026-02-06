/**
 * Allama Product Data File
 * 
 * Contains all content data for the Allama product page including:
 * - Hero content with tagline
 * - Four value propositions
 * - Features (Workflow Builder, Integrations, Self-Hosting, Tutorials)
 * - Integration categories and tools
 * - Deployment options
 * - Competitor comparisons
 * - Use cases
 * 
 * Based on actual Allama documentation at products/allama/docs/
 * Allama is a modern, open source automation platform built for security and IT engineers.
 * 
 * Requirements: 9.2, 9.4
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

export interface Integration {
  name: string;
  icon?: string;
}

export interface IntegrationCategory {
  category: string;
  tools: Integration[];
}

export interface DeploymentOption {
  name: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface CompetitorComparison {
  competitor: string;
  aspects: {
    aspect: string;
    allama: string;
    competitor: string;
    advantage: boolean;
  }[];
}

export interface UseCase {
  title: string;
  problem: string;
  solution: string;
  result: string;
}

export interface AllamaData {
  hero: {
    tagline: string;
    headline: string;
    description: string;
    primaryCTA: { label: string; href: string };
    secondaryCTA: { label: string; href: string };
  };
  valuePropositions: ValueProposition[];
  features: Feature[];
  integrations: IntegrationCategory[];
  deploymentOptions: DeploymentOption[];
  competitors: CompetitorComparison[];
  useCases: UseCase[];
}

// Hero Section Data
export const heroData = {
  tagline: "Open-source security automation platform",
  headline: "Modern Automation for Security & IT Teams",
  description: "Allama is a modern, open source automation platform built for security and IT engineers. No-code/low-code UI for workflows, out-of-the-box integrations, and case management—orchestrated by Temporal for scale and reliability.",
  primaryCTA: {
    label: "Get Started Free",
    href: "https://github.com/digitranslab/allama",
  },
  secondaryCTA: {
    label: "Read Documentation",
    href: "https://docs.allama.com",
  },
};

// Value Propositions - Requirements 9.2
export const valuePropositions: ValueProposition[] = [
  {
    icon: "Workflow",
    title: "No-Code Workflow Builder",
    description: "Build sophisticated security automation playbooks with a visual drag-and-drop interface. Define workflows in YAML for version control and portability.",
    metric: {
      value: "Zero",
      label: "Code Required",
    },
  },
  {
    icon: "Zap",
    title: "Temporal-Powered Orchestration",
    description: "Built on Temporal for enterprise-grade reliability. Automatic retries, durable execution, and horizontal scaling out of the box.",
    metric: {
      value: "99.9%",
      label: "Reliability",
    },
  },
  {
    icon: "Code2",
    title: "100% Open Source",
    description: "Fully open source under AGPL-3.0. Inspect every line of code, contribute to the community, and avoid vendor lock-in with portable YAML workflows.",
    metric: {
      value: "100%",
      label: "Open Source",
    },
  },
  {
    icon: "Plug",
    title: "Extensible Integrations",
    description: "Pre-built integrations via YAML action templates and Python UDFs. Sync custom integrations from your private Git repository.",
    metric: {
      value: "80+",
      label: "Integrations",
    },
  },
];

// Features Deep Dive - Requirements 9.4
export const features: Feature[] = [
  {
    id: "core-actions",
    icon: "Workflow",
    title: "Core Actions",
    description: "Powerful building blocks for any automation workflow, from HTTP requests to data transforms.",
    capabilities: [
      "HTTP requests to any REST API",
      "Data transforms and manipulation",
      "Workflow actions (child workflows, scatter-gather)",
      "Conditional logic (if/then/else)",
      "Loops and parallel execution",
      "Wait, retry, and require until patterns",
    ],
    marketingAngle: "Everything you need to automate any process.",
    image: "/images/products/allama/http-inputs.png",
  },
  {
    id: "script-actions",
    icon: "Code",
    title: "Script Actions",
    description: "Execute custom Python scripts in a secure sandbox for complex logic and custom integrations.",
    capabilities: [
      "Secure Python sandbox execution",
      "Access to workflow context and secrets",
      "Custom data processing logic",
      "Integration with external libraries",
      "Reusable Python UDFs",
    ],
    marketingAngle: "When no-code isn't enough, bring your own Python.",
    image: "/images/products/allama/scan-url.png",
  },
  {
    id: "integrations",
    icon: "Plug",
    title: "Action Templates & Integrations",
    description: "Pre-built integrations via YAML action templates. Build your own and sync from Git.",
    capabilities: [
      "YAML-based action templates (no code required)",
      "Python UDFs for complex integrations",
      "OpenAPI spec converter (auto-generate from API docs)",
      "OAuth 2.0 support (authorization code + client credentials)",
      "Git sync for version-controlled integrations",
      "Community-driven Allama Registry",
    ],
    marketingAngle: "Connect everything. Automate anything.",
    image: "/images/products/allama/view-available-actions.png",
  },
  {
    id: "case-management",
    icon: "FolderKanban",
    title: "Case Management",
    description: "Track security incidents from detection to resolution with built-in case management.",
    capabilities: [
      "Custom fields and schemas per workspace",
      "Task assignment and tracking",
      "File attachments and evidence collection",
      "Audit trail and timeline",
      "Tag-based organisation",
      "Direct integration with workflows",
    ],
    marketingAngle: "From alert to resolution, all in one place.",
    image: "/images/products/allama/scatter-gather.png",
  },
];


// Integration Categories - Requirements 9.4
export const integrations: IntegrationCategory[] = [
  {
    category: "SIEM",
    tools: [
      { name: "Splunk" },
      { name: "Elastic Security" },
      { name: "Datadog" },
      { name: "Wazuh" },
    ],
  },
  {
    category: "EDR",
    tools: [
      { name: "CrowdStrike" },
      { name: "SentinelOne" },
    ],
  },
  {
    category: "Identity",
    tools: [
      { name: "Okta" },
      { name: "Microsoft Entra ID" },
      { name: "Google Workspace" },
      { name: "LDAP" },
    ],
  },
  {
    category: "Ticketing",
    tools: [
      { name: "Jira" },
      { name: "Zendesk" },
      { name: "PagerDuty" },
      { name: "Rootly" },
    ],
  },
  {
    category: "Communication",
    tools: [
      { name: "Slack" },
      { name: "Microsoft Teams" },
      { name: "Email (SMTP)" },
    ],
  },
  {
    category: "Threat Intel",
    tools: [
      { name: "VirusTotal" },
      { name: "URLScan" },
      { name: "IPInfo" },
      { name: "CrowdSec" },
      { name: "ThreatStream" },
    ],
  },
  {
    category: "Cloud",
    tools: [
      { name: "AWS (boto3)" },
      { name: "Google Cloud" },
      { name: "Azure" },
    ],
  },
  {
    category: "Vulnerability",
    tools: [
      { name: "HackerOne" },
    ],
  },
];

// Deployment Options
export const deploymentOptions: DeploymentOption[] = [
  {
    name: "Docker Compose",
    description: "Single command deployment ideal for evaluation and small teams. All services included.",
    features: [
      "5-minute setup",
      "All services included",
      "Ideal for development",
      "Easy upgrades",
    ],
    recommended: true,
  },
  {
    name: "AWS ECS Fargate",
    description: "Terraform-based production deployment with auto-scaling and high availability.",
    features: [
      "Auto-scaling",
      "High availability",
      "Application Load Balancer",
      "RDS PostgreSQL",
    ],
  },
  {
    name: "Self-Hosted LLMs",
    description: "Run with Ollama for complete air-gapped operation with self-hosted LLMs.",
    features: [
      "Ollama integration",
      "No external dependencies",
      "Complete data sovereignty",
      "Llama 3, Mistral support",
    ],
  },
];

// Competitor Comparisons
export const competitors: CompetitorComparison[] = [
  {
    competitor: "Splunk SOAR",
    aspects: [
      { aspect: "Price", allama: "Free", competitor: "$50-100K+/year", advantage: true },
      { aspect: "AI Integration", allama: "Native", competitor: "Limited", advantage: true },
      { aspect: "Source Code", allama: "Open", competitor: "Closed", advantage: true },
      { aspect: "Deployment", allama: "5 minutes", competitor: "Weeks", advantage: true },
      { aspect: "Lock-in", allama: "None", competitor: "High", advantage: true },
    ],
  },
  {
    competitor: "Palo Alto XSOAR",
    aspects: [
      { aspect: "Price", allama: "Free", competitor: "$75K+/year", advantage: true },
      { aspect: "AI Integration", allama: "Native", competitor: "Limited (requires XSIAM)", advantage: true },
      { aspect: "Integrations", allama: "80+", competitor: "700+", advantage: false },
      { aspect: "Learning Curve", allama: "Low", competitor: "High", advantage: true },
      { aspect: "Lock-in", allama: "None", competitor: "High", advantage: true },
    ],
  },
  {
    competitor: "Tines/Torq",
    aspects: [
      { aspect: "Price", allama: "Free", competitor: "$30K+/year", advantage: true },
      { aspect: "Open Source", allama: "Yes", competitor: "No", advantage: true },
      { aspect: "Self-Hosted", allama: "Yes", competitor: "Limited", advantage: true },
      { aspect: "AI Agents", allama: "Yes", competitor: "Limited", advantage: true },
    ],
  },
];

// Use Cases
export const useCases: UseCase[] = [
  {
    title: "Automated Phishing Triage",
    problem: "Manual phishing analysis takes 15-30 minutes per email.",
    solution: "Automated workflow that extracts indicators, checks threat intel via URLScan/VirusTotal, classifies severity, and creates cases.",
    result: "Dramatic reduction in triage time with consistent analysis.",
  },
  {
    title: "Alert Enrichment & Correlation",
    problem: "Raw alerts lack context for decision-making.",
    solution: "Automatically enrich alerts with user info, asset data, threat intel, and historical context using HTTP requests and data transforms.",
    result: "Analysts see complete picture immediately.",
  },
  {
    title: "Workflow Triggers",
    problem: "Manual workflow execution is slow and error-prone.",
    solution: "Trigger workflows via UI, webhooks, or schedules. Pass custom payloads for dynamic automation.",
    result: "Automated response to any event.",
  },
  {
    title: "Child Workflows & Scatter-Gather",
    problem: "Complex processes require multiple coordinated steps.",
    solution: "Build workflows of workflows. Split data, process in parallel, and merge results with scatter-gather patterns.",
    result: "Modular, reusable automation at scale.",
  },
  {
    title: "Custom Integrations via Git",
    problem: "Teams need custom integrations not available out-of-the-box.",
    solution: "Sync custom YAML integrations and Python scripts directly from your private Git repository.",
    result: "Version-controlled, team-specific integrations.",
  },
];

// Authentication Options
export const authOptions = [
  { name: "Basic Auth", description: "Simple username/password authentication" },
  { name: "Google OAuth", description: "Single sign-on with Google Workspace" },
  { name: "SAML SSO", description: "Enterprise SSO with any SAML 2.0 provider" },
];

// Combined Allama data export
export const allamaData: AllamaData = {
  hero: heroData,
  valuePropositions,
  features,
  integrations,
  deploymentOptions,
  competitors,
  useCases,
};

export default allamaData;
