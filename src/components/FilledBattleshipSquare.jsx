// obs dessa finns på fiendebrädet.
// prop?

import { useState } from "react"

const FilledBattleshipSquare = () => {
    const [state, setState] = useState(null)

    return (
        <button 
            className="square"
            // onClick={() => setState('X')}
            onClick={() => setState(':)')}
        >
            {state}
        </button>
    )
}

export default FilledBattleshipSquare