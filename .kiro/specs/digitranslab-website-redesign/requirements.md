# Requirements Document

## Introduction

This document defines the requirements for a comprehensive design coherence overhaul of the Digitrans website. The goal is to migrate every page, section, and component from legacy design patterns (GlassCard, framer-motion page animations, UniverseLights, old Card components) to the established premium design language (backdrop-blur cards, floating gradient orbs, grid pattern overlays, numbered cards, alternating layouts, gradient metrics). The premium design language is already implemented in the Homepage, Footer, MegamindPage, AllamaPage, DBlockPage, ModelsPage, ServicePageTemplate, OurServicesPage, and AnimatedDataViz. All remaining pages must be brought into alignment.

## Glossary

- **Premium_Design_Language**: The target visual system established in MegamindPage and ServicePageTemplate, characterized by bg-black backgrounds, floating gradient orbs (purple/blue/indigo at 10-15% opacity with blur-[100px]), grid overlays at opacity-[0.03] with 60px grid lines, backdrop-blur cards (bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl), gradient icon containers, numbered items with font-mono, SectionHeader component, TypewriterGradientText, GradientButton CTAs, and AnimatedWrapper for animations.
- **Legacy_Design_Pattern**: The old visual system using GlassCard component, framer-motion page-level animations (motion.div with initial/animate/transition), UniverseLights background, Card component from shadcn, and inconsistent color palettes.
- **Design_System**: The collection of shared UI components (GradientButton, SectionHeader, AnimatedWrapper, TypewriterGradientText) and styling conventions that define the Premium_Design_Language.
- **Template_Page**: A reusable page component that renders dynamic content for multiple routes (SolutionPageTemplate, UseCasePageTemplate, RolePageTemplate, ServicePageTemplate, ContentListPage).
- **Standalone_Page**: A page component that renders unique content for a single route (About, Contact, Blog, Portfolio, etc.).
- **Legacy_Page**: A page component from the old website structure that is still routed but uses outdated design patterns and may contain placeholder or thin content.
- **Shared_Component**: A component used across multiple pages (Navbar, Footer, Hero, GridBackground, PromoBanner, PageHero).
- **Backdrop_Blur_Card**: The standard card pattern in the Premium_Design_Language: bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl with hover:border-purple-500/30 transition-all duration-300.
- **Floating_Gradient_Orb**: A decorative background element using absolute positioning, rounded-full, bg-purple-600/15 or bg-blue-600/10, blur-[100px], and animate-pulse.
- **Grid_Overlay**: A subtle grid pattern overlay using backgroundImage with linear-gradient at opacity-[0.03] and 60px grid spacing.
- **Redesign_Scope**: All active routes in App.tsx that render page components not yet using the Premium_Design_Language.

## Requirements

### Requirement 1: SolutionPageTemplate Redesign Completion

**User Story:** As a visitor browsing industry solution pages, I want a consistent premium visual experience across all 10 industry pages, so that the brand feels cohesive and professional.

#### Acceptance Criteria

1. THE SolutionPageTemplate SHALL render all sections using Backdrop_Blur_Card patterns instead of GlassCard components.
2. THE SolutionPageTemplate SHALL include Floating_Gradient_Orb elements in the hero section with purple, blue, and indigo orbs at 10-15% opacity.
3. THE SolutionPageTemplate SHALL include a Grid_Overlay in the hero section at opacity-[0.03] with 60px grid lines.
4. THE SolutionPageTemplate SHALL use TypewriterGradientText for the hero heading, SectionHeader for section titles, and GradientButton with Calendar icon for primary CTAs.
5. THE SolutionPageTemplate SHALL use AnimatedWrapper instead of framer-motion for all page-level animations.
6. THE SolutionPageTemplate SHALL render numbered items using font-mono text-gray-600 with padStart(2, '0') formatting.
7. THE SolutionPageTemplate SHALL apply hover transitions with duration-300 to duration-500 on all interactive card elements.
8. WHEN a visitor views any of the 10 industry pages (Financial Services, Healthcare, Technology, Retail, Manufacturing, Government, Energy & Mining, Smart City, Transportation & Logistics, Hydrogen), THE SolutionPageTemplate SHALL render with identical visual patterns to the ServicePageTemplate hero, card, and CTA sections.
9. THE SolutionPageTemplate SHALL include a bottom CTA section with gradient text heading and ambient gradient background with blur orbs.

