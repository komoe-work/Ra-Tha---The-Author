import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-md"
        />
        
        {/* Modal Content / Bottom Sheet */}
        <motion.div 
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.1}
          onDragEnd={(_, info) => {
            if (info.offset.y > 100 || info.velocity.y > 500) {
              onClose();
            }
          }}
          initial={{ y: "100%", opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0.5 }}
          transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
          className="relative w-full md:max-w-3xl bg-premium-bg dark:bg-slate-900 backdrop-blur-2xl rounded-t-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl max-h-[92vh] md:max-h-[90vh] flex flex-col border-t md:border premium-border safe-area-bottom"
        >
          {/* Mobile Handle Bar */}
          <div className="md:hidden flex justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing">
            <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full opacity-50" />
          </div>

          {/* Close Button (Desktop) */}
          <button 
            onClick={onClose} 
            aria-label="Close modal"
            className="absolute top-6 right-6 z-10 p-3 bg-black/5 dark:bg-white/5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 hover:rotate-90 hidden md:flex"
          >
            <X size={24} />
          </button>

          {/* Content Area */}
          <div className="overflow-y-auto p-6 pt-2 md:p-12">
            {children}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default Modal;
