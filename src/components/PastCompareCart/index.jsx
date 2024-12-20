"use client";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PastCompareCart = ({ data }) => {
  return (
    <div
    className="py-4 h-full flex items-center justify-center"
      style={{
        boxShadow: "0px 5px 22px 0px rgba(0, 0, 0, 0.04)",
        borderRadius: "20px",
        border: "1px solid rgb(238, 238, 238)",
        overflow: "auto"
      }}
    >
      <BarChart
        width={275}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Consultations" fill="#CCFBEF" />
        <Bar dataKey="Orders closed" fill="#134E48" />
      </BarChart>
    </div>
  );
};

export default PastCompareCart;
