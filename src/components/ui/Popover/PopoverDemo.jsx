import Popover from "./Popover";
import PopoverTrigger from "./PopoverTrigger";
import PopoverContent from "./PopoverContent";

function PopoverDemo() {
  return (
    <div className="p-2 flex justify-center mt-50">
      <div className="relative">
        <Popover>
          <PopoverTrigger>Open Popover</PopoverTrigger>
          <PopoverContent>
            <div className="space-y-1">
              <p className="font-semibold text-white mb-2">User Menu</p>
              <button className="block w-full text-left hover:bg-white/10 p-2 rounded-lg text-gray-300 hover:text-white transition text-sm">
                Profile
              </button>
              <button className="block w-full text-left hover:bg-white/10 p-2 rounded-lg text-gray-300 hover:text-white transition text-sm">
                Settings
              </button>
              <button className="block w-full text-left hover:bg-white/10 p-2 rounded-lg text-gray-300 hover:text-white transition text-sm">
                Logout
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default PopoverDemo;
