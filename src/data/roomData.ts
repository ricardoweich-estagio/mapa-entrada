// src/data/roomData.ts

export type RoomCategory = 'Smcti' | 'Startup Itec' | 'UTFPR' | 'Startup Sprint';

export interface RoomInfo {
  id: number;
  floor: number;
  side: 'esquerdo' | 'direito';
  mapImage: string;
  position: { row: number; col: number };
  company?: string;
  category?: RoomCategory;
}

export const roomData: RoomInfo[] = [
  // --- PISO 1: LADO ESQUERDO (01-09) ---
  { 
    id: 1, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 1, col: 1 }, 
    company: 'Robótica', category: 'Smcti' 
  },
  { 
    id: 2, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 0, col: 1 }, 
    company: 'Its Art Up', category: 'Startup Itec'
  },
  { 
    id: 3, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 1, col: 2 }, 
    company: 'Flatland Lab', category: 'Startup Itec'
  },
  { 
    id: 4, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 0, col: 2 }, 
    company: 'Sprint', category: 'UTFPR'
  },
  { 
    id: 5, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 1, col: 3 }, 
    company: 'Fazenda Melhor', category: 'Startup Itec'
  },
  { 
    id: 6, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 0, col: 3 }, 
    company: 'Pesquisa e Des.', category: 'Smcti'
  },
  { 
    id: 7, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 1, col: 4 }, 
    company: 'Laboratório 3D', category: 'Smcti'
  },
  { 
    id: 8, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 0, col: 4 }, 
    company: 'Projetos de Inovação', category: 'Smcti'
  },
  { 
    id: 9, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 1, col: 5 }, 
    company: 'Coworking', category: 'Smcti' 
  },

  // --- PISO 1: LADO DIREITO (10-18) ---
  { 
    id: 10, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 0, col: 0 }, 
    company: 'Cash Local', category: 'Startup Itec'
  },
  { 
    id: 11, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 1, col: 0 }, 
    company: 'ITECPB', category: 'Smcti'
  },
  { 
    id: 12, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 0, col: 1 }, 
    company: 'pHbot', category: 'Startup Itec'
  },
  { 
    id: 13, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 1, col: 1 }, 
    company: 'Noctua', category: 'Startup Itec'
  },
  { 
    id: 14, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 0, col: 2 }, 
    company: 'Velocidade', category: 'Startup Itec'
  },
  { 
    id: 15, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 1, col: 2 }, 
    company: 'Pato a Jato', category: 'UTFPR' 
  },
  { 
    id: 16, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 0, col: 3 }, 
    company: 'LefTech', category: 'Startup Itec'
  },
  { 
    id: 17, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 1, col: 3 }, 
    company: 'DCT Tecnologia', category: 'Startup Itec' 
  },
  { 
    id: 18, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 1, col: 4 }, 
    company: 'LefTech', category: 'Startup Itec'
  },

  // --- PISO 2: LADO ESQUERDO (19-27) ---
  { 
    id: 19, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 1, col: 1 }, 
    company: 'Safe Educa', category: 'Startup Itec'
  },
  { 
    id: 20, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 0, col: 1 }, 
    company: 'Climb', category: 'Startup Itec'
  },
  { 
    id: 21, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 1, col: 2 }, 
    company: 'Consegsys', category: 'Startup Itec'
  },
  { 
    id: 22, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 0, col: 2 }, 
    company: 'Flumia Flow', category: 'Startup Itec'
  },
  { 
    id: 23, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 1, col: 3 }, 
    company: 'Raziel Labs', category: 'Startup Itec'
  },
  { 
    id: 24, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 0, col: 3 }, 
    company: 'E-dialoga', category: 'Startup Itec'
  },
  { 
    id: 25, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 1, col: 4 }, 
    company: 'Tas', category: 'Startup Itec' 
  },
  { 
    id: 26, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 0, col: 4 }, 
    company: 'Rock Jobs', category: 'Startup Itec' 
  },
  { 
    id: 27, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 1, col: 5 }, 
    company: 'Rock Jobs', category: 'Startup Itec' 
  },

  // --- PISO 2: LADO DIREITO (28-36) ---
  { 
    id: 28, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 0, col: 0 }, 
    company: 'Real World Agronomy', category: 'Startup Sprint' 
  },
  { 
    id: 29, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 1, col: 0 }, 
    company: 'Arrende', category: 'Startup Sprint' 
  },
  { 
    id: 30, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 0, col: 1 }, 
    company: 'Luferan', category: 'Startup Sprint' 
  },
  { 
    id: 31, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 1, col: 1 }, 
    company: 'Plasma Fert', category: 'Startup Sprint' 
  },
  { 
    id: 32, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 0, col: 2 }, 
    company: 'Utopia Decorações', category: 'Startup Sprint' 
  },
  { 
    id: 33, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 1, col: 2 }, 
    company: 'ZipTo Innovate', category: 'Startup Sprint' 
  },
  { 
    id: 34, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 0, col: 3 }, 
    company: 'Geoponica', category: 'Startup Sprint' 
  },
  { 
    id: 35, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 1, col: 3 }, 
    company: 'OnProcess / EcoWatts', category: 'Startup Sprint' 
  },
  { 
    id: 36, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 1, col: 4 }, 
    company: 'Servidor Parque', category: 'Smcti' 
  },
];

export const getRoomById = (id: number): RoomInfo | undefined => {
  return roomData.find(room => room.id === id);
};

export const getRoomByLabel = (label: string): RoomInfo | undefined => {
  const id = Number(label);
  if (isNaN(id)) return undefined;
  return roomData.find(room => room.id === id);
};