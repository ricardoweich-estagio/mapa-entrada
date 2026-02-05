export interface AnchorInfo {
  id: number;
  name: string;
  description?: string;
  // Grid: 6 Colunas x 3 Linhas
  // Linha 1 (Esq): Emiteli | Emiteli | Akiyama
  // Linha 1 (Dir): Parque
  // Linha 3 (Esq): Bitz | Vazio | Softfocus
  gridPos: { col: number; row: number; spanRows?: number; spanCols?: number }; 
}

export const anchorData: AnchorInfo[] = [
  // --- BLOCO SUPERIOR ESQUERDO ---
  { 
    id: 1, 
    name: "Emiteli", 
    gridPos: { col: 1, row: 1 }, 
    description: "Indústria Eletrônica." 
  },
  { 
    id: 2, 
    name: "Emiteli Galpão", 
    gridPos: { col: 2, row: 1 }, 
    description: "Expansão Industrial." 
  },
  { 
    id: 3, 
    name: "Akiyama Group", 
    gridPos: { col: 3, row: 1 }, 
    description: "Biometria e Identificação." 
  },

  // --- BLOCO INFERIOR ESQUERDO ---
  { 
    id: 4, 
    name: "Bitz Softwares", 
    gridPos: { col: 1, row: 3 }, 
    description: "Soluções em Software." 
  },
  { 
    id: 5, 
    name: "Barracão Disponível", 
    gridPos: { col: 2, row: 3 }, 
    description: "Espaço para locação." 
  },
  { 
    id: 6, 
    name: "Softfocus", 
    gridPos: { col: 3, row: 3 }, 
    description: "Tecnologia e Inovação." 
  },
  
  // PARQUE (START) está visualmente em { col: 5, row: 1 } (Topo Direito)
];

export const getAnchorById = (id: number) => anchorData.find(a => a.id === id);