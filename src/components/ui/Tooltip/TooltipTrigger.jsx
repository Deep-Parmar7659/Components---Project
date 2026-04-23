import { useTooltip } from "./Tooltip";

function TooltipTrigger({ children }) {
  const { setOpen } = useTooltip();

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="inline-block"
    >
      {children}
    </div>
  );
}

export default TooltipTrigger;
