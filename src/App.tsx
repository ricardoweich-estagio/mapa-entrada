import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORTAÇÃO DAS PÁGINAS
import Welcome from "./pages/Welcome";
import RoomList from "./pages/RoomList";
import MapView from "./pages/MapView";
import AnchorList from "./pages/AnchorList";
import AnchorMap from "./pages/AnchorMap";
import PersonList from "./pages/personlist"; // <--- Novo Import

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Tela Inicial */}
          <Route path="/" element={<Welcome />} />

          {/* Diretório de Pessoas (Novo) */}
          <Route path="/pessoas" element={<PersonList />} />

          {/* Incubadas */}
          <Route path="/salas" element={<RoomList />} />
          <Route path="/mapa/:roomId" element={<MapView />} />

          {/* Âncoras */}
          <Route path="/ancoras" element={<AnchorList />} />
          <Route path="/mapa-ancora/:anchorId" element={<AnchorMap />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;