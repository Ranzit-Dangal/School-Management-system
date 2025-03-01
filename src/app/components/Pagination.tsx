import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center p-4 text-gray-500">
      {/* for previous button */}
      <button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      {/* for pagination buttons */}
      <div className="flex items-center gap-2 text-sm">
        <button className="rounded-sm px-2 bg-notoSky">1</button>
        <button className="rounded-sm px-2 ">2</button>
        <button className="rounded-sm px-2">3</button>
        <button className="rounded-sm px-2">...</button>
        <button className="rounded-sm px-2">10</button>
      </div>
      {/* for next button */}
      <button className="py-2 px-4 rounded-md bg-slate-200 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Prev
      </button>
    </div>
  );
};

export default Pagination;
