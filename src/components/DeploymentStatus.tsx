import React, { useEffect, useState } from 'react';
import { CheckCircle, Clock, GitCommit } from 'lucide-react';

const steps = [
  { name: 'Build', status: 'complete', timestamp: '10:30 AM' },
  { name: 'Test', status: 'complete', timestamp: '10:35 AM' },
  { name: 'Deploy', status: 'complete', timestamp: '10:40 AM' },
  { name: 'Verify', status: 'complete', timestamp: '10:45 AM' }
];

const DeploymentStatus: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let i = -1;
    const interval = setInterval(() => {
      i = (i + 1) % (steps.length + 1);
      setActiveIndex(i < steps.length ? i : -1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Deployment Status</h2>
        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
          <CheckCircle className="h-3 w-3 mr-1" /> Successfully Deployed
        </span>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-5 h-full w-0.5 bg-gray-200"></div>
        
        {steps.map((step, index) => (
          <div key={index} className={`relative flex items-start mb-6 ${activeIndex === index ? 'animate-pulse' : ''}`}>
            <div className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center bg-[#326CE5] text-white z-10">
              {step.status === 'complete' ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                <Clock className="h-5 w-5" />
              )}
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium">{step.name}</h3>
              <div className="flex items-center mt-1 space-x-2">
                <span className="text-xs text-gray-500">
                  {step.timestamp}
                </span>
                {index === 2 && (
                  <span className="flex items-center text-xs font-medium text-gray-600">
                    <GitCommit className="h-3 w-3 mr-1" />
                    main@8e45a21
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeploymentStatus;