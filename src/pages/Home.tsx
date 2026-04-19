import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { POSTS } from '../data/posts';

const BackgroundEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Dynamic Mesh Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-primary-400/20 dark:bg-primary-500/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[10%] -right-[10%] w-[60%] h-[60%] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[0%] left-[10%] w-[50%] h-[50%] bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-[110px]"
      />
      
      {/* Decorative Grid with perspective feel */}
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2]" 
           style={{ 
             backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
             backgroundSize: '40px 40px',
             maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
             WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
           }}>
      </div>

      {/* Floating particles or "nodes" simulation feel */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 2,
          }}
          className="absolute w-1 h-1 bg-primary-500 rounded-full"
          style={{
            top: `${20 + i * 10}%`,
            left: `${15 + i * 15}%`,
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen">
      <BackgroundEffect />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10 border border-primary-500/20 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Real-time Physics simulation
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-7xl sm:text-9xl font-black text-gray-900 dark:text-white mb-10 tracking-tighter leading-[0.85]"
          >
            Explore <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-blue-500 to-indigo-600 dark:from-primary-400 dark:via-blue-400 dark:to-indigo-400 drop-shadow-sm">Physics</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 mb-14 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Deep dive into NVIDIA PhysX and the engineering behind modern real-time interactive worlds.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/blog"
              className="group bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95 shadow-2xl shadow-primary-500/20"
            >
              Start Learning 
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md text-gray-900 dark:text-gray-100 px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white dark:hover:bg-gray-800 transition-all border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-105 active:scale-95 shadow-sm"
            >
              The Engineer
            </Link>
          </motion.div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-60 relative z-10"
        >
          <div className="flex items-center justify-between mb-16 border-b border-gray-100 dark:border-gray-800 pb-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight uppercase italic">Latest Insights</h2>
              <p className="text-gray-500 text-sm font-bold mt-2 uppercase tracking-widest">Recent technical publications</p>
            </div>
            <Link to="/blog" className="group flex items-center gap-2 text-primary-600 dark:text-primary-400 font-black text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
              Explore All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {POSTS.slice(0, 3).map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group block">
                <div className="aspect-[4/5] bg-gray-100 dark:bg-gray-800 rounded-[2.5rem] mb-8 overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 transition-transform duration-500 group-hover:-translate-y-2">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                </div>
                <div className="px-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400 mb-4 block">{post.category}</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight tracking-tight">
                    {post.title}
                  </h3>
                  <div className="w-10 h-1 bg-gray-100 dark:bg-gray-800 mb-6 group-hover:w-full group-hover:bg-primary-500 transition-all duration-500" />
                </div>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
