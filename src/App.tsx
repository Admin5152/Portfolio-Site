import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Router is provided in main.tsx
import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EducationKnust from "./pages/EducationKnust";
import ExperienceBiscovs from "./pages/ExperienceBiscovs";
import ExperienceEcl from "./pages/ExperienceEcl";
import ServiceWebDesign from "./pages/ServiceWebDesign";
import ServiceDevelopment from "./pages/ServiceDevelopment";
import ServiceMobileApps from "./pages/ServiceMobileApps";
import ServiceAI from "./pages/ServiceAI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <Routes>
        <Route path="/" element={<Index />} />
        {/* Education Pages */}
        <Route path="/education/knust" element={<EducationKnust />} />
        {/* Experience Pages */}
        <Route path="/experience/biscovs" element={<ExperienceBiscovs />} />
        <Route path="/experience/ecl" element={<ExperienceEcl />} />
        {/* Service Pages */}
        <Route path="/services/web-design" element={<ServiceWebDesign />} />
        <Route path="/services/development" element={<ServiceDevelopment />} />
        <Route path="/services/mobile-apps" element={<ServiceMobileApps />} />
        <Route path="/services/ai-integration" element={<ServiceAI />} />
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
