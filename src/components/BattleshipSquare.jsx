import { useState } from "react"

const BattleshipSquare = () => {
    const [state, setState] = useState(null)

    return (
        <button 
            className="square"
            onClick={() => setState('X')}
        >
            {state}
        </button>
    )
}

export default BattleshipSquare
