// DropdownMenu.jsx -> (show items)
import { useDropdown } from "./Dropdown";

function DropdownMenu({ children }) {
  const { open } = useDropdown();
  if (!open) return null;

  return (
    // bottom-full = opens upward above the button
    <div className="absolute bottom-full mb-2 w-48 bg-gray-900 border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden backdrop-blur-sm">
      {children}
    </div>
  );
}

export default DropdownMenu;
