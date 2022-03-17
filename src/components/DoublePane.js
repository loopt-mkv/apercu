// @flow

import css from 'csz'
import classnames from 'classnames'
import { html } from '../nonr/html.js'
import View from './View.js'

type Props = {
  className?: ?string,
  children?: ?Array<HTMLElement>,
}

const DoublePane = (props: Props ): HTMLElement => {
  const { className } = props

  return html`
    <${View} className=${classnames(style, className)}>
      <${View}>
        
      </View>
      <${View}>

      </View>
    </View>
  `
}

const style = css`
  flex-direction: row;
  align-self: stretch;
  flex: 1;
  background-color: blue;
`

export default DoublePane
