// Custom Hook for Toast
import { useContext } from "react";
import { ToastContext } from "./ToastProvider";

export const useToast = () => {
  return useContext(ToastContext);
};
