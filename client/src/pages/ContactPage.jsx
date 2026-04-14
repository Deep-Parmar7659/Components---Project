import { useState } from "react";
import { useToast } from "../components/ui/Toast/useToast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);

  // ✅ Handle input + live validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => {
      const newErrors = { ...prev };

      if (name === "email") {
        if (!value.trim()) newErrors.email = "required";
        else if (!/\S+@\S+\.\S+/.test(value)) newErrors.email = "invalid";
        else delete newErrors.email;
      }

      if (name === "name") {
        if (!value.trim()) newErrors.name = "required";
        else delete newErrors.name;
      }

      if (name === "message") {
        if (!value.trim()) newErrors.message = "required";
        else delete newErrors.message;
      }

      return newErrors;
    });
  };

  // ✅ Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "required";

    if (!formData.email.trim()) newErrors.email = "required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "invalid";

    if (!formData.message.trim()) newErrors.message = "required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      addToast("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Have questions, feedback, or want to collaborate? Fill out the form
            and we’ll get back to you.
          </p>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>📧 support@yourwebsite.com</p>
            <p>🌐 www.yourwebsite.com</p>
            <p>📍 India</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-2 rounded-lg border pr-10
                    ${errors.name ? "border-red-500" : "border-gray-300"}
                    dark:border-gray-600 bg-white dark:bg-gray-900 
                    text-gray-900 dark:text-white focus:outline-none focus:ring-2 
                    ${errors.name ? "focus:ring-red-500" : "focus:ring-blue-500"}
                  `}
                />

                {errors.name && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                    ⚠
                  </span>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>

              <div className="relative">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 rounded-lg border pr-10
                    ${errors.email ? "border-red-500" : "border-gray-300"}
                    dark:border-gray-600 bg-white dark:bg-gray-900 
                    text-gray-900 dark:text-white focus:outline-none focus:ring-2 
                    ${errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"}
                  `}
                />

                {errors.email && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                    ⚠
                  </span>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>

              <div className="relative">
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className={`w-full px-4 py-2 rounded-lg border pr-10
                    ${errors.message ? "border-red-500" : "border-gray-300"}
                    dark:border-gray-600 bg-white dark:bg-gray-900 
                    text-gray-900 dark:text-white focus:outline-none focus:ring-2 
                    ${errors.message ? "focus:ring-red-500" : "focus:ring-blue-500"}
                  `}
                />

                {errors.message && (
                  <span className="absolute right-3 top-3 text-red-500">⚠</span>
                )}
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg font-medium transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
