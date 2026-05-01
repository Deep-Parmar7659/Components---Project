const RestaurantTemplate = () => {
  const menuItems = [
    {
      name: "Margherita Pizza",
      price: "$12.99",
      tag: "Bestseller",
      emoji: "🍕",
      desc: "Fresh tomato, mozzarella, basil",
    },
    {
      name: "Grilled Salmon",
      price: "$18.99",
      tag: "Chef's Pick",
      emoji: "🐟",
      desc: "Lemon butter sauce, seasonal veggies",
    },
    {
      name: "Truffle Pasta",
      price: "$15.99",
      tag: "New",
      emoji: "🍝",
      desc: "Creamy truffle oil, parmesan",
    },
    {
      name: "Beef Burger",
      price: "$13.99",
      tag: "",
      emoji: "🍔",
      desc: "Angus beef, cheddar, brioche bun",
    },
    {
      name: "Caesar Salad",
      price: "$9.99",
      tag: "",
      emoji: "🥗",
      desc: "Romaine, croutons, parmesan dressing",
    },
    {
      name: "Tiramisu",
      price: "$7.99",
      tag: "Popular",
      emoji: "🍰",
      desc: "Classic Italian dessert",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      {/* HERO */}
      <section
        className="relative px-6 py-16 text-center"
        style={{
          background: "linear-gradient(135deg, #1a0a00 0%, #3b1a00 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10 text-8xl flex items-center justify-center pointer-events-none">
          🍽️
        </div>
        <span
          className="inline-block px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full mb-3"
          style={{ backgroundColor: "#eab308", color: "#000" }}
        >
          Est. 2018 • Fine Dining
        </span>
        <h1 className="text-3xl font-extrabold mb-2" style={{ color: "#fff" }}>
          La Bella Cucina
        </h1>
        <p
          className="text-sm mb-6 max-w-xs mx-auto"
          style={{ color: "#fde047" }}
        >
          Authentic Italian flavours crafted with passion
        </p>
        <div className="flex justify-center gap-3">
          <button
            className="px-5 py-2 bg-yellow-500 text-black font-bold rounded-full text-sm hover:bg-yellow-400 transition"
            style={{ backgroundColor: "#eab308", color: "#000" }}
          >
            Reserve Table
          </button>
          <button
            className="px-5 py-2 border font-semibold rounded-full text-sm hover:bg-white/10 transition"
            style={{ borderColor: "#fff", color: "#fff" }}
          >
            View Menu
          </button>
        </div>

        {/* Info strip */}
        <div
          className="mt-8 flex justify-center gap-6 text-xs"
          style={{ color: "#fde047" }}
        >
          <span>🕐 Mon–Sun 11AM–11PM</span>
          <span>📍 Downtown, NY</span>
          <span>⭐ 4.9 (2.1k reviews)</span>
        </div>
      </section>

      {/* MENU */}
      <section className="px-4 py-10">
        <h2 className="text-xl font-bold text-center mb-1">Our Menu</h2>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-6">
          Farm-to-table ingredients, chef-crafted daily
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-yellow-400 transition"
            >
              <span className="text-2xl shrink-0">{item.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold truncate">
                    {item.name}
                  </span>
                  <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400 shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {item.desc}
                </p>
                {item.tag && (
                  <span className="inline-block mt-1.5 px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 text-xs rounded-full font-medium">
                    {item.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESERVATION FORM */}
      <section className="px-4 py-10 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-xl font-bold text-center mb-1">Reserve a Table</h2>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-6">
          Book in seconds, dine in style
        </p>
        <div className="max-w-sm mx-auto space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="date"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option>Guests: 1</option>
            <option>Guests: 2</option>
            <option>Guests: 3–4</option>
            <option>Guests: 5+</option>
          </select>
          <button className="w-full py-2.5 bg-yellow-500 text-black font-bold rounded-xl text-sm hover:bg-yellow-400 transition">
            Confirm Reservation
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-4 py-10">
        <h2 className="text-xl font-bold text-center mb-6">What Guests Say</h2>
        <div className="flex flex-col gap-4 max-w-lg mx-auto">
          {[
            {
              name: "Sophia M.",
              text: "Best Italian food I've had outside of Italy. The truffle pasta is divine!",
              stars: 5,
            },
            {
              name: "James K.",
              text: "Romantic ambience, impeccable service. Went for our anniversary and it was perfect.",
              stars: 5,
            },
            {
              name: "Priya S.",
              text: "The tiramisu alone is worth the trip. Will definitely be back!",
              stars: 5,
            },
          ].map((r, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
            >
              <p className="text-xs mb-1 text-yellow-500 dark:text-yellow-400">
                {"⭐".repeat(r.stars)}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                "{r.text}"
              </p>
              <p className="text-xs font-semibold mt-2 text-gray-500 dark:text-gray-400">
                — {r.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-4 py-8 text-center text-xs text-gray-400 border-t border-gray-100 dark:border-gray-800">
        <p className="font-bold text-sm text-gray-700 dark:text-white mb-1">
          La Bella Cucina
        </p>
        <p>123 Olive St, New York, NY · 📞 (212) 555-0198</p>
        <p className="mt-2">© 2025 La Bella Cucina. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RestaurantTemplate;
