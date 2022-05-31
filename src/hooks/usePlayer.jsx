import  {useContext}from "react";
import playerContext from '../context/PlayerContext'

export default () => {
    return  useContext(playerContext);
}