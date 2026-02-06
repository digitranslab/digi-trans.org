# Implementation Plan: DigitransLab Website Redesign

## Overview

This implementation plan breaks down the website redesign into discrete coding tasks. The approach prioritises foundational components first (design system, navigation), then builds out page sections incrementally, ensuring each step integrates with existing code and maintains backward compatibility.

## Tasks

- [x] 1. Set up design system foundation and shared UI components
  - [x] 1.1 Create design tokens file at src/lib/design-tokens.ts
    - Define colour palette (primary purple, secondary blue, accent indigo, grays)
    - Define spacing system (4px/8px base grid)
    - Define typography tokens (font families, sizes)
    - Define gradient and shadow tokens
    - _Requirements: 17.1, 17.2, 17.5_

  - [x] 1.2 Create GlassCard component at src/components/ui/glass-card.tsx
    - Implement backdrop-blur and gradient border styling
    - Support variant props (default, gradient, hover)
    - Integrate with existing Card component patterns
    - _Requirements: 17.4_

  - [x] 1.3 Create GradientButton component at src/components/ui/gradient-button.tsx
    - Implement primary gradient style (purple to blue)
    - Implement secondary outline style
    - Support size variants (sm, md, lg)
    - Integrate with existing Button component patterns
    - _Requirements: 17.3_

  - [x] 1.4 Create SectionHeader component at src/components/ui/section-header.tsx
    - Support badge, title, and description props
    - Support left and centre alignment
    - Apply gradient text styling for titles
    - _Requirements: 17.2_

  - [x] 1.5 Create AnimatedWrapper component at src/components/ui/animated-wrapper.tsx
    - Implement Framer Motion viewport animations
    - Support fade-up, fade-in, slide-left, slide-right variants
    - Implement useReducedMotion hook for accessibility
    - _Requirements: 20.1, 20.4_

  - [x] 1.6 Write property tests for design system components
    - **Property 18: Reduced Motion Preference**
    - Test that AnimatedWrapper respects prefers-reduced-motion
    - **Validates: Requirements 20.4**

- [x] 2. Checkpoint - Verify design system components
  - Ensure all UI components render correctly
  - Verify Tailwind classes are applied properly
  - Ask the user if questions arise

- [x] 3. Implement enhanced navigation system
  - [x] 3.1 Create navigation data structure at src/data/navigation.ts
    - Define NavItem interface with label, href, children
    - Create navigationItems array with all sections and sub-pages
    - _Requirements: 1.1_

  - [x] 3.2 Create NavDropdown component at src/components/navigation/NavDropdown.tsx
    - Implement hover-triggered dropdown menu
    - Style with glass morphism effect
    - Support keyboard navigation
    - _Requirements: 1.2_

  - [x] 3.3 Create MainNav component at src/components/navigation/MainNav.tsx
    - Render primary navigation items with dropdowns
    - Implement active state highlighting based on current route
    - Integrate with existing Navbar styling
    - _Requirements: 1.1, 1.4_

  - [x] 3.4 Create MobileNav component at src/components/navigation/MobileNav.tsx
    - Implement hamburger menu toggle
    - Create slide-out navigation panel
    - Support nested navigation items
    - _Requirements: 18.2_

  - [x] 3.5 Update Navbar component to use new navigation system
    - Replace existing navigation with MainNav/MobileNav
    - Maintain existing styling and logo
    - Ensure responsive breakpoint switching
    - _Requirements: 1.1, 18.2_

  - [x] 3.6 Create enhanced Breadcrumbs component at src/components/Breadcrumbs.tsx
    - Generate breadcrumb items from current route
    - Exclude breadcrumbs on homepage
    - Style consistently with design system
    - _Requirements: 1.5_

  - [x] 3.7 Write property tests for navigation
    - **Property 2: Navigation Item Completeness**
    - **Property 3: Active Navigation State**
    - **Property 4: Breadcrumb Conditional Rendering**
    - **Property 19: Mobile Navigation Behaviour**
    - **Validates: Requirements 1.1, 1.2, 1.4, 1.5, 18.2**

