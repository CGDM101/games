import { useState } from "react"

const Square = (props) => {
    const [state, setState] = useState(null)

    return (
        <button 
            className="square" 
            onClick={() => setState('X')}
        > 
            {state}
            {/* {props.value}  */}
        </button>
    )
}

export default Square