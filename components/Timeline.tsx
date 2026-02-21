import React from 'react';
import Section from './Section';
import { SectionId } from '../types';
import { TIMELINE_DATA } from '../constants';
import { motion } from 'framer-motion';

const Timeline: React.FC = () => {
  return (
    <Section id={SectionId.TIMELINE}>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">The Evolution</h2>
        <p className="text-slate-400">From brick-and-mortar rehabilitation to a digital ecosystem.</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Central Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-sky-500 to-transparent opacity-50"></div>

        <div className="space-y-12">
          {TIMELINE_DATA.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center justify-between ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content Box */}
                <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <h3 className="text-3xl font-bold text-white mb-2 font-mono">{item.year}</h3>
                  <h4 className="text-xl text-sky-400 font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-950 border-2 border-sky-500 rounded-full z-10 shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div>

                {/* Empty Space for balance */}
                <div className="w-5/12"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Timeline;