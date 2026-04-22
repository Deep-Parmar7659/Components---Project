const CodeBlock = ({ code, fileName }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative p-4 text-sm text-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-400">{fileName}</span>

        <button
          onClick={handleCopy}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
        >
          Copy
        </button>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
