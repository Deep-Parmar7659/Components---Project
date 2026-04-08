const Radio = ({ label, name, value, selected, onChange }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        onChange={onChange}
        className="w-4 h-4 accent-blue-500"
      />
      <span className="text-gray-700 dark:text-gray-300">{label}</span>
    </label>
  );
};

export default Radio;
