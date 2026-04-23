// This is the brain of Our Project.
// Handles Routing, Loads layout, Connects all pages.
// Layout contain Navbar, Sidebar, Footer. Purpose:- Layout → Wraps Pages → Consistent UI
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ComponentsPage from "./pages/ComponentsPage";
import ComponentDetails from "./pages/ComponentDetails";
import TemplatesPage from "./pages/TemplatesPage";
import TemplateDetails from "./pages/TemplateDetails";
import ContactPage from "./pages/ContactPage";
import DocsLayout from "./layout/DocsLayout/DocsLayout";
import ToastContainer from "./components/ui/Toast/ToastContainer";
import ScrollToTop from "./components/ui/ScrollToTop";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* User clicks link → Route changes → New page loads */}
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

        {/* 404 — catch all unknown URLs */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;
