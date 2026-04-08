import {
  canCopy,
  increaseCopyCount,
  getRemainingCopies,
} from "../../Utils/copyLimit";

import { useToast } from "../AdvancedComponents/Toast/useToast";

const CodeBlock = ({ code, fileName }) => {
  const { addToast } = useToast();

  const handleCopy = () => {
    if (!canCopy()) {
      addToast("Copy limit reached for today", "error");
      return;
    }

    navigator.clipboard.writeText(code);

    increaseCopyCount();

    addToast(`Copied! Remaining: ${getRemainingCopies()}`, "success");
  };

  return (
    <div className="relative">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-t-xl border">
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {fileName || "Component.jsx"}
        </span>

        <button
          onClick={handleCopy}
          className="text-xs px-3 py-1 rounded-md bg-black text-white hover:bg-gray-700"
        >
          Copy
        </button>
      </div>

      {/* Code Block */}
      <pre className="overflow-x-auto rounded-b-xl p-4 text-sm bg-black text-white">
        <code>{code}</code>
      </pre>

      {/* Remaining Count */}
      <p className="text-xs text-gray-500 mt-2">
        Remaining copies today: {getRemainingCopies()}
      </p>
    </div>
  );
};

export default CodeBlock;
