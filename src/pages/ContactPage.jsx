import { useState } from "react";
import { useToast } from "../components/ui/Toast/useToast";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);

  // ✅ FIX 5: Stronger email regex (catches more invalid formats)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // ✅ Live validation on every keystroke
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => {
      const newErrors = { ...prev };

      if (name === "email") {
        if (!value.trim()) newErrors.email = "required";
        else if (!emailRegex.test(value)) newErrors.email = "invalid";
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

  // ✅ Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation check on submit
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "required";
    if (!formData.email.trim()) newErrors.email = "required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "invalid";
    if (!formData.message.trim()) newErrors.message = "required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // ✅ FIX 1: API credentials read from .env — never hardcoded
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const adminTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN;
    const replyTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_REPLY;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Step 1: Send notification email to admin (you)
    emailjs
      .send(
        serviceId,
        adminTemplate,
        {
          from_name: formData.name, // {{from_name}} in your EmailJS template
          from_email: formData.email, // {{from_email}} in your EmailJS template
          message: formData.message, // {{message}} in your EmailJS template
        },
        publicKey,
      )
      .then(() => {
        // Step 2: Send auto-reply to user
        return emailjs.send(
          serviceId,
          replyTemplate,
          {
            to_name: formData.name, // {{to_name}} in your EmailJS template
            email: formData.email, // {{email}} in your EmailJS template — must be set as "To Email" field
            message: formData.message,
          },
          publicKey,
        );
      })
      .then(() => {
        addToast("Message sent successfully! ✅");
        // Reset form after success
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        addToast("Failed to send message. Please try again ❌");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE — Contact Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Have questions, feedback, or want to collaborate? Fill out the form
            and we'll get back to you.
          </p>

          {/* ✅ FIX 2: Replace these with your actual real details */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>📧 parmardeep9140@gmail.com</p>
            <p>🌐 www.tailwindtap.com</p>
            <p>📍 India</p>
          </div>
        </div>

        {/* RIGHT SIDE — Form */}
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            {/* Name Field */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full px-4 py-2 rounded-lg border
                  ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}
                  dark:border-gray-600 bg-white dark:bg-gray-900
                  text-gray-900 dark:text-white focus:outline-none focus:ring-2`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">Name is required</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 rounded-lg border
                  ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}
                  dark:border-gray-600 bg-white dark:bg-gray-900
                  text-gray-900 dark:text-white focus:outline-none focus:ring-2`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email === "required"
                    ? "Email is required"
                    : "Please enter a valid email address"}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className={`w-full px-4 py-2 rounded-lg border
                  ${errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}
                  dark:border-gray-600 bg-white dark:bg-gray-900
                  text-gray-900 dark:text-white focus:outline-none focus:ring-2`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  Message cannot be empty
                </p>
              )}
            </div>

            {/* ✅ FIX 3: Button disabled while loading to prevent spam */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg font-medium transition
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-pink-500 hover:bg-pink-600 text-white cursor-pointer"
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
