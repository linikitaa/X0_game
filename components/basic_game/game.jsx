import { useGameHook } from "./useGameState";
import s from "../../styles/game.module.scss";
import { GameInfo } from "./game_info";
import { GameCell } from "./game_cell";

export function Game() {
  const { winner, cells, currentStep, handleCellClick, handleClear } =
    useGameHook();

  return (
    <div className={s.game}>
      <GameInfo winner={winner} cells={cells} currentStep={currentStep} />
      <GameCell
        cells={cells}
        winner={winner}
        handleCellClick={handleCellClick}
      />
      <button className={s.reset} onClick={handleClear}>
        Сбросить
      </button>
    </div>
  );
}
