// 2️⃣ Create FAQ Demo Component
import Accordion from "../Accordion";
import AccordionItem from "../AccordionItem";
import AccordionTrigger from "../AccordionTrigger";
import AccordionContent from "../AccordionContent";

function AccordionFAQ() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionTrigger value="faq1">What is Tailwind?</AccordionTrigger>
        <AccordionContent value="faq1">
          TailwindTap is a collection of reusable UI components built with
          React.js and Tailwind CSS.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger value="faq2">
          Why should I use Accordion?
        </AccordionTrigger>
        <AccordionContent value="faq2">
          Accordion components help organize content into expandable sections to
          improve readability.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger value="faq3">
          Is TailwindTap beginner friendly?
        </AccordionTrigger>
        <AccordionContent value="faq3">
          Yes, TailwindTap components are designed to be simple, reusable, and
          easy to integrate in any React project.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionFAQ;
