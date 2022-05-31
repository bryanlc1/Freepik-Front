import { useState, useEffect } from "react";

import {
  ResponsiveContainer,
  AreaChart,
  defs,
  stop,
  Area,
  LinearGradient,
  XAxis,
  YAxis,
  Bar,
  Legend,
  Tooltip,
  CartesianGrid,
  ReferenceDot,
} from "recharts";

const data = require("./data/train.json");
const sortedData = data.sort((a, b) => a.age - b.age);

// dummy props
const props = {
  country: "France",
  position: "Forward∫",
};

const Results = (props) => {
  const { country, position } = props;

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(
      sortedData.filter(
        (item) => item.nation === country && item.position === position
      )
    );
  }, [country, position]);

  data.map((item) => {
    positions.add(item.position);
  });

  return (
    <AreaChart
      data={filteredData}
      width={1200}
      height={600}
      margin={{ top: 10, right: 30, left: 60, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="age" />
      <YAxis
        tickFormatter={(tick) => {
          return tick.toLocaleString();
        }}
      />
      <Tooltip />
      <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
      {/* { mean && <ReferenceDot {...mean} r={20} fill="red" stroke="none" /> } */}
    </AreaChart>
  );
};
export default Results;
