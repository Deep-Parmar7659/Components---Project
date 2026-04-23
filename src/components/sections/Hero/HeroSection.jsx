import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ scrollToBenefits }) => {
  const navigate = useNavigate();

  return (
    <section className="relative text-center py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6"
      >
        TailwindTap
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-base sm:text-lg md:text-2xl mb-8 sm:mb-10 text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
      >
        Build modern UI faster with reusable Tailwind components
      </motion.p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
        {/* Get Started */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToBenefits}
          className="w-full sm:w-auto bg-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:bg-pink-600 transition-all text-base sm:text-lg border border-white/40"
        >
          Get Started
        </motion.button>

        {/* Explore Components */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            navigate("/components");
            window.scrollTo(0, 0);
          }}
          className="w-full sm:w-auto bg-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:bg-pink-700 transition-all text-base sm:text-lg"
        >
          Explore Components
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
