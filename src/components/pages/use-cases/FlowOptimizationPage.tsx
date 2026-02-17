import { UseCasePageTemplate } from "./UseCasePageTemplate";
import { useCases } from "@/data/useCases";

export function FlowOptimizationPage() {
  const useCase = useCases.find((uc) => uc.slug === "flow-optimization");

  if (!useCase) {
    return <div>Use case not found</div>;
  }

  return <UseCasePageTemplate useCase={useCase} />;
}

export default FlowOptimizationPage;
