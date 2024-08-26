import divider from '@/header/image/divider.svg'
import s from './gamePlayers.module.scss'

import { Profile } from '../../profile'
import { GameSymbol } from '@/components/game'

import classNames from 'classnames'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export function PlayerItem({
  name,
  avatar,
  rate,
  symbol,
  isSpecial,
  isTimerRunning,
}) {
  console.log(isTimerRunning)
  const timeClass = classNames(s.time, isTimerRunning && s.active)
  const [seconds, setSeconds] = useState(60)

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0')
  const remainingSeconds = String(seconds % 60).padStart(2, '0') // Определение оставшихся секунд

  const isDanger = seconds < 10

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((prev) => Math.max(prev - 1, 0))
      }, 1000)

      return () => {
        clearInterval(interval)
        setSeconds(60)
      }
    }
  }, [isTimerRunning])
  return (
    <div className={`${s.playersItem} ${isSpecial ? s.profileFirst : ''} `}>
      <div className={s.profile}>
        <Profile
          name={name}
          avatar={avatar}
          rateText={rate}
        />
        <span className={s.playersItemStatus}>
          {/*<Image width={"12"} height={"12"} src={symbol} alt={symbol} />*/}
          <GameSymbol
            symbol={symbol}
            className={s.gameSymbol}
          />
        </span>
      </div>
      <div className={timeClass}>
        <Image
          src={divider}
          alt={divider}
        />
        <span className={isDanger ? s.isDanger : ''}>
          {minutesString + ':' + remainingSeconds}
        </span>
      </div>
    </div>
  )
}
