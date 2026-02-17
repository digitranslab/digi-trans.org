/**
 * Vision Page Data
 *
 * Structured content for the Vision page, extracted from the legacy
 * DigiTransLab website (vision/index.html, services/index.html, index.html).
 * Covers next-generation business efficiency, the wall of operationalization,
 * and the full-service AI operator value proposition.
 */

export interface VisionSection {
  title: string;
  description: string;
}

export interface VisionHardTruth {
  text: string;
}

export interface VisionData {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  efficiency: {
    title: string;
    paragraphs: string[];
  };
  operationalizationWall: {
    title: string;
    stat: string;
    paragraphs: string[];
    hardTruths: VisionHardTruth[];
  };
  valueProposition: {
    title: string;
    description: string;
  };
  pillars: VisionSection[];
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const visionData: VisionData = {
  hero: {
    badge: "Our Vision",
    title: "Next-Generation Business Efficiency",
    subtitle: "Data & AI for Industry",
    description:
      "We believe in a world where data and AI technologies allow industrial operations to be safer and more efficient, consuming fewer resources while producing less waste, for a minimal footprint with maximum uptime.",
  },
  efficiency: {
    title: "The New Era of Industrial Performance",
    paragraphs: [
      "For the industrial sector, optimizing efficiency and ensuring workplace safety has always been essential. Your goal is to improve safety standards, optimize your assets, boost productivity, and increase yield. With the use of data and artificial intelligence, you can make predictions, anticipate issues, and leverage all these improvements to maximize your competitive edge.",
      "Until recently, the success of your business has depended on your people, machines, processes, and, for the last few decades, software. Now, data science, algorithms, machine learning, artificial intelligence, and computer vision are also non-negotiables for any industrial player looking to stay competitive in today's marketplace.",
    ],
  },
  operationalizationWall: {
    title: "The Wall of Operationalization",
    stat: "80–85%",
    paragraphs: [
      "It's not enough to just build your AI solution. You need to be able to run it too. The real hurdle with digital AI platforms is not just getting data into models and software, and then getting those solutions into the hands of real-world operators. It's keeping these algorithms in production, performing as intended.",
      "These challenges are why 80–85% of companies remain stuck in proof-of-concept with their AI projects.",
    ],
    hardTruths: [
      { text: "Algorithms evolve over time and require regular service and maintenance to work." },
      { text: "User adoption is often hindered by non-intuitive solutions." },
      { text: "AI improves efficiency, but running leaner brings its own risks." },
      { text: "The more dependent you are on your AI, the more can go wrong if it fails." },
      { text: "The cost of failure is too high if your AI breaks down." },
    ],
  },
  valueProposition: {
    title: "Get the Real Value from Your Data & AI",
    description:
      "To take full advantage of data and AI technology, you need solutions that are designed and built specifically for industry. But you also need a partner who can manage these solutions for you and ensure they continue to perform reliably year after year. As a full-service data and AI operator with a background in industrial engineering, Digitrans helps you build, deploy, run, and scale data-powered business applications across your operations, managing and maintaining them post-implementation to make sure they continue to perform reliably — leaving you free to focus on what really matters: running your business.",
  },
  pillars: [
    {
      title: "Explore & Frame",
      description:
        "We start with a 360-degree survey of your operations. Using our findings, we provide expert recommendations on the ideal areas where data-powered solutions can bring value to your business.",
    },
    {
      title: "Design & Build",
      description:
        "We design, build, and enrich your data and digital ecosystems with custom applications, data storage and processing layers, AI models, APIs, and backend services to fit the specific requirements of your business.",
    },
    {
      title: "Deploy & Run",
      description:
        "We offer 24/7 DevOps and MLOps support across five continents. Our comprehensive SLAs cover IT, data infrastructure, ModelOps, data science, and application support.",
    },
    {
      title: "Scale & Measure",
      description:
        "We help you scale your digital solutions across your operations and continuously measure the value they generate, ensuring a clear return on your AI investment.",
    },
  ],
  cta: {
    title: "Ready to Revolutionize the Way You Do Business?",
    subtitle:
      "Let's take you past proof-of-concept purgatory and into the future of industry.",
    buttonText: "Schedule a Meeting",
    buttonHref: "/contact",
  },
};
