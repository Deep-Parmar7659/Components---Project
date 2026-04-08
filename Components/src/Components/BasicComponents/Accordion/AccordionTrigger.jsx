// Clickable header
// Step 3 — Create AccordionTrigger:- Button to Open / Close.
// toggle through check if already open then print null when click to open then print value.
import { useAccordion } from "./Accordion";

function AccordionTrigger({ value, children }) {
  const { openItem, setOpenItem } = useAccordion();
  const isOpen = openItem === value;

  function toggleAccordion() {
    setOpenItem(isOpen ? null : value);
  }

  return (
    <button
      onClick={toggleAccordion}
      className="w-full text-left px-4 py-3 font-medium flex justify-between items-center"
    >
      {children}
      <span>{isOpen ? "-" : "+"}</span>
    </button>
  );
}

export default AccordionTrigger;
