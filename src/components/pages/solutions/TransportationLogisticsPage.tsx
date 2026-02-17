/**
 * TransportationLogisticsPage Component
 * 
 * Industry solution page for Transportation & Logistics sector showcasing:
 * - Freight, warehousing, logistics, rail, public transportation
 * - Route optimisation, demand forecasting, fleet management
 * - Predictive maintenance for rolling stock
 * 
 * Content from legacy digitrans-website/transportation-and-logistics
 */

import { SolutionPageTemplate } from "./SolutionPageTemplate";
import { solutionsData } from "@/data/solutions";

export function TransportationLogisticsPage() {
  const solution = solutionsData["transportation-logistics"];
  
  if (!solution) {
    return <div>Solution not found</div>;
  }
  
  return <SolutionPageTemplate solution={solution} />;
}

export default TransportationLogisticsPage;