- [x] 4. Checkpoint - Verify navigation system
  - Test navigation dropdowns on desktop
  - Test mobile hamburger menu
  - Verify active states and breadcrumbs
  - Ask the user if questions arise

- [x] 5. Implement homepage sections
  - [x] 5.1 Create homepage data file at src/data/homepage.ts
    - Define hero content (headline, CTAs, trust badges)
    - Define three pillars data (Consulting, Engineering, Products)
    - Define products showcase data (Allama, DBLOCK)
    - Define industries data (5 verticals)
    - Define differentiators data (5 items with metrics)
    - Define testimonials data (placeholder format)
    - _Requirements: 2.1, 2.2, 2.3, 3.1, 4.1, 5.1, 6.1, 7.1_

  - [x] 5.2 Create HeroSection component at src/components/sections/homepage/HeroSection.tsx
    - Display headline "AI & Data Solutions That Transform Business"
    - Render two CTAs: "Schedule Consultation" and "Explore Products"
    - Display trust badges with metrics
    - Implement staggered entrance animations
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [x] 5.3 Create ThreePillarsSection component at src/components/sections/homepage/ThreePillarsSection.tsx
    - Render three pillar cards (Consulting, Engineering, Products)
    - Each card shows icon, title, description, features, link
    - Apply GlassCard styling with hover effects
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

  - [x] 5.4 Create ProductsShowcaseSection component at src/components/sections/homepage/ProductsShowcaseSection.tsx
    - Render Allama card with tagline, features, "Learn More" CTA
    - Render DBLOCK card with "Coming Soon" badge
    - Apply gradient borders and glass morphism
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [x] 5.5 Create IndustriesSection component at src/components/sections/homepage/IndustriesSection.tsx
    - Render five industry cards (Financial Services, Healthcare, Technology, Retail, Government)
    - Each card shows icon and value proposition
    - Link to corresponding solution pages
    - Implement responsive grid layout
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

  - [x] 5.6 Create WhyDigitransLabSection component at src/components/sections/homepage/WhyDigitransLabSection.tsx
    - Render five differentiators with proof points
    - Display metrics/statistics where applicable
    - Apply visual highlighting for key numbers
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [x] 5.7 Update TestimonialsSection component at src/components/sections/TestimonialsSection.tsx
    - Ensure testimonials display quote, author, title, company
    - Apply entrance animations when in view
    - Support placeholder data format
    - _Requirements: 7.1, 7.2, 7.4_

  - [x] 5.8 Create FinalCTASection component at src/components/sections/homepage/FinalCTASection.tsx
    - Display compelling headline
    - Render two CTAs: "Schedule Consultation" and "Explore Products"
    - Link to /contact and /products/allama respectively
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [x] 5.9 Create new HomePage component at src/components/pages/HomePage.tsx
    - Compose all seven sections in order
    - Integrate with existing Navbar and Footer
    - Maintain existing page structure patterns
    - _Requirements: 2.1-8.4_

  - [x] 5.10 Write property tests for homepage sections
    - **Property 5: Content Card Field Completeness** (pillars, industries, testimonials)
    - **Property 6: Internal Link Validity** (industry cards)
    - **Property 21: Differentiator Metric Display**
    - **Validates: Requirements 3.2, 5.2, 5.3, 6.2, 7.2**

- [x] 6. Checkpoint - Verify homepage implementation
  - Review all seven sections render correctly
  - Test navigation links from homepage
  - Verify responsive behaviour
  - Ask the user if questions arise

