// @flow

// $FlowFixMe
import React, { ReactDOM } from 'es-react'
// $FlowFixMe
import htm from 'htm'
// $FlowFixMe
import css from 'csz'
// $FlowFixMe
import * as mobx from 'mobx'
// $FlowFixMe
import * as kjv from 'es-kjv'
import * as mobxReact from 'mobx-react'

export type HTM = {
  type: string,
  props: { [string]: any },
  children: [any],
}

const html: (strings: Array<string>, ...keys: Array<any>) => HTM = htm.bind(
  React.createElement
)

mobxReact.observerBatching(ReactDOM.unstable_batchedUpdates)

export { React, ReactDOM, htm, html, css, mobx, mobxReact, kjv }
