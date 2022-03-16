// @flow

// import html from './nonr/html.js'
import { nonr, html } from './nonr/nonr.js'

let count = nonr({
  counter: 0,
})

console.log('asjshs')

const View = nonr(() => {
  let el = html`<span>Count: ${count.counter}</span>`
  console.log('el', el.innerHTML)
  // setInterval(() => {
  //   // Observable changes:
  //   count++
  //
  //   // Re-run the observer:
  //   // This happens when going through the set of listeners
  //   const nextEl = html`<span>Count: ${count}</span>`
  //
  //   // Use replaceWith:
  //   // After calling each listener, if there was a previous return value,
  //   // and it was an element with a .replaceWith function, call it.
  //   el.replaceWith(nextEl)
  //   el = nextEl
  // }, 1000)
  return el
})

setInterval(() => {
  count.counter++
}, 1000)

const App = () => html`
  <div>
    <h2>counter using nonr</h2>
    <${View} />
  </div>
`

// console.log('App', App())
// console.log('typeof App', typeof App())

document.body?.appendChild(App())
