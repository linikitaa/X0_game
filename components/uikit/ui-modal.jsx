import s from './ui-modal.module.scss'

// export function UiModal({ children }) {
//   return (
//     <div className={s.modalWrap}>
//       <div className={s.modalContent}>
//         <h2 className={s.modalTitle}>Игра завершена!</h2>
//         <p>
//           Победитель: <span className={s.modalWin}>Paromovevg</span>{' '}
//         </p>
//         <GamePlayers />
//         <div className={s.modalBottom}>
//           <UiButton
//             children={'Вернуться'}
//             variant={'outline'}
//           />
//           <UiButton children={'Играть снова'} />
//         </div>
//         <button className={s.modalButtonWrap}>
//           <CrossModalButton className={s.crossModalButton} />
//         </button>
//       </div>
//     </div>
//   )
// }

export function UiModal({ children, isOpen = false, onClose }) {
  if (!isOpen) {
    return null
  }

  const handleClick = (e) => {
    const inModal = e.target.closest('[data-id=modal]')
    if (inModal) {
      return
    }
    onClose()
  }
  return (
    <div
      className={s.modalWrap}
      onClick={handleClick}
    >
      <div
        data-id={'modal'}
        className={s.modalContent}
      >
        {children}
        <button
          onClick={onClose}
          className={s.modalButtonWrap}
        >
          <CrossModalButton className={s.crossModalButton} />
        </button>
      </div>
    </div>
  )
}

UiModal.Header = function UiModalHeader({ children }) {
  return <h2 className={s.modalTitle}>{children}</h2>
}

UiModal.Body = function UiModalBody({ children }) {
  return <div className={s.modalBody}>{children}</div>
}

UiModal.Footer = function UiModalFooter({ children }) {
  return <div className={s.modalBottom}>{children}</div>
}

function CrossModalButton({ className }) {
  return (
    <svg
      className={className}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.781396 16.0001C0.626858 16.0001 0.475783 15.9543 0.347281 15.8685C0.218778 15.7826 0.118621 15.6606 0.0594776 15.5178C0.00033466 15.3751 -0.0151369 15.218 0.0150198 15.0664C0.0451766 14.9148 0.119607 14.7756 0.228896 14.6664L14.6664 0.228853C14.8129 0.0823209 15.0117 0 15.2189 0C15.4261 0 15.6249 0.0823209 15.7714 0.228853C15.9179 0.375385 16.0002 0.574125 16.0002 0.781353C16.0002 0.988581 15.9179 1.18732 15.7714 1.33385L1.3339 15.7714C1.26141 15.844 1.17528 15.9016 1.08047 15.9408C0.985653 15.9801 0.884016 16.0002 0.781396 16.0001Z'
        fill='white'
      />
      <path
        d='M15.2189 16.0001C15.1163 16.0002 15.0146 15.9801 14.9198 15.9408C14.825 15.9016 14.7389 15.844 14.6664 15.7714L0.228896 1.33385C0.0823639 1.18732 4.30364e-05 0.988581 4.30364e-05 0.781353C4.30364e-05 0.574125 0.0823639 0.375385 0.228896 0.228853C0.375428 0.0823209 0.574168 0 0.781396 0C0.988624 0 1.18736 0.0823209 1.3339 0.228853L15.7714 14.6664C15.8807 14.7756 15.9551 14.9148 15.9853 15.0664C16.0154 15.218 16 15.3751 15.9408 15.5178C15.8817 15.6606 15.7815 15.7826 15.653 15.8685C15.5245 15.9543 15.3734 16.0001 15.2189 16.0001Z'
        fill='white'
      />
    </svg>
  )
}
