import { motion } from 'framer-motion';
import { Github, Twitter, Mail, Code2, Palette, Zap } from 'lucide-react';

const SKILLS = [
  { icon: <Code2 size={18} />, label: 'Frontend Development' },
  { icon: <Palette size={18} />, label: 'UI/UX Design' },
  { icon: <Zap size={18} />, label: 'Performance Optimization' }
];

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-16"
      >
        <div className="w-24 h-24 bg-gradient-to-tr from-primary-500 to-primary-600 rounded-3xl mx-auto mb-6 shadow-xl" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          I'm a developer and designer focused on building minimalist, high-performance web experiences.
        </p>
      </motion.div>

      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Philosophy</h2>
          <p>
            I believe that great software is like good design: it should be invisible.
            My goal is to create interfaces that feel natural and tools that empower people without getting in their way.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose">
            {SKILLS.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
                <div className="text-primary-600 dark:text-primary-400">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium">{skill.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-8 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h2>
          <div className="flex flex-wrap gap-4 not-prose">
            <a href="#" className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:opacity-90 transition-opacity">
              <Twitter size={18} /> Twitter
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Github size={18} /> GitHub
            </a>
            <a href="mailto:hello@example.com" className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors">
              <Mail size={18} /> Email
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
