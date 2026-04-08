// FilterDropdown → select
const FilterDropdown = ({ filter, setFilter }) => {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="w-full px-4 py-3 rounded-xl border dark:bg-gray-800 dark:border-gray-700 focus:outline-none"
    >
      <option value="All">All</option>
      <option value="Basic">Basic</option>
      <option value="Advanced">Advanced</option>
    </select>
  );
};

export default FilterDropdown;
