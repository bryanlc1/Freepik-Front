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

  console.log("age " + myPlayer.player.age);

  console.log(myPlayer);

  // const [player, setPlayer] = useState({});
  // const [country, setCountry] = useState();
  // const [position, setPosition] = useState();

  // useEffect(() => {
  //   setFilteredPlayers(
  //     sortedData.filter(
  //       (item) => item.nation === country && item.position === position
  //     )
  //   );
  // }, [country, position]);

  useEffect(() => {
    setFilteredPlayers(
      sortedData.filter(
        (item) =>
          item.nation === myPlayer.player.country &&
          item.position === myPlayer.player.position
      )
    );
  }, [myPlayer]);

  // const filteredData = sortedData.filter((item) => item.nation === "France");

  // const countries = new Set();
  // const positions = new Set();

  // data.map((item) => {
  //   countries.add(item.nation);
  // });

  // data.map((item) => {
  //   positions.add(item.position);
  // });

  // const sortedCountries = [...countries].sort();
  // const sortedPositions = [...positions].sort();

  return (
    <AreaChart
      data={filteredPlayers}
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
      <ReferenceDot
        x={myPlayer.player.age}
        y={myPlayer.player.price}
        r={20}
        fill="red"
        stroke="none"
      />
    </AreaChart>
  );
};

export default Results;
