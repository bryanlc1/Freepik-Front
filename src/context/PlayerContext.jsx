import { createContext } from 'react'
import { useState} from 'react'


const playerContext = createContext();

export const PlayerProvider = ({children}) => {
    const [player,setPlayer] = useState({});

    return (
        <playerContext.Provider value={{player,setPlayer}}>
            {children}
        </playerContext.Provider>
    )
}

export default playerContext;
