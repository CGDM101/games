import BattleshipBoard from "./BattleshipBoard"

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