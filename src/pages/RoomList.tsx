import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { roomData, RoomCategory } from "@/data/roomData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search } from "lucide-react"; // Removido o ícone 'User'

const RoomList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<RoomCategory | "Todos">("Todos");

  // --- TIMER DE INATIVIDADE (3 MINUTOS) ---
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        navigate("/");
      }, 180000);
    };

    const events = ["mousedown", "mousemove", "keypress", "scroll", "touchstart"];
    events.forEach(event => document.addEventListener(event, resetTimer));
    resetTimer();

    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => document.removeEventListener(event, resetTimer));
    };
  }, [navigate]);

  // --- OPÇÕES DE FILTRO RÁPIDO ---
  const filters: { id: RoomCategory | "Todos"; label: string }[] = [
    { id: "Todos", label: "Todas as Salas" },
    { id: "Smcti", label: "SMCTI / ITECPB" },
    { id: "Startup Itec", label: "Incubadas ITECPB" },
    { id: "Startup Sprint", label: "Incubadas Sprint" },
    { id: "UTFPR", label: "Projetos UTFPR" },
  ];

  // --- LÓGICA DE FILTRAGEM (Busca + Filtro Rápido) ---
  const filteredRooms = roomData.filter((room) => {
    const isCommercial = room.company && room.company !== "Banheiros" && room.company !== "Cozinha";
    
    // Verifica a barra de pesquisa (agora apenas por empresa ou número da sala)
    const matchesSearch = room.company?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          room.id.toString().includes(searchTerm);
                          
    // Verifica o botão de filtro selecionado
    const matchesFilter = activeFilter === "Todos" || room.category === activeFilter;

    return isCommercial && matchesSearch && matchesFilter;
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
      <div className="w-full max-w-6xl h-full flex flex-col gap-6">
        
        {/* CABEÇALHO E BUSCA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Button variant="ghost" onClick={() => navigate("/")} className="mb-2 gap-2 text-slate-400 hover:text-white pl-0">
              <ArrowLeft className="h-5 w-5" /> Voltar ao Início
            </Button>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              SELECIONE O DESTINO
            </h1>
            <p className="text-blue-400 mt-1">Toque na empresa ou número da sala</p>
          </div>

          <div className="relative w-full md:w-96 flex-shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            <Input 
              placeholder="Buscar por nome ou sala..." 
              className="pl-12 h-14 bg-[#161f31] border-slate-700 text-white rounded-xl focus:ring-blue-500 focus:border-blue-500 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* --- BOTÕES DE FILTRO RÁPIDO --- */}
        <div className="flex flex-wrap gap-2 md:gap-3 w-full pb-2">
          {filters.map(filter => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-5 h-10 text-sm md:text-base font-semibold transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-[0_0_15px_rgba(37,99,235,0.4)] border-transparent' 
                  : 'bg-[#0f172a] border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 hover:bg-white/5'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* GRID DE SALAS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full max-h-[55vh] overflow-y-auto pr-2 custom-scrollbar mt-2">
          {filteredRooms.map((room) => (
            <button
              key={room.id}
              onClick={() => navigate(`/mapa/${room.id}`)}
              className="group flex flex-col items-start p-6 bg-[#0f172a] border border-slate-800 hover:border-blue-500 hover:bg-blue-500/10 rounded-2xl transition-all duration-300 text-left relative overflow-hidden shadow-md"
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
              
              <h3 className="text-white font-bold text-lg leading-tight group-hover:translate-x-1 transition-transform pr-2 mb-3">
                {room.company}
              </h3>
              
              <p className="text-slate-600 text-[10px] uppercase tracking-wider mt-auto pt-2 border-t border-slate-800/50 w-full">
                {room.floor === 1 ? "Térreo" : "2º Andar"} • Lado {room.side}
              </p>
            </button>
          ))}
          
          {filteredRooms.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-500">
              <span className="text-6xl mb-4">🔍</span>
              <p className="text-xl font-medium">Nenhuma sala encontrada.</p>
              <p className="text-sm mt-2 opacity-70">Tente ajustar a busca ou o filtro.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomList;