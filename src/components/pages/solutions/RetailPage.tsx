/**
 * RetailPage Component
 * 
 * Industry solution page for Retail sector showcasing:
 * - Customer analytics and personalisation
 * - Demand forecasting and inventory optimisation
 * - Supply chain AI and dynamic pricing
 * 
 * Requirements: 12.1, 12.2
 */

import React from "react";
import { SolutionPageTemplate } from "./SolutionPageTemplate";
import { solutionsData } from "@/data/solutions";

export function RetailPage() {
  const solution = solutionsData["retail"];
  
  if (!solution) {
    return <div>Solution not found</div>;
  }
  
  return <SolutionPageTemplate solution={solution} />;
}

export default RetailPage;
