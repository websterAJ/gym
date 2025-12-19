import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sucursales from "./pages/Sucursales";
import Planes from "./pages/Planes";
import Clientes from "./pages/Clientes";
import Clases from "./pages/Clases";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import RequireAuth from "./components/RequireAuth";
import Profesores from "./pages/Profesores";
import Crm from "./pages/Crm";
import Reportes from "./pages/Reportes";
import Configuracion from "./pages/Configuracion";
import Logout from "./pages/Logout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RequireAuth><Index /></RequireAuth>} />
          <Route path="/sucursales" element={<RequireAuth><Sucursales /></RequireAuth>} />
          <Route path="/planes" element={<RequireAuth><Planes /></RequireAuth>} />
          <Route path="/clientes" element={<RequireAuth><Clientes /></RequireAuth>} />
          <Route path="/clases" element={<RequireAuth><Clases /></RequireAuth>} />
          <Route path="/login" element={<Login />} />
          <Route path="/profesores" element={<RequireAuth><Profesores /></RequireAuth>} />
          <Route path="/crm" element={<RequireAuth><Crm /></RequireAuth>} />
          <Route path="/reportes" element={<RequireAuth><Reportes /></RequireAuth>} />
          <Route path="/configuracion" element={<RequireAuth><Configuracion /></RequireAuth>} />
          <Route path="/logout" element={<Logout />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
