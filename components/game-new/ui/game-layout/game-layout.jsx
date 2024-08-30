import s from './game-layout.module.scss'

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
