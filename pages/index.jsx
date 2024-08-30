// import { useState } from 'react' // Не забудьте импортировать useState
// import { Header } from '@/header/index'
// import { UseGameState } from '@/components/useGameState'
// import s from '@/game/game.module.scss'
// import {
//   GameField,
//   GamePlayers,
//   GameSymbol,
//   GameTitle,
// } from '@/components/game'
// import { UiModal } from '@/uikit/ui-modal'
// import { UiButton } from '@/uikit/ui-button'
//
// export default function Homepage() {
//   const [playersCount] = useState(2) // useState должен быть внутри компонента
//
//   const {
//     onClickHandler,
//     nextMove,
//     currentMove,
//     cells,
//     winnerSequence,
//     handlePlayerTimeOver,
//     winnerSymbol,
//   } = UseGameState(playersCount)
//
//   return (
//     <HomePageLayout header={<Header />}>
//       <div>
//         <GameTitle playersCount={playersCount} />
//         <GamePlayers
//           isWinner={!!winnerSymbol}
//           playersCount={playersCount}
//           currentMove={currentMove}
//           onPlayerTimeOver={handlePlayerTimeOver}
//         />
//       </div>
//       {winnerSymbol && <GameSymbol symbol={winnerSymbol} />}
//
//       <GameField
//         cells={cells}
//         currentMove={currentMove}
//         onClickHandler={onClickHandler}
//         nextMove={nextMove}
//         winnerSequence={winnerSequence}
//         winnerSymbol={winnerSymbol}
//       />
//     </HomePageLayout>
//   )
// }
//
// function HomePageLayout({ header, children }) {
//   return (
//     <div>
//       {header}
//       <div className={s.app}>{children}</div>
//     </div>
//   )
// }

import { Header } from '@/header/index'
import s from '@/game/game.module.scss'
import { Game } from '@/components/game-new'
export default function Homepage() {
  return (
    <HomePageLayout header={<Header />}>
      <Game />
    </HomePageLayout>
  )
}

function HomePageLayout({ header, children }) {
  return (
    <div>
      {header}
      <div className={s.app}>{children}</div>
    </div>
  )
}
