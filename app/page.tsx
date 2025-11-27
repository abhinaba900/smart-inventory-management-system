"use client";
import "./global.css";

import { Toaster } from "@/app/components/ui/toaster";
import { Toaster as Sonner } from "@/app/components/ui/sonner";
import { TooltipProvider } from "@/app/components/ui/tooltip";
import Index from "./pages/Index";


const page = () => (
  <div className="bg-[#f5f9f5]">
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Index />
    </TooltipProvider>
  </div>
);


export default page;
