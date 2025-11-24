
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Need this level of infra yesterday?
          </h2>
          <p className="mx-auto max-w-xl text-lg text-slate-400 mb-10">
            Restack partner with AI teams as an embedded infra lead or short-term strike force. Early-stage, high urgency, ugly problems welcome.
          </p>
          <a
            href="mailto:contact@restack.tech"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-slate-900 transition-all hover:bg-emerald-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            contact@restack.tech
          </a>
        </div>
        <div className="mt-20 border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-slate-500">
            &copy; 2025 restack.tech — GPU / LLM Infra Architecture
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