- [x] 7. Implement Allama product page
  - [x] 7.1 Create Allama data file at src/data/allama.ts
    - Define hero content with tagline
    - Define four value propositions (Alert Fatigue, AI-Native, Open Source, Enterprise-Grade)
    - Define features (Workflow Builder, AI Agents, Integrations, Case Management)
    - Define integration categories and tools
    - Define deployment options (Docker, AWS ECS, Kubernetes)
    - Define competitor comparisons (Splunk SOAR, XSOAR, Tines/Torq)
    - Define use cases
    - _Requirements: 9.2, 9.4_

  - [x] 7.2 Create ComparisonTable component at src/components/ui/comparison-table.tsx
    - Render competitor comparison data in table format
    - Highlight Allama advantages
    - Apply consistent styling
    - _Requirements: 9.7_

  - [x] 7.3 Create ArchitectureDiagram component at src/components/pages/products/ArchitectureDiagram.tsx
    - Render technical architecture visual
    - Use SVG or styled divs for diagram
    - _Requirements: 9.6_

  - [x] 7.4 Create AllamaPage component at src/components/pages/products/AllamaPage.tsx
    - Hero section with tagline and CTAs
    - Value propositions section
    - Feature deep dive sections
    - Integration list by category
    - Deployment options section
    - Competitive comparison tables
    - Final CTAs (Get Started Free, Book a Demo, Read Documentation)
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7_

  - [x] 7.5 Write unit tests for Allama page
    - Test all sections render correctly
    - Test CTA links point to correct destinations
    - _Requirements: 9.1-9.7_

- [x] 8. Implement DBLOCK product page
  - [x] 8.1 Create DBlockPage component at src/components/pages/products/DBlockPage.tsx
    - Hero with "Coming Soon" status
    - Teaser description
    - Email signup form for launch notifications
    - Implement email validation
    - _Requirements: 10.1, 10.2, 10.3, 10.4_

  - [x] 8.2 Write property test for email validation
    - **Property 12: Email Subscription Validation**
    - Test valid and invalid email formats
    - **Validates: Requirements 10.4**

- [x] 9. Checkpoint - Verify product pages
  - Test Allama page renders all sections
  - Test DBLOCK email signup validation
  - Verify navigation to product pages
  - Ask the user if questions arise

- [x] 10. Implement service pages
  - [x] 10.1 Create services data file at src/data/services.ts
    - Define data for AI Consulting, Data Engineering, Cloud Solutions, Custom Development
    - Include hero, deliverables, process, related content for each
    - _Requirements: 11.1, 11.2_

  - [x] 10.2 Create PageHero component at src/components/sections/shared/PageHero.tsx
    - Reusable hero for inner pages
    - Support headline, subheadline, breadcrumbs
    - Apply consistent styling
    - _Requirements: 11.2_

  - [x] 10.3 Create ServicePageTemplate component at src/components/pages/services/ServicePageTemplate.tsx
    - Hero section
    - Service description
    - Key deliverables grid
    - Process overview
    - Related case studies
    - Contact CTA
    - _Requirements: 11.2, 11.3_

  - [x] 10.4 Create AIConsultingPage at src/components/pages/services/AIConsultingPage.tsx
    - Use ServicePageTemplate with AI Consulting data
    - Include links to related solutions and products
    - _Requirements: 11.1, 11.4_

  - [x] 10.5 Create DataEngineeringPage at src/components/pages/services/DataEngineeringPage.tsx
    - Use ServicePageTemplate with Data Engineering data
    - _Requirements: 11.1, 11.4_

  - [x] 10.6 Create CloudSolutionsPage at src/components/pages/services/CloudSolutionsPage.tsx
    - Use ServicePageTemplate with Cloud Solutions data
    - _Requirements: 11.1, 11.4_

  - [x] 10.7 Create CustomDevelopmentPage at src/components/pages/services/CustomDevelopmentPage.tsx
    - Use ServicePageTemplate with Custom Development data
    - _Requirements: 11.1, 11.4_

  - [x] 10.8 Write property tests for service pages
    - **Property 7: Service Page Section Completeness**
    - **Property 6: Internal Link Validity** (service page links)
    - **Validates: Requirements 11.2, 11.4**