### Requirement 2: UseCasePageTemplate Premium Alignment Verification

**User Story:** As a visitor exploring use case pages, I want the same premium design quality as the service pages, so that the experience feels unified.

#### Acceptance Criteria

1. THE UseCasePageTemplate SHALL use Backdrop_Blur_Card patterns for all benefit and industry link cards.
2. THE UseCasePageTemplate SHALL include Floating_Gradient_Orb elements and Grid_Overlay in the hero section matching the Premium_Design_Language specification.
3. THE UseCasePageTemplate SHALL use AnimatedWrapper for all animations instead of framer-motion page-level animations.
4. WHEN a visitor views any of the 9 use case pages (Data Integration, Supply Chain, Flow Optimization, Production Optimization, Process Control, Quality Control, Predictive Maintenance, Energy Management, Safety & Risk Detection), THE UseCasePageTemplate SHALL render with visual consistency matching the ServicePageTemplate.
5. THE UseCasePageTemplate SHALL use the SectionHeader component for all section titles with badge, title, and description props.

### Requirement 3: RolePageTemplate Premium Alignment Verification

**User Story:** As a C-level executive visiting a role-specific page, I want a polished premium experience, so that I trust the company's technical capabilities.

#### Acceptance Criteria

1. THE RolePageTemplate SHALL use Backdrop_Blur_Card patterns for all value proposition and use case link cards.
2. THE RolePageTemplate SHALL include Floating_Gradient_Orb elements and Grid_Overlay in the hero section matching the Premium_Design_Language specification.
3. THE RolePageTemplate SHALL use AnimatedWrapper for all animations instead of framer-motion page-level animations.
4. WHEN a visitor views any of the 5 role pages (CEO, CDO, CIO, Head of Data Lab, Head of Operations), THE RolePageTemplate SHALL render with visual consistency matching the ServicePageTemplate.
5. THE RolePageTemplate SHALL use CheckCircle icons with green gradient backgrounds for value proposition items.

### Requirement 4: About Page Redesign

**User Story:** As a visitor learning about Digitrans, I want the About page to reflect the same premium quality as the homepage, so that the company appears credible and modern.

#### Acceptance Criteria

1. THE About page SHALL use Backdrop_Blur_Card patterns for all content cards instead of GlassCard components.
2. THE About page SHALL include Floating_Gradient_Orb elements and Grid_Overlay in the hero section.
3. THE About page SHALL use TypewriterGradientText for the hero heading and SectionHeader for all section titles.
4. THE About page SHALL use AnimatedWrapper for all animations instead of framer-motion page-level animations.
5. THE About page SHALL use the Premium_Design_Language color palette (purple-400/500, blue-400/500, indigo-400, gray-400/500/600/800/900) consistently across all sections.
6. THE About page SHALL include a bottom CTA section with gradient text heading and GradientButton with Calendar icon.

### Requirement 5: Contact Page Redesign

**User Story:** As a visitor wanting to reach out, I want the Contact page to feel premium and trustworthy, so that I am confident submitting my information.

#### Acceptance Criteria

1. THE Contact page SHALL use Backdrop_Blur_Card patterns for the form container and info cards instead of GlassCard components.
2. THE Contact page SHALL include Floating_Gradient_Orb elements and Grid_Overlay in the hero section.
3. THE Contact page SHALL use TypewriterGradientText for the hero heading.
4. THE Contact page SHALL style form inputs with bg-gray-900/50 borders matching the Premium_Design_Language card borders (border-gray-800/50, focus:border-purple-500/50).
5. THE Contact page SHALL use AnimatedWrapper for all animations instead of framer-motion page-level animations.
6. THE Contact page SHALL preserve Netlify Forms functionality (honeypot field, AJAX submission, form-name attribute) during the redesign.

### Requirement 6: Blog Listing Page Redesign

**User Story:** As a visitor browsing blog content, I want the blog listing page to match the premium design of other pages, so that the reading experience feels cohesive.

#### Acceptance Criteria

1. THE Blog page SHALL use Backdrop_Blur_Card patterns for all blog post cards instead of GlassCard components.
2. THE Blog page SHALL include Floating_Gradient_Orb elements and Grid_Overlay in the hero section.
3. THE Blog page SHALL use TypewriterGradientText for the hero heading and SectionHeader for section titles.
4. THE Blog page SHALL use AnimatedWrapper for all animations instead of framer-motion page-level animations.
5. THE Blog page SHALL style category filter tags with bg-purple-900/40 text-purple-300 border border-purple-500/30 rounded-full matching the Premium_Design_Language badge pattern.
6. THE Blog page SHALL style the search input with bg-gray-900/50 border-gray-800/50 matching the Premium_Design_Language.

