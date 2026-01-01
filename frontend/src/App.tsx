import { ThemeProvider } from "next-themes";
import { MainLayout } from "./components/layout/MainLayout";
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
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<RequireAuth><MainLayout /></RequireAuth>}>
              <Route path="/" element={<Index />} />
              <Route path="/sucursales" element={<Sucursales />} />
              <Route path="/planes" element={<Planes />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/clases" element={<Clases />} />
              <Route path="/profesores" element={<Profesores />} />
              <Route path="/crm" element={<Crm />} />
              <Route path="/reportes" element={<Reportes />} />
              <Route path="/configuracion" element={<Configuracion />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
