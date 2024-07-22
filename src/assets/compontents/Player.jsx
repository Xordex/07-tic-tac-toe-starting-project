import { useState } from "react";

export default function ({ children, symbol }) {
    const [isEdit, setEdit] = useState(false);
    const [playerName, setPlayerName] = useState(children);

    return <li>
        <span className="player">
            {!isEdit ? <span className="player-name">{playerName}</span> :
                <input type="text" required value={playerName} onChange={(e) => setPlayerName(e.target.value)} />}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={() => setEdit(edit => !edit)}>{!isEdit ? "Edit" : "Save"}</button>
    </li>;
}