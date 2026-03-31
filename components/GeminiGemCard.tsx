import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { GEMINI_GEM_URL, TRANSLATIONS } from '../constants';

interface GeminiGemCardProps {
  language: Language;
}

const GeminiGemCard: React.FC<GeminiGemCardProps> = ({ language }) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.01 }}
    className="relative overflow-hidden rounded-[3rem] p-10 bg-gradient-to-br from-premium-gold/20 via-transparent to-premium-gold/5 border premium-border cursor-pointer group glass-effect"
    onClick={() => window.open(GEMINI_GEM_URL, '_blank')}
  >
    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-all duration-700 group-hover:rotate-12 group-hover:scale-125">
      <Sparkles size={160} className="text-premium-gold" />
    </div>
    <div className="relative z-10">
      <div className="flex items-center gap-5 mb-6">
        <div className="p-4 bg-gradient-to-br from-premium-gold to-amber-600 rounded-3xl text-white shadow-xl shadow-premium-gold/30 group-hover:rotate-6 transition-transform">
          <Sparkles size={32} />
        </div>
        <div>
          <span className="text-[11px] font-black text-premium-gold uppercase tracking-[0.3em] block mb-1">
            {TRANSLATIONS.gemCard.tag[language]}
          </span>
          <h3 className="serif text-3xl font-bold text-slate-900 dark:text-slate-100">
            {TRANSLATIONS.gemCard.title[language]}
          </h3>
        </div>
      </div>
      <p className="text-base text-slate-600 dark:text-slate-400 mm-text leading-relaxed mb-8 max-w-lg font-light">
        {TRANSLATIONS.gemCard.desc[language]}
      </p>
      <button className="flex items-center gap-3 px-8 py-4 bg-premium-gold text-white rounded-full text-sm font-bold shadow-2xl shadow-premium-gold/30 hover:shadow-premium-gold/50 transition-all group-hover:gap-5">
        {TRANSLATIONS.gemCard.btn[language]}
        <ArrowRight size={18} />
      </button>
    </div>
  </motion.div>
);

export default GeminiGemCard;
