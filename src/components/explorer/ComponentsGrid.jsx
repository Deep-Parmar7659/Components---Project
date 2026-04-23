// ComponentsGrid → map + display
import ComponentCard from "./ComponentCard";

const ComponentsGrid = ({ components }) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {components.map((comp) => (
        <ComponentCard key={comp.id} component={comp} />
      ))}
    </div>
  );
};

export default ComponentsGrid;
