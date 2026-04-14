import { createContext, useContext, useState } from "react";
import { useTheme } from "../../../context/ThemeContext";

const CommandContext = createContext();

export function useCommand() {
  return useContext(CommandContext);
}

function Command({ children }) {
  const [search, setSearch] = useState("");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <CommandContext.Provider value={{ search, setSearch }}>
      <div
        className="w-full rounded-xl overflow-hidden"
        style={{
          background: isDark ? "#111827" : "#ffffff",
          border: isDark
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid #e5e7eb",
          boxShadow: isDark ? "none" : "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        {children}
      </div>
    </CommandContext.Provider>
  );
}

export default Command;
