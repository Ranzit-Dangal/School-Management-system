import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// temporary data
type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  // since a teacher can have more than 1 subject
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  { header: "Info", accessor: "info" },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  { header: "Actions", accessor: "action" },
];

const TeacherListPage = () => {
  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-notoPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          //   if md screen hidden and if xl screen the visible again
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">{item?.email}</p>
        </div>
      </td>
      {/* another table data */}
      <td className="hidden md:table-cell">{item.teacherId}</td>
      {/* since subjects and classes have multiple values */}
      <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="rounded-full w-7 h-7 flex items-center justify-center bg-notoSky ">
              <Image src={"/view.png"} alt="" width={16} height={16} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
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
            <button className="w-7 h-7 items-center justify-center bg-notoYellow rounded-full flex">
              <Image src={"/plus.png"} alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* List/middlepart */}
      {/* data comes from the data.lib file */}
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
