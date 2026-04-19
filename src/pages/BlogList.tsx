import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, ArrowRight, Search, ChevronLeft, ChevronRight, X, Clock } from 'lucide-react';
import { POSTS } from '../data/posts';
import { useLanguage } from '../hooks/useLanguage';

const POSTS_PER_PAGE = 6; // Increased from 4 due to smaller cards

export default function BlogList() {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    const cats = new Set(POSTS.map(post => post.category));
    return Array.from(cats).sort();
  }, []);

  const selectedCategory = searchParams.get('category') || 'All';

  const filteredPosts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return POSTS.filter(post => {
      const matchesSearch = !query || 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query);
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat: string) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
    setCurrentPage(1);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 20 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-gray-100 dark:border-gray-800 pb-12">
        <div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter uppercase italic">
            {t('libraryTitle')}
          </h1>
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
            <span className="text-sm font-bold uppercase tracking-widest bg-primary-500/10 text-primary-600 px-3 py-1 rounded-lg">
              {filteredPosts.length} {t('totalArticles')}
            </span>
          </div>
        </div>

        <div className="relative w-full md:w-80 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-500 transition-colors">
            <Search size={16} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder={t('searchPlaceholder')}
            className="block w-full pl-11 pr-10 py-3 bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:border-primary-500 transition-all focus:ring-0"
          />
          {searchQuery && (
            <button onClick={clearSearch} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600">
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills - Compact */}
      <div className="flex flex-wrap gap-2 mb-12">
        <button
          onClick={() => handleCategoryChange('All')}
          className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            selectedCategory === 'All'
              ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-md'
              : 'bg-white dark:bg-gray-800/50 text-gray-500 border border-gray-100 dark:border-gray-700 hover:border-primary-500'
          }`}
        >
          {t('allCategories')}
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
              selectedCategory === cat
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800/50 text-gray-500 border border-gray-100 dark:border-gray-700 hover:border-primary-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Compact Blog List */}
      <div className="grid gap-6">
        <AnimatePresence mode="popLayout">
          {currentPosts.length > 0 ? (
            currentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group flex flex-col sm:flex-row items-center bg-white/40 dark:bg-gray-900/20 hover:bg-white dark:hover:bg-gray-900/60 rounded-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 p-4 gap-6"
              >
                <Link 
                  to={`/blog/${post.id}`} 
                  className="w-full sm:w-48 h-32 flex-shrink-0 overflow-hidden rounded-xl relative"
                >
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </Link>
                
                <div className="flex flex-col flex-grow py-2">
                  <div className="flex items-center gap-3 mb-2">
                    <button 
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleCategoryChange(post.category); }}
                      className="text-[9px] font-black uppercase tracking-widest text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {post.category}
                    </button>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <div className="flex items-center gap-1 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                      <Clock size={10} />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-1 mb-4 max-w-2xl">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {post.date}
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="flex items-center gap-1 text-primary-600 dark:text-primary-400 font-black text-[10px] uppercase tracking-widest group/link opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0"
                    >
                      {t('readNow')}
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 bg-gray-50/30 dark:bg-gray-800/10 rounded-2xl border-2 border-dashed border-gray-100 dark:border-gray-800">
              <Search size={40} className="mx-auto text-gray-200 dark:text-gray-700 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('noResults')}</h3>
              <button onClick={() => { clearSearch(); handleCategoryChange('All'); }} className="mt-4 text-xs font-black uppercase tracking-widest text-primary-600 hover:underline">
                {t('clearFilters')}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Pagination - Compact */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-3">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-400 disabled:opacity-20 hover:border-primary-500 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          
          <div className="flex items-center gap-1.5">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-xl text-[10px] font-black transition-all ${
                  currentPage === i + 1 
                    ? 'bg-primary-600 text-white shadow-lg' 
                    : 'bg-white dark:bg-gray-800/50 text-gray-500 border border-gray-100 dark:border-gray-700 hover:border-primary-500'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-400 disabled:opacity-20 hover:border-primary-500 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </motion.div>
  );
}
