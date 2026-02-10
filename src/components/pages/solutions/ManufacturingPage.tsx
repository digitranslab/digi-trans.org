/**
 * ManufacturingPage Component
 * 
 * Industry solution page for Manufacturing sector showcasing:
 * - Predictive maintenance and quality control AI
 * - Production optimisation and digital twins
 * - Supply chain visibility and Industry 4.0
 * 
 * Requirements: 12.1, 12.2
 */

import React from "react";
import { SolutionPageTemplate } from "./SolutionPageTemplate";
import { solutionsData } from "@/data/solutions";

export function ManufacturingPage() {
  const solution = solutionsData["manufacturing"];
  
  if (!solution) {
    return <div>Solution not found</div>;
  }
  
  return <SolutionPageTemplate solution={solution} />;
}

export default ManufacturingPage;
