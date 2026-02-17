/**
 * Navigation Data Structure
 * 
 * Defines the navigation items and structure for the Digitrans website.
 * This includes all primary sections and their sub-pages.
 * 
 * Requirements: 1.1
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
  external?: boolean;
  badge?: string;
  /** Sub-sections for grouped dropdowns (e.g., "By Industry", "By Role", "By Use Case") */
  sections?: NavSection[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface NavigationConfig {
  items: NavItem[];
  cta?: {
    label: string;
    href: string;
  };
}

/**
 * Main navigation items for the website
 * Structured according to the information architecture requirements
 * 
 * Services consolidated into 3 categories:
 * 1. Big Data Architecture & Engineering
 * 2. Agentic AI for Data Processing & Enrichment
 * 3. AI & Data Consulting and Strategy
 */
export const navigationItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    description: "Data engineering, AI, and strategic consulting",
    children: [
      {
        label: "Big Data Architecture & Engineering",
        href: "/services/big-data-architecture",
        description: "Medallion architecture, lakehouses, and real-time streaming",
      },
      {
        label: "Agentic AI for Data",
        href: "/services/agentic-ai-data",
        description: "Autonomous AI agents for data processing and enrichment",
      },
      {
        label: "AI & Data Consulting",
        href: "/services/ai-data-consulting",
        description: "Strategic advisory, roadmaps, and governance",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    description: "Our innovative product offerings",
    children: [
      {
        label: "Allama",
        href: "/products/allama",
        description: "Open-source AI security automation platform (SOAR)",
      },
      {
        label: "DBLOCK",
        href: "/products/dblock",
        description: "Next-generation AI application platform",
        badge: "Coming Soon",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/industries",
    description: "Solutions by industry and use case",
    sections: [
      {
        title: "By Industry",
        items: [
          {
            label: "Financial Services",
            href: "/solutions/financial-services",
            description: "AI solutions for banking and finance",
          },
          {
            label: "Government",
            href: "/solutions/government",
            description: "Secure data platforms for the public sector",
          },
          {
            label: "Retail & E-commerce",
            href: "/solutions/retail",
            description: "Customer 360, personalisation, and demand forecasting",
          },
          {
            label: "Manufacturing",
            href: "/solutions/manufacturing",
            description: "Predictive maintenance, quality control AI, and smart factory analytics",
          },
          {
            label: "Energy & Mining",
            href: "/solutions/energy-mining",
            description: "AI for safety, energy management, and operational efficiency",
          },
          {
            label: "Smart City",
            href: "/solutions/smart-city",
            description: "AI for smart grids, water, waste management, and urban infrastructure",
          },
          {
            label: "Transportation & Logistics",
            href: "/solutions/transportation-logistics",
            description: "Route optimisation, fleet management, and supply chain AI",
          },
          {
            label: "Hydrogen",
            href: "/solutions/hydrogen",
            description: "Digital solutions for hydrogen production, storage, and transportation",
          },
        ],
      },

      {
        title: "By Use Case",
        items: [
          {
            label: "Data Integration",
            href: "/use-cases/data-integration",
            description: "Unified data pipelines and integration",
          },
          {
            label: "Supply Chain Optimization",
            href: "/use-cases/supply-chain",
            description: "End-to-end supply chain intelligence",
          },
          {
            label: "Flow Optimization",
            href: "/use-cases/flow-optimization",
            description: "Process flow analysis and improvement",
          },
          {
            label: "Production Optimization",
            href: "/use-cases/production-optimization",
            description: "Maximize production output and quality",
          },
          {
            label: "Process Control",
            href: "/use-cases/process-control",
            description: "Real-time process monitoring and control",
          },
          {
            label: "Quality Control",
            href: "/use-cases/quality-control",
            description: "AI-powered quality assurance",
          },
          {
            label: "Predictive Maintenance",
            href: "/use-cases/predictive-maintenance",
            description: "Anticipate and prevent equipment failures",
          },
          {
            label: "Energy Management",
            href: "/use-cases/energy-management",
            description: "Optimize energy consumption and costs",
          },
          {
            label: "Safety & Risk Detection",
            href: "/use-cases/safety-risk-detection",
            description: "Proactive safety monitoring and risk mitigation",
          },
        ],
      },
    ],
  },
  {
    label: "University",
    href: "/university",
    description: "Learning resources and educational content",
    children: [
      {
        label: "Tutorials",
        href: "/university/tutorials",
        description: "Step-by-step guides and video tutorials",
      },
      {
        label: "Live Demos",
        href: "/university/live-demos",
        description: "Recorded product demonstrations",
      },
      {
        label: "Tech Talks",
        href: "/university/tech-talks",
        description: "AI trends and architecture discussions",
      },
      {
        label: "Webinars",
        href: "/university/webinars",
        description: "Upcoming and past webinar recordings",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Blog, case studies, and documentation",
    children: [
      {
        label: "Blog",
        href: "/blog",
        description: "Latest insights and articles",
      },
      {
        label: "Portfolio",
        href: "/portfolio",
        description: "Client success stories and case studies",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    description: "Our mission, vision, and story",
    children: [
      {
        label: "About Us",
        href: "/about",
        description: "Our mission and story",
      },
      {
        label: "Our Vision",
        href: "/vision",
        description: "Next-generation business efficiency through AI",
      },
      {
        label: "Why Us",
        href: "/why-us",
        description: "Our differentiators, certifications, and partnerships",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch with us",
  },
];

/**
 * Full navigation configuration including CTA
 */
export const navigationConfig: NavigationConfig = {
  items: navigationItems,
  cta: {
    label: "Schedule a Demo",
    href: "/contact",
  },
};

/**
 * Helper function to find a navigation item by href
 */
export function findNavItemByHref(href: string, items: NavItem[] = navigationItems): NavItem | undefined {
  for (const item of items) {
    if (item.href === href) {
      return item;
    }
    if (item.children) {
      const found = findNavItemByHref(href, item.children);
      if (found) return found;
    }
    if (item.sections) {
      for (const section of item.sections) {
        const found = findNavItemByHref(href, section.items);
        if (found) return found;
      }
    }
  }
  return undefined;
}

/**
 * Helper function to get the parent navigation item for a given href
 */
export function getParentNavItem(href: string, items: NavItem[] = navigationItems): NavItem | undefined {
  for (const item of items) {
    if (item.children) {
      for (const child of item.children) {
        if (child.href === href) {
          return item;
        }
      }
    }
    if (item.sections) {
      for (const section of item.sections) {
        for (const sectionItem of section.items) {
          if (sectionItem.href === href) {
            return item;
          }
        }
      }
    }
  }
  return undefined;
}

/**
 * Helper function to check if a path is active (matches or is a child of the nav item)
 */
export function isNavItemActive(navItem: NavItem, currentPath: string): boolean {
  // Exact match
  if (navItem.href === currentPath) {
    return true;
  }
  
  // Check if current path starts with nav item href (for parent items)
  if (currentPath.startsWith(navItem.href + '/')) {
    return true;
  }
  
  // Check children
  if (navItem.children) {
    if (navItem.children.some(child => isNavItemActive(child, currentPath))) {
      return true;
    }
  }

  // Check sections
  if (navItem.sections) {
    for (const section of navItem.sections) {
      if (section.items.some(item => isNavItemActive(item, currentPath))) {
        return true;
      }
    }
  }
  
  return false;
}

/**
 * Generate breadcrumb items from a path
 */
export function generateBreadcrumbs(path: string): { label: string; href: string }[] {
  const breadcrumbs: { label: string; href: string }[] = [];
  const segments = path.split('/').filter(Boolean);
  
  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const navItem = findNavItemByHref(currentPath);
    
    if (navItem) {
      breadcrumbs.push({
        label: navItem.label,
        href: navItem.href,
      });
    } else {
      // Fallback: format the segment as a label
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      breadcrumbs.push({
        label,
        href: currentPath,
      });
    }
  }
  
  return breadcrumbs;
}

export default navigationItems;
