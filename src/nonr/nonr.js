// @flow

import h from 'hyperscript'
import htm from 'htm'
import { nanoid } from 'nanoid'
import isDom from 'is-dom'

type NonrState = any

const secret = nanoid()
let activeObserver = null

export function isNonr(obj: any): boolean {
  const isFunc = typeof obj === 'function'
  return isFunc && obj?.[secret]
}

function isPrimitive(test) {
  return test !== Object(test)
}

export function nonr(init) {
  const defaultFunction = () => {
    return isPrimitive(init) ? init : null
  }
  const defaultState = isPrimitive(init) ? { value: init } : {}

  const recompute = typeof init === 'function' ? init : defaultFunction
  const state = typeof init === 'object' ? init : defaultState
  const observerRegistry = new WeakMap()
  const observers = []

  // Register any observables used inside a computable.
  let cachedValue
  const echoCache = () => cachedValue
  
  activeObserver = {observe: () => {
      const nextValue = recompute()
      const prevValue = echoCache()
      if (
        isDom(nextValue) &&
        !!nextValue?.replaceWith &&
        isDom(prevValue) &&
        !!prevValue?.replaceWith
      ) {
        console.log('replaceWith')
        prevValue.replaceWith(nextValue)
        cachedValue = nextValue
      }
      return nextValue
    }, init}
  cachedValue = recompute()
  activeObserver = null

  return new Proxy(echoCache, {
    get(parent, prop) {
      // console.log('prop', prop)

      if (activeObserver && !observerRegistry.has(activeObserver.init)) {
        // Each observer can only be registered once.
        observerRegistry.set(activeObserver.init, true)
        observers.push(activeObserver.observe)
      }

      if (prop === secret) {
        return true
      }
      if (
        prop === 'toString' ||
        prop === 'valueOf' ||
        prop === Symbol.toStringTag ||
        prop === Symbol.toPrimitive
      ) {
        return echoCache()
      }

      return state?.[prop]
    },
    set(obj, prop, value) {
      // $FlowFixMe
      state[prop] = value

      for (const observer of observers) {
        observer()
      }

      return true
    },
  })
}

const y = (
  name: string | function,
  props?: { [string]: any },
  ...children: ?Array<any>
): NonrState => {
  if (typeof name === 'function') {
    // This is for <${NestedComponent}/>.
    return name()
  }

  // Every element is associated with a nonr state via closure.
  const el = h(name, props, ...children)
  const n = nonr(() => {
    // console.log('el')
    return el
  })
  return n
}

type htmlTag = (strings: Array<string>, ...keys: Array<any>) => any

export const html: htmlTag = function (
  strings: Array<string>,
  ...keys: Array<any>
) {
  // Intercept the parsing of the tagged string.
  const f = htm.bind(y)
  const n = f(strings, ...keys)
  const el = n()

  return el
}
