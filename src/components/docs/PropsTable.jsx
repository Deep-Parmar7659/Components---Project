const PropsTable = ({ propsData }) => {
  if (!propsData || propsData.length === 0) {
    return (
      <p className="text-gray-500 dark:text-gray-400">No props available.</p>
    );
  }

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="p-3 text-left text-sm font-semibold">Prop</th>
            <th className="p-3 text-left text-sm font-semibold">Type</th>
            <th className="p-3 text-left text-sm font-semibold">Description</th>
          </tr>
        </thead>

        <tbody>
          {propsData.map((prop, index) => (
            <tr key={index} className="border-t dark:border-gray-700">
              <td className="p-3 text-sm font-medium text-blue-500">
                {prop.name}
              </td>
              <td className="p-3 text-sm text-gray-600 dark:text-gray-300">
                {prop.type}
              </td>
              <td className="p-3 text-sm text-gray-600 dark:text-gray-300">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;
