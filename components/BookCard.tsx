import React from 'react';
import { motion } from 'motion/react';
import { Book as BookIcon, ChevronRight } from 'lucide-react';
import { Book, Language } from '../types';

interface BookCardProps {
  book: Book;
  language: Language;
  index: number;
  onClick: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, language, index, onClick }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group flex flex-col md:flex-row gap-10 items-center cursor-pointer p-8 rounded-[3rem] bg-white dark:bg-slate-800 border premium-border shadow-md dark:shadow-slate-900/50 glass-effect transition-all hover:shadow-2xl hover:shadow-premium-gold/10"
      onClick={onClick}
    >
      <div className="relative w-full md:w-72 aspect-[3/4] bg-slate-100 dark:bg-white/5 rounded-[2rem] overflow-hidden flex items-center justify-center p-8 transition-all group-hover:bg-slate-200 dark:group-hover:bg-white/10">
        {book.imageUrl ? (
          <img 
            src={book.imageUrl} 
            alt={book.title[language]} 
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-auto object-contain shadow-2xl rounded-sm transform group-hover:scale-110 transition-transform duration-700" 
          />
        ) : (
          <BookIcon size={64} className="text-slate-300 dark:text-slate-600" />
        )}
      </div>
      
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
           <span className="inline-block self-center md:self-start text-[10px] text-premium-gold font-black uppercase tracking-[0.2em] bg-premium-gold/10 px-4 py-1.5 rounded-full">
             {book.tag[language]}
           </span>
        </div>
        
        <h3 className="serif text-4xl font-bold text-slate-900 dark:text-slate-100 mm-text leading-tight group-hover:text-premium-gold transition-colors">
          {book.title[language]}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 mm-text text-lg font-light leading-relaxed">
          {book.subtitle[language]}
        </p>
        
        <div className="pt-4">
          <button className="flex items-center gap-2 mx-auto md:mx-0 text-xs font-black uppercase tracking-widest text-premium-gold group-hover:gap-4 transition-all">
            {language === 'mm' ? 'အကျဉ်းဖတ်မည်' : 'Read Summary'}
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default BookCard;
