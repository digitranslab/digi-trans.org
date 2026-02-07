/**
 * New Services Data - Consolidated Structure
 * 
 * Three main service categories:
 * 1. Modern Big Data Architecture & Engineering
 * 2. Agentic AI for Data Processing & Enrichment
 * 3. AI & Data Consulting and Strategy
 * 
 * Content enriched with latest industry trends and use cases (2025-2026)
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

export interface UseCase {
  title: string;
  description: string;
  benefits: string[];
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
  category: string;
  hero: {
    badge: string;
    title: string;
    description: string;
  };
  overview: string;
  keyBenefits?: string[];
  valueProps?: ValueProp[];
  valuePropsTitle?: string;
  valuePropsDescription?: string;
  deliverables: ServiceDeliverable[];
  useCases?: UseCase[];
  process: ProcessStep[];
  technologies?: Technology[];
  caseStudies?: CaseStudy[];
  faqs?: FAQ[];
  relatedContent: RelatedContent[];
  ctaText: string;
}

/**
 * Service Categories for Navigation
 */
export const serviceCategories = [
  {
    id: "big-data-architecture",
    label: "Big Data Architecture & Engineering",
    description: "Modern data platforms, lakehouses, and scalable pipelines",
    services: ["medallion-architecture", "data-lakehouse", "real-time-streaming"],
  },
  {
    id: "agentic-ai-data",
    label: "Agentic AI for Data",
    description: "Autonomous AI agents for data processing and enrichment",
    services: ["agentic-data-pipelines", "ai-data-quality", "intelligent-metadata"],
  },
  {
    id: "ai-data-consulting",
    label: "AI & Data Consulting",
    description: "Strategic advisory and implementation guidance",
    services: ["data-strategy", "ai-roadmap", "data-governance"],
  },
];


