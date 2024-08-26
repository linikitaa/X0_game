import s from './game.module.scss'
import { useState } from 'react'
import { UseGameState } from '../useGameState'
import { GameField, GamePlayers, GameTitle } from '@/game/index'

export function Game() {
  const [playersCount] = useState(2)

  const { onClickHandler, nextMove, currentMove, cells, winnerSequence } =
    UseGameState(playersCount)
  return (
    <div className={s.app}>
      <div>
        <GameTitle playersCount={playersCount} />
        <GamePlayers
          playersCount={playersCount}
          currentMove={currentMove}
        />
      </div>
      <GameField
        cells={cells}
        currentMove={currentMove}
        onClickHandler={onClickHandler}
        nextMove={nextMove}
        winnerSequence={winnerSequence}
      />
    </div>
  )
}
