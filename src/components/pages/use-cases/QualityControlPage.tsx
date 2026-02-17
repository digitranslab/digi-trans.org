import { UseCasePageTemplate } from "./UseCasePageTemplate";
import { useCases } from "@/data/useCases";

export function QualityControlPage() {
  const useCase = useCases.find((uc) => uc.slug === "quality-control");

  if (!useCase) {
    return <div>Use case not found</div>;
  }

  return <UseCasePageTemplate useCase={useCase} />;
}

export default QualityControlPage;
