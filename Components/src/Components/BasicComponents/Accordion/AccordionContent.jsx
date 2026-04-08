// Expand/collapse content
// Step 4 — Create AccordionContent:- Hidden content area.
// Shows content only when item is open.
import { useAccordion } from "./Accordion";

function AccordionContent({ value, children }) {
  const { openItem } = useAccordion();
  if (openItem !== value) return null;

  return <div className="px-4 pb-4 text-gray-600">{children}</div>;
}

export default AccordionContent;
