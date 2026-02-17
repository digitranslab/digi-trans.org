# Implementation Plan: Legacy Content Enrichment

## Overview

Integrate all remaining legacy DigiTransLab WordPress content into the new React/TypeScript website. This involves creating data files, page templates, individual page components, route definitions, and navigation updates. Tasks are ordered to build foundational data first, then templates, then pages, then wiring.

## Tasks

- [x] 1. Create use case data file and page template
  - [x] 1.1 Create `src/data/useCases.ts` with TypeScript interfaces (`UseCaseData`, `UseCaseBenefit`) and all 9 use case data entries extracted from legacy pages (Data Integration, Supply Chain Optimization, Flow Optimization, Production Optimization, Process Control, Quality Control, Predictive Maintenance, Energy Management, Safety & Risk Detection). Each entry must include slug, hero (badge, title, subtitle, description), benefits (at least 2 per entry with title and description), relatedIndustries array, and ctaText.
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 11.1, 11.4_

  - [x] 1.2 Create `src/components/pages/use-cases/UseCasePageTemplate.tsx` — a reusable template component that accepts `UseCaseData` and renders hero section, description, key benefits grid, related industries links, and CTA section. Follow the same pattern as `SolutionPageTemplate.tsx`.
    - _Requirements: 1.1, 1.4, 1.5_

  - [ ]* 1.3 Write property test for use case data completeness
    - **Property 1: Use case data completeness**
    - **Validates: Requirements 1.1, 1.4, 1.5, 11.4**

- [x] 2. Create individual use case page components and routes
  - [x] 2.1 Create 9 use case page components in `src/components/pages/use-cases/`: `DataIntegrationPage.tsx`, `SupplyChainPage.tsx`, `FlowOptimizationPage.tsx`, `ProductionOptimizationPage.tsx`, `ProcessControlPage.tsx`, `QualityControlPage.tsx`, `PredictiveMaintenancePage.tsx`, `EnergyManagementPage.tsx`, `SafetyRiskPage.tsx`. Each imports its data from `useCases.ts` and renders via `UseCasePageTemplate`.
    - _Requirements: 1.1, 1.2_

  - [x] 2.2 Add routes for all 9 use case pages in `App.tsx` under `/use-cases/:slug` paths.
    - _Requirements: 1.2_

- [x] 3. Checkpoint - Ensure use case pages render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Create role-based data file and page template
  - [x] 4.1 Create `src/data/roles.ts` with TypeScript interfaces (`RoleData`, `RoleValueProp`) and all 5 role data entries extracted from legacy pages (CEO, CDO, CIO, Head of Data Lab, Head of Operations). Each entry must include slug, hero, valueProps, detailedSection, relatedUseCases, ctaText, and ctaSubtitle.
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 11.2_

  - [x] 4.2 Create `src/components/pages/roles/RolePageTemplate.tsx` — a reusable template component that accepts `RoleData` and renders hero, challenge description, value propositions, detailed section, related use cases, and CTA. Follow the same visual pattern as `SolutionPageTemplate.tsx`.
    - _Requirements: 2.2, 2.3, 2.4_

  - [ ]* 4.3 Write property test for role data completeness
    - **Property 2: Role data completeness**
    - **Validates: Requirements 2.2, 2.3, 2.4**

- [x] 5. Create individual role page components and routes
  - [x] 5.1 Create 5 role page components in `src/components/pages/roles/`: `CeoPage.tsx`, `CdoPage.tsx`, `CioPage.tsx`, `HeadOfDataLabPage.tsx`, `HeadOfOperationsPage.tsx`. Each imports its data from `roles.ts` and renders via `RolePageTemplate`.
    - _Requirements: 2.1_

  - [x] 5.2 Add routes for all 5 role pages in `App.tsx` under `/roles/:slug` paths.
    - _Requirements: 2.1_

