const TemplateSearch = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search templates..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
    />
  );
};

export default TemplateSearch;
