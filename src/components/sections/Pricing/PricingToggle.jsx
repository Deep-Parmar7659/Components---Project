// Allow users to switch pricing plans dynamically using React state.
function PricingToggle({ billing, setBilling }) {
  return (
    <div className="flex items-center justify-center mb-10">
      <div className="flex p-1 rounded-lg bg-(--card-bg) border border-(--card-border)">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition
            ${
              billing === "monthly"
                ? "bg-(--accent) dark:bg-(--accent) text-white"
                : "text-black! dark:text-(--text-secondary)!"
            }`}
        >
          Monthly
        </button>

        <button
          onClick={() => setBilling("yearly")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition
            ${
              billing === "yearly"
                ? "bg-(--accent) dark:bg-(--accent) text-white"
                : "text-black! dark:text-(--text-secondary)!"
            }`}
        >
          Yearly
        </button>
      </div>

      {/* Save Badge */}
      <span className="ml-3 text-xs font-medium text-(--accent)">Save 20%</span>
    </div>
  );
}

export default PricingToggle;
