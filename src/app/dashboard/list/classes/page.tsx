import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { classesData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// temporary data
type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const columns = [
  { header: "Class Name", accessor: "name" },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },

  { header: "Actions", accessor: "action" },
];

const ClassListPage = () => {
  const renderRow = (item: Class) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-notoPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="rounded-full w-7 h-7 flex items-center justify-center bg-notoSky ">
              <Image src={"/edit.png"} alt="" width={16} height={16} />
            </button>
          </Link>
          {/* since a student doesnot have the role to delete or add any data in the
          dashboard, we are giving specific role the data */}
          {role === "admin" && (
            <button className="rounded-full w-7 h-7 flex items-center justify-center bg-notoPurple ">
              <Image src={"/delete.png"} alt="" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white rounded-md m-4 p-4 flex-1 mt-0">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            {/* 1st button */}
            <button className="w-7 h-7 items-center justify-center bg-notoYellow rounded-full flex">
              <Image src={"/filter.png"} alt="" width={14} height={14} />
            </button>
            {/* 2nd button */}
            <button className="w-7 h-7 items-center justify-center bg-notoYellow rounded-full flex">
              <Image src={"/sort.png"} alt="" width={14} height={14} />
            </button>
            {/* 3rd button */}
            {role === "admin" && (
              <button className="w-7 h-7 items-center justify-center bg-notoYellow rounded-full flex">
                <Image src={"/plus.png"} alt="" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* List/middlepart */}
      {/* data comes from the data.lib file */}
      <Table columns={columns} renderRow={renderRow} data={classesData} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default ClassListPage;
