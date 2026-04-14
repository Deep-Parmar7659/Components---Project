import { useParams } from "react-router-dom";
import AppContainer from "../components/ui/AppContainer";
import PreviewTabs from "../components/Docs/PreviewTabs";
import ResponsivePreview from "../components/Docs/ResponsivePreview"; // ✅ FIXED

import { templateMap } from "../Data/templateMap";

const TemplateDetails = () => {
  const { slug } = useParams();
  const data = templateMap[slug];

  if (!data) {
    return <div className="p-8 text-red-500">Template not found 😅</div>;
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = data.file;
    link.download = slug;
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <AppContainer>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold capitalize">
            {slug.replace("-", " ")}
          </h1>

          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-black text-white rounded-lg hover:opacity-90"
          >
            Download
          </button>
        </div>

        <PreviewTabs
          preview={<ResponsivePreview>{data.component}</ResponsivePreview>}
        />
      </AppContainer>
    </div>
  );
};

export default TemplateDetails;
