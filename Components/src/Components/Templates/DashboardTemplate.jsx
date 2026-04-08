const DashboardTemplate = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-1 bg-gray-800 p-6 rounded-xl text-white">
        Sidebar
      </div>

      <div className="col-span-3 space-y-6">
        <div className="bg-gray-800 p-6 rounded-xl text-white">Stats Cards</div>

        <div className="bg-gray-800 p-6 rounded-xl text-white">
          Table Section
        </div>
      </div>
    </div>
  );
};

export default DashboardTemplate;
