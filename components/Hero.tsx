import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    document.getElementById(SectionId.ABOUT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HERO} className="relative h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      
      {/* Central Content */}
      <div className="z-10 text-center max-w-4xl mx-auto space-y-8">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500"
        >
          DEORA & CO.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-2xl text-sky-200/80 font-light tracking-wide"
        >
          Legacy of Healing, Innovation, Street Culture & Accessible Luxury.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-2xl mx-auto text-slate-400 leading-relaxed"
        >
          <p>
            The legacy house of <strong>Devanshu Deora</strong> — uniting a 20+ year family heritage in addiction recovery, a new generation AI rehab platform, a bold streetwear label, and a modern imitation jewellery brand for what’s next. From healthcare to code to commerce, this is one story of building the future.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8"
        >
          <button 
            onClick={scrollToNext}
            className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-full transition-all duration-300 flex items-center gap-2"
          >
            <span>Explore Our Story</span>
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </button>
          
          <button 
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-sky-600 hover:bg-sky-500 rounded-full transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(2,132,199,0.3)] hover:shadow-[0_0_30px_rgba(2,132,199,0.5)]"
          >
            <span>Connect with Devanshu</span>
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Labels simulating the 3D cube sides */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 lg:left-20 max-w-xs text-right"
        >
          <h3 className="text-sky-400 font-bold text-xl uppercase tracking-widest">Aman Foundation</h3>
          <p className="text-xs text-slate-500 mt-1">Heritage & Healing</p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-10 lg:right-20 max-w-xs text-left"
        >
          <h3 className="text-purple-400 font-bold text-xl uppercase tracking-widest">Aman AI</h3>
          <p className="text-xs text-slate-500 mt-1">Digital Rehab Companion</p>
        </motion.div>

         <motion.div 
          animate={{ x: [0, 10, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
        >
          <h3 className="text-emerald-400 font-bold text-xl uppercase tracking-widest">WAT'S NXT</h3>
          <p className="text-xs text-slate-500 mt-1">Custom Streetwear</p>
        </motion.div>

        <motion.div 
          animate={{ x: [0, -10, 0] }} 
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-20 right-1/4 text-center hidden lg:block"
        >
          <h3 className="text-pink-400 font-bold text-xl uppercase tracking-widest">False</h3>
          <p className="text-xs text-slate-500 mt-1">Imitation Jewellery</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;