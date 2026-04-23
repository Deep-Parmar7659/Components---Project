import { useState } from "react";
import Toast from "./Toast";

function ToastDemo() {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type) => {
    const id = Date.now();
    // Remove same type if already exists then add new
    setToasts((prev) => {
      const filtered = prev.filter((t) => t.type !== type);
      return [...filtered, { id, message, type }];
    });
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="p-2">
      {/* Toast trigger buttons */}
      <div className="flex gap-2 flex-wrap mb-4">
        <button
          onClick={() => addToast("Saved successfully!", "success")}
          className="px-3 py-1.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg hover:bg-green-500/30 transition text-sm font-medium"
        >
          ✓ Success
        </button>
        <button
          onClick={() => addToast("Something went wrong!", "error")}
          className="px-3 py-1.5 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition text-sm font-medium"
        >
          ✕ Error
        </button>
        <button
          onClick={() => addToast("Be careful!", "warning")}
          className="px-3 py-1.5 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-lg hover:bg-yellow-500/30 transition text-sm font-medium"
        >
          ⚠ Warning
        </button>
        <button
          onClick={() => addToast("Just so you know!", "info")}
          className="px-3 py-1.5 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition text-sm font-medium"
        >
          ℹ Info
        </button>
      </div>

      {/* Toast messages inside card */}
      <div className="space-y-2">
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

export default ToastDemo;