### Requirement 7: BlogPost Template Redesign

**User Story:** As a reader viewing a blog article, I want the post layout to feel premium and readable, so that I enjoy consuming the content.

#### Acceptance Criteria

1. THE BlogPost template SHALL use a bg-black background with Floating_Gradient_Orb elements in the hero area.
2. THE BlogPost template SHALL style the article content area with bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl.
3. THE BlogPost template SHALL use TypewriterGradientText for the post title.
4. THE BlogPost template SHALL use AnimatedWrapper for entrance animations instead of framer-motion page-level animations.
5. WHEN a visitor views any of the 9 individual blog post pages, THE BlogPost template SHALL render with consistent Premium_Design_Language styling.
6. THE BlogPost template SHALL style inline code and code blocks with bg-gray-800/50 border border-gray-700/50 rounded-lg.

### Requirement 8: Portfolio Page Redesign

**User Story:** As a potential client reviewing case studies, I want the Portfolio page to showcase work with premium visual quality, so that I am impressed by the company's capabilities.

#### Acceptance Criteria

1. THE Portfolio page SHALL use Backdrop_Blur_Card patterns for all project cards instead of GlassCard components.
2. THE Portfolio page SHALL include Floating_Gradient_Orb elements and Grid_Overlay in the hero section.
3. THE Portfolio page SHALL use TypewriterGradientText for the hero heading and SectionHeader for section titles.
4. THE Portfolio page SHALL use AnimatedWrapper for all animations instead of framer-motion page-level animations.
5. THE Portfolio page SHALL style metric badges with bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent for values.
6. THE Portfolio page SHALL remove all direct framer-motion imports and usage.

### Requirement 9: Clients Page Redesign

**User Story:** As a visitor evaluating Digitrans, I want the Clients page to present client stories with premium design quality, so that I see evidence of enterprise credibility.

#### Acceptance Criteria

1. THE Clients page SHALL use Backdrop_Blur_Card patterns for all case study and testimonial cards instead of GlassCard components.
2. THE Clients page SHALL include Floating_Gradient_Orb elements and Grid_Overlay in the hero section.
3. THE Clients page SHALL use TypewriterGradientText for the hero heading and SectionHeader for section titles.
4. THE Clients page SHALL use AnimatedWrapper for all animations instead of framer-motion page-level animations.
5. THE Clients page SHALL remove all direct framer-motion imports and usage.
6. THE Clients page SHALL style result metrics with gradient text matching the Premium_Design_Language.

### Requirement 10: Products Hub Page Redesign

**User Story:** As a visitor exploring Digitrans products, I want the Products hub page to match the premium quality of individual product pages, so that the product lineup feels cohesive.

#### Acceptance Criteria

1. THE Products page SHALL use Backdrop_Blur_Card patterns for all product cards instead of GlassCard components.
2. THE Products page SHALL include Floating_Gradient_Orb elements and Grid_Overlay in the hero section.
3. THE Products page SHALL use TypewriterGradientText for the hero heading.
4. THE Products page SHALL use AnimatedWrapper for all animations instead of framer-motion page-level animations.
5. THE Products page SHALL remove all direct framer-motion imports and GlassCard usage.
6. THE Products page SHALL use GradientButton with ArrowRight icon for product navigation CTAs.


### Requirement 11: VisionPage Premium Alignment Verification

**User Story:** As a visitor reading about Digitrans's vision, I want the page to feel as premium as the homepage, so that the company's forward-thinking message is reinforced visually.

#### Acceptance Criteria

1. THE VisionPage SHALL use Backdrop_Blur_Card patterns for all content cards.
2. THE VisionPage SHALL include Floating_Gradient_Orb elements and Grid_Overlay in the hero section.
3. THE VisionPage SHALL use TypewriterGradientText for the hero heading and SectionHeader for section titles.
4. THE VisionPage SHALL use AnimatedWrapper for all animations instead of framer-motion page-level animations.
5. THE VisionPage SHALL use the Premium_Design_Language color palette consistently.
6. THE VisionPage SHALL include a bottom CTA section with gradient text heading and GradientButton.

### Requirement 12: WhyUsPage Premium Alignment Verification

