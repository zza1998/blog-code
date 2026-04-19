import { motion } from 'framer-motion';
import { Mail, Code2, Palette, Zap, Github, Twitter } from 'lucide-react';

const SKILLS = [
  { icon: <Code2 size={18} />, label: 'Frontend Development' },
  { icon: <Palette size={18} />, label: 'UI/UX Design' },
  { icon: <Zap size={18} />, label: 'Performance Optimization' }
];

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-16"
      >
        <div className="w-24 h-24 bg-gradient-to-tr from-primary-500 to-primary-600 rounded-3xl mx-auto mb-6 shadow-xl" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight uppercase italic">The Engineer</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I'm a developer and designer focused on building minimalist, high-performance web experiences with a focus on real-time physics and engine architecture.
        </p>
      </motion.div>

      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-12">
        <section className="bg-white/50 dark:bg-gray-900/30 backdrop-blur-md p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Philosophy</h2>
          <p className="leading-relaxed">
            I believe that great software is like good design: it should be invisible.
            My goal is to create interfaces that feel natural and tools that empower people without getting in their way. 
            In the world of physics simulation, this means efficiency and precision.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 not-prose">
            {SKILLS.map((skill, index) => (
              <div key={index} className="flex items-center gap-4 p-5 bg-white/50 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="text-primary-600 dark:text-primary-400">
                  {skill.icon}
                </div>
                <span className="text-sm font-bold text-gray-700 dark:text-gray-200 uppercase tracking-widest">{skill.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-12 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">Connect</h2>
          <div className="flex flex-wrap gap-6 not-prose">
            <a href="#" className="flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-gray-500/10">
              <Twitter size={18} /> Twitter
            </a>
            <a href="#" className="flex items-center gap-2 px-8 py-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md text-gray-900 dark:text-gray-100 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white dark:hover:bg-gray-800 transition-all border border-gray-100 dark:border-gray-700 shadow-sm">
              <Github size={18} /> GitHub
            </a>
            <a href="mailto:hello@example.com" className="flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20">
              <Mail size={18} /> Email
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
