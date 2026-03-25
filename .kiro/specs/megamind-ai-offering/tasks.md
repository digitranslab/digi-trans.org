# Implementation Plan: Megamind AI Offering

## Overview

Add Megamind product page, AI Models showcase page, three AI consulting service pages (AI Consulting, Sovereign AI, Agentic AI), plus homepage/navigation/footer/blog/route updates. All new content follows the existing data-driven architecture with TypeScript data files feeding reusable templates or custom page components.

## Tasks

- [x] 1. Create Megamind data file and product page component
  - [x] 1.1 Create `src/data/megamind.ts` with all exported data
    - Define and export interfaces: `MegamindHero`, `ProductVariant`, `Capability`, `MCPCategory`, `PrivacyFeature`, `CommunityStat`
    - Export `heroData` with tagline, headline, description, primaryCTA (Schedule Consultation → /contact), secondaryCTA (GitHub → digitranslab org)
    - Export `productVariants` array with 5 entries: Desktop, Web, Mobile, Server, Models (each with name, description, icon, status, features)
    - Export `capabilities` array with core capability entries (icon, title, description, capabilities list, marketingAngle)
    - Export `mcpCategories` array with 6 entries: Browser Automation, Data Analysis, Search & Research, Deep Research, Design Tools, Productivity (each with category, icon, tools array)
    - Export `privacyFeatures` array highlighting zero data collection, local JSON storage, GDPR-compliant analytics, data portability
    - Export `communityStats` array with 4 entries: 4.5M+ downloads, 16K+ members, 100+ contributors, 2800+ PRs
    - Include Apache 2.0 licensing reference and GitHub/docs links (megamind.ai/docs)
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7_

  - [x] 1.2 Create Megamind SVG logo component
    - Create a simple SVG logo component or inline SVG for use in the MegamindPage hero section
    - _Requirements: 1.1, 14.1_

  - [x] 1.3 Create `src/components/pages/products/MegamindPage.tsx`
    - Import Navbar, Footer, GlassCard, GradientButton, SectionHeader, AnimatedWrapper, TypewriterGradientText (same pattern as AllamaPage)
    - Implement Hero section with badge, TypewriterGradientText headline, description, dual CTAs, Megamind SVG logo
    - Implement Product Suite section: grid of 5 product variant cards using GlassCard
    - Implement Core Capabilities section: alternating left/right feature sections with icon, title, description, capabilities list
    - Implement MCP Integrations section: grid of 6 MCP category cards using GlassCard
    - Implement Privacy & Sovereignty section: feature list with icons
    - Implement Community Stats section: 4 metric cards
    - Implement CTA section with GradientButton
    - Set `document.title` containing "Megamind" and "Open-Source AI Platform" in useEffect
    - Set meta description referencing open-source ChatGPT alternative, 4.5M+ downloads, sovereign AI
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 12.1, 14.1_

  - [ ]* 1.4 Write property test: Valid Lucide icon names in megamind.ts
    - **Property 5: Valid Lucide icon names in data objects**
    - Extract all icon name strings from megamind.ts exports and verify each resolves to a valid export from `lucide-react`
    - **Validates: Requirements 14.4**

- [x] 2. Create AI Models data file and page component
  - [x] 2.1 Create `src/data/models.ts` with all exported data
    - Define and export interfaces: `ModelCard`, `UpcomingModel`, `FineTuningService`
    - Export `heroData` with badge, headline, description, CTA
    - Export `modelPhilosophy` describing compact, efficient, agent-optimized approach
    - Export `modelCards` array with 4 entries: Jan-v1 (4B, reasoning & tool calling, 91.1% SimpleQA), Jan-Nano-128k (4B, 128k context), Jan-Nano-32k (4B, compact research), Lucy (1.7B, edge/mobile)
    - Each model card: name, parameters, specialty, benchmark (metric + value), hardware (minimum + recommended RAM), deploymentOptions array, huggingFaceUrl, icon
    - Export `upcomingModels` array with 2 entries: Jan-v2 (multimodal agent), Ichigo (voice AI) with "Coming Soon" indicators
    - Export `fineTuningService` with title, description, startingCost (under $100 on H200), hardware, capabilities
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

  - [x] 2.2 Create `src/components/pages/ModelsPage.tsx`
    - Import Navbar, Footer, GlassCard, GradientButton, SectionHeader, AnimatedWrapper, TypewriterGradientText
    - Implement Hero section with badge, headline, description, CTA
    - Implement Model Philosophy section
    - Implement Model Cards section: grid of 4 model cards showing name, parameters, specialty, benchmark, RAM, deployment options, HuggingFace link
    - Implement Upcoming Models section with "Coming Soon" badges for Jan-v2 and Ichigo
    - Implement Fine-Tuning Service section with cost info
    - Implement CTA section
    - Set `document.title` containing "AI Models" and meta description referencing fine-tuned models, benchmarks, deployment options
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 12.5, 14.2_

  - [ ]* 2.3 Write property test: Model card completeness
    - **Property 1: Model card completeness**
    - Verify each model card in `modelCards` has non-empty name, parameters, specialty, benchmark.metric, benchmark.value, hardware.minimum, hardware.recommended, at least one deploymentOption, and valid huggingFaceUrl
    - **Validates: Requirements 5.3**

- [x] 3. Checkpoint - Ensure Megamind and Models pages compile
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Create three AI consulting service data entries and page wrappers
  - [x] 4.1 Add `ai-consulting` ServiceData entry to `src/data/services-new.ts`
    - Add complete ServiceData object with slug "ai-consulting", category, hero (badge, title, description), overview
    - Include 6 service categories in deliverables: AI Strategy & Assessment, Agentic AI Implementation, Workflow AI Automation, Sovereign AI Deployment, Custom Model Fine-Tuning, AI Operations & Support
    - Include valueProps referencing "60% work about work" stat
    - Include process steps, technologies, case studies, FAQs
    - Include relatedContent with at least one entry linking to `/products/megamind` or `/models`
    - Reference Megamind platform and MCP as core enabling technologies in overview/deliverables
    - Set ctaText
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 10.1, 10.3_

  - [x] 4.2 Add `sovereign-ai` ServiceData entry to `src/data/services-new.ts`
    - Add complete ServiceData object with slug "sovereign-ai"
    - Explain sovereign AI as complete organizational control over data, models, infrastructure, code
    - Include deployment options: on-premise, air-gapped, private cloud
    - Include target sectors: Government & Defense, Healthcare, Financial Services, Legal, Manufacturing, Education
    - Include compliance coverage: GDPR, HIPAA, SOC2, FedRAMP, national data sovereignty laws
    - Include sovereign vs cloud AI comparison in overview or deliverables
    - Include relatedContent with at least one entry linking to `/products/megamind`
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 10.1, 10.3_

  - [x] 4.3 Add `agentic-ai` ServiceData entry to `src/data/services-new.ts`
    - Add complete ServiceData object with slug "agentic-ai"
    - Explain agentic AI as autonomous systems for complex tasks without supervision
    - Detail MCP integration across 6 categories: Browser Automation, Data Analysis, Search & Research, Deep Research, Productivity, Design
    - Describe workflow integrations with n8n, Continue.dev, Tabby, llmcord (Discord bots)
    - Include real-world automation scenarios with measurable outcomes
    - Include relatedContent with at least one entry linking to `/products/megamind`
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 10.1, 10.3_

  - [x] 4.4 Create `src/components/pages/services/AIConsultingPage.tsx`
    - Thin wrapper: import ServicePageTemplate and newServicesData, render `<ServicePageTemplate service={newServicesData["ai-consulting"]} />`
    - Set `document.title` containing "AI Consulting Services" and meta description
    - _Requirements: 2.1, 12.2_

  - [x] 4.5 Create `src/components/pages/services/SovereignAIPage.tsx`
    - Thin wrapper: import ServicePageTemplate and newServicesData, render `<ServicePageTemplate service={newServicesData["sovereign-ai"]} />`
    - Set `document.title` containing "Sovereign AI" and meta description referencing on-premise AI, data residency, regulatory compliance
    - _Requirements: 3.1, 12.3_

  - [x] 4.6 Create `src/components/pages/services/AgenticAIServicePage.tsx`
    - Thin wrapper: import ServicePageTemplate and newServicesData, render `<ServicePageTemplate service={newServicesData["agentic-ai"]} />`
    - Set `document.title` containing "Agentic AI" and meta description referencing autonomous AI agents and workflow automation
    - _Requirements: 4.1, 12.4_

  - [ ]* 4.7 Write property test: New ServiceData conformance and Megamind cross-linking
    - **Property 2: New ServiceData conformance and Megamind cross-linking**
    - For each of the 3 new ServiceData keys ("ai-consulting", "sovereign-ai", "agentic-ai"), verify non-empty slug, category, hero.badge, hero.title, hero.description, overview, ctaText, at least one deliverable, at least one process step, at least one relatedContent entry, and at least one relatedContent entry whose href contains `/products/megamind` or `/models`
    - **Validates: Requirements 10.1, 10.3**

- [x] 5. Checkpoint - Ensure service pages compile
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Register routes in App.tsx
  - [x] 6.1 Add imports and routes for all new page components
    - Import MegamindPage, ModelsPage, AIConsultingPage, SovereignAIPage, AgenticAIServicePage
    - Add route `/products/megamind` → MegamindPage
    - Replace existing `/services/ai-consulting` redirect with direct route to AIConsultingPage
    - Add route `/services/sovereign-ai` → SovereignAIPage
    - Add route `/services/agentic-ai` → AgenticAIServicePage
    - Add route `/models` → ModelsPage
    - Add redirect routes: `/platform/megamind` → `/products/megamind`, `/platform/models` → `/models`
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_

- [x] 7. Update navigation, footer, and homepage data
  - [x] 7.1 Update `src/data/navigation.ts`
    - Add to Services children (before existing 3): AI Consulting (href `/services/ai-consulting`), Agentic AI & Automation (href `/services/agentic-ai`), Sovereign AI (href `/services/sovereign-ai`)
    - Add to Products children (before existing Allama/DBLOCK): Megamind (href `/products/megamind`, description referencing open-source AI platform)
    - _Requirements: 7.1, 7.2, 7.3_

  - [x] 7.2 Update `src/components/Footer.tsx`
    - Add to Services column: AI Consulting (`/services/ai-consulting`), Sovereign AI (`/services/sovereign-ai`), Agentic AI & Automation (`/services/agentic-ai`)
    - Add to Products column: Megamind (`/products/megamind`)
    - _Requirements: 8.1, 8.2_

  - [x] 7.3 Update `src/data/homepage.ts`
    - Add Megamind entry to `productsData` array: name "Megamind", tagline "Open-source AI platform", description mentioning ChatGPT alternative and local/cloud models, features ["Local & Cloud Models", "MCP Tool Integration", "Custom AI Assistants", "OpenAI-Compatible API"], href `/products/megamind`, status "live", ctaLabel "Learn More"
    - Update at least one pillar's features to reference AI consulting
    - Add community trust stats (4.5M+ downloads, 16K+ community) to hero trustBadges or differentiators
    - _Requirements: 6.1, 6.2, 6.3, 13.1, 13.2_

- [x] 8. Add blog posts to legacyBlog.ts
  - [x] 8.1 Add six new `LegacyBlogPost` entries to `src/data/legacyBlog.ts`
    - Add one blog post per service area: AI Strategy, Agentic AI, Workflow Automation, Sovereign AI, Fine-Tuning, AI Operations
    - Each post: slug, title, excerpt (under 200 characters), category, date (recent, newest first), content (minimum 3 paragraphs separated by double newlines), image URL
    - Ensure new posts sort newest-first when combined with existing posts
    - _Requirements: 11.1, 11.2, 11.3, 11.4_

  - [ ]* 8.2 Write property test: Blog posts sorted by date descending
    - **Property 3: Blog posts sorted by date descending**
    - Verify that the full `legacyBlogPosts` array is sorted with newest dates first
    - **Validates: Requirements 11.2**

  - [ ]* 8.3 Write property test: Blog post field constraints
    - **Property 4: Blog post field constraints**
    - For each new blog post, verify excerpt < 200 chars, content has >= 3 paragraphs (double newline separated), and slug/title/category/date/image are non-empty
    - **Validates: Requirements 11.4**

- [x] 9. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- The design uses TypeScript/React throughout — all implementation uses the same stack
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- The existing `/services/ai-consulting` redirect is intentionally replaced with the new AI Consulting page (Design Decision 3)
