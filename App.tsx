
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
    <div className="bg-gray-950 text-gray-300 font-sans antialiased">
      <main>
        <Hero onCapabilitiesClick={handleScrollToCapabilities} />
        <Features />
        <Skills ref={capabilitiesRef} />
        <Footer />
      </main>
    </div>
  );
};

export default App;
