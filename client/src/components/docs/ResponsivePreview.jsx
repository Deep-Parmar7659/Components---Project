import { useState } from "react";

const ResponsivePreview = ({ children }) => {
  const [size, setSize] = useState("lg");

  const widths = {
    sm: 375,
    md: 768,
    lg: null, // full width
  };

  const labels = {
    sm: "SM — 375px",
    md: "MD — 768px",
    lg: "LG — Full",
  };

  const currentWidth = widths[size];

  return (
    <div className="w-full">
      {/* Toggle */}
      <div className="flex justify-center mb-4">
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

      {/* Size label */}
      <div className="text-center text-xs text-gray-400 dark:text-gray-500 mb-4">
        {labels[size]}
      </div>

      {/* Outer scroll wrapper */}
      <div className="w-full border rounded-xl overflow-hidden p-4">
        {/* Inner fixed-width container — clips content so breakpoints simulate correctly */}
        <div
          className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm transition-all duration-300 mx-auto"
          style={{
            width: currentWidth ? `${currentWidth}px` : "100%",
            maxWidth: "100%",
          }}
        >
          {/* Scale wrapper — shrinks content to fit when container is smaller than content */}
          <div
            style={{
              width: currentWidth ? `${currentWidth}px` : "100%",
              overflowX: "hidden",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsivePreview;
