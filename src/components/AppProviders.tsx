"use client";

import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import CustomCursor from "@/components/CustomCursor";

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <TooltipProvider>
      <CustomCursor />
      {children}
      <Toaster />
      <Sonner />
    </TooltipProvider>
  );
};

export default AppProviders;
