import player1 from '@/game/game-players/image/player1.jpg'
import player2 from '@/game/game-players/image/player2.jpg'
import player3 from '@/game/game-players/image/player3.jpg'
import player4 from '@/game/game-players/image/player4.jpg'

export const GAME_SYMBOLS = {
  ZERO: 'zero',
  CROSS: 'cross',
  TRIANGLE: 'triangle',
  SQUARE: 'square',
}

export const MOVE_ORDER = [
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
]

export const PLAYERS = [
  {
    id: '1',
    name: 'Evgeny',
    avatar: player1,
    symbol: GAME_SYMBOLS.CROSS,
    rate: '1230',
  },
  {
    id: '2',
    name: 'VeraVeraVeraVera',
    avatar: player2,
    symbol: GAME_SYMBOLS.ZERO,
    rate: '850',
  },
  {
    id: '3',
    name: 'Lara',
    avatar: player3,
    symbol: GAME_SYMBOLS.TRIANGLE,
    rate: '930',
  },
  {
    id: '4',
    name: 'Tom',
    avatar: player4,
    symbol: GAME_SYMBOLS.SQUARE,
    rate: '330',
  },
]
