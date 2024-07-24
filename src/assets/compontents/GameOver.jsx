export default function GameOver({ winner, restart, names }) {
    return <div id="game-over">
        <h2>Game Over!</h2>
        {winner ? <p>{winner === "X" ? names[0] : names[1]} won!</p> : <p>Remis</p>}
        <p><button onClick={restart}>Rematch!</button></p>
    </div>
}