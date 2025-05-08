import React from 'react';
import { 
  LayoutDashboard, 
  Server, 
  GitBranch, 
  Package, 
  Settings, 
  Shield, 
  Database, 
  LineChart 
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Server, label: 'Clusters' },
  { icon: GitBranch, label: 'Pipelines' },
  { icon: Package, label: 'Deployments' },
  { icon: LineChart, label: 'Metrics' },
  { icon: Database, label: 'Storage' },
  { icon: Shield, label: 'Security' },
  { icon: Settings, label: 'Settings' }
];

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-[#1E293B] text-white w-16 md:w-64 flex flex-col h-screen fixed">
      <div className="p-4 border-b border-gray-700 flex items-center justify-center md:justify-start space-x-3">
        <div className="flex-shrink-0">
          <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4L3 10L16 16L29 10L16 4Z" fill="#326CE5"/>
            <path d="M3 16L16 22L29 16" stroke="#326CE5" strokeWidth="2"/>
            <path d="M3 22L16 28L29 22" stroke="#326CE5" strokeWidth="2"/>
          </svg>
        </div>
        <h1 className="font-bold text-xl hidden md:block">Kubernetes</h1>
      </div>
      
      <nav className="flex-1 pt-5">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className={`flex items-center py-3 px-4 hover:bg-gray-700 transition-colors ${
                  item.active ? 'bg-[#326CE5]/10 border-r-4 border-[#326CE5]' : ''
                }`}
              >
                <item.icon className={`h-5 w-5 ${item.active ? 'text-[#326CE5]' : 'text-gray-400'}`} />
                <span className={`ml-3 hidden md:block ${item.active ? 'font-medium text-white' : 'text-gray-300'}`}>
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-700 hidden md:block">
        <div className="text-xs text-gray-400">
          <p>Kubernetes v1.28.3</p>
          <p>Last updated: Today, 10:45 AM</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;