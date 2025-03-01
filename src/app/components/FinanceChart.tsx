"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2000,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1500,
  },
  {
    name: "Mar",
    income: 2500,
    expense: 2100,
  },
  {
    name: "Apr",
    income: 4000,
    expense: 3000,
  },
  {
    name: "May",
    income: 3500,
    expense: 3800,
  },
  {
    name: "June",
    income: 3000,
    expense: 4100,
  },
  {
    name: "July",
    income: 5500,
    expense: 6400,
  },
  {
    name: "Aug",
    income: 5000,
    expense: 2400,
  },
  {
    name: "Sep",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Oct",
    income: 5000,
    expense: 3400,
  },
  {
    name: "Nov",
    income: 3500,
    expense: 2400,
  },
  {
    name: "Dec",
    income: 5000,
    expense: 2000,
  },
];
const FinanceChart = () => {
  return (
    <div className="rounded-xl bg-white h-full w-full px-4">
      <div className="flex justify-between py-2 items-center">
        {/* Top TITLE */}
        <h1 className="font-semibold text-lg">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
