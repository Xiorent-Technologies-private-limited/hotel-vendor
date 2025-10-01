import React, { useState } from "react";
import { Trash2 } from "lucide-react"; // icon

const AdminCatalogPage = () => {
  const [activeSubTab, setActiveSubTab] = useState("Hotel approval");

  const subTabs = [
    "Hotel approval",
    "Room Moderation",
    "Amenities Master",
    "Tax Rules",
    "Other Policies",
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        {/* Header Row */}
        <div className="flex items-center justify-between mb-6">
          {/* Left: Icon + Title */}
          <div className="flex items-center space-x-2 text-gray-700 font-medium">
            <Trash2 className="text-red-500 w-5 h-5" />
            <span>Catalog & Content</span>
          </div>

          {/* Right: Dropdown + Button */}
          <div className="flex items-center space-x-4">
            <select className="border rounded-md px-3 py-1 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500">
              <option>Recent Bookings</option>
              <option>Old Bookings</option>
            </select>
            <button className="text-sm text-purple-700 font-medium hover:underline">
              View All Bookings
            </button>
          </div>
        </div>

        {/* Sub Tabs */}
        <div className="flex border rounded-md overflow-hidden text-sm">
          {subTabs.map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveSubTab(sub)}
              className={`flex-1 px-4 py-2 text-center border-r last:border-r-0 ${
                activeSubTab === sub
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="mt-2 border rounded-md py-8 flex justify-center text-gray-500 text-sm">
          No Items Found.
        </div>
      </div>
    </div>
  );
};

export default AdminCatalogPage;
