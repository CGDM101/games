import BattleshipBoard from "./BattleshipBoard"
import Board from "./Board"

const Battleship = () => {
    return (
        <section className="game">
            <div className="game-board">
                <BattleshipBoard />
            </div>
        </section>
    )
}

export default Battleship