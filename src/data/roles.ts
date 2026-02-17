export interface RoleValueProp {
  title: string;
  description?: string;
}

export interface RoleData {
  slug: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    image?: string;
  };
  valueProps: RoleValueProp[];
  detailedSection: {
    title: string;
    content: string;
  };
  relatedUseCases: {
    name: string;
    href: string;
  }[];
  ctaText: string;
  ctaSubtitle: string;
}

export const roles: RoleData[] = [
  {
    slug: "ceo",
    hero: {
      badge: "Your Role",
      title: "CEO",
      subtitle: "Leading your company into the future",
      description:
        "As CEO, one of your main responsibilities is making sure your company stays current and competitive in today's marketplace. Integrating AI technology to streamline operations is increasingly becoming essential, however, it's a risky move to make without understanding exactly how to implement and measure the impact AI will have on the organization.",
      image: "/images/legacy/roles/ceo-hero.jpg",
    },
    valueProps: [
      { title: "Quickly assess the impact of the AI project" },
      { title: "Measure ROI" },
      { title: "Identify the use cases" },
      { title: "See the tangible benefits of AI with a clear AI roadmap" },
    ],
    detailedSection: {
      title: "Ensure the return on AI for your business",
      content:
        "To integrate and implement AI technology into your operations, you will need to know that adopting AI will improve uptime and efficiency, as well as reduce costs. It's also important that a qualified team with a large scope of AI skills will be taking charge of the project, while giving you visibility over the AI deployment in operations and the ability to predict future business performance. This will allow you to re-evaluate measures for tracking capital investments and build new financial metrics to properly assess the \"return on AI\", and measure ROI more accurately. With Digitrans by your side, adopting AI will unlock untapped potential in your company's core business, so you can provide additional value to clients by enhancing or even adding to their current service offer. Your company will retain the rights to its Intellectual Property and safeguard any innovation you develop as a competitive advantage.",
    },
    relatedUseCases: [
      { name: "Safety & Risk Detection", href: "/use-cases/safety-risk-detection" },
      { name: "Energy Management", href: "/use-cases/energy-management" },
      { name: "Predictive Maintenance", href: "/use-cases/predictive-maintenance" },
      { name: "Quality Control", href: "/use-cases/quality-control" },
      { name: "Process Control", href: "/use-cases/process-control" },
      { name: "Production Optimization", href: "/use-cases/production-optimization" },
      { name: "Flow Optimization", href: "/use-cases/flow-optimization" },
      { name: "Supply Chain Optimization", href: "/use-cases/supply-chain" },
      { name: "Data Integration", href: "/use-cases/data-integration" },
    ],
    ctaText: "Ready to reap the rewards that cutting-edge data and AI technology can deliver?",
    ctaSubtitle:
      "Lead your business into the future with AI built and run for your needs, serviced and secured by professionals who live and breathe industry.",
  },
  {
    slug: "cdo",
    hero: {
      badge: "Your Role",
      title: "Chief Digital Officer",
      subtitle: "Disruptive but not disrupting",
      description:
        "CDOs are changemakers. You want to gain a competitive advantage through innovation, but avoid unnecessary disruption. This is often a difficult role when there is already little financial margin for error or technical margin for improvement, as is the case in industrial operations, which have been optimized over a long period of time.",
      image: "/images/legacy/roles/cdo-hero.jpg",
    },
    valueProps: [
      { title: "Develop a data strategy to help steer the company's performance" },
      { title: "Accelerate the deployment of your organization's data strategy" },
      { title: "Process and deliver data in a form that can be used for a company's day-to-day operations" },
      { title: "Make the best use of data to assist with the company's goals and objectives" },
    ],
    detailedSection: {
      title: "See the bigger picture",
      content:
        "Your goals revolve around proving the impact of your initiatives to budget owners, managing your use case pipeline, and measuring the quality of what your team is producing. However, without AI know-how and resources, you don't have the teams or tools required to make the most of the data your team collects or demonstrate what kind of impact you are making. At the operational level, it can be a real struggle to track business performance. With Digitrans, you'll have experts by your side ready to tackle your data and AI challenges with you.",
    },
    relatedUseCases: [
      { name: "Safety & Risk Detection", href: "/use-cases/safety-risk-detection" },
      { name: "Energy Management", href: "/use-cases/energy-management" },
      { name: "Predictive Maintenance", href: "/use-cases/predictive-maintenance" },
      { name: "Quality Control", href: "/use-cases/quality-control" },
      { name: "Process Control", href: "/use-cases/process-control" },
      { name: "Production Optimization", href: "/use-cases/production-optimization" },
      { name: "Flow Optimization", href: "/use-cases/flow-optimization" },
      { name: "Supply Chain Optimization", href: "/use-cases/supply-chain" },
      { name: "Data Integration", href: "/use-cases/data-integration" },
    ],
    ctaText: "Ready to see how AI can revolutionize the way you use data?",
    ctaSubtitle:
      "Improve business performance, collaboration, and communication with tailored data solutions that are built for your business.",
  },
  {
    slug: "cio",
    hero: {
      badge: "Your Role",
      title: "CIO",
      subtitle: "It's all a question of planning",
      description:
        "CIOs face many issues when it comes to integrating AI into operations, but often it boils down to a lack of resources, skills, or both. Either you don't have the time, people, and infrastructure to deliver on an AI project, or you lack the technology, resources, and budget for an internal solution. Infrastructure and compliance also hold back AI integration—with considerable emphasis on data governance and security.",
      image: "/images/legacy/roles/cio-hero.jpg",
    },
    valueProps: [
      { title: "Streamline team collaboration and increase productivity" },
      { title: "Make it easy for operational teams to understand how AI solves their challenges and how to adopt AI with minimal risk" },
      { title: "Track productivity and data/AI performance" },
      { title: "Benefit from an integrated infrastructure with best-in-class and open-source technologies" },
      { title: "Create a unified data warehouse of contextualized data from different sources: ERP, MES, historian database, sensor data, etc." },
    ],
    detailedSection: {
      title: "Choose a partner that can do the heavy lifting",
      content:
        "To integrate AI into your business, you must first overcome the reasons you haven't done so already. You need to introduce a new system without bringing operations to a standstill. With a partner who can handle integration for you, you don't have to stretch your resources and hinder your operations in the process. The issue of governance holds many back from changing established processes. Take this worry off your shoulders with a partner that has first-hand knowledge of industrial IT and expertise in addressing compliance concerns for AI systems in the existing IT landscape. Retaining oversight and balancing scope, budget, resources, and expectations on a daily basis is also a key priority. For this, a system that allows you to manage and track performance, and gives you all the information you need when you need it, is essential.",
    },
    relatedUseCases: [
      { name: "Safety & Risk Detection", href: "/use-cases/safety-risk-detection" },
      { name: "Energy Management", href: "/use-cases/energy-management" },
      { name: "Predictive Maintenance", href: "/use-cases/predictive-maintenance" },
      { name: "Quality Control", href: "/use-cases/quality-control" },
      { name: "Process Control", href: "/use-cases/process-control" },
      { name: "Production Optimization", href: "/use-cases/production-optimization" },
      { name: "Flow Optimization", href: "/use-cases/flow-optimization" },
      { name: "Supply Chain Optimization", href: "/use-cases/supply-chain" },
      { name: "Data Integration", href: "/use-cases/data-integration" },
    ],
    ctaText: "Ready to propel your business into the future?",
    ctaSubtitle:
      "AI integration doesn't have to be a headache. Work with people who understand your pain, and provide real solutions to the challenges of integration.",
  },
  {
    slug: "head-of-data-lab",
    hero: {
      badge: "Your Role",
      title: "Head of Data Lab",
      subtitle: "The pressure is on to deploy AI at scale",
      description:
        "Deploying AI at scale requires the right know-how, tools, and IT infrastructure. But it takes more time and resources than you have to build the skills and data necessary to do it right. How can you obtain the tools and IT infrastructure to run an AI POC? How will you wrangle data from multiple sources? How will you collect feedback on your models? How will you support other departments to make the AI deployment a success? These challenges can seem insurmountable, but your business will fall behind the competition if you don't start using this new technology immediately.",
      image: "/images/legacy/roles/head-data-lab-hero.jpg",
    },
    valueProps: [
      { title: "Check assumptions" },
      { title: "See results at a glance with visual dashboards" },
      { title: "Use standardized procedures for deploying, running, and monitoring models" },
      { title: "Use data connectors to access multiple data sources (industrial connectors, SQL servers, flat files, etc.)" },
      { title: "Accelerate model deployment into production" },
      { title: "Reduce maintenance and accelerate upgrade cycles" },
      { title: "Spend more time on high-impact work and relieve data scientists from DevOps and software engineering" },
      { title: "Leverage our dedicated business and IT support team" },
    ],
    detailedSection: {
      title: "New tools only work if they are easy to integrate & manage",
      content:
        "So what do you need to successfully deploy an AI project that won't complicate your life and get in the way of your essential work? Feedback on your models, for one thing. Open, state-of-the-art tools can give you this, so you don't need to spend endless hours collecting, wrangling, and sharing data. Tailor-made solutions for your industry are also key. Otherwise, you will end up with the additional task of trying to make them fit your particular needs and constraints. Most importantly, you need the knowledge, resources, and infrastructure required to implement, manage, service, and secure all these essential tools. What you really need is a partner who understands you, your business, and your industry. You need solutions built for you and a partner that will work with you to integrate and manage your new data and AI tools so that you can stay focused on more pressing and essential tasks.",
    },
    relatedUseCases: [
      { name: "Safety & Risk Detection", href: "/use-cases/safety-risk-detection" },
      { name: "Energy Management", href: "/use-cases/energy-management" },
      { name: "Predictive Maintenance", href: "/use-cases/predictive-maintenance" },
      { name: "Quality Control", href: "/use-cases/quality-control" },
      { name: "Process Control", href: "/use-cases/process-control" },
      { name: "Production Optimization", href: "/use-cases/production-optimization" },
      { name: "Flow Optimization", href: "/use-cases/flow-optimization" },
      { name: "Supply Chain Optimization", href: "/use-cases/supply-chain" },
      { name: "Data Integration", href: "/use-cases/data-integration" },
    ],
    ctaText: "Ready to team up for operational excellence?",
    ctaSubtitle:
      "We are here to build solutions that address your specific needs, as well as manage, service, and secure them for you. Want to find out more?",
  },
  {
    slug: "head-of-operations",
    hero: {
      badge: "Your Role",
      title: "Head of Operations",
      subtitle: "Exporting value around the world",
      description:
        "As Head of Operations, you're nothing if not busy. Whether at the factory or corporate level, you have the daunting task of managing, delivering, and monitoring many ongoing aspects of the business and new initiatives—all at the same time. AI projects are often initiated at the factory or local level. This reality reflects the \"build up\" heritage of industrial groups, as well as a pragmatic need to run pilot projects. If and when a project or use case demonstrates value, the challenge is to scale it up across the organization. However, the conditions elsewhere differ, and no one wants to start from square one each time.",
      image: "/images/legacy/roles/head-operations-hero.jpg",
    },
    valueProps: [
      { title: "Get analytics that reflect your performance and help you oversee and manage day-to-day activities" },
      { title: "Understand machine usage and get real-time information from your manufacturing operating systems" },
      { title: "Localize daily inefficiencies and implement corrective measures" },
      { title: "Monitor and manage multiple sites with a unique dashboard" },
      { title: "Leverage our dedicated business and IT support team" },
    ],
    detailedSection: {
      title: "Achieve measurable return on AI",
      content:
        "Above all else, AI initiatives must deliver clear, tangible results. This especially holds true in areas where the competition is succeeding and failing to catch up is not an option. Solutions that give you a clear picture of how your AI is performing, including ROI at both the corporate and factory level, will help justify your investment. In addition, with our solutions, you'll know which AI models are in production and which operators are using AI, in addition to gaining valuable insight into quality and performance.",
    },
    relatedUseCases: [
      { name: "Safety & Risk Detection", href: "/use-cases/safety-risk-detection" },
      { name: "Energy Management", href: "/use-cases/energy-management" },
      { name: "Predictive Maintenance", href: "/use-cases/predictive-maintenance" },
      { name: "Quality Control", href: "/use-cases/quality-control" },
      { name: "Process Control", href: "/use-cases/process-control" },
      { name: "Production Optimization", href: "/use-cases/production-optimization" },
      { name: "Flow Optimization", href: "/use-cases/flow-optimization" },
      { name: "Supply Chain Optimization", href: "/use-cases/supply-chain" },
      { name: "Data Integration", href: "/use-cases/data-integration" },
    ],
    ctaText: "Ready to get a clear picture of how your AI is really performing?",
    ctaSubtitle:
      "Get the analytic dashboards you need to oversee team performance, find ways to boost efficiency, assess ROI on new projects, and put AI to work for you. Want to find out more?",
  },
];
