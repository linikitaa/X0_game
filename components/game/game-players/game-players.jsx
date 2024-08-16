import player1 from "./image/player1.jpg";
import player2 from "./image/player2.jpg";
import divider from "./../../header/image/divider.svg";
import cross from "./icons/cross.svg";
import circle from "./icons/circle.svg";

import s from "./gamePlayers.module.scss";
import Image from "next/image";
import { Profile } from "../../profile";

export function GamePlayers() {
  return (
    <div className={s.gamePlayers}>
      <div className={s.playersItem}>
        <Profile name={"Paromovevg"} avatar={player1} rateText={"1230"} />
        <span className={s.playersItemStatus}>
          <Image src={cross} alt={cross} />
        </span>
      </div>
      <Image src={divider} alt={divider} />
      <div className={s.time}>
        <span className={s.timeWait}>01:08</span>
        <span className={s.active}>00:08</span>
      </div>
      <Image src={divider} alt={divider} />
      <div className={s.playersItem}>
        <Profile name={"VereInteding"} avatar={player2} rateText={"850"} />
        <span className={s.playersItemStatus}>
          <Image src={circle} alt={circle} />
        </span>
      </div>
    </div>
  );
}
