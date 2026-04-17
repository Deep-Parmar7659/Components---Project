import React from "react";

const AdminDashboardTemplate = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Admin</h2>
        <nav className="space-y-4">
          {["Dashboard", "Users", "Orders", "Settings"].map((item, i) => (
            <p key={i} className="cursor-pointer hover:text-pink-500">
              {item}
            </p>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1">
        {/* TOP NAV */}
        <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <button className="px-4 py-2 bg-pink-500 text-white rounded-lg">
            Logout
          </button>
        </header>

        {/* CONTENT */}
        <main className="p-6">
          {/* STATS */}
          <div className="grid md:grid-cols-4 gap-6">
            {["Users", "Orders", "Revenue", "Growth"].map((stat, i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
              >
                <h3 className="text-lg">{stat}</h3>
                <p className="text-2xl font-bold mt-2">1,234</p>
              </div>
            ))}
          </div>

          {/* TABLE */}
          <div className="mt-10 bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>

            <table className="w-full text-left">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="py-2">Order ID</th>
                  <th>User</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3].map((row) => (
                  <tr key={row} className="border-b dark:border-gray-700">
                    <td className="py-2">#{row}001</td>
                    <td>John Doe</td>
                    <td className="text-green-500">Completed</td>
                    <td>$120</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardTemplate;
