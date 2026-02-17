import { UseCasePageTemplate } from "./UseCasePageTemplate";
import { useCases } from "@/data/useCases";

export function PredictiveMaintenancePage() {
  const useCase = useCases.find((uc) => uc.slug === "predictive-maintenance");

  if (!useCase) {
    return <div>Use case not found</div>;
  }

  return <UseCasePageTemplate useCase={useCase} />;
}

export default PredictiveMaintenancePage;
