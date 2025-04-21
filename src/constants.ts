import { GameConfig, DifficultyLevel } from './types';

// Configurações base do jogo
export const GAME_CONFIG: GameConfig = {
  WIDTH: 320,
  HEIGHT: 480,
  GRAVITY: 0.5,
  JUMP: -7,
  PIPE_W: 52,
  GAP: 150,
  PIPE_DIST: 250,
  PIPE_SPEED: 1.5
};

// Configurações de dificuldade progressiva
export const DIFFICULTY_LEVELS: DifficultyLevel[] = [
  { score: 0, speed: 1.5, gap: 150 },    // Nível inicial
  { score: 5, speed: 1.8, gap: 140 },    // Nível 2
  { score: 10, speed: 2.1, gap: 130 },   // Nível 3
  { score: 15, speed: 2.4, gap: 125 },   // Nível 4
  { score: 20, speed: 2.7, gap: 120 },   // Nível 5 
  { score: 25, speed: 3.0, gap: 115 },
  { score: 30, speed: 3.0, gap: 115 },
  { score: 35, speed: 3.2, gap: 115 },
  { score: 40, speed: 3.4, gap: 115 },
  { score: 45, speed: 3.6, gap: 115 },
  { score: 40, speed: 3.8, gap: 115 },
  { score: 45, speed: 4.0, gap: 105 }
];

export const INITIAL_BIRD_POSITION = {
  x: 50,
  y: 150,
  vx: 0,
  vy: 0,
  r: 12
};

// Removendo constantes duplicadas e usando valores do nível atual
export const GAME_HEIGHT = GAME_CONFIG.HEIGHT;
export const PIPE_WIDTH = GAME_CONFIG.PIPE_W;
export const HEIGHT = GAME_CONFIG.HEIGHT;
export const GAP = GAME_CONFIG.GAP;
