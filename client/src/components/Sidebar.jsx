import React from 'react';

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <ul className="space-y-2">
        <li className="hover:bg-gray-200 p-2 rounded">Project 1</li>
        <li className="hover:bg-gray-200 p-2 rounded">Project 2</li>
        <li className="hover:bg-gray-200 p-2 rounded">Project 3</li>
      </ul>
    </aside>
  );
}

export default Sidebar;