import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, ArrowRight, Search, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { POSTS } from '../data/posts';
import { useLanguage } from '../hooks/useLanguage';

const POSTS_PER_PAGE = 4;

export default function BlogList() {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories from POSTS
  const categories = useMemo(() => {
    const cats = new Set(POSTS.map(post => post.category));
    return Array.from(cats).sort();
  }, []);

  const selectedCategory = searchParams.get('category') || 'All';

  // Filter posts based on search query AND selected category
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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Library
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
            {filteredPosts.length} {t('articlesFound')}
          </p>
        </div>

        <div className="relative w-full md:w-80 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary-500 transition-colors">
            <Search size={18} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder={t('searchPlaceholder')}
            className="block w-full pl-11 pr-10 py-3 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 focus:border-primary-500 transition-all shadow-sm"
          />
          {searchQuery && (
            <button 
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-16">
        <button
          onClick={() => handleCategoryChange('All')}
          className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
            selectedCategory === 'All'
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20'
              : 'bg-white/50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700'
          }`}
        >
          {t('allCategories')}
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20'
                : 'bg-white/50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-10">
        <AnimatePresence mode="popLayout">
          {currentPosts.length > 0 ? (
            currentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-800"
              >
                <Link 
                  to={`/blog/${post.id}`} 
                  className="md:w-[40%] aspect-[16/10] md:aspect-auto overflow-hidden relative"
                >
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                </Link>
                
                <div className="p-8 md:p-12 flex flex-col flex-grow md:w-[60%] justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <button 
                      onClick={() => handleCategoryChange(post.category)}
                      className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      {post.category}
                    </button>
                    <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-widest">{post.readTime}</span>
                  </div>

                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-[1.1] tracking-tight">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed line-clamp-2 mb-10">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-400 dark:text-gray-500">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`}
                      className="flex items-center gap-2 text-gray-900 dark:text-white font-black text-sm uppercase tracking-widest group/link"
                    >
                      {t('readNow')}
                      <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform text-primary-500" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white dark:bg-gray-900 rounded-[2.5rem]"
            >
              <Search size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('noResults')}</h3>
              <p className="text-gray-500 dark:text-gray-400">Try searching for different keywords.</p>
              <button 
                onClick={() => { clearSearch(); handleCategoryChange('All'); }}
                className="mt-6 text-primary-600 font-bold hover:underline"
              >
                {t('clearFilters')}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="mt-16 flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-12 h-12 rounded-2xl text-sm font-bold transition-all ${
                  currentPage === i + 1 
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30 scale-110' 
                    : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700 shadow-sm'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </motion.div>
  );
}
