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
  const lineStyle = {
    fill: 'none',
    stroke: '#475569',
    strokeWidth: '2',
    vectorEffect: 'non-scaling-stroke' as const
  };

  const roadStyle = {
    fill: 'none',
    stroke: '#1e293b',
    strokeWidth: '60', // Rua Larga
    strokeLinecap: 'round' as const
  };

  // --- COORDENADAS DOS PRÉDIOS ---
  // Ajuste: Rua Vertical em X=420 para dar espaço ao Parque Largo
  const buildings = {
    // BLOCO ESQUERDO SUPERIOR (Entradas por baixo, Y=200)
    emiteli1: { id: 1, x: 20,  y: 50, w: 100, h: 150, label: "EMITELI 1" },
    emiteli2: { id: 2, x: 140, y: 50, w: 100, h: 150, label: "EMITELI 2" },
    akiyama:  { id: 3, x: 260, y: 50, w: 100, h: 150, label: "AKIYAMA" },

    // BLOCO ESQUERDO INFERIOR (Entradas por baixo, Y=500)
    bitz:      { id: 4, x: 20,  y: 320, w: 100, h: 180, label: "BITZ" },
    vazio:     { id: 5, x: 140, y: 320, w: 100, h: 180, label: "DISPONÍVEL" },
    softfocus: { id: 6, x: 260, y: 320, w: 100, h: 180, label: "SOFTFOCUS" },

    // PARQUE (DIREITA) - Retângulo Largo
    // Entrada agora é embaixo (Y=200)
    parque:    { id: 0, x: 450, y: 50,  w: 320, h: 150, label: "PARQUE TECNOLÓGICO" }
  };

  // --- LÓGICA DO CAMINHO ---
  const getPath = () => {
    // 1. PONTO DE PARTIDA (Porta do Parque - Embaixo/Centro)
    // O prédio vai de X:450 até X:770 (Largura 320). Centro X = 610.
    // Altura Y: 50 até 200. Porta Y = 210 (Um pouco pra fora).
    const startX = 610; 
    const startY = 210; 

    // Ruas
    const streetVerticalX = 420;
    const streetMiddleY = 260; // Rua entre blocos de cima e baixo
    const streetBottomY = 560; // Rua de baixo

    let d = `M ${startX} ${startY}`; // Início na porta do parque

    // 2. SAI DO PARQUE ATÉ A RUA DO MEIO
    d += ` L ${startX} ${streetMiddleY}`; // Desce até a rua

    // 3. ROTEAMENTO
    switch (targetAnchor.id) {
      // --- PRÉDIOS DE CIMA (Emiteli, Akiyama) ---
      // Caminho: Esquerda pela rua do meio -> Sobe para a porta
      case 1: // Emiteli 1
        d += ` L 70 ${streetMiddleY}`; // Vai tudo para a esquerda
        d += ` L 70 200`;              // Sobe para porta
        break;
      case 2: // Emiteli 2
        d += ` L 190 ${streetMiddleY}`;
        d += ` L 190 200`;
        break;
      case 3: // Akiyama
        d += ` L 310 ${streetMiddleY}`;
        d += ` L 310 200`;
        break;

      // --- PRÉDIOS DE BAIXO (Bitz, Softfocus) ---
      // Caminho: Esquerda até rua vertical -> Desce até rua de baixo -> Esquerda -> Sobe
      case 4: // Bitz
        d += ` L ${streetVerticalX} ${streetMiddleY}`; // Vai até cruzamento
        d += ` L ${streetVerticalX} ${streetBottomY}`; // Desce a rua vertical
        d += ` L 70 ${streetBottomY}`;                 // Esquerda na rua de baixo
        d += ` L 70 500`;                              // Sobe para porta
        break;
      case 5: // Vazio
        d += ` L ${streetVerticalX} ${streetMiddleY}`;
        d += ` L ${streetVerticalX} ${streetBottomY}`;
        d += ` L 190 ${streetBottomY}`;
        d += ` L 190 500`;
        break;
      case 6: // Softfocus
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
        {/* Header */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <Button variant="ghost" onClick={() => navigate("/ancoras")} className="mb-2 gap-2 text-slate-400 hover:text-white pl-0">
              <ArrowLeft className="h-5 w-5" /> Voltar
            </Button>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
              {targetAnchor.name}
            </h1>
            <p className="text-blue-400 font-mono mt-1 tracking-widest uppercase opacity-80">
              MAPA DE ACESSO
            </p>
          </div>
        </div>

        {/* MAPA SVG */}
        <div className="w-full bg-[#0f172a] rounded-3xl border border-slate-800 relative shadow-2xl overflow-hidden flex-1 min-h-[600px]">
          
          <svg viewBox="0 0 800 600" style={{ width: '100%', height: '100%', padding: '20px' }}>
            
            {/* 1. RUAS (Background) */}
            {/* Rua Vertical (Divisória) */}
            <line x1="420" y1="0" x2="420" y2="600" style={roadStyle} opacity="0.3" />
            {/* Rua Horizontal Central */}
            <line x1="0" y1="260" x2="800" y2="260" style={roadStyle} opacity="0.3" />
             {/* Rua Horizontal Inferior */}
             <line x1="0" y1="560" x2="450" y2="560" style={roadStyle} opacity="0.3" />
            
            {/* 2. PRÉDIOS */}
            {Object.values(buildings).map((b) => {
              const isTarget = targetAnchor.id === b.id;
              const isStart = b.id === 0;

              return (
                <g key={b.label}>
                  {/* Bloco do Prédio */}
                  <rect 
                    x={b.x} y={b.y} width={b.w} height={b.h} rx="4"
                    style={{
                      fill: isTarget ? 'rgba(220, 38, 38, 0.1)' : (isStart ? 'rgba(59, 130, 246, 0.1)' : '#1e293b'),
                      stroke: isTarget ? '#ef4444' : (isStart ? '#3b82f6' : '#475569'),
                      strokeWidth: isTarget || isStart ? '3' : '2'
                    }} 
                  />
                  {/* Nome do Prédio */}
                  <text 
                    x={b.x + b.w/2} y={b.y + b.h/2} 
                    textAnchor="middle" dominantBaseline="middle"
                    fill={isTarget ? '#fff' : (isStart ? '#93c5fd' : '#64748b')}
                    style={{ fontSize: '12px', fontWeight: 'bold', fontFamily: 'monospace' }}
                  >
                    {b.label}
                  </text>
                  
                  {/* PORTAS DE ENTRADA (Retângulo Pequeno) */}
                  {/* Para os da esquerda, entrada é embaixo. Para o Parque, entrada TAMBÉM é embaixo agora. */}
                   <rect 
                     x={b.x + b.w/2 - 20} // Centralizado na largura do prédio
                     y={b.y + b.h - 5}    // Na aresta inferior
                     width="40" height="10" 
                     fill={isTarget ? '#ef4444' : (isStart ? '#3b82f6' : '#334155')}
                   />
                </g>
              );
            })}

            {/* 3. (ÁREA VERDE REMOVIDA) */}

            {/* 4. TRAJETO (Linha Vermelha) */}
            {/* Fundo da linha (Glow) */}
            <path 
              d={getPath()} 
              fill="none" stroke="rgba(220, 38, 38, 0.2)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" 
            />
            {/* Linha pontilhada animada */}
            <path 
              d={getPath()} 
              fill="none" stroke="#ef4444" strokeWidth="4" strokeDasharray="12,12" strokeLinecap="round" strokeLinejoin="round"
            >
               <animate attributeName="stroke-dashoffset" from="200" to="0" dur="3s" repeatCount="indefinite" />
            </path>

            {/* Ponto de Origem (Na porta do Parque) */}
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