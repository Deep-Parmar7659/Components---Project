// 1) This is your glowing effect component (simplified)
export default function GlowCard({ children }) {
  return (
    <div className="relative group">
      {/* 🌟 Glow Layer */}
      <div
        className="
        absolute -inset-1 rounded-2xl blur-xl

        opacity-30 group-hover:opacity-70
        transition duration-500 ease-out

        bg-linear-to-r
        from-pink-500 via-yellow-500 to-blue-500

        dark:from-blue-500 dark:via-purple-500 dark:to-pink-500
        "
      ></div>

      {/* Card */}
      <div
        className="
        relative rounded-2xl p-6 shadow-md

        bg-white text-black
        dark:bg-gray-900 dark:text-(--text-primary)
        "
      >
        {children}
      </div>
    </div>
  );
}
