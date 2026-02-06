/**
 * University Data File
 * 
 * Contains all content data for the University learning hub including:
 * - Tutorials
 * - Live Demos
 * - Tech Talks
 * - Webinars
 * 
 * Requirements: 13.1, 13.3
 */

export type ContentCategory = "tutorials" | "live-demos" | "tech-talks" | "webinars";

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  duration: string;
  category: ContentCategory;
  tags: string[];
  href: string;
  featured?: boolean;
  date: string;
}

export interface CategoryInfo {
  slug: ContentCategory;
  title: string;
  description: string;
  icon: string;
}

export const categories: CategoryInfo[] = [
  {
    slug: "tutorials",
    title: "Tutorials",
    description: "Step-by-step video guides for Allama, DBLOCK, and general AI/Data topics.",
    icon: "BookOpen",
  },
  {
    slug: "live-demos",
    title: "Live Demos",
    description: "Recorded product demonstrations and use case walkthroughs.",
    icon: "Play",
  },
  {
    slug: "tech-talks",
    title: "Tech Talks",
    description: "Discussions on AI trends, data architecture, and security automation.",
    icon: "Mic",
  },
  {
    slug: "webinars",
    title: "Webinars",
    description: "Live sessions with Q&A, guest speakers, and community events.",
    icon: "Video",
  },
];

export const contentItems: ContentItem[] = [
  // Tutorials
  {
    id: "tut-1",
    title: "Getting Started with Allama",
    description: "Learn how to deploy Allama and create your first security automation workflow.",
    duration: "15 min",
    category: "tutorials",
    tags: ["Allama", "Getting Started", "SOAR"],
    href: "https://youtube.com/@digitranslab",
    featured: true,
    date: "2026-01-15",
  },
  {
    id: "tut-2",
    title: "Building AI Agents in Allama",
    description: "Create autonomous AI agents that investigate security alerts automatically.",
    duration: "25 min",
    category: "tutorials",
    tags: ["Allama", "AI Agents", "LLM"],
    href: "https://youtube.com/@digitranslab",
    date: "2026-01-20",
  },
  {
    id: "tut-3",
    title: "Integrating Splunk with Allama",
    description: "Connect your Splunk SIEM to Allama for automated alert triage.",
    duration: "12 min",
    category: "tutorials",
    tags: ["Allama", "Splunk", "Integration"],
    href: "https://youtube.com/@digitranslab",
    date: "2026-01-25",
  },
  {
    id: "tut-4",
    title: "Data Pipeline Best Practices",
    description: "Learn modern data engineering patterns for reliable data pipelines.",
    duration: "30 min",
    category: "tutorials",
    tags: ["Data Engineering", "ETL", "Best Practices"],
    href: "https://youtube.com/@digitranslab",
    date: "2026-02-01",
  },
  // Live Demos
  {
    id: "demo-1",
    title: "Allama Phishing Triage Demo",
    description: "Watch how Allama automates phishing email analysis in real-time.",
    duration: "20 min",
    category: "live-demos",
    tags: ["Allama", "Phishing", "Demo"],
    href: "https://youtube.com/@digitranslab",
    featured: true,
    date: "2026-01-10",
  },
  {
    id: "demo-2",
    title: "AI-Powered Threat Hunting",
    description: "See how AI agents generate and execute threat hunting queries.",
    duration: "18 min",
    category: "live-demos",
    tags: ["Allama", "Threat Hunting", "AI"],
    href: "https://youtube.com/@digitranslab",
    date: "2026-01-18",
  },
  {
    id: "demo-3",
    title: "Case Management Walkthrough",
    description: "Complete tour of Allama's built-in case management system.",
    duration: "15 min",
    category: "live-demos",
    tags: ["Allama", "Case Management"],
    href: "https://youtube.com/@digitranslab",
    date: "2026-02-05",
  },
  // Tech Talks
  {
    id: "talk-1",
    title: "The Future of Security Automation",
    description: "Exploring how AI is transforming security operations centres.",
    duration: "45 min",
    category: "tech-talks",
    tags: ["AI", "Security", "Future"],
    href: "https://youtube.com/@digitranslab",
    featured: true,
    date: "2026-01-05",
  },
  {
    id: "talk-2",
    title: "Building Open Source Security Tools",
    description: "Lessons learned from building Allama as an open source project.",
    duration: "35 min",
    category: "tech-talks",
    tags: ["Open Source", "Security", "Community"],
    href: "https://youtube.com/@digitranslab",
    date: "2026-01-22",
  },
  {
    id: "talk-3",
    title: "LLMs in Production: Security Considerations",
    description: "Best practices for deploying LLMs in security-sensitive environments.",
    duration: "40 min",
    category: "tech-talks",
    tags: ["LLM", "Security", "Production"],
    href: "https://youtube.com/@digitranslab",
    date: "2026-02-03",
  },
  // Webinars
  {
    id: "web-1",
    title: "Allama Community Meetup - February 2026",
    description: "Monthly community meetup with product updates and Q&A.",
    duration: "60 min",
    category: "webinars",
    tags: ["Community", "Allama", "Meetup"],
    href: "https://youtube.com/@digitranslab",
    featured: true,
    date: "2026-02-15",
  },
  {
    id: "web-2",
    title: "SOC Automation Workshop",
    description: "Hands-on workshop for building SOC automation workflows.",
    duration: "90 min",
    category: "webinars",
    tags: ["Workshop", "SOC", "Automation"],
    href: "https://youtube.com/@digitranslab",
    date: "2026-02-20",
  },
];

// Helper functions
export const getContentByCategory = (category: ContentCategory): ContentItem[] => {
  return contentItems.filter((item) => item.category === category);
};

export const getFeaturedContent = (): ContentItem[] => {
  return contentItems.filter((item) => item.featured);
};

export const searchContent = (query: string): ContentItem[] => {
  const lowerQuery = query.toLowerCase();
  return contentItems.filter(
    (item) =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
};

export default { categories, contentItems, getContentByCategory, getFeaturedContent, searchContent };
