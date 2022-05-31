import CardPlayer from '../components/CardPlayer'

import usePlayer from '../hooks/usePlayer'

import Container from 'react-bootstrap/Container'

function Players() {
	const { myPlayers } = usePlayer()

	return (
		<Container className="contpage">
			<div className="players-layout">
				{myPlayers.length
					? myPlayers.map((player) => <CardPlayer key={player.id} player={player} />)
					: 'You not have any player'}
			</div>
		</Container>
	)
}

export default Players
