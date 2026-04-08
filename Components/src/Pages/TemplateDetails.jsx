import { useParams } from "react-router-dom";
import AppContainer from "../Components/UIComponents/AppContainer";
import PreviewTabs from "../Components/Docs/PreviewTabs";
import CodeBlock from "../Components/Docs/CodeBlock";
import { templateMap } from "../Data/templateMap";

const TemplateDetails = () => {
  const { slug } = useParams();

  const data = templateMap[slug];

  if (!data) {
    return <div className="p-8 text-red-500">Template not found 😅</div>;
  }

  // DOWNLOAD FUNCTION
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = data.file; // important
    link.download = slug;
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <AppContainer>
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold capitalize">
            {slug.replace("-", " ")}
          </h1>

          {/* DOWNLOAD BUTTON */}
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-black text-white rounded-lg hover:opacity-90"
          >
            Download
          </button>
        </div>

        {/* EXISTING SYSTEM */}
        <PreviewTabs
          preview={data.component}
          code={<CodeBlock code={data.code} fileName={data.fileName} />}
        />
      </AppContainer>
    </div>
  );
};

export default TemplateDetails;
