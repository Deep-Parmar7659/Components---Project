import Tabs from "./Tabs";
import TabsList from "./TabsList";
import TabsTrigger from "./TabsTrigger";
import TabsContent from "./TabsContent";

function TabsDemo() {
  return (
    <div className="max-w-md mx-auto mt-10">
      {/* Create Tabs Component, set default value as account */}
      <Tabs defaultValue="account">
        {/* Add Tab Lists */}
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        {/* Add Content Section */}
        <TabsContent value="account">
          <h2 className="font-semibold mb-2">Account</h2>
          <p className="text-sm text-gray-600">Manage your account settings.</p>
        </TabsContent>
        <TabsContent value="password">
          <h2 className="font-semibold mb-2">Password</h2>
          <p className="text-sm text-gray-600">Update your password here.</p>
        </TabsContent>
        <TabsContent value="settings">
          <h2 className="font-semibold mb-2">Settings</h2>
          <p className="text-sm text-gray-600">
            Customize your application settings.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default TabsDemo;
