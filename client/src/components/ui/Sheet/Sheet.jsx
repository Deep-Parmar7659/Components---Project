import { createContext, useContext, useState } from "react";

const SheetContext = createContext();

export function useSheet() {
  return useContext(SheetContext);
}

function Sheet({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

export default Sheet;
