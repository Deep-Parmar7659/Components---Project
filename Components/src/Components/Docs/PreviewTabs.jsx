import { useState } from "react";

const PreviewTabs = ({ preview, code }) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [screen, setScreen] = useState("desktop");

  return (
    <div className="w-full mt-6">
      {/* Tabs Header */}
      <div className="flex gap-6 border-b border-border">
        <button
          onClick={() => setActiveTab("preview")}
          className={`pb-2 text-sm font-medium ${
            activeTab === "preview"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground"
          }`}
        >
          Preview
        </button>

        {/* <button
          onClick={() => setActiveTab("code")}
          className={`pb-2 text-sm font-medium ${
            activeTab === "code"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground"
          }`}
        >
          Code
        </button> */}
      </div>

      {/* Content */}
      <div className="mt-6 rounded-xl bg-muted/40 p-8">
        {activeTab === "preview" ? (
          <div className="flex justify-center items-center">
            <div
              className={`
                transition-all duration-300
                ${
                  screen === "desktop"
                    ? "w-full max-w-4xl"
                    : screen === "tablet"
                      ? "w-3xl"
                      : "w-93.75"
                }
              `}
            >
              {preview}
            </div>
          </div>
        ) : (
          code
        )}
      </div>
    </div>
  );
};

export default PreviewTabs;
