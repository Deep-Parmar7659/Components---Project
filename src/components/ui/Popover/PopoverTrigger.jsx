import { usePopover } from "./Popover";

function PopoverTrigger({ children }) {
  const { open, setOpen } = usePopover();

  return (
    <button
      onClick={() => setOpen(!open)}
      className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition font-medium"
    >
      {children}
    </button>
  );
}

export default PopoverTrigger;
