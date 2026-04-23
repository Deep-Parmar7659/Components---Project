import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const DocsLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Show sidebar ONLY on component details page
  const isDocsPage = location.pathname.startsWith("/components/");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar (GLOBAL) */}
      <Navbar />

      <div className="flex flex-1">
        {isDocsPage && (
          <>
            {/* MOBILE: sidebar toggle button */}
            <button
              onClick={() => setSidebarOpen((prev) => !prev)}
              className="md:hidden fixed bottom-4 left-4 z-50 bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium"
            >
              {sidebarOpen ? "✕ Close" : "☰ Components"}
            </button>

            {/* MOBILE: sidebar overlay */}
            {sidebarOpen && (
              <div
                className="md:hidden fixed inset-0 z-40 bg-black/50"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            {/* SIDEBAR: hidden on mobile unless open */}
            <aside
              className={`
                fixed md:sticky top-0 z-40 h-screen
                w-64 shrink-0 border-r bg-white dark:bg-gray-900
                transition-transform duration-300
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0
              `}
            >
              <Sidebar onClose={() => setSidebarOpen(false)} />
            </aside>
          </>
        )}

        <main className="flex-1 min-w-0 p-4 md:p-6 bg-gray-50 dark:bg-gray-900">
          <Outlet />
        </main>
      </div>

      {/* Footer (GLOBAL) */}
      <Footer />
    </div>
  );
};

export default DocsLayout;
