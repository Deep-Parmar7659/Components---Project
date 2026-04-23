// SearchBar → input
const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search components..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full px-4 py-3 rounded-xl border dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
  );
};

export default SearchBar;
