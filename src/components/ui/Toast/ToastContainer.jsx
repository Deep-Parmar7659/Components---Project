// Manages multiple toasts
import { useState, useEffect } from "react";
import Toast from "./Toast";

function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  // Add toast (safe state update)
  const addToast = (message, type) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto remove after 2 sec
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 2000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Hide completely if no toast
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-5 right-5 z-9999 space-y-3 pointer-events-none">
      <div className="pointer-events-auto space-y-3">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ToastContainer;
