import './App.css';
import Iterador from './iterador.js';

// useRef = referencias a otros objetos
// useState = referencias a los VALORES de los objetos (para inputs por ahora)
import React, {useRef, useState} from 'react';
import MaquinaSumar from "./MaquinaSumar.js";

function App() {

  return (
    <>
    {/* Cada vez que ponemos el nombre de la clase entre </>, utilizamos lo que hay en esa clase */}
    <MaquinaSumar/>
    </>
  );
}

export default App;
