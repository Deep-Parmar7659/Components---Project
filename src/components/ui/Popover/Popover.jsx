// A Popover is similar to Tooltip but it opens when clicking instead of hovering.
import { createContext, useContext, useState, useRef, useEffect } from "react";

const PopoverContext = createContext();

export function usePopover() {
  return useContext(PopoverContext);
}

function Popover({ children }) {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <PopoverContext.Provider value={{ open, setOpen }}>
      <div ref={popoverRef} className="relative inline-block">
        {children}
      </div>
    </PopoverContext.Provider>
  );
}

export default Popover;
