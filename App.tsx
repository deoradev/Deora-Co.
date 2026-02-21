import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import ThreeBackground from './components/ThreeBackground';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Timeline from './components/Timeline';
import WhyMatters from './components/WhyMatters';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="relative w-full text-slate-100 bg-slate-950 min-h-screen selection:bg-sky-500 selection:text-white">
      {/* 3D Background Layer */}
      <Suspense fallback={<div className="fixed inset-0 bg-slate-950 z-0" />}>
        <ThreeBackground />
      </Suspense>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="flex flex-col">
          <Hero />
          <About />
          
          {/* Group Pillars closely */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-800 to-transparent md:left-1/2 -z-10 hidden md:block opacity-30"></div>
            <Pillars />
          </div>

          <Timeline />
          <WhyMatters />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;