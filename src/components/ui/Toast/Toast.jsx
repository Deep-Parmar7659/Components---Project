import { useEffect } from "react";

function Toast({ message, type = "success", onClose }) {
  // Auto disappears after 3 seconds.
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    success: { background: "#16a34a", color: "#ffffff" },
    error: { background: "#dc2626", color: "#ffffff" },
    warning: { background: "#d97706", color: "#ffffff" },
    info: { background: "#2563eb", color: "#ffffff" },
  };

  const icons = {
    success: "✔",
    error: "✖",
    warning: "⚠",
    info: "ℹ",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px 16px",
        borderRadius: "10px",
        ...styles[type],
      }}
    >
      {/* Icon */}
      <span style={{ fontSize: "16px", flexShrink: 0 }}>{icons[type]}</span>
      {/* Message — always white */}
      <p
        style={{ flex: 1, fontSize: "14px", fontWeight: 500, color: "#ffffff" }}
      >
        {message}
      </p>
      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          background: "none",
          border: "none",
          color: "#ffffff",
          cursor: "pointer",
          fontSize: "16px",
          flexShrink: 0,
        }}
      >
        ✕
      </button>
    </div>
  );
}

export default Toast;
