// "use client"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Plus, Search, Star } from "lucide-react"

// export default function Suppliers() {
  

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Supplier Management</h1>
//         <Button>
//           <Plus className="h-4 w-4 mr-2" />
//           Add Supplier
//         </Button>
//       </div>

//       <Card>
//         <CardHeader>
//           <div className="flex justify-between items-center">
//             <CardTitle>Active Suppliers</CardTitle>
//             <div className="relative w-64">
//               <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
//               <Input type="search" placeholder="Search suppliers..." className="pl-9" />
//             </div>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <div className="rounded-md border">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Delivery</th>
//                   <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {suppliers.map((supplier) => (
//                   <tr key={supplier.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm font-medium text-gray-900">{supplier.name}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{supplier.category}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <Star className="h-4 w-4 text-yellow-400 mr-1" />
//                         <span className="text-sm text-gray-900">{supplier.rating}</span>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                         supplier.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
//                       }`}>
//                         {supplier.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{supplier.lastDelivery}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                       <Button variant="ghost" className="text-blue-600 hover:text-blue-900">View Details</Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }