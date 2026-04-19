import { useLanguage } from '../hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 border-t border-gray-100 dark:border-gray-800 py-12 mt-auto relative z-10 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          © {new Date().getFullYear()} PhysCode. {t('footerBuiltWith')}
        </p>
      </div>
    </footer>
  );
}
