export default function Log(props) {
  const logs = props.turns.map((turn) => {
    return (
      <li key={`${turn.square.row}${turn.square.col}`}>
        Player {turn.player} selected cell {turn.square.row},{turn.square.col}
      </li>
    );
  });

  return <ol id="log">{logs}</ol>;
}
