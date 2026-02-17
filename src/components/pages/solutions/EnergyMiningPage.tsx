/**
 * EnergyMiningPage Component
 * 
 * Industry solution page for Energy & Mining sector showcasing:
 * - Safety and risk detection AI
 * - Predictive maintenance for industrial equipment
 * - Energy management and process optimisation
 * 
 * Content enriched from legacy digitrans-website
 */

import { SolutionPageTemplate } from "./SolutionPageTemplate";
import { solutionsData } from "@/data/solutions";

export function EnergyMiningPage() {
  const solution = solutionsData["energy-mining"];
  
  if (!solution) {
    return <div>Solution not found</div>;
  }
  
  return <SolutionPageTemplate solution={solution} />;
}

export default EnergyMiningPage;
