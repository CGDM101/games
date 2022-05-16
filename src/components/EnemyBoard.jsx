import BattleshipSquare from "./BattleshipSquare"
import FilledBattleshipSquare from "./FilledBattleshipSquare"

const EnemyBoard = () => {
    return (
        <section>
            <div className="board-row">
                <BattleshipSquare />
                <FilledBattleshipSquare />
                <FilledBattleshipSquare />
                <FilledBattleshipSquare />
                <BattleshipSquare />
            </div>
            <div className="board-row">
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
                <FilledBattleshipSquare />
            </div>
            <div className="board-row">
                <BattleshipSquare />
                <FilledBattleshipSquare />
                <FilledBattleshipSquare />
                <BattleshipSquare />
                <FilledBattleshipSquare />
            </div>
            <div className="board-row">
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
                <BattleshipSquare />
                <FilledBattleshipSquare />
            </div>
            <div className="board-row">
                <BattleshipSquare />
                <FilledBattleshipSquare />
                <FilledBattleshipSquare />
                <BattleshipSquare />
                <FilledBattleshipSquare />
            </div>
        </section>
    )
}

export default EnemyBoard