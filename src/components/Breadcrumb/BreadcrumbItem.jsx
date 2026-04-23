function BreadcrumbItem({ children, active }) {
  return (
    <span className="flex items-center gap-2">
      <span
        className={`cursor-pointer text-sm transition ${
          active
            ? "text-pink-500 font-semibold"
            : "text-gray-400 hover:text-(--text-primary)"
        }`}
      >
        {children}
      </span>
      {/* Separator */}
      {!active && <span className="text-gray-600">/</span>}
    </span>
  );
}

export default BreadcrumbItem;
