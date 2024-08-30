import { GameLayout } from '@/components/game-new/ui/game-layout/game-layout'
import { BackLink } from '@/components/game-new/ui/back-link'
import { GameTitle } from '@/components/game-new/ui/game-title'
import { GameInfo } from '@/components/game-new/ui/game-info'
import { PLAYERS } from '@/constants/*'
import { PlayerInfo } from '@/components/game-new/ui/player-info/player-info'
import { GameMoveInfo } from '@/components/game-new/ui/game-move-info/game-move-info'
import { GameCell } from '@/components/game-new/ui/game-cell/game-cell'

import { GameOverModal } from '@/components/game-new/ui/game-over-modal/game-over-modal'
import { useReducer } from 'react'
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initGameState,
} from '@/components/game-new/model/gameStateReducer'
import { computeWinner } from '@/components/game-new/model/compute-winner'
import { getNextMove } from '@/components/game-new/model/get-next-move'
import { ComputeWinnerSymbol } from '@/components/game-new/model/compute-winner-symbol'

const PLAYERS_COUNT = 2

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount: PLAYERS_COUNT },
    initGameState
  )

  const winnerSequence = computeWinner(gameState.cells)
  const nextMove = getNextMove(
    gameState.currentMove,
    gameState.playersCount,
    []
  )
  const winnerSymbol = ComputeWinnerSymbol(gameState, {
    nextMove,
    winnerSequence,
  })
  const winnerPlayer = PLAYERS.find((el) => el.symbol === winnerSymbol)
  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo
            isRatingGame
            playersCount={PLAYERS_COUNT}
            timeMode={'1 мин на ход'}
          />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((el, index) => {
          return (
            <PlayerInfo
              key={el.id}
              symbol={el.symbol}
              name={el.name}
              rating={el.rate}
              avatar={el.avatar}
              seconds={60}
              isRight={index % 2 === 1}
            />
          )
        })}
        gameMoveInfo={
          <GameMoveInfo
            currentMove={gameState.currentMove}
            nextMove={nextMove}
          />
        }
        gameCells={gameState.cells.map((el, index) => {
          return (
            <GameCell
              key={index}
              onClick={() => {
                dispatch({
                  type: GAME_STATE_ACTIONS.CELL_CLICK,
                  index,
                })
              }}
              isWinner={winnerSequence?.includes(index)}
              disabled={!!winnerSymbol}
              symbol={el}
            />
          )
        })}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        winnerSymbol={winnerSymbol}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />
        ))}
      />
    </>
  )
}
