import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeroSectionProps {
  language: Language;
  onBooksClick: () => void;
  onChatClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language, onBooksClick, onChatClick }) => {
  return (
    <section className="text-center space-y-8 py-16 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-premium-gold/5 to-transparent -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6"
      >
        <motion.h2 
          className="serif text-5xl sm:text-7xl font-bold text-premium-ink-light dark:text-premium-ink-dark leading-tight tracking-tight"
        >
          {TRANSLATIONS.hero.title[language]}
        </motion.h2>
        
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mm-text max-w-2xl mx-auto leading-relaxed font-light">
          {TRANSLATIONS.hero.subtitle[language]}
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 pt-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBooksClick} 
            className="px-10 py-4 bg-premium-gold text-white rounded-full text-sm font-bold shadow-2xl shadow-premium-gold/30 transition-all hover:shadow-premium-gold/50"
          >
            {TRANSLATIONS.hero.ctaBooks[language]}
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onChatClick} 
            className="px-10 py-4 bg-white/10 dark:bg-white/5 text-premium-ink-light dark:text-white rounded-full text-sm font-bold border premium-border glass-effect hover:bg-white/20 dark:hover:bg-white/10 transition-all"
          >
            {TRANSLATIONS.hero.ctaChat[language]}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
