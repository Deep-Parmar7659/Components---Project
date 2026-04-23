const DashboardTemplate = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* TOP BAR */}
      <header className="px-4 py-3 bg-white dark:bg-gray-800 shadow flex justify-between items-center">
        <h1 className="text-base font-bold">Dashboard</h1>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Welcome back 👋
        </span>
      </header>

      <div className="p-4 space-y-4">
        {/* NAV LINKS — horizontal scroll row on SM */}
        <nav className="flex gap-2 overflow-x-auto pb-1">
          {["Overview", "Analytics", "Reports", "Settings"].map((item, i) => (
            <span
              key={i}
              className="shrink-0 px-3 py-1.5 text-xs rounded-lg bg-white dark:bg-gray-800 shadow cursor-pointer hover:text-pink-500 transition"
            >
              {item}
            </span>
          ))}
        </nav>

        {/* STATS — always 2 cols */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Users", value: "1,234" },
            { label: "Revenue", value: "$8,540" },
            { label: "Orders", value: "342" },
            { label: "Growth", value: "+12%" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow text-center"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
              <p className="text-lg font-bold mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* TABLE */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <h3 className="text-sm font-semibold mb-3">Recent Activity</h3>
          <div className="overflow-x-auto -mx-1">
            <table
              className="w-full text-left text-xs"
              style={{ minWidth: "280px" }}
            >
              <thead>
                <tr className="border-b dark:border-gray-700 text-gray-400">
                  <th className="py-2 pr-4">Name</th>
                  <th className="pr-4">Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {["Alice", "Bob", "Carol"].map((name, i) => (
                  <tr key={i} className="border-b dark:border-gray-700">
                    <td className="py-2 pr-4">{name}</td>
                    <td className="pr-4 text-green-500">Active</td>
                    <td>$120</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplate;
