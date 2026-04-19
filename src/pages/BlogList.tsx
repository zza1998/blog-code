import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { POSTS } from '../data/posts';

export default function BlogList() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">PhysX Learning Series</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Deep dives into real-time physics simulation with NVIDIA PhysX.</p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
          >
            <Link to={`/blog/${post.id}`} className="block aspect-video overflow-hidden relative">
               <img 
                 src={post.image} 
                 alt={post.title}
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </Link>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-xs font-medium text-primary-600 dark:text-primary-400 mb-3">
                <span className="px-2 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 mt-auto pt-4 border-t border-gray-50 dark:border-gray-700">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
