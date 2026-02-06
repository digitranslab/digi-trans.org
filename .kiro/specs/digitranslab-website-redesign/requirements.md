# Requirements Document

## Introduction

This document specifies the requirements for the DigitransLab website redesign. DigitransLab is a consulting and software company specialising in AI agentic automation applied to Data platforms and Cloud security platforms. The redesign aims to establish a comprehensive information architecture, showcase the company's products (Allama, DBLOCK), services, and industry solutions, while introducing a University learning hub for thought leadership.

## Glossary

- **Website**: The digitranslab.com React/TypeScript web application
- **Homepage**: The root landing page at digitranslab.com/
- **Navigation_System**: The primary and secondary navigation components including header navbar and footer
- **Hero_Section**: The prominent introductory section at the top of a page
- **CTA**: Call-to-action button or link prompting user engagement
- **Product_Page**: A dedicated page showcasing a specific DigitransLab product
- **Service_Page**: A dedicated page describing a consulting or engineering service
- **Solution_Page**: A page presenting industry-specific solutions
- **University_Hub**: The learning centre section containing tutorials, demos, tech talks, and webinars
- **Glass_Morphism**: A design effect using backdrop blur and transparency for card components
- **Allama**: Open-source AI-native security automation platform (SOAR)
- **DBLOCK**: Upcoming product placeholder for future launch
- **Design_System**: The collection of reusable components, colour palette, typography, and spacing rules

## Requirements

### Requirement 1: Information Architecture

**User Story:** As a website visitor, I want a clear and intuitive navigation structure, so that I can easily find information about services, products, and solutions.

#### Acceptance Criteria

1. THE Navigation_System SHALL provide access to all primary sections: Services, Products, Solutions, University, Resources, Company, and Contact
2. WHEN a user hovers over a primary navigation item THEN the Website SHALL display a dropdown menu with sub-navigation links
3. THE Website SHALL implement the following URL structure for all pages:
   - /services/ with sub-pages: /ai-consulting, /data-engineering, /cloud-solutions, /custom-development
   - /products/ with sub-pages: /allama, /dblock
   - /solutions/ with sub-pages: /financial-services, /healthcare, /technology
   - /university/ with sub-pages: /tutorials, /live-demos, /tech-talks, /webinars
   - /resources/ with sub-pages: /blog, /case-studies, /documentation
   - /company/ with sub-pages: /about, /team, /careers, /investors
   - /contact
4. THE Navigation_System SHALL highlight the current active section in the navigation menu
5. THE Website SHALL include breadcrumb navigation on all pages except the Homepage

### Requirement 2: Homepage Hero Section

**User Story:** As a first-time visitor, I want to immediately understand what DigitransLab offers, so that I can determine if their services are relevant to my needs.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the headline "AI & Data Solutions That Transform Business"
2. THE Hero_Section SHALL include two primary CTAs: "Schedule Consultation" and "Explore Products"
3. THE Hero_Section SHALL display trust badges showing key metrics or client logos
4. WHEN the Homepage loads THEN the Hero_Section SHALL animate elements using Framer Motion with staggered entrance effects
5. THE Hero_Section SHALL be fully responsive and maintain visual hierarchy on mobile devices

### Requirement 3: Homepage Three Pillars Section

**User Story:** As a potential client, I want to understand DigitransLab's core offerings at a glance, so that I can identify which services align with my business needs.

#### Acceptance Criteria

1. THE Homepage SHALL display three distinct pillars: Consulting, Engineering, and Products
2. WHEN displaying each pillar THEN the Website SHALL show an icon, title, brief description, and link to learn more
3. THE three pillars section SHALL use consistent card styling with Glass_Morphism effects
4. WHEN a user hovers over a pillar card THEN the Website SHALL display a subtle animation effect

### Requirement 4: Homepage Products Showcase Section

**User Story:** As a visitor interested in products, I want to see DigitransLab's product offerings prominently displayed, so that I can explore solutions that might benefit my organisation.

#### Acceptance Criteria

1. THE Homepage SHALL display product cards for Allama and DBLOCK
2. THE Allama product card SHALL include: product name, tagline "Open-source AI security automation", key features list, and "Learn More" CTA
3. THE DBLOCK product card SHALL display a "Coming Soon" badge and teaser description
4. WHEN a user clicks the Allama "Learn More" CTA THEN the Website SHALL navigate to /products/allama
5. THE product cards SHALL use gradient borders and Glass_Morphism styling consistent with the Design_System

### Requirement 5: Homepage Industries Section

**User Story:** As a visitor from a specific industry, I want to see that DigitransLab has experience in my sector, so that I can trust their expertise for my business context.

#### Acceptance Criteria

1. THE Homepage SHALL display five industry verticals: Financial Services, Healthcare, Technology, Retail, and Government
2. WHEN displaying each industry THEN the Website SHALL show an industry-specific icon and brief value proposition
3. WHEN a user clicks an industry card THEN the Website SHALL navigate to the corresponding solution page
4. THE industries section SHALL be responsive with a grid layout adapting to screen size

### Requirement 6: Homepage Why DigitransLab Section

