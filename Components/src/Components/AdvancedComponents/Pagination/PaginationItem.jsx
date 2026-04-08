function PaginationItem({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-pink-500 text-(--text-primary) border-pink-500 shadow-lg shadow-pink-500/30"
          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

export default PaginationItem;
