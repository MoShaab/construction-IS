"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Download, LineChart } from "lucide-react"
import { Button } from "./ui/button"

export default function Reports() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Reports & Analytics</h1>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-white border">
          <TabsTrigger value="overview" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
            Overview
          </TabsTrigger>
          <TabsTrigger value="inventory" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
            Inventory Analysis
          </TabsTrigger>
          <TabsTrigger value="projects" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
            Project Metrics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5" />
                  Monthly Material Usage
                </CardTitle>
              </CardHeader>
              <CardContent className="min-h-[300px] flex items-center justify-center text-gray-500">
                Chart visualization would go here
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5" />
                  Cost Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="min-h-[300px] flex items-center justify-center text-gray-500">
                Chart visualization would go here
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="inventory">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Turnover Rate</CardTitle>
            </CardHeader>
            <CardContent className="min-h-[400px] flex items-center justify-center text-gray-500">
              Detailed inventory analysis would go here
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Project Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="min-h-[400px] flex items-center justify-center text-gray-500">
              Project metrics and KPIs would go here
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}