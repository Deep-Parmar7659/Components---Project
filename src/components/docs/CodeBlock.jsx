const CodeBlock = ({ code }) => {
  return (
    <pre
      className="overflow-x-auto p-5 text-sm leading-relaxed"
      style={{
        background: "var(--code-bg)",
        color: "var(--code-text)",
        fontFamily: "'Fira Code', 'Consolas', monospace",
        margin: 0,
        maxHeight: "500px",
        overflowY: "auto",
      }}
    >
      <code>{code}</code>
    </pre>
  );
};

export default CodeBlock;
