import { useState, useCallback, useMemo } from 'react';
import { GAME_CONFIG, DIFFICULTY_LEVELS } from '../constants';
import { usePipes } from './usePipes';
import { useBird } from './useBird';
import { DifficultyLevel } from '../types';

export const useGame = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  
  // Determina o nível atual de dificuldade com base na pontuação
  const currentDifficulty = useMemo((): DifficultyLevel => {
    const level = [...DIFFICULTY_LEVELS]
      .reverse()
      .find(level => score >= level.score) || DIFFICULTY_LEVELS[0];
    return level;
  }, [score]);

  const { bird, updateBird, resetBird } = useBird();
  const { pipes, addPipe, updatePipes, resetPipes } = usePipes();

  const resetGame = useCallback(() => {
    resetPipes();
    setScore(0);
    resetBird();
    setGameOver(false);
    
    // Cria 3 pipes iniciais com o gap inicial
    const initialGap = DIFFICULTY_LEVELS[0].gap;
    for (let i = 0; i < 3; i++) {
      addPipe(GAME_CONFIG.WIDTH + i * GAME_CONFIG.PIPE_DIST, initialGap);
    }
  }, [resetPipes, resetBird, addPipe]);

  const checkCollision = useCallback(() => {
    const { x, y, r } = bird;
    if (y + r > GAME_CONFIG.HEIGHT || y - r < 0) {
      return true;
    }

    return pipes.some((p: { x: number; holeY: number }) => {
      const withinX = x + r > p.x && x - r < p.x + GAME_CONFIG.PIPE_W;
      return withinX && (y - r < p.holeY || y + r > p.holeY + currentDifficulty.gap);
    });
  }, [bird, pipes, currentDifficulty.gap]);

  const updateGame = useCallback((jump: boolean) => {
    if (gameOver) return;

    updateBird(jump);
    // Passa a velocidade e o gap atuais para updatePipes
    updatePipes({
      speed: currentDifficulty.speed,
      gap: currentDifficulty.gap
    });

    // Nova lógica de pontuação: verifica se o pássaro passou por algum cano
    pipes.forEach(pipe => {
      if (!pipe.passed && bird.x > pipe.x + GAME_CONFIG.PIPE_W) {
        pipe.passed = true;
        setScore(s => s + 1);
      }
    });

    if (checkCollision()) {
      setGameOver(true);
    }
  }, [gameOver, updateBird, updatePipes, checkCollision, pipes, bird.x, currentDifficulty]);

  return {
    bird,
    pipes,
    score,
    gameOver,
    resetGame,
    updateGame,
    currentDifficulty
  };
}; 