import { GameLayout } from '@/components/game-new/ui/game-layout/game-layout'
import { BackLink } from '@/components/game-new/ui/back-link'
import { GameTitle } from '@/components/game-new/ui/game-title'
import { GameInfo } from '@/components/game-new/ui/game-info'
import { PlayerInfo } from '@/components/game-new/ui/player-info/player-info'
import { GameMoveInfo } from '@/components/game-new/ui/game-move-info/game-move-info'
import { GameOverModal } from '@/components/game-new/ui/game-over-modal/game-over-modal'
import { GameCell } from '@/components/game-new/ui/game-cell/game-cell'

import { PLAYERS } from '@/constants/*'
import { useCallback, useMemo, useReducer } from 'react'
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initGameState,
} from '@/components/game-new/model/game-state-reducer'
import { computeWinner } from '@/components/game-new/model/compute-winner'
import { getNextMove } from '@/components/game-new/model/get-next-move'
import { ComputeWinnerSymbol } from '@/components/game-new/model/compute-winner-symbol'
import { ComputePlayerTimer } from '@/components/game-new/model/compute-player-timer'
import { useInterval } from '@/components/lib/timers'

import s from './game.module.scss'

const PLAYERS_COUNT = 2

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    {
      playersCount: PLAYERS_COUNT,
      defaultTimer: 60000,
      currentMoveStart: Date.now(),
    },
    initGameState
  )

  useInterval(
    1000,
    !!gameState.currentMoveStart,
    useCallback(() => {
      dispatch({
        type: GAME_STATE_ACTIONS.TICK,
        now: Date.now(),
      })
    }, [])
  )
  const winnerSequence = useMemo(() => computeWinner(gameState), [gameState])
  const nextMove = getNextMove(gameState)
  const winnerSymbol = ComputeWinnerSymbol(gameState, {
    nextMove,
    winnerSequence,
  })
  const winnerPlayer = PLAYERS.find((el) => el.symbol === winnerSymbol)

  const { cells, currentMove } = gameState

  const handleCellClick = useCallback((index) => {
    dispatch({
      type: GAME_STATE_ACTIONS.CELL_CLICK,
      index,
      now: Date.now(),
    })
  }, [])

  return (
    <div className={s.app}>
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
          const { timer, timerStartAt } = ComputePlayerTimer(
            gameState,
            el.symbol
          )
          return (
            <PlayerInfo
              key={el.id}
              symbol={el.symbol}
              name={el.name}
              rating={el.rate}
              avatar={el.avatar}
              isRight={index % 2 === 1}
              timer={timer}
              timerStartAt={timerStartAt}
            />
          )
        })}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((el, index) => {
          return (
            <GameCell
              key={index}
              index={index}
              onClick={handleCellClick}
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
            timer={gameState.timers[player.symbol]}
          />
        ))}
      />
    </div>
  )
}
