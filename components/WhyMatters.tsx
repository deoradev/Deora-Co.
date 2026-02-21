import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const WhyMatters: React.FC = () => {
  return (
    <div className="relative py-24 bg-slate-900/50 backdrop-blur-sm border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Why DEORA & CO. Exists</h2>
        
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-12">
          "It’s not a random mix of projects. It’s one continuous story: a family that has seen addiction up close, a young founder who grew up inside a rehab ecosystem, and a new generation that uses AI, content and clothing to continue that mission."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Legacy with Purpose", "Technology with Heart", "Culture with Meaning"].map((text, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 border border-white/10 rounded-xl bg-slate-950 hover:bg-slate-900 transition-colors"
                >
                    <span className="text-sky-400 font-bold text-lg uppercase tracking-wider">{text}</span>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WhyMatters;