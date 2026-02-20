import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { personData } from "@/data/personData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, User, Briefcase } from "lucide-react";

const PersonList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // --- TIMER DE INATIVIDADE (3 MINUTOS) ---
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        navigate("/");
      }, 180000); // 180.000 ms = 3 minutos
    };

    const events = ["mousedown", "mousemove", "keypress", "scroll", "touchstart"];
    events.forEach(event => document.addEventListener(event, resetTimer));
    resetTimer(); // Inicia na montagem

    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => document.removeEventListener(event, resetTimer));
    };
  }, [navigate]);

  // --- LÓGICA DE FILTRO ---
  const filteredPeople = personData.filter((person) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      person.name.toLowerCase().includes(searchLower) ||
      person.company.toLowerCase().includes(searchLower) ||
      (person.role && person.role.toLowerCase().includes(searchLower))
    );
  });

  // Ordena em ordem alfabética pelo nome
  const sortedPeople = [...filteredPeople].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a1120] p-6 animate-fade-in">
      <div className="w-full max-w-6xl h-full flex flex-col gap-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Button variant="ghost" onClick={() => navigate("/")} className="mb-2 gap-2 text-slate-400 hover:text-white pl-0 transition-colors">
              <ArrowLeft className="h-5 w-5" /> Voltar ao Início
            </Button>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              DIRETÓRIO DE PESSOAS
            </h1>
            <p className="text-blue-400 mt-1 text-lg">Busque pelo nome, cargo ou empresa</p>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            <Input 
              placeholder="Digite o nome do funcionário..." 
              className="pl-12 h-14 bg-[#161f31] border-slate-700 text-white rounded-xl focus:ring-blue-500 focus:border-blue-500 text-lg shadow-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-full max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {sortedPeople.map((person) => (
            <button
              key={person.id}
              // Ao clicar, o sistema leva direto para o mapa da sala que aquela pessoa pertence
              onClick={() => navigate(`/mapa/${person.roomId}`)}
              className="group flex flex-col items-start p-6 bg-[#0f172a] border border-slate-800 hover:border-blue-500 hover:bg-blue-500/10 rounded-2xl transition-all duration-300 text-left relative overflow-hidden shadow-md"
            >
              {/* Ícone e Nome */}
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 flex-shrink-0 group-hover:bg-blue-500/40 transition-colors">
                  <User className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight group-hover:text-blue-300 transition-colors">
                    {person.name}
                  </h3>
                  {person.role && (
                    <p className="text-slate-400 text-xs mt-1 font-medium uppercase tracking-wider">
                      {person.role}
                    </p>
                  )}
                </div>
              </div>

              {/* Informação da Empresa/Sala */}
              <div className="w-full mt-auto pt-3 border-t border-slate-800/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-300 text-sm font-semibold">{person.company}</span>
                </div>
                
                {/* Rótulo visual para instigar o clique */}
                <span className="text-[10px] text-red-400 bg-red-500/10 px-2 py-1 rounded-md font-bold uppercase">
                  Ver Mapa
                </span>
              </div>

            </button>
          ))}
          
          {sortedPeople.length === 0 && (
            <div className="col-span-full text-center py-20 text-slate-500 text-lg">
              Nenhuma pessoa encontrada com este nome.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonList;