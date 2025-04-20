import { Position, Pipe } from './types'
import { GAME_HEIGHT, PIPE_GAP } from './constants'

export const checkCollision = (birdPosition: Position, pipes: Pipe[]): boolean => {
  return pipes.some(pipe => {
    const birdRight = birdPosition.x + 30
    const birdLeft = birdPosition.x
    const birdTop = birdPosition.y
    const birdBottom = birdPosition.y + 30

    const pipeRight = pipe.position.x + 50
    const pipeLeft = pipe.position.x
    const pipeTop = pipe.position.y
    const pipeBottom = pipe.position.y + pipe.height

    return (
      birdRight > pipeLeft &&
      birdLeft < pipeRight &&
      birdTop < pipeBottom &&
      birdBottom > pipeTop
    )
  })
}

export const generatePipe = (): Pipe => {
  const height = Math.floor(Math.random() * (GAME_HEIGHT - PIPE_GAP - 100)) + 50
  const x = 400;
  const holeY = height;
  return {
    position: { x, y: 0 },
    height,
    passed: false,
    x,
    holeY,
    id: `pipe-${Date.now()}-${Math.random()}`,
    g: document.createElementNS('http://www.w3.org/2000/svg', 'g')
  }
} 