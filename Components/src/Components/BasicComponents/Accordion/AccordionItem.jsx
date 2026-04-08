// Individual accordion section
// Step 2 — Create AccordionItem:- Group of Trigger + Content.
// Wraps one accordion section.
function AccordionItem({ children }) {
  return <div className="border-b">{children}</div>;
}

export default AccordionItem;