- [x] 11. Implement solution pages
  - [x] 11.1 Create solutions data file at src/data/solutions.ts
    - Define data for Financial Services, Healthcare, Technology
    - Include challenges, services, compliance, case studies for each
    - _Requirements: 12.1, 12.2, 12.3_

  - [x] 11.2 Create SolutionPageTemplate component at src/components/pages/solutions/SolutionPageTemplate.tsx
    - Industry-specific hero
    - Key challenges section
    - Relevant services grid
    - Compliance considerations (conditional)
    - Case studies
    - Contact CTA
    - _Requirements: 12.2, 12.3_

  - [x] 11.3 Create FinancialServicesPage at src/components/pages/solutions/FinancialServicesPage.tsx
    - Use SolutionPageTemplate with Financial Services data
    - Include compliance section (PCI-DSS, SOX, etc.)
    - _Requirements: 12.1, 12.3, 12.4_

  - [x] 11.4 Create HealthcarePage at src/components/pages/solutions/HealthcarePage.tsx
    - Use SolutionPageTemplate with Healthcare data
    - Include compliance section (HIPAA, etc.)
    - _Requirements: 12.1, 12.3, 12.4_

  - [x] 11.5 Create TechnologyPage at src/components/pages/solutions/TechnologyPage.tsx
    - Use SolutionPageTemplate with Technology data
    - _Requirements: 12.1, 12.4_

  - [x] 11.6 Write property tests for solution pages
    - **Property 8: Solution Page Section Completeness**
    - **Property 9: Solution Page Compliance Display**
    - **Validates: Requirements 12.2, 12.3**

- [x] 12. Checkpoint - Verify service and solution pages
  - Test all service pages render correctly
  - Test all solution pages render correctly
  - Verify internal links work
  - Ask the user if questions arise

- [x] 13. Implement University learning hub
  - [x] 13.1 Create university data file at src/data/university.ts
    - Define content items for tutorials, live-demos, tech-talks, webinars
    - Include placeholder content with thumbnails, titles, durations, tags
    - _Requirements: 13.1, 13.3_

  - [x] 13.2 Create ContentCard component at src/components/ui/content-card.tsx
    - Display thumbnail, title, duration, category tag, description
    - Apply hover effects
    - Link to content detail or external URL
    - _Requirements: 13.3_

  - [x] 13.3 Create UniversityHubPage at src/components/pages/university/UniversityHubPage.tsx
    - Featured content from each category
    - Category navigation cards
    - Search input
    - _Requirements: 13.1, 13.2, 13.5_

  - [x] 13.4 Create ContentListPage template at src/components/pages/university/ContentListPage.tsx
    - Category header
    - Filter controls (category, topic)
    - Content grid with ContentCards
    - Search functionality
    - _Requirements: 13.4, 13.5_

  - [x] 13.5 Create TutorialsPage at src/components/pages/university/TutorialsPage.tsx
    - Use ContentListPage with tutorials filter
    - _Requirements: 13.1_

  - [x] 13.6 Create LiveDemosPage at src/components/pages/university/LiveDemosPage.tsx
    - Use ContentListPage with live-demos filter
    - _Requirements: 13.1_

  - [x] 13.7 Create TechTalksPage at src/components/pages/university/TechTalksPage.tsx
    - Use ContentListPage with tech-talks filter
    - _Requirements: 13.1_

  - [x] 13.8 Create WebinarsPage at src/components/pages/university/WebinarsPage.tsx
    - Use ContentListPage with webinars filter
    - _Requirements: 13.1_

  - [x] 13.9 Write property tests for University hub
    - **Property 10: University Content Filtering**
    - **Property 11: University Content Search**
    - **Property 22: Featured University Content**
    - **Property 5: Content Card Field Completeness** (university content)
    - **Validates: Requirements 13.2, 13.3, 13.4, 13.5**

- [x] 14. Checkpoint - Verify University hub
  - Test hub landing page displays featured content
  - Test filtering and search functionality
  - Test all category pages render correctly
  - Ask the user if questions arise

