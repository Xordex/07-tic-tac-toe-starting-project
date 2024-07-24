import { useState } from "react";
let players = [];

export function Player({ children, symbol, isActive }) {
    const [isEdit, setEdit] = useState(false);
    const [playerName, setPlayerName] = useState(children);

    { symbol === "X" ? players[0] = playerName : players[1] = playerName }

    return <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {!isEdit ? <span className="player-name">{playerName}</span> :
                <input type="text" required value={playerName} onChange={(e) => setPlayerName(e.target.value)} />}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={() => setEdit(edit => !edit)}>{!isEdit ? "Edit" : "Save"}</button>
    </li>;
}

export function Players() {
    return players;
};