import { createContext } from "react";
import { useState } from "react";

const playerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState({
    id: 334,
    age: 23,
    country: "Argentina",
    position: "Goalkeeper",
    price: 1000000,
  });
  

  return (
    <playerContext.Provider value={{ player, setPlayer }}>
      {children}
    </playerContext.Provider>
  );
};

export default playerContext;
