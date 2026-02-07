/**
 * AI & Data Consulting and Strategy Service Page
 * 
 * Strategic advisory, data strategy, AI roadmaps, and governance.
 */

import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";
import { newServicesData } from "@/data/services-new";

export function AIDataConsultingPage() {
  const service = newServicesData["ai-data-consulting"];
  
  if (!service) {
    return <div>Service not found</div>;
  }
  
  return <ServicePageTemplate service={service} />;
}

export default AIDataConsultingPage;
