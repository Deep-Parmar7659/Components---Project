import { useModal } from "./Modal";
import { useTheme } from "../../../context/ThemeContext";
import { createPortal } from "react-dom";

function ModalContent({ children }) {
  const { open, setOpen } = useModal();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (!open) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Modal Box — changes with theme */}
      <div
        style={{
          position: "relative",
          background: isDark ? "#1e293b" : "#ffffff",
          border: isDark
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid #e5e7eb",
          borderRadius: "16px",
          padding: "24px",
          width: "100%",
          maxWidth: "400px",
          zIndex: 1,
          boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "28px",
            height: "28px",
            borderRadius: "6px",
            background: isDark ? "rgba(255,255,255,0.1)" : "#f3f4f6",
            color: isDark ? "#ffffff" : "#6b7280",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default ModalContent;
