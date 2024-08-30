import s from './game-title.module.scss'
import arrow from '@/components/game-new/ui/icons/left-arrow.svg'
import rate from '@/components/game-new/ui/icons/is rating.svg'
import user from '@/components/game-new/ui/icons/user.svg'
import time from '@/components/game-new/ui/icons/time.svg'
import Image from 'next/image'
import Link from 'next/link'

export function GameTitle({ playersCount }) {
  return (
    <div className={s.title}>
      <div className={s.link}>
        <Image src={arrow} alt={arrow} />
        <Link href={'#'}>На главную</Link>
      </div>
      <h1>Крестики нолики</h1>
      <div className={s.subtitle}>
        <Image src={rate} alt={rate} />
        <span>
          <Image src={user} alt={user} />
          {playersCount}
        </span>
        <span>
          <Image src={time} alt={time} />1 мин на ход
        </span>
      </div>
    </div>
  )
}
