import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      style={{
        background: isDark ? "#030712" : "#ffffff",
        borderTop: isDark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(0,0,0,0.08)",
        padding: "20px 24px",
        textAlign: "center",
      }}
    >
      <p style={{ color: isDark ? "#9ca3af" : "#6b7280", fontSize: "14px" }}>
        © 2025 TailwindTap. All rights reserved. Made with{" "}
        <span style={{ color: "#ec4899" }}>♥</span> using React & Tailwind
      </p>
    </footer>
  );
}

export default Footer;
