const Section = ({ children, className = "", container = true }) => {
  return (
    <section
      className={`
        relative py-24 overflow-hidden
        dark:bg-gray-900 text-white 
        ${className}
      `}
    >
      {/* GLOW EFFECT (like Hero) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 w-150 h-150 
        blur-3xl rounded-full -translate-x-1/2"
        ></div>
      </div>

      {/* CONTENT */}
      <div className={`relative z-10 ${container ? "container-custom" : ""}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
