import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, activePlayer, turns }) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    // const [isClicked, setClicked] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setClicked(prevGameBoard => {
    //         const upadatedBoard = [...prevGameBoard];
    //         upadatedBoard[rowIndex][colIndex] = activePlayer;
    //         return upadatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return (<ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (<li key={colIndex}><button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button></li>))}
                </ol>
            </li >))
        }
    </ol >);
}