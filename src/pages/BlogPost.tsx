import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { POSTS, getPostContent } from '../data/posts';

export default function BlogPost() {
  const { id } = useParams();
  const post = POSTS.find(p => p.id === id);
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getPostContent(id).then(fullContent => {
        setContent(fullContent);
        setIsLoading(false);
      });
    }
  }, [id]);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-2xl font-bold dark:text-white">Post not found</h1>
        <Link to="/blog" className="text-primary-600 mt-4 inline-block">Back to Articles</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
    >
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 transition-colors mb-12 font-bold uppercase tracking-widest text-xs"
      >
        <ArrowLeft size={18} /> Back to Library
      </Link>

      <article className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-2xl">
        <header className="mb-12">
          <div className="aspect-video w-full rounded-3xl overflow-hidden mb-10 shadow-2xl">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-[10px] font-black uppercase tracking-[0.2em]">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
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

        <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
          {isLoading ? (
            <div className="flex flex-col gap-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-full animate-pulse" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4 animate-pulse" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-5/6 animate-pulse" />
            </div>
          ) : (
            <ReactMarkdown>{content}</ReactMarkdown>
          )}
        </div>
      </article>

      <div className="mt-20 p-12 bg-white/40 dark:bg-gray-900/20 backdrop-blur-md rounded-[2.5rem] border border-gray-100 dark:border-gray-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">Post Scriptum</h3>
        <p className="text-gray-600 dark:text-gray-400 font-medium">
          If you enjoyed this technical deep dive, feel free to explore other research in the series or reach out to me via the About page.
        </p>
      </div>
    </motion.div>
  );
}