**User Story:** As a decision-maker evaluating vendors, I want to understand DigitransLab's differentiators, so that I can justify selecting them over competitors.

#### Acceptance Criteria

1. THE Homepage SHALL display five key differentiators with supporting proof points
2. WHEN displaying each differentiator THEN the Website SHALL include a metric or statistic where applicable
3. THE differentiators section SHALL use visual elements to highlight key numbers and achievements
4. THE section SHALL maintain the dark theme with purple/blue gradient accents

### Requirement 7: Homepage Testimonials Section

**User Story:** As a potential client, I want to see social proof from existing clients, so that I can gain confidence in DigitransLab's capabilities.

#### Acceptance Criteria

1. THE Homepage SHALL display client testimonials in a carousel or grid format
2. WHEN displaying a testimonial THEN the Website SHALL show the quote, client name, title, and company (using placeholder format initially)
3. THE testimonials section SHALL support future integration with real client data
4. WHEN the testimonials section is in view THEN the Website SHALL animate testimonial cards with entrance effects

### Requirement 8: Homepage Final CTA Section

**User Story:** As an engaged visitor, I want clear next steps at the end of the homepage, so that I can take action based on my interest level.

#### Acceptance Criteria

1. THE Homepage SHALL include a final CTA section with two buttons: "Schedule Consultation" and "Explore Products"
2. THE final CTA section SHALL include a compelling headline encouraging engagement
3. WHEN a user clicks "Schedule Consultation" THEN the Website SHALL navigate to /contact or open a booking modal
4. WHEN a user clicks "Explore Products" THEN the Website SHALL navigate to /products/allama

### Requirement 9: Allama Product Page

**User Story:** As a security professional, I want comprehensive information about Allama, so that I can evaluate whether it meets my organisation's security automation needs.

#### Acceptance Criteria

1. THE Allama Product_Page SHALL be accessible at /products/allama
2. THE page SHALL include sections for: Hero with tagline, Core Value Propositions, Feature Deep Dive, Integration List, Deployment Options, Competitive Comparison, and CTAs
3. THE Hero_Section SHALL display the tagline "Open-source AI security automation that turns 15-minute investigations into 30-second workflows"
4. WHEN displaying features THEN the Website SHALL include: Visual Workflow Builder, AI Agents & LLM Integration, 80+ Pre-Built Integrations, Case Management
5. THE page SHALL include primary CTAs: "Get Started Free" (GitHub link), "Book a Demo", and "Read Documentation"
6. THE page SHALL display the technical architecture diagram using a visual representation
7. THE page SHALL include a competitive comparison table showing Allama vs Splunk SOAR, Palo Alto XSOAR, and Tines/Torq

### Requirement 10: DBLOCK Product Page

**User Story:** As a visitor interested in upcoming products, I want to learn about DBLOCK, so that I can stay informed about future offerings.

#### Acceptance Criteria

1. THE DBLOCK Product_Page SHALL be accessible at /products/dblock
2. THE page SHALL display a "Coming Soon" status prominently
3. THE page SHALL include a teaser description and email signup for launch notifications
4. WHEN a user submits their email THEN the Website SHALL store the subscription for future notifications

### Requirement 11: Service Pages

**User Story:** As a potential client, I want detailed information about each service offering, so that I can understand how DigitransLab can help my business.

#### Acceptance Criteria

1. THE Website SHALL provide dedicated Service_Pages at:
   - /services/ai-consulting
   - /services/data-engineering
   - /services/cloud-solutions
   - /services/custom-development
2. WHEN displaying a Service_Page THEN the Website SHALL include: Hero section, Service description, Key deliverables, Process overview, Related case studies, and Contact CTA
3. THE Service_Pages SHALL maintain consistent layout and styling across all service types
4. THE Service_Pages SHALL include internal links to related solutions and products

### Requirement 12: Industry Solution Pages

**User Story:** As a visitor from a specific industry, I want to see tailored solutions for my sector, so that I can understand how DigitransLab addresses industry-specific challenges.

#### Acceptance Criteria

1. THE Website SHALL provide dedicated Solution_Pages at:
   - /solutions/financial-services
   - /solutions/healthcare
   - /solutions/technology
2. WHEN displaying a Solution_Page THEN the Website SHALL include: Industry-specific hero, Key challenges addressed, Relevant services, Case studies, and Contact CTA
3. THE Solution_Pages SHALL highlight compliance and regulatory considerations where applicable
4. THE Solution_Pages SHALL include internal links to relevant services and products

### Requirement 13: University Learning Hub

**User Story:** As a developer or security professional, I want access to educational content, so that I can learn about AI automation and data platforms.

#### Acceptance Criteria

1. THE University_Hub SHALL be accessible at /university with sub-pages:
   - /university/tutorials — Video tutorials and step-by-step guides
   - /university/live-demos — Recorded product demonstrations
   - /university/tech-talks — AI trends and data architecture discussions
   - /university/webinars — Upcoming and past webinar recordings
