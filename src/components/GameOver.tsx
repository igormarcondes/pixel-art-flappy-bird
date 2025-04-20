import React from 'react';
import { GAME_CONFIG } from '../constants';

interface GameOverProps {
  onRestart: () => void;
}

export const GameOver: React.FC<GameOverProps> = ({ onRestart }) => {
  return (
    <>
      <rect 
        width={GAME_CONFIG.WIDTH} 
        height={GAME_CONFIG.HEIGHT}
        fill="rgba(0,0,0,0.5)" 
      />
      <text 
        x="50%" 
        y="45%" 
        textAnchor="middle"
        fill="#FFF" 
        fontSize="32"
      >
        Game Over
      </text>
      <text 
        x="50%" 
        y="55%" 
        textAnchor="middle"
        fill="#FFF" 
        fontSize="20"
        onClick={onRestart}
        style={{ cursor: 'pointer' }}
      >
        Clique para reiniciar
      </text>
    </>
  );
}; 