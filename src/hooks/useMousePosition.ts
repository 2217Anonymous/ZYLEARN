import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: ev.clientX,
        y: ev.clientY,
        normalizedX: (ev.clientX / innerWidth) * 2 - 1,
        normalizedY: (ev.clientY / innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
}
