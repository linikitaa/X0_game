import player1 from './image/player1.jpg'
import player2 from './image/player2.jpg'
import player3 from './image/player3.jpg'
import player4 from './image/player4.jpg'

import s from './gamePlayers.module.scss'
import { PlayerItem } from './player-item'
import { GAME_SYMBOLS } from '@/constants/*'

const players = [
  {
    id: '1',
    name: 'Evgeny',
    avatar: player1,
    symbol: GAME_SYMBOLS.CROSS,
    rate: '1230',
  },
  {
    id: '2',
    name: 'VeraVeraVeraVera',
    avatar: player2,
    symbol: GAME_SYMBOLS.ZERO,
    rate: '850',
  },
  {
    id: '3',
    name: 'Lara',
    avatar: player3,
    symbol: GAME_SYMBOLS.TRIANGLE,
    rate: '930',
  },
  {
    id: '4',
    name: 'Tom',
    avatar: player4,
    symbol: GAME_SYMBOLS.SQUARE,
    rate: '330',
  },
]
export function GamePlayers({
  playersCount,
  currentMove,
  isWinner,
  onPlayerTimeOver,
}) {
  return (
    <div className={s.gamePlayers}>
      {players.slice(0, playersCount).map((el, index) => {
        // const isSpecial = el.id === "2" || el.id === "4";
        const isSpecial = el.id % 2 === 0
        return (
          <PlayerItem
            key={el.id}
            id={el.id}
            index={index} // передаем индекс как ключ для times
            name={el.name}
            rate={el.rate}
            avatar={el.avatar}
            symbol={el.symbol}
            isSpecial={isSpecial}
            isTimerRunning={currentMove === el.symbol && !isWinner}
            currentMove={currentMove}
            onTimeOver={() => onPlayerTimeOver(el.symbol)}
          />
        )
      })}
    </div>
  )
}
