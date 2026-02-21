import React from 'react';
import Section from './Section';
import { SectionId } from '../types';
import { Heart, Cpu, Shirt, ArrowRight, Activity, Brain, ShoppingCart, Instagram, Gem } from 'lucide-react';

const PillarCard = ({ 
  title, 
  subtitle, 
  description, 
  features, 
  colorClass, 
  icon: Icon,
  link,
  linkText,
  footerText,
  align
}: any) => {
  const isRight = align === 'right';
  
  return (
    <div className={`flex flex-col md:flex-row gap-12 items-center mb-32 ${isRight ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Visual Side */}
      <div className="w-full md:w-1/2 relative group">
        <div className={`absolute inset-0 blur-3xl opacity-20 transition-opacity duration-700 group-hover:opacity-40 rounded-full ${colorClass}`}></div>
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
           <Icon size={64} className={`mb-6 ${colorClass.replace('bg-', 'text-')}`} />
           <h3 className="text-3xl font-bold mb-2">{title}</h3>
           <p className={`text-lg font-medium mb-6 ${colorClass.replace('bg-', 'text-')}`}>{subtitle}</p>
           
           <div className="grid grid-cols-2 gap-4 mt-8">
             {features.map((f: string, i: number) => (
               <div key={i} className="p-3 bg-white/5 rounded-lg border border-white/5 text-sm text-slate-300">
                 {f}
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100">{title}</h2>
        <div className="h-1 w-20 bg-slate-700"></div>
        <p className="text-slate-300 text-lg leading-relaxed">{description}</p>
        
        {footerText && (
          <p className="text-sm text-slate-500 italic border-l-2 border-slate-700 pl-4">
            {footerText}
          </p>
        )}

        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-sky-400 transition-colors uppercase tracking-widest text-sm font-bold mt-4"
        >
          {linkText} <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

const Pillars: React.FC = () => {
  return (
    <>
      <Section id={SectionId.AMAN_FOUNDATION}>
        <PillarCard
          align="left"
          title="Aman Foundation"
          subtitle="Since 2001"
          icon={Heart}
          colorClass="bg-teal-500"
          description="A legacy of de-addiction and rehabilitation established in 2001. Aman Foundation has spent over two decades offering compassionate care, structured counseling, and long-term support for individuals fighting substance abuse. It is the ethical core of DEORA & CO., focusing on mind, body, and family recovery."
          features={["Inpatient Care", "Holistic Healing", "Family Counseling", "Aftercare Support"]}
          link="https://aman-digital-care-841342625457.us-west1.run.app/#/about"
          linkText="Our Legacy"
          footerText="Role of DEORA & CO.: Preserving this legacy and modernizing it with data-driven care."
        />
      </Section>

      <Section id={SectionId.AMAN_AI}>
        <PillarCard
          align="right"
          title="Aman AI"
          subtitle="Digital Rehab Companion"
          icon={Brain}
          colorClass="bg-violet-600"
          description="Built on real-world rehabilitation experience, Aman AI is a 24/7 digital companion for addiction recovery. It acts as a non-judgmental friend, offering daily check-ins, craving management, and emotional support. Developed by Devanshu to scale the foundation's impact globally using modern LLMs."
          features={["Mood Tracking", "Relapse Prevention", "Crisis Alerts", "Caregiver Mode"]}
          link="https://aman-digital-care-841342625457.us-west1.run.app/"
          linkText="Try The Beta"
          footerText="Taking a family's 20+ year experience and scaling it digitally for the next generation."
        />
      </Section>

      <Section id={SectionId.WATS_NXT}>
        <PillarCard
          align="left"
          title="WAT'S NXT"
          subtitle="Future Street Culture"
          icon={Shirt}
          colorClass="bg-emerald-400"
          description="Born from the streets of Delhi and Mumbai, WAT'S NXT is a bold custom streetwear label. Focusing on oversized fits, limited drops, and artist culture, it represents the hustle and self-expression of the new generation. Driven by content-first marketing and exclusive capsule collections."
          features={["Limited Drops", "Oversized Fits", "Custom Designs", "Music Culture"]}
          link="https://www.instagram.com/watsnxt.in"
          linkText="View on Instagram"
          footerText="Devanshu manages this end-to-end: from design and Shopify ops to Meta ads and fulfillment."
        />
      </Section>

      <Section id={SectionId.FALSE_JEWELLERY}>
        <PillarCard
          align="right"
          title="False"
          subtitle="Imitation Jewellery"
          icon={Gem}
          colorClass="bg-pink-500"
          description="Started in 2023 alongside friends Naman Goyal and Sarthak Dhingra, False is a modern imitation jewellery brand. As Managing Director, Devanshu oversees the strategic direction, bringing accessible luxury and contemporary designs to the market."
          features={["Accessible Luxury", "Contemporary Design", "E-Commerce", "Brand Strategy"]}
          link="https://shopfalse.in"
          linkText="Visit shopfalse.in"
          footerText="Co-founded with Naman Goyal and Sarthak Dhingra to redefine imitation jewellery."
        />
      </Section>
    </>
  );
};

export default Pillars;