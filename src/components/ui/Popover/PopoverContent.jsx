import { usePopover } from "./Popover";

function PopoverContent({ children }) {
  const { open } = usePopover();
  if (!open) return null;

  return (
    // bottom-full = opens upward above the button
    <div className="absolute bottom-full mb-2 w-52 bg-gray-900 border border-white/10 rounded-xl shadow-xl p-4 z-50 backdrop-blur-sm">
      {children}
    </div>
  );
}

export default PopoverContent;
