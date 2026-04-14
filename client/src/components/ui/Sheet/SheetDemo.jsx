import Sheet from "./Sheet";
import SheetTrigger from "./SheetTrigger";
import SheetContent from "./SheetContent";

function SheetDemo() {
  return (
    <div className="p-2 flex justify-center">
      <Sheet>
        <SheetTrigger>Open Menu</SheetTrigger>
        <SheetContent>
          {/* Navigation links */}
          <ul className="space-y-2">
            <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition text-sm">
              🏠 Home
            </li>
            <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition text-sm">
              👤 Profile
            </li>
            <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition text-sm">
              ⚙️ Settings
            </li>
            <li className="cursor-pointer px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition text-sm">
              🚪 Logout
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SheetDemo;
