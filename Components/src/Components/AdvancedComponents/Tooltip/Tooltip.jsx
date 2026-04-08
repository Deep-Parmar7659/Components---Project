// Basically use of Tooltip is User when TooltripTrigger hover then TooltipContent show message.
import { createContext, useContext, useState } from "react";

const TooltipContext = createContext();

export function useTooltip() {
  return useContext(TooltipContext);
}

function Tooltip({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <TooltipContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block">{children}</div>
    </TooltipContext.Provider>
  );
}

export default Tooltip;
