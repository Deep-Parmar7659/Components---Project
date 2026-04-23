const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    primary: "bg-blue-500 text-white",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-medium rounded ${variants[variant]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
