import Image from "next/image";
import logo from "./image/logo.svg";
import avatar from "./image/avatar.jpg";
import arrow from "./image/arrow.svg";
import divider from "./image/divider.svg";
import s from "./header.module.scss";

export function Header() {
  return (
    <div className={s.header}>
      <div className={s.header_left}>
        <Image src={logo} alt={logo} />
        <Image className={s.header_divider} src={divider} alt={divider} />
        <button className={s.button}>Играть</button>
      </div>
      <div className={s.header_right}>
        <Image className={s.header_avatar} src={avatar} alt={avatar} />
        <div className={s.header_text}>
          <p className={s.header_name}>Paromovevg</p>
          <p className={s.header_rate}>Рейтинг: 1230</p>
        </div>
        <Image src={arrow} alt={arrow} />
      </div>
    </div>
  );
}
