import React from 'react'
import Mensaje from "./Mensaje";
import LineaPuntuacion from "./LineaPuntuacion";

export default function Puntuacion({mensaje,puntuacion,score}) {
  return (
    <div className="score-section">
        <br/>
        <Mensaje mensaje={mensaje}/>
        <br/>
        {/*Le pasamos parámetros y los ajustamos en LineaPuntuacion*/}
        <LineaPuntuacion etiqueta="Puntuacion:" id="score" numero={puntuacion}/>
        <LineaPuntuacion etiqueta="PuntuajeAlto" id="highscore" numero={score}/>
        <p>Puntaje Alto: <span id="highscore">{score}</span></p>
    </div>
  )
}
