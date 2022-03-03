// @flow

import type {HTM} from '../unpkg.js'
import { html, css } from '../unpkg.js'
import View from '../components/View.js'

const style = css`
  align-self: stretch;
  height: 80px;
`

const Header = (): HTM => {
  return html` <${View} className=${style}> </View> `
}

export default Header
