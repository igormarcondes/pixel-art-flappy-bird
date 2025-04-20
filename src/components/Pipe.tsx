import React from 'react';
import { PIPE_WIDTH, GAP, HEIGHT } from '../constants';
import { Pipe } from '../types';

export const PipeComponent: React.FC<{ pipe: Pipe }> = ({ pipe }) => (
  <g transform={`translate(${pipe.x}, 0)`}>
    {/* Cano superior (rotacionado 180 graus) */}
    <image 
      href="/assets/pipe.png" 
      width={PIPE_WIDTH} 
      height={pipe.holeY}
      transform={`translate(0, ${pipe.holeY}) scale(1, -1)`}
      preserveAspectRatio="none"
    />
    
    {/* Cano inferior */}
    <image 
      href="/assets/pipe.png" 
      y={pipe.holeY + GAP}
      width={PIPE_WIDTH} 
      height={HEIGHT - pipe.holeY - GAP}
      preserveAspectRatio="none"
    />
  </g>
);
