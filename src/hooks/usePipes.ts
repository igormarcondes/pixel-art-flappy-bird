import { useState, useCallback } from 'react';
import { Pipe } from '../types';
import { GAME_CONFIG } from '../constants';

interface UpdatePipesParams {
  speed: number;
  gap: number;
}

export const usePipes = () => {
  const [pipes, setPipes] = useState<Pipe[]>([]);

  const addPipe = useCallback((x: number, gap: number = GAME_CONFIG.GAP) => {
    const holeY = 50 + Math.random() * (GAME_CONFIG.HEIGHT - gap - 100);
    const pipe: Pipe = {
      g: document.createElementNS('http://www.w3.org/2000/svg', 'g'),
      x,
      holeY,
      position: { x, y: 0 },
      height: holeY,
      passed: false,
      id: `pipe-${Date.now()}-${Math.random()}`
    };
    setPipes(ps => [...ps, pipe]);
  }, []);

  const updatePipes = useCallback(({ speed = GAME_CONFIG.PIPE_SPEED, gap = GAME_CONFIG.GAP }: UpdatePipesParams) => {
    setPipes(prevPipes => {
      let newPipes = prevPipes.map(p => ({ ...p, x: p.x - speed }));

      if (newPipes[0]?.x < -GAME_CONFIG.PIPE_W) {
        newPipes.shift();

        const lastPipe = newPipes[newPipes.length - 1];
        const newX = lastPipe ? lastPipe.x + GAME_CONFIG.PIPE_DIST : GAME_CONFIG.WIDTH;
        const newHoleY = 50 + Math.random() * (GAME_CONFIG.HEIGHT - gap - 100);
        const newPipe: Pipe = {
          g: document.createElementNS('http://www.w3.org/2000/svg', 'g'),
          x: newX,
          holeY: newHoleY,
          position: { x: newX, y: 0 },
          height: newHoleY,
          passed: false,
          id: `pipe-${Date.now()}-${Math.random()}`
        };
        newPipes.push(newPipe);
      }
      return newPipes;
    });
  }, []);

  const resetPipes = useCallback(() => {
    setPipes([]);
  }, []);

  return {
    pipes,
    addPipe,
    updatePipes,
    resetPipes
  };
}; 