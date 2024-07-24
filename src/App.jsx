import Player from "./assets/compontents/Player"
import GameBoard from "./assets/compontents/GameBoard"
import { useState } from "react"
import Log from "./assets/compontents/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

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

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player symbol={"X"} isActive={activePlayer === 'X'}>Player 1</Player>
          <Player symbol={"O"} isActive={activePlayer === 'O'}>Player 2</Player>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayer={activePlayer} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App