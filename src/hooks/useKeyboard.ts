import { useEffect, useState, useRef } from 'react';

export function useKeyboard() {
  const [jumpPressed, setJump] = useState(false);
  const gameRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.code === 'Space') {
        setJump(true);
        setTimeout(() => setJump(false), 0);
      }
    }

    function onMouseClick() {
      setJump(true);
      setTimeout(() => setJump(false), 0);
    }

    // Adiciona o evento de clique no SVG
    const gameElement = document.querySelector('svg');
    if (gameElement) {
      gameElement.addEventListener('click', onMouseClick);
    }

    window.addEventListener('keydown', onKey);
    
    return () => {
      window.removeEventListener('keydown', onKey);
      if (gameElement) {
        gameElement.removeEventListener('click', onMouseClick);
      }
    };
  }, []);

  return jumpPressed;
}
