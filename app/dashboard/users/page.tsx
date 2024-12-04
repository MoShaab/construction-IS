
import { fetchUsers } from "@/lib/data";
import Users from "@/components/users";
export const revalidate = 0;


  

export default async function Page(){
    const users = await fetchUsers();
    return (
        <Users users ={users} />
    )
}