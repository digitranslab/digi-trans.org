import { RolePageTemplate } from "./RolePageTemplate";
import { roles } from "@/data/roles";

export function HeadOfDataLabPage() {
  const role = roles.find((r) => r.slug === "head-of-data-lab");

  if (!role) {
    return <div>Role not found</div>;
  }

  return <RolePageTemplate role={role} />;
}

export default HeadOfDataLabPage;
