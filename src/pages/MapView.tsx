import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// IMPORTANTE: Adicionamos getRoomByLabel na importação
import { getRoomById, getRoomByLabel } from "@/data/roomData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowDown } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";

const MapView = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  // 1. A SALA SELECIONADA (Que o usuário clicou na lista)
  const selectedRoom = getRoomById(Number(roomId));

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 15000);
    return () => clearTimeout(timer);
  }, [navigate]);

  if (!selectedRoom) return <div className="min-h-screen bg-[#0a1120] flex items-center justify-center text-white">Sala não encontrada.</div>;

  const isLadoEsquerdo = selectedRoom.side === 'esquerdo';
  const roomIdStr = selectedRoom.id.toString().padStart(2, '0');
  const floorLabel = selectedRoom.floor === 1 ? "TÉRREO" : "SEGUNDO ANDAR";
  const isSecondFloor = selectedRoom.floor === 2;

  // --- LAYOUT DO GRID (Estrutura visual das salas) ---
  const getVisualLayout = () => {
    if (selectedRoom.floor === 1) {
      if (isLadoEsquerdo) {
        return {
          cols: 6,
          rows: [
            [{ label: "BANHEIROS", span: 2, type: 'service' }, { label: "02", span: 1, type: 'room' }, { label: "04", span: 1, type: 'room' }, { label: "06", span: 1, type: 'room' }, { label: "08", span: 1, type: 'room' }],
            [{ label: "COZINHA", span: 1, type: 'service' }, { label: "01", span: 1, type: 'room' }, { label: "03", span: 1, type: 'room' }, { label: "05", span: 1, type: 'room' }, { label: "07", span: 1, type: 'room' }, { label: "09", span: 1, type: 'room' }]
          ]
        };
      } else {
        return {
          cols: 6,
          rows: [
            [{ label: "10", span: 1, type: 'room' }, { label: "12", span: 1, type: 'room' }, { label: "14", span: 1, type: 'room' }, { label: "16", span: 1, type: 'room' }, { label: "BANHEIROS", span: 2, type: 'service' }],
            [{ label: "11", span: 1, type: 'room' }, { label: "13", span: 1, type: 'room' }, { label: "15", span: 1, type: 'room' }, { label: "17", span: 1, type: 'room' }, { label: "18", span: 1, type: 'room' }, { label: "", span: 1, type: 'empty' }]
          ]
        };
      }
    } else {
      // PISO 2
      if (isLadoEsquerdo) {
        return {
          cols: 5,
          rows: [
            [{ label: "BANHEIROS", span: 1, type: 'service' }, { label: "20", span: 1, type: 'room' }, { label: "22", span: 1, type: 'room' }, { label: "24", span: 1, type: 'room' }, { label: "26", span: 1, type: 'room' }],
            [{ label: "19", span: 1, type: 'room' }, { label: "21", span: 1, type: 'room' }, { label: "23", span: 1, type: 'room' }, { label: "25", span: 1, type: 'room' }, { label: "27", span: 1, type: 'room' }]
          ]
        };
      } else {
        return {
          cols: 5,
          rows: [
            [{ label: "28", span: 1, type: 'room' }, { label: "30", span: 1, type: 'room' }, { label: "32", span: 1, type: 'room' }, { label: "34", span: 1, type: 'room' }, { label: "BANHEIROS", span: 1, type: 'service' }],
            [{ label: "29", span: 1, type: 'room' }, { label: "31", span: 1, type: 'room' }, { label: "33", span: 1, type: 'room' }, { label: "35", span: 1, type: 'room' }, { label: "36", span: 1, type: 'room' }]
          ]
        };
      }
    }
  };

  const layout = getVisualLayout();
  const totalCols = layout.cols;

  // --- TRILHA (Calcula a posição da linha vermelha) ---
  let targetCenterPercent = 0;
  let foundTarget = false;

  layout.rows.forEach(row => {
    let currentSpanCount = 0;
    row.forEach(cell => {
      // A trilha aponta especificamente para a sala clicada (roomIdStr)
      if (cell.label === roomIdStr) {
        const centerInSpans = currentSpanCount + (cell.span / 2);
        targetCenterPercent = (centerInSpans / totalCols) * 100;
        foundTarget = true;
      }
      currentSpanCount += cell.span;
    });
  });

  let trailStyle = {};
  if (foundTarget) {
    if (isLadoEsquerdo) {
      trailStyle = { right: '0', left: 'auto', width: `${100 - targetCenterPercent}%` };
    } else {
      trailStyle = { left: '0', right: 'auto', width: `${targetCenterPercent}%` };
    }
  }

  // --- COMPONENTE DE INDICADORES (Marcador e Escada) ---
  const IndicatorsColumn = () => (
    <div className="flex flex-col items-center justify-center gap-10 min-w-[120px] md:min-w-[150px] z-20">
      
      {/* 1. VOCÊ ESTÁ AQUI */}
      <div className="flex flex-col items-center animate-fade-in">
        <div className="bg-red-600 text-[10px] px-3 py-1 rounded-full font-black mb-2 border border-white/20 shadow-lg whitespace-nowrap animate-bounce">
          VOCÊ ESTÁ AQUI
        </div>
        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(239,68,68,0.6)] animate-pulse">
          <div className={`border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent 
            ${isLadoEsquerdo ? 'border-r-[14px] border-r-white' : 'border-l-[14px] border-l-white'}`} 
          />
        </div>
      </div>

      {/* 2. ESCADA (SÓ PISO 2) */}
      {isSecondFloor && (
        <div className="flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-slate-700/40 bg-[#0a1120]/60 backdrop-blur-md shadow-xl animate-fade-in animate-delay-200">
          <div className="relative mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" 
              className="w-16 h-16 text-slate-400/80">
              <path d="M21 3v18" />
              <path d="M3 21v-2" /><path d="M3 15v-2" /><path d="M3 9v-2" />
              <path d="M6 21h12" /><path d="M6 17h12" /><path d="M6 13h12" /><path d="M6 9h12" /><path d="M6 5h12" />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400 animate-pulse">
              <ArrowDown className="w-8 h-8" strokeWidth={3} />
            </div>
          </div>
          <span className="text-xs uppercase font-black text-slate-300 tracking-widest text-center leading-tight">
            Acesso ao<br/>Térreo
          </span>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a1120] p-6 text-white animate-fade-in relative">
      <div className="absolute top-0 left-0 h-1 bg-red-600/50 animate-[width_15s_linear_forwards] w-full" style={{ animationName: 'shrinkWidth' }} />
      
      <div className="w-full max-w-[1400px]">
        {/* Botão Voltar */}
        <Button variant="ghost" onClick={() => navigate("/salas")} className="mb-6 gap-2 text-slate-400 hover:text-white transition-all">
          <ArrowLeft className="h-5 w-5" /> Voltar
        </Button>

        {/* Título da Empresa */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            {selectedRoom.company}
          </h1>
          <p className="text-blue-400 font-mono text-xl mt-1 tracking-widest uppercase opacity-80">
            {floorLabel} — Lado {selectedRoom.side}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* CONTAINER DO MAPA */}
          <div className="lg:col-span-3 bg-[#0f172a] rounded-3xl p-4 md:p-8 border border-white/5 relative min-h-[400px] md:min-h-[500px] flex items-center justify-center shadow-2xl overflow-hidden">
            
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 md:gap-8">
              {!isLadoEsquerdo && <IndicatorsColumn />}

              <div 
                className={`grid w-full max-w-5xl relative z-10 border-2 border-slate-800 bg-[#0a1120] flex-1`}
                style={{ gridTemplateColumns: `repeat(${totalCols}, minmax(0, 1fr))` }}
              >
                {layout.rows.map((row, rowIdx) => (
                  <div key={rowIdx} className="contents">
                    {row.map((cell, colIdx) => {
                      
                      // --- LÓGICA DE MULTI-HIGHLIGHT ---
                      // 1. Buscamos os dados da sala atual do loop
                      const cellRoomData = getRoomByLabel(cell.label);
                      
                      // 2. Verificamos se ela pertence à mesma empresa da sala selecionada
                      const isSameCompany = selectedRoom && cellRoomData && selectedRoom.company === cellRoomData.company;

                      // 3. O alvo é marcado se for a sala clicada OU se for da mesma empresa
                      const isTarget = cell.label === roomIdStr || (isSameCompany && cell.type === 'room');
                      
                      const isService = cell.type === 'service';
                      const isEmpty = cell.type === 'empty';

                      return (
                        <div 
                          key={colIdx} 
                          className={`
                            h-24 md:h-36 lg:h-40 border-[1px] border-slate-800 flex flex-col items-center justify-center relative transition-all duration-500
                            ${isTarget ? 'bg-red-600/10 z-20 shadow-[inset_0_0_40px_rgba(239,68,68,0.3)] border-red-500/50' : 'bg-[#161f31]/40'}
                            ${isService ? 'bg-slate-900/80' : ''}
                            ${isEmpty ? 'bg-transparent border-none' : ''}
                          `}
                          style={{ gridColumn: `span ${cell.span} / span ${cell.span}` }}
                        >
                          {!isEmpty && (
                            <span className={`font-black text-center select-none z-30
                              ${isTarget ? 'text-white text-4xl md:text-5xl animate-pulse' : 'text-slate-500 text-lg md:text-2xl'} 
                              ${isService ? 'text-[8px] md:text-xs opacity-50 tracking-widest' : ''}
                            `}>
                              {cell.label}
                            </span>
                          )}
                        </div>
                      );
                    })}
                    {rowIdx === 0 && (
                      <div className="h-10 md:h-16 bg-[#0a1120] relative border-y-2 border-slate-800 flex items-center" style={{ gridColumn: `1 / -1` }}>
                        <div className="w-full h-[2px] bg-slate-800/30 absolute border-t-[2px] border-dotted border-slate-700/30" />
                        <div className="absolute h-0 border-t-[4px] border-dotted border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all duration-1000 ease-out flex items-center" style={trailStyle}>
                          <div className={`w-3 h-3 bg-red-500 rounded-full absolute shadow-[0_0_10px_rgba(239,68,68,0.8)] ${isLadoEsquerdo ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'}`} />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {isLadoEsquerdo && <IndicatorsColumn />}
            </div>
          </div>

          {/* PAINEL LATERAL (Instruções) */}
          <div className="h-full">
            <div className="bg-[#161f31] p-8 rounded-3xl border border-white/5 shadow-xl h-full flex flex-col items-center justify-center text-center gap-6 animate-fade-left">
              <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <FaMapMarkerAlt className="text-blue-400" size={32} />
              </div>
              <div>
                <h3 className="text-blue-400 text-xs uppercase font-bold tracking-[0.2em] mb-4">
                  Como Chegar
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  Siga a <strong className="text-white font-bold">linha pontilhada</strong> no mapa até o local destacado em <strong className="text-red-500 font-bold">vermelho</strong>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MapView;