import s from "./game.module.scss";
import { GamePlayers } from "./game-players";
import { GameTitle } from "./game-title";
import { GameField } from "./game-field";

export default function Game() {
  return (
    <div className={s.app}>
      <div>
        <GameTitle />
        <GamePlayers />
      </div>
      <GameField />
    </div>
  );
}
