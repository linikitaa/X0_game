import s from '@/game/game-field/game-field.module.scss'
import { GameSymbol } from '@/components/game'
import { UiButton } from '@/uikit/ui-button'

export function GameMoveInfo({ currentMove, nextMove }) {
  return (
    <div className={s.gameFieldHeader}>
      <div className={s.gameFieldInfo}>
        <p className={s.gameFieldTitle}>
          Ход: {<GameSymbol symbol={currentMove} className={s.gameFieldIcon} />}
        </p>
        <p className={s.gameFieldSubtitle}>
          Следующий:{' '}
          {<GameSymbol symbol={nextMove} className={s.gameFieldIcon} />}
        </p>
      </div>
      <div className={s.gameFieldButton}>
        <UiButton children={'Ничья'} />
        <UiButton children={'Сдаться'} variant={'outline'} />
      </div>
    </div>
  )
}
