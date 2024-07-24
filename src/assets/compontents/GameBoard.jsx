import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    const [isClicked, setClicked] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setClicked(prevGameBoard => {
            const upadatedBoard = [...prevGameBoard];
            upadatedBoard[rowIndex][colIndex] = 'X';
            return upadatedBoard;
        });
    }

    return (<ol id="game-board">
        {isClicked.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (<li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>))}
                </ol>
            </li>))}
    </ol>);
}