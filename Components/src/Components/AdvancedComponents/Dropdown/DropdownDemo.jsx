import Dropdown from "./Dropdown";
import DropdownTrigger from "./DropdownTrigger";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";

function DropdownDemo() {
  return (
    <div className="flex justify-center mt-20">
      <Dropdown>
        <DropdownTrigger>Open Menu</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={() => alert("Profile clicked!")}>
            Profile
          </DropdownItem>
          <DropdownItem onClick={() => alert("Settings clicked!")}>
            Settings
          </DropdownItem>
          <DropdownItem onClick={() => alert("Logout clicked!")}>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default DropdownDemo;
