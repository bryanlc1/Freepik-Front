import { useState, useEffect } from "react";
import usePlayer from "../hooks/usePlayer";

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

const data = require("../data/train.json");
const sortedData = data.sort((a, b) => a.age - b.age);

const Results = () => {
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  const myPlayer = usePlayer();

  const {
    player: { id, age, country, position, price },
  } = myPlayer;

  useEffect(() => {
    setFilteredPlayers(
      sortedData.filter(
        (item) => item.nation === country && item.position === position
      )
    );
  }, [myPlayer]);

  return (
    <div className="card">
      <ResponsiveContainer width="100%" height={500}>
        <AreaChart
          width="100%"
          data={filteredPlayers}
          margin={{ top: 10, right: 30, left: 14, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" tick={{ fontSize: 12 }} />
          <YAxis
            tick={{ fontSize: 12 }}
            tickFormatter={(tick) => {
              return tick.toLocaleString();
            }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <ReferenceDot x={age} y={price} r={20} fill="red" stroke="none" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Results;
