import { GameConfig } from './types';

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

export const INITIAL_BIRD_POSITION = {
  x: 50,
  y: 150,
  vx: 0,
  vy: 0,
  r: 12
};

export const GAME_HEIGHT = GAME_CONFIG.HEIGHT;
export const PIPE_GAP = GAME_CONFIG.GAP;

// Aliases para compatibilidade com o componente Pipe
export const PIPE_WIDTH = GAME_CONFIG.PIPE_W;
export const GAP = GAME_CONFIG.GAP;
export const HEIGHT = GAME_CONFIG.HEIGHT;
