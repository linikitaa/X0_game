import s from './game-field.module.scss'
import { UiButton } from '@/uikit/ui-button'
import { GameSymbol } from '@/components/game'

export function GameField({
  cells,
  onClickHandler,
  currentMove,
  nextMove,
  winnerSequence,
}) {
  // const [cells, setCells] = useState(() => new Array(19 * 19).fill(null));
  // const [currentMove, setCurrentMove] = useState(GAME_SYMBOLS.SQUARE);

  return (
    <div className={s.gameField}>
      <GameMoveInfo
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <div className={s.field}>
        {cells.map((symbol, index) => {
          return (
            <GameCell
              key={index}
              onClick={() => {
                onClickHandler(index)
              }}
              isWinner={winnerSequence?.includes(index)}
            >
              {symbol && <GameSymbol symbol={symbol} />}
            </GameCell>
          )
        })}
      </div>
    </div>
  )
}

function GameMoveInfo({ currentMove, nextMove }) {
  return (
    <div className={s.gameFieldHeader}>
      <div className={s.gameFieldInfo}>
        <p className={s.gameFieldTitle}>
          Ход:{' '}
          {
            <GameSymbol
              symbol={currentMove}
              className={s.gameFieldIcon}
            />
          }
        </p>
        <p className={s.gameFieldSubtitle}>
          Следующий:{' '}
          {
            <GameSymbol
              symbol={nextMove}
              className={s.gameFieldIcon}
            />
          }
        </p>
      </div>
      <div className={s.gameFieldButton}>
        <UiButton children={'Ничья'} />
        <UiButton
          children={'Сдаться'}
          variant={'outline'}
        />
      </div>
    </div>
  )
}

function GameCell({ children, onClick, isWinner }) {
  return (
    <button
      onClick={onClick}
      className={`${s.fieldItem} ${isWinner ? s.winner : ''}`}
    >
      {children}
    </button>
  )
}
