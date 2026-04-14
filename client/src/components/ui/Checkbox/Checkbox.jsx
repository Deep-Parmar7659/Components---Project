import { useState } from "react";

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="w-4 h-4 accent-blue-500"
      />
      <span className="text-gray-700 dark:text-gray-300">{label}</span>
    </label>
  );
};

export default Checkbox;
