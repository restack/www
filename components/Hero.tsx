
import React from 'react';

interface HeroProps {
  onCapabilitiesClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCapabilitiesClick }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-800/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 text-center sm:py-32 md:py-40">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          I build high-performance GPU & LLM infrastructure
        </h1>
        <p className="mt-6 text-lg tracking-tight text-gray-400 sm:text-xl">
          for teams that actually ship.
        </p>
        <div className="mt-10">
          <p className="font-mono text-sm text-green-400 sm:text-base">
            Kubernetes on DGX. Multus + SR-IOV + RDMA. Cilium routing. Hybrid on-prem ↔ cloud. If your researchers are blocked by infra, I unblock them.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:contact@restack.tech"
            className="transform rounded-md bg-green-500 px-6 py-3 text-base font-semibold text-gray-900 shadow-sm transition-transform duration-200 hover:scale-105 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          >
            Book an intro call
          </a>
          <button
            onClick={onCapabilitiesClick}
            className="transform rounded-md border border-gray-700 bg-gray-900/50 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-transform duration-200 hover:scale-105 hover:border-gray-500"
          >
            See capabilities &rarr;
          </button>
        </div>
        <p className="mt-10 text-sm text-gray-500">
          On-prem GPU clusters (DGX B200/H200), low-latency inference at scale, and reproducible training pipelines.
        </p>
      </div>
    </section>
  );
};

export default Hero;
