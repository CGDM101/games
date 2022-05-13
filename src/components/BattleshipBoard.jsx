import { useState } from "react"
import Square from "./Square"

const BattleshipBoard = () => {
    const [occupied, setOccupied] = useState(false)

    return (
        <div>
        <section className="your-board">
            <p> YOU </p>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
        </section>

        <section className="enemy-board">
            <p> ENEMY </p>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
        </section>


        </div>
        

    )
}

export default BattleshipBoard