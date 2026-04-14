// Tabs Content - Content of each tab
import { useTabs } from "./Tabs";

function TabsContent({ value, children }) {
  const { activeTab } = useTabs();
  if (activeTab !== value) return null;

  return <div className="p-4 border rounded">{children}</div>;
}

export default TabsContent;
