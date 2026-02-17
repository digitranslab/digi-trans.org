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
  headline: "Your Digital, Data & AI Scale-up Partner",
  subheadline: "Digitrans enhances your operations by integrating customised digital solutions with a strategic vision. We align, build, and maintain your digital, data & AI roadmap, ensuring consistent reliability and efficiency worldwide.",
  primaryCTA: {
    label: "Schedule Consultation",
    href: "/contact",
  },
  secondaryCTA: {
    label: "Explore Products",
    href: "/products/allama",
  },
  trustBadges: [
    { label: "Industrial Sites", value: "150+" },
    { label: "Continents", value: "5" },
    { label: "Uptime SLA", value: "99.9%" },
    { label: "Years Experience", value: "13+" },
  ],
};

// Three Pillars Data - Requirements 3.1, 3.2
export const pillarsData: PillarData[] = [
  {
    icon: "Lightbulb",
    title: "Explore & Frame",
    description: "We start with a 360-degree survey of your operations, providing expert recommendations on where data-powered solutions can bring the most value to your business.",
    href: "/services/ai-data-consulting",
    features: [
      "AI Strategy & Roadmap",
      "Data Architecture Design",
      "360° Operations Survey",
      "Digital Transformation",
    ],
  },
  {
    icon: "Code",
    title: "Design & Build",
    description: "We design, build, and enrich your data ecosystems with custom applications, AI models, APIs, and backend services — fitted to your specific requirements.",
    href: "/services/big-data-architecture",
    features: [
      "Data Platform Development",
      "Cloud Infrastructure (AWS, GCP, Azure)",
      "AI/ML Model Development",
      "DevOps & MLOps Automation",
    ],
  },
  {
    icon: "Package",
    title: "Deploy, Run & Scale",
    description: "24/7 DevOps and MLOps support across 5 continents. We build it, you own it — full IP ownership with guaranteed SLAs and proactive monitoring.",
    href: "/products/allama",
    features: [
      "Allama SOAR Platform",
      "DBLOCK (Coming Soon)",
      "24/7 Global Support",
      "Guaranteed SLAs",
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
    icon: "Factory",
    name: "Manufacturing",
    description: "Industry 4.0 solutions — predictive maintenance, quality control AI, and smart factory analytics.",
    href: "/solutions/manufacturing",
  },
  {
    icon: "ShoppingCart",
    name: "Retail & E-commerce",
    description: "Customer 360, demand forecasting, and supply chain optimisation powered by AI.",
    href: "/solutions/retail",
  },
  {
    icon: "Cpu",
    name: "Technology",
    description: "Scalable infrastructure and AI capabilities for tech companies and digital-native businesses.",
    href: "/solutions/technology",
  },
  {
    icon: "Landmark",
    name: "Government",
    description: "Secure, sovereign cloud solutions and AI platforms for public sector digital transformation.",
    href: "/solutions/government",
  },
  {
    icon: "Building",
    name: "Smart City",
    description: "AI for smart grids, water networks, waste management, and urban infrastructure optimisation.",
    href: "/solutions/smart-city",
  },
  {
    icon: "Truck",
    name: "Transportation & Logistics",
    description: "Route optimisation, fleet management, demand forecasting, and supply chain AI.",
    href: "/solutions/transportation-logistics",
  },
];

// Differentiators Data - Requirements 6.1, 6.2
export const differentiatorsData: DifferentiatorData[] = [
  {
    icon: "Zap",
    title: "Getting Past the Proof-of-Concept Roadblock",
    description: "85% of AI projects never make it out of the proof-of-concept phase. Digitrans accelerates and optimises the development, deployment and scaling up of AI in production. We create AI algorithms and manage the ones you've already developed.",
    metric: {
      value: "85%",
      label: "AI Projects Fail at PoC — We Fix That",
    },
  },
  {
    icon: "Shield",
    title: "ISO 27001 Certified",
    description: "Globally recognised standard for information security management. Your data and analytics are safe and secure with us.",
    metric: {
      value: "100%",
      label: "Compliance Rate",
    },
  },
  {
    icon: "Users",
    title: "Trusted by Fortune 500",
    description: "We build and operate data-powered industrial solutions for leading Fortune 500 companies, as well as mid-sized companies, on more than 150 industrial sites across five continents.",
    metric: {
      value: "150+",
      label: "Industrial Sites",
    },
  },
  {
    icon: "GitBranch",
    title: "We Build It, You Own It",
    description: "Unlike point software solutions, you own and control the algorithms and software we develop. Full IP ownership to maintain your competitive edge.",
    metric: {
      value: "100%",
      label: "IP Ownership",
    },
  },
  {
    icon: "Clock",
    title: "Full Lifecycle Approach",
    description: "We cover the entire data and AI lifecycle — from scoping, data integration, application development, model design and deployment at scale, to long-term maintenance and 24/7 support for industrial operations.",
    metric: {
      value: "24/7",
      label: "Global Support",
    },
  },
  {
    icon: "Wrench",
    title: "Industry Expertise Meets Data & Software",
    description: "A unique combination of real-world shop floor experience, field-tested industrial data infrastructure, in-depth knowledge of industrial data science, and software development savvy.",
    metric: {
      value: "13+",
      label: "Years Experience",
    },
  },
];

// Testimonials Data - Requirements 7.1, 7.2
export const testimonialsData: TestimonialData[] = [
  {
    quote: "Digitrans understood how important it was for us to own our IP, so from the very beginning, we had 100% control over our solution. Thanks to them, our quality control process is faster, and we've been able to cut our defect rate in half.",
    author: "Technical Director",
    title: "Technical Director",
    company: "Swiss Luxury Goods Manufacturer",
  },
  {
    quote: "With its baggage-flow prediction tool, Digitrans allows us to better anticipate our team's workload and book additional staff for busy days. Big data helps us better manage risk and be more responsive, so that we can provide our passengers with high-quality service.",
    author: "E. Grizon",
    title: "Manager, Baggage Handling",
    company: "Groupe Aéroport de Paris",
  },
  {
    quote: "Thanks to Digitrans and its expertise in Computer Vision we have now set up a new service that makes the inspection of waste water pipes much more reliable and faster.",
    author: "Guillaume Binet",
    title: "Head of Networks at Lyre",
    company: "Suez",
  },
  {
    quote: "The data platform they built for us handles 10x our previous volume with better reliability. Their engineering team is world-class and the 24/7 support gives us peace of mind.",
    author: "CTO",
    title: "CTO",
    company: "Fortune 500 Energy Company",
  },
];

// Final CTA Section Data - Requirements 8.1, 8.2
export const finalCTAData = {
  headline: "Ready to Unlock Digital Innovation at Scale?",
  subheadline: "Digital, Data, and AI have the potential to revolutionise the way companies operate. Find out how you can harness their power to transform your business.",
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
