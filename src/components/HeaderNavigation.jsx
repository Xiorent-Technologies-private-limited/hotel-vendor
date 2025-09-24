const HeaderNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="w-full bg-white px-4 sm:px-6 py-3 sm:py-4 shadow">
      <nav className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm sm:text-base font-medium transition-colors duration-200 ${
              activeTab === tab
                ? "text-red-600 border-b-2 border-red-600 pb-1 sm:pb-2"
                : "text-gray-700 hover:text-red-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default HeaderNavigation;
