# Requirements Document

## Introduction

This document defines the requirements for adding a comprehensive AI services and product offering to the existing Digitrans Lab website. The update introduces Megamind (an open-source AI platform by digitranslab on GitHub), six AI consulting service pages, a Sovereign AI page, an Agentic AI & Workflow Automation page, an AI Models showcase page, homepage updates, navigation restructuring, footer updates, and supporting blog posts. All new content integrates with the existing React/Vite SPA architecture, data-driven patterns (TypeScript data files feeding reusable templates), and the current design system (shadcn/ui, Tailwind CSS, Framer Motion, Lucide icons).

## Glossary

- **Website**: The Digitrans Lab React/Vite single-page application served via React Router v6
- **ServicePageTemplate**: The reusable service page component at `src/components/pages/services/ServicePageTemplate.tsx` that renders pages from `ServiceData` objects
- **ServiceData**: The TypeScript interface defined in `src/data/services-new.ts` describing a service page's hero, deliverables, process, technologies, case studies, FAQs, and related content
- **Navigation_Config**: The navigation data structure defined in `src/data/navigation.ts` using `NavItem` and `NavSection` interfaces
- **Homepage_Data**: The homepage content data defined in `src/data/homepage.ts` including hero, pillars, products, industries, and differentiators
- **LegacyBlogPost**: The blog post interface defined in `src/data/legacyBlog.ts` with slug, title, excerpt, category, date, content, and optional image fields
- **Footer_Component**: The footer component at `src/components/Footer.tsx` containing link columns for Company, Services, Products, Legal, and Connect
- **App_Router**: The route definitions in `src/App.tsx` mapping URL paths to page components
- **Megamind**: An open-source AI platform (ChatGPT alternative) created by digitranslab, available on GitHub under Apache 2.0 license, with Desktop, Web, Mobile, Server, and Models products
- **MCP**: Model Context Protocol — an open standard enabling AI models to interact with external tools and data sources
- **Sovereign_AI**: AI systems where the organization maintains complete control over data, models, infrastructure, and code with no external dependencies
- **Agentic_AI**: Autonomous AI systems that plan, reason, and execute complex multi-step tasks independently over extended periods

## Requirements

### Requirement 1: Megamind Product Page

**User Story:** As a website visitor, I want to view a dedicated Megamind product page, so that I can understand the open-source AI platform's capabilities, product suite, and community.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/products/megamind`, THE Website SHALL render a dedicated Megamind product page component with hero section, product suite overview, core capabilities, MCP agentic capabilities, privacy features, community statistics, and call-to-action sections.
2. THE Megamind product page SHALL display Megamind as an open-source project under the digitranslab GitHub organization with Apache 2.0 licensing.
3. THE Megamind product page SHALL present the five product variants (Desktop, Web, Mobile, Server, Models) with their descriptions and availability status.
4. THE Megamind product page SHALL include community statistics: 4.5M+ downloads, 16K+ community members, 100+ contributors, 2800+ PRs merged.
5. THE Megamind product page SHALL describe MCP integration categories (Browser Automation, Data Analysis, Search & Research, Deep Research, Design Tools, Productivity) with tool names and capabilities.
6. THE Megamind product page SHALL highlight privacy and data sovereignty features including zero data collection by default, local JSON storage, optional GDPR-compliant analytics, and full data portability.
7. THE Megamind product page SHALL include a link to the digitranslab GitHub organization and to megamind.ai/docs for documentation.

### Requirement 2: AI Consulting Services Page

**User Story:** As a potential enterprise client, I want to view an AI Consulting Services overview page, so that I can understand the full range of AI consulting services Digitrans Lab offers.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/services/ai-consulting`, THE Website SHALL render an AI Consulting Services page using the ServicePageTemplate with a ServiceData object defined in the services data file.
2. THE AI Consulting Services page SHALL present six service categories: AI Strategy & Assessment, Agentic AI Implementation, Workflow AI Automation, Sovereign AI Deployment, Custom Model Fine-Tuning, and AI Operations & Support.
3. THE AI Consulting Services page SHALL include a value proposition section referencing that knowledge workers spend 60% of their time on "work about work" and how agentic AI addresses this problem.
4. THE AI Consulting Services page SHALL include deliverables, a process timeline, technology stack, case study highlights, FAQs, and a consultation call-to-action.
5. THE AI Consulting Services page SHALL reference the Megamind platform and MCP as core enabling technologies.

### Requirement 3: Sovereign AI Solutions Page

**User Story:** As a compliance officer or CTO in a regulated industry, I want to view a Sovereign AI Solutions page, so that I can evaluate self-hosted AI deployment options that meet data residency and regulatory requirements.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/services/sovereign-ai`, THE Website SHALL render a Sovereign AI Solutions page using the ServicePageTemplate with a ServiceData object.
2. THE Sovereign AI Solutions page SHALL explain sovereign AI as complete organizational control over data, models, infrastructure, and code.
3. THE Sovereign AI Solutions page SHALL describe deployment options: on-premise installation, air-gapped environments, and private cloud deployment.
4. THE Sovereign AI Solutions page SHALL list target sectors (Government & Defense, Healthcare, Financial Services, Legal, Manufacturing, Education) with sector-specific use cases.
5. THE Sovereign AI Solutions page SHALL include compliance coverage information for GDPR, HIPAA, SOC2, FedRAMP, and national data sovereignty laws.
6. THE Sovereign AI Solutions page SHALL present a comparison between Sovereign AI and Cloud AI covering control, cost, compliance, and customization dimensions.

