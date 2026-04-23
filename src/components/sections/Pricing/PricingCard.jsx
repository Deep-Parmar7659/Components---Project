// 3) Reusable pricing card component
// Create props, dynamic rendering, conditional UI.
export default function PricingCard({
  title,
  price,
  features,
  popular,
  billing,
}) {
  return (
    <div
      className={`relative p-8 rounded-xl border transition duration-300 hover:-translate-y-2
      bg-(--card-bg) border-(--card-border)
      ${popular ? "md:scale-105" : ""}`}
    >
      {popular && (
        <span className="absolute top-4 right-4 text-xs font-medium px-3 py-1 rounded-full bg-(--text-primary) text-(--bg-main)">
          Most Popular
        </span>
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold text-(--text-primary)">{title}</h3>

      {/* Price */}
      <div className="mt-4">
        <span className="text-4xl font-bold text-(--text-primary)">
          ${price}
        </span>
        <span className="ml-1 text-(--text-secondary)">
          /{billing === "monthly" ? "month" : "year"}
        </span>
      </div>

      {/* Features */}
      <ul className="mt-6 space-y-3 text-(--text-secondary)">
        {features.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-(--accent)">✔</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="mt-8 w-full py-3 rounded-lg font-medium btn-primary">
        Get Started
      </button>
    </div>
  );
}
