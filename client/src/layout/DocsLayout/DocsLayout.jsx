import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const DocsLayout = () => {
  const location = useLocation();

  // Show sidebar ONLY on component details page
  const isDocsPage = location.pathname.startsWith("/components/");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar (GLOBAL) */}
      <Navbar />

      <div className="flex flex-1">
        {isDocsPage && (
          <aside className="w-64 shrink-0 border-r bg-white dark:bg-gray-900 self-start sticky top-0">
            <Sidebar />
          </aside>
        )}
        <main className="flex-1 min-w-0 p-6 bg-gray-50 dark:bg-gray-900">
          <Outlet />
        </main>
      </div>

      {/* Footer (GLOBAL) */}
      <Footer />
    </div>
  );
};

export default DocsLayout;
