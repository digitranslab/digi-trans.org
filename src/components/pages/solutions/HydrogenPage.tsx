/**
 * HydrogenPage Component
 * 
 * Industry solution page for the Hydrogen sector showcasing:
 * - Hydrogen production, storage, transportation, and utilisation challenges
 * - Digital solutions specific to the hydrogen industry
 * - Safety, sustainability, and regulatory compliance
 * 
 * Content enriched from legacy digitrans-website
 */

import { SolutionPageTemplate } from "./SolutionPageTemplate";
import { solutionsData } from "@/data/solutions";

export function HydrogenPage() {
  const solution = solutionsData["hydrogen"];
  
  if (!solution) {
    return <div>Solution not found</div>;
  }
  
  return <SolutionPageTemplate solution={solution} />;
}

export default HydrogenPage;
