import Image from 'next/image'
import star from '@/components/game-new/ui/icons/is rating.svg'
import user from '@/components/game-new/ui/icons/user.svg'
import time from '@/components/game-new/ui/icons/time.svg'
import s from '@/game/game-title/game-title.module.scss'

export function GameInfo({ isRatingGame, playersCount, timeMode }) {
  return (
    <div className={s.subtitle}>
      {isRatingGame && <Image src={star} alt={star} />}
      <span>
        <Image src={user} alt={user} />
        {playersCount}
      </span>
      <span>
        <Image src={time} alt={time} />
        {timeMode}
      </span>
    </div>
  )
}
