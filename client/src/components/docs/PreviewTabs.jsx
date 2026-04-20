import { useState } from "react";
import ResponsivePreview from "./ResponsivePreview";

const PreviewTabs = ({ preview }) => {
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
                ? "bg-primary text-white"
                : "bg-gray-200 dark:bg-gray-700"
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
    </div>
  );
};

export default PreviewTabs;
