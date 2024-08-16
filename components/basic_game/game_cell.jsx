import s from "../../styles/game.module.scss";
import { GameSymbol } from "./game_symbol";

export function GameCell({ cells, winner, handleCellClick, renderSymbol }) {
  return (
    <div className={s.gameField}>
      {cells.map((symbol, index) => {
        const isWinner = winner?.includes(index);
        return (
          <button
            key={index}
            className={`${s.cell} ${isWinner ? s.cellWin : ""}`}
            onClick={() => handleCellClick(index)}
          >
            {symbol ? <GameSymbol symbol={symbol} /> : null}
          </button>
        );
      })}
    </div>
  );
}
