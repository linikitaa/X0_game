import { getNextMove } from '@/components/game-new/model/get-next-move'
import { GAME_SYMBOLS } from '@/constants/*'

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: 'cell-click',
}

export const initGameState = ({ playersCount }) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
  playersCount,
})

export const gameStateReducer = (state, action) => {
  const { index } = action
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      if (state.cells[index]) {
        return state
      }

      return {
        ...state,
        currentMove: getNextMove(
          state.currentMove,
          state.playersCount,
          state.playersTimeOver
        ),
        cells: state.cells.map((el, i) =>
          i === index ? state.currentMove : el
        ),
      }
    }
    default: {
      return state
    }
  }
}
