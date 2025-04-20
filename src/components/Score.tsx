import React from 'react'

interface ScoreProps {
  score: number
}

export const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <>
      {/* Sombra do texto para melhorar a legibilidade sobre o fundo */}
      <text 
        x={22} 
        y={42} 
        fill="#000" 
        fontSize="24"
        fontFamily="'Press Start 2P', cursive"
        opacity="0.5"
      >
        {score}
      </text>
      {/* Texto principal */}
      <text 
        x={20} 
        y={40} 
        fill="#FFF" 
        fontSize="24"
        fontFamily="'Press Start 2P', cursive"
        filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))"
      >
        {score}
      </text>
    </>
  )
}

export default Score 