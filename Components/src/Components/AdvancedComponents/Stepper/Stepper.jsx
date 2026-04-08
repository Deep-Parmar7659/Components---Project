const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-between w-full">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={index} className="flex-1 flex items-center">
            {/* Circle */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                isCompleted
                  ? "bg-blue-500 text-white border-blue-500"
                  : isActive
                    ? "border-blue-500 text-blue-500"
                    : "border-gray-600 text-white"
              }`}
            >
              {index + 1}
            </div>

            {/* Label */}
            <span className="ml-2 text-sm">{step}</span>

            {/* Line */}
            {index !== steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-gray-300 mx-2" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
