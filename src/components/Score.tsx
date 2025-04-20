import React from 'react'

interface ScoreProps {
  score: number
}

export const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <>
      {/* Sombra do texto para melhorar a legibilidade sobre o fundo */}
      <text 
        x={12} 
        y={32} 
        fill="#000" 
        fontSize="24"
        opacity="0.7"
      >
        {score}
      </text>
      {/* Texto principal */}
      <text 
        x={10} 
        y={30} 
        fill="#FFF" 
        fontSize="24"
        fontWeight="bold"
        stroke="#000"
        strokeWidth="0.5"
      >
        {score}
      </text>
    </>
  )
}

export default Score 