import { UseCasePageTemplate } from "./UseCasePageTemplate";
import { useCases } from "@/data/useCases";

export function ProcessControlPage() {
  const useCase = useCases.find((uc) => uc.slug === "process-control");

  if (!useCase) {
    return <div>Use case not found</div>;
  }

  return <UseCasePageTemplate useCase={useCase} />;
}

export default ProcessControlPage;
