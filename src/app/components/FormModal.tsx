"use client";

import Image from "next/image";
import { useState } from "react";
const FormModal = ({
  table,
  type,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-notoYellow"
      : type === "update"
      ? "bg-notoSky"
      : "bg-notoPurple";

  // for when a delete, update or create button is clicked, a modal will open
  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span>
          Are data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="rounded-md bg-red-700 py-2 px-4 text-white border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : (
      "create or update form"
    );
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>

      {/* when the button is clicked, the modal will open (with following conditions) */}
      {/* MODAL */}

      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-md p-4 relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />

            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
