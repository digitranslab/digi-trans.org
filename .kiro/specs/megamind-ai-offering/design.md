# Design Document: Megamind AI Offering

## Overview

This design adds a comprehensive AI services and product offering to the Digitrans Lab website. The feature introduces:

1. A **Megamind product page** (`/products/megamind`) — a custom product page component (like AllamaPage/DBlockPage) with its own data file
2. Three **AI consulting service pages** (`/services/ai-consulting`, `/services/sovereign-ai`, `/services/agentic-ai`) — rendered via the existing `ServicePageTemplate` with `ServiceData` objects
3. An **AI Models showcase page** (`/models`) — a custom page component with its own data file
4. **Homepage updates** — new Megamind product entry in `productsData`, AI consulting references in pillars, community stats
5. **Navigation updates** — new entries in Services and Products dropdowns
6. **Footer updates** — new links in Services and Products columns
7. **Route registration** — new routes in `App.tsx`, replacing the existing `/services/ai-consulting` redirect
8. **Blog posts** — six new `LegacyBlogPost` entries in `legacyBlog.ts`
9. **SEO metadata** — document titles and meta descriptions on all new pages

All new content follows the existing data-driven architecture: TypeScript data files in `src/data/` feed reusable template components or custom page components that use the shared design system (shadcn/ui, Tailwind CSS, Framer Motion, Lucide icons).

## Architecture

The feature integrates into the existing React/Vite SPA architecture with no new architectural patterns. The key architectural decisions are:

### Decision 1: Custom Page vs. Template for Megamind and Models

Megamind and AI Models pages use **custom page components** (like `AllamaPage.tsx` and `DBlockPage.tsx`) rather than `ServicePageTemplate`. Rationale: these pages have unique section structures (product suite grid, model cards with specs, community stats, MCP integration categories) that don't map to the `ServiceData` interface's hero → deliverables → process → technologies → case studies → FAQs flow.

### Decision 2: ServicePageTemplate for AI Consulting Services

The three AI consulting service pages (`ai-consulting`, `sovereign-ai`, `agentic-ai`) use the existing `ServicePageTemplate` with `ServiceData` objects defined in `src/data/services-new.ts`. Rationale: these pages follow the standard service page structure and the template already supports all needed sections (hero, value props, overview, deliverables, use cases, process, technologies, case studies, FAQs, related content, CTA).

### Decision 3: Route Replacement for /services/ai-consulting

The existing redirect `<Route path="/services/ai-consulting" element={<Navigate to="/services/ai-data-consulting" replace />} />` in `App.tsx` is **replaced** with a direct route to the new AI Consulting page component. This is a breaking change to the redirect, but intentional per requirements — the `/services/ai-consulting` path now serves the new AI Consulting Services page.

### Decision 4: Data File Organization

- `src/data/megamind.ts` — Megamind product page data (hero, product suite, capabilities, MCP integrations, privacy features, community stats)
- `src/data/models.ts` — AI Models page data (model cards, upcoming models, fine-tuning service info)
- `src/data/services-new.ts` — Extended with three new `ServiceData` entries (`ai-consulting`, `sovereign-ai`, `agentic-ai`)
- `src/data/homepage.ts` — Extended `productsData` array with Megamind entry, updated pillars/differentiators
- `src/data/navigation.ts` — Extended `navigationItems` with new service and product entries
- `src/data/legacyBlog.ts` — Extended with six new blog post entries

### Routing Architecture

```mermaid
graph TD
    A[App.tsx Router] --> B[/products/megamind → MegamindPage]
    A --> C[/services/ai-consulting → AIConsultingPage]
    A --> D[/services/sovereign-ai → SovereignAIPage]
    A --> E[/services/agentic-ai → AgenticAIPage]
    A --> F[/models → ModelsPage]
    A --> G[/platform/megamind → Redirect /products/megamind]
    A --> H[/platform/models → Redirect /models]
    
    C --> I[ServicePageTemplate]
    D --> I
    E --> I
    
    I --> J[src/data/services-new.ts]
    B --> K[src/data/megamind.ts]
    F --> L[src/data/models.ts]
```

## Components and Interfaces

### New Page Components

| Component | Path | Type | Data Source |
|-----------|------|------|-------------|
| `MegamindPage` | `src/components/pages/products/MegamindPage.tsx` | Custom product page | `src/data/megamind.ts` |
| `ModelsPage` | `src/components/pages/ModelsPage.tsx` | Custom showcase page | `src/data/models.ts` |
| `AIConsultingPage` | `src/components/pages/services/AIConsultingPage.tsx` | Thin wrapper around `ServicePageTemplate` | `src/data/services-new.ts["ai-consulting"]` |
| `SovereignAIPage` | `src/components/pages/services/SovereignAIPage.tsx` | Thin wrapper around `ServicePageTemplate` | `src/data/services-new.ts["sovereign-ai"]` |
| `AgenticAIServicePage` | `src/components/pages/services/AgenticAIServicePage.tsx` | Thin wrapper around `ServicePageTemplate` | `src/data/services-new.ts["agentic-ai"]` |

### MegamindPage Sections

The MegamindPage follows the same component patterns as AllamaPage/DBlockPage:

1. **Hero** — badge, TypewriterGradientText headline, description, dual CTAs (Schedule Consultation + GitHub), Megamind SVG logo
2. **Product Suite** — grid of 5 product variants (Desktop, Web, Mobile, Server, Models) using GlassCard
3. **Core Capabilities** — alternating left/right feature sections with icon, title, description, capabilities list
4. **MCP Integrations** — grid of 6 MCP categories (Browser Automation, Data Analysis, Search & Research, Deep Research, Design Tools, Productivity) using GlassCard
5. **Privacy & Sovereignty** — feature list highlighting zero data collection, local storage, GDPR compliance, data portability
6. **Community Stats** — 4 metric cards (4.5M+ downloads, 16K+ members, 100+ contributors, 2800+ PRs)
7. **CTA** — consultation CTA with GradientButton

Shared components used: `Navbar`, `Footer`, `GlassCard`, `GradientButton`, `SectionHeader`, `AnimatedWrapper`, `TypewriterGradientText`

### ModelsPage Sections

1. **Hero** — badge, headline, description, CTA
2. **Model Philosophy** — overview of compact, efficient, agent-optimized approach
3. **Model Cards** — grid of 4 model cards (Jan-v1, Jan-Nano-128k, Jan-Nano-32k, Lucy) each showing: name, parameter count, specialty, benchmark, RAM requirements, deployment options, HuggingFace link
4. **Upcoming Models** — cards for Jan-v2 and Ichigo with "Coming Soon" badges
5. **Fine-Tuning Service** — description of custom fine-tuning offering with cost info
6. **CTA** — consultation CTA

### Service Page Wrappers

Each service page wrapper is a minimal component:

```typescript
// Example: AIConsultingPage.tsx
import { ServicePageTemplate } from "./ServicePageTemplate";
import { newServicesData } from "@/data/services-new";

export default function AIConsultingPage() {
  return <ServicePageTemplate service={newServicesData["ai-consulting"]} />;
}
```

### Navigation Data Changes

The `navigationItems` array in `src/data/navigation.ts` is updated:

- **Services children**: Add 3 new entries (AI Consulting, Agentic AI & Automation, Sovereign AI) before the existing 3 entries
- **Products children**: Add Megamind entry before existing Allama and DBLOCK entries

### Footer Changes

The `Footer.tsx` component is updated:

- **Services column**: Add 3 new links (AI Consulting, Sovereign AI, Agentic AI & Automation)
- **Products column**: Add Megamind link

### Homepage Data Changes

In `src/data/homepage.ts`:

- **productsData**: Add Megamind entry with name, tagline, description, features, href, status "live", ctaLabel
- **pillarsData**: Update "Explore & Frame" pillar features to include "AI Consulting & Strategy"
- **differentiatorsData** or **heroData.trustBadges**: Add community trust stats (4.5M+ downloads, 16K+ community)

## Data Models

### MegamindData (src/data/megamind.ts)

```typescript
interface MegamindHero {
  tagline: string;
  headline: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
}

interface ProductVariant {
  name: string;
  description: string;
  icon: string;
  status: "available" | "coming-soon";
  features: string[];
}

interface Capability {
  id: string;
  icon: string;
  title: string;
  description: string;
  capabilities: string[];
  marketingAngle: string;
}

interface MCPCategory {
  category: string;
  icon: string;
  tools: { name: string; description: string }[];
}

interface PrivacyFeature {
  icon: string;
  title: string;
  description: string;
}

interface CommunityStat {
  value: string;
  label: string;
  icon: string;
}

// Exported data: heroData, productVariants, capabilities, mcpCategories, privacyFeatures, communityStats
```

### ModelsData (src/data/models.ts)

