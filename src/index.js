// @flow

// import html from './nonr/html.js'
import { nonr, html } from './nonr/nonr.js'

let count = nonr({
  counter: 0,
})

console.log('asjshs')

const View = nonr(() => html`<span>Count: ${count.counter}</span>`)

// setInterval(() => {
//   count.counter++
// }, 1000)

const App = () => html`
  <div>
    <h2>counter using nonr</h2>
    <${View} />
    <button
      onclick=${() => {
        console.log('increment')
        count.counter++
      }}
    >
      Click
    </button>
  </div>
`

// console.log('App', App())
// console.log('typeof App', typeof App())

document.body?.appendChild(App())
