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
 * Allama is Digitrans's open-source AI security automation platform (SOAR).
 * We provide implementation, consulting, and managed services for enterprise
 * security teams.
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
  tagline: "Open-Source AI-Powered SOAR Platform",
  headline: "AI-Driven Security Automation for the Modern SOC",
  description: "In 2026, AI-driven security operations are the norm. Allama combines autonomous investigation, adaptive triage, and intelligent playbook orchestration — deployed by our security experts in weeks, not months. Open-source, enterprise-grade, and built for SOC teams that refuse to compromise.",
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
    description: "Our security automation experts deploy Allama in your environment and build custom AI-powered workflows tailored to your SOC processes. Production-ready in weeks — not the 6-12 months legacy SOAR vendors require.",
    metric: {
      value: "4-6",
      label: "Weeks to Production",
    },
  },
  {
    icon: "TrendingUp",
    title: "Proven ROI",
    description: "Reduce mean time to respond by 90%. AI-powered triage eliminates alert fatigue while autonomous investigation handles tier-1 incidents without human intervention. Measurable improvements within the first quarter.",
    metric: {
      value: "90%",
      label: "Faster Response",
    },
  },
  {
    icon: "Brain",
    title: "AI-Native Investigation",
    description: "Unlike legacy SOAR that follows rigid playbooks, Allama's AI agents dynamically investigate alerts — enriching context, correlating events, and recommending actions. Adaptive triage that learns from your environment.",
    metric: {
      value: "80%",
      label: "Tier-1 Auto-Resolution",
    },
  },
  {
    icon: "Plug",
    title: "Seamless Integration",
    description: "We integrate Allama with your existing SIEM, EDR, XDR, identity, ticketing, and communication tools. 80+ pre-built connectors plus custom integrations built to your exact specifications.",
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
    problem: "Analysts spend 20+ minutes per phishing report, creating backlogs of hundreds of unreviewed emails daily.",
    solution: "End-to-end AI-powered phishing triage: header analysis, URL detonation, attachment sandboxing, threat intel enrichment, user notification, and automated remediation — all orchestrated in seconds.",
    result: "90% reduction in analyst time per incident. Zero backlog.",
  },
  {
    title: "AI-Powered Alert Triage",
    problem: "Thousands of SIEM alerts with no context, leading to alert fatigue and missed critical threats.",
    solution: "AI agents that autonomously investigate alerts — enriching with user, asset, and threat context, correlating across data sources, and scoring severity before any human sees them.",
    result: "80% of tier-1 alerts resolved without human intervention.",
  },
  {
    title: "Compliance Evidence Automation",
    problem: "Manual evidence collection for SOC2, ISO 27001, and PCI-DSS audits takes weeks of analyst time.",
    solution: "Automated workflows that continuously collect, organize, and report compliance evidence across your entire security stack with full audit trails.",
    result: "Audit-ready in hours, not weeks. Continuous compliance posture.",
  },
  {
    title: "Automated Threat Containment",
    problem: "Slow response to confirmed threats increases blast radius and dwell time.",
    solution: "One-click or fully automated containment: isolate hosts via EDR, disable accounts in IAM, block IPs at firewall, quarantine emails — all coordinated across your stack in seconds.",
    result: "Contain threats in seconds. 95% reduction in dwell time.",
  },
  {
    title: "Vulnerability Prioritization",
    problem: "Vulnerability scanners produce thousands of findings with no business context for prioritization.",
    solution: "AI-driven vulnerability triage that correlates CVEs with asset criticality, exploit availability, threat intelligence, and compensating controls to produce actionable priority rankings.",
    result: "Focus on the 5% of vulnerabilities that actually matter.",
  },
  {
    title: "Insider Threat Detection",
    problem: "Behavioral anomalies across identity, DLP, and access logs are difficult to correlate manually.",
    solution: "Multi-source correlation workflows that aggregate signals from IAM, DLP, CASB, and endpoint telemetry to identify and investigate potential insider threats automatically.",
    result: "Detect insider threats 10x faster with full evidence chain.",
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
