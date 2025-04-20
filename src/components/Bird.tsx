import React from 'react';
import { Bird as BirdType } from '../types';

export const Bird: React.FC<{ bird: BirdType }> = ({ bird }) => {
  // Calcular rotação baseada na velocidade vertical
  const rotation = bird.vy * 2; // Multiplicador para ajustar a rotação
  
  return (
    <g id="bird" transform={`translate(0, ${bird.y - 150})`}>
      <image 
        href="/assets/flapy_bird.gif" 
        x={bird.x - bird.r} 
        y={150 - bird.r}
        width={bird.r * 2} 
        height={bird.r * 2}
        transform={`rotate(${rotation}, ${bird.x}, 150)`}
        preserveAspectRatio="xMidYMid meet"
      />
    </g>
  );
};
