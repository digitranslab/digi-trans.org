/**
 * Solutions Data File
 * 
 * Contains all content data for industry solution pages including:
 * - Financial Services
 * - Healthcare
 * - Technology
 * 
 * Each solution includes challenges, services, compliance, and case studies.
 * 
 * Requirements: 12.1, 12.2, 12.3
 */

export interface Challenge {
  title: string;
  description: string;
  icon: string;
}

export interface RelevantService {
  title: string;
  description: string;
  href: string;
}

export interface ComplianceItem {
  name: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  results: string[];
  href?: string;
}

export interface SolutionData {
  slug: string;
  hero: {
    badge: string;
    title: string;
    description: string;
  };
  overview: string;
  challenges: Challenge[];
  services: RelevantService[];
  compliance?: ComplianceItem[];
  caseStudies: CaseStudy[];
  ctaText: string;
}

export const solutionsData: Record<string, SolutionData> = {
  "financial-services": {
    slug: "financial-services",
    hero: {
      badge: "Financial Services",
      title: "AI & Data Solutions for Financial Services",
      description: "Secure, compliant AI solutions for banking, insurance, and fintech with deep regulatory expertise.",
    },
    overview: "Financial services organisations face unique challenges in adopting AI and modernising data infrastructure. Stringent regulatory requirements, legacy systems, and security concerns require specialised expertise. Our solutions are designed specifically for the financial sector, combining technical excellence with deep domain knowledge.",
    challenges: [
      {
        title: "Regulatory Compliance",
        description: "Navigate complex regulations including PCI-DSS, SOX, GDPR, and emerging AI governance requirements.",
        icon: "Scale",
      },
      {
        title: "Legacy Modernisation",
        description: "Transform legacy core banking and insurance systems without disrupting critical operations.",
        icon: "Building",
      },
      {
        title: "Fraud Detection",
        description: "Detect and prevent fraud in real-time across millions of transactions using AI.",
        icon: "Shield",
      },
      {
        title: "Customer Experience",
        description: "Deliver personalised, omnichannel experiences while maintaining security and compliance.",
        icon: "Users",
      },
    ],
    services: [
      {
        title: "AI Consulting",
        description: "Strategic AI roadmaps for financial services with regulatory compliance built-in.",
        href: "/services/ai-consulting",
      },
      {
        title: "Data Engineering",
        description: "Modern data platforms for real-time analytics and regulatory reporting.",
        href: "/services/data-engineering",
      },
      {
        title: "Cloud Solutions",
        description: "Secure cloud migration and infrastructure for financial workloads.",
        href: "/services/cloud-solutions",
      },
    ],
    compliance: [
      {
        name: "PCI-DSS",
        description: "Payment Card Industry Data Security Standard compliance for card processing.",
      },
      {
        name: "SOX",
        description: "Sarbanes-Oxley compliance for financial reporting and internal controls.",
      },
      {
        name: "GDPR",
        description: "General Data Protection Regulation compliance for customer data.",
      },
      {
        name: "Basel III/IV",
        description: "Banking regulation compliance for risk management and capital requirements.",
      },
    ],
    caseStudies: [
      {
        title: "Global Bank Fraud Detection",
        description: "Implemented AI-powered fraud detection system processing 10M+ transactions daily.",
        results: ["85% reduction in false positives", "Real-time detection", "$50M annual savings"],
      },
      {
        title: "Insurance Claims Automation",
        description: "Automated claims processing using AI for a major insurance provider.",
        results: ["70% faster processing", "95% accuracy", "40% cost reduction"],
      },
    ],
    ctaText: "Transform Your Financial Services",
  },
  "healthcare": {
    slug: "healthcare",
    hero: {
      badge: "Healthcare",
      title: "AI & Data Solutions for Healthcare",
      description: "HIPAA-compliant data platforms and AI automation for healthcare providers and life sciences.",
    },
    overview: "Healthcare organisations are under pressure to improve patient outcomes, reduce costs, and comply with evolving regulations. Our healthcare solutions leverage AI and modern data platforms to transform clinical operations, research, and patient engagement while maintaining the highest standards of privacy and security.",
    challenges: [
      {
        title: "Data Interoperability",
        description: "Integrate disparate clinical systems and enable seamless data exchange across the care continuum.",
        icon: "Link",
      },
      {
        title: "Clinical AI",
        description: "Deploy AI for clinical decision support, diagnostics, and treatment optimisation.",
        icon: "Brain",
      },
      {
        title: "Patient Privacy",
        description: "Protect sensitive patient data while enabling analytics and research.",
        icon: "Lock",
      },
      {
        title: "Operational Efficiency",
        description: "Optimise clinical workflows, resource allocation, and administrative processes.",
        icon: "Settings",
      },
    ],
    services: [
      {
        title: "AI Consulting",
        description: "Clinical AI strategy and implementation with regulatory compliance.",
        href: "/services/ai-consulting",
      },
      {
        title: "Data Engineering",
        description: "Healthcare data platforms with FHIR support and analytics capabilities.",
        href: "/services/data-engineering",
      },
      {
        title: "Cloud Solutions",
        description: "HIPAA-compliant cloud infrastructure for healthcare workloads.",
        href: "/services/cloud-solutions",
      },
    ],
    compliance: [
      {
        name: "HIPAA",
        description: "Health Insurance Portability and Accountability Act compliance for patient data.",
      },
      {
        name: "HITECH",
        description: "Health Information Technology for Economic and Clinical Health Act compliance.",
      },
      {
        name: "FDA 21 CFR Part 11",
        description: "Electronic records and signatures compliance for life sciences.",
      },
      {
        name: "GDPR",
        description: "General Data Protection Regulation compliance for EU patient data.",
      },
    ],
    caseStudies: [
      {
        title: "Hospital Network Data Platform",
        description: "Built unified data platform for 50+ hospital network enabling real-time analytics.",
        results: ["360° patient view", "30% reduction in readmissions", "HIPAA compliant"],
      },
      {
        title: "Clinical Trial Optimisation",
        description: "AI-powered patient matching and trial optimisation for pharma company.",
        results: ["50% faster recruitment", "25% cost reduction", "Improved diversity"],
      },
    ],
    ctaText: "Transform Your Healthcare Operations",
  },
  "technology": {
    slug: "technology",
    hero: {
      badge: "Technology",
      title: "AI & Data Solutions for Technology Companies",
      description: "Scalable infrastructure and AI capabilities for tech companies and digital-native businesses.",
    },
    overview: "Technology companies need to move fast while building for scale. Our solutions help tech companies accelerate product development, optimise infrastructure costs, and leverage AI to create competitive advantage. From startups to enterprises, we provide the technical expertise to build world-class products.",
    challenges: [
      {
        title: "Scale & Performance",
        description: "Build infrastructure that scales from thousands to millions of users seamlessly.",
        icon: "TrendingUp",
      },
      {
        title: "AI Integration",
        description: "Embed AI capabilities into products to create differentiated user experiences.",
        icon: "Cpu",
      },
      {
        title: "Developer Productivity",
        description: "Optimise development workflows and reduce time-to-market for new features.",
        icon: "Code",
      },
      {
        title: "Cost Optimisation",
        description: "Manage cloud costs effectively while maintaining performance and reliability.",
        icon: "DollarSign",
      },
    ],
    services: [
      {
        title: "Custom Development",
        description: "Build scalable products and platforms with modern architectures.",
        href: "/services/custom-development",
      },
      {
        title: "Data Engineering",
        description: "Data platforms for product analytics, ML, and business intelligence.",
        href: "/services/data-engineering",
      },
      {
        title: "Cloud Solutions",
        description: "Cloud-native infrastructure optimised for performance and cost.",
        href: "/services/cloud-solutions",
      },
    ],
    caseStudies: [
      {
        title: "SaaS Platform Scale-Up",
        description: "Helped B2B SaaS company scale from 1K to 100K customers.",
        results: ["99.99% uptime", "10x traffic handling", "40% cost reduction"],
      },
      {
        title: "AI Product Development",
        description: "Built AI-powered features for consumer tech company.",
        results: ["3x user engagement", "50% faster development", "Patent-pending AI"],
      },
    ],
    ctaText: "Accelerate Your Technology",
  },
};

