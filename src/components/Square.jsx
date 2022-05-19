import { useState } from "react"

const Square = (props) => {
    const [state, setState] = useState(null)
// det är denna state som ska lyftas upp? ('x')
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