import React from "react";

const BlogTemplate = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* HERO */}
      <section className="px-4 py-12 text-center bg-gray-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold">Our Blog ✍️</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Insights, tutorials, and latest trends.
        </p>
      </section>

      {/* BLOG POSTS — always stacked */}
      <section className="px-4 py-8 space-y-4">
        {[1, 2, 3, 4].map((post) => (
          <div
            key={post}
            className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow"
          >
            <h2 className="text-sm font-semibold">Blog Post Title {post}</h2>
            <p className="mt-1 text-xs text-gray-400">
              April 19, 2026 · 5 min read
            </p>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">
              Short description of the blog post content goes here...
            </p>
            <button className="mt-2 text-pink-500 text-xs font-medium">
              Read More →
            </button>
          </div>
        ))}
      </section>

      {/* CATEGORIES — horizontal scroll chips */}
      <section className="px-4 pb-6">
        <h3 className="text-sm font-semibold mb-3">Categories</h3>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {["Tech", "Design", "Business", "Tutorial", "React", "CSS"].map(
            (cat, i) => (
              <span
                key={i}
                className="shrink-0 px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 rounded-full text-xs cursor-pointer"
              >
                {cat}
              </span>
            ),
          )}
        </div>
      </section>

      {/* RECENT POSTS */}
      <section className="px-4 pb-8">
        <h3 className="text-sm font-semibold mb-3">Recent Posts</h3>
        <div className="space-y-2">
          {[
            "How to build UI components",
            "React Tips for Beginners",
            "Tailwind CSS Guide",
          ].map((post, i) => (
            <div
              key={i}
              className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-xs text-gray-600 dark:text-gray-300 hover:text-pink-500 cursor-pointer"
            >
              → {post}
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-4 py-12 bg-pink-500 text-white text-center">
        <h2 className="text-xl font-bold">Subscribe to Newsletter</h2>
        <p className="mt-2 text-xs">
          Get latest updates directly to your inbox.
        </p>
        <div className="mt-5 flex flex-col gap-2 max-w-xs mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg text-gray-900 text-sm focus:outline-none"
          />
          <button className="w-full px-4 py-2 bg-white text-pink-500 font-semibold rounded-lg text-sm">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogTemplate;
