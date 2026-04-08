import { useState } from "react";

let listeners = [];

export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    const id = Date.now();

    const newToast = { id, message };

    listeners.forEach((listener) => {
      listener((prev) => [...prev, newToast]);
    });

    setTimeout(() => {
      listeners.forEach((listener) => {
        listener((prev) => prev.filter((t) => t.id !== id));
      });
    }, 3000);
  };

  return { addToast, toasts, setToasts };
};

export const subscribeToast = (setState) => {
  listeners.push(setState);

  return () => {
    listeners = listeners.filter((l) => l !== setState);
  };
};
