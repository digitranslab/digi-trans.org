/**
 * Services Data File
 * 
 * Contains all content data for service pages including:
 * - AI Consulting
 * - Data Engineering
 * - Cloud Solutions
 * - Custom Development
 * 
 * Each service includes hero, deliverables, process, and related content.
 * 
 * Requirements: 11.1, 11.2
 */

export interface ServiceDeliverable {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface RelatedContent {
  type: "product" | "solution" | "case-study";
  title: string;
  href: string;
}

export interface ServiceData {
  slug: string;
  hero: {
    badge: string;
    title: string;
    description: string;
  };
  overview: string;
  deliverables: ServiceDeliverable[];
  process: ProcessStep[];
  relatedContent: RelatedContent[];
  ctaText: string;
}

export const servicesData: Record<string, ServiceData> = {
  "ai-consulting": {
    slug: "ai-consulting",
    hero: {
      badge: "AI Consulting",
      title: "Strategic AI Consulting",
      description: "Transform your business with AI strategy, implementation roadmaps, and expert guidance from seasoned AI practitioners.",
    },
    overview: "Our AI consulting services help organisations identify high-impact AI opportunities, develop implementation strategies, and build the capabilities needed to succeed in the AI era. We combine deep technical expertise with business acumen to deliver practical, actionable recommendations.",
    deliverables: [
      {
        title: "AI Strategy & Roadmap",
        description: "Comprehensive AI strategy aligned with your business objectives, including prioritised use cases and implementation timeline.",
        icon: "Map",
      },
      {
        title: "Use Case Assessment",
        description: "Detailed analysis of AI opportunities across your organisation with ROI projections and feasibility assessments.",
        icon: "Target",
      },
      {
        title: "Technology Selection",
        description: "Expert guidance on AI platforms, tools, and vendors tailored to your specific requirements and constraints.",
        icon: "Cpu",
      },
      {
        title: "Capability Building",
        description: "Training programmes and knowledge transfer to build internal AI capabilities and reduce dependency on external resources.",
        icon: "GraduationCap",
      },
      {
        title: "Governance Framework",
        description: "AI governance policies, ethical guidelines, and risk management frameworks for responsible AI deployment.",
        icon: "Shield",
      },
      {
        title: "Proof of Concept",
        description: "Rapid prototyping and validation of high-priority AI use cases to demonstrate value and de-risk implementation.",
        icon: "Beaker",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Deep dive into your business, technology landscape, and AI maturity to understand opportunities and constraints.",
      },
      {
        step: 2,
        title: "Assessment",
        description: "Evaluate AI use cases, prioritise based on impact and feasibility, and identify quick wins.",
      },
      {
        step: 3,
        title: "Strategy",
        description: "Develop comprehensive AI strategy with clear roadmap, resource requirements, and success metrics.",
      },
      {
        step: 4,
        title: "Validation",
        description: "Build proof of concepts for priority use cases to validate assumptions and demonstrate value.",
      },
      {
        step: 5,
        title: "Implementation",
        description: "Support implementation with technical guidance, vendor management, and change management.",
      },
    ],
    relatedContent: [
      { type: "product", title: "Allama - AI Security Automation", href: "/products/allama" },
      { type: "solution", title: "Financial Services AI", href: "/solutions/financial-services" },
      { type: "solution", title: "Healthcare AI", href: "/solutions/healthcare" },
    ],
    ctaText: "Start Your AI Journey",
  },
  "data-engineering": {
    slug: "data-engineering",
    hero: {
      badge: "Data Engineering",
      title: "Modern Data Engineering",
      description: "Build scalable, reliable data platforms that turn raw data into actionable insights and competitive advantage.",
    },
    overview: "Our data engineering services help organisations design, build, and operate modern data platforms. From data lakes to real-time streaming, we deliver solutions that scale with your business and enable data-driven decision making.",
    deliverables: [
      {
        title: "Data Platform Architecture",
        description: "Modern data platform design using best-in-class technologies and cloud-native patterns.",
        icon: "Database",
      },
      {
        title: "Data Pipeline Development",
        description: "Robust ETL/ELT pipelines for batch and real-time data processing with built-in quality controls.",
        icon: "GitBranch",
      },
      {
        title: "Data Lake Implementation",
        description: "Scalable data lake solutions on AWS, Azure, or GCP with proper governance and security.",
        icon: "Layers",
      },
      {
        title: "Real-Time Analytics",
        description: "Streaming data architectures using Kafka, Spark, and modern event-driven patterns.",
        icon: "Zap",
      },
      {
        title: "Data Quality & Governance",
        description: "Data quality frameworks, lineage tracking, and governance policies for trusted data.",
        icon: "CheckCircle",
      },
      {
        title: "DataOps Implementation",
        description: "CI/CD for data pipelines, automated testing, and monitoring for reliable data operations.",
        icon: "Settings",
      },
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description: "Evaluate current data landscape, identify gaps, and define target state architecture.",
      },
      {
        step: 2,
        title: "Design",
        description: "Design scalable data platform architecture aligned with business requirements.",
      },
      {
        step: 3,
        title: "Build",
        description: "Implement data platform components with focus on reliability and performance.",
      },
      {
        step: 4,
        title: "Migrate",
        description: "Migrate existing data and workloads with minimal disruption to operations.",
      },
      {
        step: 5,
        title: "Operate",
        description: "Ongoing support, optimisation, and capability building for self-sufficiency.",
      },
    ],
    relatedContent: [
      { type: "solution", title: "Technology Solutions", href: "/solutions/technology" },
      { type: "solution", title: "Financial Services", href: "/solutions/financial-services" },
    ],
    ctaText: "Build Your Data Platform",
  },
  "cloud-solutions": {
    slug: "cloud-solutions",
    hero: {
      badge: "Cloud Solutions",
      title: "Enterprise Cloud Solutions",
      description: "Accelerate your cloud journey with expert architecture, migration, and optimisation services.",
    },
    overview: "Our cloud solutions help organisations leverage the full potential of cloud computing. From strategy and migration to optimisation and security, we deliver end-to-end cloud services that reduce costs, improve agility, and enable innovation.",
    deliverables: [
      {
        title: "Cloud Strategy",
        description: "Comprehensive cloud strategy including workload assessment, TCO analysis, and migration roadmap.",
        icon: "Cloud",
      },
      {
        title: "Cloud Architecture",
        description: "Well-architected cloud solutions following AWS, Azure, or GCP best practices.",
        icon: "Building2",
      },
      {
        title: "Cloud Migration",
        description: "End-to-end migration services including assessment, planning, execution, and validation.",
        icon: "ArrowRightLeft",
      },
      {
        title: "Cloud Security",
        description: "Security architecture, compliance automation, and continuous security monitoring.",
        icon: "Shield",
      },
      {
        title: "Cost Optimisation",
        description: "FinOps practices, reserved capacity planning, and continuous cost optimisation.",
        icon: "TrendingDown",
      },
      {
        title: "Cloud Operations",
        description: "24/7 managed services, SRE practices, and operational excellence frameworks.",
        icon: "Settings",
      },
    ],
    process: [
      {
        step: 1,
        title: "Assess",
        description: "Evaluate current infrastructure, applications, and readiness for cloud migration.",
      },
      {
        step: 2,
        title: "Plan",
        description: "Develop detailed migration plan with wave planning and risk mitigation strategies.",
      },
      {
        step: 3,
        title: "Migrate",
        description: "Execute migration with minimal downtime using proven methodologies and automation.",
      },
      {
        step: 4,
        title: "Optimise",
        description: "Optimise cloud resources for performance, cost, and security post-migration.",
      },
      {
        step: 5,
        title: "Operate",
        description: "Establish cloud operations with monitoring, automation, and continuous improvement.",
      },
    ],
    relatedContent: [
      { type: "product", title: "Allama - Security Automation", href: "/products/allama" },
      { type: "solution", title: "Healthcare Cloud", href: "/solutions/healthcare" },
    ],
    ctaText: "Start Your Cloud Journey",
  },
  "custom-development": {
    slug: "custom-development",
    hero: {
      badge: "Custom Development",
      title: "Custom Software Development",
      description: "Build bespoke software solutions that solve your unique business challenges and drive competitive advantage.",
    },
    overview: "Our custom development services deliver tailored software solutions that address your specific business needs. From enterprise applications to AI-powered products, we combine technical excellence with agile delivery to build software that matters.",
    deliverables: [
      {
        title: "Enterprise Applications",
        description: "Custom enterprise software built for scale, security, and integration with existing systems.",
        icon: "Building",
      },
      {
        title: "AI/ML Products",
        description: "AI-powered applications and products leveraging latest machine learning technologies.",
        icon: "Brain",
      },
      {
        title: "API Development",
        description: "RESTful and GraphQL APIs designed for performance, security, and developer experience.",
        icon: "Plug",
      },
      {
        title: "Web Applications",
        description: "Modern web applications using React, Next.js, and cloud-native architectures.",
        icon: "Globe",
      },
      {
        title: "Mobile Applications",
        description: "Cross-platform mobile apps using React Native or native iOS/Android development.",
        icon: "Smartphone",
      },
      {
        title: "System Integration",
        description: "Integration solutions connecting disparate systems and enabling data flow.",
        icon: "Link",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Understand business requirements, user needs, and technical constraints.",
      },
      {
        step: 2,
        title: "Design",
        description: "Create solution architecture, UX designs, and technical specifications.",
      },
      {
        step: 3,
        title: "Develop",
        description: "Agile development with regular demos, feedback cycles, and quality assurance.",
      },
      {
        step: 4,
        title: "Deploy",
        description: "Production deployment with CI/CD, monitoring, and operational readiness.",
      },
      {
        step: 5,
        title: "Support",
        description: "Ongoing maintenance, enhancements, and technical support.",
      },
    ],
    relatedContent: [
      { type: "solution", title: "Technology Solutions", href: "/solutions/technology" },
      { type: "product", title: "Allama Platform", href: "/products/allama" },
    ],
    ctaText: "Start Your Project",
  },
};

export default servicesData;
