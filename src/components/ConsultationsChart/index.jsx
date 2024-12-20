"use client";
import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ConsultationsChart = ({ data }) => {
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
      <ComposedChart
        width={500}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" vertical={false} />
        <XAxis dataKey="day" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="incoming"
          fill="#8A94A6"
          stroke="#8A94A6"
          strokeDasharray="8 2"
          strokeWidth={2}
          dot={null}
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="answered"
          stroke="#15B79F"
          dot={null}
        />
        <Bar dataKey="expertsOnline" barSize={20} fill="#FFE587" />
      </ComposedChart>
    </div>
  );
};

export default ConsultationsChart;
