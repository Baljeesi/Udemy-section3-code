import React from 'react';
import { Server, RefreshCw } from 'lucide-react';

interface PodProps {
  name: string;
  status: 'Running' | 'Pending' | 'Failed';
  age: string;
  restarts: number;
}

const pods: PodProps[] = [
  { name: 'react-app-deployment-6b4f8d9c78-abcd1', status: 'Running', age: '15m', restarts: 0 },
  { name: 'react-app-deployment-6b4f8d9c78-abcd2', status: 'Running', age: '15m', restarts: 0 },
  { name: 'react-app-deployment-6b4f8d9c78-abcd3', status: 'Running', age: '15m', restarts: 0 }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Running':
      return 'bg-green-100 text-green-800';
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'Failed':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const PodStatus: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center">
          <Server className="h-5 w-5 text-[#326CE5] mr-2" />
          <h2 className="text-lg font-semibold text-gray-800">Pod Status</h2>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Restarts
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pods.map((pod, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {pod.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(pod.status)}`}>
                    {pod.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pod.age}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pod.restarts}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PodStatus;