import { useState } from "react";

export default function Player(props) {
  const [isEditing, setIsEditing] = useState();

  const handleEditing = () => {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      props.onChangeName(props.symbol, playerName);
    }
  };

  const [playerName, setPlayerName] = useState(props.name);
  const handleChange = (event) => {
    setPlayerName(event.target.value);
  }

  return (
    <li className={props.isActive && "active"}>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={playerName} onChange={handleChange} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
