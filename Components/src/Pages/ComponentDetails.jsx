import { useParams } from "react-router-dom";
import AppContainer from "../Components/UIComponents/AppContainer";
import FavoriteButton from "../Components/UIComponents/FavoriteButton";

// Docs UI
import PreviewTabs from "../Components/Docs/PreviewTabs";
import CodeBlock from "../Components/Docs/CodeBlock";

import componentMap from "../Data/componentMap";
import PropsTable from "../Components/Docs/PropsTable";

import ResponsivePreview from "../Components/Docs/ResponsivePreview";
const ComponentDetails = () => {
  const { componentName } = useParams();

  const data = componentMap[componentName];

  // SAFETY CHECK
  if (!data) {
    return <div className="p-8 text-red-500">Component not found 😅</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <AppContainer>
        {/* HEADER */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold capitalize tracking-tight">
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
          <PreviewTabs
            preview={<ResponsivePreview>{data.component}</ResponsivePreview>}
            code={<CodeBlock code={data.code} fileName={data.fileName} />}
          />
        </div>

        {/* PROPS SECTION */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <PropsTable propsData={data.props} />
        </div>
      </AppContainer>
    </div>
  );
};

export default ComponentDetails;
