// 1) This is your glowing effect component (simplified)
// GlowCard → handles UI + glass effect
import GlowWrapper from "./GlowWrapper";

export default function GlowCard({ children, variant = "default" }) {
  return (
    <GlowWrapper variant={variant}>
      <div
        className={`
        relative z-10 rounded-2xl p-6
        backdrop-blur-2xl
        bg-white/10 dark:bg-white/5
        border border-white/20
        text-gray-800 dark:text-(--text-primary)
        shadow-[0_8px_32px_rgba(0,0,0,0.4)]
        transition-all duration-300
        hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]

        `}
      >
        {children}
      </div>
    </GlowWrapper>
  );
}
