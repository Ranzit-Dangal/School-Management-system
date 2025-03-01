import Announcement from "@/app/components/Announcement";
import BigCalendar from "@/app/components/BigCalendar";
import EventCalender from "@/app/components/EventCalender";
import React from "react";

const StudentPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full p-4 rounded-md bg-white">
          <h1 className="text-xl font-semibold">Schedule (3A)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        {/* EVENT CALENDER */}
        <EventCalender />
        <Announcement />
      </div>
    </div>
  );
};

export default StudentPage;
