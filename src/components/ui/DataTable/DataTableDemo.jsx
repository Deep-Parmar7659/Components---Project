import DataTable from "./DataTable";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function DataTableDemo() {
  const columns = ["Name", "Email", "Role"];
  const data = [
    { name: "Deep", email: "dp@gmail.com", role: "Developer" },
    { name: "Sarah", email: "sarah@mail.com", role: "Editor" },
    { name: "Mike", email: "mike@mail.com", role: "User" },
  ];

  return (
    // Removed extra padding, fits card better
    <div className="w-full">
      <DataTable>
        <TableHeader columns={columns} />
        <tbody>
          {data.map((row, index) => (
            <TableRow key={index} row={row} />
          ))}
        </tbody>
      </DataTable>
    </div>
  );
}

export default DataTableDemo;
