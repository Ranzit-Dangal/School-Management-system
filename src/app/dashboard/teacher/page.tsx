import Announcement from "@/app/components/Announcement";
import BigCalendar from "@/app/components/BigCalendar";
import React from "react";

const TeacherPage = () => (
  <div className="flex-1 flex gap-4 flex-col xl:flex-row p-4">
    {/* LEFT */}
    <div className="w-full xl:w-2/3">
      {/* h-full to h-screen */}
      <div className="h-screen p-6 rounded-md bg-white">
        <h1 className="text-xl font-semibold">Schedule</h1>
        <BigCalendar />
      </div>
    </div>
    {/* RIGHT */}
    <div className="w-full xl:w-1/3 flex flex-col gap-8">
      <Announcement />
    </div>
  </div>
);

export default TeacherPage;