**User Story:** As a visitor evaluating Digitrans against competitors, I want the Why Us page to convey premium quality, so that the differentiators are visually compelling.

#### Acceptance Criteria

1. THE WhyUsPage SHALL use Backdrop_Blur_Card patterns for all differentiator and certification cards.
2. THE WhyUsPage SHALL include Floating_Gradient_Orb elements and Grid_Overlay in the hero section.
3. THE WhyUsPage SHALL use TypewriterGradientText for the hero heading and SectionHeader for section titles.
4. THE WhyUsPage SHALL use AnimatedWrapper for all animations instead of framer-motion page-level animations.
5. THE WhyUsPage SHALL use the Premium_Design_Language color palette consistently.

### Requirement 13: Locations Page Redesign

**User Story:** As a visitor looking for office locations, I want the Locations page to match the premium design of other pages, so that the global presence feels credible.

#### Acceptance Criteria

1. THE Locations page SHALL use Backdrop_Blur_Card patterns for all location cards instead of GlassCard and Card components.
2. THE Locations page SHALL include Floating_Gradient_Orb elements and Grid_Overlay in the hero section.
3. THE Locations page SHALL use TypewriterGradientText for the hero heading.
4. THE Locations page SHALL use AnimatedWrapper for all animations instead of framer-motion page-level animations.
5. THE Locations page SHALL remove all GlassCard, Card, and direct framer-motion imports.
6. THE Locations page SHALL remove the RegistrationModal import and replace with GradientButton navigating to /contact.

### Requirement 14: CeoProfile Page Redesign

**User Story:** As a visitor viewing the CEO's profile, I want the page to reflect premium executive branding, so that the leadership feels credible.

#### Acceptance Criteria

1. THE CeoProfile page SHALL use Backdrop_Blur_Card patterns for all experience and achievement cards instead of GlassCard and Card components.
2. THE CeoProfile page SHALL include Floating_Gradient_Orb elements and Grid_Overlay in the hero section.
3. THE CeoProfile page SHALL use TypewriterGradientText for the hero heading.
4. THE CeoProfile page SHALL use AnimatedWrapper for all animations instead of framer-motion page-level animations.
5. THE CeoProfile page SHALL remove all GlassCard, Card, Dialog, and direct framer-motion imports.
6. THE CeoProfile page SHALL use the Premium_Design_Language color palette for all text and decorative elements.

### Requirement 15: UniversityHubPage Premium Alignment Verification

**User Story:** As a learner visiting the University hub, I want the page to feel premium and inviting, so that I am motivated to explore learning content.

#### Acceptance Criteria

1. THE UniversityHubPage SHALL use Backdrop_Blur_Card patterns for all category and content cards.
2. THE UniversityHubPage SHALL include Floating_Gradient_Orb elements and Grid_Overlay in the hero section matching the Premium_Design_Language.
3. THE UniversityHubPage SHALL use TypewriterGradientText for the hero heading and SectionHeader for section titles.
4. THE UniversityHubPage SHALL use AnimatedWrapper for all animations.
5. THE UniversityHubPage SHALL style the search input with bg-gray-900/50 border-gray-800/50 matching the Premium_Design_Language.

### Requirement 16: ContentListPage Template Redesign

**User Story:** As a learner browsing tutorials, demos, tech talks, or webinars, I want a consistent premium experience, so that the learning platform feels professional.

#### Acceptance Criteria

1. THE ContentListPage template SHALL use Backdrop_Blur_Card patterns for all content item cards.
2. THE ContentListPage template SHALL include Floating_Gradient_Orb elements and Grid_Overlay in the hero section.
3. THE ContentListPage template SHALL use TypewriterGradientText for the hero heading and SectionHeader for section titles.
4. THE ContentListPage template SHALL use AnimatedWrapper for all animations instead of framer-motion page-level animations.
5. WHEN a visitor views any of the 4 university content pages (Tutorials, Live Demos, Tech Talks, Webinars), THE ContentListPage template SHALL render with visual consistency matching the Premium_Design_Language.

### Requirement 17: Legal Pages Alignment (Old Set)

**User Story:** As a visitor reviewing legal documents, I want the legal pages to feel consistent with the rest of the site, so that the brand feels unified even on compliance pages.

#### Acceptance Criteria

