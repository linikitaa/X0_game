import s from './game.module.scss'
import { useState } from 'react'
import { UseGameState } from '../useGameState'
import { GameField, GamePlayers, GameSymbol, GameTitle } from '@/game/index'
import { UiModal } from '@/uikit/ui-modal'
import { UiButton } from '@/uikit/ui-button'

export function Game() {
  const [playersCount] = useState(2)

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
      <UiModal
        isOpen={!!winnerSymbol}
        onClose={() => console.log('close')}
      >
        <UiModal.Header>Игра завершена!</UiModal.Header>
        <UiModal.Body>
          <p>
            Победитель: <span style={{ color: '#0D9488' }}>Paromovevg</span>
          </p>
          <GamePlayers />
        </UiModal.Body>
        <UiModal.Footer>
          <UiButton variant='outline'>Вернуться</UiButton>
          <UiButton>Играть снова</UiButton>
        </UiModal.Footer>
      </UiModal>
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