```typescript
interface ModelCard {
  name: string;
  parameters: string;
  specialty: string;
  benchmark: { metric: string; value: string };
  hardware: { minimum: string; recommended: string };
  deploymentOptions: string[];
  huggingFaceUrl: string;
  icon: string;
}

interface UpcomingModel {
  name: string;
  description: string;
  icon: string;
  expectedDate?: string;
}

interface FineTuningService {
  title: string;
  description: string;
  startingCost: string;
  hardware: string;
  capabilities: string[];
}

// Exported data: heroData, modelPhilosophy, modelCards, upcomingModels, fineTuningService
```

### ServiceData Extensions (src/data/services-new.ts)

Three new entries added to `newServicesData` record:

- `"ai-consulting"` — AI Consulting Services (6 service categories, MCP/Megamind references, "60% work about work" stat)
- `"sovereign-ai"` — Sovereign AI Solutions (deployment options, sector targets, compliance coverage, sovereign vs cloud comparison)
- `"agentic-ai"` — Agentic AI & Workflow Automation (MCP categories, workflow integrations with n8n/Continue.dev/Tabby/llmcord, automation scenarios)

All three follow the existing `ServiceData` interface exactly — no interface changes needed.

### Homepage Data Extensions

```typescript
// New entry in productsData array
{
  name: "Megamind",
  tagline: "Open-source AI platform",
  description: "ChatGPT alternative supporting local and cloud models. Run AI privately with full data sovereignty, MCP tool integration, and OpenAI-compatible API.",
  features: ["Local & Cloud Models", "MCP Tool Integration", "Custom AI Assistants", "OpenAI-Compatible API"],
  href: "/products/megamind",
  status: "live",
  ctaLabel: "Learn More",
}
```

### Blog Post Extensions

Six new `LegacyBlogPost` entries added to `legacyBlogPosts` array, one per service area:
1. AI Strategy blog post
2. Agentic AI blog post
3. Workflow Automation blog post
4. Sovereign AI blog post
5. Fine-Tuning blog post
6. AI Operations blog post

Each follows the existing `LegacyBlogPost` interface (slug, title, excerpt, category, date, content, image).

### SEO Metadata

Each new page component sets `document.title` in a `useEffect` hook (matching existing patterns in the codebase). Meta descriptions are set via `document.querySelector('meta[name="description"]')?.setAttribute('content', ...)` or a shared SEO helper.



## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Model card completeness

*For any* model card in the `modelCards` array, the object must have non-empty values for `name`, `parameters`, `specialty`, `benchmark.metric`, `benchmark.value`, `hardware.minimum`, `hardware.recommended`, at least one entry in `deploymentOptions`, and a valid URL string in `huggingFaceUrl`.

**Validates: Requirements 5.3**

### Property 2: New ServiceData conformance and Megamind cross-linking

*For any* new ServiceData object added for this feature (keys `"ai-consulting"`, `"sovereign-ai"`, `"agentic-ai"`), the object must have non-empty `slug`, `category`, `hero.badge`, `hero.title`, `hero.description`, `overview`, `ctaText`, at least one entry in `deliverables`, at least one entry in `process`, at least one entry in `relatedContent`, and at least one `relatedContent` entry whose `href` contains `/products/megamind` or `/models`.

**Validates: Requirements 10.1, 10.3**

### Property 3: Blog posts sorted by date descending

*For any* pair of adjacent blog posts in the rendered blog list, the first post's date must be greater than or equal to the second post's date (newest first ordering).

**Validates: Requirements 11.2**

### Property 4: Blog post field constraints

*For any* new `LegacyBlogPost` entry added for this feature, the `excerpt` field must be under 200 characters in length, the `content` field must contain at least 3 paragraphs (separated by double newlines), and the `slug`, `title`, `category`, `date`, and `image` fields must all be non-empty strings.

**Validates: Requirements 11.4**

### Property 5: Valid Lucide icon names in data objects

*For any* icon name string referenced in the new data files (`megamind.ts`, `models.ts`, and the three new entries in `services-new.ts`), the string must resolve to a valid export from the `lucide-react` package.

**Validates: Requirements 14.4**

## Error Handling

### Route Not Found

