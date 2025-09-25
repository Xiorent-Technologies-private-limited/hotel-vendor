const HeaderNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap gap-2 border-b border-gray-300">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 whitespace-nowrap rounded-t-lg font-medium ${
            activeTab === tab
              ? "bg-white text-red-600 border-b-2 border-red-600"
              : "text-gray-600 hover:text-red-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default HeaderNavigation;
