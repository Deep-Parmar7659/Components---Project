import { useTheme } from "../../../context/ThemeContext";

function TableHeader({ columns }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <thead
      style={{
        background: isDark ? "rgba(255,255,255,0.05)" : "#f3f4f6",
        borderBottom: isDark
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid #e5e7eb",
      }}
    >
      <tr>
        {columns.map((column, index) => (
          <th
            key={index}
            className="px-4 py-3 text-sm font-semibold uppercase tracking-wider"
            style={{ color: isDark ? "#9ca3af" : "#374151" }}
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
