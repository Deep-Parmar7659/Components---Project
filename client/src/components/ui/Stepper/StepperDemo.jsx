import { useState } from "react";
import Stepper from "./Stepper";

const StepperDemo = () => {
  const steps = ["Login", "Shipping", "Payment", "Done"];
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex flex-col gap-6">
      <Stepper steps={steps} currentStep={currentStep} />

      <div className="flex gap-3">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
          className="px-4 py-2 bg-gray-600 rounded"
        >
          Back
        </button>

        <button
          onClick={() =>
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
          }
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepperDemo;
