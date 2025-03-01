"use client";
import Image from "next/image";
import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#C3EBFA",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#FAE27C",
  },
];

const CountChart = () => {
  return (
    <div className="relative bg-white rounded-xl w-full h-full">
      {/* TITLE */}
      <div className="flex justify-between items-center px-5 py-2">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="w-full h-[69%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src={"/maleFemale.png"}
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[93%]"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-12">
        {/* BOTTOM LEFT */}
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-notoSky gap-16"></div>
          <p className="font-semibold">1,234</p>
          <p className="text-gray-400 text-xs font-bold">Boys (55%)</p>
        </div>
        {/* BOTTOM RIGHT */}
        <div className="">
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 rounded-full bg-notoYellow gap-16"></div>
            <p className="font-semibold">1,234</p>
            <p className="text-gray-400 text-xs font-bold">Girls (45%)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