export const newServicesData: Record<string, ServiceData> = {
  // ============================================
  // CATEGORY 1: Modern Big Data Architecture & Engineering
  // ============================================
  
  "big-data-architecture": {
    slug: "big-data-architecture",
    category: "Big Data Architecture & Engineering",
    hero: {
      badge: "Data Architecture",
      title: "Modern Big Data Architecture & Engineering",
      description: "Build enterprise-grade data platforms using medallion architecture, data lakehouses, and real-time streaming. Transform raw data into trusted, analytics-ready assets at petabyte scale.",
    },
    overview: "Modern data architecture has evolved beyond traditional data warehouses. The medallion architecture—organizing data into Bronze, Silver, and Gold layers—has become the standard pattern for building scalable, governed data platforms. Combined with lakehouse technology and real-time streaming, organizations can now unify batch and streaming workloads while maintaining data quality and governance at scale.",
    keyBenefits: [
      "Progressive data quality improvement through Bronze-Silver-Gold layers",
      "Unified batch and streaming on a single platform",
      "Cost-effective storage with enterprise-grade performance",
      "Built-in governance, lineage, and compliance",
      "AI/ML-ready data foundation",
    ],
    valueProps: [
      {
        icon: "Layers",
        metric: "3-Layer",
        title: "Medallion Architecture",
        description: "Bronze → Silver → Gold progression",
      },
      {
        icon: "Zap",
        metric: "<1s",
        title: "Real-Time Latency",
        description: "Sub-second streaming analytics",
      },
      {
        icon: "Database",
        metric: "PB+",
        title: "Petabyte Scale",
        description: "Unlimited data capacity",
      },
      {
        icon: "TrendingDown",
        metric: "60%",
        title: "Cost Reduction",
        description: "vs. traditional warehouses",
      },
    ],
    valuePropsTitle: "Enterprise Data Platform Excellence",
    valuePropsDescription: "Built on proven patterns from Databricks, Snowflake, and leading data platforms.",
    deliverables: [
      {
        title: "Medallion Architecture Design",
        description: "Complete Bronze-Silver-Gold layer design with data contracts, schema evolution strategies, and quality gates between layers. Includes partitioning, compaction, and optimization patterns.",
        icon: "Layers",
      },
      {
        title: "Data Lakehouse Implementation",
        description: "Unified lakehouse platform combining data lake flexibility with warehouse performance. Delta Lake, Apache Iceberg, or Apache Hudi implementation with ACID transactions and time travel.",
        icon: "Database",
      },
      {
        title: "Real-Time Streaming Pipelines",
        description: "Event-driven architectures using Apache Kafka, Flink, or Spark Structured Streaming. Sub-second latency for operational analytics, fraud detection, and real-time personalization.",
        icon: "Zap",
      },
      {
        title: "Data Mesh Foundation",
        description: "Domain-oriented data ownership with self-service data infrastructure. Federated governance, data product thinking, and cross-domain data sharing capabilities.",
        icon: "Network",
      },
      {
        title: "DataOps & Pipeline Automation",
        description: "CI/CD for data pipelines with automated testing, data quality checks, and infrastructure as code. Airflow, Dagster, or Prefect orchestration with observability.",
        icon: "GitBranch",
      },
      {
        title: "Performance Optimization",
        description: "Query optimization, caching strategies, materialized views, and cost-based optimization. Z-ordering, data skipping, and partition pruning for 10x faster queries.",
        icon: "Gauge",
      },
    ],
    useCases: [
      {
        title: "Unified Customer 360",
        description: "Consolidate customer data from CRM, transactions, web analytics, and support into a single trusted view.",
        benefits: ["Single source of truth", "Real-time customer insights", "Personalization at scale"],
      },
      {
        title: "Real-Time Fraud Detection",
        description: "Stream processing for instant fraud scoring and anomaly detection across millions of transactions.",
        benefits: ["Sub-second detection", "Reduced false positives", "Adaptive ML models"],
      },
      {
        title: "IoT & Sensor Analytics",
        description: "Ingest and analyze billions of IoT events for predictive maintenance and operational intelligence.",
        benefits: ["Massive scale ingestion", "Edge-to-cloud integration", "Predictive insights"],
      },
    ],
    process: [
      { step: 1, title: "Assessment", description: "Evaluate current data landscape, identify pain points, and define target architecture." },
      { step: 2, title: "Architecture Design", description: "Design medallion layers, data contracts, and integration patterns." },
      { step: 3, title: "Platform Build", description: "Implement lakehouse infrastructure with CI/CD and monitoring." },
      { step: 4, title: "Data Migration", description: "Migrate existing data with validation and parallel running." },
      { step: 5, title: "Optimization", description: "Performance tuning, cost optimization, and knowledge transfer." },
    ],
    technologies: [
      { category: "Lakehouse", items: ["Databricks", "Delta Lake", "Apache Iceberg", "Apache Hudi"] },
      { category: "Streaming", items: ["Apache Kafka", "Apache Flink", "Spark Streaming", "Amazon Kinesis"] },
      { category: "Processing", items: ["Apache Spark", "dbt", "Trino", "Presto"] },
      { category: "Orchestration", items: ["Apache Airflow", "Dagster", "Prefect", "AWS Step Functions"] },
      { category: "Cloud", items: ["AWS (S3, Glue, EMR)", "Azure (ADLS, Synapse)", "GCP (BigQuery, Dataflow)"] },
    ],
    caseStudies: [
      {
        title: "Global Retailer Data Platform",
        industry: "Retail",
        description: "Implemented medallion architecture processing 50TB daily across 10,000+ stores. Unified inventory, sales, and customer data enabling real-time personalization.",
        metrics: [
          { value: "50TB", label: "Daily Volume" },
          { value: "10x", label: "Faster Queries" },
          { value: "45%", label: "Cost Savings" },
        ],
      },
      {
        title: "Financial Services Data Lake",
        industry: "Banking",
        description: "Built compliant data lakehouse with real-time fraud detection and regulatory reporting. Full data lineage and audit capabilities.",
        metrics: [
          { value: "5PB", label: "Data Managed" },
          { value: "<100ms", label: "Fraud Detection" },
          { value: "100%", label: "Compliance" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is medallion architecture and why should we use it?",
        answer: "Medallion architecture organizes data into three progressive quality tiers: Bronze (raw), Silver (cleaned/validated), and Gold (business-ready). This pattern ensures data quality improves systematically, enables incremental processing, and provides clear governance boundaries. It's become the industry standard for modern data platforms.",
      },
      {
        question: "How does a data lakehouse differ from a data warehouse?",
        answer: "A lakehouse combines the best of data lakes (low-cost storage, schema flexibility, support for unstructured data) with data warehouse capabilities (ACID transactions, schema enforcement, fast SQL queries). You get warehouse-like performance without the cost and rigidity of traditional warehouses.",
      },
      {
        question: "Can you migrate our existing data warehouse to a lakehouse?",
        answer: "Yes, we specialize in warehouse-to-lakehouse migrations. We use a phased approach with parallel running to minimize risk. Most clients see 40-60% cost reduction while gaining flexibility for AI/ML workloads.",
      },
      {
        question: "What cloud platforms do you support?",
        answer: "We have deep expertise across AWS, Azure, and GCP. We can implement on Databricks, Snowflake, or cloud-native services. We're vendor-agnostic and recommend based on your specific requirements.",
      },
    ],
    relatedContent: [
      { type: "product", title: "Allama - Data Pipeline Automation", href: "/products/allama" },
      { type: "solution", title: "Financial Services", href: "/solutions/financial-services" },
      { type: "solution", title: "Technology Companies", href: "/solutions/technology" },
    ],
    ctaText: "Design Your Data Platform",
  },


  // ============================================
  // CATEGORY 2: Agentic AI for Data Processing & Enrichment
  // ============================================
  
  "agentic-ai-data": {
    slug: "agentic-ai-data",
    category: "Agentic AI for Data",
    hero: {
      badge: "Agentic AI",
      title: "Agentic AI for Data Processing & Enrichment",
      description: "Deploy autonomous AI agents that sense, reason, and act on your data pipelines. Self-healing workflows, intelligent metadata management, and continuous data quality—without human intervention.",
    },
    overview: "Agentic AI represents a paradigm shift in data engineering. Unlike traditional automation that follows rigid rules, agentic systems can plan, reason, and execute complex multi-step tasks autonomously. These intelligent agents detect anomalies, diagnose root causes, correct schema mismatches, and optimize pipelines—transforming reactive data operations into self-optimizing ecosystems that continuously learn and improve.",
    keyBenefits: [
      "Autonomous error detection and self-healing pipelines",
      "Intelligent metadata discovery and enrichment",
      "Continuous data quality monitoring and remediation",
      "Reduced operational burden and faster incident resolution",
      "Adaptive systems that learn from patterns",
    ],
    valueProps: [
      {
        icon: "Bot",
        metric: "24/7",
        title: "Autonomous Operations",
        description: "Self-healing data pipelines",
      },
      {
        icon: "Brain",
        metric: "90%",
        title: "Auto-Resolution",
        description: "Issues fixed without humans",
      },
      {
        icon: "Sparkles",
        metric: "10x",
        title: "Faster Enrichment",
        description: "AI-powered metadata",
      },
      {
        icon: "Shield",
        metric: "99.9%",
        title: "Data Quality",
        description: "Continuous validation",
      },
    ],
    valuePropsTitle: "Intelligent Data Operations",
    valuePropsDescription: "AI agents that work continuously to keep your data pipelines healthy and optimized.",
    deliverables: [
      {
        title: "Agentic Data Pipeline Platform",
        description: "Deploy AI agents that monitor, diagnose, and repair data pipelines autonomously. Agents detect schema drift, handle late-arriving data, and optimize processing without manual intervention.",
        icon: "Bot",
      },
      {
        title: "Intelligent Data Quality Agents",
        description: "AI-powered data quality that goes beyond rules. Agents learn data patterns, detect anomalies, suggest corrections, and automatically remediate issues while maintaining audit trails.",
        icon: "CheckCircle",
      },
      {
        title: "Autonomous Metadata Management",
        description: "Agents that continuously discover, classify, and enrich metadata. Automatic entity extraction, relationship detection, and semantic tagging across your entire data estate.",
        icon: "Tags",
      },
      {
        title: "Self-Service Data Integration",
        description: "AI agents that understand natural language requests and automatically build integrations. Schema mapping, data transformation, and connector configuration—all agent-driven.",
        icon: "Plug",
      },
      {
        title: "Predictive Pipeline Optimization",
        description: "Agents that analyze pipeline performance, predict bottlenecks, and proactively optimize resource allocation, partitioning, and scheduling.",
        icon: "TrendingUp",
      },
      {
        title: "Governance Automation Agents",
        description: "Autonomous compliance monitoring, PII detection, access control recommendations, and policy enforcement across your data ecosystem.",
        icon: "Shield",
      },
    ],
    useCases: [
      {
        title: "Self-Healing ETL Pipelines",
        description: "Agents that detect pipeline failures, diagnose root causes, and implement fixes automatically—from schema changes to data quality issues.",
        benefits: ["80% reduction in manual interventions", "MTTR from hours to minutes", "Continuous learning from incidents"],
      },
      {
        title: "Intelligent Data Cataloging",
        description: "AI agents that automatically discover, classify, and document data assets with business context and lineage.",
        benefits: ["Automated metadata enrichment", "Natural language data discovery", "Always up-to-date documentation"],
      },
      {
        title: "Real-Time Data Quality",
        description: "Continuous monitoring agents that validate data quality in streaming pipelines and trigger remediation workflows.",
        benefits: ["Proactive issue detection", "Automated data cleansing", "Quality SLA enforcement"],
      },
    ],
    process: [
      { step: 1, title: "Assessment", description: "Analyze current pipelines, identify automation opportunities, and define agent scope." },
      { step: 2, title: "Agent Design", description: "Design agent architectures, define guardrails, and establish human-in-the-loop policies." },
      { step: 3, title: "Implementation", description: "Deploy agents with monitoring, logging, and rollback capabilities." },
      { step: 4, title: "Training", description: "Train agents on your data patterns and validate autonomous decisions." },
      { step: 5, title: "Optimization", description: "Continuous improvement based on agent performance and feedback loops." },
    ],
    technologies: [
      { category: "Agent Frameworks", items: ["LangChain", "AutoGen", "CrewAI", "LlamaIndex"] },
      { category: "LLM Platforms", items: ["OpenAI GPT-4", "Anthropic Claude", "Azure OpenAI", "AWS Bedrock"] },
      { category: "Data Quality", items: ["Great Expectations", "Soda", "Monte Carlo", "Ataccama"] },
      { category: "Metadata", items: ["Alation", "Atlan", "Collibra", "DataHub"] },
      { category: "Orchestration", items: ["Airflow", "Dagster", "Prefect", "Temporal"] },
    ],
    caseStudies: [
      {
        title: "Autonomous Data Operations",
        industry: "E-commerce",
        description: "Deployed agentic AI across 200+ data pipelines. Agents now handle 90% of incidents autonomously, reducing ops team workload by 70%.",
        metrics: [
          { value: "90%", label: "Auto-Resolution" },
          { value: "70%", label: "Ops Reduction" },
          { value: "5min", label: "Avg MTTR" },
        ],
      },
      {
        title: "Intelligent Metadata Platform",
        industry: "Healthcare",
        description: "AI agents automatically catalog and classify 50,000+ data assets with HIPAA compliance tagging and lineage tracking.",
        metrics: [
          { value: "50K+", label: "Assets Cataloged" },
          { value: "95%", label: "Auto-Classification" },
          { value: "100%", label: "Compliance" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is agentic AI and how does it differ from traditional automation?",
        answer: "Agentic AI refers to autonomous systems that can plan, reason, and execute multi-step tasks independently. Unlike rule-based automation that follows predefined scripts, agentic systems can adapt to new situations, diagnose problems, and take corrective actions without explicit programming for every scenario.",
      },
      {
        question: "How do you ensure AI agents don't make harmful changes?",
        answer: "We implement multiple safeguards: defined guardrails and boundaries, human-in-the-loop for critical decisions, comprehensive audit logging, rollback capabilities, and gradual autonomy expansion as trust is established. Agents start with limited scope and earn expanded permissions.",
      },
      {
        question: "What types of data quality issues can agents handle?",
        answer: "Agents can detect and remediate schema drift, missing values, outliers, duplicate records, referential integrity violations, format inconsistencies, and semantic anomalies. They learn your data patterns and can identify issues that rule-based systems would miss.",
      },
      {
        question: "How long does it take to see value from agentic AI?",
        answer: "Initial agents can be deployed in 4-6 weeks with immediate impact on specific use cases. Full autonomous operations typically take 3-6 months as agents learn your environment and trust is established through proven performance.",
      },
    ],
    relatedContent: [
      { type: "product", title: "Allama - AI Workflow Automation", href: "/products/allama" },
      { type: "product", title: "DBLOCK - AI Application Platform", href: "/products/dblock" },
      { type: "solution", title: "Technology Companies", href: "/solutions/technology" },
    ],
    ctaText: "Deploy Intelligent Agents",
  },


  // ============================================
  // CATEGORY 3: AI & Data Consulting and Strategy
  // ============================================
  
  "ai-data-consulting": {
    slug: "ai-data-consulting",
    category: "AI & Data Consulting",
    hero: {
      badge: "Strategic Advisory",
      title: "AI & Data Consulting and Strategy",
      description: "Navigate the AI era with confidence. From data strategy and governance to AI roadmaps and organizational transformation—expert guidance that turns data into competitive advantage.",
    },
    overview: "In 2025, enterprise data strategy is being reshaped by AI, regulatory pressure, and the need to operationalize insights in real time. Organizations are shifting from experimentation to operationalization, with focus on measurable ROI, ethical governance, and sustainable practices. Our consulting services help you develop strategies that align data initiatives with business outcomes, build the right capabilities, and establish governance frameworks for responsible AI deployment.",
    keyBenefits: [
      "Data strategy aligned with business objectives",
      "AI roadmap with prioritized use cases and ROI projections",
      "Governance frameworks for responsible AI",
      "Organizational capability building",
      "Vendor-agnostic technology recommendations",
    ],
    valueProps: [
      {
        icon: "Target",
        metric: "3-5x",
        title: "ROI on Data",
        description: "Average return on initiatives",
      },
      {
        icon: "Map",
        metric: "12-24mo",
        title: "Strategic Roadmap",
        description: "Actionable implementation plan",
      },
      {
        icon: "Users",
        metric: "50+",
        title: "Expert Consultants",
        description: "Industry specialists",
      },
      {
        icon: "Award",
        metric: "200+",
        title: "Engagements",
        description: "Successful transformations",
      },
    ],
    valuePropsTitle: "Strategic Data Leadership",
    valuePropsDescription: "Proven methodologies that deliver measurable business outcomes.",
    deliverables: [
      {
        title: "Enterprise Data Strategy",
        description: "Comprehensive data strategy aligned with business goals. Includes data architecture vision, capability assessment, investment priorities, and 3-year transformation roadmap.",
        icon: "Map",
      },
      {
        title: "AI Opportunity Assessment",
        description: "Systematic evaluation of 20+ AI use cases across your organization. ROI projections, feasibility analysis, risk assessment, and prioritized implementation sequence.",
        icon: "Lightbulb",
      },
      {
        title: "Data Governance Framework",
        description: "Policies, standards, and operating model for data governance. Includes data ownership, quality standards, privacy compliance, and stewardship programs.",
        icon: "Shield",
      },
      {
        title: "AI Ethics & Responsible AI",
        description: "Ethical AI guidelines, bias detection frameworks, explainability requirements, and risk management protocols. Alignment with emerging regulations and industry standards.",
        icon: "Scale",
      },
      {
        title: "Data Organization Design",
        description: "Operating model for data teams—centralized, federated, or data mesh. Role definitions, skill requirements, and organizational change management.",
        icon: "Users",
      },
      {
        title: "Technology Advisory",
        description: "Vendor-agnostic guidance on data platforms, AI tools, and technology stack. RFP support, vendor evaluation, and architecture recommendations.",
        icon: "Cpu",
      },
    ],
    useCases: [
      {
        title: "Data-Driven Transformation",
        description: "Help organizations become truly data-driven with strategy, culture change, and capability building.",
        benefits: ["Clear data vision", "Executive alignment", "Measurable outcomes"],
      },
      {
        title: "AI Strategy & Roadmap",
        description: "Develop comprehensive AI strategy with prioritized use cases, technology choices, and implementation plan.",
        benefits: ["Prioritized AI investments", "Risk mitigation", "Faster time to value"],
      },
      {
        title: "Data Governance Modernization",
        description: "Transform governance from compliance burden to business enabler with modern, federated approaches.",
        benefits: ["Reduced compliance risk", "Improved data quality", "Self-service enablement"],
      },
    ],
    process: [
      { step: 1, title: "Discovery", description: "Stakeholder interviews, current state assessment, and business objective alignment." },
      { step: 2, title: "Analysis", description: "Gap analysis, opportunity identification, and benchmark comparison." },
      { step: 3, title: "Strategy Development", description: "Vision definition, roadmap creation, and business case development." },
      { step: 4, title: "Validation", description: "Executive review, refinement, and stakeholder buy-in." },
      { step: 5, title: "Activation", description: "Implementation planning, quick wins, and change management." },
    ],
    technologies: [
      { category: "Data Platforms", items: ["Databricks", "Snowflake", "BigQuery", "Azure Synapse"] },
      { category: "AI/ML", items: ["OpenAI", "Anthropic", "AWS Bedrock", "Azure AI"] },
      { category: "Governance", items: ["Collibra", "Alation", "Atlan", "Informatica"] },
      { category: "Analytics", items: ["Tableau", "Power BI", "Looker", "ThoughtSpot"] },
    ],
    caseStudies: [
      {
        title: "Global Bank AI Transformation",
        industry: "Financial Services",
        description: "Developed enterprise AI strategy identifying $200M in value across 30+ use cases. Implemented governance framework enabling responsible AI deployment.",
        metrics: [
          { value: "$200M", label: "Value Identified" },
          { value: "30+", label: "Use Cases" },
          { value: "18mo", label: "Roadmap" },
        ],
      },
      {
        title: "Healthcare Data Strategy",
        industry: "Healthcare",
        description: "Created data strategy unifying 50+ data sources. Established governance enabling AI-powered clinical decision support while maintaining HIPAA compliance.",
        metrics: [
          { value: "50+", label: "Sources Unified" },
          { value: "100%", label: "Compliance" },
          { value: "5x", label: "Data Access Speed" },
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a data strategy engagement typically take?",
        answer: "A comprehensive data strategy engagement typically takes 8-12 weeks, including discovery, analysis, strategy development, and roadmap creation. Quick-start assessments can be completed in 4-6 weeks for focused scope.",
      },
      {
        question: "Do you help with implementation or just strategy?",
        answer: "We offer end-to-end services. While this service focuses on strategy and advisory, we have dedicated teams for implementation. Many clients engage us for strategy first, then continue with implementation support.",
      },
      {
        question: "How do you ensure strategies are actionable, not just PowerPoint?",
        answer: "Every strategy includes detailed implementation roadmaps, resource requirements, success metrics, and quick-win opportunities. We focus on practical recommendations that can be executed, not theoretical frameworks.",
      },
      {
        question: "What industries do you have experience in?",
        answer: "We have deep expertise in financial services, healthcare, retail, manufacturing, and technology. Our consultants include former industry practitioners who understand domain-specific challenges and regulations.",
      },
      {
        question: "How do you approach AI governance and ethics?",
        answer: "We help establish comprehensive AI governance including ethical guidelines, bias detection, explainability requirements, and risk frameworks. We align with emerging regulations like EU AI Act and industry-specific requirements.",
      },
    ],
    relatedContent: [
      { type: "solution", title: "Financial Services", href: "/solutions/financial-services" },
      { type: "solution", title: "Healthcare", href: "/solutions/healthcare" },
      { type: "product", title: "Allama - AI Automation", href: "/products/allama" },
    ],
    ctaText: "Start Strategic Conversation",
  },
};

export default newServicesData;
