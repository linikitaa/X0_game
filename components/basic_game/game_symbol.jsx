import s from "../../styles/game.module.scss";
import { SYMBOL_0, SYMBOL_X } from "./constants";

export function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_0) return s.symbol0;
    if (symbol === SYMBOL_X) return s.symbolX;
    return "";
  };

  return (
    <span className={`${s.symbol} ${getSymbolClassName(symbol)}`}>
      {symbol}{" "}
    </span>
  );
}
