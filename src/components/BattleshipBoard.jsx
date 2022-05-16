import { useState } from "react"
import EnemyBoard from './EnemyBoard'
import YouBoard from './YouBoard'

const BattleshipBoard = () => {
    const [occupied, setOccupied] = useState(false)

    return (
        <div>
            <section className="your-board">
                <p> YOU </p>
                <YouBoard /> 
            </section>

            <section className="enemy-board">
                <p> ENEMY </p>
                <EnemyBoard />
            </section>
        </div>
    )
}

export default BattleshipBoard