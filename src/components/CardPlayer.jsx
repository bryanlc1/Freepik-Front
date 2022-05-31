import './CardPlayer.css'
const CardPlayer = ({ player }) => {
	const convertPosition = (position) => {
		switch (position) {
			case 'AttackingMidfield':
				return 'AM'
			case 'CentralMidfield':
				return 'CM'
			case 'Defender':
				return 'DF'
			case 'DefensiveMidfield':
				return 'DM'
			case 'Forward':
				return 'FWD'
			case 'Goalkeeper':
				return 'GK'
			case 'LeftMidfield':
				return 'LM'
			case 'LeftWinger':
				return 'LW'
			case 'Midfielder':
				return 'MF'
			case 'RightMidfield':
				return 'RM'
			case 'RightWinger':
				return 'RW'
			case 'SecondStriker':
				return 'SS'
			default:
				break
		}
	}

	return (
		<div className="player">
			<h2 className="position">{convertPosition(player.position)}</h2>
			<h3>id: {player.id}</h3>
			<div className="info-header">
				{player.country}
				<img
					src={`https://countryflagsapi.com/png/${player.country}`}
					alt={player.country}
					className="country-flag"
				/>
				Age: <h2 className="age">{player.age}</h2>
				<h2 className="price">{player.price.toLocaleString()}€</h2>
			</div>
		</div>
	)
}

export default CardPlayer
