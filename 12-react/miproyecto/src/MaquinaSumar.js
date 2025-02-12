import { useState } from "react";

// Máquina de sumar de Carmina

function MaquinaSumar() {
   
    // El setNumero pienso que es como un setter
    // const [sumando1, setSumando1] = useState();
    // const [sumando2, setSumando2] = useState();
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [res, setRes] = useState();

    const modificar1 = (e) => {
        setNum1(e.target.value);
    }
    const modificar2 = (e) => {
        setNum2(e.target.value);
    }

    const sumar = (e) => {
        setRes(Number(num1)+Number(num2));
    }

    return (
        <>
            <input value={num1} onChange={modificar1}/>
            +
            <input value={num2} onChange={modificar2}/>
            =
            <input value={res} readOnly/>
            <button onClick={sumar}>Sumar</button>
        </>
    )
}

export default MaquinaSumar