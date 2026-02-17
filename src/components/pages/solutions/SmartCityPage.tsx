/**
 * SmartCityPage Component
 * 
 * Industry solution page for Smart City sector showcasing:
 * - Smart grids, water, waste & disposal, construction
 * - AI for territory data, infrastructure optimisation
 * - Computer vision for network inspection
 * 
 * Content from legacy digitrans-website/smartcity
 */

import { SolutionPageTemplate } from "./SolutionPageTemplate";
import { solutionsData } from "@/data/solutions";

export function SmartCityPage() {
  const solution = solutionsData["smart-city"];
  
  if (!solution) {
    return <div>Solution not found</div>;
  }
  
  return <SolutionPageTemplate solution={solution} />;
}

export default SmartCityPage;
