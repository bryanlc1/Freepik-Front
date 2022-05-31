import React from "react";
import { Card } from "react-bootstrap"
import usePlayer from '../hooks/usePlayer';

import './CardPlayer.css';
const CardPlayer = () => {

    const {player}=usePlayer();
    console.log(player)
    return(
        <>
        <Card className="cardPlayer">
        <Card.Body className="bodyCard">
                <span className="iconPlayer">{player.id}</span>
                <span className="itemCard">{player.edge}</span>
                <span>{player.country}</span>
                <span>{player.position}</span>
        </Card.Body>
        </Card>
        </>
    )
}

export default CardPlayer;