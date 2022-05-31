import usePlayer from '../hooks/usePlayer'

import { BsArrowRightShort, BsSquareFill, BsFront, BsShieldFill } from 'react-icons/bs'
import { RiFootballFill } from 'react-icons/ri'
import { Container } from 'react-bootstrap'

function Players() {
	const { myPlayers } = usePlayer()

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
    <Container className="contpage">
      <figure>
        <img
          src="https://img.freepik.com/psd-gratis/diseno-plantilla-futbol-realista_23-2149336857.jpg?t=st=1654003651~exp=1654004251~hmac=f7a7f53c17428dee69e702d417c4b7430d3d2bf71769c5bf089d2e9889bf24f8&w=1380"
          alt="Imagen Futbol"
        />
      </figure>
      <div className="players-layout">
        {myPlayers.length
          ? myPlayers.map((player) => (
              <div key={player.id} className="player">
                <h2 className="position">{convertPosition(player.position)}</h2>
                <div className="info-header">
                  <img
                    src={`https://countryflagsapi.com/png/${player.nation}`}
                    alt={player.nation}
                    className="country-flag"
                  />
                  <h2 className="age">{player.age}</h2>
                  {player.shield ? (
                    <img
                      src={player.shield}
                      alt={player.team}
                      className="shield"
                    />
                  ) : (
                    <BsShieldFill size="40px" className="shield" />
                  )}
                  <h2 className="price">
                    {player.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                    €
                  </h2>
                </div>

                <div className="info-body">
                  <h4>NATIONAL TEAM</h4>
                  <ul>
                    <li>{player.selections_nation}</li>
                  </ul>
                  <h4>CONTINENT</h4>
                  <ul>
                    <li>
                      <RiFootballFill />
                      {player.goal_continent}
                    </li>
                    <li>
                      <RiFootballFill fill="red" />
                      {player.own_goal_continent}
                    </li>
                    <li>
                      <span>
                        <BsArrowRightShort />
                        <RiFootballFill />
                      </span>
                      {player.assist_continent}
                    </li>
                    <li>
                      <BsSquareFill fill="yellow" />
                      {player.yellow_card_continent}
                    </li>
                    <li>
                      <BsFront fill="yellow" />
                      {player.second_yellow_card_continent}
                    </li>
                    <li>
                      <BsSquareFill fill="red" />
                      {player.red_card_continent}
                    </li>
                  </ul>

                  <h4>CHAMPIONSHIP</h4>
                  <ul>
                    <li>
                      <RiFootballFill />
                      {player.goal_champ}
                    </li>
                    <li>
                      <RiFootballFill fill="red" />
                      {player.own_goal_champ}
                    </li>
                    <li>
                      <span>
                        <BsArrowRightShort />
                        <RiFootballFill />
                      </span>
                      {player.assist_champ}
                    </li>
                    <li>
                      <BsSquareFill fill="yellow" />
                      {player.yellow_card_champ}
                    </li>
                    <li>
                      <BsFront fill="yellow" />
                      {player.second_yellow_card_champ}
                    </li>
                    <li>
                      <BsSquareFill fill="red" />
                      {player.red_card_champ}
                    </li>
                  </ul>

                  <h4>CUP</h4>
                  <ul>
                    <li>
                      <RiFootballFill />
                      {player.goal_cup}
                    </li>
                    <li>
                      <RiFootballFill fill="red" />
                      {player.own_goal_cup}
                    </li>
                    <li>
                      <span>
                        <BsArrowRightShort />
                        <RiFootballFill />
                      </span>
                      {player.assist_cup}
                    </li>
                    <li>
                      <BsSquareFill fill="yellow" />
                      {player.yellow_card_cup}
                    </li>
                    <li>
                      <BsFront fill="yellow" />
                      {player.second_yellow_card_cup}
                    </li>
                    <li>
                      <BsSquareFill fill="red" />
                      {player.red_card_cup}
                      iSDYZMMyTPkiFasVqfuAQnWAYcvO
                    </li>
                  </ul>
                </div>
              </div>
            ))
          : "You not have any player"}
      </div>
    </Container>
  );
}

export default Players
