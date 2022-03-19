// @flow

import { nanoid } from 'nanoid'
import isDom from 'is-dom'

export type Nonr = any

type CreationContext = {
  onChange: () => any,
  registerCreation: (nonrObj: any) => any,
  init: () => any,
}

type RecomputeContext = {
  creations: Array<any>,
  index: number,
}

const secret = nanoid()
let creationContexts: Array<CreationContext> = []
let recomputeContexts: Array<RecomputeContext> = []

function peek<T>(a: Array<T>): ?T {
  if (!a || !Array.isArray(a)) {
    return null
  }
  return a[a.length - 1]
}

export function isNonr(obj: any): boolean {
  const isFunc = typeof obj === 'function'
  return isFunc && obj?.[secret]
}

export function fromPromise(p: Promise<any>): Nonr {
  const state = nonr({
    value: null,
    state: 'pending',
  })

  p.then((value) => {
    // console.log('mutating observable', value)
    state._setShouldUpdate((prev, next) => {
      return JSON.stringify(prev) !== JSON.stringify(next)
    })
    state.value = value
    state.state = 'fulfilled'
  })

  return state
}

function isPrimitive(test) {
  return test !== Object(test)
}

export function nonr(init: any): Nonr {
  const defaultFunction = () => {
    return isPrimitive(init) ? init : null
  }
  const defaultState = isPrimitive(init) ? { value: init } : {}

  const recompute = typeof init === 'function' ? init : defaultFunction
  const state = typeof init === 'object' ? init : defaultState
  const observerRegistry = new WeakMap()
  const dependents: Array<CreationContext> = []
  const creations = []
  let shouldUpdate = (prev, next) => prev !== next

  const registerContextAsDependent = () => {
    const createCtx: ?CreationContext = peek(creationContexts)
    if (
      createCtx &&
      !observerRegistry.has(createCtx?.init || {}) // prevent duplicate registration
    ) {
      // Runs when one nonr obj is accessed during the creation of another nonr obj.
      // We will register the obj being created as a dependent
      // because its state depends on the state of obj being accessed.

      if (createCtx) {
        observerRegistry.set(createCtx.init, true)
        dependents.push(createCtx)
      }
    }
  }

  // Register any observables used inside a computable.
  let cachedValue
  const echoCache = () => {
    // console.log('cachedValue', cachedValue)
    registerContextAsDependent()
    return cachedValue
  }

  creationContexts.push({
    onChange: () => {
      recomputeContexts.push({ index: 0, creations })
      const nextValue = recompute()
      recomputeContexts.pop()
      const prevValue = echoCache()
      if (
        isDom(nextValue) &&
        !!nextValue?.replaceWith &&
        isDom(prevValue) &&
        !!prevValue?.replaceWith
      ) {
        console.log('replaceWith')
        prevValue.replaceWith(nextValue)
      }

      if (shouldUpdate(prevValue, nextValue)) {
        cachedValue = nextValue
        for (const ctx of dependents) {
          // Whenever there is a change, notify dependents.
          // todo: batch updates
          //   Allow set to be called multiple times before callbacks are called.
          ctx.onChange()
        }
      }

      return nextValue
    },
    registerCreation: (nonrObj) => {
      creations.push(nonrObj)
    },
    init,
  })
  // console.log('creationContexts', creationContexts, init)
  // console.log('init', init)
  cachedValue = recompute() // todo the first time this runs, it needs to record any nonr creations.
  // console.warn('null out')
  creationContexts.pop()

  const proxy = new Proxy(echoCache, {
    get(parent, prop) {
      registerContextAsDependent()

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
      if (prop === '_setShouldUpdate') {
        return (func: (prev: any, next: any) => boolean) => {
          shouldUpdate = func
        }
      }

      return state?.[prop]
    },
    set(obj, prop, value) {
      const currentValue = state[prop]
      if (shouldUpdate(currentValue, value)) {
        // $FlowFixMe
        state[prop] = value
        // console.log('set', prop, value, dependents)

        // todo
        //  diallow setting within an observer.
        //  eventually allow setting within an observer.

        for (const ctx of dependents) {
          // Whenever there is a change, notify dependents.
          // todo: batch updates
          //   Allow set to be called multiple times before callbacks are called.
          ctx.onChange()
        }
      }
      return true
    },
  })

  const createCtx = peek(creationContexts)
  // console.log('createCtx', createCtx)
  // console.log('init', init)
  if (createCtx) {
    // This runs during the first call of the recompute function.
    // Any nonr objects created during a recompute
    // need to be blocked, and instead merged into the
    // the matching original object.
    // the observer is part of the nonr which should remember creations made within its context.
    createCtx?.registerCreation(proxy)
    // console.warn('registerCreation', createCtx.init, init)
  }

  const recomputeCtx = peek(recomputeContexts)
  // console.log('recomputeCtx', recomputeCtx)
  // console.log('creations', creations)
  if (recomputeCtx) {
    // This runs when a subsequent recompute calls creates a nonr obj.
    // Instead of returning a new nonr obj in this case,
    // we need to return the same nonr obj that was created the first time recompute function was called.
    const item = recomputeCtx.creations[recomputeCtx.index]
    recomputeCtx.index++
    if (item) {
      // console.warn('blocked nonr obj')
      return item
    }
  }

  console.warn('created new nonr obj', init)
  return proxy
}

// const y = (
//   name: string | function,
//   props?: { [string]: any },
//   ...children: ?Array<any>
// ): NonrState => {
//   if (typeof name === 'function') {
//     // This is for <${NestedComponent}/>.
//     return name()
//   }
//
//   // Every element is associated with a nonr state via closure.
//   const el = h(name, props, ...children)
//   const n = nonr(() => {
//     // console.log('el')
//     return el
//   })
//   return n
// }

// type htmlTag = (strings: Array<string>, ...keys: Array<any>) => any
//
// export const html: htmlTag = function (
//   strings: Array<string>,
//   ...keys: Array<any>
// ) {
//   // Intercept the parsing of the tagged string.
//   const f = htm.bind(y)
//   const n = f(strings, ...keys)
//   const el = typeof n === 'function' ? n() : n
//
//   return el
// }

// export const html = htm.bind(h)
