import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

const POSTS = [
  {
    id: '1',
    title: 'The Future of Web Development',
    excerpt: 'Exploring the next generation of frontend frameworks and the impact of edge computing on performance.',
    date: '2026-04-19',
    readTime: '5 min read',
    category: 'Technology'
  },
  {
    id: '2',
    title: 'Minimalism in UI Design',
    excerpt: 'How stripping away the unnecessary can lead to more impactful and user-friendly interfaces.',
    date: '2026-04-15',
    readTime: '3 min read',
    category: 'Design'
  },
  {
    id: '3',
    title: 'Getting Started with Framer Motion',
    excerpt: 'A comprehensive guide to adding beautiful animations to your React projects with ease.',
    date: '2026-04-10',
    readTime: '8 min read',
    category: 'Tutorial'
  }
];

export default function BlogList() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Articles</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Thoughts, stories, and technical explorations.</p>
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
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 group-hover:scale-110 transition-transform duration-500" />
            </div>
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
