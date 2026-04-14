import { useState } from "react";

const ResponsivePreview = ({ children }) => {
  const [size, setSize] = useState("md");

  const sizes = {
    sm: "max-w-sm",
    md: "max-w-xl",
    lg: "max-w-4xl",
  };

  return (
    <div className="w-full">
      {/* 🔥 Modern Toggle */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-full shadow-inner">
          {["sm", "md", "lg"].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition ${
                size === s
                  ? "bg-white dark:bg-gray-700 shadow text-blue-600"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* 🔥 Preview Container */}
      <div className="flex justify-center">
        <div className={`w-full ${sizes[size]} transition-all duration-300`}>
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900 shadow-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsivePreview;
