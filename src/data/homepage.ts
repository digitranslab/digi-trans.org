/**
 * Homepage Data File
 * 
 * Contains all content data for the homepage sections including:
 * - Hero content (headline, CTAs, trust badges)
 * - Three pillars data (Consulting, Engineering, Products)
 * - Products showcase data (Allama, DBLOCK)
 * - Industries data (5 verticals)
 * - Differentiators data (5 items with metrics)
 * - Testimonials data (placeholder format)
 * 
 * Requirements: 2.1, 2.2, 2.3, 3.1, 4.1, 5.1, 6.1, 7.1
 */

// Type definitions
export interface CTAData {
  label: string;
  href: string;
}

export interface TrustBadge {
  label: string;
  value?: string;
}

export interface HeroData {
  headline: string;
  subheadline: string;
  primaryCTA: CTAData;
  secondaryCTA: CTAData;
  trustBadges: TrustBadge[];
}

export interface PillarData {
  icon: string;
  title: string;
  description: string;
  href: string;
  features: string[];
}

export interface ProductData {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
  status: "live" | "coming-soon";
  ctaLabel: string;
}

export interface IndustryData {
  icon: string;
  name: string;
  description: string;
  href: string;
}

export interface DifferentiatorMetric {
  value: string;
  label: string;
}

export interface DifferentiatorData {
  icon: string;
  title: string;
  description: string;
  metric?: DifferentiatorMetric;
}

export interface TestimonialData {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar?: string;
}

export interface HomepageData {
  hero: HeroData;
  pillars: PillarData[];
  products: ProductData[];
  industries: IndustryData[];
  differentiators: DifferentiatorData[];
  testimonials: TestimonialData[];
}

// Hero Section Data - Requirements 2.1, 2.2, 2.3
export const heroData: HeroData = {
  headline: "AI & Data Solutions That Transform Business",
  subheadline: "We help enterprises harness the power of AI agentic automation, data platforms, and cloud security to drive innovation and competitive advantage.",
  primaryCTA: {
    label: "Schedule Consultation",
    href: "/contact",
  },
  secondaryCTA: {
    label: "Explore Products",
    href: "/products/allama",
  },
  trustBadges: [
    { label: "Enterprise Clients", value: "50+" },
    { label: "AI Models Deployed", value: "200+" },
    { label: "Uptime SLA", value: "99.9%" },
    { label: "Years Experience", value: "10+" },
  ],
};

// Three Pillars Data - Requirements 3.1, 3.2
export const pillarsData: PillarData[] = [
  {
    icon: "Lightbulb",
    title: "Consulting",
    description: "Strategic AI and data consulting to help you identify opportunities, build roadmaps, and transform your business with intelligent automation.",
    href: "/services/ai-data-consulting",
    features: [
      "AI Strategy & Roadmap",
      "Data Architecture Design",
      "Security Assessment",
      "Digital Transformation",
    ],
  },
  {
    icon: "Code",
    title: "Engineering",
    description: "Expert engineering teams that build scalable data platforms, cloud infrastructure, and custom AI solutions tailored to your needs.",
    href: "/services/big-data-architecture",
    features: [
      "Data Platform Development",
      "Cloud Infrastructure",
      "ML/AI Implementation",
      "DevOps & Automation",
    ],
  },
  {
    icon: "Package",
    title: "Products",
    description: "Enterprise-grade products for security automation and data management, built on open-source foundations with commercial support.",
    href: "/products/allama",
    features: [
      "Allama SOAR Platform",
      "DBLOCK (Coming Soon)",
      "Enterprise Support",
      "Custom Integrations",
    ],
  },
];

// Products Showcase Data - Requirements 4.1, 4.2, 4.3
export const productsData: ProductData[] = [
  {
    name: "Allama",
    tagline: "Open-source security automation platform",
    description: "Modern automation platform built for security and IT engineers. No-code/low-code UI for workflows, out-of-the-box integrations, and case management—orchestrated by Temporal for scale and reliability.",
    features: [
      "Visual Workflow Builder",
      "YAML Action Templates",
      "Python Script Actions",
      "Case Management",
    ],
    href: "/products/allama",
    status: "live",
    ctaLabel: "Learn More",
  },
  {
    name: "DBLOCK",
    tagline: "Open-source AI application builder",
    description: "Python-based framework for building AI applications with a visual editor. Supports agents, MCP, and any LLM or vector store—no vendor lock-in.",
    features: [
      "Visual Flow Editor",
      "AI Agents & MCP Support",
      "100+ Components",
      "Desktop & Docker Deploy",
    ],
    href: "/products/dblock",
    status: "coming-soon",
    ctaLabel: "Learn More",
  },
];

