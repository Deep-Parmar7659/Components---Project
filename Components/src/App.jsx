import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ComponentsPage from "./Pages/ComponentsPage";
import ComponentDetails from "./Pages/ComponentDetails";
import TemplatesPage from "./Pages/TemplatesPage";
import TemplateDetails from "./Pages/TemplateDetails";
import ContactPage from "./Pages/ContactPage";

import DocsLayout from "./Layout/DocsLayout/DocsLayout";
import ScrollToTop from "./Components/ScrollToTop";

import ToastContainer from "./Components/UIComponents/ToastContainer";
import FavoritesPage from "./Pages/FavoritesPage";
function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* Global Layout */}
        <Route path="/" element={<DocsLayout />}>
          <Route index element={<HomePage />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route
            path="components/:componentName"
            element={<ComponentDetails />}
          />
          <Route path="templates" element={<TemplatesPage />} />
          <Route path="templates/:slug" element={<TemplateDetails />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;
