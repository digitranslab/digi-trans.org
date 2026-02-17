import { UseCasePageTemplate } from "./UseCasePageTemplate";
import { useCases } from "@/data/useCases";

export function DataIntegrationPage() {
  const useCase = useCases.find((uc) => uc.slug === "data-integration");

  if (!useCase) {
    return <div>Use case not found</div>;
  }

  return <UseCasePageTemplate useCase={useCase} />;
}

export default DataIntegrationPage;
