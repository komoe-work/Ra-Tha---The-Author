
import React, { useState, useEffect } from 'react';
import { Tab, Book, Article, Language } from './types';
import { BOOKS, ARTICLES, QUOTES, GEMINI_GEM_URL, TRANSLATIONS } from './constants';

type Theme = 'light' | 'dark';

// --- Shared Components ---

const Header: React.FC<{ 
  language: Language; 
  onToggleLanguage: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}> = ({ language, onToggleLanguage, theme, onToggleTheme }) => (
  <header className="fixed top-0 w-full z-40 glass-header py-4 px-6 flex justify-between items-center">
    <span className="text-xl font-extrabold tracking-tight dark:text-white text-slate-900 flex items-center gap-2">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-sm text-white">R</div>
      Ra Tha
    </span>
    <div className="flex items-center gap-3">
      <button 
        onClick={onToggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/10 text-slate-700 dark:text-yellow-400 transition-colors"
      >
        {theme === 'dark' ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
        )}
      </button>
      <button 
        onClick={onToggleLanguage}
        aria-label="Toggle language between Myanmar and English"
        className="px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 text-xs font-semibold dark:text-white text-slate-700 transition-all flex items-center gap-2"
      >
        <span className={language === 'mm' ? 'text-primary' : 'text-slate-500 dark:text-gray-400'}>မြန်မာ</span>
        <span className="opacity-30">|</span>
        <span className={language === 'en' ? 'text-primary' : 'text-slate-500 dark:text-gray-400'}>EN</span>
      </button>
    </div>
  </header>
);

