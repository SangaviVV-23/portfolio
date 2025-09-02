import React from 'react';
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Code2 className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold">Portfolio</span>
          </div>
          
          <p className="text-gray-400 mb-6">
            Building the future, one line of code at a time.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800 text-gray-500">
            <p>&copy; {new Date().getFullYear()} Associate Software Engineer Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;