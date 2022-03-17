// @flow

import css from 'csz'
import classnames from 'classnames'
import { html } from '../nonr/html.js'

type Props = {
  className?: ?string,
  children?: ?Array<HTMLElement>
}

const View = (props: Props = {}): HTMLElement => {
  console.log('props', props)
  const { className } = props

  return html`
    <div className=${classnames(style, className)}>${props.children}</div>
  `
}

const style = css`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 0 solid;
  box-sizing: border-box;
  flex: 0 1 auto;
  align-items: flex-start;
  align-self: auto;
  min-width: 0;
  min-height: 0;
`

export default View
