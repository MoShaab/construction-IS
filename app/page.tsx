
import { fetchAllInventory, fetchProjects, fetchSuppliers, fetchUsers } from "@/lib/data";
import Dashboard from "@/components/dashboard";

export default async function Page() {
  const allInventory = await fetchAllInventory();
  const projects = await fetchProjects();
  const suppliers = await fetchSuppliers();
  const users = await fetchUsers();

  return (
    <Dashboard
      allInventory={allInventory}
      projects={projects}
      suppliers={suppliers}
      users={users}
    />
  );
}
