'use client';

import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, Bell, UserIcon, Box } from 'lucide-react';
import { DashboardProps, InventoryItem } from "@/lib/definitions";

const calculateStatus = (item: InventoryItem): { status: string, style: string } => {
  const minThreshold = item.minThreshold;

  if (item.quantity <= 0) {
    return { status: "Out of Stock", style: "bg-red-100 text-red-800" };
  }
  if (item.quantity <= minThreshold) {
    return { status: "Low Stock", style: "bg-orange-100 text-orange-800" };
  }

  return { status: "In Stock", style: "bg-green-100 text-green-800" };
};

export default function Dashboard({ allInventory, projects }: DashboardProps) {
  

  const lowStockCount = allInventory.filter(item => 
    calculateStatus(item).status === "Low Stock" || 
    calculateStatus(item).status === "Out of Stock"
  ).length;

  const activeProjects = projects.length;

  return (
    <div className="flex h-screen">
     
      <main className="flex-1 overflow-y-auto p-8">
        {/* Overview Cards */}
       
        <h1 className="text-xl lg:text-3xl font-bold mb-10 sm:mb-0">Dashboard</h1>
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
                  <div className="text-2xl font-bold">{activeProjects}</div>
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
                  <div className="text-2xl font-bold">{lowStockCount}</div>
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
        <Tabs defaultValue="inventory" className="space-y-4">
          <TabsList className="bg-white border">
            <TabsTrigger value="inventory" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">Inventory Overview</TabsTrigger>
            <TabsTrigger value="usage" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">Material Usage</TabsTrigger>
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
      </main>
    </div>
  );
}
