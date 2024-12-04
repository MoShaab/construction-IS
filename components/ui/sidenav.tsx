"use client";

import { Button } from "@/components/ui/button";
import {
  Settings,
  LogOut,
  HardHat,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import NavLinks from "./nav-links";

export const Sidebar = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f8fafc]">
      {/* Mobile Menu Toggle */}
      <Button
        variant="ghost"
        className="fixed top-4 left-4 z-50 sm:hidden"
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      >
        {isMobileSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div
        className={`
          fixed sm:static top-0 left-0 z-40 w-64 bg-white border-r border-gray-200 
          sm:transform-none transform transition-all duration-300 ease-in-out
          ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 h-full
        `}
      >
        <div className="p-6 flex justify-center sm:justify-start">
          <div className="flex items-center gap-2">
            <HardHat className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
              CMIMS
            </h1>
          </div>
        </div>
        <div className="px-3">
          <NavLinks />
        </div>
        <div className="bottom-4 px-3 w-full sm:w-64 mt-4">
          <hr className="my-4" />
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Log Out
          </Button>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 sm:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}
    </div>
  );
};
