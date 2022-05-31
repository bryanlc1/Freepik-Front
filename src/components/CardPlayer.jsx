import React from "react";
import { Card } from "react-bootstrap"
import usePlayer from '../hooks/usePlayer';

import './CardPlayer.css';
const CardPlayer = () => {

    const {player}=usePlayer();
    console.log(player)
    return(
        <>
        <Card className="mb-2">
        <span className="iconPlayer">
                    <p>{player.id}</p>
                </span>
        <Card.Body className="bodyCard">
                <span>Edge: {player.age}</span>
                <span>Country: {player.country}</span>
                <span>Position: {player.position}</span>
                <span>Price: {player.price}</span>
        </Card.Body>
        </Card>
        </>
    )
}

export default CardPlayer;