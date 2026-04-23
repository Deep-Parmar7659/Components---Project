import { useState } from "react";
import ResponsivePreview from "./ResponsivePreview";
import CodeTabs from "./CodeTabs";

const PreviewTabs = ({ preview, codeFiles }) => {
  const [activeTab, setActiveTab] = useState("preview"); // "preview" or "code"
  const [device, setDevice] = useState("laptop");

  return (
    <div className="w-full mt-6">
      {/* ===== TAB BUTTONS — Preview / Code ===== */}
      <div className="flex items-center gap-1 border-b border-gray-200 dark:border-gray-700 mb-6">
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all border-b-2 -mb-px ${
            activeTab === "preview"
              ? "border-pink-500 text-pink-500"
              : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
          }`}
        >
          {/* Eye icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          Preview
        </button>

        {codeFiles && codeFiles.length > 0 && (
          <button
            onClick={() => setActiveTab("code")}
            className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all border-b-2 -mb-px ${
              activeTab === "code"
                ? "border-pink-500 text-pink-500"
                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            Code
          </button>
        )}
      </div>

      {/* ===== PREVIEW SECTION ===== */}
      {activeTab === "preview" && (
        <div>
          {/* Device Toggle */}
          <div className="flex justify-center gap-2 mb-5">
            {[
              { id: "mobile", label: "Mobile", icon: "📱" },
              { id: "tablet", label: "Tablet", icon: "📟" },
              { id: "laptop", label: "Laptop", icon: "💻" },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => setDevice(d.id)}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-sm rounded-lg transition ${
                  device === d.id
                    ? "bg-pink-500 text-white font-medium"
                    : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                <span className="text-xs">{d.icon}</span>
                {d.label}
              </button>
            ))}
          </div>

          {/* Live Component Preview */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 min-h-50">
            <ResponsivePreview device={device}>{preview}</ResponsivePreview>
          </div>
        </div>
      )}

      {/* ===== CODE SECTION ===== */}
      {activeTab === "code" && (
        <div>
          {codeFiles && codeFiles.length > 0 ? (
            <CodeTabs codeFiles={codeFiles} />
          ) : (
            <div className="flex flex-col items-center justify-center p-10 rounded-xl bg-gray-900 text-gray-400 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 opacity-40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PreviewTabs;
