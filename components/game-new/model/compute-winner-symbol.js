export function ComputeWinnerSymbol(gameState, { nextMove, winnerSequence }) {
  return nextMove === gameState.currentMove
    ? gameState.currentMove
    : gameState.cells[winnerSequence?.[0]]
}
