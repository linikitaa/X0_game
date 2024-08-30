import s from '@/game/game-title/game-title.module.scss'
import Image from 'next/image'
import arrow from '@/components/game-new/ui/icons/left-arrow.svg'
import Link from 'next/link'

export function BackLink() {
  return (
    <div className={s.link}>
      <Image src={arrow} alt={arrow} />
      <Link href={'#'}>На главную</Link>
    </div>
  )
}
