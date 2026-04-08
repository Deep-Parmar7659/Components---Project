function Breadcrumb({ children }) {
  return (
    <nav className="flex items-center text-gray-600 text-sm space-x-2">
      {children}
    </nav>
  );
}

export default Breadcrumb;
