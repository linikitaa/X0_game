import Image from "next/image";
import s from "./profile.module.scss";

export function Profile({ name, avatar, rateText }) {
  return (
    <div className={s.playersWrap}>
      <Image className={s.header_avatar} src={avatar} alt={avatar} />
      <div className={s.header_text}>
        <p className={s.header_name}>{name}</p>
        <p className={s.header_rate}>Рейтинг: {rateText}</p>
      </div>
    </div>
  );
}
