import { useState } from "react"
import Square from "./Square"


const TicTacToeBoard = () => {
    const [nextPlayer, setNextPlayer] = useState('Next player: X')
    const [piece, setPiece] = useState({squares: Array(9).fill(null)}) // ?

    // function renderSquare(i) {
    //     return <Square />
    // }TODO props i st på varje ruta?
    function renderSquare(i) {
        return (
            <Square value={i} /> // WIP. efter arrowfunct i dok
        ) // lift state up i dok
    }
    // function render() {
    //     const playerstatus = 'Next player: X'
    // }har i st usestate?
    function decideNextPlayer() {
        let sth = {squares: Array(9).fill(null)} // ?
    }

    return (
        <section>
            <div className="status"> {nextPlayer} </div>
            <div className="board-row">
                {/* <Square /> */}
                {/* <Square value={i} />
                <Square value={i} />
                <Square value={i} /> */}
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                {/* <Square value={i}/>
                <Square value={i}/>
                <Square value={i}/> */}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
                {/* <Square value={i}/>
                <Square value={i}/>
                <Square value={i}/> */}
            </div>
        </section>
    )
}

export default TicTacToeBoard