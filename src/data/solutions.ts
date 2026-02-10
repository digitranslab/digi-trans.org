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
  "retail": {
    slug: "retail",
    hero: {
      badge: "Retail",
      title: "AI & Data Solutions for Retail",
      description: "Transform customer experiences and optimise operations with intelligent retail solutions powered by AI and real-time analytics.",
    },
    overview: "The retail industry is undergoing a fundamental transformation driven by changing consumer expectations, omnichannel demands, and intense competition. Our AI and data solutions help retailers deliver personalised experiences, optimise inventory and pricing, and build resilient supply chains. From demand forecasting to customer analytics, we enable data-driven retail operations that drive growth and profitability.",
    challenges: [
      {
        title: "Demand Forecasting",
        description: "Predict customer demand accurately across thousands of SKUs, locations, and channels to optimise inventory levels.",
        icon: "TrendingUp",
      },
      {
        title: "Customer Personalisation",
        description: "Deliver personalised recommendations, offers, and experiences across all touchpoints in real-time.",
        icon: "Users",
      },
      {
        title: "Inventory Optimisation",
        description: "Balance stock levels to minimise overstock and stockouts while maximising sales and margins.",
        icon: "Package",
      },
      {
        title: "Supply Chain Visibility",
        description: "Gain end-to-end visibility into supply chain operations and respond quickly to disruptions.",
        icon: "Truck",
      },
    ],
    services: [
      {
        title: "AI Consulting",
        description: "Strategic AI roadmaps for retail transformation and customer experience innovation.",
        href: "/services/ai-consulting",
      },
      {
        title: "Data Engineering",
        description: "Unified customer data platforms and real-time analytics for retail operations.",
        href: "/services/data-engineering",
      },
      {
        title: "Custom Development",
        description: "Bespoke retail applications including recommendation engines and pricing optimisation.",
        href: "/services/custom-development",
      },
    ],
    caseStudies: [
      {
        title: "Omnichannel Personalisation Engine",
        description: "Built AI-powered personalisation platform for a major fashion retailer serving 10M+ customers.",
        results: ["35% increase in conversion rate", "28% higher average order value", "Real-time recommendations"],
      },
      {
        title: "Demand Forecasting System",
        description: "Implemented ML-based demand forecasting across 500+ stores for a grocery chain.",
        results: ["40% reduction in stockouts", "25% decrease in overstock", "£15M annual savings"],
      },
      {
        title: "Dynamic Pricing Platform",
        description: "Deployed AI-driven pricing optimisation for an electronics retailer.",
        results: ["12% margin improvement", "Competitor price monitoring", "Automated repricing"],
      },
    ],
    ctaText: "Transform Your Retail Operations",
  },
  "manufacturing": {
    slug: "manufacturing",
    hero: {
      badge: "Manufacturing",
      title: "AI & Data Solutions for Manufacturing",
      description: "Drive operational excellence with Industry 4.0 solutions including predictive maintenance, quality AI, and smart factory analytics.",
    },
    overview: "Manufacturing organisations face pressure to improve efficiency, reduce costs, and maintain quality while adapting to supply chain volatility and workforce challenges. Our Industry 4.0 solutions leverage AI, IoT, and advanced analytics to transform factory operations. From predictive maintenance to quality control, we help manufacturers build smart, connected, and resilient operations.",
    challenges: [
      {
        title: "Predictive Maintenance",
        description: "Predict equipment failures before they occur to minimise unplanned downtime and maintenance costs.",
        icon: "Settings",
      },
      {
        title: "Quality Control",
        description: "Detect defects in real-time using computer vision and AI to ensure consistent product quality.",
        icon: "CheckCircle",
      },
      {
        title: "Production Optimisation",
        description: "Optimise production schedules, resource allocation, and throughput using AI-driven insights.",
        icon: "Factory",
      },
      {
        title: "Supply Chain Resilience",
        description: "Build agile supply chains with real-time visibility and AI-powered risk management.",
        icon: "Link",
      },
    ],
    services: [
      {
        title: "AI Consulting",
        description: "Industry 4.0 strategy and AI implementation roadmaps for manufacturing excellence.",
        href: "/services/ai-consulting",
      },
      {
        title: "Data Engineering",
        description: "Industrial data platforms connecting OT and IT systems for unified analytics.",
        href: "/services/data-engineering",
      },
      {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure for manufacturing workloads and edge computing.",
        href: "/services/cloud-solutions",
      },
    ],
    caseStudies: [
      {
        title: "Predictive Maintenance Platform",
        description: "Deployed AI-powered predictive maintenance across 200+ production lines for an automotive manufacturer.",
        results: ["45% reduction in unplanned downtime", "30% lower maintenance costs", "ROI in 8 months"],
      },
      {
        title: "Computer Vision Quality Control",
        description: "Implemented real-time defect detection using AI for a semiconductor manufacturer.",
        results: ["99.5% defect detection rate", "60% faster inspection", "£8M annual savings"],
      },
      {
        title: "Digital Twin Implementation",
        description: "Built digital twin platform for a chemical plant enabling simulation and optimisation.",
        results: ["15% increase in throughput", "20% energy reduction", "Real-time process optimisation"],
      },
    ],
    ctaText: "Modernise Your Manufacturing",
  },
  "government": {
    slug: "government",
    hero: {
      badge: "Government & Public Sector",
      title: "AI & Data Solutions for Government",
      description: "Secure, sovereign cloud solutions and AI platforms for public sector digital transformation with full compliance and data sovereignty.",
    },
    overview: "Government organisations face unique challenges in adopting AI and modernising data infrastructure. Stringent security requirements, data sovereignty concerns, and the need for transparency require specialised expertise. Our solutions are designed specifically for the public sector, combining technical excellence with deep understanding of government compliance and citizen service requirements.",
    challenges: [
      {
        title: "Data Sovereignty",
        description: "Ensure citizen data remains within national boundaries with full control over data residency and access.",
        icon: "Shield",
      },
      {
        title: "Legacy Modernisation",
        description: "Transform legacy government systems without disrupting critical public services.",
        icon: "Building",
      },
      {
        title: "Citizen Services",
        description: "Deliver seamless digital services that improve citizen experience and operational efficiency.",
        icon: "Users",
      },
      {
        title: "Security & Compliance",
        description: "Meet stringent government security standards including ISO 27001, SOC 2, and national frameworks.",
        icon: "Lock",
      },
    ],
    services: [
      {
        title: "AI Consulting",
        description: "Strategic AI roadmaps for government with security and compliance built-in.",
        href: "/services/ai-consulting",
      },
      {
        title: "Data Engineering",
        description: "Sovereign data platforms with full audit trails and compliance reporting.",
        href: "/services/data-engineering",
      },
      {
        title: "Cloud Solutions",
        description: "Government-grade cloud infrastructure with data residency guarantees.",
        href: "/services/cloud-solutions",
      },
    ],
    compliance: [
      {
        name: "ISO 27001",
        description: "Information security management system certification.",
      },
      {
        name: "SOC 2 Type II",
        description: "Service organisation control compliance for security and availability.",
      },
      {
        name: "GDPR",
        description: "General Data Protection Regulation compliance for citizen data.",
      },
      {
        name: "National Frameworks",
        description: "Compliance with country-specific government security standards.",
      },
    ],
    caseStudies: [
      {
        title: "National Data Platform",
        description: "Built sovereign data platform for a national statistics agency enabling secure data sharing across departments.",
        results: ["100% data sovereignty", "50+ department integration", "Real-time analytics"],
      },
      {
        title: "Citizen Services Portal",
        description: "Implemented AI-powered citizen services platform reducing processing times by 70%.",
        results: ["70% faster processing", "24/7 availability", "95% citizen satisfaction"],
      },
    ],
    ctaText: "Transform Public Services",
  },
  "financial-services": {
    slug: "financial-services",
    hero: {
      badge: "Financial Services",
      title: "AI & Data Solutions for Financial Services",
      description: "Harness the transformative power of AI to drive innovation, enhance risk management, and deliver personalised customer experiences—while maintaining regulatory compliance and security.",
    },
    overview: "The financial services industry is undergoing a profound AI-driven transformation. With 65% of financial institutions now actively deploying AI (up from 45% last year) and 89% reporting positive revenue impact, the question is no longer whether to adopt AI, but how to scale it strategically. Our solutions help banks, insurers, and fintechs navigate this transformation—from fraud detection that processes billions of transactions to GenAI-powered customer experiences that have doubled adoption rates. We combine deep regulatory expertise with cutting-edge AI capabilities to deliver solutions that are secure, compliant, and built for enterprise scale.",
    challenges: [
      {
        title: "Fraud Detection & Prevention",
        description: "Deploy AI that cuts fraud losses by 20-30%, improves detection accuracy to 99%, and reduces false positives to as low as 3-12%—processing millions of transactions in real-time.",
        icon: "Shield",
      },
      {
        title: "Regulatory Compliance & AI Governance",
        description: "Navigate PCI-DSS, SOX, GDPR, Basel III/IV, and emerging AI governance requirements with explainable AI models and robust audit trails.",
        icon: "Scale",
      },
      {
        title: "Legacy System Modernisation",
        description: "Transform core banking and insurance platforms without disrupting operations—enabling real-time analytics and AI integration with existing infrastructure.",
        icon: "Building",
      },
      {
        title: "Personalised Customer Experience",
        description: "Deliver AI-powered personalisation at scale—from intelligent chatbots to tailored investment recommendations—with customer service AI adoption doubling to 60%.",
        icon: "Users",
      },
      {
        title: "Risk Management & Credit Scoring",
        description: "Leverage ML models for more accurate creditworthiness assessments, reduced loan defaults, and improved profit margins through predictive risk analytics.",
        icon: "TrendingUp",
      },
      {
        title: "Algorithmic Trading & Market Intelligence",
        description: "Automate research and execution with AI that processes vast market data in real-time, identifying patterns and opportunities humans might miss.",
        icon: "LineChart",
      },
    ],
    services: [
      {
        title: "AI Strategy & Consulting",
        description: "Strategic AI roadmaps that bridge the strategy-execution gap—only 8% of firms have achieved enterprise-grade AI deployment. We help you get there.",
        href: "/services/ai-data-consulting",
      },
      {
        title: "Data Platform Engineering",
        description: "Modern data architectures that break down silos, enable real-time analytics, and provide the foundation for AI at scale.",
        href: "/services/big-data-architecture",
      },
      {
        title: "Agentic AI Solutions",
        description: "Deploy AI agents for autonomous fraud monitoring, compliance automation, and intelligent customer service that operates 24/7.",
        href: "/services/agentic-ai-data",
      },
    ],
    compliance: [
      {
        name: "PCI-DSS",
        description: "Payment Card Industry Data Security Standard compliance for secure card processing and transaction handling.",
      },
      {
        name: "SOX",
        description: "Sarbanes-Oxley compliance for financial reporting, internal controls, and audit requirements.",
      },
      {
        name: "GDPR & Data Privacy",
        description: "General Data Protection Regulation compliance with robust data anonymisation and customer consent frameworks.",
      },
      {
        name: "Basel III/IV",
        description: "Banking regulation compliance for risk management, capital requirements, and liquidity standards.",
      },
      {
        name: "AI Governance",
        description: "Emerging AI regulations with explainable models, bias mitigation, and transparent decision-making processes.",
      },
      {
        name: "AML/KYC",
        description: "Anti-Money Laundering and Know Your Customer compliance with AI-powered transaction monitoring.",
      },
    ],
    caseStudies: [
      {
        title: "Real-Time Fraud Detection Platform",
        description: "Deployed AI-powered fraud detection for a global bank processing 125M+ transactions monthly, using ML models that continuously learn from new threat patterns.",
        results: ["85% reduction in false positives", "99.2% detection accuracy", "£45M annual fraud prevention", "Sub-100ms response time"],
      },
      {
        title: "Intelligent Document Processing",
        description: "Automated contract review and loan document processing using GenAI, reducing manual review time from hours to seconds.",
        results: ["360,000 hours saved annually", "95% accuracy on complex documents", "70% faster loan approvals", "40% cost reduction"],
      },
      {
        title: "AI-Powered Wealth Management",
        description: "Built personalised investment recommendation engine for a wealth management firm, tailoring portfolios to individual risk profiles and goals.",
        results: ["35% increase in AUM", "28% higher client engagement", "Personalised advice at scale", "NPS improved by 25 points"],
      },
      {
        title: "Insurance Claims Automation",
        description: "Implemented AI-driven claims processing for a Nordic insurer, automating document intake, assessment, and routing.",
        results: ["70% faster claims processing", "95% straight-through processing", "Agent focus on complex cases", "Customer satisfaction up 40%"],
      },
    ],
    ctaText: "Transform Your Financial Services with AI",
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
