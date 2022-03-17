// @flow

import htm from 'htm'
import y from 'hyperscript'

function h(name, props, ...children) {
  // console.log('name', name)
  // console.log('props', props)
  // console.log('children', children)

  if (typeof name === 'function') {
    return name({
      ...props,
      children,
    })
  }

  return y(name, props, ...children)
}

export const html: (string: Array<string>, ...keys: Array<any>) => HTMLElement =
  htm.bind(h)
