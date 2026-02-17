# Design Document: Legacy Content Enrichment

## Overview

This design covers the integration of all remaining legacy DigiTransLab WordPress content into the new React/TypeScript website. The legacy site contains nine industrial AI use case pages, five role-based executive pages, a hydrogen industry page, vision/why-us pages, services methodology content, blog articles, customer content, careers content, and legal pages. The new website already has a well-established pattern of data files (`src/data/*.ts`) driving page components (`src/components/pages/`), and this design follows those same patterns.

The approach is to:
1. Create new data files for use cases and roles content
2. Create reusable page templates for use case and role pages
3. Enrich existing pages (services, about, blog) with legacy content
4. Update navigation to expose all new content
5. Add routes for all new pages

## Architecture

The new content follows the existing architecture:

```
src/
├── data/
│   ├── useCases.ts          # NEW: 9 use case data entries
│   ├── roles.ts             # NEW: 5 role-based page data entries
│   ├── hydrogen.ts          # NEW: Hydrogen industry page data
│   ├── vision.ts            # NEW: Vision page content
│   ├── whyUs.ts             # NEW: Why Us page content (differentiators, certs)
│   ├── legacyBlog.ts        # NEW: Legacy blog article entries
│   ├── solutions.ts         # MODIFIED: add hydrogen entry
│   ├── navigation.ts        # MODIFIED: add use case, role, hydrogen nav items
│   └── homepage.ts          # EXISTING: no changes needed
├── components/pages/
│   ├── use-cases/
│   │   ├── UseCasePageTemplate.tsx  # NEW: reusable template
│   │   ├── DataIntegrationPage.tsx  # NEW
│   │   ├── SupplyChainPage.tsx      # NEW
│   │   ├── FlowOptimizationPage.tsx # NEW
│   │   ├── ProductionOptimizationPage.tsx # NEW
│   │   ├── ProcessControlPage.tsx   # NEW
│   │   ├── QualityControlPage.tsx   # NEW
│   │   ├── PredictiveMaintenancePage.tsx  # NEW
│   │   ├── EnergyManagementPage.tsx # NEW
│   │   └── SafetyRiskPage.tsx       # NEW
│   ├── roles/
│   │   ├── RolePageTemplate.tsx     # NEW: reusable template
│   │   ├── CeoPage.tsx             # NEW
│   │   ├── CdoPage.tsx             # NEW
│   │   ├── CioPage.tsx             # NEW
│   │   ├── HeadOfDataLabPage.tsx   # NEW
│   │   └── HeadOfOperationsPage.tsx # NEW
│   ├── solutions/
│   │   └── HydrogenPage.tsx        # NEW
│   ├── VisionPage.tsx              # NEW
│   ├── WhyUsPage.tsx               # NEW
│   ├── Services.tsx                # MODIFIED: enrich with legacy content
│   ├── About.tsx                   # MODIFIED: add careers culture content
│   └── Blog.tsx                    # MODIFIED: include legacy blog entries
└── App.tsx                         # MODIFIED: add all new routes
```

## Components and Interfaces

### Data Interfaces

#### UseCaseData (src/data/useCases.ts)

```typescript
export interface UseCaseBenefit {
  title: string;
  description: string;
}

export interface UseCaseData {
  slug: string;
  category: "use-case";
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  benefits: UseCaseBenefit[];
  relatedIndustries: {
    name: string;
    href: string;
  }[];
  ctaText: string;
}
```

#### RoleData (src/data/roles.ts)

```typescript
export interface RoleValueProp {
  title: string;
  description?: string;
}

export interface RoleData {
  slug: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  valueProps: RoleValueProp[];
  detailedSection: {
    title: string;
    content: string;
  };
  relatedUseCases: {
    name: string;
    href: string;
  }[];
  ctaText: string;
  ctaSubtitle: string;
}
```

#### LegacyBlogPost (src/data/legacyBlog.ts)