1. THE Privacy page SHALL replace framer-motion animations with AnimatedWrapper.
2. THE Terms page SHALL replace framer-motion animations with AnimatedWrapper.
3. THE Cookies page SHALL replace framer-motion animations with AnimatedWrapper.
4. THE Security page SHALL replace framer-motion animations with AnimatedWrapper.
5. WHEN a visitor views any of the 4 old legal pages (Privacy, Terms, Cookies, Security), THE page SHALL use bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl for content sections instead of raw bg-gray-900/50 with motion.div wrappers.
6. THE old legal pages SHALL use the same hero pattern as the new legal pages (DataRetention, DataProtectionAddendum, CodeOfConduct, ModernSlavery) for visual consistency.

### Requirement 18: Legal Pages Alignment (New Set)

**User Story:** As a visitor reviewing newer legal documents, I want these pages to use AnimatedWrapper instead of framer-motion, so that animation patterns are consistent site-wide.

#### Acceptance Criteria

1. THE DataRetention page SHALL replace framer-motion animations with AnimatedWrapper.
2. THE DataProtectionAddendum page SHALL replace framer-motion animations with AnimatedWrapper.
3. THE CodeOfConduct page SHALL replace framer-motion animations with AnimatedWrapper.
4. THE ModernSlavery page SHALL replace framer-motion animations with AnimatedWrapper.
5. WHEN a visitor views any of the 4 new legal pages, THE page SHALL use AnimatedWrapper for all entrance animations.

### Requirement 19: Legacy Service Pages Redesign

**User Story:** As a visitor landing on a legacy service page, I want the page to match the premium design of the new service pages, so that the experience is not jarring.

#### Acceptance Criteria

1. THE MvpDevelopment page SHALL be redesigned using the Premium_Design_Language with Backdrop_Blur_Card patterns, Floating_Gradient_Orb elements, and Grid_Overlay.
2. THE ProductStrategy page SHALL be redesigned using the Premium_Design_Language.
3. THE FullStackDevelopment page SHALL be redesigned using the Premium_Design_Language.
4. THE DevOpsScaling page SHALL be redesigned using the Premium_Design_Language.
5. THE AIConsultancy page SHALL be redesigned using the Premium_Design_Language.
6. THE AIAccounting page SHALL be redesigned using the Premium_Design_Language.
7. WHEN a visitor views any legacy service page, THE page SHALL remove all framer-motion imports, Card imports, ProgressBar, BackToTop, StickyCTA, and UniverseLights usage, replacing them with Premium_Design_Language equivalents.

### Requirement 20: Legacy Solution Pages Redesign

**User Story:** As a visitor landing on a legacy solution page, I want the page to match the premium design of the new solution pages, so that the experience is consistent.

#### Acceptance Criteria

1. THE TechnicalCofounder page SHALL be redesigned using the Premium_Design_Language with Backdrop_Blur_Card patterns, Floating_Gradient_Orb elements, and Grid_Overlay.
2. THE SaaSConsulting page SHALL be redesigned using the Premium_Design_Language.
3. THE LegacyModernization page SHALL be redesigned using the Premium_Design_Language.
4. WHEN a visitor views any legacy solution page, THE page SHALL remove all framer-motion imports, Card imports, and UniverseLights usage, replacing them with Premium_Design_Language equivalents.

### Requirement 21: Legacy Product Pages Redesign

**User Story:** As a visitor landing on a legacy product page, I want the page to match the premium design of MegamindPage and AllamaPage, so that the product lineup feels unified.

#### Acceptance Criteria

1. THE Ledger page SHALL be redesigned using the Premium_Design_Language with Backdrop_Blur_Card patterns, Floating_Gradient_Orb elements, and Grid_Overlay.
2. THE uTrack page SHALL be redesigned using the Premium_Design_Language.
3. THE Ember page SHALL be redesigned using the Premium_Design_Language.
4. THE GoDash page SHALL be redesigned using the Premium_Design_Language.
5. THE BigBytes page SHALL be redesigned using the Premium_Design_Language.
6. THE KozmoAI page SHALL be redesigned using the Premium_Design_Language.
7. WHEN a visitor views any legacy product page, THE page SHALL remove all framer-motion imports, Card imports, Button imports, BlogCard imports, and UniverseLights usage, replacing them with Premium_Design_Language equivalents.

### Requirement 22: Client Sub-Pages Redesign

**User Story:** As a visitor exploring client segments, I want the client sub-pages to match the premium design, so that the enterprise credibility is visually reinforced.

