/**
 * DigitalTransformationPage Component
 * 
 * Solution page for Digital Transformation using SolutionPageTemplate.
 */

import React from "react";
import { SolutionPageTemplate } from "./SolutionPageTemplate";
import { allSolutionsData } from "@/data/solutions";

const DigitalTransformationPage: React.FC = () => {
  return <SolutionPageTemplate solution={allSolutionsData["digital-transformation"]} />;
};

export default DigitalTransformationPage;
