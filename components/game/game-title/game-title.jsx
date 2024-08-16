import s from "./game-title.module.scss";
import arrow from "./icons/left-arrow.svg";
import rate from "./icons/is rating.svg";
import user from "./icons/user.svg";
import time from "./icons/time.svg";
import Image from "next/image";
import Link from "next/link";

export function GameTitle() {
  return (
    <div className={s.title}>
      <div className={s.link}>
        <Image src={arrow} alt={arrow} />
        <Link href={"#"}>На главную</Link>
      </div>
      <h1>Крестики нолики</h1>
      <div className={s.subtitle}>
        <Image src={rate} alt={rate} />
        <span>
          <Image src={user} alt={user} />2
        </span>
        <span>
          <Image src={time} alt={time} />1 мин на ход
        </span>
      </div>
    </div>
  );
}
