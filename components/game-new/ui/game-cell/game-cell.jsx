import s from './game-cell.module.scss'
import { GameSymbol } from '@/components/game-new/ui/game-symbol'
import { memo } from 'react'

export const GameCell = memo(function GameCell({
  onClick,
  disabled,
  symbol,
  isWinner,
  index,
}) {
  console.log('cell')
  return (
    <button
      disabled={disabled}
      onClick={() => onClick(index)}
      className={`${s.fieldItem} ${isWinner ? s.winner : ''}`}
    >
      {symbol && <GameSymbol symbol={symbol} />}
    </button>
  )
})
