import React from "react";

const EcommerceTemplate = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* HERO */}
      <section className="px-6 py-16 text-center bg-gray-100 dark:bg-gray-800">
        <h1 className="text-3xl md:text-5xl font-bold">
          Shop the Latest Trends 🛍️
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300">
          Discover amazing products at unbeatable prices.
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-xl text-sm md:text-base">
          Shop Now
        </button>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Categories</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["Clothing", "Electronics", "Shoes", "Accessories"].map((cat, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-pink-100 dark:bg-pink-900 rounded-full text-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* PRODUCTS — 1 col SM, 2 col MD, 3 col LG */}
      <section className="px-6 py-12 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Featured Products
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow"
            >
              <div className="h-36 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <h3 className="mt-3 font-semibold text-sm md:text-base">
                Product {item}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">$29.99</p>
              <button className="mt-3 w-full px-4 py-2 bg-pink-500 text-white rounded-lg text-sm">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* OFFER */}
      <section className="px-6 py-16 text-center bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
        <h2 className="text-2xl md:text-3xl font-bold">Special Offer 🎉</h2>
        <p className="mt-4 text-sm md:text-base">
          Get 50% off on selected items.
        </p>
        <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-xl text-sm md:text-base hover:bg-pink-600">
          Shop Deals
        </button>
      </section>
    </div>
  );
};

export default EcommerceTemplate;
