import { StrictMode } from "react";
import "./index.css";
import "./styles/theme.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import "prismjs/themes/prism-tomorrow.css";

import ToastProvider from "./Components/AdvancedComponents/Toast/ToastProvider.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";
import { FavoritesProvider } from "./Context/FavoritesContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ToastProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </ToastProvider>
    </ThemeProvider>
  </StrictMode>,
);
