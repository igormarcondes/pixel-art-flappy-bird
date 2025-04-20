import React from 'react';
import { Bird as BirdType } from './components/Bird';
import { Pipes } from './components/Pipes';
import { useKeyboard } from './hooks/useKeyboard';
import { useGameLoop } from './hooks/useGameLoop';
import { useGame } from './hooks/useGame';
import { GameOver } from './components/GameOver';
import { Score } from './components/Score';
import { GAME_CONFIG } from './constants';

export function App() {
  const jump = useKeyboard();
  const { bird, pipes, score, gameOver, resetGame, updateGame } = useGame();

  // Inicializa o jogo ao montar
  React.useEffect(() => resetGame(), [resetGame]);

  // Atualiza o jogo a cada frame
  useGameLoop(() => updateGame(jump), !gameOver);

  return (
    <svg 
      width={GAME_CONFIG.WIDTH} 
      height={GAME_CONFIG.HEIGHT}
      viewBox={`0 0 ${GAME_CONFIG.WIDTH} ${GAME_CONFIG.HEIGHT}`}
      style={{ cursor: 'pointer' }}
    >
      {/* Imagem de fundo */}
      <image 
        href="/assets/bg.webp" 
        x="0" 
        y="0" 
        width={GAME_CONFIG.WIDTH} 
        height={GAME_CONFIG.HEIGHT}
        preserveAspectRatio="xMidYMid slice"
      />
      <Pipes pipes={pipes} />
      <BirdType bird={bird} />
      <Score score={score} />
      {gameOver && <GameOver onRestart={resetGame} />}
    </svg>
  );
}
