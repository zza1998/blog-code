import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { POSTS } from '../data/posts';

const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none bg-slate-50 dark:bg-[#020617]">
      {/* High-visibility Dynamic Mesh Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          x: [-100, 100, -100],
          y: [-50, 50, -50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          x: [100, -100, 100],
          y: [50, -50, 50],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-indigo-500/20 dark:bg-indigo-700/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-primary-500/15 dark:bg-primary-600/15 rounded-full blur-[110px]"
      />
      
      {/* Structural Grid - Highly Visible */}
      <div 
        className="absolute inset-0 opacity-[0.2] dark:opacity-[0.4]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #4f46e5 1px, transparent 1px),
            linear-gradient(to bottom, #4f46e5 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 90%)'
        }}
      />

      {/* Floating Physics Nodes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, Math.sin(i) * 50, 0],
            x: [0, Math.cos(i) * 30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute w-2 h-2 bg-primary-500/40 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
          style={{
            top: `${10 + (i * 13) % 80}%`,
            left: `${10 + (i * 17) % 80}%`,
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-primary-500/30">
      <BackgroundEffect />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-32 sm:py-48">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 backdrop-blur-xl text-primary-600 dark:text-primary-400 text-xs font-black uppercase tracking-[0.3em] mb-12 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
            </span>
            Real-time Simulation Engine
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-7xl sm:text-9xl font-black text-gray-900 dark:text-white mb-10 tracking-tighter leading-[0.8] flex flex-col items-center"
          >
            <span className="block opacity-90">EXPLORE</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-blue-500 to-indigo-600 dark:from-primary-400 dark:via-blue-400 dark:to-indigo-300 drop-shadow-2xl">PHYSICS</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Mastering the mechanics of movement. A technical deep dive into NVIDIA PhysX and high-performance game engineering.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-8">
            <Link
              to="/blog"
              className="group bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-14 py-6 rounded-3xl font-black text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(99,102,241,0.3)] dark:shadow-[0_20px_50px_rgba(99,102,241,0.1)]"
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

        {/* Dynamic Showcase Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-64 relative z-10"
        >
          <div className="flex items-end justify-between mb-20 border-b border-gray-200 dark:border-gray-800 pb-10">
            <div>
              <span className="text-primary-500 font-black text-xs tracking-[0.4em] uppercase mb-4 block">Archives</span>
              <h2 className="text-5xl font-black text-gray-900 dark:text-white tracking-tighter">LATEST <span className="italic font-light">RESEARCH</span></h2>
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
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
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