export default solutionsData;

// Additional solutions for legacy routes
export const additionalSolutionsData: Record<string, SolutionData> = {
  "enterprise-solutions": {
    slug: "enterprise-solutions",
    hero: {
      badge: "Enterprise Solutions",
      title: "Enterprise Software Solutions",
      description: "Streamline operations, enhance collaboration, and drive growth with custom enterprise software built for your specific business challenges.",
    },
    overview: "Our enterprise solutions help organisations transform their operations through integrated, scalable platforms that connect people, processes, and technology. We combine deep industry expertise with cutting-edge technology to deliver solutions tailored to your specific business needs, whether you're looking to streamline operations, enhance decision-making, or transform customer experiences.",
    challenges: [
      {
        title: "System Integration",
        description: "Connect disparate systems and eliminate data silos across your organisation.",
        icon: "Link",
      },
      {
        title: "Process Automation",
        description: "Automate manual workflows to improve efficiency and reduce operational costs.",
        icon: "Zap",
      },
      {
        title: "Data Visibility",
        description: "Gain real-time visibility into operations, inventory, and financials.",
        icon: "Eye",
      },
      {
        title: "Scalability",
        description: "Build systems that scale with your business growth and evolving needs.",
        icon: "TrendingUp",
      },
    ],
    services: [
      {
        title: "Custom Development",
        description: "Bespoke enterprise applications built for your unique requirements.",
        href: "/services/custom-development",
      },
      {
        title: "Data Engineering",
        description: "Modern data platforms for analytics and business intelligence.",
        href: "/services/data-engineering",
      },
      {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure for enterprise workloads.",
        href: "/services/cloud-solutions",
      },
    ],
    caseStudies: [
      {
        title: "Global Manufacturer ERP Transformation",
        description: "Implemented integrated ERP and BI solution connecting 50+ facilities worldwide.",
        results: ["35% reduction in operational costs", "40% improvement in inventory accuracy", "$15M annual savings"],
      },
      {
        title: "Financial Services CX Platform",
        description: "Unified customer experience platform integrating CRM, marketing, and analytics.",
        results: ["42% increase in customer satisfaction", "65% reduction in response time", "22% decrease in churn"],
      },
      {
        title: "Healthcare Workflow Automation",
        description: "Enterprise-wide workflow automation for a major healthcare network.",
        results: ["70% reduction in admin tasks", "45% decrease in documentation errors", "$8M annual savings"],
      },
    ],
    ctaText: "Transform Your Enterprise",
  },
  "digital-transformation": {
    slug: "digital-transformation",
    hero: {
      badge: "Digital Transformation",
      title: "Digital Transformation Services",
      description: "Transform your business with cutting-edge digital solutions and strategies that drive innovation, efficiency, and competitive advantage.",
    },
    overview: "Digital transformation is a fundamental reimagining of how your organisation uses technology, people, and processes to radically improve business performance. Our approach combines strategic vision with practical implementation, addressing technology, data, process, and organisational change to deliver sustainable transformation that creates lasting business value.",
    challenges: [
      {
        title: "Legacy Systems",
        description: "Modernise outdated systems while maintaining business continuity.",
        icon: "RefreshCw",
      },
      {
        title: "Cultural Change",
        description: "Build a digital-first culture that embraces innovation and agility.",
        icon: "Users",
      },
      {
        title: "Customer Expectations",
        description: "Meet evolving customer demands for seamless digital experiences.",
        icon: "Heart",
      },
      {
        title: "Competitive Pressure",
        description: "Stay ahead of digital-native competitors disrupting your industry.",
        icon: "Target",
      },
    ],
    services: [
      {
        title: "AI Consulting",
        description: "Strategic AI roadmaps to accelerate your digital transformation.",
        href: "/services/ai-consulting",
      },
      {
        title: "Cloud Solutions",
        description: "Cloud-native infrastructure enabling agility and innovation.",
        href: "/services/cloud-solutions",
      },
      {
        title: "Custom Development",
        description: "Modern applications that power your digital business.",
        href: "/services/custom-development",
      },
    ],
    caseStudies: [
      {
        title: "Retail Digital Transformation",
        description: "End-to-end digital transformation for a major retail chain.",
        results: ["300% increase in online sales", "50% improvement in customer engagement", "Omnichannel experience"],
      },
      {
        title: "Manufacturing Industry 4.0",
        description: "Smart factory implementation with IoT and AI-powered analytics.",
        results: ["25% increase in productivity", "40% reduction in downtime", "Real-time visibility"],
      },
      {
        title: "Banking Digital Services",
        description: "Digital banking platform transformation for a regional bank.",
        results: ["80% of transactions now digital", "60% cost reduction", "NPS improved by 35 points"],
      },
    ],
    ctaText: "Start Your Digital Journey",
  },
};

// Merge all solutions
export const allSolutionsData: Record<string, SolutionData> = {
  ...solutionsData,
  ...additionalSolutionsData,
};
