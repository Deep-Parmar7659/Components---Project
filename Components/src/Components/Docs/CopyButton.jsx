import useCopyLimit from "../../Hooks/useCopyLimit";

const CopyButton = ({ code }) => {
  const { handleCopy } = useCopyLimit();

  const onClick = () => {
    const result = handleCopy(code);
    alert(result.message); // 🔁 later replace with toast
  };

  return (
    <button
      onClick={onClick}
      className="px-3 py-1 text-xs rounded bg-primary text-white hover:opacity-80"
    >
      Copy
    </button>
  );
};

export default CopyButton;
