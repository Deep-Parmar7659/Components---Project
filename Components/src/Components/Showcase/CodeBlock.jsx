import { useState } from "react";

const CodeBlock = ({ code, fileName = "Component.jsx" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="border rounded-xl overflow-hidden">
      {/* HEADER */}
      <div className="flex justify-between items-center px-4 py-2 border-b bg-gray-100 dark:bg-gray-800">
        <span className="text-xs text-gray-600 dark:text-gray-300">
          {fileName}
        </span>

        <button
          onClick={handleCopy}
          className="text-xs px-3 py-1 rounded-md border hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* CODE */}
      <pre className="overflow-x-auto p-4 text-sm bg-black text-white">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
