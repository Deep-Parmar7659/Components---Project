const Navbar = () => {
  return (
    <nav
      className="
      sticky top-0 z-40
      flex items-center justify-between px-6 py-4
      bg-white dark:bg-gray-900
      border-b border-gray-200 dark:border-gray-700
    "
    >
      <div className="flex gap-6 text-sm font-medium text-gray-800 dark:text-gray-200">
        <a href="#">Home</a>
        <a href="#">Components</a>
        <a href="#">Templates</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
