/**
 * Big Data Architecture & Engineering Service Page
 * 
 * Modern data platforms, medallion architecture, lakehouses, and real-time streaming.
 */

import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";
import { newServicesData } from "@/data/services-new";

export function BigDataArchitecturePage() {
  const service = newServicesData["big-data-architecture"];
  
  if (!service) {
    return <div>Service not found</div>;
  }
  
  return <ServicePageTemplate service={service} />;
}

export default BigDataArchitecturePage;
