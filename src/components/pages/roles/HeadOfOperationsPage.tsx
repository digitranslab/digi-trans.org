import { RolePageTemplate } from "./RolePageTemplate";
import { roles } from "@/data/roles";

export function HeadOfOperationsPage() {
  const role = roles.find((r) => r.slug === "head-of-operations");

  if (!role) {
    return <div>Role not found</div>;
  }

  return <RolePageTemplate role={role} />;
}

export default HeadOfOperationsPage;
