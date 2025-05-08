import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="ml-16 md:ml-64">
        <Header />
        <main>
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;