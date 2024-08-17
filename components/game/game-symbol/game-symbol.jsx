import { GAME_SYMBOLS } from "../../constants";
import { Circle } from "../../assets/icons/circle";
import { Cross } from "../../assets/icons/cross";
import { Triangle } from "../../assets/icons/triangle";
import { Square } from "../../assets/icons/square";

export function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOLS.ZERO]: Circle,
      [GAME_SYMBOLS.CROSS]: Cross,
      [GAME_SYMBOLS.TRIANGLE]: Triangle,
      [GAME_SYMBOLS.SQUARE]: Square,
    }[symbol] ?? Cross;

  return <Icon className={className} />;
}