```typescript
export interface LegacyBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  content: string;
  image?: string;
}
```

### Page Templates

#### UseCasePageTemplate

A reusable component that accepts `UseCaseData` and renders:
- Hero section with badge ("Use Case"), title, subtitle
- Description section
- Key Benefits grid (2-column layout with benefit cards)
- Related Industries carousel/grid
- CTA section with "Schedule a meeting" button

This follows the same pattern as `SolutionPageTemplate` but adapted for use case content structure.

#### RolePageTemplate

A reusable component that accepts `RoleData` and renders:
- Hero section with badge ("Your Role"), role title, subtitle
- Description of the role's challenges
- "We allow you to:" value propositions list
- Detailed section with deeper content
- Related Use Cases grid
- CTA section

### Navigation Updates

The navigation in `src/data/navigation.ts` will be updated to add:

```typescript
// Under Industries, add:
{ label: "Hydrogen", href: "/solutions/hydrogen" }

// New top-level or sub-section "By Role":
{ label: "CEO", href: "/roles/ceo" }
{ label: "CDO", href: "/roles/cdo" }
{ label: "CIO", href: "/roles/cio" }
{ label: "Head of Data Lab", href: "/roles/head-of-data-lab" }
{ label: "Head of Operations", href: "/roles/head-of-operations" }

// New "By Use Case" sub-section:
{ label: "Data Integration", href: "/use-cases/data-integration" }
{ label: "Supply Chain Optimization", href: "/use-cases/supply-chain" }
{ label: "Flow Optimization", href: "/use-cases/flow-optimization" }
{ label: "Production Optimization", href: "/use-cases/production-optimization" }
{ label: "Process Control", href: "/use-cases/process-control" }
{ label: "Quality Control", href: "/use-cases/quality-control" }
{ label: "Predictive Maintenance", href: "/use-cases/predictive-maintenance" }
{ label: "Energy Management", href: "/use-cases/energy-management" }
{ label: "Safety & Risk Detection", href: "/use-cases/safety-risk-detection" }
```

### Route Additions (App.tsx)

New routes to add:
- `/use-cases/:slug` — 9 use case pages
- `/roles/:slug` — 5 role pages
- `/solutions/hydrogen` — Hydrogen industry page
- `/vision` — Vision page
- `/why-us` — Why Us page
- `/blog/:slug` — Legacy blog article routes

## Data Models

### Use Case Content (9 entries)

Each use case entry follows the `UseCaseData` interface. Content is extracted from the legacy WordPress pages. Example:

```typescript
"predictive-maintenance": {
  slug: "predictive-maintenance",
  category: "use-case",
  hero: {
    badge: "Use Case",
    title: "Predictive Maintenance",
    subtitle: "Anticipation is the name of the game",
    description: "Use data-driven insights to predict equipment failures..."
  },
  benefits: [
    {
      title: "Anticipate breakdowns before they happen",
      description: "Use site-wide historical and individual machine-generated data..."
    },
    {
      title: "Predict and prepare for asset failure",
      description: "Don't get caught off guard when asset failure is inevitable..."
    }
  ],
  relatedIndustries: [
    { name: "Energy & Mining", href: "/solutions/energy-mining" },
    { name: "Manufacturing", href: "/solutions/manufacturing" },
    { name: "Smart City", href: "/solutions/smart-city" },
    { name: "Transportation & Logistics", href: "/solutions/transportation-logistics" }
  ],
  ctaText: "Schedule a meeting"
}
```

### Role Content (5 entries)

Each role entry follows the `RoleData` interface. Example:

