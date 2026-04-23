import { useState } from "react";

const Switch = ({ label }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center gap-3">
      {/* Switch */}
      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
          enabled ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
            enabled ? "translate-x-6" : ""
          }`}
        />
      </button>

      {/* Label */}
      <span className="text-gray-700 dark:text-gray-300">{label}</span>
    </div>
  );
};

export default Switch;
