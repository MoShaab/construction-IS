"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Progress from "@/components/ui/progress"
import { Clock, Plus } from "lucide-react"
import { Project } from "@/lib/definitions"

export default function Projects({
  projects,
}:{
  projects: Project[];
}) {
  return (
    <div className="p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">Projects</h1>
        <Button className="w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start space-y-2 sm:space-y-0">
                <div className="w-full sm:w-auto">
                  <CardTitle className="text-lg sm:text-xl mb-2">{project.name}</CardTitle>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    Due: {new Date(project.endDate).toLocaleDateString()}
                  </div>
                </div>
                <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium self-start ${
                  project.progress >= 90 ? "bg-green-100 text-green-800" :
                  project.progress >= 50 ? "bg-blue-100 text-blue-800" :
                  project.progress >= 25 ? "bg-orange-100 text-orange-800" :
                  "bg-gray-100 text-gray-800"
                }`}>
                  {project.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-1.5 sm:h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}