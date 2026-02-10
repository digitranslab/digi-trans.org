/**
 * Services Data File - Consolidated
 * 
 * This file re-exports from services-new.ts which contains the new 3-service structure:
 * 1. Big Data Architecture & Engineering
 * 2. Agentic AI for Data Processing & Enrichment
 * 3. AI & Data Consulting and Strategy
 * 
 * Legacy exports are maintained for backwards compatibility with existing pages.
 */

// Re-export everything from the new services file
export * from './services-new';
export { newServicesData as servicesData } from './services-new';
export { default } from './services-new';

// Legacy type aliases for backwards compatibility
export type { ServiceData, ValueProp, ServiceDeliverable, ProcessStep, Technology, CaseStudy, FAQ, RelatedContent, UseCase } from './services-new';

/**
 * Legacy service data - kept for backwards compatibility
 * These map old service slugs to new ones
 */
export const legacyServiceMapping: Record<string, string> = {
  'ai-consulting': 'ai-data-consulting',
  'data-engineering': 'big-data-architecture',
  'cloud-solutions': 'big-data-architecture',
  'custom-development': 'agentic-ai-data',
};

/**
 * Combined services data including legacy services
 * Used by legacy service pages that haven't been migrated yet
 */
import { newServicesData } from './services-new';

export const allServicesData = {
  ...newServicesData,
  // Legacy aliases pointing to new services
  'ai-consulting': newServicesData['ai-data-consulting'],
  'data-engineering': newServicesData['big-data-architecture'],
  'cloud-solutions': newServicesData['big-data-architecture'],
  'custom-development': newServicesData['agentic-ai-data'],
};
