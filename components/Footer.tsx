
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Need this level of infra yesterday?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
            I partner with AI teams as an embedded infra lead or short-term strike force. Early-stage, high urgency, ugly problems welcome.
          </p>
          <a
            href="mailto:contact@restack.tech"
            className="mt-8 inline-block transform rounded-md bg-transparent border-2 border-green-500 px-8 py-3 text-lg font-bold text-green-500 transition-transform duration-200 hover:scale-105 hover:bg-green-500 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          >
            contact@restack.tech
          </a>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 restack.tech — GPU / LLM Infra Architecture
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
