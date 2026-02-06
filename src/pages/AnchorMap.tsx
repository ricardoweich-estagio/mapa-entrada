import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAnchorById } from "@/data/anchorData";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AnchorMap = () => {
  const { anchorId } = useParams();
  const navigate = useNavigate();
  const targetAnchor = getAnchorById(Number(anchorId));

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 15000);
    return () => clearTimeout(timer);
  }, [navigate]);

  if (!targetAnchor) return <div className="text-white p-10">Empresa não encontrada</div>;

  // --- ESTILOS VISUAIS ---
  const roadStyle = {
    fill: 'none',
    stroke: '#1e293b',
    strokeWidth: '60',
    strokeLinecap: 'round' as const
  };

  // --- COORDENADAS DOS PRÉDIOS ---
  const buildings = {
    // BLOCO ESQUERDO SUPERIOR
    // ATUALIZADO: Rótulos agora incluem o nome EMITELI
    emiteli1: { id: 1, x: 20,  y: 50, w: 100, h: 150, label: "1F - EMITELI" },
    emiteli2: { id: 1, x: 140, y: 50, w: 100, h: 150, label: "1E - EMITELI" },
    
    akiyama:  { id: 3, x: 260, y: 50, w: 100, h: 150, label: "1D - AKIYAMA" },

    // BLOCO ESQUERDO INFERIOR
    bitz:      { id: 4, x: 20,  y: 320, w: 100, h: 180, label: "1A - BITZ" },
    gasfacil:  { id: 5, x: 140, y: 320, w: 100, h: 180, label: "1B - GÁSFÁCIL" },
    softfocus: { id: 6, x: 260, y: 320, w: 100, h: 180, label: "1C - SOFTFOCUS" },

    // PARQUE
    parque:    { id: 0, x: 450, y: 50,  w: 320, h: 150, label: "PARQUE TECNOLÓGICO" }
  };

  // --- LÓGICA DO CAMINHO ---
  const getPath = () => {
    const startX = 610; 
    const startY = 210; 

    // Ruas
    const streetVerticalX = 420;
    const streetMiddleY = 260; 
    const streetBottomY = 560; 

    let d = `M ${startX} ${startY}`; 
    d += ` L ${startX} ${streetMiddleY}`; // Sai do parque até a rua do meio

    switch (targetAnchor.id) {
      // --- PRÉDIOS DE CIMA ---
      case 1: // 1E e 1F - Emiteli (CAMINHO UNIFICADO)
        d += ` L 130 ${streetMiddleY}`; // Vai até o MEIO dos dois prédios
        d += ` L 130 200`;              // Sobe para o centro
        break;

      case 3: // 1D - Akiyama
        d += ` L 310 ${streetMiddleY}`;
        d += ` L 310 200`;
        break;

      // --- PRÉDIOS DE BAIXO ---
      case 4: // 1A - Bitz
        d += ` L ${streetVerticalX} ${streetMiddleY}`;
        d += ` L ${streetVerticalX} ${streetBottomY}`;
        d += ` L 70 ${streetBottomY}`;                 
        d += ` L 70 500`;                              
        break;
      case 5: // 1B - GásFácil
        d += ` L ${streetVerticalX} ${streetMiddleY}`;
        d += ` L ${streetVerticalX} ${streetBottomY}`;
        d += ` L 190 ${streetBottomY}`;
        d += ` L 190 500`;
        break;
      case 6: // 1C - Softfocus
        d += ` L ${streetVerticalX} ${streetMiddleY}`;
        d += ` L ${streetVerticalX} ${streetBottomY}`;
        d += ` L 310 ${streetBottomY}`;
        d += ` L 310 500`;
        break;
    }
    return d;
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a1120] p-6 text-white animate-fade-in relative">
      <div className="absolute top-0 left-0 h-1 bg-red-600/50 animate-[width_15s_linear_forwards] w-full" />

      <div className="w-full max-w-7xl flex flex-col h-full">
        <div className="flex justify-between items-end mb-6">
          <div>
            <Button variant="ghost" onClick={() => navigate("/ancoras")} className="mb-2 gap-2 text-slate-400 hover:text-white pl-0">
              <ArrowLeft className="h-5 w-5" /> Voltar
            </Button>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
              {targetAnchor.code} — {targetAnchor.name}
            </h1>
            <p className="text-blue-400 font-mono mt-1 tracking-widest uppercase opacity-80">
              MAPA EXTERNO
            </p>
          </div>
        </div>

        <div className="w-full bg-[#0f172a] rounded-3xl border border-slate-800 relative shadow-2xl overflow-hidden flex-1 min-h-[600px]">
          
          <svg viewBox="0 0 800 600" style={{ width: '100%', height: '100%', padding: '20px' }}>
            
            {/* RUAS */}
            <line x1="420" y1="0" x2="420" y2="600" style={roadStyle} opacity="0.3" />
            <line x1="0" y1="260" x2="800" y2="260" style={roadStyle} opacity="0.3" />
            <line x1="0" y1="560" x2="450" y2="560" style={roadStyle} opacity="0.3" />
            
            {/* PRÉDIOS */}
            {Object.values(buildings).map((b, index) => {
              const isTarget = targetAnchor.id === b.id;
              const isStart = b.id === 0;

              return (
                <g key={index}>
                  <rect 
                    x={b.x} y={b.y} width={b.w} height={b.h} rx="4"
                    style={{
                      fill: isTarget ? 'rgba(220, 38, 38, 0.1)' : (isStart ? 'rgba(59, 130, 246, 0.1)' : '#1e293b'),
                      stroke: isTarget ? '#ef4444' : (isStart ? '#3b82f6' : '#475569'),
                      strokeWidth: isTarget || isStart ? '3' : '2'
                    }} 
                  />
                  {/* TEXTO DO RÓTULO */}
                  <text 
                    x={b.x + b.w/2} y={b.y + b.h/2} 
                    textAnchor="middle" dominantBaseline="middle"
                    fill={isTarget ? '#fff' : (isStart ? '#93c5fd' : '#64748b')}
                    style={{ fontSize: '10px', fontWeight: 'bold', fontFamily: 'monospace' }} // Reduzi levemente a fonte para caber o nome
                  >
                    {/* Quebra de linha manual para não ficar muito largo, se necessário, ou texto direto */}
                    {b.label}
                  </text>
                  
                  {/* PORTAS */}
                   <rect 
                     x={b.x + b.w/2 - 20} 
                     y={b.y + b.h - 5}    
                     width="40" height="10" 
                     fill={isTarget ? '#ef4444' : (isStart ? '#3b82f6' : '#334155')}
                   />
                </g>
              );
            })}

            {/* TRAJETO */}
            <path 
              d={getPath()} 
              fill="none" stroke="rgba(220, 38, 38, 0.2)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" 
            />
            <path 
              d={getPath()} 
              fill="none" stroke="#ef4444" strokeWidth="4" strokeDasharray="12,12" strokeLinecap="round" strokeLinejoin="round"
            >
               <animate attributeName="stroke-dashoffset" from="200" to="0" dur="3s" repeatCount="indefinite" />
            </path>

            {/* Ponto de Origem */}
            <circle cx="610" cy="210" r="8" fill="#3b82f6" stroke="white" strokeWidth="2">
               <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
            </circle>

          </svg>

          {/* Legenda */}
          <div className="absolute bottom-6 right-6 bg-[#0a1120]/90 border border-slate-700 p-4 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-1 bg-red-500 rounded-full"></div>
              <span className="text-xs text-slate-300">Trajeto pela Rua</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-2 bg-slate-600"></div>
              <span className="text-xs text-slate-500">Entrada do Prédio</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnchorMap;