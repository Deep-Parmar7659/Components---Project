import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-gray-900">
      {/* Animated 404 number */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[120px] sm:text-[180px] font-extrabold leading-none select-none"
        style={{ color: "#ec4899", opacity: 0.15 }}
      >
        404
      </motion.div>

      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          type: "spring",
          stiffness: 200,
        }}
        className="-mt-8 sm:-mt-12 mb-6 text-5xl sm:text-6xl"
      >
        🔍
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3"
      >
        Page not found
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-md mb-8"
      >
        Oops! The page you're looking for doesn't exist or has been moved.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <button
          onClick={() => navigate("/")}
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all hover:shadow-xl text-base"
        >
          Go to Home
        </button>

        <button
          onClick={() => navigate("/components")}
          className="border border-pink-600 text-pink-600 dark:text-pink-400 dark:border-pink-400 font-semibold px-8 py-3 rounded-full transition-all hover:bg-pink-50 dark:hover:bg-pink-950 text-base"
        >
          Browse Components
        </button>
      </motion.div>

      {/* Helpful links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400 dark:text-gray-500"
      >
        {[
          { label: "Components", path: "/components" },
          { label: "Templates", path: "/templates" },
          { label: "Favorites", path: "/favorites" },
          { label: "Contact", path: "/contact" },
        ].map((link) => (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className="hover:text-pink-500 transition-colors"
          >
            {link.label} →
          </button>
        ))}
      </motion.div>
    </div>
  );
}

export default NotFoundPage;
