// @flow

import { nonr, html } from './nonr/nonr.js'

let count = nonr({
  counter: 0,
})

const View = nonr(() => html`<span>Count: ${count.counter}</span>`)

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

document.body?.appendChild(App())