#### Acceptance Criteria

1. THE Fortune500 page SHALL be redesigned using the Premium_Design_Language with Backdrop_Blur_Card patterns, Floating_Gradient_Orb elements, and Grid_Overlay.
2. THE GovAgencies page SHALL be redesigned using the Premium_Design_Language.
3. THE TechStartups page SHALL be redesigned using the Premium_Design_Language.
4. WHEN a visitor views any client sub-page, THE page SHALL remove all framer-motion imports, Card imports, and UniverseLights usage, replacing them with Premium_Design_Language equivalents.

### Requirement 23: SolutionsHub Page Redesign

**User Story:** As a visitor exploring solution accelerators, I want the SolutionsHub page to match the premium design, so that the solutions feel enterprise-grade.

#### Acceptance Criteria

1. THE SolutionsHub page SHALL use Backdrop_Blur_Card patterns for all solution cards instead of GlassCard and Card components.
2. THE SolutionsHub page SHALL include Floating_Gradient_Orb elements and Grid_Overlay in the hero section.
3. THE SolutionsHub page SHALL use TypewriterGradientText for the hero heading and SectionHeader for section titles.
4. THE SolutionsHub page SHALL use AnimatedWrapper for all animations instead of framer-motion page-level animations.
5. THE SolutionsHub page SHALL remove all GlassCard, Card, Button, and direct framer-motion imports.

### Requirement 24: Solutions Hub Sub-Pages Redesign

**User Story:** As a visitor viewing individual solution accelerators, I want each page to match the premium design, so that the technical depth is visually compelling.

#### Acceptance Criteria

1. THE IoTAccelerator page SHALL be redesigned using the Premium_Design_Language with Backdrop_Blur_Card patterns, Floating_Gradient_Orb elements, and Grid_Overlay.
2. THE AIAssistant page SHALL be redesigned using the Premium_Design_Language.
3. THE ContainerOptimizer page SHALL be redesigned using the Premium_Design_Language.
4. THE DevOpsAccelerator page SHALL be redesigned using the Premium_Design_Language.
5. WHEN a visitor views any solutions hub sub-page, THE page SHALL use AnimatedWrapper for all animations and remove all framer-motion page-level animation imports.

### Requirement 25: Blog Post Pages Redesign

**User Story:** As a reader viewing individual blog articles, I want each blog post page to use the premium design, so that the reading experience is consistent.

#### Acceptance Criteria

1. WHEN a visitor views any of the 9 individual blog post pages (EnablingClientMaximizeIT, BuildingEnterpriseDataLakes, MLOpsBestPractices, CloudNativeArchitecturePatterns, RealTimeAnalyticsKafka, DigitalTransformationBanking, CloudMigrationHealthcare, AIRetailPersonalization, MultiAgentOrchestration), THE page SHALL use the Premium_Design_Language.
2. THE individual blog post pages SHALL use Backdrop_Blur_Card patterns for content sections.
3. THE individual blog post pages SHALL include Floating_Gradient_Orb elements in the hero area.
4. THE individual blog post pages SHALL use TypewriterGradientText for the post title.
5. THE individual blog post pages SHALL use AnimatedWrapper for all animations instead of framer-motion page-level animations.


### Requirement 26: GridBackground Component Redesign

**User Story:** As a visitor on any page, I want the global background to complement the premium design language, so that there are no visual conflicts between the background and page content.

#### Acceptance Criteria

1. THE GridBackground component SHALL remove the falling animated lines (Line components with framer-motion) that conflict with the Premium_Design_Language.
2. THE GridBackground component SHALL remove the radial-gradient dot pattern that conflicts with the Grid_Overlay used in page sections.
3. THE GridBackground component SHALL use a minimal bg-black background that does not compete with per-page Floating_Gradient_Orb elements.
4. THE GridBackground component SHALL remove all framer-motion imports and usage.
5. IF the GridBackground component is no longer needed after redesign, THEN THE App component SHALL remove the GridBackground import and rendering.

### Requirement 27: Hero Component Redesign

**User Story:** As a visitor landing on the homepage, I want the Hero section to use the same premium patterns as the rest of the site, so that the first impression is cohesive.

#### Acceptance Criteria

