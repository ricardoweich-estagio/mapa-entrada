// src/data/personData.ts

export interface PersonInfo {
  id: number;
  name: string;
  role?: string;      
  company: string;    
  roomId: number;     
}

export const personData: PersonInfo[] = [
  // --- ROCK JOBS (Sala 26 / 27) ---
  { id: 1, name: "Angela Fernanda Joia Steffens Maas", company: "Rock Jobs", roomId: 26 },
  { id: 2, name: "Vanessa Pelissaro", company: "Rock Jobs", roomId: 26 },
  { id: 3, name: "Ana Beatriz Hengem Ferreira de Lima", company: "Rock Jobs", roomId: 26 },
  { id: 4, name: "Rafael Mingotti", company: "Rock Jobs", roomId: 26 },
  { id: 5, name: "Tayline Andreis", company: "Rock Jobs", roomId: 26 },
  { id: 6, name: "Stefany Maith Duarte dos Santos", company: "Rock Jobs", roomId: 26 },

  // --- SMCTI / ITECPB (Sala 11 / e outras) ---
  { id: 7, name: "Nelito Zanmaria", company: "ITECPB", roomId: 11},
  { id: 8, name: "Rosiclei Caldato Dalagnol", company: "SMCTI", roomId: 8 },
  { id: 9, name: "Ana Claudia Marques", company: "ITECPB", roomId: 11 },

  // --- NOVOS MEMBROS SMCTI (Salas 6, 7 e 8) ---
  { id: 47, name: "Ricardo Weich", company: "SMCTI", roomId: 6 },
  { id: 48, name: "Tony Evaristo", company: "SMCTI", roomId: 6 },
  { id: 49, name: "Isaque Santana", company: "SMCTI", roomId: 6 },
  { id: 50, name: "Ana Laura Maieski", company: "SMCTI", roomId: 7 }, // Movido para Sala 7 (Laboratório 3D)
  { id: 51, name: "Leila Voss", company: "SMCTI", roomId: 8 },
  { id: 52, name: "Douglas H. Batista", company: "SMCTI", roomId: 8 },
  { id: 53, name: "Iuris Maia", company: "SMCTI", roomId: 8 },
  { id: 54, name: "Grazieli Cacciatori", company: "SMCTI", roomId: 6 },
  { id: 55, name: "Helmuth Kuhl", company: "SMCTI", roomId: 6 },

  // --- SAFE EDUCA / EDUCAÇÃO FINANCEIRA (Sala 19) ---
  { id: 11, name: "Pedro Henrique Baldin Coelho", company: "Safe Educa", roomId: 19 },
  { id: 12, name: "Marcelo Savitski Junior", company: "Safe Educa", roomId: 19 },

  // --- PATO A JATO (Sala 15) ---
  { id: 13, name: "João Pedro Strapasson Bassi", company: "Pato a Jato", roomId: 15 },
  { id: 14, name: "Gabriel Paulichen", company: "Pato a Jato", roomId: 15 },
  { id: 15, name: "Gustavo Marquezotti Caldato", company: "Pato a Jato", roomId: 15 },
  { id: 16, name: "Lamartini Scaion", company: "Pato a Jato", roomId: 15 },
  { id: 17, name: "Jean Lorenzini", company: "Pato a Jato", roomId: 15 },
  { id: 18, name: "Henrique Cesar Cesco", company: "Pato a Jato", roomId: 15 },

  // --- LEF TECH (Sala 16 / 18) ---
  { id: 19, name: "Bruno Henrique Lefchak", company: "Lef Tech", roomId: 16 },
  { id: 20, name: "Otávio Augusto Ceni Weschenfelder", company: "Lef Tech", roomId: 16 },
  { id: 21, name: "Rafael Zancanaro", company: "Lef Tech", roomId: 16 },

  // --- CASH LOCAL (Sala 10) ---
  { id: 22, name: "Thiarles Fernandes do Prado", company: "Cash Local", roomId: 10 },
  { id: 23, name: "Eduardo Menin Amim", company: "Cash Local", roomId: 10 },
  { id: 24, name: "Gabriela Grabowski Estacio", company: "Cash Local", roomId: 10 },
  { id: 56, name: "Bruna Jochem", company: "Cash Local", roomId: 10 }, // Adicionado

  // --- CONSEGUISSE / CONSEGSYS (Sala 21) ---
  { id: 25, name: "Alex Carpenedo", company: "Consigsys", roomId: 21 },

  // --- ITS ART UP (Sala 02) ---
  { id: 26, name: "Willian Jhonatan Gonçalves Santos", company: "Its Art Up", roomId: 2 },
  { id: 27, name: "Jessana Priscila M. de A. Gonçalves", company: "Its Art Up", roomId: 2 },

  // --- RAZIEL LABS (Sala 23) ---
  { id: 28, name: "Rozimery Ferreira", company: "Raziel Labs", roomId: 23 },
  { id: 29, name: "Muriel Mazzetto", company: "Raziel Labs", roomId: 23 },

  // --- NOCTUA (Sala 13) ---
  { id: 30, name: "Samuel Minuzzo Pereira", company: "Noctua", roomId: 13 },
  { id: 31, name: "Luiz Eduardo Caldas Kramer", company: "Noctua", roomId: 13 },

  // --- E-DIALOGA (Sala 24) ---
  { id: 32, name: "Paulo Henrique Silvestre", company: "E-dialoga", roomId: 24 },
  { id: 33, name: "Tainara Ferreira Martins", company: "E-dialoga", roomId: 24 },

  // --- FAZENDA MELHOR (Sala 05) ---
  { id: 34, name: "Fernando Luís Loff", company: "Fazenda Melhor", roomId: 5 },
  { id: 35, name: "Felipe Gustavo Loff", company: "Fazenda Melhor", roomId: 5 },

  // --- TAS CONSULTORIA (Sala 25) ---
  { id: 36, name: "Tiago Alex dos Santos", company: "Tas", roomId: 25 },

  // --- CLIMB (Sala 20) ---
  { id: 37, name: "Iann Lucas Bellé Monteiro", company: "Climb", roomId: 20 },
  { id: 38, name: "Samuel Judá Batiston", company: "Climb", roomId: 20 },

  // --- VELOXI / VELOCIDADE (Sala 14) ---
  { id: 39, name: "Matheus Dall olmo", company: "Veloxi", roomId: 14 },
  { id: 40, name: "Samuel Grontoski", company: "Veloxi", roomId: 14 },
  { id: 41, name: "Heron Willian Berton", company: "Veloxi", roomId: 14 },

  // --- FLATLAND LAB (Sala 03) ---
  { id: 42, name: "Bruno Leme", company: "Flatland Lab", roomId: 3 },

  // --- FLUMIA FLOW (Sala 22) ---
  { id: 43, name: "Luiz Felipe Beatrice", company: "Flumia Flow", roomId: 22 },

  // --- PHBOT (Sala 12) ---
  { id: 44, name: "João Carlos Fagundes", company: "PhBot", roomId: 12 },

  // --- ECOTROCA / ECOWATTS / ONPROCESS (Sala 35) ---
  { id: 45, name: "Lucas Fernando Puhl", company: "EcoWatts / Ecotroca", roomId: 35 },

  // --- SPRINT / INCUBADORA UTFPR (Sala 04) ---
  { id: 46, name: "Shirley Suellen Thesari", company: "Sprint (UTFPR)", roomId: 4 },
];