const BottomNav: React.FC<{ activeTab: Tab; onTabChange: (t: Tab) => void; language: Language }> = ({ activeTab, onTabChange, language }) => {
  const tabs = [
    { id: Tab.HOME, label: TRANSLATIONS.nav.home[language], icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
    { id: Tab.ABOUT, label: TRANSLATIONS.nav.about[language], icon: <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
    { id: Tab.BOOKS, label: TRANSLATIONS.nav.books[language], icon: <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
    { id: Tab.BLOG, label: TRANSLATIONS.nav.blog[language], icon: <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" /> },
    { id: Tab.CHAT, label: TRANSLATIONS.nav.chat[language], icon: <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full dark:bg-dark-bg/95 bg-white/95 backdrop-blur-xl border-t dark:border-white/5 border-black/5 safe-area-bottom flex justify-around items-center z-40 py-2 transition-colors">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          aria-label={tab.label}
          className={`flex flex-col items-center gap-1 flex-1 py-2 transition-all duration-200 ${
            activeTab === tab.id ? 'text-primary' : 'text-slate-600 dark:text-gray-400'
          }`}
        >
          <svg className={`w-6 h-6 ${activeTab === tab.id ? 'active-nav-icon' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {tab.icon}
          </svg>
          <span className="text-[10px] font-bold tracking-wide">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={onClose}>
      <div 
        className="dark:bg-card-bg-dark bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl h-[85vh] sm:h-auto sm:max-h-[85vh] overflow-y-auto p-6 relative shadow-2xl transition-colors" 
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          aria-label="Close modal"
          className="absolute top-4 right-4 w-10 h-10 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center text-xl text-slate-500 hover:text-slate-900 dark:hover:text-white"
        >×</button>
        <div className="pt-2">{children}</div>
      </div>
    </div>
  );
};

const GeminiGemCard: React.FC<{ language: Language; hideMargin?: boolean }> = ({ language, hideMargin }) => (
  <div 
    className={`app-card p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 dark:border-primary/20 cursor-pointer ${hideMargin ? '' : 'mb-8'}`} 
    onClick={() => window.open(GEMINI_GEM_URL, '_blank')}
  >
    <div className="flex gap-4 items-center">
      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
      </div>
      <div>
        <span className="text-[10px] font-bold text-primary uppercase tracking-widest block">{TRANSLATIONS.gemCard.tag[language]}</span>
        <h3 className="text-lg font-bold dark:text-white text-slate-900 mm-text">{TRANSLATIONS.gemCard.title[language]}</h3>
      </div>
    </div>
    <p className="mt-3 text-sm dark:text-gray-300 text-slate-700 mm-text leading-relaxed">
      {TRANSLATIONS.gemCard.desc[language]}
    </p>
    <button className="mt-4 w-full py-2.5 rounded-xl bg-primary text-white text-sm font-bold flex items-center justify-center gap-2">
      {TRANSLATIONS.gemCard.btn[language]}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
    </button>
  </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);
  const [language, setLanguage] = useState<Language>('mm');
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('app-theme') as Theme;
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex(prev => (prev + 1) % QUOTES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const root = window.document.body;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const switchTab = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  if (isInitialLoading) {
    return (
      <div className="fixed inset-0 z-50 dark:bg-dark-bg bg-light-bg flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Ra Tha - The Author</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24 dark:bg-dark-bg bg-light-bg transition-colors">
      <Header 
        language={language} 
        onToggleLanguage={() => setLanguage(l => l === 'mm' ? 'en' : 'mm')} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      
      <main className="pt-24 px-5 max-w-2xl mx-auto">
        
        {/* HOME TAB */}
        {activeTab === Tab.HOME && (
          <div className="animate-fade-up space-y-6">
            <section className="app-card p-8 bg-gradient-to-br from-primary/10 to-transparent dark:border-primary/10 border-black/5 text-center">
              <h2 className={`text-2xl font-bold dark:text-white text-slate-900 mb-4 mm-text leading-snug`}>
                {TRANSLATIONS.hero.title[language]}
              </h2>
              <p className="dark:text-gray-300 text-slate-700 text-sm mb-6 mm-text leading-relaxed">
                {TRANSLATIONS.hero.subtitle[language]}
              </p>
              <div className="flex justify-center gap-3">
                <button onClick={() => switchTab(Tab.BOOKS)} className="px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20">{TRANSLATIONS.hero.ctaBooks[language]}</button>
                <button onClick={() => switchTab(Tab.CHAT)} className="px-6 py-2.5 bg-black/5 dark:bg-white/10 dark:text-white text-slate-700 rounded-xl text-sm font-bold border border-black/10 dark:border-white/10">{TRANSLATIONS.hero.ctaChat[language]}</button>
              </div>
            </section>

            <section className="app-card p-6 flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-primary/40 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="dark:text-white text-slate-800 text-base font-medium mm-text italic min-h-[5rem] transition-opacity duration-500">
                {QUOTES[quoteIndex][language]}
              </p>
              <div className="mt-6 flex gap-1.5">
                {QUOTES.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all ${quoteIndex === i ? 'w-6 bg-primary' : 'w-1.5 bg-gray-300 dark:bg-gray-700'}`} />
                ))}
              </div>
            </section>

            <div className="grid grid-cols-2 gap-4">
               <div onClick={() => switchTab(Tab.BOOKS)} className="app-card p-5 flex flex-col items-center cursor-pointer">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-sm font-bold dark:text-white text-slate-800">{TRANSLATIONS.nav.books[language]}</span>
               </div>
               <div onClick={() => switchTab(Tab.BLOG)} className="app-card p-5 flex flex-col items-center cursor-pointer">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-3 text-secondary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" /></svg>
                  </div>
                  <span className="text-sm font-bold dark:text-white text-slate-800">{TRANSLATIONS.nav.blog[language]}</span>
               </div>
            </div>
          </div>
        )}

        {/* ABOUT TAB */}
        {activeTab === Tab.ABOUT && (
          <div className="animate-fade-up space-y-6">
            <h3 className="text-xl font-bold dark:text-white text-slate-900 border-l-4 border-primary pl-4">{TRANSLATIONS.about.title[language]}</h3>
            <div className="app-card p-6 space-y-6">
                <p className="text-primary italic font-semibold text-lg mm-text leading-relaxed">
                  {TRANSLATIONS.about.quote[language]}
                </p>
                <div className="space-y-4 dark:text-gray-300 text-slate-700 text-sm mm-text leading-loose">
                  <p>{TRANSLATIONS.about.p1[language]}</p>
                  <p>{TRANSLATIONS.about.p2[language]}</p>
                </div>

                <div className="pt-6 border-t dark:border-white/5 border-black/5">
                   <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">{TRANSLATIONS.about.connect[language]}</h4>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a 
                        href="https://t.me/noblefriendsmm" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 hover:bg-sky-500/20 transition-all group"
                      >
                        <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.48 1-.72 3.94-1.72 6.57-2.85 7.89-3.39 3.76-1.55 4.54-1.82 5.05-1.82.11 0 .36.03.52.16.13.11.17.26.18.37.01.07.02.21.01.27z"/></svg>
                        </div>
                        <div className="flex-1">
                          <span className="block text-xs font-bold dark:text-white text-slate-900">{TRANSLATIONS.about.telegram[language]}</span>
                          <span className="block text-[10px] text-sky-500 font-medium opacity-80 group-hover:opacity-100 transition-opacity">@noblefriendsmm</span>
                        </div>
                      </a>

                      <a 
                        href="https://www.facebook.com/share/17iNC1HVq4/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl bg-blue-600/10 border border-blue-600/20 hover:bg-blue-600/20 transition-all group"
                      >
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </div>
                        <div className="flex-1">
                          <span className="block text-xs font-bold dark:text-white text-slate-900">{TRANSLATIONS.about.facebook[language]}</span>
                          <span className="block text-[10px] text-blue-600 font-medium opacity-80 group-hover:opacity-100 transition-opacity">Official Profile</span>
                        </div>
                      </a>
                   </div>
                </div>
            </div>
          </div>
        )}

        {/* BOOKS TAB - REDESIGNED */}
        {activeTab === Tab.BOOKS && (
          <div className="animate-fade-up space-y-6">
            <GeminiGemCard language={language} />
            <div className="grid grid-cols-1 gap-6">
              {BOOKS.map((book, index) => (
                <div 
                  key={book.id} 
                  className="app-card flex flex-col overflow-hidden cursor-pointer group dark:bg-card-bg-dark bg-white border border-black/5 dark:border-white/5"
                  onClick={() => setSelectedBook(book)}
                >
                  <div className="w-full h-80 bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center p-6 transition-all group-hover:bg-slate-200 dark:group-hover:bg-slate-800">
                    {book.imageUrl ? (
                      <img 
                        src={book.imageUrl} 
                        alt={book.title[language]} 
                        {...(index === 0 ? { fetchpriority: "high" } : { loading: "lazy" })}
                        decoding="async"
                        className="h-full w-auto object-contain shadow-2xl rounded-sm transform group-hover:scale-105 transition-transform duration-500" 
                      />
                    ) : (
                      <span className="text-xs font-bold text-slate-400">{book.title[language]}</span>
                    )}
                  </div>
                  <div className="p-6 border-t border-black/5 dark:border-white/5 bg-white dark:bg-card-bg-dark">
                    <div className="flex justify-between items-start mb-2">
                       <span className="text-[10px] text-primary font-bold uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-md">{book.tag[language]}</span>
                       <button className="text-[11px] font-bold text-primary flex items-center gap-1">
                        {language === 'mm' ? 'အကျဉ်းဖတ်မည်' : 'Read Summary'}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                    <h4 className="font-bold text-lg dark:text-white text-slate-900 mm-text">{book.title[language]}</h4>
                    <p className="text-xs text-slate-600 dark:text-gray-400 mt-1 mm-text">{book.subtitle[language]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BLOG TAB */}
        {activeTab === Tab.BLOG && (
          <div className="animate-fade-up space-y-4">
            {ARTICLES.map(article => (
              <div 
                key={article.id} 
                onClick={() => setSelectedArticle(article)}
                className="app-card p-5 flex justify-between items-center cursor-pointer hover:border-secondary/40"
              >
                <div className="flex-1 pr-4">
                  <h4 className="font-bold text-sm dark:text-white text-slate-900 mm-text">{article.title[language]}</h4>
                  <p className="text-xs text-slate-600 dark:text-gray-400 mt-2 line-clamp-1 mm-text">{article.preview[language]}</p>
                </div>
                <div className="text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CHAT TAB */}
        {activeTab === Tab.CHAT && (
          <div className="animate-fade-up flex flex-col items-center py-10 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            </div>
            <h3 className="text-xl font-bold dark:text-white text-slate-900 mb-3 mm-text">{TRANSLATIONS.chat.title[language]}</h3>
            <p className="text-sm dark:text-gray-400 text-slate-700 max-w-xs mb-8 mm-text">
              {TRANSLATIONS.chat.subtitle[language]}
            </p>
            <GeminiGemCard language={language} hideMargin={true} />
            <button 
              onClick={() => switchTab(Tab.HOME)}
              className="mt-8 text-xs font-bold text-slate-600 dark:text-gray-400 uppercase tracking-widest hover:text-primary transition-colors"
            >
              {TRANSLATIONS.chat.back[language]}
            </button>
          </div>
        )}
      </main>

      {/* Book Summary Modal */}
      <Modal isOpen={!!selectedBook} onClose={() => setSelectedBook(null)}>
        {selectedBook && (
          <div className="space-y-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-72 bg-slate-100 dark:bg-slate-900 rounded-xl border dark:border-white/5 border-black/5 flex items-center justify-center overflow-hidden shadow-2xl mb-6 p-4">
                 {selectedBook.imageUrl ? (
                   <img src={selectedBook.imageUrl} alt={selectedBook.title[language]} loading="lazy" decoding="async" className="h-full w-auto object-contain" />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-400 p-2">{selectedBook.title[language]}</div>
                 )}
              </div>
              <div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest px-3 py-1 bg-primary/10 rounded-full">{selectedBook.tag[language]}</span>
                <h2 className="text-2xl font-bold dark:text-white text-slate-900 mt-3 mm-text leading-tight">{selectedBook.title[language]}</h2>
                <p className="text-xs text-slate-600 dark:text-gray-400 mt-2 mm-text">{selectedBook.subtitle[language]}</p>
              </div>
            </div>
            
            <div className="p-5 dark:bg-dark-bg/80 bg-slate-50 rounded-2xl text-sm dark:text-gray-300 text-slate-700 mm-text leading-loose border dark:border-white/5 border-black/5">
              <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">{language === 'mm' ? 'အကျဉ်းချုပ်' : 'Summary'}</h3>
              {selectedBook.summary[language]}
            </div>
            
            <div className="space-y-3">
                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Key Insights:</h3>
                {selectedBook.topics.map((topic, i) => (
                  <div key={i} className="flex gap-4 p-4 dark:bg-white/5 bg-white rounded-xl dark:border-white/5 border-black/5 shadow-sm">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold text-xs shrink-0">0{i + 1}</span>
                    <span className="text-sm dark:text-white text-slate-800 mm-text flex-1 py-1">{topic[language]}</span>
                  </div>
                ))}
            </div>
            
            <div className="space-y-3 pt-4 sticky bottom-0 bg-white dark:bg-card-bg-dark pb-2">
               <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center">{language === 'mm' ? 'စာအုပ်မှာယူရန် နည်းလမ်းများ' : 'How to Order'}</h3>
               <div className="grid grid-cols-1 gap-3">
                 <button 
                  onClick={() => window.open('https://www.facebook.com/share/1E68oeS1KK/', '_blank')}
                  className="w-full py-4 rounded-xl bg-primary text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-all"
                 >
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                   {language === 'mm' ? 'Facebook မှ မှာယူရန်' : 'Order via Facebook'}
                 </button>
                 <button 
                  onClick={() => window.open('viber://chat?number=%2B959778066556', '_blank')}
                  className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 active:scale-95 transition-all border border-indigo-400/20"
                 >
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.95 0h.1c2.14 0 4.2.45 6.07 1.3 1.86.84 3.49 2.05 4.8 3.56 1.31 1.51 2.3 3.25 2.89 5.11.59 1.87.9 3.86.91 5.86v.23c-.01 2.34-.43 4.59-1.24 6.64-.81 2.05-1.94 3.9-3.32 5.42-1.39 1.53-3.02 2.78-4.8 3.65-1.78.88-3.7 1.32-5.65 1.32h-.14c-1.12 0-2.23-.15-3.3-.44-1.07-.3-2.09-.73-3.03-1.26a1.45 1.45 0 0 0-1.57.1l-2.6 1.73c-.56.37-1.3.36-1.85-.02-.55-.38-.85-1.03-.76-1.71l.36-3.13c.04-.37-.09-.73-.34-1-1.35-1.53-2.32-3.31-2.83-5.26-.51-1.95-.65-4-.38-6.04.27-2.04.88-3.98 1.8-5.74.92-1.76 2.15-3.32 3.63-4.57 1.48-1.25 3.19-2.2 5.03-2.8 1.83-.6 3.76-.9 5.67-.9z"/></svg>
                   {language === 'mm' ? 'Viber ဖြင့် မှာယူရန်' : 'Order via Viber'}
                 </button>
               </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Article Detail Modal */}
      <Modal isOpen={!!selectedArticle} onClose={() => setSelectedArticle(null)}>
        {selectedArticle && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold dark:text-white text-slate-900 mm-text leading-tight">{selectedArticle.title[language]}</h2>
            <div className="space-y-4 text-sm dark:text-gray-300 text-slate-700 mm-text leading-loose">
              {selectedArticle.content.map((p, i) => (
                <p key={i}>{p[language]}</p>
              ))}
            </div>
            <div className="p-4 dark:bg-white/5 bg-slate-100 rounded-xl dark:border-white/5 border-black/5 text-center italic text-primary/70 text-xs mm-text">
              {language === 'mm' ? 'သဘောတရားကို နားလည်ခြင်းဖြင့်သာ စိတ်သည် လွတ်မြောက်နိုင်ပါသည်။' : 'Only through understanding the principle can the mind be free.'}
            </div>
          </div>
        )}
      </Modal>

      <BottomNav activeTab={activeTab} onTabChange={switchTab} language={language} />
    </div>
  );
};

export default App;
