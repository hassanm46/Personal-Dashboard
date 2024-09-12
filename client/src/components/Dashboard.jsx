import React from 'react';

function Dashboard() {
  return (
    <div className="flex-1 p-8">
      <h2 className="text-2xl font-bold mb-6">Welcome to Your Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardItem title="Recent Projects">
          <ul className="list-disc pl-5">
            <li>E-commerce Website</li>
            <li>Portfolio Redesign</li>
            <li>Blog Template</li>
          </ul>
        </DashboardItem>
        <DashboardItem title="Color Palettes">
          <div className="flex justify-around mt-4">
            <div className="w-10 h-10 rounded-full bg-red-500"></div>
            <div className="w-10 h-10 rounded-full bg-green-500"></div>
            <div className="w-10 h-10 rounded-full bg-blue-500"></div>
          </div>
        </DashboardItem>
        <DashboardItem title="Recent Inspirations">
          <ul className="list-disc pl-5">
            <li>Minimalist Landing Page</li>
            <li>Creative Portfolio Layout</li>
            <li>Unique Navigation Design</li>
          </ul>
        </DashboardItem>
        <DashboardItem title="Quick Links">
          <ul className="space-y-2">
            <li className="text-blue-600 hover:underline cursor-pointer">Add New Project</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Browse Inspirations</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Manage Resources</li>
          </ul>
        </DashboardItem>
      </div>
    </div>
  );
}

function DashboardItem({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}

export default Dashboard;