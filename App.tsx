
import React, { useRef } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App: React.FC = () => {
  const capabilitiesRef = useRef<HTMLElement>(null);

  const handleScrollToCapabilities = () => {
    capabilitiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-gray-950 to-black"></div>
      <div className="fixed inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      <main className="relative">
        <Hero onCapabilitiesClick={handleScrollToCapabilities} />
        <Features />
        <Skills ref={capabilitiesRef} />
        <Footer />
      </main>
    </>
  );
};

export default App;