### Requirement 4: Agentic AI & Workflow Automation Page

**User Story:** As a business leader, I want to view an Agentic AI & Workflow Automation page, so that I can understand how autonomous AI agents and workflow integrations can automate complex knowledge work.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/services/agentic-ai`, THE Website SHALL render an Agentic AI & Workflow Automation page using the ServicePageTemplate with a ServiceData object.
2. THE Agentic AI page SHALL explain agentic AI as autonomous systems that work on complex tasks for extended periods without supervision.
3. THE Agentic AI page SHALL detail MCP integration capabilities across six categories: Browser Automation, Data Analysis, Search & Research, Deep Research, Productivity, and Design.
4. THE Agentic AI page SHALL describe workflow integrations with n8n, Continue.dev, Tabby, and Discord bots via llmcord.
5. THE Agentic AI page SHALL include real-world automation scenarios with measurable outcomes.

### Requirement 5: AI Models Showcase Page

**User Story:** As a technical evaluator, I want to view an AI Models showcase page, so that I can assess Digitrans Lab's fine-tuned model portfolio including specifications, benchmarks, and deployment options.

#### Acceptance Criteria

1. WHEN a visitor navigates to `/models`, THE Website SHALL render an AI Models showcase page displaying the model portfolio.
2. THE AI Models page SHALL present model cards for Jan-v1 (4B, reasoning & tool calling, 91.1% SimpleQA), Jan-Nano-128k (4B, 128k context, deep research), Jan-Nano-32k (4B, compact research), and Lucy (1.7B, edge/mobile search agent).
3. THE AI Models page SHALL display for each model: parameter count, specialty, key benchmark result, hardware requirements (minimum and recommended RAM), deployment options, and HuggingFace link.
4. THE AI Models page SHALL include upcoming models (Jan-v2 multimodal agent, Ichigo voice AI) with "Coming Soon" indicators.
5. THE AI Models page SHALL describe the custom fine-tuning service offering with training cost information (starting under $100 on H200 hardware).
6. THE AI Models page SHALL explain the model philosophy: compact, efficient, agent-optimized models that excel at orchestrating tools rather than memorizing knowledge.

### Requirement 6: Homepage Updates

**User Story:** As a website visitor, I want the homepage to reflect Digitrans Lab's AI consulting services and Megamind open-source platform, so that I can understand the company offers both enterprise services and open-source tools.

#### Acceptance Criteria

1. THE Homepage_Data products array SHALL include a Megamind product entry with name, tagline referencing open-source AI platform, description, features, href to `/products/megamind`, status "live", and a call-to-action label.
2. THE Homepage_Data pillars array SHALL reference AI consulting services in at least one pillar's features list or description.
3. THE Homepage_Data SHALL include community trust statistics (4.5M+ downloads, 16K+ community members, 100+ contributors) either in the hero trust badges or in a differentiator entry.

### Requirement 7: Navigation Updates

**User Story:** As a website visitor, I want the navigation to include AI consulting services and the Megamind product, so that I can discover and access all service and product pages from any page on the website.

#### Acceptance Criteria

1. THE Navigation_Config Services dropdown SHALL include the following children: AI Consulting (href `/services/ai-consulting`), Agentic AI & Automation (href `/services/agentic-ai`), Sovereign AI (href `/services/sovereign-ai`), and the three existing service entries (Big Data Architecture, Agentic AI for Data, AI & Data Consulting).
2. THE Navigation_Config Products dropdown SHALL include a Megamind entry (href `/products/megamind`) with a description referencing open-source AI platform, in addition to the existing Allama and DBLOCK entries.
3. WHEN a visitor views the navigation on any page, THE Website SHALL display the updated Services and Products dropdowns with all new and existing entries.

### Requirement 8: Footer Updates

**User Story:** As a website visitor, I want the footer to include links to the new AI consulting service pages, so that I can navigate to service pages from the bottom of any page.

#### Acceptance Criteria

1. THE Footer_Component Services column SHALL include links to AI Consulting (`/services/ai-consulting`), Sovereign AI (`/services/sovereign-ai`), and Agentic AI & Automation (`/services/agentic-ai`) in addition to the existing three service links.
2. THE Footer_Component Products column SHALL include a link to Megamind (`/products/megamind`) in addition to the existing Allama and DBLOCK links.

### Requirement 9: Route Registration

**User Story:** As a developer, I want all new pages to have registered routes in the application router, so that visitors can navigate to each new page via URL.

#### Acceptance Criteria

1. THE App_Router SHALL register a route for `/products/megamind` mapping to the Megamind product page component.
2. THE App_Router SHALL register a route for `/services/ai-consulting` mapping to the AI Consulting Services page component.
3. THE App_Router SHALL register a route for `/services/sovereign-ai` mapping to the Sovereign AI Solutions page component.
4. THE App_Router SHALL register a route for `/services/agentic-ai` mapping to the Agentic AI & Workflow Automation page component.
5. THE App_Router SHALL register a route for `/models` mapping to the AI Models showcase page component.
6. THE App_Router SHALL register redirect routes from `/platform/megamind` to `/products/megamind` and from `/platform/models` to `/models` to support alternative URL patterns.

### Requirement 10: AI Consulting Service Data Files

**User Story:** As a developer, I want the new AI consulting service pages to follow the existing data-driven architecture, so that service content is defined in TypeScript data files and rendered by the reusable ServicePageTemplate.

#### Acceptance Criteria

1. THE Website SHALL define ServiceData objects for AI Consulting (`ai-consulting`), Sovereign AI (`sovereign-ai`), and Agentic AI & Automation (`agentic-ai`) in the services data file following the same ServiceData interface used by existing services.
2. WHEN a new AI consulting service page is rendered, THE ServicePageTemplate SHALL receive the corresponding ServiceData object and render all sections (hero, value propositions, overview, deliverables, use cases, process, technologies, case studies, FAQs, related content, CTA).
3. THE ServiceData objects for new services SHALL include `relatedContent` entries linking to the Megamind product page and other relevant existing pages.

### Requirement 11: Blog Posts for AI Services

**User Story:** As a content marketer, I want new blog posts supporting each AI service area, so that the website has content that drives organic traffic and educates visitors about the AI consulting offering.

#### Acceptance Criteria

1. THE Website SHALL include at least six new LegacyBlogPost entries in the legacy blog data file, one for each service area: AI Strategy, Agentic AI, Workflow Automation, Sovereign AI, Fine-Tuning, and AI Operations.
2. WHEN a visitor navigates to `/blog`, THE Website SHALL display the new blog posts alongside existing posts, sorted by date with newest first.
3. WHEN a visitor navigates to `/blog/{slug}` for a new blog post, THE Website SHALL render the blog post content using the existing BlogPost component.
4. Each new LegacyBlogPost SHALL include a slug, title, excerpt (under 200 characters), category, date, content (minimum 3 paragraphs), and an image URL.

### Requirement 12: SEO Metadata

**User Story:** As a marketing manager, I want all new pages to have proper SEO metadata, so that search engines can index and rank the new AI service and product pages.

#### Acceptance Criteria

1. THE Megamind product page SHALL include a document title containing "Megamind" and "Open-Source AI Platform" and a meta description referencing open-source ChatGPT alternative, 4.5M+ downloads, and sovereign AI capabilities.
2. THE AI Consulting Services page SHALL include a document title containing "AI Consulting Services" and a meta description referencing end-to-end AI consulting from strategy to autonomous agent deployment.
3. THE Sovereign AI page SHALL include a document title containing "Sovereign AI" and a meta description referencing on-premise AI deployment, data residency, and regulatory compliance.
4. THE Agentic AI page SHALL include a document title containing "Agentic AI" and a meta description referencing autonomous AI agents and workflow automation.
5. THE AI Models page SHALL include a document title containing "AI Models" and a meta description referencing fine-tuned models, benchmarks, and deployment options.
6. IF a page component does not set a document title, THEN THE Website SHALL fall back to the default site title "Digitrans — Your Digital, Data & AI Scale-up Partner".

### Requirement 13: Megamind Product Data in Homepage Products

**User Story:** As a website visitor, I want to see Megamind listed alongside Allama and DBLOCK in the homepage products showcase, so that I can discover the open-source AI platform from the homepage.

#### Acceptance Criteria

1. THE Homepage_Data products array SHALL contain a Megamind entry with name "Megamind", a tagline referencing "open-source AI platform", a description mentioning ChatGPT alternative and local/cloud model support, features including "Local & Cloud Models", "MCP Tool Integration", "Custom AI Assistants", and "OpenAI-Compatible API", href `/products/megamind`, status "live", and ctaLabel "Learn More".
2. WHEN the homepage ProductsShowcaseSection renders, THE Website SHALL display the Megamind product card alongside existing Allama and DBLOCK cards.

### Requirement 14: Consistent Design Patterns

**User Story:** As a developer, I want all new pages to follow the existing design patterns, so that the website maintains visual and architectural consistency.

#### Acceptance Criteria

1. THE Megamind product page SHALL use the same component patterns as the existing AllamaPage (Navbar, Footer, GlassCard, GradientButton, SectionHeader, AnimatedWrapper, TypewriterGradientText).
2. THE AI Models showcase page SHALL use the same component patterns as existing product pages with GlassCard for model cards, GradientButton for CTAs, and AnimatedWrapper for scroll animations.
3. WHEN any new service page is rendered via ServicePageTemplate, THE Website SHALL apply the same visual styling (dark background, purple/blue gradient accents, glass morphism cards) as existing service pages.
4. THE Website SHALL use Lucide icon names from the existing icon set for all new page data objects.
