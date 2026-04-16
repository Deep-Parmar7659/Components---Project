import { useNavigate } from "react-router-dom";

const TemplateCard = ({ template }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/templates/${template.slug}`)}
      className="
        group cursor-pointer p-6 rounded-2xl
        bg-white/70 dark:bg-gray-900/60
        backdrop-blur-lg
        border border-gray-200 dark:border-gray-800
        shadow-sm hover:shadow-xl
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight">
        {template.name}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        Click to preview template
      </p>

      {/* Action hint */}
      <div className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition">
        View Details →
      </div>
    </div>
  );
};

export default TemplateCard;
