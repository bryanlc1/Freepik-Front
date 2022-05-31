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

import usePlayer from "../hooks/usePlayer";

const data = require("../data/train.json");
const sortedData = data.sort((a, b) => a.age - b.age);

const dummyProps = {
  id: "abc",
  country: "France",
  position: "Forward",
  price: "1000000",
};

const Results = () => {
  const { myPlayer } = usePlayer();

  console.log(myPlayer);

  const [player, setPlayer] = useState({});
  const [country, setCountry] = useState();
  const [position, setPosition] = useState();
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    setFilteredPlayers(
      sortedData.filter(
        (item) => item.nation === country && item.position === position
      )
    );
  }, [country, position]);

  const filteredData = sortedData.filter((item) => item.nation === "France");

  const countries = new Set();
  const positions = new Set();

  data.map((item) => {
    countries.add(item.nation);
  });

  data.map((item) => {
    positions.add(item.position);
  });

  const sortedCountries = [...countries].sort();
  const sortedPositions = [...positions].sort();

  return (
    <div className="App">
      <h2>{country}</h2>
      <div style={{ width: "100%", height: 600 }}>
        <ResponsiveContainer width="100%" height={600}>
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
            <Area
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <ReferenceDot x={28} y={50000000} r={50} fill="red" stroke="none" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="selector">
        <label for="country-select">Choose a country:</label>
        <select
          id="country-select"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="all">Choose one</option>
          {sortedCountries.map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="selector">
        <label for="position-select">Choose a position:</label>
        <select
          id="position-select"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <option value="all">Choose one</option>
          {sortedPositions.map((position) => (
            <option value={position} key={position}>
              {position}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Results;
