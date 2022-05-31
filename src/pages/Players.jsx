import React from "react";
import { useEffect, useState } from "react";


import {
  BsArrowRightShort,
  BsSquareFill,
  BsFront,
  BsShieldFill,
} from "react-icons/bs";
import { RiFootballFill } from "react-icons/ri";

import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";

const datajson = require("../data/train.json");

function Players() {

  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      try {
        // const response = await fetch('./data/train.json')
        // const data = await response.json()

        // players = await players.map(async (player) => ({
        //  ...player,
        //  shield: await searchShield(player.team),
        // }))
        // console.log(players)
        setData(
          datajson.sort((player1, player2) => player2.price - player1.price)
            .slice(0, 5)
        );
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getData();
  }, [data]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const convertPosition = (position) => {
    switch (position) {
      case "AttackingMidfield":
        return "AM";
      case "CentralMidfield":
        return "CM";
      case "Defender":
        return "DF";
      case "DefensiveMidfield":
        return "DM";
      case "Forward":
        return "FWD";
      case "Goalkeeper":
        return "GK";
      case "LeftMidfield":
        return "LM";
      case "LeftWinger":
        return "LW";
      case "Midfielder":
        return "MF";
      case "RightMidfield":
        return "RM";
      case "RightWinger":
        return "RW";
      case "SecondStriker":
        return "SS";
      default:
        break;
    }
  };

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <div className="players-layout">
        <h1>da</h1>
        {data &&
          data.map((player) => (
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
          ))}
      </div>

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </>
  );
}

export default Players;
