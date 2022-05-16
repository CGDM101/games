import { useState } from "react"
import Square from "./Square"


const TicTacToeBoard = () => {
    const [nextPlayer, setNextPlayer] = useState('Next player: X')
    const [piece, setPiece] = useState({squares: Array(9).fill(null)}) // ?

    // function renderSquare(i) {
    //     return <Square />
    // }TODO props i st på varje ruta
    function renderSquare(i) {
        return (
            <Square value={i} /> // WIP
        )
    }
    // function render() {
    //     const playerstatus = 'Next player: X'
    // }har i st usestate?

    return (
        <section>
            <div className="status"> {nextPlayer} </div>
            <div className="board-row">
                {/* <Square /> */}
                {/* <Square value={1} />
                <Square value={2} />
                <Square value={3} /> */}
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                {/* <Square value={4}/>
                <Square value={5}/>
                <Square value={6}/> */}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
                {/* <Square value={7}/>
                <Square value={8}/>
                <Square value={9}/> */}
            </div>
        </section>
    )
}

export default TicTacToeBoard