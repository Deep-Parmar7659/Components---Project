import { useTheme } from "../../../context/ThemeContext";
function TableRow({ row }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <tr
      style={{
        borderTop: isDark
          ? "1px solid rgba(255,255,255,0.05)"
          : "1px solid #f3f4f6",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = isDark
          ? "rgba(255,255,255,0.05)"
          : "#f9fafb";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      {Object.values(row).map((cell, index) => (
        <td
          key={index}
          className="px-4 py-3 text-sm"
          style={{ color: isDark ? "#d1d5db" : "#111827" }}
        >
          {cell}
        </td>
      ))}
    </tr>
  );
}

export default TableRow;