If a visitor navigates to an unregistered route, the existing application behavior applies (React Router's default handling). No new 404 handling is introduced by this feature.

### Missing Data Fields

If a `ServiceData` object is missing optional fields (`valueProps`, `useCases`, `technologies`, `caseStudies`, `faqs`, `relatedContent`), the `ServicePageTemplate` already handles this gracefully by conditionally rendering sections only when data is present (existing `&&` guards in the template).

### Invalid Icon Names

If a Lucide icon name in a data file doesn't resolve to a valid component, the existing `getIcon` helper returns `null`, which renders nothing. No crash occurs, but the icon is silently missing. Property 5 catches this at test time.

### SEO Fallback

If a page component fails to set `document.title`, the default HTML title from `index.html` ("Digitrans — Your Digital, Data & AI Scale-up Partner") remains. This is the existing fallback behavior.

### Redirect Chain

The `/platform/megamind` → `/products/megamind` and `/platform/models` → `/models` redirects use React Router's `<Navigate replace />`, which performs a client-side redirect without creating browser history entries. No infinite redirect loops are possible since the target routes are direct page components.

## Testing Strategy

### Unit Tests

Unit tests verify specific examples and edge cases:

- **Route registration**: Verify each new route path renders the expected component (9.1–9.6)
- **Data existence**: Verify `newServicesData["ai-consulting"]`, `newServicesData["sovereign-ai"]`, `newServicesData["agentic-ai"]` exist and are non-null
- **Megamind data**: Verify `megamind.ts` exports `heroData`, `productVariants` (length 5), `mcpCategories` (length 6), `communityStats` (length 4)
- **Models data**: Verify `models.ts` exports `modelCards` (length 4), `upcomingModels` (length 2)
- **Homepage integration**: Verify `productsData` contains an entry with `name: "Megamind"` and `href: "/products/megamind"`
- **Navigation entries**: Verify Services children include AI Consulting, Sovereign AI, Agentic AI entries; Products children include Megamind
- **Footer links**: Verify Footer component renders links to `/services/ai-consulting`, `/services/sovereign-ai`, `/services/agentic-ai`, `/products/megamind`
- **Blog post count**: Verify at least 6 new blog posts exist with the expected service-area categories
- **SEO titles**: Verify each page component sets `document.title` containing the required keywords
- **Redirect replacement**: Verify `/services/ai-consulting` no longer redirects to `/services/ai-data-consulting` but renders the AI Consulting page
- **Specific content checks**: Sovereign AI data mentions GDPR, HIPAA, SOC2, FedRAMP; AI Consulting data references "60% work about work"

### Property-Based Tests

Property-based tests verify universal properties across generated inputs. Use `fast-check` as the property-based testing library for TypeScript/React.

Each test runs a minimum of 100 iterations and is tagged with the design property reference.

- **Feature: megamind-ai-offering, Property 1: Model card completeness** — Generate random model card objects and verify all required fields are present and non-empty. Test against the actual `modelCards` array to ensure all entries pass.

- **Feature: megamind-ai-offering, Property 2: New ServiceData conformance and Megamind cross-linking** — For each of the 3 new ServiceData keys, verify structural completeness and relatedContent Megamind reference. Use `fast-check` arbitraries to generate additional ServiceData-like objects and verify the validation function works correctly.

- **Feature: megamind-ai-offering, Property 3: Blog posts sorted by date descending** — Generate random arrays of blog posts with random dates, sort them using the application's sort logic, and verify the result is in descending date order.

- **Feature: megamind-ai-offering, Property 4: Blog post field constraints** — Generate random LegacyBlogPost objects with `fast-check` and verify the validation function correctly accepts posts with excerpt < 200 chars and content >= 3 paragraphs, and rejects those that violate constraints.

- **Feature: megamind-ai-offering, Property 5: Valid Lucide icon names in data objects** — Extract all icon name strings from the new data files and verify each resolves to a truthy export from `lucide-react`. Use `fast-check` to generate random icon name strings and verify the validation function correctly distinguishes valid from invalid names.

### Test Configuration

```typescript
// vitest.config.ts — no changes needed, existing config supports fast-check
// Install: npm install --save-dev fast-check

// Example property test structure:
import { fc } from "fast-check";
import { describe, it, expect } from "vitest";

describe("megamind-ai-offering properties", () => {
  // Feature: megamind-ai-offering, Property 3: Blog posts sorted by date descending
  it("blog posts are always sorted newest first", () => {
    fc.assert(
      fc.property(
        fc.array(fc.date({ min: new Date("2020-01-01"), max: new Date("2026-12-31") })),
        (dates) => {
          const sorted = [...dates].sort((a, b) => b.getTime() - a.getTime());
          for (let i = 0; i < sorted.length - 1; i++) {
            expect(sorted[i].getTime()).toBeGreaterThanOrEqual(sorted[i + 1].getTime());
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
```
