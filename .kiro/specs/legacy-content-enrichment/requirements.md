# Requirements Document

## Introduction

This feature covers the comprehensive extraction and integration of all remaining valuable content from the legacy DigiTransLab WordPress website (`digitrans-website/`) into the new React/TypeScript website. The legacy site contains rich industrial AI consulting content across use cases, role-based solutions, blog articles, company pages, and legal pages that have not yet been migrated. The goal is to ensure no valuable content is left behind and that the new website reads like a professional consulting firm's site.

## Glossary

- **Legacy_Website**: The WordPress static export located in `digitrans-website/` containing the original DigiTransLab content
- **New_Website**: The React/TypeScript Vite application that is the current website under development
- **Use_Case_Page**: A page describing a specific industrial AI application (e.g., Predictive Maintenance, Process Control)
- **Role_Page**: A page targeting a specific executive role (CEO, CDO, CIO, Head of Data Lab, Head of Operations)
- **Data_File**: A TypeScript file in `src/data/` that stores structured content for pages
- **Page_Component**: A React component in `src/components/pages/` that renders a page
- **Content_Integration_System**: The overall system responsible for extracting legacy content and rendering it in the new website

## Requirements

### Requirement 1: Use Case Pages Integration

**User Story:** As a website visitor, I want to browse detailed industrial AI use case pages, so that I can understand how DigiTransLab solves specific operational challenges.

#### Acceptance Criteria

1. WHEN a visitor navigates to a use case page, THE Content_Integration_System SHALL display the use case title, subtitle, description, key benefits, and industry applicability extracted from the Legacy_Website
2. THE Content_Integration_System SHALL provide dedicated pages for each of the following nine use cases: Data Integration, Supply Chain Optimization, Flow Optimization, Production Optimization, Process Control, Quality Control, Predictive Maintenance, Energy Management, and Safety & Risk Detection
3. WHEN a use case page is rendered, THE Content_Integration_System SHALL include a data file entry in `src/data/useCases.ts` containing the structured content for that use case
4. WHEN a visitor views a use case page, THE Content_Integration_System SHALL display at least two key benefits with titles and descriptions for each use case
5. WHEN a visitor views a use case page, THE Content_Integration_System SHALL display links to relevant industry pages (Energy & Mining, Manufacturing, Smart City, Transportation & Logistics)

### Requirement 2: Role-Based Solution Pages

**User Story:** As an executive visitor (CEO, CDO, CIO, Head of Data Lab, Head of Operations), I want to see content tailored to my role, so that I can understand how DigiTransLab addresses my specific challenges.

#### Acceptance Criteria

1. THE Content_Integration_System SHALL provide dedicated pages for each of the five executive roles: CEO, CDO, CIO, Head of Data Lab, and Head of Operations
2. WHEN a visitor navigates to a role page, THE Content_Integration_System SHALL display the role title, a headline describing the role's challenge, a description of how DigiTransLab helps, and a list of specific value propositions extracted from the Legacy_Website
3. WHEN a visitor views a role page, THE Content_Integration_System SHALL display a section with relevant use cases linked to that role
4. WHEN a visitor views a role page, THE Content_Integration_System SHALL include a call-to-action section encouraging the visitor to schedule a meeting

### Requirement 3: Hydrogen Industry Page

**User Story:** As a visitor interested in hydrogen energy, I want to see a dedicated hydrogen industry page, so that I can understand DigiTransLab's capabilities in this emerging sector.

#### Acceptance Criteria

1. WHEN a visitor navigates to the hydrogen page, THE Content_Integration_System SHALL display content about hydrogen production, storage, transportation, and utilization challenges
2. WHEN a visitor views the hydrogen page, THE Content_Integration_System SHALL display digital solutions specific to the hydrogen industry extracted from the Legacy_Website
3. THE Content_Integration_System SHALL include the hydrogen page in the industry navigation under the Industries menu

### Requirement 4: Vision and Why Us Pages

**User Story:** As a prospective client, I want to read about DigiTransLab's vision and differentiators, so that I can evaluate them as a potential partner.

#### Acceptance Criteria

1. WHEN a visitor navigates to the vision page, THE Content_Integration_System SHALL display content about next-generation business efficiency, the wall of operationalization, and the value proposition of a full-service AI operator
2. WHEN a visitor navigates to the why-us page, THE Content_Integration_System SHALL display differentiators, specialist team descriptions, and certifications (ISO 27001, Kubernetes, ITIL) extracted from the Legacy_Website
3. WHEN a visitor views the why-us page, THE Content_Integration_System SHALL display cloud partnership logos (Azure, Google Cloud, AWS) and certification badges

### Requirement 5: Services Page Content Enrichment

