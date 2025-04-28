import React from 'react';
import { ChevronUp } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="p-3 bg-indigo-600 hover:bg-indigo-700 rounded-full mb-8 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-indigo-400">Sukumar Chinthalapudi</span>
            </h3>
            <p className="text-gray-400">
              Software Developer
            </p>
          </div>
          
          <SocialLinks />
          
          <div className="mt-8 text-gray-400 text-sm text-center">
            <p>&copy; {currentYear} Sukumar Chinthalapudi. All Rights Reserved.</p>
            <p className="mt-1">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;