import { useState } from "react";
import AppContainer from "../components/ui/AppContainer";
import { templatesData } from "../Data/templatesData";
import TemplateCard from "../components/Templates/TemplateCard";
import TemplateSearch from "../components/Templates/TemplateSearch";

const TemplatesPage = () => {
  const [search, setSearch] = useState("");

  const filteredTemplates = templatesData.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-background">
      <AppContainer>
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Templates
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
            Ready-to-use templates for your React + Tailwind projects.
          </p>
        </div>

        {/* SEARCH */}
        <TemplateSearch search={search} setSearch={setSearch} />

        {/* GRID */}
        {filteredTemplates.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-10 text-muted-foreground">
            No templates found 😅
          </div>
        )}
      </AppContainer>
    </div>
  );
};

export default TemplatesPage;
