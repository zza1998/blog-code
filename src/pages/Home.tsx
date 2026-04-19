import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { POSTS } from '../data/posts';

const BackgroundEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -150, 0],
          y: [0, 100, 0],
          rotate: [0, -120, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[140px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 50, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[100px]"
      />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(15 23 42 / 0.04)\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")' }}>
      </div>
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
    <div className="relative">
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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-widest mb-8 border border-primary-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Simulating Reality
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-8xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-[0.9]"
          >
            Explore the World of <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-blue-600 dark:from-primary-400 dark:to-blue-500">Physics</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            A deep dive into NVIDIA PhysX, real-time simulations, and the technical mechanics of modern game engines.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/blog"
              className="group bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 hover:scale-105 active:scale-95 shadow-xl shadow-gray-500/10"
            >
              Start Learning 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-10 py-4 rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border border-gray-100 dark:border-gray-700 flex items-center justify-center hover:scale-105 active:scale-95 shadow-sm"
            >
              About Me
            </Link>
          </motion.div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-48 relative z-10"
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Latest Research</h2>
            <Link to="/blog" className="text-primary-600 dark:text-primary-400 font-bold text-sm hover:underline">View All Articles</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {POSTS.slice(0, 3).map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group block">
                <div className="aspect-[16/10] bg-gray-100 dark:bg-gray-800 rounded-[2rem] mb-6 overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                </div>
                <div className="px-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 mb-3 block">{post.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
