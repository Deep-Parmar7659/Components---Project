// Example usage
// Step 5 — Create Demo Usage
import Accordion from "../Accordion";
import AccordionItem from "../AccordionItem";
import AccordionTrigger from "../AccordionTrigger";
import AccordionContent from "../AccordionContent";

function AccordionDemo() {
  return (
    <>
      <Accordion>
        <AccordionItem>
          <AccordionTrigger value="item1">
            What is TailwindTap?
          </AccordionTrigger>
          <AccordionContent value="item1">
            TailwindTap is a component library built using React.js and Tailwind
            CSS.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger value="item2">
            Why use an Accordion?
          </AccordionTrigger>
          <AccordionContent value="item2">
            Accordion helps organize content in collapsible sections.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default AccordionDemo;
