import React, { useEffect, useRef } from 'react';

export const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const binaryDigits = ['0', '1'];
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(24, 25, 30, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = binaryDigits[Math.floor(Math.random() * binaryDigits.length)];
        const opacity = (Math.sin(i + Date.now() * 0.0012) + 1) * 0.2 + 0.05;

        if (Math.random() > 0.94) {
          ctx.fillStyle = `rgba(0, 206, 209, ${opacity + 0.35})`; // Yellow highlight
        } else if (Math.random() > 0.88) {
          ctx.fillStyle = `rgba(250, 40, 81, ${opacity + 0.4})`; // Pink/Coral primary
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.7})`;
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30 mix-blend-screen"
    />
  );
};
