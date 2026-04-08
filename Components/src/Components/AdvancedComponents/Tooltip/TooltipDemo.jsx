import Tooltip from "./Tooltip";
import TooltipTrigger from "./TooltipTrigger";
import TooltipContent from "./TooltipContent";

function TooltipDemo() {
  return (
    <div className="p-10">
      <div className="flex gap-6 flex-wrap">
        <Tooltip>
          <TooltipTrigger>
            <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
              Hover me
            </button>
          </TooltipTrigger>
          <TooltipContent>Save changes</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
              Hover me too
            </button>
          </TooltipTrigger>
          <TooltipContent>Delete item</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}

export default TooltipDemo;
