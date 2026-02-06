/**
 * HealthcarePage Component
 * 
 * Solution page for Healthcare using SolutionPageTemplate.
 * Includes compliance section for HIPAA, etc.
 * 
 * Requirements: 12.1, 12.3, 12.4
 */

import React from "react";
import { SolutionPageTemplate } from "./SolutionPageTemplate";
import { solutionsData } from "@/data/solutions";

const HealthcarePage: React.FC = () => {
  return <SolutionPageTemplate solution={solutionsData["healthcare"]} />;
};

export default HealthcarePage;
