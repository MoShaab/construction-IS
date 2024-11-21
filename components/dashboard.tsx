'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, BarChart3, Bell, Box, DollarSign, HardHat, LayoutDashboard, LineChart, LogOut, Search, Settings, Truck, UserIcon, Warehouse } from 'lucide-react'
import { useState } from "react"
import Inventory from "./inventory"
import Projects from "./projects"
import Reports from "./reports"
import Suppliers from "./suppliers"
import Users from "./users"
import { DashboardProps } from "@/lib/definitions";

export default function Dashboard({ allInventory, projects, suppliers, users }: DashboardProps) {

  const [activeSection, setActiveSection] = useState("dashboard")

  const renderContent = () => {
    switch (activeSection) {
      case "inventory":
         return <Inventory allInventory = {allInventory} />
       case "projects":
         return <Projects projects = {projects} />
       case "reports":
         return <Reports />
     case "users":
         return <Users users  = {users} />
      case "suppliers":
        return <Suppliers suppliers = {suppliers} />
       default:
        return (
          <main className="max-w-7xl mx-auto py-8 px-8">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Inventory Value</CardTitle>
                  <DollarSign className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-emerald-500 flex items-center gap-1 mt-1">
                    <span className="text-lg">↑</span> +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                  <Box className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-emerald-500 flex items-center gap-1 mt-1">
                    <span className="text-lg">↑</span> 2 new this week
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
                  <Bell className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-orange-500 flex items-center gap-1 mt-1">
                    <span className="text-lg">⚠</span> Requires attention
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <UserIcon className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-emerald-500 flex items-center gap-1 mt-1">
                    <span className="text-lg">↑</span> 3 new this month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="space-y-4">
              <Tabs defaultValue="inventory" className="space-y-4">
                <TabsList className="bg-white border">
                  <TabsTrigger value="inventory" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
                    Inventory Overview
                  </TabsTrigger>
                  <TabsTrigger value="usage" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
                    Material Usage
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="inventory" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Inventory Levels by Category</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2 min-h-[400px] flex items-center justify-center text-gray-500">
                      Chart visualization would go here
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="usage" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Material Usage Trends</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2 min-h-[400px] flex items-center justify-center text-gray-500">
                      Chart visualization would go here
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        )
    }
  }

  return (
    <div className="flex h-screen bg-[#f8fafc]">
      {/* Sidebar */}
      <div className="fixed sm:static top-0 left-0 z-40 w-full sm:w-64 bg-white border-r border-gray-200 sm:transform-none transform transition-all">
        <div className="p-6">
          <div className="flex items-center gap-2">
            <HardHat className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">CMIMS</h1>
          </div>
        </div>
        <nav className="mt-2">
          <div className="px-3">
            {[ 
              { icon: <LayoutDashboard className="h-4 w-4" />, label: "Dashboard", value: "dashboard" },
              { icon: <Warehouse className="h-4 w-4" />, label: "Inventory", value: "inventory" },
              { icon: <Activity className="h-4 w-4" />, label: "Projects", value: "projects" },
              { icon: <BarChart3 className="h-4 w-4" />, label: "Reports", value: "reports" },
              { icon: <UserIcon className="h-4 w-4" />, label: "Users", value: "users" },
              { icon: <Truck className="h-4 w-4" />, label: "Suppliers", value: "suppliers" },
            ].map((item) => (
              <Button
                key={item.value}
                variant={activeSection === item.value ? "secondary" : "ghost"}
                className="w-full justify-start mb-1"
                onClick={() => setActiveSection(item.value)}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Button>
            ))}
          </div>
          <div className="bsolute bottom-4 px-3 w-full sm:w-64">
            <hr className="my-4" />
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="h-4 w-4 mr-2" />
              Log Out
            </Button>
          </div>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        {renderContent()}
      </div>
    </div>
  )
}
