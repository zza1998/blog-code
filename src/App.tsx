import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Keep core pages in the main bundle to prevent flickering
import Home from './pages/Home';
import BlogList from './pages/BlogList';

// Heavy content pages can remain lazy-loaded
const BlogPost = lazy(() => import('./pages/BlogPost'));
const About = lazy(() => import('./pages/About'));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={
          <Suspense fallback={null}>
            <BlogPost />
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={null}>
            <About />
          </Suspense>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col transition-colors duration-300 font-sans bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-slate-100">
        <Navbar />
        <main className="flex-grow relative z-10">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
