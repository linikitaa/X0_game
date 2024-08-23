import { GAME_SYMBOLS, MOVE_ORDER } from './constants'
import { useState } from 'react'

function getNextMove(currentMove, playersCount) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount)

  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0]
}

export function UseGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }))

  let nextMove = getNextMove(currentMove, playersCount)
  const onClickHandler = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove, playersCount),
        cells: lastGameState.cells.map((el, i) =>
          i === index ? lastGameState.currentMove : el
        ),
      }
    })
  }

  return { cells, currentMove, nextMove, onClickHandler }
}
