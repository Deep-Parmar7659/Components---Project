// Tabs Trigger - Individual tab button
import { useTabs } from "./Tabs";

function TabsTrigger({ value, children }) {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
        isActive
          ? "bg-pink-500 text-(--text-primary) shadow-lg shadow-pink-500/30"
          : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

export default TabsTrigger;
