// 2) Create Main Component:-
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export default function AnimatedTestimonials({ testimonials }) {
  // This stores which testimonial is visible.
  const [active, setActive] = useState(0);
  // Add Autoplay Logic
  const [paused, setPaused] = useState(false);
  // For Preload Image
  useEffect(() => {
    testimonials.forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });
  }, [testimonials]);
  useEffect(() => {
    if (paused || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused, testimonials.length]);

  // Next button logic
  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };
  // Previous button logic
  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Keyboard Event Logic
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      }
      if (event.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [testimonials.length]);

  return (
    <div
      className="min-h-100 max-w-6xl mx-auto py-20 px-6 transform-gpu"
      // Mouse Hover :- Autoplay Pause
      onMouseEnter={() => setPaused(true)}
      // Mouse Leave :- Autoplay Resumes
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        {/* Always use that - h-[350px] */}
        <div className="relative h-87.5 w-full">
          {/* AnimatePresence controls enter and exit animations. */}
          <AnimatePresence>
            {testimonials.map((item, index) => {
              const isActive = index === active;

              return (
                <motion.img
                  loading="eager"
                  key={item.src}
                  src={item.src}
                  alt={item.name}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    rotate: -5,
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0.6,
                    // Scale Effect:- Active card → bigger, Background cards → smaller
                    scale: isActive ? 1 : 0.92,
                    // Rotation Effect:- Active card → straight, Background cards → tilted
                    rotate: isActive ? 0 : -5,
                    // Z-Index Layering:- Top card → active testimonial, Behind → other cards
                    zIndex: isActive ? 10 : testimonials.length - index,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    rotate: 5,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  // Swipe Detection:-
                  // Swipe left :- Next testimonial
                  // Swipe right :- Previous testimonial
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(event, info) => {
                    // drag distance > 100px to left
                    if (info.offset.x < -100) handleNext();
                    if (info.offset.x > 100) handlePrev();
                  }}
                  className="absolute inset-0 h-full w-full object-cover rounded-3xl shadow-lg"
                />
              );
            })}
          </AnimatePresence>
        </div>

        {/* Content Section */}
        <div>
          <h3 className="text-2xl font-bold">{testimonials[active].name}</h3>

          <p className="text-sm text-gray-500">
            {testimonials[active].designation}
          </p>

          <p className="mt-6 text-lg text-gray-600 flex flex-wrap">
            {/* Split the quote */}
            {testimonials[active].quote.split(" ").map((word, index) => (
              <motion.span
                key={index + active}
                // opacity: 0 → 1 - fade in
                // y: 10 → 0 - slide up
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  // Animate each word
                  // delay - stagger words
                  // duration - animation speed
                  delay: index * 0.05,
                  duration: 0.4,
                }}
                className="mr-1"
              >
                {word}
              </motion.span>
            ))}
          </p>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={handlePrev}
              className="
                p-2 rounded-full
                border border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-900
              text-gray-800 dark:text-gray-200
              hover:bg-pink-500 hover:text-white
                transition
              "
            >
              ←
            </button>

            <button
              onClick={handleNext}
              className="
                p-2 rounded-full
                border border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-900
              text-gray-800 dark:text-gray-200
              hover:bg-pink-500 hover:text-white
                transition
              "
            >
              →
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2 mt-6">
            {/* testimonials.map():- Creates one dot per testimonial */}
            {testimonials.map((_, index) => (
              <button
                key={index}
                // setActive(index):- Jump to that testimonial
                onClick={() => setActive(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  // active === index:- Highlights current testimonial
                  // w-4 :-Active dot becomes wider
                  active === index
                    ? "bg-gray-900 dark:bg-white w-4"
                    : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
