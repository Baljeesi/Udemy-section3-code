import React from 'react';
import { Cloud } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Cloud className="text-[#326CE5] h-8 w-8" />
        <h1 className="text-xl font-semibold text-gray-800 hidden sm:block">CI/CD Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="bg-green-100 px-3 py-1 rounded-full flex items-center">
          <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
          <span className="text-sm font-medium text-green-700">System Online</span>
        </div>
        <button className="text-gray-600 hover:text-gray-800 transition-colors">
          <span className="sr-only">User menu</span>
          <div className="h-8 w-8 rounded-full bg-[#326CE5] text-white flex items-center justify-center">
            SK
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;