/**
 * Why Us Page Data
 *
 * Structured content for the Why Us page, extracted from the legacy
 * DigiTransLab website (why/index.html, services/index.html, company/index.html, index.html).
 * Covers differentiators, specialist team descriptions, certifications,
 * and cloud partnership info.
 */

export interface Differentiator {
  title: string;
  description: string;
}

export interface TeamSpecialty {
  title: string;
  skills: string[];
}

export interface Certification {
  name: string;
  description: string;
}

export interface CloudPartner {
  name: string;
  description: string;
}

export interface WhyUsData {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  differentiators: Differentiator[];
  teamSpecialties: TeamSpecialty[];
  certifications: Certification[];
  cloudPartners: CloudPartner[];
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const whyUsData: WhyUsData = {
  hero: {
    badge: "Why Digitrans",
    title: "Your Trusted Industrial AI Partner",
    subtitle: "Full-Service Data & AI Operator",
    description:
      "At Digitrans, we cover the entire AI lifecycle, enabling the sustainable use of AI and delivering managed services specifically made for industry. We build it, you own it.",
  },
  differentiators: [
    {
      title: "Full-Service AI Operator",
      description:
        "We cover the entire data and AI lifecycle, from scoping, data integration, application development, model design and deployment at scale, to long-term maintenance and round-the-clock support for industrial operations that run 24/7.",
    },
    {
      title: "We Build It, You Own It",
      description:
        "Unlike point software solutions, you own and control the algorithms and software that we develop and manage for you. Holding the rights to your intellectual property allows you to safeguard any proprietary technology that makes you unique.",
    },
    {
      title: "Industrial Expertise",
      description:
        "Our team of industry specialists has worked in real-world industrial operations, knows where you're coming from, and understands the critical and often time-sensitive nature of your day-to-day operations.",
    },
    {
      title: "Trusted by Fortune 500",
      description:
        "We build and operate data-powered industrial solutions for leading Fortune 500 companies, as well as for mid-sized companies on more than 150 industrial sites across five continents.",
    },
    {
      title: "Past the POC Roadblock",
      description:
        "85% of AI projects never make it out of the proof-of-concept phase. Digitrans accelerates and optimizes the development, deployment and scaling up of AI in production.",
    },
    {
      title: "From Ideation to Operations",
      description:
        "Digitrans supports every stage of the digital lifecycle, from start to finish. Our multidisciplinary teams combine business expertise, technical skills, and delivery management to maximize the value of your digital, data, and AI strategy.",
    },
  ],
  teamSpecialties: [
    {
      title: "Industry Specialist Consultants",
      skills: [
        "Production",
        "Maintenance",
        "Quality",
        "Logistics",
        "Process Control",
        "Automation",
        "Rotating Equipment",
        "Mechanical Engineering",
        "Electrical Engineering",
      ],
    },
    {
      title: "Data Management & Integration Specialists",
      skills: [
        "Strategy",
        "Security",
        "Architecture",
        "Storage",
        "Processing",
        "Analysis",
        "Visualization",
        "MLOps",
      ],
    },
    {
      title: "Agile Software Engineers",
      skills: [
        "Cloud Architecture",
        "Edge Architecture",
        "Back-end Engineering",
        "Front-end Engineering",
        "UX/UI Design",
        "Quality Assurance",
        "DevOps",
        "Monitoring",
      ],
    },
    {
      title: "Expert AI Model Builders",
      skills: [
        "Time Series Forecasting",
        "Computer Vision",
        "Natural Language Processing",
        "Physics-Informed ML",
        "Neural Networks",
        "Transfer Learning",
        "Clustering & Classification",
      ],
    },
  ],
  certifications: [
    {
      name: "ISO 27001",
      description:
        "Digitrans is ISO 27001 certified, a globally recognized standard for information security management. This certification underlines our commitment to ensuring the highest levels of data protection and security for our customers.",
    },
    {
      name: "Kubernetes",
      description:
        "Our team holds the Certified Kubernetes Administrator and Certified Kubernetes Security Specialist designations, ensuring we can deploy, manage, and secure Kubernetes environments effectively.",
    },
    {
      name: "ITIL",
      description:
        "Our professionals are accredited with the ITIL Foundation Certification in IT Service Management, signifying our expertise in implementing and managing IT service management practices with efficiency and reliability.",
    },
  ],
  cloudPartners: [
    {
      name: "Microsoft Azure",
      description:
        "Certified Azure partner delivering cloud-native industrial solutions with enterprise-grade security and scalability.",
    },
    {
      name: "Google Cloud",
      description:
        "Leveraging Google Cloud's AI and data analytics capabilities to power advanced industrial intelligence.",
    },
    {
      name: "AWS",
      description:
        "Building and deploying resilient, high-performance industrial applications on Amazon Web Services infrastructure.",
    },
  ],
  cta: {
    title: "Ready to Experience AI at Scale?",
    subtitle:
      "Data and AI have the potential to revolutionize the way companies operate. Find out how you can harness their power to transform your business.",
    buttonText: "Schedule a Meeting",
    buttonHref: "/contact",
  },
};
