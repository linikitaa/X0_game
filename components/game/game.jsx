import s from './game.module.scss'
import { GamePlayers } from './game-players'
import { GameTitle } from './game-title'
import { GameField } from './game-field'
import { useState } from 'react'
import { UseGameState } from '../useGameState'

export default function Game() {
  const [playersCount] = useState(4)

  const { onClickHandler, nextMove, currentMove, cells } =
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
      />
    </div>
  )
}
