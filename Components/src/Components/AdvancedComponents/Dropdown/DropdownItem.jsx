function DropdownItem({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2.5 hover:bg-white/10 cursor-pointer text-gray-300 hover:text-white transition-colors duration-150 text-sm"
    >
      {children}
    </div>
  );
}

export default DropdownItem;
