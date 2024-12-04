
import { fetchSuppliers } from "@/lib/data";
import Suppliers from "@/components/suppliers";
export const revalidate = 0;


  

export default async function Page(){
    const suppliers = await fetchSuppliers();
    return (
        <Suppliers suppliers ={suppliers} />
    )
}