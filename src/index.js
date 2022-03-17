// @flow

import css from 'csz'
import { nonr } from './nonr/nonr.js'
import { html } from './nonr/html.js'
import View from './components/View.js'

import Text from './components/Text.js'

let count = nonr({
  counter: 0,
})

const Counter = nonr(() => html`<${Text}>Count: ${count.counter}</${Text}>`)

const styles = css`
  display: flex;
  flex-direction: column;

  background-color: red;
`

const App = () => html`
  <${View} className=${styles}>
    <span>counter using nonr</span>
    <${Counter} />
    <button
      onclick=${() => {
        console.log('increment')
        count.counter++
      }}
    >
      Click
    </button>
  </View>
`

document.body?.appendChild(App())
