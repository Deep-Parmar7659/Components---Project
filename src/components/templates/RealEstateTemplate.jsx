const RealEstateTemplate = () => {
  const properties = [
    {
      name: "Sunset Villa",
      location: "Beverly Hills, CA",
      price: "$1.2M",
      beds: 4,
      baths: 3,
      sqft: "2,800",
      type: "For Sale",
      emoji: "🏡",
      badge: "Featured",
    },
    {
      name: "Downtown Loft",
      location: "New York, NY",
      price: "$4,500/mo",
      beds: 2,
      baths: 2,
      sqft: "1,100",
      type: "For Rent",
      emoji: "🏢",
      badge: "New",
    },
    {
      name: "Garden Cottage",
      location: "Austin, TX",
      price: "$480K",
      beds: 3,
      baths: 2,
      sqft: "1,600",
      type: "For Sale",
      emoji: "🏠",
      badge: "",
    },
    {
      name: "Penthouse Suite",
      location: "Miami, FL",
      price: "$3.5M",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      type: "For Sale",
      emoji: "🏙️",
      badge: "Hot",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* NAV */}
      <nav className="px-6 py-4 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
        <span className="font-extrabold text-lg">
          Casa<span className="text-amber-500">Find</span>
        </span>
        <div className="flex gap-3">
          <button className="px-4 py-1.5 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold hover:border-amber-400 transition">
            List Property
          </button>
          <button className="px-4 py-1.5 bg-amber-500 text-white rounded-full text-xs font-bold hover:bg-amber-600 transition">
            Sign In
          </button>
        </div>
      </nav>

      {/* HERO + SEARCH */}
      <section
        className="px-6 py-14 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #92400e 0%, #d97706 100%)",
        }}
      >
        <h1 className="text-3xl font-extrabold mb-3">Find Your Dream Home</h1>
        <p className="text-sm opacity-90 mb-8">
          10,000+ verified listings across the US
        </p>

        {/* Search Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-3 flex flex-col sm:flex-row gap-2 max-w-lg mx-auto shadow-xl">
          <input
            type="text"
            placeholder="🔍  City, address, or ZIP..."
            className="flex-1 px-3 py-2 text-gray-900 dark:text-white bg-transparent text-sm focus:outline-none"
          />
          <select className="px-3 py-2 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 rounded-xl text-xs border-none focus:outline-none">
            <option>For Sale</option>
            <option>For Rent</option>
          </select>
          <button className="px-5 py-2 bg-amber-500 text-white font-bold rounded-xl text-sm hover:bg-amber-600 transition">
            Search
          </button>
        </div>

        {/* Quick filters */}
        <div className="mt-4 flex justify-center gap-2 flex-wrap">
          {["Any Price", "1–3 Beds", "2+ Baths", "Near Schools"].map((f) => (
            <span
              key={f}
              className="px-3 py-1 bg-white/20 rounded-full text-xs cursor-pointer hover:bg-white/30 transition"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* LISTINGS */}
      <section className="px-4 py-10">
        <div className="flex justify-between items-center mb-6 max-w-3xl mx-auto">
          <div>
            <h2 className="text-xl font-bold">Featured Properties</h2>
            <p className="text-xs text-gray-500">
              {properties.length} listings available
            </p>
          </div>
          <select className="px-3 py-1.5 text-xs border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 focus:outline-none">
            <option>Sort: Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {properties.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:border-amber-400 hover:-translate-y-0.5 transition-all cursor-pointer group"
            >
              {/* Image placeholder */}
              <div
                className="w-full h-36 flex items-center justify-center text-5xl relative"
                style={{
                  background: "linear-gradient(135deg, #fef3c7, #fde68a)",
                }}
              >
                {p.emoji}
                <div className="absolute top-2 left-2 flex gap-1">
                  <span className="px-2 py-0.5 bg-amber-500 text-white text-xs font-bold rounded-full">
                    {p.type}
                  </span>
                  {p.badge && (
                    <span className="px-2 py-0.5 bg-black/60 text-white text-xs font-bold rounded-full">
                      {p.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold">{p.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      📍 {p.location}
                    </p>
                  </div>
                  <p className="text-base font-extrabold text-amber-600">
                    {p.price}
                  </p>
                </div>

                <div className="mt-3 flex gap-4 text-xs text-gray-500">
                  <span>🛏 {p.beds} Beds</span>
                  <span>🚿 {p.baths} Baths</span>
                  <span>📐 {p.sqft} sqft</span>
                </div>

                <button className="mt-3 w-full py-2 text-xs font-semibold border border-amber-300 text-amber-600 rounded-xl hover:bg-amber-50 transition opacity-0 group-hover:opacity-100">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="px-4 py-10 bg-amber-50 dark:bg-amber-900/10">
        <h2 className="text-xl font-bold text-center mb-6">Why CasaFind?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            {
              icon: "✅",
              title: "Verified Listings",
              desc: "Every property is manually verified by our team.",
            },
            {
              icon: "⚡",
              title: "Instant Alerts",
              desc: "Get notified the moment a new match goes live.",
            },
            {
              icon: "🤝",
              title: "Trusted Agents",
              desc: "Work with certified, experienced real estate agents.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="p-5 bg-white dark:bg-gray-900 rounded-2xl border border-amber-100 dark:border-amber-900/30 text-center"
            >
              <span className="text-2xl">{f.icon}</span>
              <h3 className="text-sm font-bold mt-2">{f.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-6 text-center text-xs text-gray-400 border-t border-gray-100 dark:border-gray-800">
        <p className="font-bold text-sm text-gray-700 dark:text-white mb-1">
          CasaFind Real Estate
        </p>
        <p>📧 hello@casafind.com · 📞 1-800-CASA-FIND</p>
        <p className="mt-2">© 2025 CasaFind. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RealEstateTemplate;
