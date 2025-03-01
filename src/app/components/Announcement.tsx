import React from "react";

const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl">Announcements</h1>
        <h2 className="text-xs text-gray-400">View All</h2>
      </div>
      <div className="flex flex-col pt-4 gap-4">
        {" "}
        {/* 1st Announcemet */}
        <div className="rounded-md p-4 bg-notoSkyLight">
          <div className="flex justify-between items-center">
            <h1 className="font-medium">Dashain and Tihar</h1>
            <span className="text-xs bg-white p-1 rounded-md text-gray-400">
              2025-02-25
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Holiday for 15 days</p>
        </div>
        {/* 2nd Announcemet */}
        <div className="rounded-md p-4 bg-notoYellowLight">
          <div className="flex justify-between items-center">
            <h1 className="font-medium">Winter Vacation</h1>
            <span className="text-xs bg-white p-1 rounded-md text-gray-400">
              2025-02-25
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Holiday for 15 days</p>
        </div>
        {/* 3rd Announcemet */}
        <div className="rounded-md p-4 bg-notoPurpleLight">
          <div className="flex justify-between items-center">
            <h1 className="font-medium">Summer Vacation</h1>
            <span className="text-xs bg-white p-1 rounded-md text-gray-400">
              2025-02-25
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Holiday for 15 days</p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
