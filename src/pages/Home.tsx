import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
        >
          Welcome to <span className="text-primary-600 dark:text-primary-400">MyBlog</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          A minimalist space to share ideas, stories, and experiments. Built for speed, clarity, and aesthetics.
        </motion.p>
        <motion.div variants={itemVariants} className="flex justify-center gap-4">
          <Link
            to="/blog"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2"
          >
            Read Articles <ArrowRight size={20} />
          </Link>
          <Link
            to="/about"
            className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-8 py-3 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-32"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 opacity-20 group-hover:opacity-40 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                The Future of Web Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                Exploring the next generation of frontend frameworks and the impact of edge computing on performance.
              </p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
