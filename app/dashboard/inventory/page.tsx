
import { fetchAllInventory } from "@/lib/data";
import Inventory from "@/components/inventory";
export const revalidate = 0;


  

export default async function Page(){
    const allInventory = await fetchAllInventory();
    return (
        <Inventory allInventory={allInventory} />
    )
}