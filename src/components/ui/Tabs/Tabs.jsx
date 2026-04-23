// // Tabs - Store state also that Main Coponent of Tab.

// That's for create Simple Tab Component.
// import { useState } from "react";
// // Create Tabs Component
// export default function Tabs() {
//   // Create Active Tab State
//   const [activeTab, setActiveTab] = useState("account"); //account is a default active tab.
//   return (
//     <>
//       <div className="max-w-md mx-auto">
//         <div className="flex border-b gap-3">
//           <button onClick={() => setActiveTab("account")}>Account</button>
//           <button onClick={() => setActiveTab("password")}>Password</button>
//           <button onClick={() => setActiveTab("settings")}>Settings</button>
//         </div>

//         {/* Add Content Section */}
//         <div className="p-4">
//           {activeTab === "account" && (
//             <div>
//               <h2>Account</h2>
//               <p>Manage your account settings.</p>
//             </div>
//           )}
//           {activeTab === "password" && (
//             <div>
//               <h2>Password</h2>
//               <p>Update your password here.</p>
//             </div>
//           )}
//           {activeTab === "settings" && (
//             <div>
//               <h2>Settings</h2>
//               <p>Customize your application settings.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// That's for create Professio Tab Component.
import { createContext, useContext, useState } from "react";

const TabsContext = createContext();

export function useTabs() {
  return useContext(TabsContext);
}

function Tabs({ children, defaultValue }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="w-full max-w-md mx-auto">{children}</div>
    </TabsContext.Provider>
  );
}

export default Tabs;
