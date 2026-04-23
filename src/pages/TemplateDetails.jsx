import { useParams } from "react-router-dom";
import AppContainer from "../components/ui/AppContainer";
import PreviewTabs from "../components/Docs/PreviewTabs";
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
    link.setAttribute("download", `${slug}.zip`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <AppContainer>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize">
            {slug.replace("-", " ")}
          </h1>

          <button
            onClick={handleDownload}
            className="
              px-4 py-2 rounded-lg
             bg-pink-500 text-white
             hover:bg-pink-600
              transition
            "
          >
            Download
          </button>
        </div>

        <PreviewTabs preview={data.component} codeFiles={[]} />
      </AppContainer>
    </div>
  );
};

export default TemplateDetails;
