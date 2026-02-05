import { useNavigate } from "react-router-dom";
import { anchorData } from "@/data/anchorData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2 } from "lucide-react";

const AnchorList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a1120] p-6 animate-fade-in">
      <div className="w-full max-w-6xl h-full flex flex-col gap-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Button variant="ghost" onClick={() => navigate("/")} className="mb-2 gap-2 text-slate-400 hover:text-white pl-0">
              <ArrowLeft className="h-5 w-5" /> Voltar ao Início
            </Button>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              EMPRESAS ÂNCORAS
            </h1>
            <p className="text-blue-400 mt-1">Selecione o prédio externo de destino</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {anchorData.map((anchor) => (
            <button
              key={anchor.id}
              onClick={() => navigate(`/mapa-ancora/${anchor.id}`)}
              className="group flex flex-col items-start p-8 bg-[#0f172a] border border-slate-800 hover:border-blue-500 hover:bg-blue-500/10 rounded-3xl transition-all duration-300 text-left relative overflow-hidden"
            >
              {/* Efeito decorativo */}
              <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/5 rounded-bl-[100px] pointer-events-none group-hover:bg-blue-500/10 transition-colors" />

              <div className="w-full flex justify-between items-start mb-6 relative z-10">
                <span className="text-4xl font-black text-slate-700 group-hover:text-blue-400 transition-colors">
                  {anchor.id.toString().padStart(2, '0')}
                </span>
                <Building2 className="w-8 h-8 text-slate-600 group-hover:text-blue-400" />
              </div>
              <h3 className="text-white font-bold text-2xl leading-tight group-hover:translate-x-1 transition-transform relative z-10">
                {anchor.name}
              </h3>
              <p className="text-slate-500 text-sm mt-2 relative z-10">
                {anchor.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnchorList;