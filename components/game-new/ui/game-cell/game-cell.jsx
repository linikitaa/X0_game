import s from '@/game/game-field/game-field.module.scss'
import { GameSymbol } from '@/components/game'

export function GameCell({ onClick, disabled, symbol, isWinner }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${s.fieldItem} ${isWinner ? s.winner : ''}`}
    >
      {symbol && <GameSymbol symbol={symbol} />}
    </button>
  )
}
