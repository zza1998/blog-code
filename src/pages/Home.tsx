import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { POSTS } from '../data/posts';

const PhysicsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 100;
    const connectionDistance = 180;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 3 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
        if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        const isDark = document.documentElement.classList.contains('dark');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(99, 102, 241, 0.6)' : 'rgba(79, 70, 229, 0.3)';
        ctx.fill();
        if (isDark) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(99, 102, 241, 0.5)';
        }
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? '#020617' : '#f8fafc';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(79, 70, 229, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 60) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 60) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      particles.forEach((p, i) => {
        p.update();
        p.draw();
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = isDark
              ? `rgba(99, 102, 241, ${0.3 * (1 - dist / connectionDistance)})`
              : `rgba(79, 70, 229, ${0.2 * (1 - dist / connectionDistance)})`;
            ctx.lineWidth = 1.5;
            ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init(); animate();
    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      <canvas ref={canvasRef} className="block w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 via-transparent to-blue-500/10" />
    </div>
  );
};

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="relative min-h-screen bg-transparent">
      <PhysicsBackground />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 backdrop-blur-xl text-primary-600 dark:text-primary-400 text-xs font-black uppercase tracking-[0.3em] mb-12 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
              </span>
              PhysX Engineering & Simulation
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-7xl sm:text-9xl font-black text-gray-900 dark:text-white mb-10 tracking-tighter leading-[0.8]"
            >
              EXPLORE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-blue-500 to-indigo-600 dark:from-primary-400 dark:via-blue-400 dark:to-indigo-300 drop-shadow-2xl">PHYSICS</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              A technical workspace for high-performance physics, game engine architecture, and real-time simulation logic.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-8">
              <Link
                to="/blog"
                className="group bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-14 py-6 rounded-3xl font-black text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 hover:scale-105 active:scale-95 shadow-xl shadow-primary-500/20"
              >
                Enter Library
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl text-gray-900 dark:text-gray-100 px-14 py-6 rounded-3xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white/80 dark:hover:bg-slate-800 transition-all border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:scale-105 active:scale-95 shadow-sm"
              >
                The Engineer
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="pb-32 relative z-10"
        >
          <div className="flex items-end justify-between mb-20 border-b border-gray-200 dark:border-gray-800 pb-10">
            <div>
              <span className="text-primary-500 font-black text-xs tracking-[0.4em] uppercase mb-4 block">Archives</span>
              <h2 className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter uppercase leading-none">Latest <span className="italic font-light">Research</span></h2>
            </div>
            <Link to="/blog" className="group flex items-center gap-3 text-gray-900 dark:text-white font-black text-xs uppercase tracking-[0.2em] hover:text-primary-500 transition-colors">
              SEE ALL <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {POSTS.slice(0, 3).map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group block">
                <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-[3rem] mb-10 overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-primary-500/20">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                  />
                </div>
                <div className="px-4">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-8 h-[1px] bg-primary-500"></span>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">{post.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <div className="w-0 h-1 bg-primary-500 group-hover:w-full transition-all duration-700" />
                </div>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
