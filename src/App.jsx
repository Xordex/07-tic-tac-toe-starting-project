import { Player, Players } from "./assets/compontents/Player"
import GameBoard from "./assets/compontents/GameBoard"
import { useState } from "react"
import Log from "./assets/compontents/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./assets/compontents/GameOver";

function App() {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function restartGame() {
    setGameTurns([]);
    setActivePlayer('X')
  }

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // Looking for winner
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && secondSquareSymbol === thirdquareSymbol)
      winner = firstSquareSymbol;
  }
  // End of Looking for winner

  const hasDraw = gameTurns.length === 9 && !winner;

  // Change player and update board
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O'
      }
      const updateTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
      return updateTurns;
    });
  }
  // End of Change player and update board

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player symbol={"X"} isActive={activePlayer === 'X'}>Player 1</Player>
          <Player symbol={"O"} isActive={activePlayer === 'O'}>Player 2</Player>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} restart={restartGame} names={Players()} />}
        <GameBoard onSelectSquare={handleSelectSquare} activePlayer={activePlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App