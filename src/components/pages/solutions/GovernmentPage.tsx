/**
 * GovernmentPage Component
 * 
 * Industry solution page for Government & Public Sector showcasing:
 * - Data sovereignty and secure cloud solutions
 * - Citizen services digital transformation
 * - Compliance with government security frameworks
 * 
 * Requirements: 12.1, 12.2
 */

import { SolutionPageTemplate } from "./SolutionPageTemplate";
import { solutionsData } from "@/data/solutions";

export function GovernmentPage() {
  const solution = solutionsData["government"];
  
  if (!solution) {
    return <div>Solution not found</div>;
  }
  
  return <SolutionPageTemplate solution={solution} />;
}

export default GovernmentPage;
