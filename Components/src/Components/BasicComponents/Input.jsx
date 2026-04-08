import { useTheme } from "../../context/ThemeContext";

function Input({ type = "text", placeholder, value, onChange }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-lg px-3 py-2 pr-10 outline-none transition"
      style={{
        background: isDark ? "rgba(255,255,255,0.05)" : "#ffffff",
        border: isDark
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid #d1d5db",
        color: isDark ? "#ffffff" : "#111827",
      }}
    />
  );
}

export default Input;
