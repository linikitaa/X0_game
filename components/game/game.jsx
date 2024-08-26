import s from './game.module.scss'
import { useState } from 'react'
import { UseGameState } from '../useGameState'
import { GameField, GamePlayers, GameSymbol, GameTitle } from '@/game/index'

export function Game() {
  const [playersCount] = useState(4)

  const {
    onClickHandler,
    nextMove,
    currentMove,
    cells,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = UseGameState(playersCount)
  return (
    <div className={s.app}>
      <div>
        <GameTitle playersCount={playersCount} />
        <GamePlayers
          isWinner={!!winnerSymbol}
          playersCount={playersCount}
          currentMove={currentMove}
          onPlayerTimeOver={handlePlayerTimeOver}
        />
      </div>
      {winnerSymbol && <GameSymbol symbol={winnerSymbol} />}
      <GameField
        cells={cells}
        currentMove={currentMove}
        onClickHandler={onClickHandler}
        nextMove={nextMove}
        winnerSequence={winnerSequence}
        winnerSymbol={winnerSymbol}
      />
    </div>
  )
}
