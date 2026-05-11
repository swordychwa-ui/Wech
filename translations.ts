import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
  glowSize: number;
}

const COLORS = ['#8b5cf6', '#06b6d4', '#ec4899', '#a78bfa', '#22d3ee', '#6366f1'];

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouse);

    const particles: Particle[] = [];

    const createParticle = (init = false): Particle => ({
      x: Math.random() * w,
      y: init ? Math.random() * h : h + 20,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(Math.random() * 0.8 + 0.2),
      size: Math.random() * 2.5 + 0.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.6 + 0.2,
      life: init ? Math.random() * 300 : 0,
      maxLife: Math.random() * 350 + 150,
      glowSize: Math.random() * 15 + 8,
    });

    for (let i = 0; i < 70; i++) {
      particles.push(createParticle(true));
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      if (particles.length < 80 && Math.random() > 0.92) {
        particles.push(createParticle());
      }

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Mouse interaction - gentle attraction
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200 * 0.02;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Damping
        p.vx *= 0.99;
        p.vy *= 0.995;

        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const lifeRatio = p.life / p.maxLife;
        const fadeIn = Math.min(p.life / 30, 1);
        const fadeOut = lifeRatio > 0.7 ? 1 - (lifeRatio - 0.7) / 0.3 : 1;
        const currentAlpha = p.alpha * fadeIn * fadeOut;

        if (currentAlpha > 0.01) {
          // Glow
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.glowSize);
          gradient.addColorStop(0, p.color + Math.floor(currentAlpha * 60).toString(16).padStart(2, '0'));
          gradient.addColorStop(1, p.color + '00');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.glowSize, 0, Math.PI * 2);
          ctx.fill();

          // Core
          ctx.globalAlpha = currentAlpha;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }

        if (p.life >= p.maxLife || p.y < -50 || p.x < -50 || p.x > w + 50) {
          particles.splice(i, 1);
        }
      }

      // Draw subtle connection lines between nearby particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.08;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
