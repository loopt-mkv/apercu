// @flow

import type { HTM } from '../unpkg.js'
import { html, css } from '../unpkg.js'

/*::
type Props = {|
  className?: any,
  children?: any
|}
*/

const Text = (props /*: Props*/): HTM => {
  const { className } = props

  return html`
    <span class=${window.classNames(style, className)}>
      ${props.children}
    </span>
  `
}

const style = css`
  white-space: pre-wrap;
  position: relative;
`

export default Text
