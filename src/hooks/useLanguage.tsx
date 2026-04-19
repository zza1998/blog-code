import { useState, useEffect, createContext, useContext, type ReactNode } from 'react';

type Language = 'en' | 'zh';

interface Translations {
  [key: string]: {
    en: string;
    zh: string;
  };
}

const translations: Translations = {
  navHome: { en: 'Home', zh: '首页' },
  navBlog: { en: 'Blog', zh: '博客' },
  navAbout: { en: 'About', zh: '关于' },
  heroSubtitle: { en: 'PhysX Engineering & Simulation', zh: 'PhysX 工程与仿真' },
  heroTitle: { en: 'EXPLORE PHYSICS', zh: '探索物理' },
  heroDesc: { en: 'A technical workspace for high-performance physics, game engine architecture, and real-time simulation logic.', zh: '专注于高性能物理、游戏引擎架构和实时仿真逻辑的技术空间。' },
  enterLibrary: { en: 'Enter Library', zh: '进入书库' },
  theEngineer: { en: 'The Engineer', zh: '个人简介' },
  latestResearch: { en: 'LATEST RESEARCH', zh: '最新研究' },
  viewAll: { en: 'SEE ALL', zh: '查看全部' },
  archives: { en: 'Archives', zh: '存档' },
  searchPlaceholder: { en: 'Search articles...', zh: '搜索文章...' },
  articlesFound: { en: 'articles on high-performance physics.', zh: '篇关于高性能物理的文章。' },
  readNow: { en: 'Read Now', zh: '立即阅读' },
  noResults: { en: 'No results found', zh: '未找到结果' },
  clearFilters: { en: 'Clear all filters', zh: '清除过滤' },
  philosophy: { en: 'Philosophy', zh: '技术哲学' },
  expertise: { en: 'Expertise', zh: '专业领域' },
  connect: { en: 'Connect', zh: '建立联系' },
  footerBuiltWith: { en: 'Built with React & Vite.', zh: '基于 React & Vite 构建。' },
  backToLibrary: { en: 'Back to Library', zh: '返回书库' },
  thanksForReading: { en: 'Thanks for reading!', zh: '感谢阅读！' },
  allCategories: { en: 'All Categories', zh: '全部分类' },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
