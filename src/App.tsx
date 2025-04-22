import React, { useState, useEffect } from 'react';
import { initDB, addScore, getTopScores, ScoreRecord } from './utils/ranking';
import { Bird as BirdType } from './components/Bird';
import { Pipes } from './components/Pipes';
import { useKeyboard } from './hooks/useKeyboard';
import { useGameLoop } from './hooks/useGameLoop';
import { useGame } from './hooks/useGame';
import { Score } from './components/Score';
import { DifficultyIndicator } from './components/DifficultyIndicator';
import { GAME_CONFIG } from './constants';

export function App() {
  const jump = useKeyboard();
  const { bird, pipes, score, gameOver, resetGame, updateGame, currentDifficulty } = useGame();
  const [playerName, setPlayerName] = useState('');
  const [saved, setSaved] = useState(false);
  const [leaderboard, setLeaderboard] = useState<ScoreRecord[]>([]);

  // Inicializa IndexedDB
  useEffect(() => { initDB(); }, []);

  // Inicializa o jogo ao montar
  React.useEffect(() => resetGame(), [resetGame]);

  // Atualiza o jogo a cada frame
  useGameLoop(() => updateGame(jump), !gameOver);

  const handleSave = async () => {
    if (!playerName) return;
    await addScore(playerName, score);
    const top = await getTopScores(10);
    setLeaderboard(top);
    setSaved(true);
  };

  const handleRestart = () => {
    resetGame();
    setPlayerName('');
    setSaved(false);
    setLeaderboard([]);
  };

  return (
    <div style={{ position: 'relative', width: GAME_CONFIG.WIDTH, height: GAME_CONFIG.HEIGHT }}>
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
        <DifficultyIndicator currentDifficulty={currentDifficulty} />
      </svg>
      {gameOver && (
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.7)', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', color: '#FFF', fontFamily: "'Press Start 2P', cursive"
        }}>
          {!saved ? (
            <>
              <h2>Game Over</h2>
              <p>Your score: {score}</p>
              <input 
                type="text" 
                placeholder="Enter your name" 
                value={playerName} 
                onChange={e => setPlayerName(e.target.value)}
                style={{ padding: '4px', margin: '8px', fontFamily: "'Press Start 2P', cursive" }}
              />
              <button 
                onClick={handleSave} 
                disabled={!playerName}
                style={{ padding: '8px 12px', fontFamily: "'Press Start 2P', cursive", cursor: playerName ? 'pointer' : 'not-allowed' }}
              >Save Score</button>
            </>
          ) : (
            <>
              <h2>Leaderboard</h2>
              <ol>
                {leaderboard.map(rec => (
                  <li key={rec.id}>{rec.name}: {rec.score}</li>
                ))}
              </ol>
              <button 
                onClick={handleRestart} 
                style={{ padding: '8px 12px', fontFamily: "'Press Start 2P', cursive", cursor: 'pointer' }}
              >Play Again</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
