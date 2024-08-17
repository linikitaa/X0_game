import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";
import { useState } from "react";

export function UseGameState() {
  function getNextMove(currentMove) {
    const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
    return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
  }

  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  let nextMove = getNextMove(currentMove);

  const onClickHandler = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove),
        cells: lastGameState.cells.map((el, i) =>
          i === index ? getNextMove(lastGameState.currentMove) : el,
        ),
      };
    });
  };

  return { cells, currentMove, nextMove, onClickHandler };
}
