function Button({ children, type = "button", loading = false, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`w-full py-2 rounded-md text-white transition ${
        loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;
