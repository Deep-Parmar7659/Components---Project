// Why Only One Open?
// Because we’re storing single number.

// That’s called: Single-expand accordion:-

// import React, { useState } from "react";
// export default function Accordion({ items }) {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleItem = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="w-full border rounded-lg divide-y overflow-hidden">
//       {items.map((item, index) => {
//         const isOpen = openIndex === index;

//         return (
//           <div key={index}>
//             {/* Trigger */}
//             <button
//               onClick={() => toggleItem(index)}
//               className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-gray-50 transition"
//             >
//               {item.title}

//               {/* Rotating Icon */}
//               <span
//                 className={`transition-transform duration-300 ${
//                   isOpen ? "rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>

//             {/* Animated Content */}
//             <div
//               className={`transition-all duration-300 ease-in-out overflow-hidden ${
//                 isOpen ? "max-h-40 p-4" : "max-h-0 px-4"
//               }`}
//             >
//               <p className="text-sm text-gray-600">{item.content}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// Multi-Open Accordion:-

// import React, { useState } from "react";
// export const Accordion = ({ items }) => {
//   const [openIndexes, setOpenIndexes] = useState([]);
//   const toggleItem = (index) => {
//     // Remove from array (close it)
//     if (openIndexes.includes(index)) {
//       setOpenIndexes(openIndexes.filter((i) => i !== index));
//     } else {
//       // Add to array (open it)
//       setOpenIndexes([...openIndexes, index]);
//     }
//   };

//   return (
//     <div className="w-full border rounded-lg divide-y overflow-hidden">
//       {items.map((item, index) => {
//         const isOpen = openIndexes.includes(index);

//         return (
//           <div key={index}>
//             {/* Trigger */}
//             <button
//               onClick={() => toggleItem(index)}
//               className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-gray-50 transition"
//             >
//               {item.title}
//               <span
//                 className={`transition-transform duration-300 ${
//                   isOpen ? "rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>
//             {/* Content */}
//             <div
//               className={`transition-all duration-300 ease-in-out overflow-hidden ${
//                 isOpen ? "max-h-40 p-4" : "max-h-0 px-4"
//               }`}
//             >
//               <p className="text-sm text-gray-600">{item.content}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Accordion;

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
