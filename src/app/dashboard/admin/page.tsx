import Announcement from "@/app/components/Announcement";
import AttendenceChart from "@/app/components/AttendenceChart";
import Card from "@/app/components/Card";
import CountChart from "@/app/components/CountChart";
import EventCalender from "@/app/components/EventCalender";
import FinanceChart from "@/app/components/FinanceChart";
import React from "react";

const AdminPage = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row p-4">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 flex-wrap">
          <Card type="student" />
          <Card type="teacher" />
          <Card type="parent" />
          <Card type="staff" />
        </div>
        {/* MIDDLE CHART */}
        <div className="flex lg:flex-row flex-col gap-4">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendenceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        {/* EVENT CALENDER */}
        <EventCalender />
        <Announcement />
      </div>
    </div>
  );
};

export default AdminPage;
