import { createContext } from 'react'
import { useState } from 'react'

const playerContext = createContext()

export const PlayerProvider = ({ children }) => {
	const [player, setPlayer] = useState({})
	const [myPlayers, setMyPlayers] = useState([
        {id:1456,
        country:'Spain',
        price:180000,
        position:'Defender',
        age:25},
        {id:1275,
            country:'Ecuador',
            price:190000,
            position:'LeftWinger',
            age:25}
    ])

	return (
		<playerContext.Provider value={{ player, setPlayer, myPlayers, setMyPlayers }}>
			{children}
		</playerContext.Provider>
	)
}

export default playerContext
