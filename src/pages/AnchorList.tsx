import { useNavigate } from "react-router-dom";
import { anchorData } from "@/data/anchorData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2 } from "lucide-react";

const AnchorList = () => {
  const navigate = useNavigate();

  // Ordenar para aparecer na ordem lógica: 1A, 1B, 1C, 1D, 1E/1F
  const sortedAnchors = [...anchorData].sort((a, b) => a.code.localeCompare(b.code));

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a1120] p-6 animate-fade-in">
      <div className="w-full max-w-6xl h-full flex flex-col gap-8">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            {/* Botão de Voltar Corrigido */}
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")} 
              className="mb-4 gap-2 text-slate-400 hover:text-white pl-0 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" /> 
              Voltar ao Início
            </Button>

            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              Empresas Âncoras
            </h1>
            <p className="text-blue-400 mt-2 text-lg">
              Selecione o código ou nome da empresa
            </p>
          </div>
        </div>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedAnchors.map((anchor) => (
            <button
              key={anchor.id}
              onClick={() => navigate(`/mapa-ancora/${anchor.id}`)}
              className="group flex flex-col items-start p-8 bg-[#0f172a] border border-slate-800 hover:border-blue-500 hover:bg-blue-500/10 rounded-3xl transition-all duration-300 text-left relative overflow-hidden shadow-lg"
            >
              {/* Efeito decorativo de fundo */}
              <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/5 rounded-bl-[100px] pointer-events-none group-hover:bg-blue-500/10 transition-colors" />

              <div className="w-full flex justify-between items-start mb-6 relative z-10">
                {/* CÓDIGO (1A, 1B...) */}
                <span className="text-5xl font-black text-slate-700 group-hover:text-blue-400 transition-colors tracking-tighter">
                  {anchor.code}
                </span>
                
                {/* ÍCONE */}
                <div className="p-3 rounded-xl bg-slate-800/50 group-hover:bg-blue-500/20 transition-colors">
                  <Building2 className="w-6 h-6 text-slate-400 group-hover:text-blue-400" />
                </div>
              </div>

              {/* NOME DA EMPRESA */}
              <h3 className="text-white font-bold text-2xl leading-tight group-hover:translate-x-1 transition-transform relative z-10">
                {anchor.name}
              </h3>
              
              {/* DESCRIÇÃO */}
              <p className="text-slate-500 text-sm mt-3 relative z-10 line-clamp-2 leading-relaxed">
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