- [x] 6. Create Hydrogen, Vision, and Why Us pages
  - [x] 6.1 Create `src/components/pages/solutions/HydrogenPage.tsx` with content about hydrogen production, storage, transportation, utilization challenges, and digital solutions. Add hydrogen data entry to `src/data/solutions.ts` following the existing `SolutionData` interface. Add route in `App.tsx`.
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 6.2 Create `src/data/vision.ts` and `src/components/pages/VisionPage.tsx` with content about next-generation business efficiency, the wall of operationalization (80-85% stuck in POC), and the full-service AI operator value proposition. Add route in `App.tsx`.
    - _Requirements: 4.1_

  - [x] 6.3 Create `src/data/whyUs.ts` and `src/components/pages/WhyUsPage.tsx` with differentiators, specialist team descriptions, certifications (ISO 27001, Kubernetes, ITIL), and cloud partnership info (Azure, Google Cloud, AWS). Add route in `App.tsx`.
    - _Requirements: 4.2, 4.3_

- [x] 7. Checkpoint - Ensure all new pages render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Enrich existing pages with legacy content
  - [x] 8.1 Enrich the Services page (`src/components/pages/Services.tsx`) with the 5-step methodology (Project Framing, Proof of Value, Proof of Scale, Industrialization, Full-Scale Industry 4.0), "Design & Build" section, "Deploy & Run" section, and team composition. Create `src/data/services-methodology.ts` if needed.
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

  - [x] 8.2 Create `src/data/legacyBlog.ts` with blog post entries for legacy articles: "Unleashing the power of LLM in the industry", "Seeing through Computer Vision: Convolution 101", "Crunching the numbers: Covid19 challenges in agriculture", "Computer Vision with PyTorch", and "RAG LLM on Azure". Update the Blog listing page to include these entries.
    - _Requirements: 6.1, 6.2, 6.3_

  - [ ]* 8.3 Write property test for legacy blog post data completeness
    - **Property 3: Legacy blog post data completeness**
    - **Validates: Requirements 6.2**

  - [x] 8.4 Enrich the Clients/Portfolio page with customer-focused messaging from the legacy site describing hands-on partnership and AI-powered operational improvements. Add CTA section.
    - _Requirements: 7.1, 7.2_

  - [x] 8.5 Add careers culture content to the About or Contact page: company culture description, types of candidates sought, work environment messaging from the legacy site.
    - _Requirements: 8.1, 8.2_

  - [x] 8.6 Enrich the Privacy page (`src/components/pages/legal/Privacy.tsx`) with GDPR compliance content, data collection details, and third-party sharing policies from the legacy site. Enrich the Terms page similarly. Verify footer links to privacy and terms pages.
    - _Requirements: 9.1, 9.2, 9.3_

- [x] 9. Update navigation with all new content sections
  - [x] 9.1 Update `src/data/navigation.ts` to restructure the "Industries" / "Solutions" dropdown to include three sub-sections: "By Industry" (existing industries + Hydrogen), "By Role" (5 role pages), and "By Use Case" (9 use case pages). Update the Navbar component if needed to support the three-column dropdown.
    - _Requirements: 10.1, 10.2, 10.3, 10.4_

  - [x] 9.2 Add navigation links for Vision and Why Us pages under the "About" section or as standalone nav items.
    - _Requirements: 4.1, 4.2_

  - [ ]* 9.3 Write property test for navigation use case links completeness
    - **Property 4: Navigation use case links completeness**
    - **Validates: Requirements 10.2**

  - [ ]* 9.4 Write property test for navigation role links completeness
    - **Property 5: Navigation role links completeness**
    - **Validates: Requirements 10.3**

- [x] 10. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- All content should be extracted from the legacy WordPress pages in `digitrans-website/` and written in professional consulting language
- Follow existing code patterns: data files in `src/data/`, page components in `src/components/pages/`, reusable templates for similar page types
- Property tests validate universal correctness properties across all data entries
- Unit tests validate specific examples and edge cases
