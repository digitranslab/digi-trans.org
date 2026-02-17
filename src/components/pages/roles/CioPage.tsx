import { RolePageTemplate } from "./RolePageTemplate";
import { roles } from "@/data/roles";

export function CioPage() {
  const role = roles.find((r) => r.slug === "cio");

  if (!role) {
    return <div>Role not found</div>;
  }

  return <RolePageTemplate role={role} />;
}

export default CioPage;