- [x] 15. Implement resources and company pages
  - [x] 15.1 Create CaseStudiesPage at src/components/pages/resources/CaseStudiesPage.tsx
    - List case studies with featured image, title, excerpt, date, category
    - Link to individual case study pages
    - _Requirements: 14.2, 14.4_

  - [x] 15.2 Create DocumentationPage at src/components/pages/resources/DocumentationPage.tsx
    - Links to product documentation (Allama docs, etc.)
    - Organised by product/topic
    - _Requirements: 14.3_

  - [x] 15.3 Create AboutPage at src/components/pages/company/AboutPage.tsx
    - Company mission and vision
    - Company values
    - History/timeline
    - _Requirements: 15.1, 15.2_

  - [x] 15.4 Create TeamPage at src/components/pages/company/TeamPage.tsx
    - Team member cards with photo, name, title, bio
    - Leadership section
    - _Requirements: 15.1, 15.4_

  - [x] 15.5 Create InvestorsPage at src/components/pages/company/InvestorsPage.tsx
    - Investor relations information
    - Key metrics and milestones
    - _Requirements: 15.1_

  - [x] 15.6 Write property tests for company pages
    - **Property 5: Content Card Field Completeness** (team members)
    - **Validates: Requirements 15.4**

- [x] 16. Update Contact page
  - [x] 16.1 Enhance Contact page at src/components/pages/Contact.tsx
    - Ensure contact form with name, email, company, message fields
    - Implement form validation
    - Display email, phone, office locations
    - Integrate calendar booking component
    - _Requirements: 16.1, 16.2, 16.3, 16.4_

  - [x] 16.2 Write property test for contact form validation
    - **Property 13: Contact Form Validation**
    - Test required field validation
    - Test email format validation
    - **Validates: Requirements 16.3**

- [x] 17. Checkpoint - Verify resources, company, and contact pages
  - Test all pages render correctly
  - Test contact form validation
  - Verify calendar booking integration
  - Ask the user if questions arise

- [x] 18. Update routing and integrate all pages
  - [x] 18.1 Update App.tsx with new routes
    - Add routes for all new service pages
    - Add routes for all new solution pages
    - Add routes for product pages (Allama, DBLOCK)
    - Add routes for University hub and sub-pages
    - Add routes for resources pages
    - Add routes for company pages
    - Ensure existing routes are preserved
    - _Requirements: 1.3, 21.2, 21.4_

  - [x] 18.2 Update homepage route to use new HomePage component
    - Replace existing Home component with new HomePage
    - Ensure backward compatibility
    - _Requirements: 21.3_

  - [x] 18.3 Write property tests for routing
    - **Property 1: Route Accessibility**
    - **Property 20: Backward Compatibility**
    - Test all new routes render correctly
    - Test existing routes still work
    - **Validates: Requirements 1.3, 21.2, 21.3, 21.4**

- [x] 19. Implement SEO enhancements
  - [x] 19.1 Create SEO data file at src/data/seo.ts
    - Define meta tags for all pages
    - Define structured data schemas
    - _Requirements: 19.1, 19.2_

  - [x] 19.2 Enhance SEO component at src/components/SEO.tsx
    - Support page-specific meta tags
    - Support JSON-LD structured data injection
    - _Requirements: 19.1, 19.2_

  - [x] 19.3 Add SEO component to all new pages
    - Include appropriate title, description, keywords
    - Add structured data where applicable
    - _Requirements: 19.1, 19.2_

  - [x] 19.4 Update sitemap generation script
    - Include all new public routes
    - _Requirements: 19.3_

  - [x] 19.5 Verify semantic HTML on all pages
    - Ensure proper use of header, main, nav, footer, article, section
    - Verify heading hierarchy (h1 → h2 → h3)
    - _Requirements: 19.4, 19.5_

  - [x] 19.6 Write property tests for SEO
    - **Property 14: SEO Meta Tag Presence**
    - **Property 15: Semantic HTML Structure**
    - **Property 16: Structured Data Validity**
    - **Property 17: Sitemap Completeness**
    - **Validates: Requirements 19.1, 19.2, 19.3, 19.4, 19.5**

- [x] 20. Final checkpoint - Complete integration testing
  - Run all property tests
  - Verify all pages render correctly
  - Test navigation flow through entire site
  - Verify mobile responsiveness
  - Test form submissions
  - Verify SEO implementation
  - Ask the user if questions arise

## Notes

- All tasks including property tests are required for comprehensive coverage
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- The implementation preserves all existing functionality while adding new features
