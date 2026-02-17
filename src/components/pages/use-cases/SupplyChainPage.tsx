import { UseCasePageTemplate } from "./UseCasePageTemplate";
import { useCases } from "@/data/useCases";

export function SupplyChainPage() {
  const useCase = useCases.find((uc) => uc.slug === "supply-chain");

  if (!useCase) {
    return <div>Use case not found</div>;
  }

  return <UseCasePageTemplate useCase={useCase} />;
}

export default SupplyChainPage;
