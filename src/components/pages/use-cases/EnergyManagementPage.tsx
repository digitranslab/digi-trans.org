import { UseCasePageTemplate } from "./UseCasePageTemplate";
import { useCases } from "@/data/useCases";

export function EnergyManagementPage() {
  const useCase = useCases.find((uc) => uc.slug === "energy-management");

  if (!useCase) {
    return <div>Use case not found</div>;
  }

  return <UseCasePageTemplate useCase={useCase} />;
}

export default EnergyManagementPage;
