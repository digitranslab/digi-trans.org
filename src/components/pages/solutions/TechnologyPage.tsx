/**
 * TechnologyPage Component
 * 
 * Solution page for Technology using SolutionPageTemplate.
 * 
 * Requirements: 12.1, 12.4
 */

import React from "react";
import { SolutionPageTemplate } from "./SolutionPageTemplate";
import { solutionsData } from "@/data/solutions";

const TechnologyPage: React.FC = () => {
  return <SolutionPageTemplate solution={solutionsData["technology"]} />;
};

export default TechnologyPage;
