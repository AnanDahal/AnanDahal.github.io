import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import GitHubIcon from '../components/GitHubIcon';

const roles = ['Systems Engineer', 'AI Developer', 'Game Builder'];

function TypewriterText() {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), 1800);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 400);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIdx]);

  return (
    <span className="text-[#A855F7]">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const count = 60;
    const dots = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(124, 58, 237, 0.6)';
        ctx.fill();
      });

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
    />
  );
}

export default function Hero() {
  const scrollToProjects = () =>
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F0F1A 0%, #1A1A2E 50%, #0F0F1A 100%)' }}
    >
      <ParticleCanvas />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#7C3AED] font-mono text-sm mb-4 tracking-widest uppercase">
            {'<'} Hello, World! {'>'}
          </p>

          <h1
            className="text-5xl sm:text-7xl font-bold text-[#F0F0F5] mb-4 leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
          >
            Anan Lumphu
          </h1>

          <div className="text-xl sm:text-2xl font-semibold text-[#F0F0F5] mb-4 h-9 flex items-center justify-center gap-2">
            <TypewriterText />
          </div>

          <p className="text-base sm:text-lg text-[#A0A0B5] max-w-xl mx-auto mb-10 leading-relaxed">
            CS &amp; EE student at NTHU, passionate about building intelligent, high-performance systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToProjects}
              className="px-8 py-3.5 rounded-lg bg-[#7C3AED] text-white font-semibold text-base
                hover:bg-[#A855F7] transition-all duration-200 shadow-lg shadow-[#7C3AED]/30
                hover:shadow-[#A855F7]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              View My Projects
            </button>
            <a
              href="https://github.com/AnanDahal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 rounded-lg border border-[#7C3AED]
                text-[#A855F7] font-semibold text-base hover:bg-[#7C3AED]/10 transition-all duration-200
                hover:-translate-y-0.5 active:translate-y-0"
            >
              <GitHubIcon size={18} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[#A0A0B5]">
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