2. THE University_Hub landing page SHALL display featured content from each category
3. WHEN displaying content items THEN the Website SHALL show: thumbnail, title, duration, category tag, and description
4. THE University_Hub SHALL support filtering content by category and topic
5. THE University_Hub SHALL include a search functionality for finding specific content

### Requirement 14: Resources Section

**User Story:** As a visitor seeking in-depth information, I want access to blog posts, case studies, and documentation, so that I can research DigitransLab's expertise and solutions.

#### Acceptance Criteria

1. THE Website SHALL maintain the existing /resources/blog functionality
2. THE Website SHALL provide a /resources/case-studies page listing client success stories
3. THE Website SHALL provide a /resources/documentation page linking to product documentation
4. WHEN displaying blog posts or case studies THEN the Website SHALL show: featured image, title, excerpt, date, and category

### Requirement 15: Company Section

**User Story:** As a potential client or job seeker, I want to learn about DigitransLab as a company, so that I can understand their culture, team, and opportunities.

#### Acceptance Criteria

1. THE Website SHALL provide company pages at:
   - /company/about — Company mission, vision, and history
   - /company/team — Leadership and team profiles
   - /company/careers — Job openings and culture information
   - /company/investors — Investor relations information
2. THE /company/about page SHALL include company values and mission statement
3. THE /company/careers page SHALL integrate with the existing careers functionality
4. THE /company/team page SHALL display team member cards with photos, names, titles, and bios

### Requirement 16: Contact Page

**User Story:** As a visitor ready to engage, I want multiple ways to contact DigitransLab, so that I can reach out through my preferred channel.

#### Acceptance Criteria

1. THE Contact page SHALL be accessible at /contact
2. THE Contact page SHALL include: contact form, email address, phone number, and office locations
3. WHEN a user submits the contact form THEN the Website SHALL validate all required fields before submission
4. THE Contact page SHALL include a calendar booking integration for scheduling consultations

### Requirement 17: Design System Implementation

**User Story:** As a developer, I want a consistent design system, so that I can build new pages efficiently while maintaining visual coherence.

#### Acceptance Criteria

1. THE Design_System SHALL define a colour palette with:
   - Primary: Purple (#8B5CF6 and variants)
   - Secondary: Blue (#3B82F6 and variants)
   - Accent: Indigo (#6366F1 and variants)
   - Dark backgrounds: Black (#000000) and Gray (#111827, #1F2937)
2. THE Design_System SHALL use modern sans-serif typography for headings and readable body text
3. THE Design_System SHALL implement button styles:
   - Primary: Gradient from purple to blue with hover state
   - Secondary: Outline style with border
4. THE Design_System SHALL implement card components with Glass_Morphism effect using backdrop-blur and gradient borders
5. THE Design_System SHALL follow a consistent spacing system based on 4px/8px grid

### Requirement 18: Mobile Responsiveness

**User Story:** As a mobile user, I want the website to be fully functional on my device, so that I can access all content and features regardless of screen size.

#### Acceptance Criteria

1. THE Website SHALL be fully responsive across all breakpoints: mobile (<640px), tablet (640px-1024px), and desktop (>1024px)
2. THE Navigation_System SHALL collapse into a hamburger menu on mobile devices
3. WHEN viewing on mobile THEN the Website SHALL adjust grid layouts to single-column where appropriate
4. THE Website SHALL maintain touch-friendly tap targets (minimum 44px) on mobile devices

### Requirement 19: SEO Optimisation

**User Story:** As a marketing stakeholder, I want the website to be optimised for search engines, so that potential clients can discover DigitransLab through organic search.

#### Acceptance Criteria

1. THE Website SHALL include proper meta tags (title, description, keywords) on all pages
2. THE Website SHALL implement structured data (JSON-LD) for organisation and product information
3. THE Website SHALL generate a sitemap.xml including all public pages
4. THE Website SHALL use semantic HTML elements (header, main, nav, article, section, footer)
5. THE Website SHALL implement proper heading hierarchy (h1, h2, h3) on all pages

### Requirement 20: Animation and Interactions

**User Story:** As a visitor, I want smooth animations and interactions, so that the website feels modern and engaging.

#### Acceptance Criteria

1. THE Website SHALL use Framer Motion for page transitions and element animations
2. WHEN elements enter the viewport THEN the Website SHALL animate them with fade-in and slide-up effects
3. THE Website SHALL implement hover states on all interactive elements (buttons, cards, links)
4. THE animations SHALL respect user preferences for reduced motion (prefers-reduced-motion media query)
5. THE Website SHALL maintain 60fps performance for all animations

### Requirement 21: Integration with Existing Components

**User Story:** As a developer, I want the redesign to integrate with existing components, so that I can leverage proven code and maintain consistency.

#### Acceptance Criteria

1. THE Website SHALL reuse existing UI components from src/components/ui/
2. THE Website SHALL integrate with the existing React Router setup in src/App.tsx
3. THE Website SHALL maintain compatibility with existing page components in src/components/pages/
4. THE Website SHALL preserve existing product pages for KozmoAI, BigBytes, GoDash, Ledger, uTrack, and Ember
5. WHEN adding new routes THEN the Website SHALL follow the existing routing patterns in App.tsx
