import { useState } from "react";
import ResponsivePreview from "./ResponsivePreview";
import CodeTabs from "./CodeTabs";

const PreviewTabs = ({ preview, codeFiles }) => {
  const [device, setDevice] = useState("laptop");

  return (
    <div className="w-full mt-6">
      {/* Device Toggle */}
      <div className="flex justify-center gap-2 mb-4">
        {["mobile", "tablet", "laptop"].map((d) => (
          <button
            key={d}
            onClick={() => setDevice(d)}
            className={`px-3 py-1 text-sm rounded-lg capitalize transition ${
              device === d
                ? "bg-pink-500 text-white"
                : "bg-gray-300 text-gray-600 dark:bg-gray-600"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Preview */}
      <div className="rounded-xl bg-muted/40 p-6">
        <ResponsivePreview device={device}>{preview}</ResponsivePreview>
      </div>

      {/* ✅ ADD THIS (Code Section) */}
      <CodeTabs codeFiles={codeFiles} />
    </div>
  );
};

export default PreviewTabs;
