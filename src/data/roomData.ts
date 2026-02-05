// src/data/roomData.ts

export interface RoomInfo {
  id: number;
  floor: number;
  side: 'esquerdo' | 'direito';
  mapImage: string;
  position: { row: number; col: number };
  company?: string;
  description?: string;
}

export const roomData: RoomInfo[] = [
  // --- PISO 1: LADO ESQUERDO (01-09) ---
  { 
    id: 1, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 1, col: 1 }, 
    company: 'Robótica'
  },
  { 
    id: 2, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 0, col: 1 }, 
    company: 'Its Art Up'
  },
  { 
    id: 3, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 1, col: 2 }, 
    company: 'Flatland Lab'
  },
  { 
    id: 4, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 0, col: 2 }, 
    company: 'Sprint'
  },
  { 
    id: 5, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 1, col: 3 }, 
    company: 'Fazenda Melhor'
  },
  { 
    id: 6, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 0, col: 3 }, 
    company: 'Pesquisa e Des.'
  },
  { 
    id: 7, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 1, col: 4 }, 
    company: 'Laboratório 3D'
  },
  { 
    id: 8, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 0, col: 4 }, 
    company: 'Projetos de Inovação'
  },
  { 
    id: 9, floor: 1, side: 'esquerdo', mapImage: 'piso1-esquerdo', position: { row: 1, col: 5 }, 
    company: 'Coworking'
  },

  // --- PISO 1: LADO DIREITO (10-18) ---
  { 
    id: 10, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 0, col: 0 }, 
    company: 'Cash Local'
  },
  { 
    id: 11, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 1, col: 0 }, 
    company: 'ITECPB'
  },
  { 
    id: 12, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 0, col: 1 }, 
    company: 'pHbot'
  },
  { 
    id: 13, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 1, col: 1 }, 
    company: 'Noctua'
  },
  { 
    id: 14, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 0, col: 2 }, 
    company: 'Velocidade'
  },
  { 
    id: 15, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 1, col: 2 }, 
    company: 'Pato a Jato'
  },
  { 
    id: 16, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 0, col: 3 }, 
    company: 'Lef Tech'
  },
  { 
    id: 17, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 1, col: 3 }, 
    company: 'DCT Tecnologia'
  },
  { 
    id: 18, floor: 1, side: 'direito', mapImage: 'piso1-direito', position: { row: 1, col: 4 }, 
    company: 'Lef Tech'
  },

  // --- PISO 2: LADO ESQUERDO (19-27) ---
  { 
    id: 19, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 1, col: 1 }, 
    company: 'Safe Educa'
  },
  { 
    id: 20, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 0, col: 1 }, 
    company: 'Climb'
  },
  { 
    id: 21, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 1, col: 2 }, 
    company: 'Conseguisse'
  },
  { 
    id: 22, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 0, col: 2 }, 
    company: 'Flumia Flow'
  },
  { 
    id: 23, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 1, col: 3 }, 
    company: 'Raziel Labs'
  },
  { 
    id: 24, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 0, col: 3 }, 
    company: 'E-dialoga'
  },
  { 
    id: 25, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 1, col: 4 }, 
    company: 'Tas'
  },
  { 
    id: 26, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 0, col: 4 }, 
    company: 'Rock Jobs'
  },
  { 
    id: 27, floor: 2, side: 'esquerdo', mapImage: 'piso2-esquerdo', position: { row: 1, col: 5 }, 
    company: 'Rock Jobs'
  },

  // --- PISO 2: LADO DIREITO (28-36) ---
  { 
    id: 28, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 0, col: 0 }, 
    company: 'Real World Agronomy'
  },
  { 
    id: 29, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 1, col: 0 }, 
    company: 'Arrende'
  },
  { 
    id: 30, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 0, col: 1 }, 
    company: 'Luferan'
  },
  { 
    id: 31, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 1, col: 1 }, 
    company: 'Plasma Fert'
  },
  { 
    id: 32, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 0, col: 2 }, 
    company: 'Utopia Decorações'
  },
  { 
    id: 33, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 1, col: 2 }, 
    company: 'ZipTo Innovate'
  },
  { 
    id: 34, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 0, col: 3 }, 
    company: 'Geoponica'
  },
  { 
    id: 35, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 1, col: 3 }, 
    company: 'OnProcess / EcoWatts'
  },
  { 
    id: 36, floor: 2, side: 'direito', mapImage: 'piso2-direito', position: { row: 1, col: 4 }, 
    company: 'Servidor Parque'
  },
];

export const getRoomById = (id: number): RoomInfo | undefined => {
  return roomData.find(room => room.id === id);
};