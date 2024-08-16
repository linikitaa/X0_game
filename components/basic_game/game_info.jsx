import s from "../../styles/game.module.scss";
import { GameSymbol } from "./game_symbol";

export function GameInfo(props) {
  const isDraw =
    !props.winner && props.cells.filter((value) => value).length === 9;
  const winnerSymbol = props.winner ? props.cells[props.winner[0]] : undefined;

  if (isDraw) {
    return <div className={s.gameInfo}>Ничья</div>;
  }
  if (winnerSymbol) {
    return (
      <div className={s.gameInfo}>
        Победил : {<GameSymbol symbol={winnerSymbol} />}
      </div>
    );
  }

  return (
    <div className={s.gameInfo}>
      Ход : {<GameSymbol symbol={props.currentStep} />}
    </div>
  );
  // return (
  //     <div className={s.gameInfo}>
  //         <>
  //             {/*{isDraw ? 'Ничья' : props.winner ? 'Победил : ' : 'Ход : '}*/}
  //             {/*{winnerSymbol ? `Победил : ${<GameSymbol symbol={winnerSymbol}/>}` : }*/}
  //             {/*{!isDraw && props.renderSymbol(winnerSymbol ?? props.currentStep)}*/}
  //         </>
  //     </div>
  // )
}
