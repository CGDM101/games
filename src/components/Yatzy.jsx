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
    const [twos, setTwos] = useState(0)
    const [threes, setThrees] = useState(0)
    const [fours, setFours] = useState(0)
    const [fives, setFives] = useState(0)
    const [sixes, setSixes] = useState(0)
    
    function CalculateGeneral( ) {
        let dices = [dice1, dice2, dice3, dice4, dice5]
        
        let sumOnes = 0
        let sumTwos = 0
        let sumThrees = 0
        let sumFours = 0
        let sumFives = 0
        let sumSixes = 0
// loopa igenom
        setOnes(sumOnes)
        setTwos(sumTwos)
        setThrees(sumThrees)
        setFours(sumFours)
        setFives(sumFives)
        setSixes(sumSixes)
    }

    function CalculateOnes() {
        let dices = [dice1, dice2, dice3, dice4, dice5]
        let sum = 0
        for (let i = 0; i < dices.length; i++) {
            if(dices[i] == 1) {
                sum += 1
            } else if (i != 1) {
                sum += 0
            }
        }
        setOnes(sum)
    }

    function CalculateTwos() {
        let dices = [dice1, dice2, dice3, dice4, dice5]
        let sum = 0
        for (let i = 0; i < dices.length; i++) {
            if(dices[i] == 2) {
                sum += 1
            } else if (i != 2) {
                sum += 0
            }
        }
        setTwos(sum)
    }
    function CalculateThrees() {
        let dices = [dice1, dice2, dice3, dice4, dice5]
        let sum = 0
        for (let i = 0; i < dices.length; i++) {
            if(dices[i] == 3) {
                sum += 1
            } else if (i != 3) {
                sum += 0
            }
        }
        setThrees(sum)
    }
    function CalculateFours() {
        let dices = [dice1, dice2, dice3, dice4, dice5]
        let sum = 0
        for (let i = 0; i < dices.length; i++) {
            if(dices[i] == 4) {
                sum += 1
            } else if (i != 4) {
                sum += 0
            }
        }
        setFours(sum)
    }
    function CalculateFives() {
        let dices = [dice1, dice2, dice3, dice4, dice5]
        let sum = 0
        for (let i = 0; i < dices.length; i++) {
            if(dices[i] == 5) {
                sum += 1
            } else if (i != 5) {
                sum += 0
            }
        }
        setFives(sum)
    }
    function CalculateSixes() {
        let dices = [dice1, dice2, dice3, dice4, dice5]
        let sum = 0
        for (let i = 0; i < dices.length; i++) {
            if(dices[i] == 6) {
                sum += 1
            } else if (i != 6) {
                sum += 0
            }
        }
        setSixes(sum)
    }



    function CalculateScore() {
        // let sum = dice1 + dice2 + dice3 + dice4 + dice5
        setSum(dice1 + dice2 + dice3 + dice4 + dice5)
    }

    function CalculateYatzy() {
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
            <button className="square" onClick={() => setdice1(6)}> {dice1} </button>
            <button className="square" onClick={() => setdice2(1)}> {dice2} </button>
            <button className="square" onClick={() => setdice3(3)}> {dice3} </button>
            <button className="square" onClick={() => setdice4(3)}> {dice4} </button>
            <button className="square" onClick={() => setdice5(2)}> {dice5} </button>


            <div className="buttons-calc">
                <button onClick={CalculateScore}>Räkna!</button>
                <button onClick={CalculateYatzy}>Är det yatzy? </button>

                <button onClick={CalculateOnes}>räkna ettor</button>
                <button onClick={CalculateTwos}>räkna tvåor</button>
                <button onClick={CalculateThrees}>räkna treor</button>
                <button onClick={CalculateFours}>räkna fyror</button>
                <button onClick={CalculateFives}>räkna femmor</button>
                <button onClick={CalculateSixes}>räkna sexor</button>
            </div>

            <div className="div-calc-output">
                <p>Är det yatzy? {yatzy}</p>
                <p>Summan? {sum}</p>
                <p>Hur många ettor? {ones}</p>
                <p>Hur många tvåor? {twos}</p>
                <p>Hur många treor? {threes}</p>
                <p>Hur många fyror? {fours}</p>
                <p>Hur många femmor? {fives}</p>
                <p>Hur många sexor? {sixes}</p>
            </div>
            
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