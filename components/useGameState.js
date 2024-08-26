import { GAME_SYMBOLS } from './constants'
import { useState } from 'react'
import { computeWinner, getNextMove } from '@/components/model'

export function UseGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }))

  const winnerSequence = computeWinner(cells)

  const nextMove = getNextMove(currentMove, playersCount)
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

  return { cells, currentMove, nextMove, onClickHandler, winnerSequence }
}
