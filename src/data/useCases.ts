export interface UseCaseBenefit {
  title: string;
  description: string;
}

export interface UseCaseData {
  slug: string;
  category: "use-case";
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    image?: string;
  };
  benefits: UseCaseBenefit[];
  relatedIndustries: {
    name: string;
    href: string;
  }[];
  ctaText: string;
}

export const useCases: UseCaseData[] = [
  {
    slug: "data-integration",
    category: "use-case",
    hero: {
      badge: "Use Case",
      title: "Data Integration",
      subtitle: "Rapidly deploy a functional industrial data infrastructure",
      description:
        "Harnessing the power of data and algorithmics in an industrial setting starts with the creation of a functional data infrastructure. This requires an in-depth understanding of industrial data. Our data engineers are experts at structuring and integrating all your business and operational data into one centralized data infrastructure.",
      image: "/images/legacy/services/server-room.jpg",
    },
    benefits: [
      {
        title: "Centralize all your industrial data",
        description:
          "From defining your company's proprietary data catalog, to connecting with machine data sources, and setting up complex ELT job schedulers, we deliver the central data infrastructure needed to fuel your digital transformation.",
      },
      {
        title: "Deploy anywhere",
        description:
          "Digitrans works closely with your IT team to architect the right on-premise, private or public cloud data hosting solution for your company. We are experts at implementing industrial data stores on the Azure, AWS, and GCP platforms.",
      },
    ],
    relatedIndustries: [
      { name: "Energy & Mining", href: "/solutions/energy-mining" },
      { name: "Manufacturing", href: "/solutions/manufacturing" },
      { name: "Smart City", href: "/solutions/smart-city" },
      {
        name: "Transportation & Logistics",
        href: "/solutions/transportation-logistics",
      },
    ],
    ctaText: "Schedule a meeting",
  },
  {
    slug: "supply-chain",
    category: "use-case",
    hero: {
      badge: "Use Case",
      title: "Supply Chain Optimization",
      subtitle: "Satisfy demand better with lower working capital",
      description:
        "We design algorithmic models and user-intuitive software that leverage historical and current data to make smart recommendations and take action autonomously or with human approval. These ensure you maintain optimal minimum and maximum inventory levels of raw materials, intermediate products, and finished goods across your global industrial supply chain.",
      image: "/images/legacy/use-cases/supply-chain.jpg",
    },
    benefits: [
      {
        title: "Enjoy superior recommendations",
        description:
          "Machine learning provides you with more accurate recommendations than your existing supply chain optimization software.",
      },
      {
        title: "Manual or automated",
        description:
          "We are the expert in designing intelligent systems that are centered on augmenting your operators' capabilities, that either recommend or act on their own.",
      },
    ],
    relatedIndustries: [
      { name: "Energy & Mining", href: "/solutions/energy-mining" },
      { name: "Manufacturing", href: "/solutions/manufacturing" },
      { name: "Smart City", href: "/solutions/smart-city" },
      {
        name: "Transportation & Logistics",
        href: "/solutions/transportation-logistics",
      },
    ],
    ctaText: "Schedule a meeting",
  },
  {
    slug: "flow-optimization",
    category: "use-case",
    hero: {
      badge: "Use Case",
      title: "Flow Optimization",
      subtitle: "Optimize transportation, fixed & mobile industrial assets",
      description:
        "As an asset-intensive business, you own and operate a global base of valuable fixed and mobile industrial assets. Digitrans enables you to be confident that you are fully optimizing those assets at all times, at the lowest operating cost, by learning from historical data to anticipate surges or drops in demand, traffic flow, and potential transportation delays.",
      image: "/images/legacy/services/factory-discussion.jpg",
    },
    benefits: [
      {
        title: "Optimize routes and transportation",
        description:
          "Digitrans ensures that all routes and transportation throughout your supply chain are continuously adapted to best meet changing demand and production constraints.",
      },
      {
        title: "Smarter mobile asset positioning",
        description:
          "For industries that rely on mobile production equipment, in particular construction, mining, oil and gas, and utilities, Digitrans ensures you optimize where your assets are located at all times to best anticipate and meet future demand.",
      },
    ],
    relatedIndustries: [
      { name: "Energy & Mining", href: "/solutions/energy-mining" },
      { name: "Manufacturing", href: "/solutions/manufacturing" },
      { name: "Smart City", href: "/solutions/smart-city" },
      {
        name: "Transportation & Logistics",
        href: "/solutions/transportation-logistics",
      },
    ],
    ctaText: "Schedule a meeting",
  },
  {
    slug: "production-optimization",
    category: "use-case",
    hero: {
      badge: "Use Case",
      title: "Production Optimization",
      subtitle: "Streamline production & maximize output using data insights",
      description:
        "Track, understand, and streamline your production processes. Analyze historical data and a near-unlimited number of present variables to get a big-picture overview of your production line from beginning to end. Build and adapt algorithms and models that optimize processes and machine settings to improve throughput and efficiency, minimize costs, and reduce TAKT time.",
      image: "/images/legacy/services/factory-tablet.jpg",
    },
    benefits: [
      {
        title: "Optimize production schedules",
        description:
          "Streamline collaboration; coordinate manufacturing and distribution schedules; predict demand and order changes; factor in countless variables and constraints; and run what-if planning simulations for different timelines and scenarios to find your optimal production schedule, every time.",
      },
      {
        title: "Lower production costs",
        description:
          "Find more efficient ways to utilize machines and workers, so you can lower the cost of operations without sacrificing output or product quality.",
      },
    ],
    relatedIndustries: [
      { name: "Energy & Mining", href: "/solutions/energy-mining" },
      { name: "Manufacturing", href: "/solutions/manufacturing" },
      { name: "Smart City", href: "/solutions/smart-city" },
      {
        name: "Transportation & Logistics",
        href: "/solutions/transportation-logistics",
      },
    ],
    ctaText: "Schedule a meeting",
  },
  {
    slug: "process-control",
    category: "use-case",
    hero: {
      badge: "Use Case",
      title: "Process Control",
      subtitle: "Real-time data for next-level objectives",
      description:
        "Optimize manufacturing processes to increase production output, lower costs, and improve safety and quality. Glean insights from machine-generated data to hit production, safety, and compliance targets. Leverage AI's capacity to process large volumes of data and empower operators to make informed decisions easily with AI-enhanced decision support.",
      image: "/images/legacy/services/sensor-monitoring.jpg",
    },
    benefits: [
      {
        title: "Streamline your processes",
        description:
          "Automate tasks and optimize production flow, freeing up your human resources to focus on more complex tasks that add value to your operation.",
      },
      {
        title: "Make better decisions",
        description:
          "Empower your operators with enhanced decision-making tools to make smart recommendations based on present conditions and historical data. Avoid the pitfalls of human limits, blind spots, and limited experience.",
      },
    ],
    relatedIndustries: [
      { name: "Energy & Mining", href: "/solutions/energy-mining" },
      { name: "Manufacturing", href: "/solutions/manufacturing" },
      { name: "Smart City", href: "/solutions/smart-city" },
      {
        name: "Transportation & Logistics",
        href: "/solutions/transportation-logistics",
      },
    ],
    ctaText: "Schedule a meeting",
  },
  {
    slug: "quality-control",
    category: "use-case",
    hero: {
      badge: "Use Case",
      title: "Quality Control",
      subtitle: "Seeing quality control in a new light",
      description:
        "Traditional quality control performed by means of visual inspections or laboratory analysis is time-consuming, expensive and prone to human error. Digitrans harnesses the power of computer vision technology and machine learning to help you perform quick, accurate, continuous, and cost-effective quality control inspections using advanced image- and sensor-based AI tools.",
      image: "/images/legacy/use-cases/quality-control.jpg",
    },
    benefits: [
      {
        title: "Identify defects faster and with greater accuracy",
        description:
          "Lower your rate of defective products. Automate quality-control checks and use advanced computer vision to spot flaws instantly and with greater accuracy than traditional methods, ensuring that you never miss a defect and only quality product makes it to market.",
      },
      {
        title: "Destroy only defective product",
        description:
          "Save money by destroying only units that are actually faulty, rather than mass discarding product batches when a single sample is found to be defective.",
      },
    ],
    relatedIndustries: [
      { name: "Energy & Mining", href: "/solutions/energy-mining" },
      { name: "Manufacturing", href: "/solutions/manufacturing" },
      { name: "Smart City", href: "/solutions/smart-city" },
      {
        name: "Transportation & Logistics",
        href: "/solutions/transportation-logistics",
      },
    ],
    ctaText: "Schedule a meeting",
  },
  {
    slug: "predictive-maintenance",
    category: "use-case",
    hero: {
      badge: "Use Case",
      title: "Predictive Maintenance",
      subtitle: "Anticipation is the name of the game",
      description:
        "Use data-driven insights to anticipate breakdowns and schedule preventive maintenance before they happen. Digitrans's predictive AI algorithms take into account factors such as machine usage, machine settings, operating conditions and equipment-generated feedback to identify potential issues and make maintenance and service recommendations that prevent minor issues from turning into major problems.",
      image: "/images/legacy/industries/drone-inspection.jpg",
    },
    benefits: [
      {
        title: "Anticipate breakdowns before they happen",
        description:
          "Use site-wide historical and individual machine-generated data to identify impending issues and predict when breakdowns are likely to happen, so you can head them off at the pass. Digitrans's advanced AI algorithms can even tailor recommendations to individual sites, machines, product lines and operators.",
      },
      {
        title: "Predict and prepare for asset failure",
        description:
          "Don't get caught off guard when asset failure is inevitable. Using AI to predict when your machines will fail allows you to get ahead of the curve and put a contingency plan in place that will minimize the disruption to your production process.",
      },
    ],
    relatedIndustries: [
      { name: "Energy & Mining", href: "/solutions/energy-mining" },
      { name: "Manufacturing", href: "/solutions/manufacturing" },
      { name: "Smart City", href: "/solutions/smart-city" },
      {
        name: "Transportation & Logistics",
        href: "/solutions/transportation-logistics",
      },
    ],
    ctaText: "Schedule a meeting",
  },
  {
    slug: "energy-management",
    category: "use-case",
    hero: {
      badge: "Use Case",
      title: "Energy Management",
      subtitle: "Lower your energy costs without sacrificing productivity",
      description:
        "Finding ways to reduce energy consumption and costs without sacrificing output or productivity, across multiple buildings, factories, sites and energy networks, is a key challenge for many industrial businesses today. Gain deeper insight into how you use energy throughout your production process and use this information to find ways to cut back on consumption or take advantage of variations in electricity prices.",
      image: "/images/legacy/use-cases/energy-management.jpg",
    },
    benefits: [
      {
        title: "Automate energy-consuming devices",
        description:
          "Program specific machines, lights and other energy-consuming devices to shut off automatically when they are not in use or during off-peak hours.",
      },
      {
        title: "Produce when and where it's less expensive",
        description:
          "Schedule your production processes to take advantage of fluctuations in utility prices during certain times of the day, months of the year, in specific weather conditions or even in countries or locales where energy prices are lower.",
      },
    ],
    relatedIndustries: [
      { name: "Energy & Mining", href: "/solutions/energy-mining" },
      { name: "Manufacturing", href: "/solutions/manufacturing" },
      { name: "Smart City", href: "/solutions/smart-city" },
      {
        name: "Transportation & Logistics",
        href: "/solutions/transportation-logistics",
      },
    ],
    ctaText: "Schedule a meeting",
  },
  {
    slug: "safety-risk-detection",
    category: "use-case",
    hero: {
      badge: "Use Case",
      title: "Safety & Risk Detection",
      subtitle: "When science serves safety",
      description:
        "Digitrans AI technology can analyze historical data across multiple sites to identify trends and patterns that may not always be apparent. Get a macro-level view of where and why accidents occur so you can put the appropriate safety measures in place that will prevent them from happening.",
      image: "/images/legacy/use-cases/safety-monitoring.jpg",
    },
    benefits: [
      {
        title: "Keep your workers safe",
        description:
          "Keep your workforce safer by using data-generated insight to identify correlations, trends and scenarios that increase the likelihood an accident will happen, so you can take action to mitigate risk and prevent them before they occur. Implement AI as a redundant system that serves as an extra safeguard when safety protocols are not entirely respected.",
      },
      {
        title: "Keep your community safe",
        description:
          "For industrial operations, accidents also have the potential to affect the communities around them. Explosions, oil spills, chemical leaks, radiation exposure — these kinds of catastrophes can cause harm to people and wildlife on a massive scale. Use AI insights to prevent them from happening.",
      },
    ],
    relatedIndustries: [
      { name: "Energy & Mining", href: "/solutions/energy-mining" },
      { name: "Manufacturing", href: "/solutions/manufacturing" },
      { name: "Smart City", href: "/solutions/smart-city" },
      {
        name: "Transportation & Logistics",
        href: "/solutions/transportation-logistics",
      },
    ],
    ctaText: "Schedule a meeting",
  },
];
