import s from './game-layout.module.scss'
import { GameSymbol } from '@/components/game'
import { UiButton } from '@/uikit/ui-button'
import { GameMoveInfo } from '@/components/game-new/ui/game-move-info/game-move-info'
import { GameCell } from '@/components/game-new/ui/game-cell/game-cell'
import { GameOverModal } from '@/components/game-new/ui/game-over-modal/game-over-modal'
export function GameLayout({
  backLink,
  title,
  gameInfo,
  playersList,
  gameMoveInfo,
  gameCells,
}) {
  return (
    <div className={s.gameLayoutWrap}>
      <div>
        {backLink}
        {title}
        {gameInfo}
      </div>
      <div className={s.playersList}>{playersList}</div>
      <div className={s.gameField}>
        {gameMoveInfo}
        <div className={s.field}>{gameCells}</div>
      </div>
    </div>
  )
}
