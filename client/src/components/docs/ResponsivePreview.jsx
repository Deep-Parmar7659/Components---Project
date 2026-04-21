import { cloneElement } from "react";

const ResponsivePreview = ({ children, device }) => {
  const getWidth = () => {
    if (device === "mobile") return "375px";
    if (device === "tablet") return "768px";
    return "100%"; // laptop
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className="border rounded-xl overflow-hidden shadow-sm transition-all duration-300"
        style={{
          width: getWidth(),
          maxWidth: "100%",
        }}
      >
        <div className="w-full p-4">{cloneElement(children, { device })}</div>
      </div>
    </div>
  );
};

export default ResponsivePreview;
