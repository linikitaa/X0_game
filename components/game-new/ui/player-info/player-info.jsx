import divider from '@/header/image/divider.svg'
import playerInfo from './player-info.module.scss'
import { GameSymbol } from '@/game/index'

import classNames from 'classnames'
import { useEffect } from 'react'
import Image from 'next/image'
export function PlayerInfo({
  isRight,
  name,
  rating,
  avatar,
  symbol,
  timerStartAt,
  seconds,
}) {
  const timeClass = classNames(
    playerInfo.time,
    timerStartAt && playerInfo.active
  )

  // const now = useNow(1000, timerStartAt)
  // const mils = Math.max(now ? timer - (now - timerStartAt) : timer, 0)
  // const seconds = Math.ceil(mils / 1000)
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0')
  const secondsString = String(seconds % 60).padStart(2, '0')

  const isDanger = seconds < 10

  const getTimerColor = () => {
    if (timerStartAt) {
      return isDanger ? 'text-orange-600' : 'text-slate-900'
    }
    return 'text-slate-200'
  }

  useEffect(() => {
    if (seconds === 0) {
      getTimerColor()
    }
  }, [seconds])
  return (
    <div
      className={`${playerInfo.playersItem} ${isRight ? playerInfo.profileFirst : ''} `}
    >
      <div className={playerInfo.profile}>
        <div className={playerInfo.playersWrap}>
          <Image
            className={playerInfo.header_avatar}
            src={avatar}
            alt={avatar}
          />
          <div className={playerInfo.header_text}>
            <p className={playerInfo.header_name}>{name}</p>
            <p className={playerInfo.header_rate}>Рейтинг: {rating}</p>
          </div>
        </div>
        <span className={playerInfo.playersItemStatus}>
          {/*<Image width={"12"} height={"12"} src={symbol} alt={symbol} />*/}
          <GameSymbol symbol={symbol} className={playerInfo.gameSymbol} />
        </span>
      </div>
      <div className={timeClass}>
        <Image src={divider} alt={divider} />
        <span className={isDanger ? playerInfo.isDanger : ''}>
          {minutesString + ':' + secondsString}
        </span>
      </div>
    </div>
  )
}
