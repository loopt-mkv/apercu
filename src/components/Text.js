// @flow

import css from 'csz'
import classnames from 'classnames'
import { html } from '../nonr/html.js'

type Props = {
  className?: ?string,
  children?: ?Array<HTMLElement>
}

const Text = (props: Props = {}): HTMLElement => {
  const { className } = props

  return html`
    <span className=${classnames(style, className)}> ${props.children} </span>
  `
}

const style = css`
  white-space: pre-wrap;
  position: relative;
`

export default Text
