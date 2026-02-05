import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORTAÇÃO DAS PÁGINAS
import Welcome from "./pages/Welcome";
import RoomList from "./pages/RoomList";
import MapView from "./pages/MapView";
import AnchorList from "./pages/AnchorList"; // <--- Novo
import AnchorMap from "./pages/AnchorMap";   // <--- Novo

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Rota Inicial (Tela de Boas-Vindas) */}
          <Route path="/" element={<Welcome />} />

          {/* Rotas das Salas Internas */}
          <Route path="/salas" element={<RoomList />} />
          <Route path="/mapa/:roomId" element={<MapView />} />

          {/* NOVAS ROTAS: Empresas Âncoras (Externas) */}
          <Route path="/ancoras" element={<AnchorList />} />
          <Route path="/mapa-ancora/:anchorId" element={<AnchorMap />} />
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;