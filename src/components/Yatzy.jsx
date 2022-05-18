import { useState } from "react"
import Square from "./Square"

const Yatzy = () => {
    const [dice1, setdice1] = useState('?')
    const [dice2, setdice2] = useState('?')
    const [dice3, setdice3] = useState('?')
    const [dice4, setdice4] = useState('?')
    const [dice5, setdice5] = useState('?')

    const [sum, setSum] = useState(0)
    const [yatzy, setYatzy] = useState('-') // false
    const [ones, setOnes] = useState(0)

    
    function CalculateOnes() {
        let dices = [dice1, dice2, dice3, dice4, dice5]
        let sum = 0
        for (let i = 0; i < dices.length; i++) {
            if(i == 1) {
                sum += 1
                // setOnes(sum + 1)
            } else if (i != 1) {
                sum += 0
                // setOnes(sum)
            }
        }
        setOnes(sum) // Funkar inte: blir alltid 1
    }

    function calculateScore() {
        // let sum = dice1 + dice2 + dice3 + dice4 + dice5
        setSum(dice1 + dice2 + dice3 + dice4 + dice5)
    }

    function calculateYatzy() {
        if (dice1 == dice2 && dice2 == dice3 && dice3 == dice4 && dice4 == dice5) {
            setYatzy('ja') // true
            let yatzy = true
            console.log('true?:', yatzy)
        }
        else if (dice1 != dice2) {
            setYatzy('nej') //true
            console.log('false?:', yatzy)
        }
    }

    return (
        <div className="dices">
            <button className="square" onClick={() => setdice1(5)}> {dice1} </button>
            <button className="square" onClick={() => setdice2(1)}> {dice2} </button>
            <button className="square" onClick={() => setdice3(1)}> {dice3} </button>
            <button className="square" onClick={() => setdice4(5)}> {dice4} </button>
            <button className="square" onClick={() => setdice5(1)}> {dice5} </button>

            <button onClick={calculateScore}>Räkna!</button>
            <button onClick={calculateYatzy}>Är det yatzy? </button>
           <button onClick={CalculateOnes}>räkna ettor</button>
            <p>Är det yatzy? {yatzy}</p>
            <p>Summan? {sum}</p>
            <p>Hur många ettor? {ones}</p>
            <p>Är det kåk? (todo)</p>
            <p>Är det stege? (todo)</p>
            <p>Är det par? (todo)</p>
            <p>Är det triss? (todo)</p>
            <p>Är det fyrtal? (todo)</p>
            <p>Är det två par? (todo)</p>
        </div>
    )
}

export default Yatzy