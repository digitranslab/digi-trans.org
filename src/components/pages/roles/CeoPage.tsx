import { RolePageTemplate } from "./RolePageTemplate";
import { roles } from "@/data/roles";

export function CeoPage() {
  const role = roles.find((r) => r.slug === "ceo");

  if (!role) {
    return <div>Role not found</div>;
  }

  return <RolePageTemplate role={role} />;
}

export default CeoPage;
