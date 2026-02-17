/**
 * Services Methodology Data
 *
 * Structured content for the 5-step methodology, Design & Build,
 * Deploy & Run, and team composition sections on the Services page.
 * Content extracted from the legacy Digitrans website.
 */

export interface ServiceStep {
  index: number;
  title: string;
  description: string;
}

export interface ServiceMethodology {
  steps: ServiceStep[];
  designBuild: {
    title: string;
    content: string;
    capabilities: string[];
  };
  deployRun: {
    title: string;
    content: string;
    features: string[];
  };
  teamComposition: string[];
}

export const serviceMethodology: ServiceMethodology = {
  steps: [
    {
      index: 1,
      title: "Project Framing",
      description:
        "We assess the data landscape, audit the IT infrastructure and tools ecosystem, and identify with you the best use cases to start with.",
    },
    {
      index: 2,
      title: "Proof of Value",
      description:
        "We develop the minimum viable solution, to be tested and deployed on a larger scale.",
    },
    {
      index: 3,
      title: "Proof of Scale",
      description:
        "We enhance the existing model to make it work for operations on a broader scale.",
    },
    {
      index: 4,
      title: "Industrialization",
      description:
        "We run the AI at scale and assess new use cases.",
    },
    {
      index: 5,
      title: "Full-Scale Industry 4.0",
      description:
        "We co-develop use cases through multi-year strategic partnerships.",
    },
  ],
  designBuild: {
    title: "Design & Build",
    content:
      "The Digitrans promise starts with a 360-degree survey of your industrial operations. Using our findings, we provide expert recommendations on the ideal areas where data-powered solutions can bring value to your business. From there, we design, build, and enrich your data and digital ecosystems with custom applications, data storage and processing layers, AI models, APIs and backend services, to fit the specific requirements of your business.",
    capabilities: [
      "360-degree operational survey",
      "Custom application development",
      "Data storage and processing layers",
      "AI model design and training",
      "APIs and backend services",
    ],
  },
  deployRun: {
    title: "Deploy & Run",
    content:
      "We offer 24/7 DevOps and MLOps support across 5 continents to ensure your industrial data infrastructure, software, and AI models continue to run smoothly and deliver a return on your investment. Our comprehensive SLAs cover IT, data infrastructure, ModelOps, data science and application support.",
    features: [
      "Global DevOps and MLOps-as-a-Service",
      "Guaranteed SLAs",
      "Proactive monitoring and diagnostics",
      "Incident management services",
      "Security management and protocols",
    ],
  },
  teamComposition: [
    "Industry specialist consultants",
    "Data management and integration specialists",
    "Agile software engineers",
    "Expert industry AI model builders",
  ],
};
