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

const data = require("../data/train.json");
const sortedData = data.sort((a, b) => a.age - b.age);

// dummy props
// const dummyProps = {
//   country: "France",
//   position: "Forward",
// };

const Results = () => {
  const [country, setCountry] = useState();
  const [position, setPosition] = useState();
  const [filteredByCountry, setFilteredByCountry] = useState([]);
  const [filteredByCountryAndPosition, setFilteredByCountryAndPosition] =
    useState([]);

  useEffect(() => {
    setFilteredByCountry(sortedData.filter((item) => item.nation === country));
  }, [country]);

  useEffect(() => {
    setFilteredByCountryAndPosition(
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

  console.log(positions);

  return (
    <div className="App">
      <h2>{country}</h2>

      <AreaChart
        // data={sortedData}
        data={filteredByCountryAndPosition}
        width={1200}
        height={600}
        margin={{ top: 10, right: 30, left: 60, bottom: 0 }}
      >
        {/* <defs>
          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs> */}
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="age" />
        <YAxis
          tickFormatter={(tick) => {
            return tick.toLocaleString();
          }}
        />
        <Tooltip />
        <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>

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
