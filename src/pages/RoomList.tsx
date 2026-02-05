import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { roomData } from "@/data/roomData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, Building2 } from "lucide-react";

const RoomList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Filtra as salas (exclui banheiros/cozinhas da lista clicável)
  const filteredRooms = roomData.filter((room) => {
    const isCommercial = room.company && room.company !== "Banheiros" && room.company !== "Cozinha";
    const matchesSearch = room.company?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          room.id.toString().includes(searchTerm);
    return isCommercial && matchesSearch;
  });

  return (
    // WRAPPER PRINCIPAL: Centraliza na TV/Monitor, rola no celular
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a1120] p-6 animate-fade-in">
      <div className="w-full max-w-6xl h-full flex flex-col gap-8">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Button variant="ghost" onClick={() => navigate("/")} className="mb-2 gap-2 text-slate-400 hover:text-white pl-0">
              <ArrowLeft className="h-5 w-5" /> Voltar ao Início
            </Button>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              SELECIONE O DESTINO
            </h1>
            <p className="text-blue-400 mt-1">Toque na empresa ou número da sala</p>
          </div>

          {/* Barra de Busca */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            <Input 
              placeholder="Buscar por nome ou número..." 
              className="pl-12 h-14 bg-[#161f31] border-slate-700 text-white rounded-xl focus:ring-blue-500 focus:border-blue-500 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Grid de Salas */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {filteredRooms.map((room) => (
            <button
              key={room.id}
              onClick={() => navigate(`/mapa/${room.id}`)}
              className="group flex flex-col items-start p-6 bg-[#0f172a] border border-slate-800 hover:border-blue-500 hover:bg-blue-500/10 rounded-2xl transition-all duration-300 text-left"
            >
              <div className="w-full flex justify-between items-start mb-4">
                <span className="text-3xl font-black text-slate-600 group-hover:text-blue-400 transition-colors">
                  {room.id.toString().padStart(2, '0')}
                </span>
                <Building2 className="w-6 h-6 text-slate-700 group-hover:text-blue-400" />
              </div>
              <h3 className="text-white font-bold text-lg leading-tight group-hover:translate-x-1 transition-transform">
                {room.company}
              </h3>
              <p className="text-slate-500 text-xs mt-2 uppercase tracking-wider">
                {room.floor === 1 ? "Térreo" : "2º Andar"} • Lado {room.side}
              </p>
            </button>
          ))}
          
          {filteredRooms.length === 0 && (
            <div className="col-span-full text-center py-20 text-slate-500">
              Nenhuma sala encontrada com este nome.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomList;