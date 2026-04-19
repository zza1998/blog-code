import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { POSTS } from '../data/posts';

export default function BlogList() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">PhysX Learning Series</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Deep dives into real-time physics simulation with NVIDIA PhysX.</p>
      </motion.div>

      <div className="flex flex-col gap-12">
        {POSTS.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-[2rem] border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-primary-500/5 transition-all duration-500"
          >
            <Link 
              to={`/blog/${post.id}`} 
              className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden relative"
            >
               <img 
                 src={post.image} 
                 alt={post.title}
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </Link>
            
            <div className="p-8 md:p-10 flex flex-col flex-grow md:w-3/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-widest">
                  {post.category}
                </span>
                <div className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed line-clamp-2 mb-8">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold text-sm group/link"
                >
                  Read Post 
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
