import React from 'react';
import Section from './Section';
import { SectionId, Skill } from '../types';
import { User, Code, ShoppingBag, HeartHandshake, Film, Camera, MapPin, Mic, Star } from 'lucide-react';
import { SKILLS_OPS, SKILLS_TECH } from '../constants';

const About: React.FC = () => {
  return (
    <Section id={SectionId.ABOUT}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Bio */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Meet Devanshu Deora</h2>
          <h3 className="text-xl text-sky-400 font-mono">Entrepreneur | Developer | Storyteller</h3>
          
          <div className="glass-panel p-6 rounded-2xl border-l-4 border-sky-500">
            <p className="text-slate-300 leading-relaxed text-lg mb-2">
              A 25-year-old entrepreneur from the Delhi–Mumbai corridor, building at the intersection of healthcare, AI, street culture, and accessible luxury. As Treasurer at Aman Foundation, E-Commerce lead for WAT’S NXT, and Managing Director at False, Devanshu combines empathy with execution. He leverages code, content, and commerce to build brands that actually help people.
            </p>
            
            {/* Vivian Dsena Talent Management Card */}
            <div className="relative group mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative glass-panel p-5 rounded-2xl border border-yellow-500/30 flex items-center gap-5 overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.5)] shrink-0 z-10">
                  <Star className="text-slate-900 drop-shadow-md" size={28} fill="currentColor" />
                </div>
                <div className="z-10">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-yellow-500 font-bold mb-1">Executive Support & Talent Management</p>
                  <p className="text-slate-300 font-light leading-snug text-sm sm:text-base">
                    Personal Assistant to iconic Indian Television Actor <strong className="text-white font-medium text-lg tracking-wide block mt-0.5">Vivian Dsena</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
             <div className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 flex items-center gap-2 text-sm text-slate-400">
               <User size={14} /> Treasurer (2020-2025)
             </div>
             <div className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 flex items-center gap-2 text-sm text-slate-400">
               <Code size={14} /> AI & Web Dev
             </div>
             <div className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 flex items-center gap-2 text-sm text-slate-400">
               <ShoppingBag size={14} /> E-Commerce Expert
             </div>
             <div className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 flex items-center gap-2 text-sm text-slate-400">
               <Star size={14} className="text-yellow-500" /> Talent Management
             </div>
          </div>
        </div>

        {/* Right: Skills Dashboard Style */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-purple-500 opacity-20 blur-3xl rounded-full"></div>
          <div className="glass-panel p-8 rounded-3xl relative z-10 border border-white/5 shadow-2xl">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Code className="text-sky-400" />
              Builder in the Background
            </h4>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h5 className="text-sm uppercase tracking-wider text-slate-500 mb-3">Tech & Tools</h5>
                <ul className="space-y-2">
                  {SKILLS_TECH.map((skill, idx) => (
                    <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="text-sm uppercase tracking-wider text-slate-500 mb-3">Ops & Biz</h5>
                <ul className="space-y-2">
                  {SKILLS_OPS.map((skill, idx) => (
                    <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Hobbies Ticker */}
          <div className="mt-6 overflow-hidden relative">
            <div className="flex gap-4 animate-scroll whitespace-nowrap opacity-70">
                {[
                  {icon: Film, text: "Video Storytelling"},
                  {icon: MapPin, text: "Travel Vlogging"},
                  {icon: Camera, text: "Street Photography"},
                  {icon: Mic, text: "Podcasting"},
                  {icon: HeartHandshake, text: "Heritage Walks"},
                ].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded text-xs text-sky-200">
                    <item.icon size={12} /> {item.text}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;