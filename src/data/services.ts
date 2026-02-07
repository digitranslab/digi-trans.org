/**
 * Services Data File - Enhanced
 * 
 * Rich content data for service pages including:
 * - AI Consulting
 * - Data Engineering
 * - Cloud Solutions
 * - Custom Development
 * 
 * Each service includes hero, value props, deliverables, process,
 * technologies, case studies, FAQs, and related content.
 */

export interface ValueProp {
  icon: string;
  metric: string;
  title: string;
  description: string;
}

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

export interface Technology {
  category: string;
  items: string[];
}

export interface CaseStudy {
  title: string;
  industry: string;
  description: string;
  metrics: { value: string; label: string }[];
}

export interface FAQ {
  question: string;
  answer: string;
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
  valueProps?: ValueProp[];
  valuePropsTitle?: string;
  valuePropsDescription?: string;
  deliverables: ServiceDeliverable[];
  process: ProcessStep[];
  technologies?: Technology[];
  caseStudies?: CaseStudy[];
  faqs?: FAQ[];
  relatedContent: RelatedContent[];
  ctaText: string;
}

export const servicesData: Record<string, ServiceData> = {
  "ai-consulting": {
    slug: "ai-consulting",
    hero: {
      badge: "AI Consulting",
      title: "Strategic AI Consulting",
      description: "Transform your business with AI strategy, implementation roadmaps, and expert guidance from seasoned AI practitioners who've delivered results for Fortune 500 companies.",
    },
    overview: "Our AI consulting services help organisations identify high-impact AI opportunities, develop implementation strategies, and build the capabilities needed to succeed in the AI era. We combine deep technical expertise with business acumen to deliver practical, actionable recommendations that drive measurable ROI.",
    valueProps: [
      {
        icon: "TrendingUp",
        metric: "3-5x",
        title: "ROI Improvement",
        description: "Average return on AI investments",
      },
      {
        icon: "Clock",
        metric: "60%",
        title: "Faster Deployment",
        description: "Reduced time to production",
      },
      {
        icon: "Target",
        metric: "95%",
        title: "Success Rate",
        description: "Projects delivered on target",
      },
      {
        icon: "Users",
        metric: "50+",
        title: "AI Experts",
        description: "Dedicated specialists",
      },
    ],
    valuePropsTitle: "Why Our AI Consulting",
    valuePropsDescription: "Proven expertise that delivers measurable business outcomes.",
    deliverables: [
      {
        title: "AI Strategy & Roadmap",
        description: "Comprehensive AI strategy aligned with your business objectives, including prioritised use cases, resource planning, and 12-24 month implementation timeline.",
        icon: "Map",
      },
      {
        title: "Use Case Assessment",
        description: "Detailed analysis of 20+ AI opportunities across your organisation with ROI projections, feasibility scores, and implementation complexity ratings.",
        icon: "Target",
      },
      {
        title: "Technology Selection",
        description: "Expert guidance on AI platforms, LLMs, MLOps tools, and vendors tailored to your specific requirements, budget, and technical constraints.",
        icon: "Cpu",
      },
      {
        title: "Capability Building",
        description: "Customised training programmes, workshops, and knowledge transfer to build internal AI capabilities and reduce long-term dependency.",
        icon: "GraduationCap",
      },
      {
        title: "Governance Framework",
        description: "AI governance policies, ethical guidelines, bias detection frameworks, and risk management protocols for responsible AI deployment.",
        icon: "Shield",
      },
      {
        title: "Proof of Concept",
        description: "Rapid 4-6 week prototyping and validation of high-priority AI use cases to demonstrate value and de-risk full implementation.",
        icon: "Beaker",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Deep dive into business goals, tech landscape, and AI maturity.",
      },
      {
        step: 2,
        title: "Assessment",
        description: "Evaluate use cases, prioritise by impact and feasibility.",
      },
      {
        step: 3,
        title: "Strategy",
        description: "Develop roadmap with clear milestones and success metrics.",
      },
      {
        step: 4,
        title: "Validation",
        description: "Build POCs for priority use cases to prove value.",
      },
      {
        step: 5,
        title: "Implementation",
        description: "Guide execution with technical and change management support.",
      },
    ],
    technologies: [
      {
        category: "LLM Platforms",
        items: ["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "Azure OpenAI"],
      },
      {
        category: "ML Frameworks",
        items: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain"],
      },
      {
        category: "MLOps",
        items: ["MLflow", "Kubeflow", "Weights & Biases", "SageMaker"],
      },
      {
        category: "Vector DBs",
        items: ["Pinecone", "Weaviate", "Chroma", "Milvus"],
      },
    ],
    caseStudies: [
      {
        title: "Global Bank AI Transformation",
        industry: "Financial Services",
        description: "Developed AI strategy and implemented fraud detection system reducing losses by $50M annually.",
        metrics: [
          { value: "$50M", label: "Savings" },
          { value: "85%", label: "Accuracy" },
          { value: "6 mo", label: "Timeline" },
        ],
      },
      {
        title: "Healthcare AI Diagnostics",
        industry: "Healthcare",
        description: "Built AI-powered diagnostic assistant improving early detection rates by 40%.",
        metrics: [
          { value: "40%", label: "Better Detection" },
          { value: "60%", label: "Time Saved" },
          { value: "99.2%", label: "Accuracy" },
        ],
      },
    ],
    faqs: [
      {
        question: "How long does an AI strategy engagement typically take?",
        answer: "A comprehensive AI strategy engagement typically takes 6-8 weeks, including discovery, assessment, and roadmap development. POC development adds an additional 4-6 weeks.",
      },
      {
        question: "Do you work with specific AI platforms or are you vendor-agnostic?",
        answer: "We're vendor-agnostic and recommend solutions based on your specific needs. We have deep expertise across all major platforms including OpenAI, Anthropic, Google, and open-source alternatives.",
      },
      {
        question: "What industries do you have experience in?",
        answer: "We've delivered AI solutions across financial services, healthcare, retail, manufacturing, and technology. Our team includes domain experts in each of these sectors.",
      },
      {
        question: "How do you ensure AI implementations are ethical and compliant?",
        answer: "We include governance frameworks, bias detection, and compliance checks as standard deliverables. We follow responsible AI principles and help you meet regulatory requirements like GDPR and industry-specific regulations.",
      },
    ],
    relatedContent: [
      { type: "product", title: "Allama - AI Security Automation", href: "/products/allama" },
      { type: "product", title: "DBLOCK - AI Application Platform", href: "/products/dblock" },
      { type: "solution", title: "Financial Services AI", href: "/solutions/financial-services" },
    ],
    ctaText: "Start Your AI Journey",
  },
  "data-engineering": {
    slug: "data-engineering",
    hero: {
      badge: "Data Engineering",
      title: "Modern Data Engineering",
      description: "Build scalable, reliable data platforms that turn raw data into actionable insights and competitive advantage. From data lakes to real-time streaming.",
    },
    overview: "Our data engineering services help organisations design, build, and operate modern data platforms. We deliver solutions that scale with your business, enable data-driven decision making, and provide the foundation for AI and analytics initiatives.",
    valueProps: [
      {
        icon: "Zap",
        metric: "10x",
        title: "Faster Queries",
        description: "Optimised data architecture",
      },
      {
        icon: "Database",
        metric: "PB+",
        title: "Scale",
        description: "Petabyte-scale platforms",
      },
      {
        icon: "TrendingDown",
        metric: "40%",
        title: "Cost Reduction",
        description: "Optimised infrastructure",
      },
      {
        icon: "CheckCircle",
        metric: "99.9%",
        title: "Data Quality",
        description: "Automated validation",
      },
    ],
    valuePropsTitle: "Data Platform Excellence",
    valuePropsDescription: "Enterprise-grade data infrastructure that scales.",
    deliverables: [
      {
        title: "Data Platform Architecture",
        description: "Modern data platform design using lakehouse architecture, cloud-native patterns, and best-in-class technologies for your specific needs.",
        icon: "Database",
      },
      {
        title: "Data Pipeline Development",
        description: "Robust ETL/ELT pipelines for batch and real-time processing with built-in quality controls, error handling, and monitoring.",
        icon: "GitBranch",
      },
      {
        title: "Data Lake Implementation",
        description: "Scalable data lake solutions on AWS, Azure, or GCP with proper governance, security, and cost optimisation.",
        icon: "Layers",
      },
      {
        title: "Real-Time Analytics",
        description: "Streaming data architectures using Kafka, Spark Streaming, and Flink for sub-second analytics and event processing.",
        icon: "Zap",
      },
      {
        title: "Data Quality & Governance",
        description: "Automated data quality frameworks, lineage tracking, cataloguing, and governance policies for trusted, compliant data.",
        icon: "CheckCircle",
      },
      {
        title: "DataOps Implementation",
        description: "CI/CD for data pipelines, automated testing, infrastructure as code, and monitoring for reliable data operations.",
        icon: "Settings",
      },
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description: "Evaluate current data landscape and define target state.",
      },
      {
        step: 2,
        title: "Design",
        description: "Architect scalable platform aligned with requirements.",
      },
      {
        step: 3,
        title: "Build",
        description: "Implement with focus on reliability and performance.",
      },
      {
        step: 4,
        title: "Migrate",
        description: "Move data and workloads with minimal disruption.",
      },
      {
        step: 5,
        title: "Operate",
        description: "Ongoing support and capability building.",
      },
    ],
    technologies: [
      {
        category: "Processing",
        items: ["Apache Spark", "Databricks", "dbt", "Airflow"],
      },
      {
        category: "Streaming",
        items: ["Apache Kafka", "Flink", "Kinesis", "Pub/Sub"],
      },
      {
        category: "Storage",
        items: ["Delta Lake", "Iceberg", "Snowflake", "BigQuery"],
      },
      {
        category: "Orchestration",
        items: ["Airflow", "Dagster", "Prefect", "Step Functions"],
      },
    ],
    caseStudies: [
      {
        title: "Retail Data Platform",
        industry: "Retail",
        description: "Built unified data platform processing 10TB daily, enabling real-time inventory and personalisation.",
        metrics: [
          { value: "10TB", label: "Daily Volume" },
          { value: "< 1s", label: "Latency" },
          { value: "50%", label: "Cost Savings" },
        ],
      },
      {
        title: "Financial Data Lake",
        industry: "Financial Services",
        description: "Implemented compliant data lake with real-time fraud detection and regulatory reporting.",
        metrics: [
          { value: "5PB", label: "Data Managed" },
          { value: "100%", label: "Compliance" },
          { value: "3x", label: "Faster Reports" },
        ],
      },
    ],
    faqs: [
      {
        question: "What cloud platforms do you support?",
        answer: "We have deep expertise across AWS, Azure, and GCP. We can also work with hybrid and multi-cloud architectures based on your requirements.",
      },
      {
        question: "How do you handle data migration from legacy systems?",
        answer: "We use a phased migration approach with parallel running, data validation, and rollback capabilities. This minimises risk and ensures business continuity.",
      },
      {
        question: "What's your approach to data quality?",
        answer: "We implement automated data quality checks at every stage of the pipeline, including schema validation, business rules, anomaly detection, and data profiling.",
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
      description: "Accelerate your cloud journey with expert architecture, migration, and optimisation services. AWS, Azure, and GCP specialists.",
    },
    overview: "Our cloud solutions help organisations leverage the full potential of cloud computing. From strategy and migration to optimisation and security, we deliver end-to-end cloud services that reduce costs, improve agility, and enable innovation at scale.",
    valueProps: [
      {
        icon: "TrendingDown",
        metric: "35%",
        title: "Cost Reduction",
        description: "Average infrastructure savings",
      },
      {
        icon: "Zap",
        metric: "5x",
        title: "Faster Deployment",
        description: "Accelerated time to market",
      },
      {
        icon: "Shield",
        metric: "100%",
        title: "Compliance",
        description: "Security & regulatory",
      },
      {
        icon: "Clock",
        metric: "99.99%",
        title: "Uptime",
        description: "High availability SLA",
      },
    ],
    valuePropsTitle: "Cloud Excellence",
    valuePropsDescription: "Enterprise-grade cloud infrastructure and operations.",
    deliverables: [
      {
        title: "Cloud Strategy",
        description: "Comprehensive cloud strategy including workload assessment, TCO analysis, vendor selection, and multi-year migration roadmap.",
        icon: "Cloud",
      },
      {
        title: "Cloud Architecture",
        description: "Well-architected cloud solutions following AWS, Azure, or GCP best practices with security, reliability, and cost optimisation built in.",
        icon: "Building2",
      },
      {
        title: "Cloud Migration",
        description: "End-to-end migration services including assessment, planning, execution, validation, and cutover with minimal business disruption.",
        icon: "ArrowRightLeft",
      },
      {
        title: "Cloud Security",
        description: "Security architecture, identity management, compliance automation, and continuous security monitoring with SOC 2 and ISO 27001 alignment.",
        icon: "Shield",
      },
      {
        title: "Cost Optimisation",
        description: "FinOps practices, reserved capacity planning, right-sizing, and continuous cost optimisation delivering 30-50% savings.",
        icon: "TrendingDown",
      },
      {
        title: "Cloud Operations",
        description: "24/7 managed services, SRE practices, incident management, and operational excellence frameworks for reliable operations.",
        icon: "Settings",
      },
    ],
    process: [
      {
        step: 1,
        title: "Assess",
        description: "Evaluate infrastructure and cloud readiness.",
      },
      {
        step: 2,
        title: "Plan",
        description: "Develop migration plan with risk mitigation.",
      },
      {
        step: 3,
        title: "Migrate",
        description: "Execute with minimal downtime.",
      },
      {
        step: 4,
        title: "Optimise",
        description: "Tune for performance and cost.",
      },
      {
        step: 5,
        title: "Operate",
        description: "Establish cloud operations excellence.",
      },
    ],
    technologies: [
      {
        category: "AWS",
        items: ["EC2/EKS", "Lambda", "RDS/Aurora", "S3/Glacier"],
      },
      {
        category: "Azure",
        items: ["AKS", "Functions", "Cosmos DB", "Blob Storage"],
      },
      {
        category: "GCP",
        items: ["GKE", "Cloud Run", "BigQuery", "Cloud Storage"],
      },
      {
        category: "DevOps",
        items: ["Terraform", "Kubernetes", "ArgoCD", "Prometheus"],
      },
    ],
    caseStudies: [
      {
        title: "Healthcare Cloud Migration",
        industry: "Healthcare",
        description: "Migrated 500+ applications to AWS with HIPAA compliance, reducing costs by 40%.",
        metrics: [
          { value: "500+", label: "Apps Migrated" },
          { value: "40%", label: "Cost Savings" },
          { value: "0", label: "Downtime" },
        ],
      },
      {
        title: "Financial Services Modernisation",
        industry: "Financial Services",
        description: "Modernised legacy infrastructure to cloud-native architecture on Azure.",
        metrics: [
          { value: "10x", label: "Faster Deploy" },
          { value: "99.99%", label: "Uptime" },
          { value: "60%", label: "Efficiency" },
        ],
      },
    ],
    faqs: [
      {
        question: "Which cloud provider do you recommend?",
        answer: "We're cloud-agnostic and recommend based on your specific needs. AWS is great for breadth of services, Azure for Microsoft integration, and GCP for data/AI workloads.",
      },
      {
        question: "How long does a typical cloud migration take?",
        answer: "Timeline depends on complexity. Simple lift-and-shift can be 3-6 months, while full modernisation may take 12-18 months. We use a phased approach to deliver value early.",
      },
      {
        question: "How do you ensure security during migration?",
        answer: "Security is built into every phase. We implement zero-trust architecture, encryption, IAM best practices, and continuous compliance monitoring from day one.",
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
      description: "Build bespoke software solutions that solve your unique business challenges. From enterprise applications to AI-powered products.",
    },
    overview: "Our custom development services deliver tailored software solutions that address your specific business needs. We combine technical excellence with agile delivery to build software that drives competitive advantage and scales with your growth.",
    valueProps: [
      {
        icon: "Rocket",
        metric: "2x",
        title: "Faster Delivery",
        description: "Agile development velocity",
      },
      {
        icon: "Code",
        metric: "100%",
        title: "Code Quality",
        description: "Automated testing coverage",
      },
      {
        icon: "Users",
        metric: "40+",
        title: "Engineers",
        description: "Full-stack specialists",
      },
      {
        icon: "Award",
        metric: "150+",
        title: "Projects",
        description: "Successfully delivered",
      },
    ],
    valuePropsTitle: "Development Excellence",
    valuePropsDescription: "World-class engineering that delivers results.",
    deliverables: [
      {
        title: "Enterprise Applications",
        description: "Custom enterprise software built for scale, security, and seamless integration with your existing systems and workflows.",
        icon: "Building",
      },
      {
        title: "AI/ML Products",
        description: "AI-powered applications leveraging LLMs, computer vision, NLP, and predictive analytics for intelligent automation.",
        icon: "Brain",
      },
      {
        title: "API Development",
        description: "RESTful and GraphQL APIs designed for performance, security, and exceptional developer experience with comprehensive documentation.",
        icon: "Plug",
      },
      {
        title: "Web Applications",
        description: "Modern web applications using React, Next.js, and cloud-native architectures with responsive design and accessibility.",
        icon: "Globe",
      },
      {
        title: "Mobile Applications",
        description: "Cross-platform mobile apps using React Native or native iOS/Android development with offline support and push notifications.",
        icon: "Smartphone",
      },
      {
        title: "System Integration",
        description: "Integration solutions connecting disparate systems, enabling data flow, and automating cross-platform workflows.",
        icon: "Link",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Understand requirements, users, and constraints.",
      },
      {
        step: 2,
        title: "Design",
        description: "Create architecture, UX, and technical specs.",
      },
      {
        step: 3,
        title: "Develop",
        description: "Agile sprints with regular demos and feedback.",
      },
      {
        step: 4,
        title: "Deploy",
        description: "Production deployment with CI/CD and monitoring.",
      },
      {
        step: 5,
        title: "Support",
        description: "Ongoing maintenance and enhancements.",
      },
    ],
    technologies: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Python", "Go", "Java"],
      },
      {
        category: "Mobile",
        items: ["React Native", "Swift", "Kotlin", "Flutter"],
      },
      {
        category: "Infrastructure",
        items: ["AWS", "Docker", "Kubernetes", "Terraform"],
      },
    ],
    caseStudies: [
      {
        title: "SaaS Platform Development",
        industry: "Technology",
        description: "Built multi-tenant SaaS platform from scratch, now serving 10,000+ users.",
        metrics: [
          { value: "10K+", label: "Users" },
          { value: "12 wks", label: "MVP" },
          { value: "99.9%", label: "Uptime" },
        ],
      },
      {
        title: "AI Document Processing",
        industry: "Legal",
        description: "Developed AI-powered document analysis platform reducing review time by 80%.",
        metrics: [
          { value: "80%", label: "Time Saved" },
          { value: "95%", label: "Accuracy" },
          { value: "1M+", label: "Docs Processed" },
        ],
      },
    ],
    faqs: [
      {
        question: "What development methodology do you use?",
        answer: "We use Agile/Scrum with 2-week sprints, daily standups, and regular demos. This ensures transparency, flexibility, and continuous delivery of value.",
      },
      {
        question: "How do you ensure code quality?",
        answer: "We enforce code reviews, automated testing (unit, integration, e2e), CI/CD pipelines, and follow industry best practices. We target 80%+ test coverage.",
      },
      {
        question: "Can you work with our existing team?",
        answer: "Absolutely. We can augment your team, work as a dedicated squad, or take full ownership. We adapt to your preferred collaboration model.",
      },
      {
        question: "What happens after the project is complete?",
        answer: "We offer ongoing support and maintenance packages. We also provide knowledge transfer and documentation to enable your team to take over if preferred.",
      },
    ],
    relatedContent: [
      { type: "solution", title: "Technology Solutions", href: "/solutions/technology" },
      { type: "product", title: "DBLOCK Platform", href: "/products/dblock" },
    ],
    ctaText: "Start Your Project",
  },
};

