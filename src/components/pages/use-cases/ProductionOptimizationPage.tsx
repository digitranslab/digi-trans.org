import { UseCasePageTemplate } from "./UseCasePageTemplate";
import { useCases } from "@/data/useCases";

export function ProductionOptimizationPage() {
  const useCase = useCases.find((uc) => uc.slug === "production-optimization");

  if (!useCase) {
    return <div>Use case not found</div>;
  }

  return <UseCasePageTemplate useCase={useCase} />;
}

export default ProductionOptimizationPage;
