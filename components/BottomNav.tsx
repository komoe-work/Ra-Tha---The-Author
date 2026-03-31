import React from 'react';
import { motion } from 'motion/react';
import { Home, User, Book as BookIcon, Newspaper, MessageSquare } from 'lucide-react';
import { Tab, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (t: Tab) => void;
  language: Language;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange, language }) => {
  const tabs = [
    { id: Tab.HOME, label: TRANSLATIONS.nav.home[language], icon: Home },
    { id: Tab.ABOUT, label: TRANSLATIONS.nav.about[language], icon: User },
    { id: Tab.BOOKS, label: TRANSLATIONS.nav.books[language], icon: BookIcon },
    { id: Tab.BLOG, label: TRANSLATIONS.nav.blog[language], icon: Newspaper },
    { id: Tab.CHAT, label: TRANSLATIONS.nav.chat[language], icon: MessageSquare },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[92%] max-w-lg glass-effect bg-white/90 dark:bg-slate-900/90 border premium-border rounded-full shadow-xl dark:shadow-slate-900/80 safe-area-bottom flex justify-around items-center z-50 py-4 px-3 backdrop-blur-2xl">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          aria-label={tab.label}
          className={`relative flex flex-col items-center gap-1.5 flex-1 py-1 transition-all duration-500 ${
            activeTab === tab.id ? 'text-premium-gold scale-110' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
          }`}
        >
          {activeTab === tab.id && (
            <motion.div 
              layoutId="nav-active"
              className="absolute -top-2 w-1.5 h-1.5 bg-premium-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)]"
            />
          )}
          <tab.icon size={24} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
          <span className="text-[10px] font-bold uppercase tracking-tighter">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
