// "use client"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import  Progress  from "@/components/ui/progress"
// import { Clock, Plus } from "lucide-react"




// export default function Projects() {


//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Projects</h1>
//         <Button>
//           <Plus className="h-4 w-4 mr-2" />
//           New Project
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 gap-6">
//         {projects.map((project) => (
//           <Card key={project.id} className="hover:shadow-lg transition-shadow">
//             <CardHeader>
//               <div className="flex justify-between items-start">
//                 <div>
//                   <CardTitle className="text-xl mb-2">{project.name}</CardTitle>
//                   <div className="flex items-center text-sm text-gray-500">
//                     <Clock className="h-4 w-4 mr-1" />
//                     Due: {project.dueDate}
//                   </div>
//                 </div>
//                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                   project.progress >= 90 ? "bg-green-100 text-green-800" :
//                   project.progress >= 50 ? "bg-blue-100 text-blue-800" :
//                   project.progress >= 25 ? "bg-orange-100 text-orange-800" :
//                   "bg-gray-100 text-gray-800"
//                 }`}>
//                   {project.status}
//                 </span>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 <div>
//                   <div className="flex justify-between text-sm mb-1">
//                     <span>Progress</span>
//                     <span>{project.progress}%</span>
//                   </div>
//                   <Progress value={project.progress} className="h-2" />
//                 </div>
//                 <div>
//                   <div className="text-sm font-medium mb-2">Team Members</div>
//                   <div className="flex -space-x-2">
//                     {project.team.map((member, index) => (
//                       <div
//                         key={index}
//                         className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium border-2 border-white"
//                         title={member}
//                       >
//                         {member.split(" ")[0][0]}{member.split(" ")[1][0]}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }