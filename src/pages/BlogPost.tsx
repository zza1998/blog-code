import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { POSTS } from '../data/posts';

export default function BlogPost() {
  const { id } = useParams();
  const post = POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold dark:text-white">Post not found</h1>
        <Link to="/blog" className="text-primary-600 mt-4 inline-block">Back to Articles</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors mb-12"
      >
        <ArrowLeft size={18} /> Back to Articles
      </Link>

      <article>
        <header className="mb-12">
          <div className="aspect-video w-full rounded-3xl overflow-hidden mb-8 shadow-2xl">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <div
          className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <div className="mt-20 pt-12 border-t border-gray-100 dark:border-gray-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Thanks for reading!</h3>
        <p className="text-gray-600 dark:text-gray-400">
          If you enjoyed this deep dive into PhysX, feel free to explore other articles in the series or follow my journey.
        </p>
      </div>
    </motion.div>
  );
}
