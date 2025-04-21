import React from 'react';
import { DifficultyLevel } from '../types';
import { DIFFICULTY_LEVELS } from '../constants';

interface DifficultyIndicatorProps {
  currentDifficulty: DifficultyLevel;
}

export const DifficultyIndicator: React.FC<DifficultyIndicatorProps> = ({ currentDifficulty }) => {
  // Calcula o nível atual (1-based) baseado na pontuação necessária
  const currentLevel = DIFFICULTY_LEVELS.findIndex(level => level.score === currentDifficulty.score) + 1;
  
  return (
    <g transform="translate(10, 70)">
      {/* Sombra do texto */}
      <text
        fill="#000"
        fontSize="14"
        fontFamily="'Press Start 2P', cursive"
        opacity="0.5"
        x="2"
        y="2"
      >
        Level {currentLevel}
      </text>
      {/* Texto principal */}
      <text
        fill="#FFF"
        fontSize="14"
        fontFamily="'Press Start 2P', cursive"
        filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))"
      >
        Level {currentLevel}
      </text>
    </g>
  );
}; 