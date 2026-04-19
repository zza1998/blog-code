import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();

  // Simulated post content
  const post = {
    title: 'The Future of Web Development',
    date: '2026-04-19',
    readTime: '5 min read',
    content: `
      <p>Web development is evolving at an unprecedented pace. From the rise of AI-assisted coding to the shift towards edge computing, the landscape is changing fast.</p>
      <p>In this article, we explore the key trends that will define the next decade of the web. We'll look at how frameworks are becoming more opinionated yet more flexible, and how the developer experience is being prioritized more than ever before.</p>
      <h2>Edge Computing and SSR</h2>
      <p>Server-side rendering (SSR) is making a huge comeback, but not as we knew it. With edge functions, we can now run logic closer to the user than ever before, reducing latency to near zero.</p>
      <h2>The Role of AI</h2>
      <p>AI is not just about writing code; it's about optimizing it. We're seeing tools that can automatically refactor legacy codebases and suggest performance improvements in real-time.</p>
    `
  };

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
          If you enjoyed this article, feel free to share it or follow me on social media for more updates.
        </p>
      </div>
    </motion.div>
  );
}
