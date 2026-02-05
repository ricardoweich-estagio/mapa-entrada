import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Building } from "lucide-react"; // Importei Building

import parqueLogo from "../assets/parque.png"; 
import itecpbLogo from "../assets/itecpb.png";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a1120] overflow-hidden p-6 relative">
      
      {/* Efeitos de Fundo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center gap-10">
        
        {/* Logos */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl w-full flex items-center justify-center gap-6 animate-fade-down shadow-2xl">
          <img src={parqueLogo} alt="Logo Parque" className="h-16 md:h-20 w-auto object-contain rounded-md bg-white/90 p-1" />
          <div className="w-[1px] h-12 bg-white/20" /> 
          <img src={itecpbLogo} alt="Logo ITECPB" className="h-12 md:h-16 w-auto object-contain" />
        </div>

        {/* Texto */}
        <div className="text-center space-y-4 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight drop-shadow-lg">
            LOCALIZE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              SUA SALA
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light">
            Sistema de navegação interna do Parque Tecnológico.
          </p>
        </div>

        {/* BOTÕES DE AÇÃO */}
        <div className="w-full flex flex-col gap-4 animate-fade-up px-4">
          
          {/* Botão Principal (Salas) */}
          <Button 
            size="lg" 
            onClick={() => navigate("/salas")}
            className="w-full h-16 text-xl font-bold bg-red-600 hover:bg-red-700 text-white rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-300 border border-red-500/50"
          >
            <span className="mr-3">Iniciar Navegação Interna</span>
            <ArrowRight className="w-6 h-6" />
          </Button>

          {/* NOVO BOTÃO: Empresas Âncoras */}
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate("/ancoras")}
            className="w-full h-14 text-lg font-bold border-2 border-slate-600 text-slate-300 hover:bg-white/5 hover:text-white hover:border-blue-400 rounded-2xl transition-all duration-300"
          >
            <Building className="w-5 h-5 mr-3" />
            Empresas Âncoras
          </Button>

        </div>

        <div className="flex items-center gap-2 text-white text-xs md:text-sm font-mono tracking-widest uppercase opacity-60 mt-4">
          <MapPin className="w-4 h-4" />
          <span>PATO BRANCO / PR</span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;