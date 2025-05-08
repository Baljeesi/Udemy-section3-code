import React from 'react';
import WelcomeBanner from './WelcomeBanner';
import DeploymentStatus from './DeploymentStatus';
import ResourceUsage from './ResourceUsage';
import PodStatus from './PodStatus';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <WelcomeBanner />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PodStatus />
        </div>
        <div>
          <DeploymentStatus />
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Resource Usage</h2>
        <ResourceUsage />
      </div>
    </div>
  );
};

export default Dashboard;