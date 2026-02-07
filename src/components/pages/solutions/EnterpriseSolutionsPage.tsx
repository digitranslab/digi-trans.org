/**
 * EnterpriseSolutionsPage Component
 * 
 * Solution page for Enterprise Solutions using SolutionPageTemplate.
 */

import React from "react";
import { SolutionPageTemplate } from "./SolutionPageTemplate";
import { allSolutionsData } from "@/data/solutions";

const EnterpriseSolutionsPage: React.FC = () => {
  return <SolutionPageTemplate solution={allSolutionsData["enterprise-solutions"]} />;
};

export default EnterpriseSolutionsPage;
