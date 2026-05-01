// const ResponsivePreview = ({ children, device }) => {
//   const getWidth = () => {
//     if (device === "mobile") return "375px";
//     if (device === "tablet") return "768px";
//     return "100%";
//   };

//   // const getLabel = () => {
//   //   if (device === "mobile") return "375px";
//   //   if (device === "tablet") return "768px";
//   //   return "Full width";
//   // };

//   return (
//     <div className="w-full flex flex-col items-center gap-2">
//       {/* Size label */}
//       {/* <span className="text-xs text-gray-400 dark:text-gray-500">
//         {getLabel()}
//       </span> */}

//       {/* Device frame */}
//       <div
//         className="transition-all duration-300 w-full"
//         style={{
//           maxWidth: getWidth(),
//           border: device !== "laptop" ? "2px solid var(--card-border)" : "none",
//           borderRadius: device !== "laptop" ? "12px" : "0",
//           overflow: "hidden",
//         }}
//       >
//         <div className="w-full p-4">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default ResponsivePreview;

const ResponsivePreview = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      {/* ❌ Label removed */}

      {/* ✅ Simple responsive container */}
      <div className="w-full transition-all duration-300">
        <div className="w-full p-4">{children}</div>
      </div>
    </div>
  );
};

export default ResponsivePreview;
