/**
 * Agentic AI for Data Processing & Enrichment Service Page
 * 
 * Autonomous AI agents for data pipelines, quality, and metadata management.
 */

import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";
import { newServicesData } from "@/data/services-new";

export function AgenticAIDataPage() {
  const service = newServicesData["agentic-ai-data"];
  
  if (!service) {
    return <div>Service not found</div>;
  }
  
  return <ServicePageTemplate service={service} />;
}

export default AgenticAIDataPage;