1. THE Hero component SHALL replace framer-motion animations with AnimatedWrapper or CSS animations for all entrance effects.
2. THE Hero component SHALL remove the UniverseLights component import and rendering.
3. THE Hero component SHALL remove the particle effects div with animate-float-slow/medium/fast classes if they conflict with the Premium_Design_Language.
4. THE Hero component SHALL use Backdrop_Blur_Card patterns for the service cards grid instead of Card components with motion.div wrappers.
5. THE Hero component SHALL remove the Dialog component for service card details, replacing with navigation to the service page.
6. THE Hero component SHALL maintain the video background, client logo scroll, and CTA buttons functionality.
7. THE Hero component SHALL use the Premium_Design_Language color palette for all gradient text and decorative elements.

### Requirement 28: Navbar Component Alignment

**User Story:** As a visitor navigating the site, I want the navigation bar to feel consistent with the premium design language, so that the navigation experience is seamless.

#### Acceptance Criteria

1. THE Navbar component SHALL maintain the bg-black/90 backdrop-blur-lg styling that aligns with the Premium_Design_Language.
2. THE Navbar component SHALL use border-white/10 or border-gray-800/50 for the bottom border, consistent with the Premium_Design_Language border conventions.
3. THE Navbar component SHALL position below the PromoBanner at top-12 when the banner is visible.
4. THE MainNav component SHALL style dropdown menus with bg-gray-900/95 backdrop-blur-lg border border-gray-800/50 rounded-xl matching the Premium_Design_Language.
5. THE MobileNav component SHALL style the mobile menu with bg-gray-900/98 backdrop-blur-lg border border-gray-800/50 matching the Premium_Design_Language.
6. THE NavDropdown component SHALL style hover states with text-purple-400 and bg-purple-500/10 matching the Premium_Design_Language interactive patterns.

### Requirement 29: PromoBanner Component Alignment

**User Story:** As a site administrator, I want the PromoBanner to be ready for future use with premium styling, so that promotional messages match the site design.

#### Acceptance Criteria

1. WHILE the PromoBanner is disabled (returns null), THE PromoBanner component SHALL retain a premium-styled implementation for future activation.
2. WHEN the PromoBanner is activated in the future, THE PromoBanner SHALL use bg-gradient-to-r from-purple-900/80 to-indigo-900/80 backdrop-blur-sm styling matching the Premium_Design_Language.
3. THE PromoBanner SHALL use text-purple-200 for banner text and text-purple-400 for links when activated.

### Requirement 30: GlassCard Component Deprecation

**User Story:** As a developer maintaining the codebase, I want GlassCard usage to be eliminated from all pages, so that the design system is consistent and maintainable.

#### Acceptance Criteria

1. WHEN all page redesigns are complete, THE codebase SHALL contain zero imports of the GlassCard component in page-level components.
2. THE GlassCard component file SHALL be marked as deprecated with a code comment indicating it is no longer used.
3. IF any page still imports GlassCard after redesign, THEN THE developer SHALL replace the GlassCard usage with Backdrop_Blur_Card inline patterns.

### Requirement 31: Framer-Motion Page-Level Animation Removal

**User Story:** As a developer maintaining the codebase, I want framer-motion to be used only in specific low-level components (AnimatedDataViz, Hero client logo scroll), so that animation patterns are consistent.

#### Acceptance Criteria

1. WHEN all page redesigns are complete, THE page-level components SHALL not import motion from framer-motion for entrance animations.
2. THE page-level components SHALL use AnimatedWrapper for all scroll-triggered and entrance animations.
3. IF a component requires framer-motion for a specific interactive animation (e.g., counter, scroll-linked), THEN THE component SHALL document the reason in a code comment.
4. THE following components SHALL retain framer-motion usage as exceptions: AnimatedDataViz (counters), Hero (client logo infinite scroll), GridBackground (if retained).

### Requirement 32: Color Palette Consistency Audit

**User Story:** As a visitor browsing the site, I want consistent colors across all pages, so that the brand identity is unified.

#### Acceptance Criteria

1. THE website SHALL use purple-400/500 as the primary accent color across all pages.
2. THE website SHALL use blue-400/500 as the secondary accent color across all pages.
3. THE website SHALL use indigo-400 as the tertiary accent color for gradient endpoints.
4. THE website SHALL use gray-400/500/600/800/900 for text hierarchy and card backgrounds across all pages.
5. THE website SHALL use green-400/500 with emerald-500 for success indicators and checkmarks across all pages.
6. WHEN a page uses pink-400, yellow-400, or other off-palette colors for primary UI elements, THE page SHALL be updated to use the standard purple/blue/indigo palette.
7. THE gradient text pattern SHALL consistently use bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 for section headings across all pages.

