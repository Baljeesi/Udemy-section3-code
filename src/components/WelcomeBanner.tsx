import React, { useEffect, useState } from 'react';

const WelcomeBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`bg-gradient-to-r from-[#326CE5] to-[#1D4ED8] rounded-lg shadow-lg p-8 text-white transform transition-all duration-700 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl font-bold mb-2">Welcome to CI/CD World with Sagar Kakkala</h1>
          <p className="text-lg opacity-90">Deployment of React Application in Kubernetes is successful</p>
          
          <div className="mt-6 flex space-x-4">
            <button className="bg-white text-[#326CE5] px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors">
              View Details
            </button>
            <button className="bg-transparent border border-white px-4 py-2 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
              View Logs
            </button>
          </div>
        </div>
        
        <div className="w-32 h-32 flex-shrink-0 animate-pulse">
          <svg viewBox="0 0 32 32" className="w-full h-full">
            <path 
              d="M16 2L2 9.96v12.08L16 30l14-7.96V9.96L16 2zm0 2.32l11.2 6.37v10.62L16 27.68 4.8 21.31V10.69L16 4.32zm0 4.8L8.53 14.4l1.6 6.08h11.74l1.6-6.08L16 9.12zm0 1.9l4.17 3.05-.88 3.33H12.7l-.88-3.33 4.17-3.05zm-8 3.8l-1.74.96v3.65l2.82 1.63-.56-2.12.82-3.15-1.34-.96zm16 0l-1.34.96.82 3.15-.56 2.12 2.82-1.63v-3.65l-1.74-.96z" 
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;