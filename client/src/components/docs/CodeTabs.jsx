import { useState } from "react";
import CodeBlock from "./CodeBlock";

const CodeTabs = ({ codeFiles }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!codeFiles || codeFiles.length === 0) {
    return <p className="text-gray-400 p-4">No code available</p>;
  }

  const activeFile = codeFiles[activeIndex];

  const handleCopyAll = () => {
    const combinedCode = codeFiles
      .map((file) => `// ${file.name}\n${file.content}`)
      .join("\n\n");

    navigator.clipboard.writeText(combinedCode);
  };

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden mt-6">
      {/* Copy All */}
      <div className="flex justify-end p-2">
        <button
          onClick={handleCopyAll}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs"
        >
          Copy All
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700">
        {codeFiles.map((file, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 text-sm ${
              activeIndex === index ? "bg-gray-800 text-white" : "text-gray-400"
            }`}
          >
            {file.name}
          </button>
        ))}
      </div>

      {/* Code */}
      <CodeBlock code={activeFile.content} fileName={activeFile.name} />
    </div>
  );
};

export default CodeTabs;
