function Button({
  children,
  size = "md",
  variant = "primary",
  rounded = false,
}) {
  // 🔹 Size styles
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // 🔹 Variant styles
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "text-blue-600 hover:bg-blue-100",
  };

  // 🔹 Rounded
  const roundedClass = rounded ? "rounded-full" : "rounded-lg";

  return (
    <button
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${roundedClass}
        transition
      `}
    >
      {children}
    </button>
  );
}

export default Button;
