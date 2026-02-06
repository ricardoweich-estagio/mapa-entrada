export interface AnchorInfo {
  id: number;
  code: string;
  name: string;
  description?: string;
  gridPos: { col: number; row: number; spanRows?: number; spanCols?: number }; 
}

export const anchorData: AnchorInfo[] = [
  // --- BLOCO INFERIOR (1A, 1B, 1C) ---
  { 
    id: 4, 
    code: "1A",
    name: "Bitz Softwares", 
    gridPos: { col: 1, row: 3 }, 
    description: "Soluções em Software e Meios de Pagamento." 
  },
  { 
    id: 5, 
    code: "1B",
    name: "GásFácil", 
    gridPos: { col: 2, row: 3 }, 
    description: "Tecnologia para gestão de gás." 
  },
  { 
    id: 6, 
    code: "1C",
    name: "Softfocus", 
    gridPos: { col: 3, row: 3 }, 
    description: "Tecnologia e Inovação." 
  },

  // --- BLOCO SUPERIOR (1D, 1E/1F) ---
  { 
    id: 3, 
    code: "1D",
    name: "Akiyama Group", 
    gridPos: { col: 3, row: 1 }, 
    description: "Biometria e Identificação Civil." 
  },
  { 
    id: 1, 
    code: "1E e 1F", // Código unificado
    name: "Emiteli", // Nome unificado
    gridPos: { col: 1, row: 1, spanCols: 2 }, // Ocupa visualmente 2 espaços
    description: "Indústria Eletrônica (Sede e Expansão)." 
  },
];

export const getAnchorById = (id: number) => anchorData.find(a => a.id === id);