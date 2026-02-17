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
    image?: string;
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
      badge: "Retail & E-commerce",
      title: "AI & Data Solutions for Retail & E-commerce",
      description: "Match production with demand, optimise logistics flows across the globe, and deliver hyper-personalised customer experiences powered by AI and real-time analytics.",
      image: "/images/legacy/industries/digital-transformation.jpg",
    },
    overview: "The retail industry is undergoing a fundamental transformation driven by changing consumer expectations, omnichannel demands, and intense competition. You must match your own production with demand across retail and processing channels, optimise large volumes of logistics flows — both inbound and outbound — and manage inventory levels across multiple sites and warehouses. Our AI and data solutions help retailers deliver personalised experiences, optimise inventory and pricing, and build resilient supply chains that lower lead times and reduce the need for working capital.",
    challenges: [
      {
        title: "Demand Forecasting & Planning",
        description: "Predict customer demand accurately across thousands of SKUs, locations, and channels. Use historical sales data and AI to optimise production schedules and inventory levels.",
        icon: "TrendingUp",
      },
      {
        title: "Customer 360 & Personalisation",
        description: "Build unified customer profiles and deliver personalised recommendations, offers, and experiences across all touchpoints in real-time.",
        icon: "Users",
      },
      {
        title: "Inventory & Warehouse Optimisation",
        description: "Optimise inbound and outbound logistics and warehousing processes to lower lead times, reduce working capital needs, and minimise overstock and stockouts.",
        icon: "Package",
      },
      {
        title: "Supply Chain Visibility & Resilience",
        description: "Gain end-to-end visibility into supply chain operations, optimise ordering for parts and supplies, and respond quickly to disruptions.",
        icon: "Truck",
      },
      {
        title: "Dynamic Pricing & Margin Optimisation",
        description: "Deploy AI-driven pricing strategies that respond to market conditions, competitor pricing, and demand signals in real-time to maximise margins.",
        icon: "DollarSign",
      },
      {
        title: "Fraud Detection & Loss Prevention",
        description: "Identify fraudulent transactions, return abuse, and shrinkage patterns using ML models trained on transaction and behavioural data.",
        icon: "Shield",
      },
    ],
    services: [
      {
        title: "AI & Data Strategy",
        description: "Strategic AI roadmaps for retail transformation, customer experience innovation, and omnichannel optimisation.",
        href: "/services/ai-data-consulting",
      },
      {
        title: "Data Platform Engineering",
        description: "Unified customer data platforms, real-time analytics pipelines, and data lakehouses for retail operations.",
        href: "/services/big-data-architecture",
      },
      {
        title: "Agentic AI Solutions",
        description: "Autonomous AI agents for demand forecasting, dynamic pricing, recommendation engines, and supply chain optimisation.",
        href: "/services/agentic-ai-data",
      },
    ],
    caseStudies: [
      {
        title: "Omnichannel Personalisation Engine",
        description: "Built AI-powered personalisation platform for a major fashion retailer serving 10M+ customers across web, mobile, and in-store touchpoints.",
        results: ["35% increase in conversion rate", "28% higher average order value", "Real-time cross-channel recommendations"],
      },
      {
        title: "Demand Forecasting & Inventory System",
        description: "Implemented ML-based demand forecasting across 500+ stores for a grocery chain, integrating weather, events, and promotional data.",
        results: ["40% reduction in stockouts", "25% decrease in overstock", "£15M annual savings"],
      },
      {
        title: "Dynamic Pricing Platform",
        description: "Deployed AI-driven pricing optimisation for an electronics retailer with automated competitor monitoring and repricing.",
        results: ["12% margin improvement", "Real-time competitor price monitoring", "Automated repricing across 50K+ SKUs"],
      },
      {
        title: "Supply Chain & Logistics Optimisation",
        description: "Implemented predictive inventory management and end-to-end supply chain analytics for a global retailer with 200+ locations.",
        results: ["30% reduction in logistics costs", "99.8% inventory accuracy", "25% faster order fulfilment"],
      },
    ],
    ctaText: "Transform Your Retail Operations",
  },
  "manufacturing": {
    slug: "manufacturing",
    hero: {
      badge: "Manufacturing & Industry 4.0",
      title: "AI & Data Solutions for Manufacturing",
      description: "Drive operational excellence with Industry 4.0 solutions — from predictive maintenance and quality control AI to production optimisation and smart factory analytics.",
      image: "/images/legacy/industries/factory-floor.jpg",
    },
    overview: "Manufacturing organisations face pressure to improve efficiency, reduce costs, and maintain quality while adapting to supply chain volatility and workforce challenges. Digitrans has deep roots in industrial AI — we help manufacturers boost production efficiency, increase quality assurance, optimise schedules, increase asset utilisation, achieve leaner supply chains, and optimise inventory and material flows. Our Industry 4.0 solutions leverage AI, IoT, and advanced analytics to transform factory operations into smart, connected, and resilient systems.",
    challenges: [
      {
        title: "Predictive Maintenance",
        description: "Anticipate breakdowns before they happen. Use site-wide historical and machine-generated data to identify impending issues and predict when failures are likely, so you can head them off. Our AI algorithms tailor recommendations to individual sites, machines, product lines, and operators.",
        icon: "Settings",
      },
      {
        title: "Quality Control & Assurance",
        description: "Detect defects in real-time using computer vision and AI to ensure consistent product quality and regulatory compliance. Cut defect rates and accelerate inspection cycles.",
        icon: "CheckCircle",
      },
      {
        title: "Production Optimisation",
        description: "Identify areas to increase yield and reduce costs based on historical production data. Predict optimal production schedules based on inventory levels, production orders, and capacity.",
        icon: "Factory",
      },
      {
        title: "Supply Chain & Logistics",
        description: "Optimise ordering for parts and supplies. Streamline inbound and outbound logistics and warehousing processes to lower lead times and reduce working capital needs.",
        icon: "Link",
      },
      {
        title: "Safety & Risk Detection",
        description: "Deploy AI-powered monitoring for workplace safety, environmental compliance, and operational risk detection across production facilities.",
        icon: "AlertTriangle",
      },
      {
        title: "Energy Management",
        description: "Optimise energy consumption across production lines and facilities using AI-driven insights, reducing costs and environmental footprint.",
        icon: "Zap",
      },
    ],
    services: [
      {
        title: "AI & Data Strategy",
        description: "Industry 4.0 strategy and AI implementation roadmaps for manufacturing excellence, from ideation to full-scale operations.",
        href: "/services/ai-data-consulting",
      },
      {
        title: "Data Platform Engineering",
        description: "Industrial data platforms connecting OT and IT systems for unified analytics — edge, cloud, or hybrid architecture.",
        href: "/services/big-data-architecture",
      },
      {
        title: "Agentic AI Solutions",
        description: "Autonomous AI agents for predictive maintenance, quality control, process optimisation, and supply chain management.",
        href: "/services/agentic-ai-data",
      },
    ],
    compliance: [
      {
        name: "ISO 27001",
        description: "Digitrans is ISO 27001 certified — globally recognised standard for information security management.",
      },
      {
        name: "IEC 62443",
        description: "Industrial automation and control systems security standard for OT environments.",
      },
      {
        name: "ISO 9001",
        description: "Quality management system certification for consistent manufacturing processes.",
      },
      {
        name: "GDPR",
        description: "General Data Protection Regulation compliance for employee and operational data.",
      },
    ],
    caseStudies: [
      {
        title: "Predictive Maintenance Platform",
        description: "Deployed AI-powered predictive maintenance across 200+ production lines for an automotive manufacturer, using site-wide historical and machine-generated data.",
        results: ["45% reduction in unplanned downtime", "30% lower maintenance costs", "ROI achieved in 8 months"],
      },
      {
        title: "Computer Vision Quality Control",
        description: "Implemented real-time defect detection using AI for a Swiss luxury goods manufacturer. The client reported: \"We cut our defect rate in half.\"",
        results: ["99.5% defect detection rate", "60% faster inspection cycles", "50% reduction in defect rate"],
      },
      {
        title: "Digital Twin & Process Optimisation",
        description: "Built digital twin platform for a chemical plant enabling real-time simulation, process control, and energy optimisation.",
        results: ["15% increase in throughput", "20% energy reduction", "Real-time process optimisation"],
      },
      {
        title: "Smart Factory Analytics Platform",
        description: "Deployed end-to-end Industrial AI platform connecting OT and IT systems for a global manufacturer across 150+ industrial sites.",
        results: ["3-5x ROI vs pilot projects", "94% AI adoption rate", "23% operational efficiency gain"],
      },
    ],
    ctaText: "Modernise Your Manufacturing",
  },
  "energy-mining": {
    slug: "energy-mining",
    hero: {
      badge: "Energy & Mining",
      title: "AI & Data Solutions for Energy & Mining",
      description: "Improve safety, operational efficiency, and sustainability across energy and mining operations with AI-powered monitoring, predictive analytics, and process optimisation.",
      image: "/images/legacy/industries/energy-solar.jpg",
    },
    overview: "The energy and mining sector faces unique challenges — from ensuring worker safety in hazardous environments to optimising extraction processes and managing environmental impact. Digitrans has deep experience deploying AI solutions on industrial sites across five continents. Our solutions help energy and mining companies anticipate equipment failures, optimise energy consumption, improve safety compliance, and achieve operational excellence at scale. We also specialise in the emerging hydrogen economy — helping make production more efficient, storage more reliable, and usage more sustainable through advanced digital solutions.",
    challenges: [
      {
        title: "Safety & Risk Detection",
        description: "Deploy AI-powered monitoring for workplace safety, environmental compliance, and real-time hazard detection across remote and hazardous sites.",
        icon: "AlertTriangle",
      },
      {
        title: "Predictive Maintenance",
        description: "Anticipate equipment failures before they happen using site-wide historical and machine-generated data, minimising unplanned downtime in critical operations.",
        icon: "Settings",
      },
      {
        title: "Energy Management",
        description: "Optimise energy consumption across operations using AI-driven insights, reducing costs and environmental footprint while maintaining output.",
        icon: "Zap",
      },
      {
        title: "Process Control & Optimisation",
        description: "Real-time process monitoring and AI-driven optimisation for extraction, refining, and production processes.",
        icon: "Activity",
      },
      {
        title: "Hydrogen Production & Storage",
        description: "Optimise green hydrogen production, improve storage reliability, and ensure sustainable utilisation through AI-driven process control and predictive analytics.",
        icon: "Droplets",
      },
    ],
    services: [
      {
        title: "AI & Data Strategy",
        description: "Strategic AI roadmaps for energy and mining operations, from safety to sustainability.",
        href: "/services/ai-data-consulting",
      },
      {
        title: "Data Platform Engineering",
        description: "Industrial data platforms connecting field sensors, SCADA systems, and enterprise IT for unified analytics.",
        href: "/services/big-data-architecture",
      },
      {
        title: "Agentic AI Solutions",
        description: "Autonomous AI agents for real-time safety monitoring, predictive maintenance, and process optimisation.",
        href: "/services/agentic-ai-data",
      },
    ],
    compliance: [
      {
        name: "ISO 27001",
        description: "Information security management for sensitive operational data.",
      },
      {
        name: "ISO 45001",
        description: "Occupational health and safety management systems.",
      },
      {
        name: "ISO 14001",
        description: "Environmental management systems for sustainable operations.",
      },
      {
        name: "IEC 61511",
        description: "Functional safety for process industry safety instrumented systems.",
      },
    ],
    caseStudies: [
      {
        title: "Predictive Maintenance for Oil & Gas",
        description: "Deployed AI-powered predictive maintenance across offshore platforms and onshore facilities for a major energy company.",
        results: ["40% reduction in unplanned downtime", "£12M annual savings", "Deployed across 3 continents"],
      },
      {
        title: "AI Safety Monitoring System",
        description: "Implemented real-time computer vision safety monitoring across mining operations, detecting PPE compliance and hazardous situations.",
        results: ["85% reduction in safety incidents", "Real-time alerting", "24/7 automated monitoring"],
      },
      {
        title: "Energy Consumption Optimisation",
        description: "Built AI-driven energy management platform for a mining operation, optimising power consumption across extraction and processing.",
        results: ["18% energy cost reduction", "Carbon footprint tracking", "Real-time consumption analytics"],
      },
      {
        title: "Hydrogen Production Optimisation",
        description: "Developed AI models for optimising green hydrogen production processes, improving yield and reducing energy waste.",
        results: ["22% yield improvement", "15% energy reduction", "Automated process control"],
      },
    ],
    ctaText: "Transform Your Energy Operations",
  },
  "government": {
    slug: "government",
    hero: {
      badge: "Government & Public Sector",
      title: "AI & Data Solutions for Government",
      description: "Secure, sovereign cloud solutions and AI platforms for public sector digital transformation with full compliance and data sovereignty.",
      image: "/images/legacy/industries/government-building.jpg",
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
      {
        title: "AI Productivity Transformation",
        description: "Deployed AI assistant across 3,500+ government staff, measuring productivity gains and governance compliance.",
        results: ["19 minutes saved daily per user", "67,000 hours recovered", "Full governance compliance"],
      },
      {
        title: "Public Sector Automation",
        description: "Implemented workflow automation and AI-driven document processing for a regional government agency.",
        results: ["74% staff AI adoption", "45% faster case processing", "Enhanced accessibility"],
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
      image: "/images/legacy/industries/financial-services.jpg",
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
      {
        title: "AI-Powered Radiology Diagnostics",
        description: "Deployed deep learning models for medical imaging analysis across a regional hospital network, assisting radiologists in early disease detection.",
        results: ["94% diagnostic accuracy", "60% faster image analysis", "25% reduction in diagnosis time"],
      },
      {
        title: "Predictive Patient Deterioration",
        description: "Implemented ML-based early warning system to predict patient deterioration and sepsis risk in ICU and general wards.",
        results: ["40% earlier intervention", "22% reduction in ICU transfers", "Real-time risk scoring"],
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
      {
        title: "Cloud Cost Optimisation",
        description: "Implemented FinOps practices and AI-driven resource management for a high-growth startup.",
        results: ["35% cloud cost reduction", "Auto-scaling infrastructure", "Zero downtime migrations"],
      },
      {
        title: "Real-Time Analytics Platform",
        description: "Built event-driven data platform processing billions of events daily for a fintech scale-up.",
        results: ["1B+ events processed daily", "Sub-second latency", "114% net retention rate"],
      },
    ],
    ctaText: "Accelerate Your Technology",
  },
  "smart-city": {
    slug: "smart-city",
    hero: {
      badge: "Smart City",
      title: "AI & Data Solutions for Smart Cities",
      description: "Harness territory data to inform decisions, optimise infrastructure, and accelerate the energy transition — from smart grids and water networks to waste management and construction.",
      image: "/images/legacy/industries/smart-city-aerial.jpg",
    },
    overview: "Globally, towns and cities are experiencing rapid urbanisation. This is putting pressure on infrastructure and utilities, not to mention having a knock-on effect on pollution, crime and overall quality of life. The development of AI is enabling the full potential of territory data to be mobilised to inform political decisions and encourage citizens and companies in their environmental initiatives: optimising the energy performance of public and private buildings, measuring the environmental impact of urban projects, accelerating the energy transition and building a circular economy.",
    challenges: [
      {
        title: "Intelligent Decision-Making",
        description: "Change the way you operate and manage territories' resources through an intelligent decision-making process using data and AI.",
        icon: "Brain",
      },
      {
        title: "Predictive Maintenance",
        description: "Implement computer vision to monitor networks: detect cracks, roots, and disjointed flanges at reduced cost, including in areas not physically accessible.",
        icon: "Settings",
      },
      {
        title: "Infrastructure Optimisation",
        description: "Analyse data on energy usage, traffic, and pollution levels received by sensors, networks, and applications. Use AI to correct and predict usage patterns.",
        icon: "Building",
      },
      {
        title: "Asset Utilisation",
        description: "Optimise equipment allocation, inventory levels, and positioning across city infrastructure and public services.",
        icon: "BarChart",
      },
      {
        title: "Energy Transition",
        description: "Optimise energy performance of public and private buildings, measure environmental impact of urban projects, and accelerate the transition to renewable energy.",
        icon: "Zap",
      },
      {
        title: "Safety & Environmental Monitoring",
        description: "Deploy AI-powered monitoring for public safety, environmental compliance, and real-time hazard detection across urban environments.",
        icon: "AlertTriangle",
      },
    ],
    services: [
      {
        title: "AI & Data Strategy",
        description: "Strategic AI roadmaps for smart city initiatives, from urban planning to citizen services.",
        href: "/services/ai-data-consulting",
      },
      {
        title: "Data Platform Engineering",
        description: "Unified data platforms connecting IoT sensors, city systems, and public infrastructure for real-time analytics.",
        href: "/services/big-data-architecture",
      },
      {
        title: "Agentic AI Solutions",
        description: "Autonomous AI agents for traffic optimisation, energy management, predictive maintenance, and environmental monitoring.",
        href: "/services/agentic-ai-data",
      },
    ],
    compliance: [
      {
        name: "ISO 27001",
        description: "Information security management for sensitive citizen and infrastructure data.",
      },
      {
        name: "GDPR",
        description: "General Data Protection Regulation compliance for citizen data and privacy.",
      },
      {
        name: "ISO 37120",
        description: "Sustainable development of communities — indicators for city services and quality of life.",
      },
    ],
    caseStudies: [
      {
        title: "Wastewater Network Inspection AI",
        description: "Deployed computer vision for automated inspection of wastewater pipe networks, detecting cracks, roots, and structural issues. The client reported: \"Thanks to Digitrans and its expertise in Computer Vision we have now set up a new service that makes the inspection of waste water pipes much more reliable and faster.\"",
        results: ["80% faster pipe inspections", "AI-powered defect detection", "Coverage of physically inaccessible areas"],
      },
      {
        title: "Smart Grid Energy Optimisation",
        description: "Built AI-driven energy management platform for a metropolitan area, optimising consumption across public buildings and street lighting.",
        results: ["22% energy cost reduction", "Real-time consumption monitoring", "Carbon footprint tracking"],
      },
      {
        title: "Urban Traffic Flow Optimisation",
        description: "Implemented AI-powered traffic management system using IoT sensor data and geolocation analytics to reduce congestion and improve public transport efficiency.",
        results: ["18% reduction in congestion", "15% improvement in bus punctuality", "Real-time traffic predictions"],
      },
    ],
    ctaText: "Transform Your City with AI",
  },
  "transportation-logistics": {
    slug: "transportation-logistics",
    hero: {
      badge: "Transportation & Logistics",
      title: "AI & Data Solutions for Transportation & Logistics",
      description: "Optimise routes, improve asset utilisation, and build resilient supply chains in ultra-competitive, data-rich environments — from freight and warehousing to public transportation.",
      image: "/images/legacy/industries/city-aerial.jpg",
    },
    overview: "Transport and logistics companies operate in ultra-competitive, fast-paced, and increasingly data-rich environments. Managing this data and ensuring timely operations is essential. Multiple levels of subcontractors make for a complex value chain. Unexpected global events and sociopolitical instability continue to shift demand patterns, leading to various whiplash effects. With competition heating up and increasing labour shortfalls, the stakes are high to improve resilience, visibility, predictability, and profitability in your operations.",
    challenges: [
      {
        title: "Asset Utilisation & Flow",
        description: "Optimise routes, infrastructure, and assets. Improve track-and-trace visibility. Use predictive delivery slot notifications. Analyse IoT sensor and geolocation data.",
        icon: "Truck",
      },
      {
        title: "Demand Forecasting",
        description: "Feed AI models historical internal and external data to better predict demand, find commercial opportunities in usage patterns, and improve quality of service.",
        icon: "TrendingUp",
      },
      {
        title: "Predictive Maintenance",
        description: "Schedule maintenance before breakdowns happen. Anticipate equipment failures using historical and real-time sensor data from fleets and infrastructure.",
        icon: "Settings",
      },
      {
        title: "Safety & Risk Detection",
        description: "Analyse historical data across multiple sites to identify trends, predict when accidents could occur, and put safety measures in place to prevent them.",
        icon: "AlertTriangle",
      },
      {
        title: "Supply Chain Resilience",
        description: "Build end-to-end visibility across complex multi-tier supply chains. Respond quickly to disruptions and shifting demand patterns.",
        icon: "Link",
      },
      {
        title: "Energy & Fleet Optimisation",
        description: "Reduce fuel consumption and emissions across fleets using AI-driven route optimisation and energy management.",
        icon: "Zap",
      },
    ],
    services: [
      {
        title: "AI & Data Strategy",
        description: "Strategic AI roadmaps for transportation and logistics operations, from fleet management to supply chain optimisation.",
        href: "/services/ai-data-consulting",
      },
      {
        title: "Data Platform Engineering",
        description: "Real-time data platforms connecting IoT sensors, fleet management systems, and enterprise IT for unified logistics analytics.",
        href: "/services/big-data-architecture",
      },
      {
        title: "Agentic AI Solutions",
        description: "Autonomous AI agents for route optimisation, demand forecasting, predictive maintenance, and supply chain management.",
        href: "/services/agentic-ai-data",
      },
    ],
    compliance: [
      {
        name: "ISO 27001",
        description: "Information security management for sensitive logistics and operational data.",
      },
      {
        name: "ISO 28000",
        description: "Security management systems for the supply chain.",
      },
      {
        name: "GDPR",
        description: "General Data Protection Regulation compliance for passenger and employee data.",
      },
    ],
    caseStudies: [
      {
        title: "Airport Baggage Flow Prediction",
        description: "Built baggage-flow prediction tool for a major airport group. The client reported: \"Digitrans allows us to better anticipate our team's workload and book additional staff for busy days. Big data helps us better manage risk and be more responsive.\"",
        results: ["Accurate workload predictions", "Optimised staff scheduling", "Improved passenger service quality"],
      },
      {
        title: "Fleet Route Optimisation",
        description: "Deployed AI-powered route optimisation for a national freight carrier, reducing fuel costs and improving delivery times across thousands of daily routes.",
        results: ["15% fuel cost reduction", "22% improvement in on-time delivery", "Real-time route adjustments"],
      },
      {
        title: "Predictive Maintenance for Rail",
        description: "Implemented predictive maintenance across a rail operator's rolling stock, using sensor data and ML models to anticipate component failures.",
        results: ["35% reduction in unplanned downtime", "20% lower maintenance costs", "Improved safety compliance"],
      },
      {
        title: "Supply Chain Visibility Platform",
        description: "Built end-to-end supply chain analytics platform for a global logistics provider, connecting data from 50+ partners and carriers.",
        results: ["Real-time shipment tracking", "30% faster exception handling", "95% delivery accuracy"],
      },
    ],
    ctaText: "Optimise Your Logistics Operations",
  },
  "hydrogen": {
    slug: "hydrogen",
    hero: {
      badge: "Hydrogen",
      title: "AI & Data Solutions for the Hydrogen Industry",
      description: "Make hydrogen production more efficient, storage more reliable, and usage more sustainable with advanced digital solutions powered by AI and real-time analytics.",
      image: "/images/legacy/industries/hydrogen-plant.png",
    },
    overview: "The Hydrogen Industry is at the forefront of the energy transition, offering a clean, versatile, and abundant fuel source. However, the industry faces unique challenges — storage and transportation of hydrogen are complex due to its low energy density and reactivity, the cost of hydrogen fuel cells and infrastructure remains high, and regulatory frameworks are still evolving, making market entry and scalability a challenge. Digitrans leverages cutting-edge digital solutions to address these challenges across the entire hydrogen value chain: production, storage, transportation, and utilisation.",
    challenges: [
      {
        title: "Hydrogen Production Optimisation",
        description: "Leverage real-time data analytics to monitor and control hydrogen production processes. Identify inefficiencies and optimise energy use, reducing both costs and carbon footprint.",
        icon: "Zap",
      },
      {
        title: "Storage & Transportation",
        description: "Use AI algorithms to optimise storage conditions and transportation routes, ensuring safety and minimising losses due to hydrogen's low energy density and reactivity.",
        icon: "Truck",
      },
      {
        title: "Fuel Cell Efficiency",
        description: "Utilise machine learning models to predict fuel cell performance and lifespan, allowing for proactive maintenance and system optimisation.",
        icon: "Battery",
      },
      {
        title: "Regulatory Compliance & Market Analysis",
        description: "Stay ahead of evolving regulations and market conditions with predictive analytics. Ensure compliance and make data-driven decisions for market entry and expansion.",
        icon: "Scale",
      },
      {
        title: "Safety & Risk Management",
        description: "Implement AI algorithms, such as computer vision, to monitor storage and transportation conditions, reducing the risk of leaks and other safety hazards.",
        icon: "AlertTriangle",
      },
      {
        title: "Sustainability & Environmental Impact",
        description: "Use AI to analyse and reduce the environmental impact of hydrogen production and utilisation, aligning your operations with sustainability goals.",
        icon: "Leaf",
      },
    ],
    services: [
      {
        title: "AI & Data Strategy",
        description: "Strategic AI roadmaps for hydrogen operations, from production optimisation to sustainability and regulatory compliance.",
        href: "/services/ai-data-consulting",
      },
      {
        title: "Data Platform Engineering",
        description: "Industrial data platforms connecting production sensors, storage systems, and distribution networks for unified hydrogen analytics.",
        href: "/services/big-data-architecture",
      },
      {
        title: "Agentic AI Solutions",
        description: "Autonomous AI agents for real-time production monitoring, predictive maintenance of fuel cells, and safety management.",
        href: "/services/agentic-ai-data",
      },
    ],
    compliance: [
      {
        name: "ISO 27001",
        description: "Information security management for sensitive operational and production data.",
      },
      {
        name: "ISO 14001",
        description: "Environmental management systems for sustainable hydrogen operations.",
      },
      {
        name: "ISO 45001",
        description: "Occupational health and safety management for hydrogen handling and storage.",
      },
      {
        name: "EU Hydrogen Strategy",
        description: "Alignment with European hydrogen strategy and regulatory frameworks for clean energy transition.",
      },
    ],
    caseStudies: [
      {
        title: "Green Hydrogen Production Optimisation",
        description: "Developed AI models for optimising green hydrogen production processes, improving yield and reducing energy waste across electrolysis operations.",
        results: ["22% yield improvement", "15% energy reduction", "Automated process control"],
      },
      {
        title: "Hydrogen Storage Safety Monitoring",
        description: "Deployed AI-powered computer vision and sensor analytics for real-time monitoring of hydrogen storage facilities, detecting anomalies and potential hazards.",
        results: ["90% reduction in safety incidents", "Real-time leak detection", "24/7 automated monitoring"],
      },
      {
        title: "Fuel Cell Predictive Maintenance",
        description: "Implemented ML-based predictive maintenance for hydrogen fuel cell systems, anticipating component degradation and optimising replacement schedules.",
        results: ["40% reduction in unplanned downtime", "30% lower maintenance costs", "Extended fuel cell lifespan"],
      },
      {
        title: "Hydrogen Supply Chain Analytics",
        description: "Built end-to-end analytics platform for hydrogen transportation and distribution, optimising routes and minimising losses.",
        results: ["25% logistics cost reduction", "Real-time supply chain visibility", "Optimised delivery scheduling"],
      },
    ],
    ctaText: "Transform Your Hydrogen Operations",
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
