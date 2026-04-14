import { useSheet } from "./Sheet";
import { useEffect } from "react";
import { createPortal } from "react-dom";

function SheetContent({ children }) {
  const { open, setOpen } = useSheet();

  // ESC button through Go Back!
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setOpen]);

  // Null print when closed.
  if (!open) return null;

  // createPortal renders directly into document.body
  // This means it escapes all parent containers completely
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
        justifyContent: "flex-end",
      }}
    >
      {/* Dark overlay — full screen */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Drawer Panel */}
      <div
        style={{
          position: "relative",
          width: "280px",
          height: "100%",
          background: "#0f172a",
          borderLeft: "1px solid rgba(255,255,255,0.1)",
          padding: "24px",
          zIndex: 1,
          overflowY: "auto",
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            background: "rgba(255,255,255,0.1)",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✕
        </button>

        {/* Title */}
        <h2
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
            marginBottom: "24px",
            marginTop: "8px",
          }}
        >
          Navigation
        </h2>

        {/* Children */}
        <div style={{ color: "#d1d5db" }}>{children}</div>
      </div>
    </div>,
    document.body, // renders directly into body — escapes everything!
  );
}

export default SheetContent;
