import { useSheet } from "./Sheet";

function SheetTrigger({ children }) {
  const { setOpen } = useSheet();

  return (
    <button
      onClick={() => setOpen(true)}
      className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition font-medium"
    >
      {children}
    </button>
  );
}

export default SheetTrigger;
