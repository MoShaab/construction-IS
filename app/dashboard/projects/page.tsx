
import { fetchProjects } from "@/lib/data";
import Projects from "@/components/projects";
export const revalidate = 0;


  

export default async function Page(){
    const projects = await fetchProjects();
    return (
        <Projects projects ={projects} />
    )
}