// Industries Data - Requirements 5.1, 5.2
export const industriesData: IndustryData[] = [
  {
    icon: "Building2",
    name: "Financial Services",
    description: "Secure, compliant AI solutions for banking, insurance, and fintech with regulatory expertise.",
    href: "/solutions/financial-services",
  },
  {
    icon: "Heart",
    name: "Healthcare",
    description: "HIPAA-compliant data platforms and AI automation for healthcare providers and life sciences.",
    href: "/solutions/healthcare",
  },
  {
    icon: "Cpu",
    name: "Technology",
    description: "Scalable infrastructure and AI capabilities for tech companies and digital-native businesses.",
    href: "/solutions/technology",
  },
  {
    icon: "ShoppingCart",
    name: "Retail",
    description: "Customer intelligence and supply chain optimization powered by AI and real-time analytics.",
    href: "/solutions/retail",
  },
  {
    icon: "Landmark",
    name: "Government",
    description: "Secure, sovereign cloud solutions and AI platforms for public sector digital transformation.",
    href: "/solutions/government",
  },
];

// Differentiators Data - Requirements 6.1, 6.2
export const differentiatorsData: DifferentiatorData[] = [
  {
    icon: "Zap",
    title: "AI-Native Approach",
    description: "We don't just add AI to existing solutions—we build from the ground up with AI at the core, delivering 10x efficiency gains.",
    metric: {
      value: "10x",
      label: "Efficiency Improvement",
    },
  },
  {
    icon: "Shield",
    title: "Security-First Architecture",
    description: "Every solution we build prioritizes security and compliance, with SOC 2, ISO 27001, and industry-specific certifications.",
    metric: {
      value: "100%",
      label: "Compliance Rate",
    },
  },
  {
    icon: "Users",
    title: "Expert Team",
    description: "Our team includes former security leaders, data architects, and AI researchers from top tech companies and research institutions.",
    metric: {
      value: "15+",
      label: "Years Avg Experience",
    },
  },
  {
    icon: "GitBranch",
    title: "Open Source Foundation",
    description: "We believe in transparency and community. Our products are built on open-source foundations, avoiding vendor lock-in.",
    metric: {
      value: "5K+",
      label: "GitHub Stars",
    },
  },
  {
    icon: "Clock",
    title: "Rapid Time-to-Value",
    description: "Our proven methodologies and pre-built accelerators help you see results in weeks, not months or years.",
    metric: {
      value: "4-8",
      label: "Weeks to Production",
    },
  },
];

// Testimonials Data - Requirements 7.1, 7.2
export const testimonialsData: TestimonialData[] = [
  {
    quote: "Digitrans transformed our security operations. What used to take our team hours now happens in seconds with Allama. The ROI was evident within the first month.",
    author: "Sarah Chen",
    title: "CISO",
    company: "Global Financial Corp",
  },
  {
    quote: "Their AI consulting team helped us identify opportunities we didn't even know existed. We've reduced operational costs by 40% while improving customer satisfaction.",
    author: "Michael Torres",
    title: "VP of Technology",
    company: "HealthTech Solutions",
  },
  {
    quote: "The data platform they built for us handles 10x our previous volume with better reliability. Their engineering team is world-class.",
    author: "Emma Williams",
    title: "CTO",
    company: "RetailNext Inc",
  },
];

// Final CTA Section Data - Requirements 8.1, 8.2
export const finalCTAData = {
  headline: "Ready to Transform Your Business?",
  subheadline: "Join leading enterprises that trust Digitrans for their AI and data transformation journey.",
  primaryCTA: {
    label: "Schedule Consultation",
    href: "/contact",
  },
  secondaryCTA: {
    label: "Explore Products",
    href: "/products/allama",
  },
};

// Combined homepage data export
export const homepageData: HomepageData = {
  hero: heroData,
  pillars: pillarsData,
  products: productsData,
  industries: industriesData,
  differentiators: differentiatorsData,
  testimonials: testimonialsData,
};

export default homepageData;
