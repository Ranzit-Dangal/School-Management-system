import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { resultsData, role } from "@/lib/data";
import Image from "next/image";
import React from "react";

// temporary data
type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  type: "exam" | "assignment";
  date: string;
  score: number;
};

const columns = [
  { header: "Subject Name", accessor: "name" },
  {
    header: "Student",
    accessor: "student",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },

  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },

  { header: "Actions", accessor: "action" },
];

const ResultListPage = () => {
  const renderRow = (item: Result) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-notoPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.score}</td>
      <td>{item.student}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
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
              {" "}
              <FormModal table="result" type="update" data={item} />
              <FormModal table="result" type="delete" id={item.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
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
              <FormModal table="result" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* List/middlepart */}
      {/* data comes from the data.lib file */}
      <Table columns={columns} renderRow={renderRow} data={resultsData} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default ResultListPage;
