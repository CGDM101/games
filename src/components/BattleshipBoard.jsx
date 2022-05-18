import { useState } from "react"
import EnemyBoard from './EnemyBoard'
import YouBoard from './YouBoard'

const BattleshipBoard = () => {
    const [occupied, setOccupied] = useState(false)

    return (
        <div>
            <section className="your-board">
                <p> YOUR BOARD</p>
                <YouBoard /> 
            </section>

            <section className="enemy-board">
                <p> ENEMY'S BOARD </p>
                <EnemyBoard />
            </section>
        </div>
    )
}

export default BattleshipBoard