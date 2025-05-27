import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#home" 
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500"
            >
              Portfolio
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-6">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="flex items-center text-gray-600 dark:text-gray-300">
              Made with 
              <Heart size={16} className="mx-1 text-red-500 animate-pulse" /> 
              © {currentYear}
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>Thanks for visiting my portfolio! Hope you enjoyed the ride.</p>
          <p className="mt-2">
            <span className="inline-block transform hover:rotate-12 transition-transform duration-300 cursor-pointer">✌️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;