**User Story:** As a visitor, I want to see the full "Design & Build" and "Deploy & Run" service methodology, so that I can understand DigiTransLab's end-to-end approach.

#### Acceptance Criteria

1. WHEN a visitor navigates to the services overview page, THE Content_Integration_System SHALL display the five-step process (Project Framing, Proof of Value, Proof of Scale, Industrialization, Full-Scale Industry 4.0) extracted from the Legacy_Website
2. WHEN a visitor views the services page, THE Content_Integration_System SHALL display the "Design & Build" section describing 360-degree survey, custom applications, data storage, AI models, and backend services
3. WHEN a visitor views the services page, THE Content_Integration_System SHALL display the "Deploy & Run" section describing 24/7 DevOps and MLOps support, SLAs, and security management
4. WHEN a visitor views the services page, THE Content_Integration_System SHALL display the team composition (industry specialist consultants, data management specialists, agile software engineers, expert AI model builders)

### Requirement 6: Blog Articles from Legacy Website

**User Story:** As a visitor, I want to read technical blog articles from the legacy website, so that I can benefit from DigiTransLab's thought leadership content.

#### Acceptance Criteria

1. THE Content_Integration_System SHALL create blog post entries for the following legacy articles: "Unleashing the power of LLM in the industry", "Seeing through Computer Vision: Convolution 101", "Crunching the numbers: Covid19 challenges in agriculture", "Computer Vision with PyTorch" book announcement, and "RAG LLM on Azure"
2. WHEN a visitor navigates to a legacy blog post, THE Content_Integration_System SHALL display the article title, content, category, and publication metadata
3. WHEN a visitor views the blog listing page, THE Content_Integration_System SHALL include the legacy blog articles alongside existing blog posts

### Requirement 7: Customers Page Content

**User Story:** As a prospective client, I want to see customer testimonials and case study information, so that I can evaluate DigiTransLab's track record.

#### Acceptance Criteria

1. WHEN a visitor navigates to the customers or portfolio page, THE Content_Integration_System SHALL display the customer-focused messaging extracted from the Legacy_Website describing hands-on partnership and AI-powered operational improvements
2. WHEN a visitor views the customers page, THE Content_Integration_System SHALL include a call-to-action for scheduling a meeting

### Requirement 8: Careers Page Content

**User Story:** As a potential job candidate, I want to learn about working at DigiTransLab, so that I can decide whether to apply.

#### Acceptance Criteria

1. WHEN a visitor navigates to the careers or contact page, THE Content_Integration_System SHALL display career-related content describing the company culture, the types of candidates sought (engineering, math, tech backgrounds), and the work environment
2. WHEN a visitor views the careers content, THE Content_Integration_System SHALL include messaging about shaping the future of industry and the team culture extracted from the Legacy_Website

### Requirement 9: Legal Pages Content

**User Story:** As a website visitor, I want to access privacy policy and terms & conditions pages, so that I can understand how my data is handled.

#### Acceptance Criteria

1. WHEN a visitor navigates to the privacy policy page, THE Content_Integration_System SHALL display privacy policy content covering data collection, GDPR compliance, third-party sharing, and data security practices
2. WHEN a visitor navigates to the terms and conditions page, THE Content_Integration_System SHALL display terms of service content
3. THE Content_Integration_System SHALL ensure the privacy and terms pages are accessible from the footer navigation

### Requirement 10: Navigation Updates

**User Story:** As a website visitor, I want comprehensive navigation that includes all new content sections, so that I can easily find use cases, role-based solutions, and other content.

#### Acceptance Criteria

1. WHEN the navigation is rendered, THE Content_Integration_System SHALL include a "Solutions" dropdown with sub-sections for "By Industry", "By Role", and "By Use Case" mirroring the Legacy_Website navigation structure
2. WHEN a visitor opens the "By Use Case" navigation, THE Content_Integration_System SHALL display links to all nine use case pages
3. WHEN a visitor opens the "By Role" navigation, THE Content_Integration_System SHALL display links to all five role-based pages
4. THE Content_Integration_System SHALL include the hydrogen page in the "By Industry" navigation section

### Requirement 11: Data Architecture for New Content

**User Story:** As a developer, I want structured data files for all new content, so that the content is maintainable and consistent.

#### Acceptance Criteria

1. THE Content_Integration_System SHALL store use case content in a dedicated `src/data/useCases.ts` data file with typed interfaces
2. THE Content_Integration_System SHALL store role-based page content in a dedicated `src/data/roles.ts` data file with typed interfaces
3. THE Content_Integration_System SHALL store vision and why-us page content in appropriate data files
4. WHEN content data is structured, THE Content_Integration_System SHALL use TypeScript interfaces that include fields for title, subtitle, description, key benefits, related industries, and call-to-action text
