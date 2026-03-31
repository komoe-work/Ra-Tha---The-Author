import React from 'react';
import { motion } from 'motion/react';
import { Book as BookIcon, Newspaper } from 'lucide-react';
import { Language, Tab } from '../types';
import { TRANSLATIONS } from '../constants';

interface ActionPanelProps {
  language: Language;
  onTabChange: (tab: Tab) => void;
}

const ActionPanel: React.FC<ActionPanelProps> = ({ language, onTabChange }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-12">
      <motion.div 
        whileHover={{ y: -10, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onTabChange(Tab.BOOKS)} 
        className="group p-10 rounded-[3rem] bg-white dark:bg-premium-card-dark border premium-border premium-shadow glass-effect cursor-pointer hover:border-premium-gold/50 transition-all flex flex-col items-center text-center"
      >
        <div className="w-20 h-20 bg-premium-gold/10 rounded-3xl flex items-center justify-center mb-8 text-premium-gold group-hover:scale-110 transition-transform shadow-lg shadow-premium-gold/5">
          <BookIcon size={36} />
        </div>
        <h3 className="serif text-3xl font-bold mb-4 text-premium-ink-light dark:text-premium-ink-dark">
          {TRANSLATIONS.nav.books[language]}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mm-text leading-relaxed font-light">
          Explore the wisdom within the pages.
        </p>
      </motion.div>
      
      <motion.div 
        whileHover={{ y: -10, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onTabChange(Tab.BLOG)} 
        className="group p-10 rounded-[3rem] bg-white dark:bg-premium-card-dark border premium-border premium-shadow glass-effect cursor-pointer hover:border-premium-gold/50 transition-all flex flex-col items-center text-center"
      >
        <div className="w-20 h-20 bg-zinc-100 dark:bg-white/5 rounded-3xl flex items-center justify-center mb-8 text-zinc-500 group-hover:scale-110 transition-transform shadow-lg shadow-black/5">
          <Newspaper size={36} />
        </div>
        <h3 className="serif text-3xl font-bold mb-4 text-premium-ink-light dark:text-premium-ink-dark">
          {TRANSLATIONS.nav.blog[language]}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mm-text leading-relaxed font-light">
          Deep dives into Dhamma and life.
        </p>
      </motion.div>
    </div>
  );
};

export default ActionPanel;
