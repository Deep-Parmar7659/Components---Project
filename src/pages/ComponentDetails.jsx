import { useParams } from "react-router-dom";
import AppContainer from "../components/ui/AppContainer";
import FavoriteButton from "../components/ui/FavoriteButton";

// Docs UI
import PreviewTabs from "../components/docs/PreviewTabs";
import componentMap from "../data/componentMap";

const ComponentDetails = () => {
  const { componentName } = useParams();
  const data = componentMap[componentName];

  // SAFETY CHECK
  if (!data) {
    return <div className="p-8 text-red-500">Component not found 😅</div>;
  }

  const Preview = data.component;

  return (
    <div className="min-h-screen bg-background">
      <AppContainer>
        {/* HEADER */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-4xl font-bold capitalize tracking-tight">
              {componentName.replace("-", " ")}
            </h1>

            <FavoriteButton name={componentName} />
          </div>

          {/* DESCRIPTION */}
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            {data.description || "No description available."}
          </p>
        </div>

        {/* PREVIEW + CODE */}
        <div className="mt-8">
          <PreviewTabs preview={data.component} codeFiles={data.codeFiles} />
        </div>
      </AppContainer>
    </div>
  );
};

export default ComponentDetails;
