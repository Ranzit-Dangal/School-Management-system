import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { assignmentsData, role } from "@/lib/data";
import Image from "next/image";
import React from "react";

// temporary data
type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const columns = [
  { header: "Subject Name", accessor: "name" },
  {
    header: "Class",
    accessor: "class",
  },

  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },

  { header: "Actions", accessor: "action" },
];

const AssignmentListPage = () => {
  const renderRow = (item: Assignment) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-notoPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/teachers/${item.id}`}>
            <button className="rounded-full w-7 h-7 flex items-center justify-center bg-notoSky ">
              <Image src={"/edit.png"} alt="" width={16} height={16} />
            </button>
          </Link> */}
          {/* since a student doesnot have the role to delete or add any data in the
          dashboard, we are giving specific role the data */}
          {role === "admin" && (
            // <button className="rounded-full w-7 h-7 flex items-center justify-center bg-notoPurple ">
            //   <Image src={"/delete.png"} alt="" width={16} height={16} />
            // </button>
            <>
              <FormModal table="assignment" type="update" data={item} />
              <FormModal table="assignment" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white rounded-md m-4 p-4 flex-1 mt-0">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">
          All Assignments
        </h1>
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
              // <button className="w-7 h-7 items-center justify-center bg-notoYellow rounded-full flex">
              //   <Image src={"/plus.png"} alt="" width={14} height={14} />
              // </button>
              <FormModal table="assignment" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* List/middlepart */}
      {/* data comes from the data.lib file */}
      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default AssignmentListPage;
