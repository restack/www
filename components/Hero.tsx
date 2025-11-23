
import React from 'react';

interface HeroProps {
  onCapabilitiesClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCapabilitiesClick }) => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl mix-blend-screen animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-sm font-medium text-emerald-400 backdrop-blur-sm mb-8">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
          Available for Q4 2025 Projects
        </div>

        <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl mb-8">
          High-Performance <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
            GPU & LLM Infrastructure Engineering for Gen AI
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-400 sm:text-xl font-light leading-relaxed">
          For teams that actually ship. Kubernetes on DGX, Multus + SR-IOV + RDMA, and hybrid clouds.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:contact@restack.tech"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 p-0.5 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <span className="relative rounded-md bg-transparent px-8 py-3.5 transition-all duration-300 ease-in group-hover:bg-opacity-0">
              <span className="relative flex items-center gap-2">
                Book an intro call
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </span>
          </a>

          <button
            onClick={onCapabilitiesClick}
            className="group px-8 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white font-medium backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105"
          >
            See capabilities
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-1 gap-4 sm:grid-cols-3 text-sm text-slate-500 font-mono">
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-1 rounded-full bg-emerald-500"></div>
            On-prem GPU clusters (DGX B200)
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-1 rounded-full bg-emerald-500"></div>
            Low-latency inference at scale
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-1 rounded-full bg-emerald-500"></div>
            Reproducible training pipelines
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
