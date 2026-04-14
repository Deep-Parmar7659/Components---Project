// Manages multiple toasts
import { useState } from "react";
import Toast from "./Toast";
function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type) => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <div className="fixed top-5 right-5 space-y-3">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}
      <div className="flex gap-3 mt-4">
        <button
          onClick={() => addToast("Success Message", "success")}
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          Success
        </button>
        <button
          onClick={() => addToast("Error Message", "error")}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Error
        </button>
      </div>
    </div>
  );
}

export default ToastContainer;
