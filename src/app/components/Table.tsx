import React from "react";

const Table = ({
  columns,
  renderRow,
  data,
}: {
  // since className is not required className?:string
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    // in order to make the table headers name, address, phone, actions etc.
    <table className="mt-4 w-full">
      <thead className="mt-4 w-full">
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
