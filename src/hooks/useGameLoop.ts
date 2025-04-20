import { useRef, useEffect } from 'react';

export function useGameLoop(update: () => void, running: boolean) {
  const frame = useRef<number | undefined>(undefined);

  useEffect(() => {
    function loop() {
      update();
      frame.current = requestAnimationFrame(loop);
    }
    if (running) frame.current = requestAnimationFrame(loop);
    else cancelAnimationFrame(frame.current!);
    return () => cancelAnimationFrame(frame.current!);
  }, [update, running]);
}