### Requirement 33: Typography and Spacing Consistency

**User Story:** As a visitor reading content across pages, I want consistent typography and spacing, so that the reading experience is comfortable and predictable.

#### Acceptance Criteria

1. THE hero sections across all pages SHALL use pt-36 pb-24 padding consistently.
2. THE content sections across all pages SHALL use py-20 padding consistently.
3. THE CTA sections across all pages SHALL use py-24 padding consistently.
4. THE hero headings across all pages SHALL use text-4xl md:text-5xl lg:text-6xl font-bold sizing.
5. THE section headings across all pages SHALL use the SectionHeader component with consistent badge, title, and description formatting.
6. THE body text across all pages SHALL use text-gray-300/90 or text-gray-400 for descriptions and text-gray-500 for secondary text.

### Requirement 34: Card Hover and Transition Consistency

**User Story:** As a visitor interacting with cards across the site, I want consistent hover effects, so that the interactive experience feels polished.

#### Acceptance Criteria

1. THE Backdrop_Blur_Card elements across all pages SHALL use hover:border-purple-500/30 for border hover effects.
2. THE Backdrop_Blur_Card elements across all pages SHALL use transition-all duration-300 for hover transitions.
3. THE card group hover effects SHALL include a gradient overlay (bg-gradient-to-br from-purple-500/5 to-blue-500/5) that appears on hover with opacity transition duration-500.
4. THE card text elements SHALL use group-hover:text-purple-300 transition-colors for heading hover effects.
5. THE link cards SHALL include ArrowRight icons with group-hover:translate-x-1 transition-transform for directional affordance.

### Requirement 35: Applications Page Redesign

**User Story:** As a visitor viewing the Applications page, I want the page to match the premium design, so that the experience is consistent with the rest of the site.

#### Acceptance Criteria

1. THE Applications page SHALL use the Premium_Design_Language with Backdrop_Blur_Card patterns, Floating_Gradient_Orb elements, and Grid_Overlay.
2. THE Applications page SHALL use TypewriterGradientText for the hero heading.
3. THE Applications page SHALL use AnimatedWrapper for all animations instead of framer-motion page-level animations.
4. THE Applications page SHALL use GradientButton for all CTAs.

### Requirement 36: SEO and Metadata Consistency

**User Story:** As a search engine crawler indexing the site, I want consistent metadata patterns across all pages, so that the site ranks well and displays correctly in search results.

#### Acceptance Criteria

1. WHEN a page is redesigned, THE page SHALL include the SEO component with title, description, and canonicalUrl props.
2. THE page titles SHALL follow the pattern "{Page Title} | Digitrans" consistently.
3. THE meta descriptions SHALL be descriptive and unique for each page.
4. WHEN a page uses document.title or meta tag manipulation directly, THE page SHALL be updated to use the SEO component instead.

### Requirement 37: Responsive Design Consistency

**User Story:** As a mobile visitor, I want all redesigned pages to be fully responsive, so that the premium experience works on all screen sizes.

#### Acceptance Criteria

1. THE hero sections SHALL use responsive text sizing (text-4xl md:text-5xl lg:text-6xl) across all pages.
2. THE card grids SHALL use responsive column layouts (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) across all pages.
3. THE container elements SHALL use container mx-auto px-4 for consistent horizontal padding across all pages.
4. THE Floating_Gradient_Orb elements SHALL be positioned to avoid horizontal overflow on mobile viewports.
5. THE CTA button groups SHALL stack vertically on mobile (flex-col sm:flex-row) across all pages.

### Requirement 38: Accessibility Compliance

**User Story:** As a visitor using assistive technology, I want all redesigned pages to maintain accessibility standards, so that the site is usable by everyone.

#### Acceptance Criteria

1. THE redesigned pages SHALL maintain semantic HTML structure (header, main, section, nav, footer elements).
2. THE interactive elements SHALL maintain keyboard focus indicators visible against the dark background.
3. THE color contrast between text and backgrounds SHALL meet WCAG 2.1 AA minimum contrast ratios (4.5:1 for normal text, 3:1 for large text).
4. THE images and icons SHALL include appropriate alt text or aria-label attributes.
5. THE navigation components SHALL include aria-label attributes for landmark regions.
6. THE form elements on the Contact page SHALL include associated label elements or aria-label attributes.
