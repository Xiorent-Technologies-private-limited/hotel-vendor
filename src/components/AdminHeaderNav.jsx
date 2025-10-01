import React, { useState } from "react";

const AdminHeaderNav = () => {
  const [active, setActive] = useState("Catalog & Content");

  const menus = [
    "All Vendors",
    "Catalog & Content",
    "Finance Reports",
    "Commissions",
    "Payout Cycle",
  ];

  return (
    <div className="flex space-x-6 border-b border-gray-200 bg-white px-6 py-3">
      {menus.map((menu) => (
        <button
          key={menu}
          onClick={() => setActive(menu)}
          className={`text-sm transition-colors duration-200 ${
            active === menu
              ? "font-semibold text-red-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {menu}
        </button>
      ))}
    </div>
  );
};

export default AdminHeaderNav;
