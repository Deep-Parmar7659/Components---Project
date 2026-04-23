import React from "react";

const AdminDashboardTemplate = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* TOP NAV */}
      <header className="flex justify-between items-center px-4 py-3 bg-white dark:bg-gray-800 shadow">
        <h1 className="text-sm font-bold">Admin Panel</h1>
        <button className="px-3 py-1 bg-pink-500 text-white text-xs rounded-lg">
          Logout
        </button>
      </header>

      {/* NAV LINKS — horizontal scrollable row (replaces sidebar on SM) */}
      <nav className="flex gap-2 overflow-x-auto px-4 py-2 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
        {["Dashboard", "Users", "Orders", "Settings"].map((item, i) => (
          <span
            key={i}
            className="shrink-0 px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 cursor-pointer hover:text-pink-500 transition"
          >
            {item}
          </span>
        ))}
      </nav>

      <main className="p-4 space-y-4">
        {/* STATS — always 2 cols, fits 375px */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Users", value: "1,234" },
            { label: "Orders", value: "856" },
            { label: "Revenue", value: "$9,200" },
            { label: "Growth", value: "+18%" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow text-center"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
              <p className="text-lg font-bold mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* TABLE */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
          <h2 className="text-sm font-semibold mb-3">Recent Orders</h2>
          <div className="overflow-x-auto -mx-1">
            <table
              className="w-full text-left text-xs"
              style={{ minWidth: "280px" }}
            >
              <thead>
                <tr className="border-b dark:border-gray-700 text-gray-400">
                  <th className="py-2 pr-4">Order ID</th>
                  <th className="pr-4">User</th>
                  <th className="pr-4">Status</th>
                  <th>Amt</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((row) => (
                  <tr key={row} className="border-b dark:border-gray-700">
                    <td className="py-2 pr-4">#{row}001</td>
                    <td className="pr-4">John</td>
                    <td className="pr-4 text-green-500">Done</td>
                    <td>$120</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardTemplate;
