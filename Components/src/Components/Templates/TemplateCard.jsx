import { useNavigate } from "react-router-dom";

const TemplateCard = ({ template }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/templates/${template.slug}`)}
      className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition"
    >
      <h2 className="text-lg font-semibold dark:text-white">{template.name}</h2>

      <p className="text-sm text-gray-500 mt-2">Click to preview template</p>
    </div>
  );
};

export default TemplateCard;