```typescript
"ceo": {
  slug: "ceo",
  hero: {
    badge: "Your Role",
    title: "CEO",
    subtitle: "Leading your company into the future",
    description: "As CEO, one of your main responsibilities is making sure..."
  },
  valueProps: [
    { title: "Quickly assess the impact of the AI project" },
    { title: "Measure ROI" },
    { title: "Retain ownership of your IP" }
  ],
  detailedSection: {
    title: "Ensure the return on AI for your business",
    content: "To integrate and implement AI technology..."
  },
  relatedUseCases: [...],
  ctaText: "Ready to reap the rewards?",
  ctaSubtitle: "Lead your business into the future..."
}
```

### Services Methodology Data

The services page will be enriched with the 5-step process methodology:

```typescript
export interface ServiceStep {
  index: number;
  title: string;
  description: string;
}

export interface ServiceMethodology {
  steps: ServiceStep[];
  designBuild: { title: string; content: string; teamComposition: string[] };
  deployRun: { title: string; content: string; features: string[] };
}
```

### Vision & Why Us Data

Structured content for the vision page (operationalization wall, full-service AI operator value prop) and why-us page (differentiators, certifications, cloud partnerships).



## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Use case data completeness

*For any* use case data entry in `useCases.ts`, the entry SHALL have non-empty values for: slug, hero.badge, hero.title, hero.subtitle, hero.description, ctaText; the benefits array SHALL have length >= 2 with each benefit having non-empty title and description; and the relatedIndustries array SHALL be non-empty with each entry having non-empty name and href.

**Validates: Requirements 1.1, 1.4, 1.5, 11.4**

### Property 2: Role data completeness

*For any* role data entry in `roles.ts`, the entry SHALL have non-empty values for: slug, hero.badge, hero.title, hero.subtitle, hero.description, ctaText, ctaSubtitle; the valueProps array SHALL be non-empty with each prop having a non-empty title; the relatedUseCases array SHALL be non-empty; and the detailedSection SHALL have non-empty title and content.

**Validates: Requirements 2.2, 2.3, 2.4**

### Property 3: Legacy blog post data completeness

*For any* legacy blog post entry in `legacyBlog.ts`, the entry SHALL have non-empty values for: slug, title, excerpt, category, date, and content.

**Validates: Requirements 6.2**

### Property 4: Navigation use case links completeness

*For any* use case data entry in `useCases.ts`, there SHALL exist a corresponding navigation item in the "By Use Case" section of the navigation config whose href matches `/use-cases/{slug}`.

**Validates: Requirements 10.2**

### Property 5: Navigation role links completeness

*For any* role data entry in `roles.ts`, there SHALL exist a corresponding navigation item in the "By Role" section of the navigation config whose href matches `/roles/{slug}`.

**Validates: Requirements 10.3**

## Error Handling

- If a use case or role slug in the URL does not match any data entry, the page component should redirect to the parent listing page or show a 404-style message.
- If legacy blog post content is missing or malformed, the blog listing should gracefully skip the entry rather than crash.
- Navigation items should only render links for pages that have corresponding route definitions in App.tsx.

## Testing Strategy

### Unit Tests

- Verify that each of the 9 use case data entries exists and has the correct slug
- Verify that each of the 5 role data entries exists and has the correct slug
- Verify that the navigation config contains "By Industry", "By Role", and "By Use Case" sub-sections
- Verify that the hydrogen entry exists in the industry navigation
- Verify that the services methodology data contains exactly 5 steps
- Verify that legacy blog entries are included in the blog listing data

### Property-Based Tests

Use a property-based testing library (e.g., `fast-check`) to validate the correctness properties above. Each property test should:
- Iterate over all entries in the relevant data file
- Assert the structural and content completeness invariants
- Run a minimum of 100 iterations (though for finite data sets, exhaustive iteration is sufficient)
- Tag each test with: **Feature: legacy-content-enrichment, Property {number}: {property_text}**

### Dual Testing Approach

- Unit tests cover specific examples: exact counts (9 use cases, 5 roles), specific navigation entries, specific page content
- Property tests cover universal invariants: all data entries are complete, all entries have navigation links
- Together they ensure both structural correctness and content completeness
