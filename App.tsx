import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Book as BookIcon, 
  Newspaper, 
  MessageSquare, 
  User, 
  Home, 
  Moon, 
  Sun, 
  Languages, 
  ArrowRight, 
  ExternalLink,
  X,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Tab, Book, Article, Language } from './types';
import { BOOKS, ARTICLES, QUOTES, GEMINI_GEM_URL, TRANSLATIONS } from './constants';

// Import extracted components
import HeroSection from './components/HeroSection';
import BookCard from './components/BookCard';
import ActionPanel from './components/ActionPanel';

type Theme = 'light' | 'dark';

// --- Components ---

const Header: React.FC<{ 
  language: Language; 
  onToggleLanguage: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}> = ({ language, onToggleLanguage, theme, onToggleTheme }) => (
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

const BottomNav: React.FC<{ activeTab: Tab; onTabChange: (t: Tab) => void; language: Language }> = ({ activeTab, onTabChange, language }) => {
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

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({ isOpen, onClose, children }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-md"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          className="relative w-full max-w-3xl bg-white dark:bg-slate-800 backdrop-blur-2xl rounded-[3rem] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col border premium-border"
        >
          <button 
            onClick={onClose} 
            aria-label="Close modal"
            className="absolute top-6 right-6 z-10 p-3 bg-black/5 dark:bg-white/5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 hover:rotate-90"
          >
            <X size={24} />
          </button>
          <div className="overflow-y-auto p-8 sm:p-12">
            {children}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const GeminiGemCard: React.FC<{ language: Language }> = ({ language }) => (
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

// --- Main App ---

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);
  const [language, setLanguage] = useState<Language>('mm');
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('app-theme') as Theme;
    return saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex(prev => (prev + 1) % QUOTES.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const switchTab = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isInitialLoading) {
    return (
      <div className="fixed inset-0 z-[200] bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-20 h-20 border-2 border-premium-gold border-t-transparent rounded-full animate-spin mb-8" />
          <h1 className="serif text-4xl font-bold tracking-[0.2em] text-premium-gold">RA THA</h1>
          <p className="mt-3 text-xs font-black uppercase tracking-[0.5em] text-slate-400">The Author</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-40 bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-premium-gold/30">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-premium-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] aspect-square bg-amber-600/5 rounded-full blur-[100px]" />
      </div>

      <Header 
        language={language} 
        onToggleLanguage={() => setLanguage(l => l === 'mm' ? 'en' : 'mm')} 
        theme={theme}
        onToggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
      />
      
      <main className="pt-36 px-6 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === Tab.HOME && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-16"
            >
              <HeroSection 
                language={language} 
                onBooksClick={() => switchTab(Tab.BOOKS)} 
                onChatClick={() => switchTab(Tab.CHAT)} 
              />

              <section className="relative py-20 px-10 rounded-[4rem] bg-white dark:bg-slate-800 border premium-border overflow-hidden text-center glass-effect shadow-md dark:shadow-slate-900/50">
                <div className="absolute top-0 left-0 p-10 opacity-10">
                  <span className="serif text-[12rem] leading-none text-premium-gold">"</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={quoteIndex}
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.05, y: -10 }}
                    transition={{ duration: 0.8 }}
                    className="serif text-3xl sm:text-4xl font-medium text-slate-900 dark:text-slate-100 mm-text italic leading-relaxed relative z-10 min-h-[160px] flex items-center justify-center px-4"
                  >
                    {QUOTES[quoteIndex][language]}
                  </motion.p>
                </AnimatePresence>
                <div className="mt-12 flex justify-center gap-3">
                  {QUOTES.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setQuoteIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-700 ${quoteIndex === i ? 'w-12 bg-premium-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]' : 'w-3 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'}`} 
                    />
                  ))}
                </div>
              </section>

              <ActionPanel language={language} onTabChange={switchTab} />
            </motion.div>
          )}

          {activeTab === Tab.ABOUT && (
            <motion.div 
              key="about"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="space-y-12"
            >
              <div className="flex flex-col items-center text-center space-y-8">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-40 h-40 bg-gradient-to-br from-premium-gold/20 to-amber-600/10 rounded-full flex items-center justify-center text-premium-gold border-4 border-premium-gold/20 shadow-2xl"
                >
                  <User size={80} />
                </motion.div>
                <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight break-words text-balance">{TRANSLATIONS.about.title[language]}</h2>
              </div>
              
              <div className="p-12 sm:p-16 rounded-[4rem] bg-white dark:bg-slate-800 border premium-border shadow-md dark:shadow-slate-900/50 glass-effect space-y-12 backdrop-blur-3xl">
                  <p className="serif text-3xl sm:text-4xl font-medium text-premium-gold italic mm-text leading-snug text-center max-w-3xl mx-auto">
                    {TRANSLATIONS.about.quote[language]}
                  </p>
                  <div className="space-y-8 text-xl text-slate-600 dark:text-slate-300 mm-text leading-loose font-light">
                    <p>{TRANSLATIONS.about.p1[language]}</p>
                    <p>{TRANSLATIONS.about.p2[language]}</p>
                  </div>

                  <div className="pt-12 border-t premium-border">
                     <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8 text-center">
                       {TRANSLATIONS.about.connect[language]}
                     </h4>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <motion.a 
                          whileHover={{ y: -5, scale: 1.02 }}
                          href="https://t.me/noblefriendsmm" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-5 p-6 rounded-3xl bg-slate-50/50 dark:bg-white/5 border premium-border hover:border-premium-gold transition-all group glass-effect"
                        >
                          <div className="w-14 h-14 bg-sky-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-sky-500/30 transition-transform hover:scale-110">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M20.665 3.717l-17.73 6.837c-1.213.486-1.203 1.163-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701-.33 4.955c.488 0 .705-.223.979-.488l2.35-2.287 4.89 3.614c.901.496 1.548.241 1.774-.838l3.205-15.108c.329-1.318-.505-1.917-1.366-1.521z"/></svg>
                          </div>
                          <div>
                            <span className="block text-base font-bold text-slate-900 dark:text-slate-100">{TRANSLATIONS.about.telegram[language]}</span>
                            <span className="block text-sm text-slate-500 dark:text-slate-400">Join our community</span>
                          </div>
                        </motion.a>

                        <motion.a 
                          whileHover={{ y: -5, scale: 1.02 }}
                          href="https://www.facebook.com/share/17iNC1HVq4/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-5 p-6 rounded-3xl bg-white dark:bg-slate-800 border premium-border shadow-md dark:shadow-slate-900/50 hover:border-premium-gold transition-all group glass-effect"
                        >
                          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-600/30 transition-transform hover:scale-110">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                          </div>
                          <div>
                            <span className="block text-base font-bold text-slate-900 dark:text-slate-100">{TRANSLATIONS.about.facebook[language]}</span>
                            <span className="block text-sm text-slate-500 dark:text-slate-400">Follow official page</span>
                          </div>
                        </motion.a>
                     </div>
                  </div>
              </div>
            </motion.div>
          )}

          {activeTab === Tab.BOOKS && (
            <motion.div 
              key="books"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="space-y-16"
            >
              <GeminiGemCard language={language} />
              <div className="grid grid-cols-1 gap-16">
                {BOOKS.map((book, index) => (
                  <BookCard 
                    key={book.id} 
                    book={book} 
                    language={language} 
                    index={index} 
                    onClick={() => setSelectedBook(book)} 
                  />
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === Tab.BLOG && (
            <motion.div 
              key="blog"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="space-y-10"
            >
              <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center tracking-tight break-words text-balance">Wisdom Articles</h2>
              <div className="grid grid-cols-1 gap-6">
                {ARTICLES.map((article, index) => (
                    <motion.article 
                      key={article.id} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setSelectedArticle(article)}
                      className="group p-10 rounded-[2.5rem] bg-white dark:bg-slate-800 border premium-border shadow-md dark:shadow-slate-900/50 glass-effect flex justify-between items-center cursor-pointer hover:border-premium-gold transition-all backdrop-blur-xl"
                    >
                    <div className="flex-1 pr-8">
                      <h4 className="serif text-3xl font-bold mm-text group-hover:text-premium-gold transition-colors leading-tight text-slate-900 dark:text-slate-100">{article.title[language]}</h4>
                      <p className="text-base text-slate-500 dark:text-slate-400 mt-4 line-clamp-1 mm-text font-light">{article.preview[language]}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-premium-gold group-hover:text-white transition-all group-hover:translate-x-2">
                      <ChevronRight size={24} />
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === Tab.CHAT && (
            <motion.div 
              key="chat"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="flex flex-col items-center py-16 text-center space-y-10"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-28 h-28 bg-gradient-to-br from-premium-gold/20 to-amber-600/10 rounded-[2.5rem] flex items-center justify-center text-premium-gold shadow-inner border premium-border glass-effect"
              >
                 <MessageSquare size={56} />
              </motion.div>
              <div className="space-y-6">
                <h3 className="serif text-3xl sm:text-4xl md:text-5xl font-extrabold mm-text tracking-tight break-words text-balance text-slate-900 dark:text-slate-100">{TRANSLATIONS.chat.title[language]}</h3>
                <p className="text-xl text-slate-500 dark:text-slate-400 max-w-lg mm-text leading-relaxed font-light">
                  {TRANSLATIONS.chat.subtitle[language]}
                </p>
              </div>
              <div className="w-full max-w-2xl">
                <GeminiGemCard language={language} />
              </div>
              <button 
                onClick={() => switchTab(Tab.HOME)}
                className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] hover:text-premium-gold transition-all hover:tracking-[0.6em]"
              >
                {TRANSLATIONS.chat.back[language]}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Modals */}
      <Modal isOpen={!!selectedBook} onClose={() => setSelectedBook(null)}>
        {selectedBook && (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
              <div className="w-56 h-80 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border premium-border flex items-center justify-center overflow-hidden shadow-2xl p-8 shrink-0 glass-effect">
                 {selectedBook.imageUrl ? (
                   <img src={selectedBook.imageUrl} alt={selectedBook.title[language]} loading="lazy" className="h-full w-auto object-contain" />
                 ) : (
                   <BookIcon size={64} className="text-slate-200 dark:text-slate-700" />
                 )}
              </div>
              <div className="space-y-6">
                <span className="inline-block text-[11px] font-black text-premium-gold uppercase tracking-[0.3em] px-5 py-2 bg-premium-gold/10 rounded-full">
                  {selectedBook.tag[language]}
                </span>
                <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-extrabold mm-text leading-tight tracking-tight break-words text-balance text-slate-900 dark:text-slate-100">{selectedBook.title[language]}</h2>
                <p className="text-xl text-slate-500 dark:text-slate-400 mm-text font-light">{selectedBook.subtitle[language]}</p>
              </div>
            </div>
            
            <div className="p-10 bg-slate-50/50 dark:bg-slate-900/50 rounded-[3rem] border premium-border glass-effect backdrop-blur-xl">
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8">
                {language === 'mm' ? 'အကျဉ်းချုပ်' : 'Summary'}
              </h3>
              <p className="text-xl text-slate-600 dark:text-slate-300 mm-text leading-loose font-light">
                {selectedBook.summary[language]}
              </p>
            </div>
            
            <div className="space-y-6">
                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] ml-4">Key Insights:</h3>
                <div className="grid grid-cols-1 gap-5">
                  {selectedBook.topics.map((topic, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="flex gap-6 p-8 bg-white dark:bg-slate-800 border premium-border shadow-sm group hover:border-premium-gold transition-all glass-effect"
                    >
                      <span className="serif w-12 h-12 rounded-full bg-premium-gold/10 flex items-center justify-center text-premium-gold font-bold text-xl shrink-0 border border-premium-gold/20">
                        {i + 1}
                      </span>
                      <span className="text-xl dark:text-white text-slate-800 mm-text flex-1 pt-2 font-light">{topic[language]}</span>
                    </motion.div>
                  ))}
                </div>
            </div>
            
            <div className="pt-12 border-t premium-border space-y-8">
               <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.5em] text-center">
                 {language === 'mm' ? 'စာအုပ်မှာယူရန် နည်းလမ်းများ' : 'How to Order'}
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://www.facebook.com/share/1E68oeS1KK/', '_blank')}
                  className="group flex items-center justify-center gap-4 py-6 rounded-3xl bg-gradient-to-r from-premium-gold to-amber-600 text-white font-bold text-base shadow-2xl shadow-premium-gold/30 transition-all"
                 >
                   <ExternalLink size={24} />
                   {language === 'mm' ? 'Facebook မှ မှာယူရန်' : 'Order via Facebook'}
                 </motion.button>
                 <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('viber://chat?number=%2B959778066556', '_blank')}
                  className="group flex items-center justify-center gap-4 py-6 rounded-3xl bg-white dark:bg-white/5 border-2 border-premium-gold text-premium-gold font-bold text-base hover:bg-premium-gold hover:text-white transition-all glass-effect"
                 >
                   <MessageSquare size={24} />
                   {language === 'mm' ? 'Viber ဖြင့် မှာယူရန်' : 'Order via Viber'}
                 </motion.button>
               </div>
            </div>
          </div>
        )}
      </Modal>

      <Modal isOpen={!!selectedArticle} onClose={() => setSelectedArticle(null)}>
        {selectedArticle && (
          <article className="space-y-10">
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-extrabold mm-text leading-tight tracking-tight break-words text-balance text-slate-900 dark:text-slate-100">{selectedArticle.title[language]}</h2>
            <div className="space-y-8 text-xl text-slate-600 dark:text-slate-300 mm-text leading-loose font-light">
              {selectedArticle.content.map((p, i) => (
                <p key={i}>{p[language]}</p>
              ))}
            </div>
            <div className="p-10 bg-premium-gold/5 rounded-[3rem] border border-premium-gold/20 text-center italic serif text-premium-gold text-2xl mm-text glass-effect">
              {language === 'mm' ? 'သဘောတရားကို နားလည်ခြင်းဖြင့်သာ စိတ်သည် လွတ်မြောက်နိုင်ပါသည်။' : 'Only through understanding the principle can the mind be free.'}
            </div>
          </article>
        )}
      </Modal>

      <BottomNav activeTab={activeTab} onTabChange={switchTab} language={language} />
    </div>
  );
};

export default App;
