"use client";
import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  // Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tues",
    present: 70,
    absent: 30,
  },
  {
    name: "Wed",
    present: 50,
    absent: 40,
  },
  {
    name: "Thur",
    present: 55,
    absent: 40,
  },
  {
    name: "Fri",
    present: 80,
    absent: 20,
  },
];

const AttendenceChart = () => {
  return (
    <div className="rounded-xl bg-white h-full px-4">
      <div className="flex justify-between py-2 items-center">
        {/* Top TITLE */}
        <h1 className="font-semibold text-lg">Attendence</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* BARGRAPH */}

      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#C3EBFA"
            // activeBar={<Rectangle fill="pink" stroke="blue" />}
            legendType="circle"
            radius={[10, 10, 0, 0]} //for rounded shape of the bar
          />
          <Bar
            dataKey="absent"
            fill="#FAE27C"
            // activeBar={<Rectangle fill="gold" stroke="purple" />}
            legendType="circle"
            radius={[10, 10, 0, 0]} //for rounded shape of the bar
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendenceChart;
