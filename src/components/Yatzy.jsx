import { useState } from "react"
import Square from "./Square"

const Yatzy = () => {
    const [dice1, setdice1] = useState('?')
    const [dice2, setdice2] = useState('?')
    const [dice3, setdice3] = useState('?')
    const [dice4, setdice4] = useState('?')
    const [dice5, setdice5] = useState('?')
    function randomise() {
        // när man klickar ska ett nummer komma fram.
    }
    function calculateScore() {
        // räkna vad som finns på alla fem
    }
    return (
        <div className="dices">
            <button className="square" onClick={() => setdice1(4)}> {dice1} </button>
            <button className="square" onClick={() => setdice2(2)}> {dice2} </button>
            <button className="square" onClick={() => setdice3(3)}> {dice3} </button>
            <button className="square" onClick={() => setdice4(1)}> {dice4} </button>
            <button className="square" onClick={() => setdice5(3)}> {dice5} </button>
        </div>
    )
}

export default Yatzy