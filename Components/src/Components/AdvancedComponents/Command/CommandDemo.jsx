import Command from "./Command";
import CommandInput from "./CommandInput";
import CommandList from "./CommandList";
import CommandItem from "./CommandItem";

function CommandDemo() {
  return (
    <div className="p-2">
      <Command>
        <CommandInput />
        <CommandList>
          <CommandItem value="accordion">Accordion</CommandItem>
          <CommandItem value="tabs">Tabs</CommandItem>
          <CommandItem value="dropdown">Dropdown</CommandItem>
          <CommandItem value="popover">Popover</CommandItem>
          <CommandItem value="modal">Modal</CommandItem>
          <CommandItem value="sheet">Sheet</CommandItem>
          <CommandItem value="pagination">Pagination</CommandItem>
          <CommandItem value="skeleton">Skeleton</CommandItem>
          <CommandItem value="breadcrumb">Breadcrumb</CommandItem>
          <CommandItem value="toast">Toast</CommandItem>
        </CommandList>
      </Command>
    </div>
  );
}

export default CommandDemo;
