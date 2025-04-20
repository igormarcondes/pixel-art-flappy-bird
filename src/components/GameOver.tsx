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
        fill="rgba(0,0,0,0.7)" 
      />
      <text 
        x="50%" 
        y="45%" 
        textAnchor="middle"
        fill="#000" 
        fontSize="32"
        fontFamily="'Press Start 2P', cursive"
        dy=".35em"
        opacity="0.5"
        transform="translate(2, 2)"
      >
        Game Over
      </text>
      <text 
        x="50%" 
        y="45%" 
        textAnchor="middle"
        fill="#FFF" 
        fontSize="32"
        fontFamily="'Press Start 2P', cursive"
        dy=".35em"
      >
        Game Over
      </text>
      <text 
        x="50%" 
        y="60%" 
        textAnchor="middle"
        fill="#FFF" 
        fontSize="16"
        fontFamily="'Press Start 2P', cursive"
        dy=".35em"
        onClick={onRestart}
        style={{ 
          cursor: 'pointer',
          animation: 'pulse 1.5s infinite',
        }}
      >
        Click to restart
      </text>
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </>
  );
}; 