import BattleshipSquare from "./BattleshipSquare"

const EnemyBoard = () => {
    return (
        <section>
            <div className="board-row">
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
            </div>
            <div className="board-row">
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
            </div>
            <div className="board-row">
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
            </div>
            <div className="board-row">
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
            </div>
            <div className="board-row">
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
            </div>
        </section>
    )
}

export default EnemyBoard