import React from 'react';
import { CpuIcon, Database, Activity } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  value: string;
  percentage: number;
  icon: React.ReactNode;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, value, percentage, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className="bg-[#EFF6FF] p-2 rounded-lg">
          {icon}
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-[#326CE5] h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-500 mt-2">{percentage}% used</p>
    </div>
  );
};

const ResourceUsage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ResourceCard 
        title="CPU Usage" 
        value="350m" 
        percentage={35} 
        icon={<CpuIcon className="h-5 w-5 text-[#326CE5]" />} 
      />
      <ResourceCard 
        title="Memory Usage" 
        value="1.2 GiB" 
        percentage={40} 
        icon={<Database className="h-5 w-5 text-[#326CE5]" />} 
      />
      <ResourceCard 
        title="Network" 
        value="250 Kbps" 
        percentage={25} 
        icon={<Activity className="h-5 w-5 text-[#326CE5]" />} 
      />
    </div>
  );
};

export default ResourceUsage;