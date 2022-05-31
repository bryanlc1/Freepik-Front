import { createContext } from 'react'
import { useState } from 'react'

const playerContext = createContext()

export const PlayerProvider = ({ children }) => {
	const [player, setPlayer] = useState({})
	const [myPlayers, setMyPlayers] = useState([])

	return (
		<playerContext.Provider value={{ player, setPlayer, myPlayers, setMyPlayers }}>
			{children}
		</playerContext.Provider>
	)
}

export default playerContext
