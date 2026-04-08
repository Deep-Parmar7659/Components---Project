import { useEffect, useState } from "react";
import { subscribeToast } from "./useToast";

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeToast(setToasts);
    return unsubscribe;
  }, []);

  return (
    <div className="fixed top-20 right-5 z-9999 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="px-4 py-2 rounded-lg shadow-lg
          bg-gray-900 text-white
          dark:bg-white dark:text-black
          animate-fadeIn"
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
