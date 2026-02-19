import { useState, useEffect } from "react"; // Adicione useEffect
import { useNavigate } from "react-router-dom";
import { roomData, RoomCategory } from "@/data/roomData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, User } from "lucide-react";

const RoomList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // --- TIMER DE INATIVIDADE (3 MINUTOS) ---
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resetTimer = () => {
      // Limpa o timer anterior
      clearTimeout(timeoutId);
      // Define um novo timer para 3 minutos (180000 ms)
      timeoutId = setTimeout(() => {
        navigate("/");
      }, 180000);
    };

    // Eventos que reiniciam o timer (interação do usuário)
    const events = ["mousedown", "mousemove", "keypress", "scroll", "touchstart"];
    
    // Adiciona os ouvintes
    events.forEach(event => document.addEventListener(event, resetTimer));

    // Inicia o timer na montagem
    resetTimer();

    // Limpeza ao sair da página
    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => document.removeEventListener(event, resetTimer));
    };
  }, [navigate]);

  // --- FILTROS E LÓGICA (Mantido igual) ---
  const filteredRooms = roomData.filter((room) => {
    const isCommercial = room.company && room.company !== "Banheiros" && room.company !== "Cozinha";
    const matchesSearch = room.company?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          room.id.toString().includes(searchTerm) ||
                          room.owner?.toLowerCase().includes(searchTerm.toLowerCase());
    return isCommercial && matchesSearch;
  });

  const getCategoryColor = (category?: RoomCategory) => {
    switch (category) {
      case 'Smcti': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      case 'Startup Itec': return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
      case 'UTFPR': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'Startup Sprint': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      default: return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a1120] p-6 animate-fade-in">
      <div className="w-full max-w-6xl h-full flex flex-col gap-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Button variant="ghost" onClick={() => navigate("/")} className="mb-2 gap-2 text-slate-400 hover:text-white pl-0">
              <ArrowLeft className="h-5 w-5" /> Voltar ao Início
            </Button>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              SELECIONE O DESTINO
            </h1>
            <p className="text-blue-400 mt-1">Toque na empresa, número ou responsável</p>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            <Input 
              placeholder="Buscar por nome, sala ou responsável..." 
              className="pl-12 h-14 bg-[#161f31] border-slate-700 text-white rounded-xl focus:ring-blue-500 focus:border-blue-500 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {filteredRooms.map((room) => (
            <button
              key={room.id}
              onClick={() => navigate(`/mapa/${room.id}`)}
              className="group flex flex-col items-start p-6 bg-[#0f172a] border border-slate-800 hover:border-blue-500 hover:bg-blue-500/10 rounded-2xl transition-all duration-300 text-left relative overflow-hidden"
            >
              {room.category && (
                <div className={`absolute top-4 right-4 px-2 py-1 rounded-md border text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(room.category)}`}>
                  {room.category}
                </div>
              )}

              <div className="w-full flex justify-between items-start mb-2 mt-2">
                <span className="text-3xl font-black text-slate-600 group-hover:text-blue-400 transition-colors">
                  {room.id.toString().padStart(2, '0')}
                </span>
              </div>
              
              <h3 className="text-white font-bold text-lg leading-tight group-hover:translate-x-1 transition-transform pr-2 mb-1">
                {room.company}
              </h3>

              {room.owner && (
                <div className="flex items-center gap-2 mt-1 mb-3">
                  <User className="w-3 h-3 text-slate-500" />
                  <p className="text-slate-400 text-xs font-medium truncate max-w-[180px]">
                    {room.owner}
                  </p>
                </div>
              )}
              
              <p className="text-slate-600 text-[10px] uppercase tracking-wider mt-auto pt-2 border-t border-slate-800/50 w-full">
                {room.floor === 1 ? "Térreo" : "2º Andar"} • Lado {room.side}
              </p>
            </button>
          ))}
          
          {filteredRooms.length === 0 && (
            <div className="col-span-full text-center py-20 text-slate-500">
              Nenhuma sala encontrada.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomList;