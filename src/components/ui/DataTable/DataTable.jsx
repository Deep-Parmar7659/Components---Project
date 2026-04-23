import { useTheme } from "../../../context/ThemeContext";

function DataTable({ children }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="overflow-x-auto rounded-xl w-full"
      style={{
        border: isDark
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid #e5e7eb",
      }}
    >
      <table className="w-full text-left">{children}</table>
    </div>
  );
}

export default DataTable;
