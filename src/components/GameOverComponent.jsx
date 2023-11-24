export default function GameOver(props) {
  return (
    <div id="game-over">
      <h2>Game</h2>
      {props.winner && <p>{props.winner} won!</p>}
      {!props.winner && <p>It&apos;s draw</p>}
      <p><button onClick={props.onRestart}>Rematch</button></p>
    </div>
  );
}
