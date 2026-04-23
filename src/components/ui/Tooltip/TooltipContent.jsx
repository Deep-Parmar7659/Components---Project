import { useTooltip } from "./Tooltip";

function TooltipContent({ children }) {
  const { open } = useTooltip();
  if (!open) return null;

  return (
    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 text-sm text-white bg-gray-800 rounded shadow whitespace-nowrap z-50">
      {children}
    </div>
  );
}

export default TooltipContent;
