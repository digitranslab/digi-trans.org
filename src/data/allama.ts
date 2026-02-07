/**
 * Allama Product Data File
 * 
 * Contains all content data for the Allama product page including:
 * - Hero content with tagline
 * - Four value propositions
 * - Features (Workflow Builder, Integrations, Case Management)
 * - Integration categories and tools
 * - Competitor comparisons
 * - Use cases
 * 
 * Allama is DigiTransLab's security automation platform - we provide
 * implementation, consulting, and managed services for enterprise security teams.
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
  competitors: CompetitorComparison[];
  useCases: UseCase[];
}

// Hero Section Data
export const heroData = {
  tagline: "Enterprise Security Automation Platform",
  headline: "Automate Your Security Operations",
  description: "Allama transforms how security teams work. Our experts implement custom workflows, integrate your security stack, and deliver measurable ROI in weeks, not months.",
  primaryCTA: {
    label: "Schedule a Consultation",
    href: "/contact",
  },
  secondaryCTA: {
    label: "View Case Studies",
    href: "/clients",
  },
};

// Value Propositions - Requirements 9.2
export const valuePropositions: ValueProposition[] = [
  {
    icon: "Rocket",
    title: "Rapid Implementation",
    description: "Our security automation experts deploy Allama in your environment and build custom workflows tailored to your SOC processes. Go live in weeks, not months.",
    metric: {
      value: "4-6",
      label: "Weeks to Production",
    },
  },
  {
    icon: "TrendingUp",
    title: "Proven ROI",
    description: "Reduce mean time to respond by 80%. Our clients see measurable improvements in analyst efficiency and incident resolution within the first quarter.",
    metric: {
      value: "80%",
      label: "Faster Response",
    },
  },
  {
    icon: "Users",
    title: "Expert Support",
    description: "Dedicated security engineers who understand your environment. We don't just deploy software—we partner with your team to continuously optimize workflows.",
    metric: {
      value: "24/7",
      label: "Expert Support",
    },
  },
  {
    icon: "Plug",
    title: "Seamless Integration",
    description: "We integrate Allama with your existing SIEM, EDR, ticketing, and communication tools. Custom integrations built to your exact specifications.",
    metric: {
      value: "80+",
      label: "Integrations",
    },
  },
];

// Features Deep Dive - Requirements 9.4
export const features: Feature[] = [
  {
    id: "workflow-automation",
    icon: "Workflow",
    title: "Custom Workflow Automation",
    description: "We design and implement security playbooks tailored to your specific processes, threats, and compliance requirements.",
    capabilities: [
      "Custom playbooks for your threat landscape",
      "Multi-step orchestration across tools",
      "Conditional logic and decision trees",
      "Parallel execution for faster response",
      "Human-in-the-loop approval workflows",
      "Scheduled and event-driven triggers",
    ],
    marketingAngle: "Your processes, automated by experts.",
    image: "/images/products/allama/http-inputs.png",
  },
  {
    id: "integration-services",
    icon: "Plug",
    title: "Integration Services",
    description: "Our team connects Allama to your entire security stack—SIEM, EDR, identity, ticketing, and more.",
    capabilities: [
      "Pre-built connectors for 80+ tools",
      "Custom API integrations on demand",
      "Bi-directional data sync",
      "OAuth 2.0 and enterprise auth",
      "Secure credential management",
      "Ongoing integration maintenance",
    ],
    marketingAngle: "Connect everything. We handle the complexity.",
    image: "/images/products/allama/view-available-actions.png",
  },
  {
    id: "case-management",
    icon: "FolderKanban",
    title: "Incident Case Management",
    description: "Track security incidents from detection to resolution with built-in case management configured to your workflow.",
    capabilities: [
      "Custom fields matching your processes",
      "Automated task assignment",
      "Evidence collection and chain of custody",
      "Complete audit trail for compliance",
      "SLA tracking and escalation",
      "Executive reporting dashboards",
    ],
    marketingAngle: "From alert to resolution, fully tracked.",
    image: "/images/products/allama/scatter-gather.png",
  },
  {
    id: "managed-services",
    icon: "Headphones",
    title: "Managed Services",
    description: "Let our security experts manage your Allama deployment. We monitor, optimize, and evolve your automation.",
    capabilities: [
      "24/7 platform monitoring",
      "Workflow performance optimization",
      "New playbook development",
      "Quarterly business reviews",
      "Dedicated success manager",
      "Priority support SLA",
    ],
    marketingAngle: "Focus on threats, not tools.",
    image: "/images/products/allama/scan-url.png",
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

// Competitor Comparisons
export const competitors: CompetitorComparison[] = [
  {
    competitor: "Splunk SOAR",
    aspects: [
      { aspect: "Time to Value", allama: "4-6 weeks", competitor: "6-12 months", advantage: true },
      { aspect: "Implementation", allama: "Expert-led", competitor: "DIY or expensive PS", advantage: true },
      { aspect: "Total Cost", allama: "Predictable", competitor: "$100K+ hidden costs", advantage: true },
      { aspect: "Customization", allama: "Unlimited", competitor: "Limited", advantage: true },
      { aspect: "Support", allama: "Dedicated team", competitor: "Ticket queue", advantage: true },
    ],
  },
  {
    competitor: "Palo Alto XSOAR",
    aspects: [
      { aspect: "Time to Value", allama: "4-6 weeks", competitor: "3-6 months", advantage: true },
      { aspect: "Learning Curve", allama: "We handle it", competitor: "Steep", advantage: true },
      { aspect: "Custom Integrations", allama: "Included", competitor: "Extra cost", advantage: true },
      { aspect: "Flexibility", allama: "Any workflow", competitor: "Platform constraints", advantage: true },
      { aspect: "Ongoing Support", allama: "Proactive", competitor: "Reactive", advantage: true },
    ],
  },
  {
    competitor: "Tines/Torq",
    aspects: [
      { aspect: "Implementation", allama: "Full service", competitor: "Self-service", advantage: true },
      { aspect: "Security Expertise", allama: "SOC veterans", competitor: "Generic support", advantage: true },
      { aspect: "Custom Development", allama: "Included", competitor: "Limited", advantage: true },
      { aspect: "Enterprise Ready", allama: "Day one", competitor: "Requires work", advantage: true },
      { aspect: "Ongoing Partnership", allama: "Dedicated team", competitor: "Support tickets", advantage: true },
    ],
  },
];

// Use Cases
export const useCases: UseCase[] = [
  {
    title: "Phishing Response Automation",
    problem: "Analysts spend 20+ minutes per phishing report, creating backlogs.",
    solution: "We implement end-to-end phishing triage: extraction, threat intel enrichment, user notification, and remediation—all automated.",
    result: "90% reduction in analyst time per incident.",
  },
  {
    title: "SIEM Alert Enrichment",
    problem: "Thousands of alerts with no context, leading to alert fatigue.",
    solution: "Our team builds enrichment workflows that add user, asset, and threat context to every alert before it reaches your analysts.",
    result: "Analysts make faster, better decisions.",
  },
  {
    title: "Compliance Automation",
    problem: "Manual evidence collection for audits takes weeks.",
    solution: "Automated workflows that continuously collect, organize, and report compliance evidence across your security stack.",
    result: "Audit-ready in hours, not weeks.",
  },
  {
    title: "Threat Containment",
    problem: "Slow response to confirmed threats increases blast radius.",
    solution: "One-click or fully automated containment: isolate hosts, disable accounts, block IPs across your entire stack.",
    result: "Contain threats in seconds, not hours.",
  },
  {
    title: "Custom Integration Development",
    problem: "Your security tools don't talk to each other.",
    solution: "We build custom integrations for any tool with an API—internal systems, niche vendors, legacy platforms.",
    result: "Unified security operations.",
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
  competitors,
  useCases,
};

export default allamaData;
