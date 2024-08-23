import s from './ui-button.module.scss'
import classNames from 'classnames'

/**
 *
 * @param children : string
 * @param variant : string
 * @param disabled : boolean
 * @returns {JSX.Element}
 * @constructor
 */

export function UiButton({ children, variant = 'button', disabled = false }) {
  const buttonClass = classNames(s.button, {
    [s.outline]: variant === 'outline' && !disabled,
    [s.headerButton]: variant === 'headerButton' && !disabled,
    [s.disabled]: disabled,
  })

  return <button className={buttonClass}>{children}</button>
}
