import React from "react";

const BlogTemplate = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* HERO */}
      <section className="px-6 py-20 text-center bg-gray-100 dark:bg-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold">Our Blog ✍️</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Insights, tutorials, and latest trends.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="px-6 py-20 max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* BLOG POSTS */}
        <div className="md:col-span-2 space-y-6">
          {[1, 2, 3, 4].map((post) => (
            <div
              key={post}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow"
            >
              <h2 className="text-xl font-semibold">Blog Post {post}</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Short description of the blog post content...
              </p>
              <button className="mt-3 text-pink-500">Read More →</button>
            </div>
          ))}
        </div>

        {/* SIDEBAR */}
        <div className="space-y-8">
          {/* Categories */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h3 className="font-semibold text-lg">Categories</h3>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>Tech</li>
              <li>Design</li>
              <li>Business</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <h3 className="font-semibold text-lg">Recent Posts</h3>
            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <li>How to build UI</li>
              <li>React Tips</li>
              <li>Tailwind Guide</li>
            </ul>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-6 py-20 bg-pink-500 text-white text-center">
        <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
        <p className="mt-4">Get latest updates directly to your inbox.</p>

        <div className="mt-6 flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded text-black"
          />
          <button className="px-4 py-2 bg-white text-pink-500 rounded">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogTemplate;
