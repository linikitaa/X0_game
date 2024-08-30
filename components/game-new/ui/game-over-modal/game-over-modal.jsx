import { UiModal } from '@/uikit/ui-modal'
import { UiButton } from '@/uikit/ui-button'
import s from './game-over-modal.module.scss'

export function GameOverModal({ winnerName, players }) {
  return (
    <UiModal isOpen={winnerName} onClose={() => console.log('close')}>
      <UiModal.Header>Игра завершена!</UiModal.Header>
      <UiModal.Body>
        <p>
          Победитель: <span style={{ color: '#0D9488' }}>{winnerName}</span>
        </p>
        <div className={s.gamePlayers}>{players}</div>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton variant='outline'>Вернуться</UiButton>
        <UiButton>Играть снова</UiButton>
      </UiModal.Footer>
    </UiModal>
  )
}
