import { useState } from "react";
import { SYMBOL_0, SYMBOL_X } from "./constants";

const computeWinner = (cell) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {
      return [a, b, c];
    }
  }
};

export function useGameHook() {
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [currentStep, setCurrentStep] = useState(SYMBOL_0);
  const [winner, setWinner] = useState();

  const handleCellClick = (index) => {
    if (cells[index] || winner) {
      return;
    }

    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;

    const win = computeWinner(cellsCopy);
    setWinner(win);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_0 ? SYMBOL_X : SYMBOL_0);
  };

  const handleClear = () => {
    setWinner(undefined);
    setCells(Array.from({ length: 9 }, () => null));
    setCurrentStep(SYMBOL_0);
  };

  return { winner, cells, currentStep, handleCellClick, handleClear };
}
