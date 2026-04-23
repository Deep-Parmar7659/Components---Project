const Stepper = ({ steps, currentStep, device }) => {
  return (
    <div
      className={`flex items-center justify-between w-full ${device === "mobile" ? "flex-col items-start gap-4" : "flex-row"}`}
    >
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={index} className="flex items-center">
            {/* Circle */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                isCompleted
                  ? "bg-blue-500 text-white border-blue-500"
                  : isActive
                    ? "bg-blue-500 text-white border-blue-500 ring-2 ring-blue-300"
                    : "border-gray-600 text-white"
              }`}
            >
              {index + 1}
            </div>

            {/* Label */}
            <span className="ml-2 text-sm">{step}</span>

            {/* Line */}
            {index !== steps.length - 1 && device !== "mobile" && (
              <div className="hidden sm:block flex-1 h-0.5 bg-gray-300 mx-2 min-w-5 max-w-20" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
