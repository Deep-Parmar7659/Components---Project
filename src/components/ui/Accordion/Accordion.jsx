// Main container:-
// Accordion Example which connected to each accordion file:-
// Step 1 - Create Accordion Context:- Manage Open / Close State.
import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

export function useAccordion() {
  return useContext(AccordionContext);
}

function Accordion({ children }) {
  const [openItem, setOpenItem] = useState(null);

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className="w-full max-w-md mx-auto border rounded-lg">
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export default Accordion;
