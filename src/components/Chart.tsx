import React from "react";
import { BarChart, Bar } from "recharts";

type PropsType = {
  data: {}[];
};

function Chart({ data }: PropsType) {
  return (
    <div>
      <BarChart width={600} height={300} data={data}>
        <Bar dataKey="uv" fill="#8884d8" />
        <Bar dataKey="pv" fill="#82ca9d" />
        <Bar dataKey="amt" fill="#ffc658" />
      </BarChart>
    </div>
  );
}

export default Chart;
