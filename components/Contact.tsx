import React from 'react';
import Section from './Section';
import { SectionId } from '../types';
import { Mail, Instagram, ArrowUpRight, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id={SectionId.CONTACT} className="!min-h-[70vh]">
      <div className="text-center space-y-8 relative z-10">
        <div className="inline-block px-4 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-sm mb-4">
          Open for Collaboration
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
          Let's Build <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-emerald-400">
            What's Next
          </span>
        </h2>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Whether it’s AI rehab tools, e‑commerce growth, or brand storytelling, I’m always open to meaningful collaborations.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8 flex-wrap">
          <a 
            href="mailto:devanshudeora0226@gmail.com" 
            className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 transition-colors flex items-center gap-2"
          >
            <Mail size={20} />
            Email Devanshu
          </a>

          <a 
            href="tel:+918800685335" 
            className="px-8 py-4 bg-slate-800 border border-slate-700 text-white font-bold rounded-full hover:bg-slate-700 transition-colors flex items-center gap-2"
          >
            <Phone size={20} />
            +91 88006 85335
          </a>
          
          <a 
            href="https://www.instagram.com/watsnxt.in" 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <Instagram size={20} />
            WAT'S NXT
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 text-center text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} DEORA & CO. All Rights Reserved.</p>
      </div>
    </Section>
  );
};

export default Contact;