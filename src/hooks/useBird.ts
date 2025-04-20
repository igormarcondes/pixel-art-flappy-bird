import { useState, useCallback } from 'react';
import { Bird } from '../types';
import { GAME_CONFIG, INITIAL_BIRD_POSITION } from '../constants';

export const useBird = () => {
  const [bird, setBird] = useState<Bird>(INITIAL_BIRD_POSITION);

  const updateBird = useCallback((jump: boolean) => {
    setBird((b: Bird) => {
      const vy = jump ? GAME_CONFIG.JUMP : b.vy + GAME_CONFIG.GRAVITY;
      const y = b.y + vy;
      return { ...b, vy, y };
    });
  }, []);

  const resetBird = useCallback(() => {
    setBird(INITIAL_BIRD_POSITION);
  }, []);

  return {
    bird,
    updateBird,
    resetBird
  };
}; 