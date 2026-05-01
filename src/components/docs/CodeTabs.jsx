import { useState } from "react";
import CodeBlock from "./CodeBlock";

const CodeTabs = ({ codeFiles }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  if (!codeFiles || codeFiles.length === 0) {
    return <p className="text-gray-400 p-4">No code available</p>;
  }

  const activeFile = codeFiles[activeIndex];

  const handleCopyAll = () => {
    const combinedCode = codeFiles
      .map((file) => `// ${file.name}\n${file.content}`)
      .join("\n\n");

    navigator.clipboard.writeText(combinedCode);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div
      className="rounded-xl overflow-hidden mt-2"
      style={{
        background: "var(--code-bg)",
        color: "var(--code-text)",
        border: "1px solid var(--card-border)",
      }}
    >
      {/* ===== TOP BAR ===== */}
      <div
        className="flex flex-col gap-2 px-3 py-2"
        style={{ borderBottom: "1px solid var(--card-border)" }}
      >
        {/* 🔥 SCROLLABLE TABS */}
        <div className="flex overflow-x-auto gap-2 scrollbar-hide">
          {codeFiles.map((file, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={
                activeIndex === index
                  ? {
                      background: "var(--code-tab-active)",
                      color: "var(--code-text)",
                      fontWeight: 500,
                    }
                  : { color: "var(--code-tab-text)" }
              }
              className="px-3 py-1.5 text-xs rounded-md whitespace-nowrap shrink-0 transition"
            >
              {file.name}
            </button>
          ))}
        </div>

        {/* 🔥 COPY BUTTONS (SEPARATE ROW FOR MOBILE FIX) */}
        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              navigator.clipboard.writeText(activeFile.content);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="px-3 py-1.5 text-xs rounded-md bg-gray-300 text-white hover:bg-gray-500 font-medium transition dark:bg-gray-700 dark:hover:bg-gray-800"
          >
            {copied ? "Copied" : "Copy"}
          </button>

          {codeFiles.length > 1 && (
            <button
              onClick={handleCopyAll}
              className="px-3 py-1.5 text-xs rounded-md bg-gray-300 text-white hover:bg-gray-500 font-medium transition dark:bg-gray-700 dark:hover:bg-gray-800"
            >
              {copiedAll ? "Copied All" : "Copy All"}
            </button>
          )}
        </div>
      </div>

      {/* ===== CODE BLOCK ===== */}
      <CodeBlock code={activeFile.content} fileName={activeFile.name} />
    </div>
  );
};

export default CodeTabs;
