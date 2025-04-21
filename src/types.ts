export interface Position {
  x: number;
  y: number;
}

export interface Velocity {
  vx: number;
  vy: number;
}

export interface Bird extends Position, Velocity {
  r: number;
}

export interface Pipe {
  position: Position;
  height: number;
  passed: boolean;
  x: number;
  holeY: number;
  id: string;
  g: SVGGElement;
}

export interface GameState {
  bird: Bird;
  pipes: Pipe[];
  score: number;
  gameOver: boolean;
}

export interface GameConfig {
  WIDTH: number;
  HEIGHT: number;
  GRAVITY: number;
  JUMP: number;
  PIPE_W: number;
  GAP: number;
  PIPE_DIST: number;
  PIPE_SPEED: number;
}

// Interface para os níveis de dificuldade
export interface DifficultyLevel {
  score: number;   // Pontuação necessária para atingir este nível
  speed: number;   // Velocidade dos canos neste nível
  gap: number;     // Tamanho do espaço entre os canos
}

export interface GameElements {
  game: SVGSVGElement;
  pipesGroup: SVGGElement;
  birdEl: SVGGElement;
  scoreText: SVGTextElement;
  overlay: SVGRectElement;
  gameOverText: SVGTextElement;
  restartText: SVGTextElement;
}
