import { useDropdown } from "./Dropdown";

function DropdownTrigger({ children }) {
  const { open, setOpen } = useDropdown();

  return (
    <button
      onClick={() => setOpen(!open)}
      className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition font-medium"
    >
      {children}
    </button>
  );
}

export default DropdownTrigger;
