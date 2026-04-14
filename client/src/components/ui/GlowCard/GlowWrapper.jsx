// GlowWrapper → handles glow + animation + mouse tracking.
import { useEffect, useRef } from "react";

export default function GlowWrapper({ children, variant = "default" }) {
  // This gives access to the actual HTML element.
  // Needed to track mouse position.
  const cardRef = useRef(null);

  // Create Variant Style:-
  const variants = {
    default: "from-pink-500 via-yellow-500 to-blue-500",
    pink: "from-pink-500 via-rose-500 to-red-500",
    blue: "from-blue-500 via-cyan-500 to-indigo-500",
    green: "from-green-400 via-emerald-500 to-lime-500",
  };

  // Runs when Component Load
  // Used to attach mousemove event
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // getBoundingClientRect() :- Gets card position
    // e.clientX - rect.left :- Mouse X inside card
    // e.clientY - rect.top :- Mouse Y inside card
    // --x, --y :- Store position in CSS variables
    // Flow :- Mouse moves → JS calculates position → CSS uses it → Glow follows cursor
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    };

    // Event Listener :- Tracks mouse movement continuously
    card.addEventListener("mousemove", handleMouseMove);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="p-0.5 rounded-2xl">
      <div ref={cardRef} className="relative group rounded-2xl isolate">
        {/* 🔥 SAFE GRADIENT GLOW */}
        {/* -inset-1 → slightly outside card 
        bg-gradient → colorful border \
        animate-spin-slow → rotation */}
        <div
          className="
          absolute -inset-0.5 rounded-2xl
          bg-linear-to-r from-pink-500 via-yellow-500 to-blue-500
          opacity-60 blur-md
          "
        />

        {/* 🔥 BLUR GLOW */}
        <div
          className="
          absolute -inset-1 rounded-2xl
          bg-linear-to-r from-pink-500 via-yellow-500 to-blue-500
          opacity-30 blur-xl
          "
        />

        {/* 🔥 MOUSE FOLLOW GLOW */}
        <div
          className="
          pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300
          "
          style={{
            background: `
              radial-gradient(
                200px circle at var(--x) var(--y),
                rgba(236,72,153,0.3),
                transparent 40%
              )
            `,
          }}
        />

        {children}
      </div>
    </div>
  );
}
