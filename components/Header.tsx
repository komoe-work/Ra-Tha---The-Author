import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon, Languages } from 'lucide-react';
import { Language, Theme } from '../types';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, onToggleLanguage, theme, onToggleTheme }) => (
  <header className="fixed top-0 w-full z-50 glass-effect border-b premium-border py-4 px-6 flex justify-between items-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm dark:shadow-slate-900/50">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-3"
    >
      <div className="w-10 h-10 bg-gradient-to-br from-premium-gold to-amber-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-premium-gold/30">
        <span className="serif text-xl font-bold">R</span>
      </div>
      <span className="serif text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Ra Tha
      </span>
    </motion.div>
    
    <div className="flex items-center gap-2">
      <button 
        onClick={onToggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 text-premium-gold hover:rotate-12"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      <button 
        onClick={onToggleLanguage}
        aria-label="Toggle language"
        className="flex items-center gap-2 px-4 py-2 rounded-full border premium-border text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all glass-effect text-slate-700 dark:text-slate-300"
      >
        <Languages size={14} className="text-premium-gold" />
        <span className={language === 'mm' ? 'text-premium-gold' : 'opacity-50'}>မြန်မာ</span>
        <span className="opacity-20">|</span>
        <span className={language === 'en' ? 'text-premium-gold' : 'opacity-50'}>EN</span>
      </button>
    </div>
  </header>
);

export default Header;
