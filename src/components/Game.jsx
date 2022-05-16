import TicTacToeBoard from "./TicTacToeBoard"

// = tictactoe
const Game = () => {
    return (
        <div className="game">
            <div className="game-board">
                <TicTacToeBoard />
            </div>
            <div className="game-info">
                <div> status </div>
                <ol> tdod </ol>
            </div>
        </div>
    )
}

export default Game