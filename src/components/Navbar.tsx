import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-primary-600 dark:text-primary-400">
              PhysCode
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-1 pt-1 text-sm font-bold uppercase tracking-widest">
              {t('navHome')}
            </Link>
            <Link to="/blog" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-1 pt-1 text-sm font-bold uppercase tracking-widest">
              {t('navBlog')}
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-1 pt-1 text-sm font-bold uppercase tracking-widest">
              {t('navAbout')}
            </Link>
            
            <div className="flex items-center gap-2 pl-4 border-l border-gray-200 dark:border-gray-700 ml-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleLanguage}
                className="text-[10px] font-black w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
              >
                {language === 'en' ? '中' : 'EN'}
              </motion.button>
              <ThemeToggle />
            </div>
          </div>

          <div className="sm:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="text-[10px] font-black w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            >
              {language === 'en' ? '中' : 'EN'}
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
