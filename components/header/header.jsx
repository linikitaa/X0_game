import Image from 'next/image'
import logo from './image/logo.svg'
import avatar from './image/avatar.jpg'
import divider from './image/divider.svg'
import s from './header.module.scss'
import arrow from './image/arrow.svg'
import { Profile } from '../profile'
import { UiButton } from '@/uikit/ui-button'

export function Header() {
  return (
    <div className={s.header}>
      <div className={s.header_left}>
        <Image
          src={logo}
          alt={logo}
        />
        <Image
          className={s.header_divider}
          src={divider}
          alt={divider}
        />
        <UiButton
          children={'Играть'}
          variant={'headerButton'}
        />
      </div>
      <div className={s.header_right}>
        <Profile
          avatar={avatar}
          name={'Paromov evg'}
          rateText={'1230'}
        />
        <Image
          src={arrow}
          alt={arrow}
        />
      </div>
    </div>
  )
}
