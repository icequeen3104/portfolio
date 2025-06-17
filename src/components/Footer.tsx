import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="flex items-center justify-center space-x-2 text-gray-300">
              <span>© {currentYear} Saujanya Srivastava. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and lots of code.</span>
            </p>
            <p className="text-gray-400 text-sm mt-2">
              AI Engineer • Problem Solver • Tech Enthusiast
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;