import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Section from "../../ui/Section";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <section className="text-center dark:bg-gray-900">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Start building amazing UIs today!
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            navigate("/components");
            window.scrollTo(0, 0);
          }}
          className="bg-pink-500 text-white px-8 py-4 rounded-lg font-semibold"
        >
          Explore Components
        </motion.button>
      </section>
    </Section>
  );
};

export default CTASection;
