import { UseCasePageTemplate } from "./UseCasePageTemplate";
import { useCases } from "@/data/useCases";

export function SafetyRiskPage() {
  const useCase = useCases.find((uc) => uc.slug === "safety-risk-detection");

  if (!useCase) {
    return <div>Use case not found</div>;
  }

  return <UseCasePageTemplate useCase={useCase} />;
}

export default SafetyRiskPage;