export default servicesData;


// Additional services for legacy routes
export const additionalServicesData: Record<string, ServiceData> = {
  "big-data-analytics": {
    slug: "big-data-analytics",
    hero: {
      badge: "Big Data Analytics",
      title: "Big Data & Analytics",
      description: "Transform raw data into actionable insights with enterprise-grade analytics platforms, real-time processing, and AI-powered intelligence.",
    },
    overview: "Our big data analytics services help organisations harness the power of their data. From building scalable data platforms to implementing advanced analytics and machine learning, we deliver solutions that drive data-driven decision making across your organisation.",
    valueProps: [
      {
        icon: "Database",
        metric: "PB+",
        title: "Data Scale",
        description: "Petabyte-scale processing",
      },
      {
        icon: "Zap",
        metric: "Real-time",
        title: "Processing",
        description: "Sub-second analytics",
      },
      {
        icon: "Brain",
        metric: "AI-Powered",
        title: "Insights",
        description: "ML-driven analytics",
      },
      {
        icon: "TrendingUp",
        metric: "10x",
        title: "ROI",
        description: "Average data ROI",
      },
    ],
    deliverables: [
      {
        title: "Data Platform Architecture",
        description: "Modern data platform design using lakehouse architecture, distributed processing, and cloud-native technologies.",
        icon: "Database",
      },
      {
        title: "Real-Time Analytics",
        description: "Streaming analytics pipelines using Kafka, Spark Streaming, and Flink for instant insights.",
        icon: "Zap",
      },
      {
        title: "Analytics Dashboards",
        description: "Interactive dashboards and visualisations using Tableau, Power BI, or custom solutions.",
        icon: "BarChart",
      },
      {
        title: "Machine Learning Models",
        description: "Predictive analytics, forecasting, and pattern recognition using advanced ML algorithms.",
        icon: "Brain",
      },
      {
        title: "Data Governance",
        description: "Data quality, lineage, cataloguing, and compliance frameworks for trusted data.",
        icon: "Shield",
      },
      {
        title: "LLM-Powered Analytics",
        description: "Natural language querying and AI-powered insights using RAG and large language models.",
        icon: "Bot",
      },
    ],
    process: [
      { step: 1, title: "Assess", description: "Evaluate data landscape and requirements." },
      { step: 2, title: "Design", description: "Architect scalable analytics platform." },
      { step: 3, title: "Build", description: "Implement pipelines and analytics." },
      { step: 4, title: "Deploy", description: "Launch with monitoring and validation." },
      { step: 5, title: "Optimise", description: "Continuous improvement and scaling." },
    ],
    technologies: [
      { category: "Processing", items: ["Apache Spark", "Databricks", "Flink", "Kafka"] },
      { category: "Storage", items: ["Snowflake", "BigQuery", "Redshift", "Delta Lake"] },
      { category: "Visualisation", items: ["Tableau", "Power BI", "Looker", "Grafana"] },
      { category: "ML/AI", items: ["TensorFlow", "PyTorch", "MLflow", "SageMaker"] },
    ],
    caseStudies: [
      {
        title: "Retail Analytics Platform",
        industry: "Retail",
        description: "Built real-time analytics platform processing 50M events daily for personalisation.",
        metrics: [
          { value: "50M", label: "Events/Day" },
          { value: "30%", label: "Revenue Lift" },
          { value: "<100ms", label: "Latency" },
        ],
      },
    ],
    faqs: [
      {
        question: "What scale of data can you handle?",
        answer: "We've built platforms processing petabytes of data with sub-second query performance. Our architectures scale horizontally to meet any data volume.",
      },
      {
        question: "Do you support real-time analytics?",
        answer: "Yes, we specialise in streaming analytics using Kafka, Spark Streaming, and Flink for real-time insights and event processing.",
      },
    ],
    relatedContent: [
      { type: "solution", title: "Financial Services", href: "/solutions/financial-services" },
      { type: "product", title: "DBLOCK Platform", href: "/products/dblock" },
    ],
    ctaText: "Start Your Analytics Journey",
  },
  "ai-solutions": {
    slug: "ai-solutions",
    hero: {
      badge: "AI Solutions",
      title: "AI & Machine Learning Solutions",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and create competitive advantage.",
    },
    overview: "Our AI solutions help organisations leverage cutting-edge artificial intelligence and machine learning technologies. From computer vision to natural language processing, we build AI systems that solve real business problems and deliver measurable ROI.",
    valueProps: [
      {
        icon: "Brain",
        metric: "GPT-4",
        title: "Latest Models",
        description: "State-of-the-art AI",
      },
      {
        icon: "Zap",
        metric: "80%",
        title: "Automation",
        description: "Process automation",
      },
      {
        icon: "Target",
        metric: "95%+",
        title: "Accuracy",
        description: "Model performance",
      },
      {
        icon: "TrendingUp",
        metric: "5x",
        title: "ROI",
        description: "Average return",
      },
    ],
    deliverables: [
      {
        title: "LLM Applications",
        description: "Custom applications powered by GPT-4, Claude, and other large language models with RAG and fine-tuning.",
        icon: "Bot",
      },
      {
        title: "Computer Vision",
        description: "Image and video analysis, object detection, OCR, and visual inspection systems.",
        icon: "Eye",
      },
      {
        title: "NLP Solutions",
        description: "Text analysis, sentiment analysis, document processing, and conversational AI.",
        icon: "MessageSquare",
      },
      {
        title: "Predictive Analytics",
        description: "Forecasting, anomaly detection, and predictive maintenance using ML models.",
        icon: "TrendingUp",
      },
      {
        title: "AI Agents",
        description: "Autonomous AI agents that can reason, plan, and execute complex tasks.",
        icon: "Cpu",
      },
      {
        title: "MLOps Platform",
        description: "End-to-end ML infrastructure for training, deployment, and monitoring at scale.",
        icon: "Settings",
      },
    ],
    process: [
      { step: 1, title: "Discovery", description: "Identify AI opportunities and use cases." },
      { step: 2, title: "Data Prep", description: "Prepare and validate training data." },
      { step: 3, title: "Model Dev", description: "Develop and train AI models." },
      { step: 4, title: "Deploy", description: "Production deployment with monitoring." },
      { step: 5, title: "Iterate", description: "Continuous improvement and retraining." },
    ],
    technologies: [
      { category: "LLMs", items: ["OpenAI GPT-4", "Anthropic Claude", "Llama 2", "Mistral"] },
      { category: "ML Frameworks", items: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain"] },
      { category: "MLOps", items: ["MLflow", "Kubeflow", "SageMaker", "Vertex AI"] },
      { category: "Vector DBs", items: ["Pinecone", "Weaviate", "Chroma", "Qdrant"] },
    ],
    caseStudies: [
      {
        title: "AI Document Processing",
        industry: "Legal",
        description: "Built AI system processing 1M+ documents monthly with 95% accuracy.",
        metrics: [
          { value: "1M+", label: "Docs/Month" },
          { value: "95%", label: "Accuracy" },
          { value: "80%", label: "Time Saved" },
        ],
      },
    ],
    faqs: [
      {
        question: "Which AI models do you work with?",
        answer: "We work with all major LLMs including OpenAI GPT-4, Anthropic Claude, Google Gemini, and open-source models like Llama and Mistral.",
      },
      {
        question: "How do you ensure AI model accuracy?",
        answer: "We use rigorous evaluation frameworks, A/B testing, human-in-the-loop validation, and continuous monitoring to ensure high accuracy.",
      },
    ],
    relatedContent: [
      { type: "product", title: "Allama Platform", href: "/products/allama" },
      { type: "product", title: "DBLOCK Platform", href: "/products/dblock" },
    ],
    ctaText: "Start Your AI Project",
  },
  "cloud-computing": {
    slug: "cloud-computing",
    hero: {
      badge: "Cloud Computing",
      title: "Cloud Computing Services",
      description: "Modernise your infrastructure with enterprise cloud solutions. Migration, architecture, and managed services for AWS, Azure, and GCP.",
    },
    overview: "Our cloud computing services help organisations leverage the full potential of cloud platforms. From strategy and migration to optimisation and managed services, we deliver end-to-end cloud solutions that reduce costs and enable innovation.",
    valueProps: [
      {
        icon: "Cloud",
        metric: "Multi-Cloud",
        title: "Expertise",
        description: "AWS, Azure, GCP",
      },
      {
        icon: "TrendingDown",
        metric: "40%",
        title: "Cost Savings",
        description: "Average reduction",
      },
      {
        icon: "Shield",
        metric: "100%",
        title: "Compliance",
        description: "Security standards",
      },
      {
        icon: "Clock",
        metric: "99.99%",
        title: "Uptime",
        description: "Availability SLA",
      },
    ],
    deliverables: [
      {
        title: "Cloud Strategy",
        description: "Comprehensive cloud strategy with workload assessment, TCO analysis, and migration roadmap.",
        icon: "Map",
      },
      {
        title: "Cloud Migration",
        description: "End-to-end migration services with minimal downtime and risk mitigation.",
        icon: "ArrowRightLeft",
      },
      {
        title: "Cloud Architecture",
        description: "Well-architected solutions following cloud provider best practices.",
        icon: "Building2",
      },
      {
        title: "Kubernetes & Containers",
        description: "Container orchestration, microservices, and cloud-native application platforms.",
        icon: "Box",
      },
      {
        title: "Cloud Security",
        description: "Security architecture, compliance automation, and continuous monitoring.",
        icon: "Shield",
      },
      {
        title: "FinOps & Optimisation",
        description: "Cost optimisation, reserved capacity planning, and FinOps practices.",
        icon: "TrendingDown",
      },
    ],
    process: [
      { step: 1, title: "Assess", description: "Evaluate infrastructure and readiness." },
      { step: 2, title: "Plan", description: "Design migration and architecture." },
      { step: 3, title: "Migrate", description: "Execute with minimal disruption." },
      { step: 4, title: "Optimise", description: "Tune for performance and cost." },
      { step: 5, title: "Manage", description: "Ongoing operations and support." },
    ],
    technologies: [
      { category: "AWS", items: ["EC2", "EKS", "Lambda", "RDS", "S3"] },
      { category: "Azure", items: ["AKS", "Functions", "Cosmos DB", "Blob"] },
      { category: "GCP", items: ["GKE", "Cloud Run", "BigQuery", "GCS"] },
      { category: "DevOps", items: ["Terraform", "Kubernetes", "ArgoCD", "Helm"] },
    ],
    caseStudies: [
      {
        title: "Enterprise Cloud Migration",
        industry: "Financial Services",
        description: "Migrated 200+ applications to AWS with zero downtime.",
        metrics: [
          { value: "200+", label: "Apps" },
          { value: "45%", label: "Cost Savings" },
          { value: "0", label: "Downtime" },
        ],
      },
    ],
    faqs: [
      {
        question: "Which cloud provider should we choose?",
        answer: "It depends on your needs. AWS offers the broadest services, Azure integrates well with Microsoft, and GCP excels at data/AI. We help you choose the right fit.",
      },
      {
        question: "How long does cloud migration take?",
        answer: "Timeline varies by complexity. Simple migrations take 3-6 months, while complex modernisations may take 12-18 months. We deliver value incrementally.",
      },
    ],
    relatedContent: [
      { type: "product", title: "Allama Platform", href: "/products/allama" },
      { type: "solution", title: "Healthcare", href: "/solutions/healthcare" },
    ],
    ctaText: "Start Your Cloud Journey",
  },
};

// Merge all services
export const allServicesData: Record<string, ServiceData> = {
  ...servicesData,
  ...additionalServicesData,
};
