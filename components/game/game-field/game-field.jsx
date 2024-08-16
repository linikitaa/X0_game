import s from "./game-field.module.scss";
import { UiButton } from "../../uikit/ui-button";
import Image from "next/image";
import cross from "./../game-players/icons/cross.svg";
import circle from "./../game-players/icons/circle.svg";

const cells = new Array(19 * 19).fill(null);

export function GameField() {
  return (
    <div className={s.gameField}>
      <div className={s.gameFieldHeader}>
        <div className={s.gameFieldInfo}>
          <p className={s.gameFieldTitle}>
            Ход: {<Image className={s.gameFieldIcon} src={cross} alt={cross} />}
          </p>
          <p className={s.gameFieldSubtitle}>
            Следующий:{" "}
            {<Image className={s.gameFieldIcon} src={circle} alt={circle} />}
          </p>
        </div>
        <div className={s.gameFieldButton}>
          <UiButton children={"Ничья"} />
          <UiButton children={"Сдаться"} variant={"outline"} />
        </div>
      </div>
      <div className={s.field}>
        {cells.map((_, i) => {
          return (
            <button key={i} className={s.fieldItem}>
              <Image src={cross} alt={circle} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
