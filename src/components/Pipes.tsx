import React from 'react';
import { Pipe } from '../types';
import { PipeComponent } from './Pipe';

export const Pipes: React.FC<{ pipes: Pipe[] }> = ({ pipes }) => (
  <g id="pipes">
    {pipes.map(p => <PipeComponent key={p.id} pipe={p}/>)}
  </g>
);
