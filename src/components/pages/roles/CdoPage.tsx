import { RolePageTemplate } from "./RolePageTemplate";
import { roles } from "@/data/roles";

export function CdoPage() {
  const role = roles.find((r) => r.slug === "cdo");

  if (!role) {
    return <div>Role not found</div>;
  }

  return <RolePageTemplate role={role} />;
}

export default CdoPage;
