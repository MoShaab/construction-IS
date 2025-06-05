"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Progress from "@/components/ui/progress"
import { Clock, Plus } from "lucide-react"
import { Project } from "@/lib/definitions"


// Function to calculate progress percentage based on start and end dates
const calculateProgress = (startDate: Date, endDate: Date): number => {
  const now = new Date()
  
  // If project hasn't started yet
  if (now < startDate) return 0
  
  // If project is completed
  if (now > endDate) return 100
  
  // Calculate progress percentage based on current date's position between start and end
  const total = endDate.getTime() - startDate.getTime()
  const current = now.getTime() - startDate.getTime()
  const progress = (current / total) * 100
  
  // Round to 1 decimal place and ensure it's between 0 and 100
  return Math.min(Math.max(Math.round(progress * 10) / 10, 0), 100)
}

// Function to get status text based on progress
const getStatusFromProgress = (progress: number): string => {
  if (progress >= 100) return "Completed"
  if (progress >= 85) return "Nearly Complete"
  if (progress >= 75) return "On Track"
  if (progress >= 40) return "In Progress"
  if (progress > 0) return "Started"
  return "Not Started"
}

// Function to get status styles based on progress
const getStatusStyles = (progress: number): string => {
  if (progress >= 90) return "bg-green-100 text-green-800"
  if (progress >= 50) return "bg-blue-100 text-blue-800"
  if (progress >= 25) return "bg-orange-100 text-orange-800"
  return "bg-gray-100 text-gray-800"
}

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
        {projects.map((project) => {
          const startDate = new Date(project.start_date)
          const endDate = new Date(project.end_date)
          const progress = calculateProgress(startDate, endDate)
          const status = getStatusFromProgress(progress)
          
          return (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start space-y-2 sm:space-y-0">
                  <div className="w-full sm:w-auto">
                    <CardTitle className="text-lg sm:text-xl mb-2">{project.name}</CardTitle>
                    <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        Start: {startDate.toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        Due: {endDate.toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium self-start ${
                    getStatusStyles(progress)
                  }`}>
                    {status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                      <span>Progress</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-1.5 sm:h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}